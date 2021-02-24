import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {CrmAosQuoteService} from "../../../services/crm-aos-quote.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AddAosQuoteComponent} from "./add-aos-quote/add-aos-quote.component";
import {AosQuotes} from "../../../../core/models/aosQuotes";
import {DeleteAosQuoteComponent} from "./delete-aos-quote/delete-aos-quote.component";
import {BehaviorSubject, fromEvent, merge, Observable} from "rxjs";
import {DataSource} from "@angular/cdk/table";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-aos-quotes',
  templateUrl: './aos-quotes.component.html',
  styleUrls: ['./aos-quotes.component.scss']
})
export class AosQuotesComponent implements OnInit {
  
  displayedColumns = [
    'name',
    // 'date_entered',
    // 'date_modified',
    // 'modified_user_id',
    // 'created_by',
    'description',
    // 'deleted',
    // 'assigned_user_id',
    // 'approval_issue',
    // 'billing_account_id',
    // 'billing_contact_id',
    // 'billing_address_street',
    // 'billing_address_city',
    // 'billing_address_state',
    // 'billing_address_postalcode',
    // 'billing_address_country',
    // 'shipping_address_street',
    // 'shipping_address_city',
    // 'shipping_address_state',
    // 'shipping_address_postalcode',
    // 'shipping_address_country',
    'expiration',
    // 'number',
    // 'opportunity_id',
    // 'template_ddown_c',
    'total_amt',
    // 'total_amt_usdollar',
    // 'subtotal_amount',
    // 'subtotal_amount_usdollar',
    // 'discount_amount',
    // 'discount_amount_usdollar',
    // 'tax_amount',
    // 'tax_amount_usdollar',
    // 'shipping_amount',
    // 'shipping_amount_usdollar',
    // 'shipping_tax',
    // 'shipping_tax_amt',
    // 'shipping_tax_amt_usdollar',
    'total_amount',
    // 'total_amount_usdollar',
    'currency_id',
    // 'stage',
    // 'term',
    // 'terms_c',
    // 'approval_status',
    // 'invoice_status',
    // 'subtotal_tax_amount',
    // 'subtotal_tax_amount_usdollar',
    'actions'
  ];
  
  //aosQuoteService: LeadService | null;
  aosQuoteDataSource: AosQuoteDataSource | null;
  //aosQuote:Leads = new Leads();
  index: number;
  id: number;
  isLoading:boolean = true;
  
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public crmAosQuoteService: CrmAosQuoteService
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
    let aosQuote = new AosQuotes();
    const dialogRef = this.dialog.open(AddAosQuoteComponent, {
      data: aosQuote,
      width: '600px'
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside aosQuoteService
        await this.crmAosQuoteService.createAosQuote(this.crmAosQuoteService.aosQuoteData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: AosQuotes };
          this.crmAosQuoteService.dataChange.value.push(response.data);
          this.refreshTable();
        });
      }
    });
  }
  
  startEdit(i: number, aosQuote:AosQuotes) {
    // this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(AddAosQuoteComponent, {
      data: aosQuote,
      width: '600px'
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside aosQuoteService by id
        const foundIndex = this.crmAosQuoteService.dataChange.value.findIndex(x => x.id === aosQuote.id);
        await this.crmAosQuoteService.updateAosQuote(aosQuote.id, this.crmAosQuoteService.aosQuoteData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: AosQuotes };
          this.crmAosQuoteService.dataChange.value[foundIndex] = response.data;
          
          // And lastly refresh table
          this.refreshTable();
        });
      }
    });
  }
  
  deleteItem(i: number, aosQuote:AosQuotes) {
    this.index = i;
    //this.id = id;
    const dialogRef = this.dialog.open(DeleteAosQuoteComponent, {
      data: aosQuote
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        
        const foundIndex = this.crmAosQuoteService.dataChange.value.findIndex(x => x.id === aosQuote.id);
        this.crmAosQuoteService.deleteAosQuote(this.crmAosQuoteService.aosQuoteData.id).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: AosQuotes };
          //this.aosQuoteService.dataChange.value[foundIndex] = response.data;
          // for delete we use splice in order to remove single object from aosQuoteService
          this.crmAosQuoteService.dataChange.value.splice(foundIndex, 1);
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
    if (this.aosQuoteDataSource._paginator.hasNextPage()) {
      this.aosQuoteDataSource._paginator.nextPage();
      this.aosQuoteDataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.aosQuoteDataSource._paginator.hasPreviousPage()) {
      this.aosQuoteDataSource._paginator.previousPage();
      this.aosQuoteDataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.aosQuoteDataSource.filter = '';
      this.aosQuoteDataSource.filter = this.filter.nativeElement.value;
    }*/
  
  
  
  public loadData() {
    // this.crmLeadService = new crmLeadService(this.httpClient);
    this.aosQuoteDataSource = new AosQuoteDataSource(this.crmAosQuoteService, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
    // .debounceTime(150)
    // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.aosQuoteDataSource) {
          return;
        }
        this.aosQuoteDataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class AosQuoteDataSource extends DataSource<AosQuotes> {
  _filterChange = new BehaviorSubject('');
  
  get filter(): string {
    return this._filterChange.value;
  }
  
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  
  filteredData: AosQuotes[] = [];
  renderedData: AosQuotes[] = [];
  
  constructor(public _crmAosQuoteService: CrmAosQuoteService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
  
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<AosQuotes[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._crmAosQuoteService.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];
    
    this._crmAosQuoteService.getDataAosQuotes();
    
    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        if (this._crmAosQuoteService.data) {
          this.filteredData = this._crmAosQuoteService.data.slice().filter((aosQuote: AosQuotes) => {
            let searchStr = '', aosQuoteKeys = Object.keys(aosQuote);
            for (let i = 0 ; i < aosQuoteKeys.length ; i++) {
              let aosQuoteKey = aosQuoteKeys[i];
              if(aosQuote[aosQuoteKey]) {
                searchStr += aosQuote[aosQuoteKey]+''.toLowerCase();
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
  sortData(data: AosQuotes[]): AosQuotes[] {
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
        case 'approval_issue': [propertyA, propertyB] = [a.approval_issue, b.approval_issue]; break;
        case 'billing_account_id': [propertyA, propertyB] = [a.billing_account_id, b.billing_account_id]; break;
        case 'billing_contact_id': [propertyA, propertyB] = [a.billing_contact_id, b.billing_contact_id]; break;
        case 'billing_address_street': [propertyA, propertyB] = [a.billing_address_street, b.billing_address_street]; break;
        case 'billing_address_city': [propertyA, propertyB] = [a.billing_address_city, b.billing_address_city]; break;
        case 'billing_address_state': [propertyA, propertyB] = [a.billing_address_state, b.billing_address_state]; break;
        case 'billing_address_postalcode': [propertyA, propertyB] = [a.billing_address_postalcode, b.billing_address_postalcode]; break;
        case 'billing_address_country': [propertyA, propertyB] = [a.billing_address_country, b.billing_address_country]; break;
        case 'shipping_address_street': [propertyA, propertyB] = [a.shipping_address_street, b.shipping_address_street]; break;
        case 'shipping_address_city': [propertyA, propertyB] = [a.shipping_address_city, b.shipping_address_city]; break;
        case 'shipping_address_state': [propertyA, propertyB] = [a.shipping_address_state, b.shipping_address_state]; break;
        case 'shipping_address_postalcode': [propertyA, propertyB] = [a.shipping_address_postalcode, b.shipping_address_postalcode]; break;
        case 'shipping_address_country': [propertyA, propertyB] = [a.shipping_address_country, b.shipping_address_country]; break;
        case 'expiration': [propertyA, propertyB] = [a.expiration.toString(), b.expiration.toString()]; break;
        case 'number': [propertyA, propertyB] = [a.number, b.number]; break;
        case 'opportunity_id': [propertyA, propertyB] = [a.opportunity_id, b.opportunity_id]; break;
        case 'template_ddown_c': [propertyA, propertyB] = [a.template_ddown_c, b.template_ddown_c]; break;
        case 'total_amt': [propertyA, propertyB] = [a.total_amt, b.total_amt]; break;
        case 'total_amt_usdollar': [propertyA, propertyB] = [a.total_amt_usdollar, b.total_amt_usdollar]; break;
        case 'subtotal_amount': [propertyA, propertyB] = [a.subtotal_amount, b.subtotal_amount]; break;
        case 'subtotal_amount_usdollar': [propertyA, propertyB] = [a.subtotal_amount_usdollar, b.subtotal_amount_usdollar]; break;
        case 'discount_amount': [propertyA, propertyB] = [a.discount_amount, b.discount_amount]; break;
        case 'discount_amount_usdollar': [propertyA, propertyB] = [a.discount_amount_usdollar, b.discount_amount_usdollar]; break;
        case 'tax_amount': [propertyA, propertyB] = [a.tax_amount, b.tax_amount]; break;
        case 'tax_amount_usdollar': [propertyA, propertyB] = [a.tax_amount_usdollar, b.tax_amount_usdollar]; break;
        case 'shipping_amount': [propertyA, propertyB] = [a.shipping_amount, b.shipping_amount]; break;
        case 'shipping_amount_usdollar': [propertyA, propertyB] = [a.shipping_amount_usdollar, b.shipping_amount_usdollar]; break;
        case 'shipping_tax': [propertyA, propertyB] = [a.shipping_tax, b.shipping_tax]; break;
        case 'shipping_tax_amt': [propertyA, propertyB] = [a.shipping_tax_amt, b.shipping_tax_amt]; break;
        case 'shipping_tax_amt_usdollar': [propertyA, propertyB] = [a.shipping_tax_amt_usdollar, b.shipping_tax_amt_usdollar]; break;
        case 'total_amount': [propertyA, propertyB] = [a.total_amount, b.total_amount]; break;
        case 'total_amount_usdollar': [propertyA, propertyB] = [a.total_amount_usdollar, b.total_amount_usdollar]; break;
        case 'currency_id': [propertyA, propertyB] = [a.currency_id, b.currency_id]; break;
        case 'stage': [propertyA, propertyB] = [a.stage, b.stage]; break;
        case 'term': [propertyA, propertyB] = [a.term, b.term]; break;
        case 'terms_c': [propertyA, propertyB] = [a.terms_c, b.terms_c]; break;
        case 'approval_status': [propertyA, propertyB] = [a.approval_status, b.approval_status]; break;
        case 'invoice_status': [propertyA, propertyB] = [a.invoice_status, b.invoice_status]; break;
        case 'subtotal_tax_amount': [propertyA, propertyB] = [a.subtotal_tax_amount, b.subtotal_tax_amount]; break;
        case 'subtotal_tax_amount_usdollar': [propertyA, propertyB] = [a.subtotal_tax_amount_usdollar, b.subtotal_tax_amount_usdollar]; break;
      }
      
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      
      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }

}
