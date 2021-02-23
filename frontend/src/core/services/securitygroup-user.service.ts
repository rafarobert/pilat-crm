/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:06 GMT-0400 (Bolivia Time)
 * Time: 2:44:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:06 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:6
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SecuritygroupsUsers} from "../models/securitygroupsUsers";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SecuritygroupUserService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/securitygroups-users`;
  dataChange: BehaviorSubject<SecuritygroupsUsers[]> = new BehaviorSubject<SecuritygroupsUsers[]>([]);
  securitygroupUserData: SecuritygroupsUsers = new SecuritygroupsUsers();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): SecuritygroupsUsers[] {
    return this.dataChange.value;
  }

  getDataSecuritygroupsUsers(): void {
    this.getAllSecuritygroupsUsers().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SecuritygroupsUsers[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSecuritygroupsUsers(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSecuritygroupUser(securitygroupUser:SecuritygroupsUsers) {
    return this.http.post(this.basePath, securitygroupUser);
  }
  getSecuritygroupUser(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSecuritygroupUser(id:any, securitygroupUser:SecuritygroupsUsers) {
    return this.http.put(this.basePath + '/' + id, securitygroupUser);
  }
  deleteSecuritygroupUser(id:any) {
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
  
  findOneByPrimaryGroup(primaryGroup:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPrimaryGroup/' + primaryGroup + '?' + attributes);
  }
  
  findOneByNoninheritable(noninheritable:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNoninheritable/' + noninheritable + '?' + attributes);
  }
  
  findOneBySecuritygroupId(securitygroupId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySecuritygroupId/' + securitygroupId + '?' + attributes);
  }
  
  findOneByUserId(userId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserId/' + userId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateSecuritygroupUserById(id:any, securitygroupUser:SecuritygroupsUsers) {
      return this.http.post(this.basePath + '/updateSecuritygroupUserById?id=' + id, securitygroupUser);
  }
  
  updateSecuritygroupUserByDeleted(deleted:any, securitygroupUser:SecuritygroupsUsers) {
      return this.http.post(this.basePath + '/updateSecuritygroupUserByDeleted?deleted=' + deleted, securitygroupUser);
  }
  
  updateSecuritygroupUserByPrimaryGroup(primaryGroup:any, securitygroupUser:SecuritygroupsUsers) {
      return this.http.post(this.basePath + '/updateSecuritygroupUserByPrimaryGroup?primaryGroup=' + primaryGroup, securitygroupUser);
  }
  
  updateSecuritygroupUserByNoninheritable(noninheritable:any, securitygroupUser:SecuritygroupsUsers) {
      return this.http.post(this.basePath + '/updateSecuritygroupUserByNoninheritable?noninheritable=' + noninheritable, securitygroupUser);
  }
  
  updateSecuritygroupUserBySecuritygroupId(securitygroupId:any, securitygroupUser:SecuritygroupsUsers) {
      return this.http.post(this.basePath + '/updateSecuritygroupUserBySecuritygroupId?securitygroupId=' + securitygroupId, securitygroupUser);
  }
  
  updateSecuritygroupUserByUserId(userId:any, securitygroupUser:SecuritygroupsUsers) {
      return this.http.post(this.basePath + '/updateSecuritygroupUserByUserId?userId=' + userId, securitygroupUser);
  }
  
  updateSecuritygroupUserByDateModified(dateModified:any, securitygroupUser:SecuritygroupsUsers) {
      return this.http.post(this.basePath + '/updateSecuritygroupUserByDateModified?dateModified=' + dateModified, securitygroupUser);
  }
  
  
  
  //</es-section>
}
