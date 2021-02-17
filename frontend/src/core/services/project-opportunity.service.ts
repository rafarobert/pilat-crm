/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:21:47 GMT-0400 (Bolivia Time)
 * Time: 4:21:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:21:47 GMT-0400 (Bolivia Time)
 * Last time updated: 4:21:47
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ProjectsOpportunities} from "../models/projectsOpportunities";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProjectOpportunityService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/projects-opportunities`;
  dataChange: BehaviorSubject<ProjectsOpportunities[]> = new BehaviorSubject<ProjectsOpportunities[]>([]);
  projectOpportunityData: ProjectsOpportunities = new ProjectsOpportunities();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProjectsOpportunities[] {
    return this.dataChange.value;
  }

  getDataProjectsOpportunities(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllProjectsOpportunities(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProjectsOpportunities[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProjectsOpportunities(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProjectOpportunity(projectOpportunity:ProjectsOpportunities) {
    return this.http.post(this.basePath, projectOpportunity);
  }
  getProjectOpportunity(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProjectOpportunity(id:any, projectOpportunity:ProjectsOpportunities) {
    return this.http.put(this.basePath + '/' + id, projectOpportunity);
  }
  deleteProjectOpportunity(id:any) {
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
  
  findOneByOpportunityId(opportunityId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOpportunityId/' + opportunityId + '?' + attributes);
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
  
  
  updateProjectOpportunityById(id:any, projectOpportunity:ProjectsOpportunities) {
      return this.http.post(this.basePath + '/updateProjectOpportunityById?id=' + id, projectOpportunity);
  }
  
  updateProjectOpportunityByDeleted(deleted:any, projectOpportunity:ProjectsOpportunities) {
      return this.http.post(this.basePath + '/updateProjectOpportunityByDeleted?deleted=' + deleted, projectOpportunity);
  }
  
  updateProjectOpportunityByOpportunityId(opportunityId:any, projectOpportunity:ProjectsOpportunities) {
      return this.http.post(this.basePath + '/updateProjectOpportunityByOpportunityId?opportunityId=' + opportunityId, projectOpportunity);
  }
  
  updateProjectOpportunityByProjectId(projectId:any, projectOpportunity:ProjectsOpportunities) {
      return this.http.post(this.basePath + '/updateProjectOpportunityByProjectId?projectId=' + projectId, projectOpportunity);
  }
  
  updateProjectOpportunityByDateModified(dateModified:any, projectOpportunity:ProjectsOpportunities) {
      return this.http.post(this.basePath + '/updateProjectOpportunityByDateModified?dateModified=' + dateModified, projectOpportunity);
  }
  
  
  
  //</es-section>
}
