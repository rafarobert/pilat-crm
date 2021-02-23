/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:20 GMT-0400 (Bolivia Time)
 * Time: 2:44:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:20 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:20
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Tasks} from "../models/tasks";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/tasks`;
  dataChange: BehaviorSubject<Tasks[]> = new BehaviorSubject<Tasks[]>([]);
  taskData: Tasks = new Tasks();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Tasks[] {
    return this.dataChange.value;
  }

  getDataTasks(): void {
    this.getAllTasks().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Tasks[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllTasks(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createTask(task:Tasks) {
    return this.http.post(this.basePath, task);
  }
  getTask(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateTask(id:any, task:Tasks) {
    return this.http.put(this.basePath + '/' + id, task);
  }
  deleteTask(id:any) {
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
  
  findOneByDateDueFlag(dateDueFlag:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateDueFlag/' + dateDueFlag + '?' + attributes);
  }
  
  findOneByDateStartFlag(dateStartFlag:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateStartFlag/' + dateStartFlag + '?' + attributes);
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
  
  findOneByParentType(parentType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentType/' + parentType + '?' + attributes);
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
  
  findOneByDateDue(dateDue:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateDue/' + dateDue + '?' + attributes);
  }
  
  findOneByDateStart(dateStart:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateStart/' + dateStart + '?' + attributes);
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
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  findOneByContactId(contactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactId/' + contactId + '?' + attributes);
  }
  
  
  updateTaskById(id:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskById?id=' + id, task);
  }
  
  updateTaskByDeleted(deleted:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByDeleted?deleted=' + deleted, task);
  }
  
  updateTaskByDateDueFlag(dateDueFlag:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByDateDueFlag?dateDueFlag=' + dateDueFlag, task);
  }
  
  updateTaskByDateStartFlag(dateStartFlag:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByDateStartFlag?dateStartFlag=' + dateStartFlag, task);
  }
  
  updateTaskByName(name:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByName?name=' + name, task);
  }
  
  updateTaskByStatus(status:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByStatus?status=' + status, task);
  }
  
  updateTaskByParentType(parentType:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByParentType?parentType=' + parentType, task);
  }
  
  updateTaskByPriority(priority:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByPriority?priority=' + priority, task);
  }
  
  updateTaskByDescription(description:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByDescription?description=' + description, task);
  }
  
  updateTaskByDateEntered(dateEntered:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByDateEntered?dateEntered=' + dateEntered, task);
  }
  
  updateTaskByDateModified(dateModified:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByDateModified?dateModified=' + dateModified, task);
  }
  
  updateTaskByDateDue(dateDue:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByDateDue?dateDue=' + dateDue, task);
  }
  
  updateTaskByDateStart(dateStart:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByDateStart?dateStart=' + dateStart, task);
  }
  
  updateTaskByModifiedUserId(modifiedUserId:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByModifiedUserId?modifiedUserId=' + modifiedUserId, task);
  }
  
  updateTaskByCreatedBy(createdBy:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByCreatedBy?createdBy=' + createdBy, task);
  }
  
  updateTaskByAssignedUserId(assignedUserId:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByAssignedUserId?assignedUserId=' + assignedUserId, task);
  }
  
  updateTaskByParentId(parentId:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByParentId?parentId=' + parentId, task);
  }
  
  updateTaskByContactId(contactId:any, task:Tasks) {
      return this.http.post(this.basePath + '/updateTaskByContactId?contactId=' + contactId, task);
  }
  
  
  
  //</es-section>
}
