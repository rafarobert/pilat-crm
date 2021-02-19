/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:25 GMT-0400 (Bolivia Time)
 * Time: 2:44:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:25 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {UsersLastImport} from "../models/usersLastImport";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class UserLastImportService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/users-last-import`;
  dataChange: BehaviorSubject<UsersLastImport[]> = new BehaviorSubject<UsersLastImport[]>([]);
  userLastImportData: UsersLastImport = new UsersLastImport();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): UsersLastImport[] {
    return this.dataChange.value;
  }

  getDataUsersLastImport(): void {
    this.getAllUsersLastImport().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:UsersLastImport[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllUsersLastImport(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createUserLastImport(userLastImport:UsersLastImport) {
    return this.http.post(this.basePath, userLastImport);
  }
  getUserLastImport(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateUserLastImport(id:any, userLastImport:UsersLastImport) {
    return this.http.put(this.basePath + '/' + id, userLastImport);
  }
  deleteUserLastImport(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByImportModule(importModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByImportModule/' + importModule + '?' + attributes);
  }
  
  findOneByBeanType(beanType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeanType/' + beanType + '?' + attributes);
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
  
  
  updateUserLastImportById(id:any, userLastImport:UsersLastImport) {
      return this.http.post(this.basePath + '/updateUserLastImportById?id=' + id, userLastImport);
  }
  
  updateUserLastImportByDeleted(deleted:any, userLastImport:UsersLastImport) {
      return this.http.post(this.basePath + '/updateUserLastImportByDeleted?deleted=' + deleted, userLastImport);
  }
  
  updateUserLastImportByImportModule(importModule:any, userLastImport:UsersLastImport) {
      return this.http.post(this.basePath + '/updateUserLastImportByImportModule?importModule=' + importModule, userLastImport);
  }
  
  updateUserLastImportByBeanType(beanType:any, userLastImport:UsersLastImport) {
      return this.http.post(this.basePath + '/updateUserLastImportByBeanType?beanType=' + beanType, userLastImport);
  }
  
  updateUserLastImportByAssignedUserId(assignedUserId:any, userLastImport:UsersLastImport) {
      return this.http.post(this.basePath + '/updateUserLastImportByAssignedUserId?assignedUserId=' + assignedUserId, userLastImport);
  }
  
  updateUserLastImportByBeanId(beanId:any, userLastImport:UsersLastImport) {
      return this.http.post(this.basePath + '/updateUserLastImportByBeanId?beanId=' + beanId, userLastImport);
  }
  
  
  
  //</es-section>
}
