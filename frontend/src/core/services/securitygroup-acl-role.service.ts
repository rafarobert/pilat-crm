/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:04 GMT-0400 (Bolivia Time)
 * Time: 2:44:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:04 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:4
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SecuritygroupsAclRoles} from "../models/securitygroupsAclRoles";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SecuritygroupAclRoleService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/securitygroups-acl-roles`;
  dataChange: BehaviorSubject<SecuritygroupsAclRoles[]> = new BehaviorSubject<SecuritygroupsAclRoles[]>([]);
  securitygroupAclRoleData: SecuritygroupsAclRoles = new SecuritygroupsAclRoles();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): SecuritygroupsAclRoles[] {
    return this.dataChange.value;
  }

  getDataSecuritygroupsAclRoles(): void {
    this.getAllSecuritygroupsAclRoles().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SecuritygroupsAclRoles[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSecuritygroupsAclRoles(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSecuritygroupAclRole(securitygroupAclRole:SecuritygroupsAclRoles) {
    return this.http.post(this.basePath, securitygroupAclRole);
  }
  getSecuritygroupAclRole(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSecuritygroupAclRole(id:any, securitygroupAclRole:SecuritygroupsAclRoles) {
    return this.http.put(this.basePath + '/' + id, securitygroupAclRole);
  }
  deleteSecuritygroupAclRole(id:any) {
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
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  findOneBySecuritygroupId(securitygroupId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySecuritygroupId/' + securitygroupId + '?' + attributes);
  }
  
  findOneByRoleId(roleId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRoleId/' + roleId + '?' + attributes);
  }
  
  
  updateSecuritygroupAclRoleById(id:any, securitygroupAclRole:SecuritygroupsAclRoles) {
      return this.http.post(this.basePath + '/updateSecuritygroupAclRoleById?id=' + id, securitygroupAclRole);
  }
  
  updateSecuritygroupAclRoleByDeleted(deleted:any, securitygroupAclRole:SecuritygroupsAclRoles) {
      return this.http.post(this.basePath + '/updateSecuritygroupAclRoleByDeleted?deleted=' + deleted, securitygroupAclRole);
  }
  
  updateSecuritygroupAclRoleByDateModified(dateModified:any, securitygroupAclRole:SecuritygroupsAclRoles) {
      return this.http.post(this.basePath + '/updateSecuritygroupAclRoleByDateModified?dateModified=' + dateModified, securitygroupAclRole);
  }
  
  updateSecuritygroupAclRoleBySecuritygroupId(securitygroupId:any, securitygroupAclRole:SecuritygroupsAclRoles) {
      return this.http.post(this.basePath + '/updateSecuritygroupAclRoleBySecuritygroupId?securitygroupId=' + securitygroupId, securitygroupAclRole);
  }
  
  updateSecuritygroupAclRoleByRoleId(roleId:any, securitygroupAclRole:SecuritygroupsAclRoles) {
      return this.http.post(this.basePath + '/updateSecuritygroupAclRoleByRoleId?roleId=' + roleId, securitygroupAclRole);
  }
  
  
  
  //</es-section>
}
