/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:54 GMT-0400 (Bolivia Time)
 * Time: 2:40:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:54 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AclRolesUsers} from "../models/aclRolesUsers";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AclRoleUserService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/acl-roles-users`;
  dataChange: BehaviorSubject<AclRolesUsers[]> = new BehaviorSubject<AclRolesUsers[]>([]);
  aclRoleUserData: AclRolesUsers = new AclRolesUsers();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AclRolesUsers[] {
    return this.dataChange.value;
  }

  getDataAclRolesUsers(): void {
    this.getAllAclRolesUsers().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AclRolesUsers[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAclRolesUsers(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAclRoleUser(aclRoleUser:AclRolesUsers) {
    return this.http.post(this.basePath, aclRoleUser);
  }
  getAclRoleUser(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAclRoleUser(id:any, aclRoleUser:AclRolesUsers) {
    return this.http.put(this.basePath + '/' + id, aclRoleUser);
  }
  deleteAclRoleUser(id:any) {
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
  
  
  updateAclRoleUserById(id:any, aclRoleUser:AclRolesUsers) {
      return this.http.post(this.basePath + '/updateAclRoleUserById?id=' + id, aclRoleUser);
  }
  
  updateAclRoleUserByDeleted(deleted:any, aclRoleUser:AclRolesUsers) {
      return this.http.post(this.basePath + '/updateAclRoleUserByDeleted?deleted=' + deleted, aclRoleUser);
  }
  
  updateAclRoleUserByRoleId(roleId:any, aclRoleUser:AclRolesUsers) {
      return this.http.post(this.basePath + '/updateAclRoleUserByRoleId?roleId=' + roleId, aclRoleUser);
  }
  
  updateAclRoleUserByUserId(userId:any, aclRoleUser:AclRolesUsers) {
      return this.http.post(this.basePath + '/updateAclRoleUserByUserId?userId=' + userId, aclRoleUser);
  }
  
  updateAclRoleUserByDateModified(dateModified:any, aclRoleUser:AclRolesUsers) {
      return this.http.post(this.basePath + '/updateAclRoleUserByDateModified?dateModified=' + dateModified, aclRoleUser);
  }
  
  
  
  //</es-section>
}
