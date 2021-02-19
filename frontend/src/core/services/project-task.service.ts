/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:47 GMT-0400 (Bolivia Time)
 * Time: 2:43:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:47 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:47
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ProjectTask} from "../models/projectTask";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProjectTaskService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/project-task`;
  dataChange: BehaviorSubject<ProjectTask[]> = new BehaviorSubject<ProjectTask[]>([]);
  projectTaskData: ProjectTask = new ProjectTask();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProjectTask[] {
    return this.dataChange.value;
  }

  getDataProjectTask(): void {
    this.getAllProjectTask().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProjectTask[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProjectTask(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProjectTask(projectTask:ProjectTask) {
    return this.http.post(this.basePath, projectTask);
  }
  getProjectTask(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProjectTask(id:any, projectTask:ProjectTask) {
    return this.http.put(this.basePath + '/' + id, projectTask);
  }
  deleteProjectTask(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByMilestoneFlag(milestoneFlag:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMilestoneFlag/' + milestoneFlag + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByProjectTaskId(projectTaskId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProjectTaskId/' + projectTaskId + '?' + attributes);
  }
  
  findOneByTimeStart(timeStart:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTimeStart/' + timeStart + '?' + attributes);
  }
  
  findOneByTimeFinish(timeFinish:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTimeFinish/' + timeFinish + '?' + attributes);
  }
  
  findOneByDuration(duration:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDuration/' + duration + '?' + attributes);
  }
  
  findOneByActualDuration(actualDuration:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActualDuration/' + actualDuration + '?' + attributes);
  }
  
  findOneByPercentComplete(percentComplete:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPercentComplete/' + percentComplete + '?' + attributes);
  }
  
  findOneByParentTaskId(parentTaskId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentTaskId/' + parentTaskId + '?' + attributes);
  }
  
  findOneByOrderNumber(orderNumber:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOrderNumber/' + orderNumber + '?' + attributes);
  }
  
  findOneByTaskNumber(taskNumber:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTaskNumber/' + taskNumber + '?' + attributes);
  }
  
  findOneByEstimatedEffort(estimatedEffort:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEstimatedEffort/' + estimatedEffort + '?' + attributes);
  }
  
  findOneByActualEffort(actualEffort:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActualEffort/' + actualEffort + '?' + attributes);
  }
  
  findOneByUtilization(utilization:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUtilization/' + utilization + '?' + attributes);
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
  
  findOneByRelationshipType(relationshipType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelationshipType/' + relationshipType + '?' + attributes);
  }
  
  findOneByPriority(priority:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPriority/' + priority + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByPredecessors(predecessors:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPredecessors/' + predecessors + '?' + attributes);
  }
  
  findOneByDurationUnit(durationUnit:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDurationUnit/' + durationUnit + '?' + attributes);
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
  
  findOneByDateStart(dateStart:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateStart/' + dateStart + '?' + attributes);
  }
  
  findOneByDateFinish(dateFinish:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateFinish/' + dateFinish + '?' + attributes);
  }
  
  findOneByDateDue(dateDue:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateDue/' + dateDue + '?' + attributes);
  }
  
  findOneByProjectId(projectId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProjectId/' + projectId + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
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
  
  
  updateProjectTaskById(id:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskById?id=' + id, projectTask);
  }
  
  updateProjectTaskByMilestoneFlag(milestoneFlag:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByMilestoneFlag?milestoneFlag=' + milestoneFlag, projectTask);
  }
  
  updateProjectTaskByDeleted(deleted:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByDeleted?deleted=' + deleted, projectTask);
  }
  
  updateProjectTaskByProjectTaskId(projectTaskId:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByProjectTaskId?projectTaskId=' + projectTaskId, projectTask);
  }
  
  updateProjectTaskByTimeStart(timeStart:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByTimeStart?timeStart=' + timeStart, projectTask);
  }
  
  updateProjectTaskByTimeFinish(timeFinish:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByTimeFinish?timeFinish=' + timeFinish, projectTask);
  }
  
  updateProjectTaskByDuration(duration:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByDuration?duration=' + duration, projectTask);
  }
  
  updateProjectTaskByActualDuration(actualDuration:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByActualDuration?actualDuration=' + actualDuration, projectTask);
  }
  
  updateProjectTaskByPercentComplete(percentComplete:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByPercentComplete?percentComplete=' + percentComplete, projectTask);
  }
  
  updateProjectTaskByParentTaskId(parentTaskId:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByParentTaskId?parentTaskId=' + parentTaskId, projectTask);
  }
  
  updateProjectTaskByOrderNumber(orderNumber:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByOrderNumber?orderNumber=' + orderNumber, projectTask);
  }
  
  updateProjectTaskByTaskNumber(taskNumber:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByTaskNumber?taskNumber=' + taskNumber, projectTask);
  }
  
  updateProjectTaskByEstimatedEffort(estimatedEffort:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByEstimatedEffort?estimatedEffort=' + estimatedEffort, projectTask);
  }
  
  updateProjectTaskByActualEffort(actualEffort:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByActualEffort?actualEffort=' + actualEffort, projectTask);
  }
  
  updateProjectTaskByUtilization(utilization:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByUtilization?utilization=' + utilization, projectTask);
  }
  
  updateProjectTaskByName(name:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByName?name=' + name, projectTask);
  }
  
  updateProjectTaskByStatus(status:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByStatus?status=' + status, projectTask);
  }
  
  updateProjectTaskByRelationshipType(relationshipType:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByRelationshipType?relationshipType=' + relationshipType, projectTask);
  }
  
  updateProjectTaskByPriority(priority:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByPriority?priority=' + priority, projectTask);
  }
  
  updateProjectTaskByDescription(description:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByDescription?description=' + description, projectTask);
  }
  
  updateProjectTaskByPredecessors(predecessors:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByPredecessors?predecessors=' + predecessors, projectTask);
  }
  
  updateProjectTaskByDurationUnit(durationUnit:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByDurationUnit?durationUnit=' + durationUnit, projectTask);
  }
  
  updateProjectTaskByDateEntered(dateEntered:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByDateEntered?dateEntered=' + dateEntered, projectTask);
  }
  
  updateProjectTaskByDateModified(dateModified:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByDateModified?dateModified=' + dateModified, projectTask);
  }
  
  updateProjectTaskByDateStart(dateStart:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByDateStart?dateStart=' + dateStart, projectTask);
  }
  
  updateProjectTaskByDateFinish(dateFinish:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByDateFinish?dateFinish=' + dateFinish, projectTask);
  }
  
  updateProjectTaskByDateDue(dateDue:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByDateDue?dateDue=' + dateDue, projectTask);
  }
  
  updateProjectTaskByProjectId(projectId:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByProjectId?projectId=' + projectId, projectTask);
  }
  
  updateProjectTaskByAssignedUserId(assignedUserId:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByAssignedUserId?assignedUserId=' + assignedUserId, projectTask);
  }
  
  updateProjectTaskByModifiedUserId(modifiedUserId:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByModifiedUserId?modifiedUserId=' + modifiedUserId, projectTask);
  }
  
  updateProjectTaskByCreatedBy(createdBy:any, projectTask:ProjectTask) {
      return this.http.post(this.basePath + '/updateProjectTaskByCreatedBy?createdBy=' + createdBy, projectTask);
  }
  
  
  
  //</es-section>
}
