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
import {AclRolesActions} from "../models/aclRolesActions";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AclRoleActionService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/acl-roles-actions`;
  dataChange: BehaviorSubject<AclRolesActions[]> = new BehaviorSubject<AclRolesActions[]>([]);
  aclRoleActionData: AclRolesActions = new AclRolesActions();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AclRolesActions[] {
    return this.dataChange.value;
  }

  getDataAclRolesActions(): void {
    this.getAllAclRolesActions().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AclRolesActions[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAclRolesActions(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAclRoleAction(aclRoleAction:AclRolesActions) {
    return this.http.post(this.basePath, aclRoleAction);
  }
  getAclRoleAction(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAclRoleAction(id:any, aclRoleAction:AclRolesActions) {
    return this.http.put(this.basePath + '/' + id, aclRoleAction);
  }
  deleteAclRoleAction(id:any) {
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
  
  findOneByAccessOverride(accessOverride:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccessOverride/' + accessOverride + '?' + attributes);
  }
  
  findOneByRoleId(roleId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRoleId/' + roleId + '?' + attributes);
  }
  
  findOneByActionId(actionId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActionId/' + actionId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateAclRoleActionById(id:any, aclRoleAction:AclRolesActions) {
      return this.http.post(this.basePath + '/updateAclRoleActionById?id=' + id, aclRoleAction);
  }
  
  updateAclRoleActionByDeleted(deleted:any, aclRoleAction:AclRolesActions) {
      return this.http.post(this.basePath + '/updateAclRoleActionByDeleted?deleted=' + deleted, aclRoleAction);
  }
  
  updateAclRoleActionByAccessOverride(accessOverride:any, aclRoleAction:AclRolesActions) {
      return this.http.post(this.basePath + '/updateAclRoleActionByAccessOverride?accessOverride=' + accessOverride, aclRoleAction);
  }
  
  updateAclRoleActionByRoleId(roleId:any, aclRoleAction:AclRolesActions) {
      return this.http.post(this.basePath + '/updateAclRoleActionByRoleId?roleId=' + roleId, aclRoleAction);
  }
  
  updateAclRoleActionByActionId(actionId:any, aclRoleAction:AclRolesActions) {
      return this.http.post(this.basePath + '/updateAclRoleActionByActionId?actionId=' + actionId, aclRoleAction);
  }
  
  updateAclRoleActionByDateModified(dateModified:any, aclRoleAction:AclRolesActions) {
      return this.http.post(this.basePath + '/updateAclRoleActionByDateModified?dateModified=' + dateModified, aclRoleAction);
  }
  
  
  
  //</es-section>
}
