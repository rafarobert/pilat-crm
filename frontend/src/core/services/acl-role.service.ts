/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:53 GMT-0400 (Bolivia Time)
 * Time: 2:40:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:53 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:53
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AclRoles} from "../models/aclRoles";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AclRoleService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/acl-roles`;
  dataChange: BehaviorSubject<AclRoles[]> = new BehaviorSubject<AclRoles[]>([]);
  aclRoleData: AclRoles = new AclRoles();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AclRoles[] {
    return this.dataChange.value;
  }

  getDataAclRoles(): void {
    this.getAllAclRoles().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AclRoles[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAclRoles(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAclRole(aclRole:AclRoles) {
    return this.http.post(this.basePath, aclRole);
  }
  getAclRole(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAclRole(id:any, aclRole:AclRoles) {
    return this.http.put(this.basePath + '/' + id, aclRole);
  }
  deleteAclRole(id:any) {
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
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByDateEntered(dateEntered:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateEntered/' + dateEntered + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  findOneByModifiedUserId(modifiedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedUserId/' + modifiedUserId + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  
  updateAclRoleById(id:any, aclRole:AclRoles) {
      return this.http.post(this.basePath + '/updateAclRoleById?id=' + id, aclRole);
  }
  
  updateAclRoleByDeleted(deleted:any, aclRole:AclRoles) {
      return this.http.post(this.basePath + '/updateAclRoleByDeleted?deleted=' + deleted, aclRole);
  }
  
  updateAclRoleByName(name:any, aclRole:AclRoles) {
      return this.http.post(this.basePath + '/updateAclRoleByName?name=' + name, aclRole);
  }
  
  updateAclRoleByDescription(description:any, aclRole:AclRoles) {
      return this.http.post(this.basePath + '/updateAclRoleByDescription?description=' + description, aclRole);
  }
  
  updateAclRoleByDateEntered(dateEntered:any, aclRole:AclRoles) {
      return this.http.post(this.basePath + '/updateAclRoleByDateEntered?dateEntered=' + dateEntered, aclRole);
  }
  
  updateAclRoleByDateModified(dateModified:any, aclRole:AclRoles) {
      return this.http.post(this.basePath + '/updateAclRoleByDateModified?dateModified=' + dateModified, aclRole);
  }
  
  updateAclRoleByModifiedUserId(modifiedUserId:any, aclRole:AclRoles) {
      return this.http.post(this.basePath + '/updateAclRoleByModifiedUserId?modifiedUserId=' + modifiedUserId, aclRole);
  }
  
  updateAclRoleByCreatedBy(createdBy:any, aclRole:AclRoles) {
      return this.http.post(this.basePath + '/updateAclRoleByCreatedBy?createdBy=' + createdBy, aclRole);
  }
  
  
  
  //</es-section>
}
