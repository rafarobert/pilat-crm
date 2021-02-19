import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BehaviorSubject, fromEvent, merge, Observable} from "rxjs";
import {DataSource} from "@angular/cdk/table";
import {map} from "rxjs/operators";
import {Leads} from "../../../../core/models/leads";
import {AddLeadComponent} from "./add-lead/add-lead.component";
import {DeleteLeadComponent} from "./delete-lead/delete-lead.component";
import {CrmLeadService} from "../../../services/crm-lead.service";

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
  
  displayedColumns = [
    // 'date_entered',
    // 'date_modified',
    // 'modified_user_id',
    // 'created_by',
    'description',
    // 'deleted',
    // 'assigned_user_id',
    'salutation',
    'first_name',
    'last_name',
    'title',
    // 'photo',
    // 'department',
    // 'do_not_call',
    'phone_home',
    'phone_mobile',
    // 'phone_work',
    // 'phone_other',
    // 'phone_fax',
    // 'lawful_basis',
    // 'date_reviewed',
    // 'lawful_basis_source',
    'primary_address_street',
    'primary_address_city',
    'primary_address_state',
    // 'primary_address_postalcode',
    // 'primary_address_country',
    // 'alt_address_street',
    // 'alt_address_city',
    // 'alt_address_state',
    // 'alt_address_postalcode',
    // 'alt_address_country',
    // 'assistant',
    // 'assistant_phone',
    // 'converted',
    // 'refered_by',
    // 'lead_source',
    // 'lead_source_description',
    // 'status',
    // 'status_description',
    // 'reports_to_id',
    // 'account_name',
    // 'account_description',
    // 'contact_id',
    // 'account_id',
    // 'opportunity_id',
    // 'opportunity_name',
    // 'opportunity_amount',
    // 'campaign_id',
    // 'birthdate',
    // 'portal_name',
    // 'portal_app',
    // 'website',
    'actions',
  ];
  leadDataSource: LeadDataSource | null;
  index: number;
  id: number;
  isLoading:boolean = true;
  
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public crmLeadService: CrmLeadService
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
    let lead = new Leads();
    const dialogRef = this.dialog.open(AddLeadComponent, {
      width:'500px',
      data: lead,
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside leadService
        await this.crmLeadService.createLead(this.crmLeadService.leadData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Leads };
          this.crmLeadService.dataChange.value.push(response.data);
          this.refreshTable();
        });
      }
    });
  }
  
  startEdit(i: number, lead:Leads) {
    // this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(AddLeadComponent, {
      width:'500px',
      data: lead
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside leadService by id
        const foundIndex = this.crmLeadService.dataChange.value.findIndex(x => x.id === lead.id);
        await this.crmLeadService.updateLead(lead.id, this.crmLeadService.leadData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Leads };
          this.crmLeadService.dataChange.value[foundIndex] = response.data;
          
          // And lastly refresh table
          this.refreshTable();
        });
      }
    });
  }
  
  deleteItem(i: number, lead:Leads) {
    this.index = i;
    //this.id = id;
    const dialogRef = this.dialog.open(DeleteLeadComponent, {
      data: lead
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        
        const foundIndex = this.crmLeadService.dataChange.value.findIndex(x => x.id === lead.id);
        this.crmLeadService.deleteLead(this.crmLeadService.leadData.id).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Leads };
          //this.leadService.dataChange.value[foundIndex] = response.data;
          // for delete we use splice in order to remove single object from leadService
          this.crmLeadService.dataChange.value.splice(foundIndex, 1);
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
    if (this.leadDataSource._paginator.hasNextPage()) {
      this.leadDataSource._paginator.nextPage();
      this.leadDataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.leadDataSource._paginator.hasPreviousPage()) {
      this.leadDataSource._paginator.previousPage();
      this.leadDataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.leadDataSource.filter = '';
      this.leadDataSource.filter = this.filter.nativeElement.value;
    }*/
  
  
  
  public loadData() {
    // this.crmLeadService = new crmLeadService(this.httpClient);
    this.leadDataSource = new LeadDataSource(this.crmLeadService, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
    // .debounceTime(150)
    // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.leadDataSource) {
          return;
        }
        this.leadDataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class LeadDataSource extends DataSource<Leads> {
  _filterChange = new BehaviorSubject('');
  
  get filter(): string {
    return this._filterChange.value;
  }
  
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  
  filteredData: Leads[] = [];
  renderedData: Leads[] = [];
  
  constructor(public _crmLeadService: CrmLeadService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
  
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Leads[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._crmLeadService.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];
    
    this._crmLeadService.getDataLeads([],{where:{leadsCstm:{etapas_c:{$ne:null}}}});
    
    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        if (this._crmLeadService.data) {
          this.filteredData = this._crmLeadService.data.slice().filter((lead: Leads) => {
            let searchStr = '', leadKeys = Object.keys(lead);
            for (let i = 0 ; i < leadKeys.length ; i++) {
              let leadKey = leadKeys[i];
              if(lead[leadKey]) {
                searchStr += lead[leadKey]+''.toLowerCase();
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
  sortData(data: Leads[]): Leads[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      
      switch (this._sort.active) {
        case 'date_entered': [propertyA, propertyB] = [a.date_entered.toString(), b.date_entered.toString()]; break;
        case 'date_modified': [propertyA, propertyB] = [a.date_modified.toString(), b.date_modified.toString()]; break;
        case 'modified_user_id': [propertyA, propertyB] = [a.modified_user_id, b.modified_user_id]; break;
        case 'created_by': [propertyA, propertyB] = [a.created_by, b.created_by]; break;
        case 'description': [propertyA, propertyB] = [a.description, b.description]; break;
        case 'deleted': [propertyA, propertyB] = [a.deleted, b.deleted]; break;
        case 'assigned_user_id': [propertyA, propertyB] = [a.assigned_user_id, b.assigned_user_id]; break;
        case 'salutation': [propertyA, propertyB] = [a.salutation, b.salutation]; break;
        case 'first_name': [propertyA, propertyB] = [a.first_name, b.first_name]; break;
        case 'last_name': [propertyA, propertyB] = [a.last_name, b.last_name]; break;
        case 'title': [propertyA, propertyB] = [a.title, b.title]; break;
        case 'photo': [propertyA, propertyB] = [a.photo, b.photo]; break;
        case 'department': [propertyA, propertyB] = [a.department, b.department]; break;
        case 'do_not_call': [propertyA, propertyB] = [a.do_not_call, b.do_not_call]; break;
        case 'phone_home': [propertyA, propertyB] = [a.phone_home, b.phone_home]; break;
        case 'phone_mobile': [propertyA, propertyB] = [a.phone_mobile, b.phone_mobile]; break;
        case 'phone_work': [propertyA, propertyB] = [a.phone_work, b.phone_work]; break;
        case 'phone_other': [propertyA, propertyB] = [a.phone_other, b.phone_other]; break;
        case 'phone_fax': [propertyA, propertyB] = [a.phone_fax, b.phone_fax]; break;
        case 'lawful_basis': [propertyA, propertyB] = [a.lawful_basis, b.lawful_basis]; break;
        case 'date_reviewed': [propertyA, propertyB] = [a.date_reviewed.toString(), b.date_reviewed.toString()]; break;
        case 'lawful_basis_source': [propertyA, propertyB] = [a.lawful_basis_source, b.lawful_basis_source]; break;
        case 'primary_address_street': [propertyA, propertyB] = [a.primary_address_street, b.primary_address_street]; break;
        case 'primary_address_city': [propertyA, propertyB] = [a.primary_address_city, b.primary_address_city]; break;
        case 'primary_address_state': [propertyA, propertyB] = [a.primary_address_state, b.primary_address_state]; break;
        case 'primary_address_postalcode': [propertyA, propertyB] = [a.primary_address_postalcode, b.primary_address_postalcode]; break;
        case 'primary_address_country': [propertyA, propertyB] = [a.primary_address_country, b.primary_address_country]; break;
        case 'alt_address_street': [propertyA, propertyB] = [a.alt_address_street, b.alt_address_street]; break;
        case 'alt_address_city': [propertyA, propertyB] = [a.alt_address_city, b.alt_address_city]; break;
        case 'alt_address_state': [propertyA, propertyB] = [a.alt_address_state, b.alt_address_state]; break;
        case 'alt_address_postalcode': [propertyA, propertyB] = [a.alt_address_postalcode, b.alt_address_postalcode]; break;
        case 'alt_address_country': [propertyA, propertyB] = [a.alt_address_country, b.alt_address_country]; break;
        case 'assistant': [propertyA, propertyB] = [a.assistant, b.assistant]; break;
        case 'assistant_phone': [propertyA, propertyB] = [a.assistant_phone, b.assistant_phone]; break;
        case 'converted': [propertyA, propertyB] = [a.converted, b.converted]; break;
        case 'refered_by': [propertyA, propertyB] = [a.refered_by, b.refered_by]; break;
        case 'lead_source': [propertyA, propertyB] = [a.lead_source, b.lead_source]; break;
        case 'lead_source_description': [propertyA, propertyB] = [a.lead_source_description, b.lead_source_description]; break;
        case 'status': [propertyA, propertyB] = [a.status, b.status]; break;
        case 'status_description': [propertyA, propertyB] = [a.status_description, b.status_description]; break;
        case 'reports_to_id': [propertyA, propertyB] = [a.reports_to_id, b.reports_to_id]; break;
        case 'account_name': [propertyA, propertyB] = [a.account_name, b.account_name]; break;
        case 'account_description': [propertyA, propertyB] = [a.account_description, b.account_description]; break;
        case 'contact_id': [propertyA, propertyB] = [a.contact_id, b.contact_id]; break;
        case 'account_id': [propertyA, propertyB] = [a.account_id, b.account_id]; break;
        case 'opportunity_id': [propertyA, propertyB] = [a.opportunity_id, b.opportunity_id]; break;
        case 'opportunity_name': [propertyA, propertyB] = [a.opportunity_name, b.opportunity_name]; break;
        case 'opportunity_amount': [propertyA, propertyB] = [a.opportunity_amount, b.opportunity_amount]; break;
        case 'campaign_id': [propertyA, propertyB] = [a.campaign_id, b.campaign_id]; break;
        case 'birthdate': [propertyA, propertyB] = [a.birthdate.toString(), b.birthdate.toString()]; break;
        case 'portal_name': [propertyA, propertyB] = [a.portal_name, b.portal_name]; break;
        case 'portal_app': [propertyA, propertyB] = [a.portal_app, b.portal_app]; break;
        case 'website': [propertyA, propertyB] = [a.website, b.website]; break;      }
      
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      
      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
  
}
