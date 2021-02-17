/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:21 GMT-0400 (Bolivia Time)
 * Time: 2:41:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:21
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AopCaseUpdates} from "../models/aopCaseUpdates";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AopCaseUpdateService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aop-case-updates`;
  dataChange: BehaviorSubject<AopCaseUpdates[]> = new BehaviorSubject<AopCaseUpdates[]>([]);
  aopCaseUpdateData: AopCaseUpdates = new AopCaseUpdates();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AopCaseUpdates[] {
    return this.dataChange.value;
  }

  getDataAopCaseUpdates(): void {
    this.getAllAopCaseUpdates().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AopCaseUpdates[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAopCaseUpdates(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAopCaseUpdate(aopCaseUpdate:AopCaseUpdates) {
    return this.http.post(this.basePath, aopCaseUpdate);
  }
  getAopCaseUpdate(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAopCaseUpdate(id:any, aopCaseUpdate:AopCaseUpdates) {
    return this.http.put(this.basePath + '/' + id, aopCaseUpdate);
  }
  deleteAopCaseUpdate(id:any) {
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
  
  findOneByInternal(internal:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByInternal/' + internal + '?' + attributes);
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
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  findOneByCaseId(caseId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCaseId/' + caseId + '?' + attributes);
  }
  
  findOneByContactId(contactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactId/' + contactId + '?' + attributes);
  }
  
  
  updateAopCaseUpdateById(id:any, aopCaseUpdate:AopCaseUpdates) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateById?id=' + id, aopCaseUpdate);
  }
  
  updateAopCaseUpdateByDeleted(deleted:any, aopCaseUpdate:AopCaseUpdates) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateByDeleted?deleted=' + deleted, aopCaseUpdate);
  }
  
  updateAopCaseUpdateByInternal(internal:any, aopCaseUpdate:AopCaseUpdates) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateByInternal?internal=' + internal, aopCaseUpdate);
  }
  
  updateAopCaseUpdateByName(name:any, aopCaseUpdate:AopCaseUpdates) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateByName?name=' + name, aopCaseUpdate);
  }
  
  updateAopCaseUpdateByDescription(description:any, aopCaseUpdate:AopCaseUpdates) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateByDescription?description=' + description, aopCaseUpdate);
  }
  
  updateAopCaseUpdateByDateEntered(dateEntered:any, aopCaseUpdate:AopCaseUpdates) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateByDateEntered?dateEntered=' + dateEntered, aopCaseUpdate);
  }
  
  updateAopCaseUpdateByDateModified(dateModified:any, aopCaseUpdate:AopCaseUpdates) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateByDateModified?dateModified=' + dateModified, aopCaseUpdate);
  }
  
  updateAopCaseUpdateByModifiedUserId(modifiedUserId:any, aopCaseUpdate:AopCaseUpdates) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateByModifiedUserId?modifiedUserId=' + modifiedUserId, aopCaseUpdate);
  }
  
  updateAopCaseUpdateByCreatedBy(createdBy:any, aopCaseUpdate:AopCaseUpdates) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateByCreatedBy?createdBy=' + createdBy, aopCaseUpdate);
  }
  
  updateAopCaseUpdateByAssignedUserId(assignedUserId:any, aopCaseUpdate:AopCaseUpdates) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateByAssignedUserId?assignedUserId=' + assignedUserId, aopCaseUpdate);
  }
  
  updateAopCaseUpdateByCaseId(caseId:any, aopCaseUpdate:AopCaseUpdates) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateByCaseId?caseId=' + caseId, aopCaseUpdate);
  }
  
  updateAopCaseUpdateByContactId(contactId:any, aopCaseUpdate:AopCaseUpdates) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateByContactId?contactId=' + contactId, aopCaseUpdate);
  }
  
  
  
  //</es-section>
}
