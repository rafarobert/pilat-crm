/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:53 GMT-0400 (Bolivia Time)
 * Time: 2:41:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:53 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:53
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AowActions} from "../models/aowActions";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AowActionService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aow-actions`;
  dataChange: BehaviorSubject<AowActions[]> = new BehaviorSubject<AowActions[]>([]);
  aowActionData: AowActions = new AowActions();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AowActions[] {
    return this.dataChange.value;
  }

  getDataAowActions(): void {
    this.getAllAowActions().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AowActions[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAowActions(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAowAction(aowAction:AowActions) {
    return this.http.post(this.basePath, aowAction);
  }
  getAowAction(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAowAction(id:any, aowAction:AowActions) {
    return this.http.put(this.basePath + '/' + id, aowAction);
  }
  deleteAowAction(id:any) {
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
  
  findOneByActionOrder(actionOrder:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActionOrder/' + actionOrder + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByAction(action:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAction/' + action + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByParameters(parameters:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParameters/' + parameters + '?' + attributes);
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
  
  findOneByAowWorkflowId(aowWorkflowId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAowWorkflowId/' + aowWorkflowId + '?' + attributes);
  }
  
  
  updateAowActionById(id:any, aowAction:AowActions) {
      return this.http.post(this.basePath + '/updateAowActionById?id=' + id, aowAction);
  }
  
  updateAowActionByDeleted(deleted:any, aowAction:AowActions) {
      return this.http.post(this.basePath + '/updateAowActionByDeleted?deleted=' + deleted, aowAction);
  }
  
  updateAowActionByActionOrder(actionOrder:any, aowAction:AowActions) {
      return this.http.post(this.basePath + '/updateAowActionByActionOrder?actionOrder=' + actionOrder, aowAction);
  }
  
  updateAowActionByName(name:any, aowAction:AowActions) {
      return this.http.post(this.basePath + '/updateAowActionByName?name=' + name, aowAction);
  }
  
  updateAowActionByAction(action:any, aowAction:AowActions) {
      return this.http.post(this.basePath + '/updateAowActionByAction?action=' + action, aowAction);
  }
  
  updateAowActionByDescription(description:any, aowAction:AowActions) {
      return this.http.post(this.basePath + '/updateAowActionByDescription?description=' + description, aowAction);
  }
  
  updateAowActionByParameters(parameters:any, aowAction:AowActions) {
      return this.http.post(this.basePath + '/updateAowActionByParameters?parameters=' + parameters, aowAction);
  }
  
  updateAowActionByDateEntered(dateEntered:any, aowAction:AowActions) {
      return this.http.post(this.basePath + '/updateAowActionByDateEntered?dateEntered=' + dateEntered, aowAction);
  }
  
  updateAowActionByDateModified(dateModified:any, aowAction:AowActions) {
      return this.http.post(this.basePath + '/updateAowActionByDateModified?dateModified=' + dateModified, aowAction);
  }
  
  updateAowActionByModifiedUserId(modifiedUserId:any, aowAction:AowActions) {
      return this.http.post(this.basePath + '/updateAowActionByModifiedUserId?modifiedUserId=' + modifiedUserId, aowAction);
  }
  
  updateAowActionByCreatedBy(createdBy:any, aowAction:AowActions) {
      return this.http.post(this.basePath + '/updateAowActionByCreatedBy?createdBy=' + createdBy, aowAction);
  }
  
  updateAowActionByAowWorkflowId(aowWorkflowId:any, aowAction:AowActions) {
      return this.http.post(this.basePath + '/updateAowActionByAowWorkflowId?aowWorkflowId=' + aowWorkflowId, aowAction);
  }
  
  
  
  //</es-section>
}
