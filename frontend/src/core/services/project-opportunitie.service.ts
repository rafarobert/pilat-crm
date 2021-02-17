/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:42 GMT-0400 (Bolivia Time)
 * Time: 2:43:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:42 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:42
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
export class ProjectOpportunitieService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/projects-opportunities`;
  dataChange: BehaviorSubject<ProjectsOpportunities[]> = new BehaviorSubject<ProjectsOpportunities[]>([]);
  projectOpportunitieData: ProjectsOpportunities = new ProjectsOpportunities();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProjectsOpportunities[] {
    return this.dataChange.value;
  }

  getDataProjectsOpportunities(): void {
    this.getAllProjectsOpportunities().subscribe(async (res) => {
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
  createProjectOpportunitie(projectOpportunitie:ProjectsOpportunities) {
    return this.http.post(this.basePath, projectOpportunitie);
  }
  getProjectOpportunitie(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProjectOpportunitie(id:any, projectOpportunitie:ProjectsOpportunities) {
    return this.http.put(this.basePath + '/' + id, projectOpportunitie);
  }
  deleteProjectOpportunitie(id:any) {
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
  
  
  updateProjectOpportunitieById(id:any, projectOpportunitie:ProjectsOpportunities) {
      return this.http.post(this.basePath + '/updateProjectOpportunitieById?id=' + id, projectOpportunitie);
  }
  
  updateProjectOpportunitieByDeleted(deleted:any, projectOpportunitie:ProjectsOpportunities) {
      return this.http.post(this.basePath + '/updateProjectOpportunitieByDeleted?deleted=' + deleted, projectOpportunitie);
  }
  
  updateProjectOpportunitieByOpportunityId(opportunityId:any, projectOpportunitie:ProjectsOpportunities) {
      return this.http.post(this.basePath + '/updateProjectOpportunitieByOpportunityId?opportunityId=' + opportunityId, projectOpportunitie);
  }
  
  updateProjectOpportunitieByProjectId(projectId:any, projectOpportunitie:ProjectsOpportunities) {
      return this.http.post(this.basePath + '/updateProjectOpportunitieByProjectId?projectId=' + projectId, projectOpportunitie);
  }
  
  updateProjectOpportunitieByDateModified(dateModified:any, projectOpportunitie:ProjectsOpportunities) {
      return this.http.post(this.basePath + '/updateProjectOpportunitieByDateModified?dateModified=' + dateModified, projectOpportunitie);
  }
  
  
  findOpportunitiesOpportunityWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOpportunitiesOpportunityWithDeleted' + '?' + attributes);
  }
  
  findProjectProjectWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findProjectProjectWithDeleted' + '?' + attributes);
  }
  
  
  filterProjectsOpportunitiesByOpportunity(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterProjectsOpportunitiesByOpportunity/' + ids + '?' + attributes);
  }
  
  filterProjectsOpportunitiesByProject(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterProjectsOpportunitiesByProject/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
