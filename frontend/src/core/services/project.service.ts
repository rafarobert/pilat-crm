/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:38 GMT-0400 (Bolivia Time)
 * Time: 2:43:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:38 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:38
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Project} from "../models/project";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/project`;
  dataChange: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  projectData: Project = new Project();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Project[] {
    return this.dataChange.value;
  }

  getDataProject(): void {
    this.getAllProject().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Project[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProject(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProject(project:Project) {
    return this.http.post(this.basePath, project);
  }
  getProject(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProject(id:any, project:Project) {
    return this.http.put(this.basePath + '/' + id, project);
  }
  deleteProject(id:any) {
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
  
  findOneByOverrideBusinessHours(overrideBusinessHours:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOverrideBusinessHours/' + overrideBusinessHours + '?' + attributes);
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
  
  findOneByEstimatedStartDate(estimatedStartDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEstimatedStartDate/' + estimatedStartDate + '?' + attributes);
  }
  
  findOneByEstimatedEndDate(estimatedEndDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEstimatedEndDate/' + estimatedEndDate + '?' + attributes);
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
  
  
  updateProjectById(id:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectById?id=' + id, project);
  }
  
  updateProjectByDeleted(deleted:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectByDeleted?deleted=' + deleted, project);
  }
  
  updateProjectByOverrideBusinessHours(overrideBusinessHours:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectByOverrideBusinessHours?overrideBusinessHours=' + overrideBusinessHours, project);
  }
  
  updateProjectByName(name:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectByName?name=' + name, project);
  }
  
  updateProjectByStatus(status:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectByStatus?status=' + status, project);
  }
  
  updateProjectByPriority(priority:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectByPriority?priority=' + priority, project);
  }
  
  updateProjectByDescription(description:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectByDescription?description=' + description, project);
  }
  
  updateProjectByDateEntered(dateEntered:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectByDateEntered?dateEntered=' + dateEntered, project);
  }
  
  updateProjectByDateModified(dateModified:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectByDateModified?dateModified=' + dateModified, project);
  }
  
  updateProjectByEstimatedStartDate(estimatedStartDate:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectByEstimatedStartDate?estimatedStartDate=' + estimatedStartDate, project);
  }
  
  updateProjectByEstimatedEndDate(estimatedEndDate:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectByEstimatedEndDate?estimatedEndDate=' + estimatedEndDate, project);
  }
  
  updateProjectByAssignedUserId(assignedUserId:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectByAssignedUserId?assignedUserId=' + assignedUserId, project);
  }
  
  updateProjectByModifiedUserId(modifiedUserId:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectByModifiedUserId?modifiedUserId=' + modifiedUserId, project);
  }
  
  updateProjectByCreatedBy(createdBy:any, project:Project) {
      return this.http.post(this.basePath + '/updateProjectByCreatedBy?createdBy=' + createdBy, project);
  }
  
  
  
  //</es-section>
}
