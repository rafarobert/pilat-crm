/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:40 GMT-0400 (Bolivia Time)
 * Time: 2:43:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:40 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:40
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ProjectsCases} from "../models/projectsCases";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProjectCaseService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/projects-cases`;
  dataChange: BehaviorSubject<ProjectsCases[]> = new BehaviorSubject<ProjectsCases[]>([]);
  projectCaseData: ProjectsCases = new ProjectsCases();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProjectsCases[] {
    return this.dataChange.value;
  }

  getDataProjectsCases(): void {
    this.getAllProjectsCases().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProjectsCases[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProjectsCases(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProjectCase(projectCase:ProjectsCases) {
    return this.http.post(this.basePath, projectCase);
  }
  getProjectCase(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProjectCase(id:any, projectCase:ProjectsCases) {
    return this.http.put(this.basePath + '/' + id, projectCase);
  }
  deleteProjectCase(id:any) {
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
  
  findOneByCaseId(caseId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCaseId/' + caseId + '?' + attributes);
  }
  
  findOneByProjectId(projectId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProjectId/' + projectId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateProjectCaseById(id:any, projectCase:ProjectsCases) {
      return this.http.post(this.basePath + '/updateProjectCaseById?id=' + id, projectCase);
  }
  
  updateProjectCaseByDeleted(deleted:any, projectCase:ProjectsCases) {
      return this.http.post(this.basePath + '/updateProjectCaseByDeleted?deleted=' + deleted, projectCase);
  }
  
  updateProjectCaseByCaseId(caseId:any, projectCase:ProjectsCases) {
      return this.http.post(this.basePath + '/updateProjectCaseByCaseId?caseId=' + caseId, projectCase);
  }
  
  updateProjectCaseByProjectId(projectId:any, projectCase:ProjectsCases) {
      return this.http.post(this.basePath + '/updateProjectCaseByProjectId?projectId=' + projectId, projectCase);
  }
  
  updateProjectCaseByDateModified(dateModified:any, projectCase:ProjectsCases) {
      return this.http.post(this.basePath + '/updateProjectCaseByDateModified?dateModified=' + dateModified, projectCase);
  }
  
  
  
  //</es-section>
}
