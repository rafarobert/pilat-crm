import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {CrmCallService} from "../../../services/crm-call.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AddCallComponent} from "./add-call/add-call.component";
import {Calls} from "../../../../core/models/calls";
import {DeleteCallComponent} from "./delete-call/delete-call.component";
import {BehaviorSubject, fromEvent, merge, Observable} from "rxjs";
import {DataSource} from "@angular/cdk/table";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent implements OnInit {
  
  
  displayedColumns = [
    'name',
    // 'date_entered',
    // 'date_modified',
    // 'modified_user_id',
    // 'created_by',
    'description',
    // 'deleted',
    // 'assigned_user_id',
    // 'duration_hours',
    // 'duration_minutes',
    // 'date_start',
    // 'date_end',
    // 'parent_type',
    'status',
    // 'direction',
    // 'parent_id',
    // 'reminder_time',
    // 'email_reminder_time',
    'email_reminder_sent',
    // 'outlook_id',
    // 'repeat_type',
    // 'repeat_interval',
    // 'repeat_dow',
    // 'repeat_until',
    // 'repeat_count',
    // 'repeat_parent_id',
    // 'recurring_source',
    'actions'
  ];
  
  //callService: LeadService | null;
  callDataSource: CallDataSource | null;
  //call:Leads = new Leads();
  index: number;
  id: number;
  isLoading:boolean = true;
  
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public crmCallService: CrmCallService
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
    let call = new Calls();
    const dialogRef = this.dialog.open(AddCallComponent, {
      data: call,
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside callService
        await this.crmCallService.createCall(this.crmCallService.callData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Calls };
          this.crmCallService.dataChange.value.push(response.data);
          this.refreshTable();
        });
      }
    });
  }
  
  startEdit(i: number, call:Calls) {
    // this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(AddCallComponent, {
      data: call
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside callService by id
        const foundIndex = this.crmCallService.dataChange.value.findIndex(x => x.id === call.id);
        await this.crmCallService.updateCall(call.id, this.crmCallService.callData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Calls };
          this.crmCallService.dataChange.value[foundIndex] = response.data;
          
          // And lastly refresh table
          this.refreshTable();
        });
      }
    });
  }
  
  deleteItem(i: number, call:Calls) {
    this.index = i;
    //this.id = id;
    const dialogRef = this.dialog.open(DeleteCallComponent, {
      data: call
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        
        const foundIndex = this.crmCallService.dataChange.value.findIndex(x => x.id === call.id);
        this.crmCallService.deleteCall(this.crmCallService.callData.id).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Calls };
          //this.callService.dataChange.value[foundIndex] = response.data;
          // for delete we use splice in order to remove single object from callService
          this.crmCallService.dataChange.value.splice(foundIndex, 1);
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
    if (this.callDataSource._paginator.hasNextPage()) {
      this.callDataSource._paginator.nextPage();
      this.callDataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.callDataSource._paginator.hasPreviousPage()) {
      this.callDataSource._paginator.previousPage();
      this.callDataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.callDataSource.filter = '';
      this.callDataSource.filter = this.filter.nativeElement.value;
    }*/
  
  
  
  public loadData() {
    // this.crmLeadService = new crmLeadService(this.httpClient);
    this.callDataSource = new CallDataSource(this.crmCallService, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
    // .debounceTime(150)
    // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.callDataSource) {
          return;
        }
        this.callDataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class CallDataSource extends DataSource<Calls> {
  _filterChange = new BehaviorSubject('');
  
  get filter(): string {
    return this._filterChange.value;
  }
  
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  
  filteredData: Calls[] = [];
  renderedData: Calls[] = [];
  
  constructor(public _crmCallService: CrmCallService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
  
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Calls[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._crmCallService.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];
    
    this._crmCallService.getDataCalls();
    
    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        if (this._crmCallService.data) {
          this.filteredData = this._crmCallService.data.slice().filter((call: Calls) => {
            let searchStr = '', callKeys = Object.keys(call);
            for (let i = 0 ; i < callKeys.length ; i++) {
              let callKey = callKeys[i];
              if(call[callKey]) {
                searchStr += call[callKey]+''.toLowerCase();
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
  sortData(data: Calls[]): Calls[] {
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
        case 'duration_hours': [propertyA, propertyB] = [a.duration_hours, b.duration_hours]; break;
        case 'duration_minutes': [propertyA, propertyB] = [a.duration_minutes, b.duration_minutes]; break;
        case 'date_start': [propertyA, propertyB] = [a.date_start.toString(), b.date_start.toString()]; break;
        case 'date_end': [propertyA, propertyB] = [a.date_end.toString(), b.date_end.toString()]; break;
        case 'parent_type': [propertyA, propertyB] = [a.parent_type, b.parent_type]; break;
        case 'status': [propertyA, propertyB] = [a.status, b.status]; break;
        case 'direction': [propertyA, propertyB] = [a.direction, b.direction]; break;
        case 'parent_id': [propertyA, propertyB] = [a.parent_id, b.parent_id]; break;
        case 'reminder_time': [propertyA, propertyB] = [a.reminder_time, b.reminder_time]; break;
        case 'email_reminder_time': [propertyA, propertyB] = [a.email_reminder_time, b.email_reminder_time]; break;
        case 'email_reminder_sent': [propertyA, propertyB] = [a.email_reminder_sent, b.email_reminder_sent]; break;
        case 'outlook_id': [propertyA, propertyB] = [a.outlook_id, b.outlook_id]; break;
        case 'repeat_type': [propertyA, propertyB] = [a.repeat_type, b.repeat_type]; break;
        case 'repeat_interval': [propertyA, propertyB] = [a.repeat_interval, b.repeat_interval]; break;
        case 'repeat_dow': [propertyA, propertyB] = [a.repeat_dow, b.repeat_dow]; break;
        case 'repeat_until': [propertyA, propertyB] = [a.repeat_until.toString(), b.repeat_until.toString()]; break;
        case 'repeat_count': [propertyA, propertyB] = [a.repeat_count, b.repeat_count]; break;
        case 'repeat_parent_id': [propertyA, propertyB] = [a.repeat_parent_id, b.repeat_parent_id]; break;
        case 'recurring_source': [propertyA, propertyB] = [a.recurring_source, b.recurring_source]; break;
      }
      
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      
      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }

}
