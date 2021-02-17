import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {PilatDictionaryService} from "../../../../core/services/pilat-dictionary.service";
import {AddDictionaryComponent} from "./add-dictionary/add-dictionary.component";
import {PilatDictionaries} from "../../../../core/models/pilatDictionaries";
import {DeleteDictionaryComponent} from "./delete-dictionary/delete-dictionary.component";
import {BehaviorSubject, fromEvent, merge, Observable} from "rxjs";
import {DataSource} from "@angular/cdk/table";
import {map} from "rxjs/operators";
import {PilatService} from "../../../services/pilat.service";

@Component({
  selector: 'app-dictionaries',
  templateUrl: './dictionaries.component.html',
  styleUrls: ['./dictionaries.component.scss']
})
export class DictionariesComponent implements OnInit {
  displayedColumns = [
    'id',
    'dic_code',
    'dic_description',
    'dic_group',
    // 'dic_par_status_id',
    // 'createdBy',
    // 'updatedBy',
    // 'dueAt',
    // 'createdAt',
    // 'updatedAt',
    'actions'
  ];
  //pilatDictionaryService: PilatDictionaryService | null;
  dataSource: PilatDictionaryDataSource | null;
  //pilatDictionary:PilatDictionaries = new PilatDictionaries();
  index: number;
  id: number;
  isLoading: boolean = true;
  
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public pilatDictionaryService: PilatDictionaryService,
    public pilatService: PilatService
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
    let pilatDictionary = new PilatDictionaries();
    const dialogRef = this.dialog.open(AddDictionaryComponent, {
      data: pilatDictionary,
      width:'500px',
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside PilatDictionaryService
        await this.pilatDictionaryService.createPilatDictionary(this.pilatDictionaryService.pilatDictionaryData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: PilatDictionaries };
          this.pilatDictionaryService.dataChange.value.push(response.data);
          this.refreshTable();
        });
      }
    });
  }
  
  startEdit(i: number, pilatDictionary:PilatDictionaries) {
    // this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(AddDictionaryComponent, {
      data: pilatDictionary,
      width:'500px',
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside PilatDictionaryService by id
        const foundIndex = this.pilatDictionaryService.dataChange.value.findIndex(x => x.id === pilatDictionary.id);
        await this.pilatDictionaryService.updatePilatDictionary(pilatDictionary._id, this.pilatDictionaryService.pilatDictionaryData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: PilatDictionaries };
          this.pilatDictionaryService.dataChange.value[foundIndex] = response.data;
          
          // And lastly refresh table
          this.refreshTable();
        });
      }
    });
  }
  
  deleteItem(i: number, pilatDictionary:PilatDictionaries) {
    this.index = i;
    //this.id = id;
    const dialogRef = this.dialog.open(DeleteDictionaryComponent, {
      data: pilatDictionary,
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        
        const foundIndex = this.pilatDictionaryService.dataChange.value.findIndex(x => x.id === pilatDictionary.id);
        this.pilatDictionaryService.deletePilatDictionary(this.pilatDictionaryService.pilatDictionaryData._id).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: PilatDictionaries };
          //this.pilatDictionaryService.dataChange.value[foundIndex] = response.data;
          // for delete we use splice in order to remove single object from PilatDictionaryService
          this.pilatDictionaryService.dataChange.value.splice(foundIndex, 1);
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
    // this.pilatDictionaryService = new PilatDictionaryService(this.httpClient);
    this.dataSource = new PilatDictionaryDataSource(this.pilatDictionaryService, this.paginator, this.sort);
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

export class PilatDictionaryDataSource extends DataSource<PilatDictionaries> {
  _filterChange = new BehaviorSubject('');
  
  get filter(): string {
    return this._filterChange.value;
  }
  
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  
  filteredData: PilatDictionaries[] = [];
  renderedData: PilatDictionaries[] = [];
  
  constructor(public _pilatDictionaryService: PilatDictionaryService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
  
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PilatDictionaries[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._pilatDictionaryService.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];
    
    this._pilatDictionaryService.getDataPilatDictionaries();
    
    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        if (this._pilatDictionaryService.data) {
          this.filteredData = this._pilatDictionaryService.data.slice().filter((pilatDictionary: PilatDictionaries) => {
            let searchStr = '', pilatDictionaryKeys = Object.keys(pilatDictionary);
            for (let i = 0 ; i < pilatDictionaryKeys.length ; i++) {
              let pilatDictionaryKey = pilatDictionaryKeys[i];
              if(pilatDictionary[pilatDictionaryKey]) {
                searchStr += pilatDictionary[pilatDictionaryKey]+''.toLowerCase();
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
  sortData(data: PilatDictionaries[]): PilatDictionaries[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      
      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'dic_code': [propertyA, propertyB] = [a.dic_code, b.dic_code]; break;
        case 'dic_description': [propertyA, propertyB] = [a.dic_description, b.dic_description]; break;
        case 'dic_group': [propertyA, propertyB] = [a.dic_group, b.dic_group]; break;
        case 'dic_par_status_id': [propertyA, propertyB] = [a.dic_par_status_id, b.dic_par_status_id]; break;
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
