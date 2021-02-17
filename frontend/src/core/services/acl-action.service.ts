/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:52 GMT-0400 (Bolivia Time)
 * Time: 2:40:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:52 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:52
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AclActions} from "../models/aclActions";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AclActionService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/acl-actions`;
  dataChange: BehaviorSubject<AclActions[]> = new BehaviorSubject<AclActions[]>([]);
  aclActionData: AclActions = new AclActions();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AclActions[] {
    return this.dataChange.value;
  }

  getDataAclActions(): void {
    this.getAllAclActions().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AclActions[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAclActions(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAclAction(aclAction:AclActions) {
    return this.http.post(this.basePath, aclAction);
  }
  getAclAction(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAclAction(id:any, aclAction:AclActions) {
    return this.http.put(this.basePath + '/' + id, aclAction);
  }
  deleteAclAction(id:any) {
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
  
  findOneByAclaccess(aclaccess:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAclaccess/' + aclaccess + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByCategory(category:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCategory/' + category + '?' + attributes);
  }
  
  findOneByAcltype(acltype:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAcltype/' + acltype + '?' + attributes);
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
  
  
  updateAclActionById(id:any, aclAction:AclActions) {
      return this.http.post(this.basePath + '/updateAclActionById?id=' + id, aclAction);
  }
  
  updateAclActionByDeleted(deleted:any, aclAction:AclActions) {
      return this.http.post(this.basePath + '/updateAclActionByDeleted?deleted=' + deleted, aclAction);
  }
  
  updateAclActionByAclaccess(aclaccess:any, aclAction:AclActions) {
      return this.http.post(this.basePath + '/updateAclActionByAclaccess?aclaccess=' + aclaccess, aclAction);
  }
  
  updateAclActionByName(name:any, aclAction:AclActions) {
      return this.http.post(this.basePath + '/updateAclActionByName?name=' + name, aclAction);
  }
  
  updateAclActionByCategory(category:any, aclAction:AclActions) {
      return this.http.post(this.basePath + '/updateAclActionByCategory?category=' + category, aclAction);
  }
  
  updateAclActionByAcltype(acltype:any, aclAction:AclActions) {
      return this.http.post(this.basePath + '/updateAclActionByAcltype?acltype=' + acltype, aclAction);
  }
  
  updateAclActionByDateEntered(dateEntered:any, aclAction:AclActions) {
      return this.http.post(this.basePath + '/updateAclActionByDateEntered?dateEntered=' + dateEntered, aclAction);
  }
  
  updateAclActionByDateModified(dateModified:any, aclAction:AclActions) {
      return this.http.post(this.basePath + '/updateAclActionByDateModified?dateModified=' + dateModified, aclAction);
  }
  
  updateAclActionByModifiedUserId(modifiedUserId:any, aclAction:AclActions) {
      return this.http.post(this.basePath + '/updateAclActionByModifiedUserId?modifiedUserId=' + modifiedUserId, aclAction);
  }
  
  updateAclActionByCreatedBy(createdBy:any, aclAction:AclActions) {
      return this.http.post(this.basePath + '/updateAclActionByCreatedBy?createdBy=' + createdBy, aclAction);
  }
  
  
  
  //</es-section>
}
