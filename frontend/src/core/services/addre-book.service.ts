/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:55 GMT-0400 (Bolivia Time)
 * Time: 2:40:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:55 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:55
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AddressBook} from "../models/addressBook";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AddreBookService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/address-book`;
  dataChange: BehaviorSubject<AddressBook[]> = new BehaviorSubject<AddressBook[]>([]);
  addreBookData: AddressBook = new AddressBook();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AddressBook[] {
    return this.dataChange.value;
  }

  getDataAddressBook(): void {
    this.getAllAddressBook().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AddressBook[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAddressBook(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
    let attributes = '';
    if(select.length) {
        attributes += 'select=' + select.toString() + '&';
    }
    if(Object.keys(where).length) {
        attributes += 'where=' + JSON.stringify(where) + '&';
    }
    if(order.length) {
        attributes += 'order=' + JSON.stringify(order) + '&';
    }
    if(limit) {
        attributes += 'limit=' + limit + '&';
    }
    if(offset) {
        attributes += 'offset=' + offset + '&';
    }
    return this.http.get(this.basePath + '?' + attributes);
  }
  createAddreBook(addreBook:AddressBook) {
    return this.http.post(this.basePath, addreBook);
  }
  getAddreBook(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAddreBook(id:any, addreBook:AddressBook) {
    return this.http.put(this.basePath + '/' + id, addreBook);
  }
  deleteAddreBook(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByBean(bean:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBean/' + bean + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  findOneByBeanId(beanId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeanId/' + beanId + '?' + attributes);
  }
  
  
  updateAddreBookByBean(bean:any, addreBook:AddressBook) {
      return this.http.post(this.basePath + '/updateAddreBookByBean?bean=' + bean, addreBook);
  }
  
  updateAddreBookByAssignedUserId(assignedUserId:any, addreBook:AddressBook) {
      return this.http.post(this.basePath + '/updateAddreBookByAssignedUserId?assignedUserId=' + assignedUserId, addreBook);
  }
  
  updateAddreBookByBeanId(beanId:any, addreBook:AddressBook) {
      return this.http.post(this.basePath + '/updateAddreBookByBeanId?beanId=' + beanId, addreBook);
  }
  
  
  findUsersAssignedUserWithSystemGeneratedPassword(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findUsersAssignedUserWithSystemGeneratedPassword' + '?' + attributes);
  }
  
  
  filterAddressBookByAssignedUser(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterAddressBookByAssignedUser/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
