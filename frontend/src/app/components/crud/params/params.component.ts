import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BehaviorSubject, fromEvent, merge, Observable} from "rxjs";
import {DataSource} from "@angular/cdk/table";
import {map} from "rxjs/operators";
import {PilatParamService} from "../../../../core/services/pilat-param.service";
import {PilatParams} from "../../../../core/models/pilatParams";
import {DeleteParamComponent} from "./delete-param/delete-param.component";
import {AddParamComponent} from "./add-param/add-param.component";
import {PilatService} from "../../../services/pilat.service";

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit {
  
  displayedColumns = [
    'id',
    'par_cod',
    'par_description',
    'par_abbr',
    'par_group',
    // 'par_dictionary_id',
    'par_order',
    // 'par_status_id',
    // 'createdBy',
    // 'updatedBy',
    // 'duaAt',
    // 'createdAt',
    // 'updatedAt',
    'actions'
  ];
  
  dataSource: PilatParamDataSource | null;
  index: number;
  id: number;
  isLoading:boolean = true;
  
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public pilatParamService: PilatParamService,
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
    let pilatParam = new PilatParams();
    const dialogRef = this.dialog.open(AddParamComponent, {
      width:'500px',
      data: pilatParam,
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside pilatParamService
        await this.pilatParamService.createPilatParam(this.pilatParamService.pilatParamData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: PilatParams};
          this.pilatParamService.dataChange.value.push(response.data);
          this.refreshTable();
        });
      }
    });
  }
  
  startEdit(i: number, pilatParam:PilatParams) {
    // this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(AddParamComponent, {
      width:'500px',
      data: pilatParam
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside pilatParamService by id
        const foundIndex = this.pilatParamService.dataChange.value.findIndex(x => x.id === pilatParam.id);
        await this.pilatParamService.updatePilatParam(pilatParam._id, this.pilatParamService.pilatParamData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: PilatParams };
          this.pilatParamService.dataChange.value[foundIndex] = response.data;
          
          // And lastly refresh table
          this.refreshTable();
        });
      }
    });
  }
  
  deleteItem(i: number, pilatParam:PilatParams) {
    this.index = i;
    //this.id = id;
    const dialogRef = this.dialog.open(DeleteParamComponent, {
      data: pilatParam
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        
        const foundIndex = this.pilatParamService.dataChange.value.findIndex(x => x.id === pilatParam.id);
        this.pilatParamService.deletePilatParam(this.pilatParamService.pilatParamData._id).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: PilatParams };
          //this.pilatParamService.dataChange.value[foundIndex] = response.data;
          // for delete we use splice in order to remove single object from pilatParamService
          this.pilatParamService.dataChange.value.splice(foundIndex, 1);
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
    // this.pilatParamService = new pilatParamService(this.httpClient);
    this.dataSource = new PilatParamDataSource(this.pilatParamService, this.paginator, this.sort);
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

export class PilatParamDataSource extends DataSource<PilatParams> {
  _filterChange = new BehaviorSubject('');
  
  get filter(): string {
    return this._filterChange.value;
  }
  
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  
  filteredData: PilatParams[] = [];
  renderedData: PilatParams[] = [];
  
  constructor(public _pilatParamService: PilatParamService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
  
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PilatParams[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._pilatParamService.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];
    
    this._pilatParamService.getDataPilatParams();
    
    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        if (this._pilatParamService.data) {
          this.filteredData = this._pilatParamService.data.slice().filter((pilatParam: PilatParams) => {
            let searchStr = '', pilatParamKeys = Object.keys(pilatParam);
            for (let i = 0 ; i < pilatParamKeys.length ; i++) {
              let pilatParamKey = pilatParamKeys[i];
              if(pilatParam[pilatParamKey]) {
                searchStr += pilatParam[pilatParamKey]+''.toLowerCase();
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
  sortData(data: PilatParams[]): PilatParams[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      
      switch (this._sort.active) {
        case '_id': [propertyA, propertyB] = [a._id, b._id]; break;
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'par_cod': [propertyA, propertyB] = [a.par_cod, b.par_cod]; break;
        case 'par_description': [propertyA, propertyB] = [a.par_description, b.par_description]; break;
        case 'par_abbr': [propertyA, propertyB] = [a.par_abbr, b.par_abbr]; break;
        case 'par_group': [propertyA, propertyB] = [a.par_group, b.par_group]; break;
        case 'par_dictionary_id': [propertyA, propertyB] = [a.par_dictionary_id, b.par_dictionary_id]; break;
        case 'par_order': [propertyA, propertyB] = [a.par_order, b.par_order]; break;
        case 'par_status_id': [propertyA, propertyB] = [a.par_status_id, b.par_status_id]; break;
        case 'createdBy': [propertyA, propertyB] = [a.createdBy, b.createdBy]; break;
        case 'updatedBy': [propertyA, propertyB] = [a.updatedBy, b.updatedBy]; break;
        case 'duaAt': [propertyA, propertyB] = [a.duaAt.toString(), b.duaAt.toString()]; break;
        case 'createdAt': [propertyA, propertyB] = [a.createdAt.toString(), b.createdAt.toString()]; break;
        case 'updatedAt': [propertyA, propertyB] = [a.updatedAt.toString(), b.updatedAt.toString()]; break;
        case 'par_parent_id': [propertyA, propertyB] = [a.par_parent_id, b.par_parent_id]; break;
      }
      
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      
      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
  
  
}
