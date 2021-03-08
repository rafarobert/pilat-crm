import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AddParamComponent} from "../params/add-param/add-param.component";
import {DeleteParamComponent} from "../params/delete-param/delete-param.component";
import {BehaviorSubject, fromEvent, merge, Observable} from "rxjs";
import {DataSource} from "@angular/cdk/table";
import {map} from "rxjs/operators";
import {UserService} from "../../../../core/services/user.service";
import {Users} from "../../../../core/models/users";
import {AddUserComponent} from "./add-user/add-user.component";
import {DeleteUserComponent} from "./delete-user/delete-user.component";
import {PilatService} from "../../../services/pilat.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  displayedColumns = [
    'user_name',
    // 'user_hash',
    // 'system_generated_password',
    // 'pwd_last_changed',
    // 'authenticate_id',
    // 'sugar_login',
    'first_name',
    'last_name',
    // 'is_admin',
    // 'external_auth_only',
    // 'receive_notifications',
    // 'description',
    // 'date_entered',
    // 'date_modified',
    // 'modified_user_id',
    // 'created_by',
    // 'title',
    // 'photo',
    // 'department',
    'phone_home',
    'phone_mobile',
    // 'phone_work',
    // 'phone_other',
    // 'phone_fax',
    // 'status',
    'address_street',
    'address_city',
    'address_state',
    'address_country',
    // 'address_postalcode',
    // 'deleted',
    // 'portal_only',
    // 'show_on_employees',
    // 'employee_status',
    // 'messenger_id',
    // 'messenger_type',
    // 'reports_to_id',
    // 'is_group',
    // 'factor_auth',
    // 'factor_auth_interface',
    'actions'
  ];
  
  dataSource: UserDataSource | null;
  index: number;
  id: number;
  isLoading:boolean = true;
  
  constructor(
    public httpClient: HttpClient,
    private location: Location,
    public dialog: MatDialog,
    public userService: UserService,
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
    let user = new Users();
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: user ,
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside userService
        await this.userService.createUser(this.userService.userData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Users};
          this.userService.dataChange.value.push(response.data);
          this.refreshTable();
        });
      }
    });
  }
  
  startEdit(i: number, user:Users) {
    // this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: user
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside userService by id
        const foundIndex = this.userService.dataChange.value.findIndex(x => x.id === user.id);
        await this.userService.updateUser(user.id, this.userService.userData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Users };
          this.userService.dataChange.value[foundIndex] = response.data;
          
          // And lastly refresh table
          this.refreshTable();
        });
      }
    });
  }
  
  deleteItem(i: number, user:Users) {
    this.index = i;
    //this.id = id;
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: user
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        
        const foundIndex = this.userService.dataChange.value.findIndex(x => x.id === user.id);
        this.userService.deleteUser(this.userService.userData.id).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: Users };
          //this.userService.dataChange.value[foundIndex] = response.data;
          // for delete we use splice in order to remove single object from userService
          this.userService.dataChange.value.splice(foundIndex, 1);
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
    // this.userService = new userService(this.httpClient);
    this.dataSource = new UserDataSource(this.userService, this.paginator, this.sort);
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

export class UserDataSource extends DataSource<Users> {
  _filterChange = new BehaviorSubject('');
  
  get filter(): string {
    return this._filterChange.value;
  }
  
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  
  filteredData: Users[] = [];
  renderedData: Users[] = [];
  
  constructor(public _UserService: UserService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
  
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Users[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._UserService.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];
    
    this._UserService.getDataUsers();
    
    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        if (this._UserService.data) {
          this.filteredData = this._UserService.data.slice().filter((user: Users) => {
            let searchStr = '', pilatParamKeys = Object.keys(user);
            for (let i = 0 ; i < pilatParamKeys.length ; i++) {
              let pilatParamKey = pilatParamKeys[i];
              if(user[pilatParamKey]) {
                searchStr += user[pilatParamKey]+''.toLowerCase();
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
  sortData(data: Users[]): Users[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      
      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'user_name': [propertyA, propertyB] = [a.user_name, b.user_name]; break;
        case 'user_hash': [propertyA, propertyB] = [a.user_hash, b.user_hash]; break;
        case 'system_generated_password': [propertyA, propertyB] = [a.system_generated_password, b.system_generated_password]; break;
        case 'pwd_last_changed': [propertyA, propertyB] = [a.pwd_last_changed.toString(), b.pwd_last_changed.toString()]; break;
        case 'authenticate_id': [propertyA, propertyB] = [a.authenticate_id, b.authenticate_id]; break;
        case 'sugar_login': [propertyA, propertyB] = [a.sugar_login, b.sugar_login]; break;
        case 'first_name': [propertyA, propertyB] = [a.first_name, b.first_name]; break;
        case 'last_name': [propertyA, propertyB] = [a.last_name, b.last_name]; break;
        case 'is_admin': [propertyA, propertyB] = [a.is_admin, b.is_admin]; break;
        case 'external_auth_only': [propertyA, propertyB] = [a.external_auth_only, b.external_auth_only]; break;
        case 'receive_notifications': [propertyA, propertyB] = [a.receive_notifications, b.receive_notifications]; break;
        case 'description': [propertyA, propertyB] = [a.description, b.description]; break;
        case 'date_entered': [propertyA, propertyB] = [a.date_entered.toString(), b.date_entered.toString()]; break;
        case 'date_modified': [propertyA, propertyB] = [a.date_modified.toString(), b.date_modified.toString()]; break;
        case 'modified_user_id': [propertyA, propertyB] = [a.modified_user_id, b.modified_user_id]; break;
        case 'created_by': [propertyA, propertyB] = [a.created_by, b.created_by]; break;
        case 'title': [propertyA, propertyB] = [a.title, b.title]; break;
        case 'photo': [propertyA, propertyB] = [a.photo, b.photo]; break;
        case 'department': [propertyA, propertyB] = [a.department, b.department]; break;
        case 'phone_home': [propertyA, propertyB] = [a.phone_home, b.phone_home]; break;
        case 'phone_mobile': [propertyA, propertyB] = [a.phone_mobile, b.phone_mobile]; break;
        case 'phone_work': [propertyA, propertyB] = [a.phone_work, b.phone_work]; break;
        case 'phone_other': [propertyA, propertyB] = [a.phone_other, b.phone_other]; break;
        case 'phone_fax': [propertyA, propertyB] = [a.phone_fax, b.phone_fax]; break;
        case 'status': [propertyA, propertyB] = [a.status, b.status]; break;
        case 'address_street': [propertyA, propertyB] = [a.address_street, b.address_street]; break;
        case 'address_city': [propertyA, propertyB] = [a.address_city, b.address_city]; break;
        case 'address_state': [propertyA, propertyB] = [a.address_state, b.address_state]; break;
        case 'address_country': [propertyA, propertyB] = [a.address_country, b.address_country]; break;
        case 'address_postalcode': [propertyA, propertyB] = [a.address_postalcode, b.address_postalcode]; break;
        case 'deleted': [propertyA, propertyB] = [a.deleted, b.deleted]; break;
        case 'portal_only': [propertyA, propertyB] = [a.portal_only, b.portal_only]; break;
        case 'show_on_employees': [propertyA, propertyB] = [a.show_on_employees, b.show_on_employees]; break;
        case 'employee_status': [propertyA, propertyB] = [a.employee_status, b.employee_status]; break;
        case 'messenger_id': [propertyA, propertyB] = [a.messenger_id, b.messenger_id]; break;
        case 'messenger_type': [propertyA, propertyB] = [a.messenger_type, b.messenger_type]; break;
        case 'reports_to_id': [propertyA, propertyB] = [a.reports_to_id, b.reports_to_id]; break;
        case 'is_group': [propertyA, propertyB] = [a.is_group, b.is_group]; break;
        case 'factor_auth': [propertyA, propertyB] = [a.factor_auth, b.factor_auth]; break;
        case 'factor_auth_interface': [propertyA, propertyB] = [a.factor_auth_interface, b.factor_auth_interface]; break;
      }
      
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      
      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
  
  
  
}
