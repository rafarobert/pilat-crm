/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:04 GMT-0400 (Bolivia Time)
 * Time: 2:41:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:04 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:4
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AmTasktemplates} from "../models/amTasktemplates";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AmTasktemplateService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/am-tasktemplates`;
  dataChange: BehaviorSubject<AmTasktemplates[]> = new BehaviorSubject<AmTasktemplates[]>([]);
  amTasktemplateData: AmTasktemplates = new AmTasktemplates();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AmTasktemplates[] {
    return this.dataChange.value;
  }

  getDataAmTasktemplates(): void {
    this.getAllAmTasktemplates().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AmTasktemplates[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAmTasktemplates(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAmTasktemplate(amTasktemplate:AmTasktemplates) {
    return this.http.post(this.basePath, amTasktemplate);
  }
  getAmTasktemplate(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAmTasktemplate(id:any, amTasktemplate:AmTasktemplates) {
    return this.http.put(this.basePath + '/' + id, amTasktemplate);
  }
  deleteAmTasktemplate(id:any) {
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
  
  findOneByMilestoneFlag(milestoneFlag:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMilestoneFlag/' + milestoneFlag + '?' + attributes);
  }
  
  findOneByPercentComplete(percentComplete:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPercentComplete/' + percentComplete + '?' + attributes);
  }
  
  findOneByPredecessors(predecessors:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPredecessors/' + predecessors + '?' + attributes);
  }
  
  findOneByTaskNumber(taskNumber:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTaskNumber/' + taskNumber + '?' + attributes);
  }
  
  findOneByOrderNumber(orderNumber:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOrderNumber/' + orderNumber + '?' + attributes);
  }
  
  findOneByEstimatedEffort(estimatedEffort:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEstimatedEffort/' + estimatedEffort + '?' + attributes);
  }
  
  findOneByDuration(duration:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDuration/' + duration + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByPriority(priority:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPriority/' + priority + '?' + attributes);
  }
  
  findOneByRelationshipType(relationshipType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelationshipType/' + relationshipType + '?' + attributes);
  }
  
  findOneByUtilization(utilization:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUtilization/' + utilization + '?' + attributes);
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
  
  
  updateAmTasktemplateById(id:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateById?id=' + id, amTasktemplate);
  }
  
  updateAmTasktemplateByDeleted(deleted:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByDeleted?deleted=' + deleted, amTasktemplate);
  }
  
  updateAmTasktemplateByMilestoneFlag(milestoneFlag:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByMilestoneFlag?milestoneFlag=' + milestoneFlag, amTasktemplate);
  }
  
  updateAmTasktemplateByPercentComplete(percentComplete:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByPercentComplete?percentComplete=' + percentComplete, amTasktemplate);
  }
  
  updateAmTasktemplateByPredecessors(predecessors:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByPredecessors?predecessors=' + predecessors, amTasktemplate);
  }
  
  updateAmTasktemplateByTaskNumber(taskNumber:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByTaskNumber?taskNumber=' + taskNumber, amTasktemplate);
  }
  
  updateAmTasktemplateByOrderNumber(orderNumber:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByOrderNumber?orderNumber=' + orderNumber, amTasktemplate);
  }
  
  updateAmTasktemplateByEstimatedEffort(estimatedEffort:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByEstimatedEffort?estimatedEffort=' + estimatedEffort, amTasktemplate);
  }
  
  updateAmTasktemplateByDuration(duration:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByDuration?duration=' + duration, amTasktemplate);
  }
  
  updateAmTasktemplateByName(name:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByName?name=' + name, amTasktemplate);
  }
  
  updateAmTasktemplateByStatus(status:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByStatus?status=' + status, amTasktemplate);
  }
  
  updateAmTasktemplateByPriority(priority:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByPriority?priority=' + priority, amTasktemplate);
  }
  
  updateAmTasktemplateByRelationshipType(relationshipType:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByRelationshipType?relationshipType=' + relationshipType, amTasktemplate);
  }
  
  updateAmTasktemplateByUtilization(utilization:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByUtilization?utilization=' + utilization, amTasktemplate);
  }
  
  updateAmTasktemplateByDescription(description:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByDescription?description=' + description, amTasktemplate);
  }
  
  updateAmTasktemplateByDateEntered(dateEntered:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByDateEntered?dateEntered=' + dateEntered, amTasktemplate);
  }
  
  updateAmTasktemplateByDateModified(dateModified:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByDateModified?dateModified=' + dateModified, amTasktemplate);
  }
  
  updateAmTasktemplateByModifiedUserId(modifiedUserId:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByModifiedUserId?modifiedUserId=' + modifiedUserId, amTasktemplate);
  }
  
  updateAmTasktemplateByCreatedBy(createdBy:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByCreatedBy?createdBy=' + createdBy, amTasktemplate);
  }
  
  updateAmTasktemplateByAssignedUserId(assignedUserId:any, amTasktemplate:AmTasktemplates) {
      return this.http.post(this.basePath + '/updateAmTasktemplateByAssignedUserId?assignedUserId=' + assignedUserId, amTasktemplate);
  }
  
  
  
  //</es-section>
}
