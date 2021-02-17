/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:00 GMT-0400 (Bolivia Time)
 * Time: 2:44:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:00 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {RolesUsers} from "../models/rolesUsers";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class RoleUserService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/roles-users`;
  dataChange: BehaviorSubject<RolesUsers[]> = new BehaviorSubject<RolesUsers[]>([]);
  roleUserData: RolesUsers = new RolesUsers();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): RolesUsers[] {
    return this.dataChange.value;
  }

  getDataRolesUsers(): void {
    this.getAllRolesUsers().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:RolesUsers[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllRolesUsers(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createRoleUser(roleUser:RolesUsers) {
    return this.http.post(this.basePath, roleUser);
  }
  getRoleUser(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateRoleUser(id:any, roleUser:RolesUsers) {
    return this.http.put(this.basePath + '/' + id, roleUser);
  }
  deleteRoleUser(id:any) {
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
  
  findOneByRoleId(roleId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRoleId/' + roleId + '?' + attributes);
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
  
  
  updateRoleUserById(id:any, roleUser:RolesUsers) {
      return this.http.post(this.basePath + '/updateRoleUserById?id=' + id, roleUser);
  }
  
  updateRoleUserByDeleted(deleted:any, roleUser:RolesUsers) {
      return this.http.post(this.basePath + '/updateRoleUserByDeleted?deleted=' + deleted, roleUser);
  }
  
  updateRoleUserByRoleId(roleId:any, roleUser:RolesUsers) {
      return this.http.post(this.basePath + '/updateRoleUserByRoleId?roleId=' + roleId, roleUser);
  }
  
  updateRoleUserByUserId(userId:any, roleUser:RolesUsers) {
      return this.http.post(this.basePath + '/updateRoleUserByUserId?userId=' + userId, roleUser);
  }
  
  updateRoleUserByDateModified(dateModified:any, roleUser:RolesUsers) {
      return this.http.post(this.basePath + '/updateRoleUserByDateModified?dateModified=' + dateModified, roleUser);
  }
  
  
  
  //</es-section>
}
