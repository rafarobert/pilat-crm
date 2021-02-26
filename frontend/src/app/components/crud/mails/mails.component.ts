import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {PilatMailService} from "../../../../core/services/pilat-mail.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PilatMails} from "../../../../core/models/pilatMails";
import {AddMailComponent} from "../mails/add-mail/add-mail.component";
import {DeleteMailComponent} from "../mails/delete-mail/delete-mail.component";
import {BehaviorSubject, fromEvent, merge, Observable} from "rxjs";
import {DataSource} from "@angular/cdk/table";
import {map} from "rxjs/operators";
import {PilatService} from "../../../services/pilat.service";

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss']
})
export class MailsComponent implements OnInit {
  
  displayedColumns = [
    'id',
    //'mai_description',
    'mai_user_account',
    'mai_user_password',
    'mai_host',
    'mai_port',
    //'mai_bus_id',
    'mai_group',
    //'mai_par_status_id',
    'actions'
  ];
  
  dataSource: PilatMailDataSource | null;
  index: number;
  id: number;
  isLoading:boolean = true;
  
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public pilatMailService: PilatMailService,
    public pilatService:PilatService
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
    let pilatMail = new PilatMails();
    const dialogRef = this.dialog.open(AddMailComponent, {
      width:'500px',
      data: pilatMail,
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside pilatMailService
        await this.pilatMailService.createPilatMail(this.pilatMailService.pilatMailData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: PilatMails};
          this.pilatMailService.dataChange.value.push(response.data);
          this.refreshTable();
        });
      }
    });
  }
  
  startEdit(i: number, pilatMail:PilatMails) {
    // this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(AddMailComponent, {
      width:'500px',
      data: pilatMail
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside pilatMailService by id
        const foundIndex = this.pilatMailService.dataChange.value.findIndex(x => x.id === pilatMail.id);
        await this.pilatMailService.updatePilatMail(pilatMail._id, this.pilatMailService.pilatMailData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: PilatMails };
          this.pilatMailService.dataChange.value[foundIndex] = response.data;
          
          // And lastly refresh table
          this.refreshTable();
        });
      }
    });
  }
  
  deleteItem(i: number, pilatMail:PilatMails) {
    this.index = i;
    //this.id = id;
    const dialogRef = this.dialog.open(DeleteMailComponent, {
      data: pilatMail
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        
        const foundIndex = this.pilatMailService.dataChange.value.findIndex(x => x.id === pilatMail.id);
        this.pilatMailService.deletePilatMail(this.pilatMailService.pilatMailData._id).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: PilatMails };
          //this.pilatMailService.dataChange.value[foundIndex] = response.data;
          // for delete we use splice in order to remove single object from pilatMailService
          this.pilatMailService.dataChange.value.splice(foundIndex, 1);
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
    if (this.dataSource._paginator.hasNextPage()) {
      this.dataSource._paginator.nextPage();
      this.dataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.dataSource._paginator.hasPreviousPage()) {
      this.dataSource._paginator.previousPage();
      this.dataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.dataSource.filter = '';
      this.dataSource.filter = this.filter.nativeElement.value;
    }*/
  
  
  
  public loadData() {
    // this.pilatMailService = new pilatMailService(this.httpClient);
    this.dataSource = new PilatMailDataSource(this.pilatMailService, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
    // .debounceTime(150)
    // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class PilatMailDataSource extends DataSource<PilatMails> {
  _filterChange = new BehaviorSubject('');
  
  get filter(): string {
    return this._filterChange.value;
  }
  
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  
  filteredData: PilatMails[] = [];
  renderedData: PilatMails[] = [];
  
  constructor(public _pilatMailService: PilatMailService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
  
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PilatMails[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._pilatMailService.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];
    
    this._pilatMailService.getDataPilatMails();
    
    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        if (this._pilatMailService.data) {
          this.filteredData = this._pilatMailService.data.slice().filter((pilatMail: PilatMails) => {
            let searchStr = '', pilatMailKeys = Object.keys(pilatMail);
            for (let i = 0 ; i < pilatMailKeys.length ; i++) {
              let pilatMailKey = pilatMailKeys[i];
              if(pilatMail[pilatMailKey]) {
                searchStr += pilatMail[pilatMailKey]+''.toLowerCase();
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
  sortData(data: PilatMails[]): PilatMails[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      
      switch (this._sort.active) {
        case '_id': [propertyA, propertyB] = [a._id, b._id]; break;
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'mai_description': [propertyA, propertyB] = [a.mai_description, b.mai_description]; break;
        case 'mai_user_account': [propertyA, propertyB] = [a.mai_user_account, b.mai_user_account]; break;
        case 'mai_user_password': [propertyA, propertyB] = [a.mai_user_password, b.mai_user_password]; break;
        case 'mai_host': [propertyA, propertyB] = [a.mai_host, b.mai_host]; break;
        case 'mai_port': [propertyA, propertyB] = [a.mai_port, b.mai_port]; break;
        case 'mai_bus_id': [propertyA, propertyB] = [a.mai_bus_id, b.mai_bus_id]; break;
        case 'mai_group': [propertyA, propertyB] = [a.mai_group, b.mai_group]; break;
        case 'mai_par_status_id': [propertyA, propertyB] = [a.mai_par_status_id, b.mai_par_status_id]; break;
        case 'createdBy': [propertyA, propertyB] = [a.createdBy, b.createdBy]; break;
        case 'updatedBy': [propertyA, propertyB] = [a.updatedBy, b.updatedBy]; break;
        case 'dueAt': [propertyA, propertyB] = [a.dueAt.toString(), b.dueAt.toString()]; break;
        case 'createdAt': [propertyA, propertyB] = [a.createdAt.toString(), b.createdAt.toString()]; break;
        case 'updatedAt': [propertyA, propertyB] = [a.updatedAt.toString(), b.updatedAt.toString()]; break;
      }
      
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      
      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
  
}
