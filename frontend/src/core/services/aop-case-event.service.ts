/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:19 GMT-0400 (Bolivia Time)
 * Time: 2:41:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:19 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:19
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AopCaseEvents} from "../models/aopCaseEvents";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AopCaseEventService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aop-case-events`;
  dataChange: BehaviorSubject<AopCaseEvents[]> = new BehaviorSubject<AopCaseEvents[]>([]);
  aopCaseEventData: AopCaseEvents = new AopCaseEvents();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AopCaseEvents[] {
    return this.dataChange.value;
  }

  getDataAopCaseEvents(): void {
    this.getAllAopCaseEvents().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AopCaseEvents[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAopCaseEvents(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAopCaseEvent(aopCaseEvent:AopCaseEvents) {
    return this.http.post(this.basePath, aopCaseEvent);
  }
  getAopCaseEvent(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAopCaseEvent(id:any, aopCaseEvent:AopCaseEvents) {
    return this.http.put(this.basePath + '/' + id, aopCaseEvent);
  }
  deleteAopCaseEvent(id:any) {
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
  
  
  updateAopCaseEventById(id:any, aopCaseEvent:AopCaseEvents) {
      return this.http.post(this.basePath + '/updateAopCaseEventById?id=' + id, aopCaseEvent);
  }
  
  updateAopCaseEventByDeleted(deleted:any, aopCaseEvent:AopCaseEvents) {
      return this.http.post(this.basePath + '/updateAopCaseEventByDeleted?deleted=' + deleted, aopCaseEvent);
  }
  
  updateAopCaseEventByName(name:any, aopCaseEvent:AopCaseEvents) {
      return this.http.post(this.basePath + '/updateAopCaseEventByName?name=' + name, aopCaseEvent);
  }
  
  updateAopCaseEventByDescription(description:any, aopCaseEvent:AopCaseEvents) {
      return this.http.post(this.basePath + '/updateAopCaseEventByDescription?description=' + description, aopCaseEvent);
  }
  
  updateAopCaseEventByDateEntered(dateEntered:any, aopCaseEvent:AopCaseEvents) {
      return this.http.post(this.basePath + '/updateAopCaseEventByDateEntered?dateEntered=' + dateEntered, aopCaseEvent);
  }
  
  updateAopCaseEventByDateModified(dateModified:any, aopCaseEvent:AopCaseEvents) {
      return this.http.post(this.basePath + '/updateAopCaseEventByDateModified?dateModified=' + dateModified, aopCaseEvent);
  }
  
  updateAopCaseEventByModifiedUserId(modifiedUserId:any, aopCaseEvent:AopCaseEvents) {
      return this.http.post(this.basePath + '/updateAopCaseEventByModifiedUserId?modifiedUserId=' + modifiedUserId, aopCaseEvent);
  }
  
  updateAopCaseEventByCreatedBy(createdBy:any, aopCaseEvent:AopCaseEvents) {
      return this.http.post(this.basePath + '/updateAopCaseEventByCreatedBy?createdBy=' + createdBy, aopCaseEvent);
  }
  
  updateAopCaseEventByAssignedUserId(assignedUserId:any, aopCaseEvent:AopCaseEvents) {
      return this.http.post(this.basePath + '/updateAopCaseEventByAssignedUserId?assignedUserId=' + assignedUserId, aopCaseEvent);
  }
  
  updateAopCaseEventByCaseId(caseId:any, aopCaseEvent:AopCaseEvents) {
      return this.http.post(this.basePath + '/updateAopCaseEventByCaseId?caseId=' + caseId, aopCaseEvent);
  }
  
  
  
  //</es-section>
}
