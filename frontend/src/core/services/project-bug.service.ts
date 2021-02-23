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
import {ProjectsBugs} from "../models/projectsBugs";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProjectBugService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/projects-bugs`;
  dataChange: BehaviorSubject<ProjectsBugs[]> = new BehaviorSubject<ProjectsBugs[]>([]);
  projectBugData: ProjectsBugs = new ProjectsBugs();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProjectsBugs[] {
    return this.dataChange.value;
  }

  getDataProjectsBugs(): void {
    this.getAllProjectsBugs().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProjectsBugs[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProjectsBugs(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProjectBug(projectBug:ProjectsBugs) {
    return this.http.post(this.basePath, projectBug);
  }
  getProjectBug(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProjectBug(id:any, projectBug:ProjectsBugs) {
    return this.http.put(this.basePath + '/' + id, projectBug);
  }
  deleteProjectBug(id:any) {
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
  
  findOneByBugId(bugId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBugId/' + bugId + '?' + attributes);
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
  
  
  updateProjectBugById(id:any, projectBug:ProjectsBugs) {
      return this.http.post(this.basePath + '/updateProjectBugById?id=' + id, projectBug);
  }
  
  updateProjectBugByDeleted(deleted:any, projectBug:ProjectsBugs) {
      return this.http.post(this.basePath + '/updateProjectBugByDeleted?deleted=' + deleted, projectBug);
  }
  
  updateProjectBugByBugId(bugId:any, projectBug:ProjectsBugs) {
      return this.http.post(this.basePath + '/updateProjectBugByBugId?bugId=' + bugId, projectBug);
  }
  
  updateProjectBugByProjectId(projectId:any, projectBug:ProjectsBugs) {
      return this.http.post(this.basePath + '/updateProjectBugByProjectId?projectId=' + projectId, projectBug);
  }
  
  updateProjectBugByDateModified(dateModified:any, projectBug:ProjectsBugs) {
      return this.http.post(this.basePath + '/updateProjectBugByDateModified?dateModified=' + dateModified, projectBug);
  }
  
  
  
  //</es-section>
}
