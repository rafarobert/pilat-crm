import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BehaviorSubject, fromEvent, merge, Observable} from "rxjs";
import {DataSource} from "@angular/cdk/table";
import {map} from "rxjs/operators";
import {Accounts} from "../../../../core/models/accounts";
import {DeleteAccountComponent} from "./delete-account/delete-account.component";
import {AddAccountComponent} from "./add-account/add-account.component";
import {CrmAccountService} from "../../../services/crm-account.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  
  displayedColumns = [
    'name',
    // 'date_entered',
    // 'date_modified',
    // 'modified_user_id',
    // 'created_by',
    'description',
    // 'deleted',
    // 'assigned_user_id',
    // 'account_type',
    // 'industry',
    // 'annual_revenue',
    // 'phone_fax',
    'billing_address_street',
    'billing_address_city',
    'billing_address_state',
    // 'billing_address_postalcode',
    // 'billing_address_country',
    // 'rating',
    'phone_office',
    // 'phone_alternate',
    // 'website',
    // 'ownership',
    // 'employees',
    // 'ticker_symbol',
    // 'shipping_address_street',
    // 'shipping_address_city',
    // 'shipping_address_state',
    // 'shipping_address_postalcode',
    // 'shipping_address_country',
    // 'parent_id',
    // 'sic_code',
    // 'campaign_id',
    'actions'
  ];
  
  //accountService: LeadService | null;
  accountDataSource: AccountDataSource | null;
  //account:Leads = new Leads();
  index: number;
  id: number;
  isLoading:boolean = true;
  
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public crmAccountService: CrmAccountService
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
    let account = new Accounts();
    const dialogRef = this.dialog.open(AddAccountComponent, {
      data: account,
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside accountService
        await this.crmAccountService.createAccount(this.crmAccountService.accountData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Accounts };
          this.crmAccountService.dataChange.value.push(response.data);
          this.refreshTable();
        });
      }
    });
  }
  
  startEdit(i: number, account:Accounts) {
    // this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(AddAccountComponent, {
      data: account
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside accountService by id
        const foundIndex = this.crmAccountService.dataChange.value.findIndex(x => x.id === account.id);
        await this.crmAccountService.updateAccount(account.id, this.crmAccountService.accountData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Accounts };
          this.crmAccountService.dataChange.value[foundIndex] = response.data;
          
          // And lastly refresh table
          this.refreshTable();
        });
      }
    });
  }
  
  deleteItem(i: number, account:Accounts) {
    this.index = i;
    //this.id = id;
    const dialogRef = this.dialog.open(DeleteAccountComponent, {
      data: account
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        
        const foundIndex = this.crmAccountService.dataChange.value.findIndex(x => x.id === account.id);
        this.crmAccountService.deleteAccount(this.crmAccountService.accountData.id).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Accounts };
          //this.accountService.dataChange.value[foundIndex] = response.data;
          // for delete we use splice in order to remove single object from accountService
          this.crmAccountService.dataChange.value.splice(foundIndex, 1);
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
    if (this.accountDataSource._paginator.hasNextPage()) {
      this.accountDataSource._paginator.nextPage();
      this.accountDataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.accountDataSource._paginator.hasPreviousPage()) {
      this.accountDataSource._paginator.previousPage();
      this.accountDataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.accountDataSource.filter = '';
      this.accountDataSource.filter = this.filter.nativeElement.value;
    }*/
  
  
  
  public loadData() {
    // this.crmLeadService = new crmLeadService(this.httpClient);
    this.accountDataSource = new AccountDataSource(this.crmAccountService, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
    // .debounceTime(150)
    // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.accountDataSource) {
          return;
        }
        this.accountDataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class AccountDataSource extends DataSource<Accounts> {
  _filterChange = new BehaviorSubject('');
  
  get filter(): string {
    return this._filterChange.value;
  }
  
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  
  filteredData: Accounts[] = [];
  renderedData: Accounts[] = [];
  
  constructor(public _crmAccountService: CrmAccountService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
  
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Accounts[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._crmAccountService.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];
    
    this._crmAccountService.getDataAccounts();
    
    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        if (this._crmAccountService.data) {
          this.filteredData = this._crmAccountService.data.slice().filter((account: Accounts) => {
            let searchStr = '', accountKeys = Object.keys(account);
            for (let i = 0 ; i < accountKeys.length ; i++) {
              let accountKey = accountKeys[i];
              if(account[accountKey]) {
                searchStr += account[accountKey]+''.toLowerCase();
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
  sortData(data: Accounts[]): Accounts[] {
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
        case 'account_type': [propertyA, propertyB] = [a.account_type, b.account_type]; break;
        case 'industry': [propertyA, propertyB] = [a.industry, b.industry]; break;
        case 'annual_revenue': [propertyA, propertyB] = [a.annual_revenue, b.annual_revenue]; break;
        case 'phone_fax': [propertyA, propertyB] = [a.phone_fax, b.phone_fax]; break;
        case 'billing_address_street': [propertyA, propertyB] = [a.billing_address_street, b.billing_address_street]; break;
        case 'billing_address_city': [propertyA, propertyB] = [a.billing_address_city, b.billing_address_city]; break;
        case 'billing_address_state': [propertyA, propertyB] = [a.billing_address_state, b.billing_address_state]; break;
        case 'billing_address_postalcode': [propertyA, propertyB] = [a.billing_address_postalcode, b.billing_address_postalcode]; break;
        case 'billing_address_country': [propertyA, propertyB] = [a.billing_address_country, b.billing_address_country]; break;
        case 'rating': [propertyA, propertyB] = [a.rating, b.rating]; break;
        case 'phone_office': [propertyA, propertyB] = [a.phone_office, b.phone_office]; break;
        case 'phone_alternate': [propertyA, propertyB] = [a.phone_alternate, b.phone_alternate]; break;
        case 'website': [propertyA, propertyB] = [a.website, b.website]; break;
        case 'ownership': [propertyA, propertyB] = [a.ownership, b.ownership]; break;
        case 'employees': [propertyA, propertyB] = [a.employees, b.employees]; break;
        case 'ticker_symbol': [propertyA, propertyB] = [a.ticker_symbol, b.ticker_symbol]; break;
        case 'shipping_address_street': [propertyA, propertyB] = [a.shipping_address_street, b.shipping_address_street]; break;
        case 'shipping_address_city': [propertyA, propertyB] = [a.shipping_address_city, b.shipping_address_city]; break;
        case 'shipping_address_state': [propertyA, propertyB] = [a.shipping_address_state, b.shipping_address_state]; break;
        case 'shipping_address_postalcode': [propertyA, propertyB] = [a.shipping_address_postalcode, b.shipping_address_postalcode]; break;
        case 'shipping_address_country': [propertyA, propertyB] = [a.shipping_address_country, b.shipping_address_country]; break;
        case 'parent_id': [propertyA, propertyB] = [a.parent_id, b.parent_id]; break;
        case 'sic_code': [propertyA, propertyB] = [a.sic_code, b.sic_code]; break;
        case 'campaign_id': [propertyA, propertyB] = [a.campaign_id, b.campaign_id]; break;
      }
      
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      
      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
