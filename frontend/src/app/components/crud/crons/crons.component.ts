import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {PilatCronService} from "../../../../core/services/pilat-cron.service";
import {PilatService} from "../../../services/pilat.service";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {PilatCrons} from "../../../../core/models/pilatCrons";
import {AddCronComponent} from "./add-cron/add-cron.component";
import {DeleteCronComponent} from "./delete-cron/delete-cron.component";
import {BehaviorSubject, fromEvent, merge, Observable} from "rxjs";
import {DataSource} from "@angular/cdk/table";
import {map} from "rxjs/operators";
import {Location} from "@angular/common";

@Component({
  selector: 'app-crons',
  templateUrl: './crons.component.html',
  styleUrls: ['./crons.component.scss']
})
export class CronsComponent implements OnInit {
  
  displayedColumns = [
    'id',
    'cro_description',
    'cro_expression',
    'cro_status',
    'cro_group',
    // 'cro_mai_id',
    // 'createdBy',
    // 'updatedBy',
    // 'dueAt',
    // 'createdAt',
    // 'updatedAt',
    'actions'
  ];
  
  dataSource: PilatCronDataSource | null;
  index: number;
  id: number;
  isLoading:boolean = true;
  
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public pilatCronService: PilatCronService,
    private location: Location,
    public pilatService:PilatService
  ) {}
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;
  
  ngOnInit() {
    this.location.replaceState('/');
    this.loadData();
  }
  
  refresh() {
    this.loadData();
  }
  
  addNew() {
    let pilatCron = new PilatCrons();
    const dialogRef = this.dialog.open(AddCronComponent, {
      width:'500px',
      data: pilatCron,
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside pilatCronService
        await this.pilatCronService.createPilatCron(this.pilatCronService.pilatCronData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: PilatCrons};
          this.pilatCronService.dataChange.value.push(response.data);
          this.refreshTable();
        });
      }
    });
  }
  
  startEdit(i: number, pilatCron:PilatCrons) {
    // this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(AddCronComponent, {
      width:'500px',
      data: pilatCron
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside pilatCronService by id
        const foundIndex = this.pilatCronService.dataChange.value.findIndex(x => x.id === pilatCron.id);
        await this.pilatCronService.updatePilatCron(pilatCron._id, this.pilatCronService.pilatCronData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: PilatCrons };
          this.pilatCronService.dataChange.value[foundIndex] = response.data;
          
          // And lastly refresh table
          this.refreshTable();
        });
      }
    });
  }
  
  deleteItem(i: number, pilatCron:PilatCrons) {
    this.index = i;
    //this.id = id;
    const dialogRef = this.dialog.open(DeleteCronComponent, {
      data: pilatCron
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        
        const foundIndex = this.pilatCronService.dataChange.value.findIndex(x => x.id === pilatCron.id);
        this.pilatCronService.deletePilatCron(this.pilatCronService.pilatCronData._id).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: PilatCrons };
          //this.pilatCronService.dataChange.value[foundIndex] = response.data;
          // for delete we use splice in order to remove single object from pilatCronService
          this.pilatCronService.dataChange.value.splice(foundIndex, 1);
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
    // this.pilatCronService = new pilatCronService(this.httpClient);
    this.dataSource = new PilatCronDataSource(this.pilatCronService, this.paginator, this.sort);
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

export class PilatCronDataSource extends DataSource<PilatCrons> {
  _filterChange = new BehaviorSubject('');
  
  get filter(): string {
    return this._filterChange.value;
  }
  
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  
  filteredData: PilatCrons[] = [];
  renderedData: PilatCrons[] = [];
  
  constructor(public _pilatCronService: PilatCronService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
  
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PilatCrons[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._pilatCronService.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];
    
    this._pilatCronService.getDataPilatCrons();
    
    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        if (this._pilatCronService.data) {
          this.filteredData = this._pilatCronService.data.slice().filter((pilatCron: PilatCrons) => {
            let searchStr = '', pilatCronKeys = Object.keys(pilatCron);
            for (let i = 0 ; i < pilatCronKeys.length ; i++) {
              let pilatCronKey = pilatCronKeys[i];
              if(pilatCron[pilatCronKey]) {
                searchStr += pilatCron[pilatCronKey]+''.toLowerCase();
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
  sortData(data: PilatCrons[]): PilatCrons[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      
      switch (this._sort.active) {
        case '_id': [propertyA, propertyB] = [a._id, b._id]; break;
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'cro_description': [propertyA, propertyB] = [a.cro_description, b.cro_description]; break;
        case 'cro_expression': [propertyA, propertyB] = [a.cro_expression, b.cro_expression]; break;
        case 'cro_status': [propertyA, propertyB] = [a.cro_status, b.cro_status]; break;
        case 'cro_group': [propertyA, propertyB] = [a.cro_group, b.cro_group]; break;
        case 'cro_mai_id': [propertyA, propertyB] = [a.cro_mai_id, b.cro_mai_id]; break;
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
