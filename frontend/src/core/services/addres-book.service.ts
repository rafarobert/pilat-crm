/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:20:00 GMT-0400 (Bolivia Time)
 * Time: 4:20:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:20:00 GMT-0400 (Bolivia Time)
 * Last time updated: 4:20:0
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
export class AddresBookService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/address-book`;
  dataChange: BehaviorSubject<AddressBook[]> = new BehaviorSubject<AddressBook[]>([]);
  addresBookData: AddressBook = new AddressBook();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AddressBook[] {
    return this.dataChange.value;
  }

  getDataAddressBook(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllAddressBook(select, where, order, limit, offset).subscribe(async (res) => {
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
  createAddresBook(addresBook:AddressBook) {
    return this.http.post(this.basePath, addresBook);
  }
  getAddresBook(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAddresBook(id:any, addresBook:AddressBook) {
    return this.http.put(this.basePath + '/' + id, addresBook);
  }
  deleteAddresBook(id:any) {
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
  
  
  updateAddresBookByBean(bean:any, addresBook:AddressBook) {
      return this.http.post(this.basePath + '/updateAddresBookByBean?bean=' + bean, addresBook);
  }
  
  updateAddresBookByAssignedUserId(assignedUserId:any, addresBook:AddressBook) {
      return this.http.post(this.basePath + '/updateAddresBookByAssignedUserId?assignedUserId=' + assignedUserId, addresBook);
  }
  
  updateAddresBookByBeanId(beanId:any, addresBook:AddressBook) {
      return this.http.post(this.basePath + '/updateAddresBookByBeanId?beanId=' + beanId, addresBook);
  }
  
  
  
  //</es-section>
}
