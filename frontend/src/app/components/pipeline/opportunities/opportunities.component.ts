import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {CrmOpportunityService} from "../../../services/crm-opportunity.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Opportunities} from "../../../../core/models/opportunities";
import {AddOpportunityComponent} from "./add-opportunity/add-opportunity.component";
import {DeleteOpportunityComponent} from "./delete-opportunity/delete-opportunity.component";
import {BehaviorSubject, fromEvent, merge, Observable} from "rxjs";
import {DataSource} from "@angular/cdk/table";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent implements OnInit {
  
  displayedColumns = [
    'name',
    // 'date_entered',
    // 'date_modified',
    // 'modified_user_id',
    // 'created_by',
    'description',
    // 'deleted',
    // 'assigned_user_id',
    // 'opportunity_type',
    // 'campaign_id',
    // 'lead_source',
    'amount',
    // 'amount_usdollar',
    'currency_id',
    // 'date_closed',
    // 'next_step',
    // 'sales_stage',
    // 'probability'
    'actions'
  ];
  opportunityDataSource: LeadDataSource | null;
  index: number;
  id: number;
  isLoading:boolean = true;
  
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public crmOpportunityService: CrmOpportunityService
  ) {}
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;
  
  ngOnInit() {
    this.loadData();
  }
  
  refresh() {
    this.loadData();
  }
  
  addNew() {
    let opportunity = new Opportunities();
    const dialogRef = this.dialog.open(AddOpportunityComponent, {
      data: {
        opportunity:opportunity,
      },
      width: '600px'
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside leadService
        await this.crmOpportunityService.createOpportunity(this.crmOpportunityService.opportunityData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Opportunities };
          this.crmOpportunityService.dataChange.value.push(response.data);
          this.refreshTable();
        });
      }
    });
  }
  
  startEdit(i: number, opportunity:Opportunities) {
    // this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(AddOpportunityComponent, {
      data: {
        opportunity:opportunity
      },
      width: '600px'
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside leadService by id
        const foundIndex = this.crmOpportunityService.dataChange.value.findIndex(x => x.id === opportunity.id);
        await this.crmOpportunityService.updateOpportunity(opportunity.id, this.crmOpportunityService.opportunityData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Opportunities };
          this.crmOpportunityService.dataChange.value[foundIndex] = response.data;
          
          // And lastly refresh table
          this.refreshTable();
        });
      }
    });
  }
  
  deleteItem(i: number, opportunity:Opportunities) {
    this.index = i;
    //this.id = id;
    const dialogRef = this.dialog.open(DeleteOpportunityComponent, {
      data: opportunity
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        
        const foundIndex = this.crmOpportunityService.dataChange.value.findIndex(x => x.id === opportunity.id);
        this.crmOpportunityService.deleteOpportunity(this.crmOpportunityService.opportunityData.id).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Opportunities };
          //this.leadService.dataChange.value[foundIndex] = response.data;
          // for delete we use splice in order to remove single object from leadService
          this.crmOpportunityService.dataChange.value.splice(foundIndex, 1);
          this.refreshTable();
        })
      }
    });
  }
  
  
  private refreshTable() {
    // Refreshing table using paginator
    // Thanks yeager-j for tips
    // https://github.com/marinantonio/angular-mat-table-crud/issues/12
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  
  
  /*   // If you don't need a filter or a pagination this can be simplified, you just use code from else block
    // OLD METHOD:
    // if there's a paginator active we're using it for refresh
    if (this.opportunityDataSource._paginator.hasNextPage()) {
      this.opportunityDataSource._paginator.nextPage();
      this.opportunityDataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.opportunityDataSource._paginator.hasPreviousPage()) {
      this.opportunityDataSource._paginator.previousPage();
      this.opportunityDataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.opportunityDataSource.filter = '';
      this.opportunityDataSource.filter = this.filter.nativeElement.value;
    }*/
  
  
  
  public loadData() {
    // this.crmLeadService = new crmLeadService(this.httpClient);
    this.opportunityDataSource = new LeadDataSource(this.crmOpportunityService, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
    // .debounceTime(150)
    // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.opportunityDataSource) {
          return;
        }
        this.opportunityDataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class LeadDataSource extends DataSource<Opportunities> {
  _filterChange = new BehaviorSubject('');
  
  get filter(): string {
    return this._filterChange.value;
  }
  
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  
  filteredData: Opportunities[] = [];
  renderedData: Opportunities[] = [];
  
  constructor(public _crmOpportunityService: CrmOpportunityService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
  
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Opportunities[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._crmOpportunityService.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];
    
    this._crmOpportunityService.getDataOpportunities();
    
    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        if (this._crmOpportunityService.data) {
          this.filteredData = this._crmOpportunityService.data.slice().filter((opportunity: Opportunities) => {
            let searchStr = '', opportunityKeys = Object.keys(opportunity);
            for (let i = 0 ; i < opportunityKeys.length ; i++) {
              let opportunityKey = opportunityKeys[i];
              if(opportunity[opportunityKey]) {
                searchStr += opportunity[opportunityKey]+''.toLowerCase();
              }
            }
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
        }
        
        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());
        
        // Grab the page's slice of the filtered sorted data.
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
        return this.renderedData;
      }
    ));
  }
  
  disconnect() {}
  
  
  /** Returns a sorted copy of the database data. */
  sortData(data: Opportunities[]): Opportunities[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      
      switch (this._sort.active) {
        case 'name': [propertyA, propertyB] = [a.name, b.name]; break;
        case 'date_entered': [propertyA, propertyB] = [a.date_entered.toString(), b.date_entered.toString()]; break;
        case 'date_modified': [propertyA, propertyB] = [a.date_modified.toString(), b.date_modified.toString()]; break;
        case 'modified_user_id': [propertyA, propertyB] = [a.modified_user_id, b.modified_user_id]; break;
        case 'created_by': [propertyA, propertyB] = [a.created_by, b.created_by]; break;
        case 'description': [propertyA, propertyB] = [a.description, b.description]; break;
        case 'deleted': [propertyA, propertyB] = [a.deleted, b.deleted]; break;
        case 'assigned_user_id': [propertyA, propertyB] = [a.assigned_user_id, b.assigned_user_id]; break;
        case 'opportunity_type': [propertyA, propertyB] = [a.opportunity_type, b.opportunity_type]; break;
        case 'campaign_id': [propertyA, propertyB] = [a.campaign_id, b.campaign_id]; break;
        case 'lead_source': [propertyA, propertyB] = [a.lead_source, b.lead_source]; break;
        case 'amount': [propertyA, propertyB] = [a.amount, b.amount]; break;
        case 'amount_usdollar': [propertyA, propertyB] = [a.amount_usdollar, b.amount_usdollar]; break;
        case 'currency_id': [propertyA, propertyB] = [a.currency_id, b.currency_id]; break;
        case 'date_closed': [propertyA, propertyB] = [a.date_closed.toString(), b.date_closed.toString()]; break;
        case 'next_step': [propertyA, propertyB] = [a.next_step, b.next_step]; break;
        case 'sales_stage': [propertyA, propertyB] = [a.sales_stage, b.sales_stage]; break;
        case 'probability': [propertyA, propertyB] = [a.probability, b.probability]; break;
      }
      
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      
      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
  
}
