/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:56 GMT-0400 (Bolivia Time)
 * Time: 2:41:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:56 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:56
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AowWorkflow} from "../models/aowWorkflow";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AowWorkflowService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aow-workflow`;
  dataChange: BehaviorSubject<AowWorkflow[]> = new BehaviorSubject<AowWorkflow[]>([]);
  aowWorkflowData: AowWorkflow = new AowWorkflow();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AowWorkflow[] {
    return this.dataChange.value;
  }

  getDataAowWorkflow(): void {
    this.getAllAowWorkflow().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AowWorkflow[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAowWorkflow(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAowWorkflow(aowWorkflow:AowWorkflow) {
    return this.http.post(this.basePath, aowWorkflow);
  }
  getAowWorkflow(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAowWorkflow(id:any, aowWorkflow:AowWorkflow) {
    return this.http.put(this.basePath + '/' + id, aowWorkflow);
  }
  deleteAowWorkflow(id:any) {
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
  
  findOneByMultipleRuns(multipleRuns:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMultipleRuns/' + multipleRuns + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByFlowModule(flowModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFlowModule/' + flowModule + '?' + attributes);
  }
  
  findOneByFlowRunOn(flowRunOn:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFlowRunOn/' + flowRunOn + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByRunWhen(runWhen:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRunWhen/' + runWhen + '?' + attributes);
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
  
  
  updateAowWorkflowById(id:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowById?id=' + id, aowWorkflow);
  }
  
  updateAowWorkflowByDeleted(deleted:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowByDeleted?deleted=' + deleted, aowWorkflow);
  }
  
  updateAowWorkflowByMultipleRuns(multipleRuns:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowByMultipleRuns?multipleRuns=' + multipleRuns, aowWorkflow);
  }
  
  updateAowWorkflowByName(name:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowByName?name=' + name, aowWorkflow);
  }
  
  updateAowWorkflowByFlowModule(flowModule:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowByFlowModule?flowModule=' + flowModule, aowWorkflow);
  }
  
  updateAowWorkflowByFlowRunOn(flowRunOn:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowByFlowRunOn?flowRunOn=' + flowRunOn, aowWorkflow);
  }
  
  updateAowWorkflowByStatus(status:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowByStatus?status=' + status, aowWorkflow);
  }
  
  updateAowWorkflowByRunWhen(runWhen:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowByRunWhen?runWhen=' + runWhen, aowWorkflow);
  }
  
  updateAowWorkflowByDescription(description:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowByDescription?description=' + description, aowWorkflow);
  }
  
  updateAowWorkflowByDateEntered(dateEntered:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowByDateEntered?dateEntered=' + dateEntered, aowWorkflow);
  }
  
  updateAowWorkflowByDateModified(dateModified:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowByDateModified?dateModified=' + dateModified, aowWorkflow);
  }
  
  updateAowWorkflowByModifiedUserId(modifiedUserId:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowByModifiedUserId?modifiedUserId=' + modifiedUserId, aowWorkflow);
  }
  
  updateAowWorkflowByCreatedBy(createdBy:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowByCreatedBy?createdBy=' + createdBy, aowWorkflow);
  }
  
  updateAowWorkflowByAssignedUserId(assignedUserId:any, aowWorkflow:AowWorkflow) {
      return this.http.post(this.basePath + '/updateAowWorkflowByAssignedUserId?assignedUserId=' + assignedUserId, aowWorkflow);
  }
  
  
  
  //</es-section>
}
