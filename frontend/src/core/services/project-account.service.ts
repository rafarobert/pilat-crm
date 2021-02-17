/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:39 GMT-0400 (Bolivia Time)
 * Time: 2:43:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:39 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:39
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ProjectsAccounts} from "../models/projectsAccounts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProjectAccountService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/projects-accounts`;
  dataChange: BehaviorSubject<ProjectsAccounts[]> = new BehaviorSubject<ProjectsAccounts[]>([]);
  projectAccountData: ProjectsAccounts = new ProjectsAccounts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProjectsAccounts[] {
    return this.dataChange.value;
  }

  getDataProjectsAccounts(): void {
    this.getAllProjectsAccounts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProjectsAccounts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProjectsAccounts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProjectAccount(projectAccount:ProjectsAccounts) {
    return this.http.post(this.basePath, projectAccount);
  }
  getProjectAccount(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProjectAccount(id:any, projectAccount:ProjectsAccounts) {
    return this.http.put(this.basePath + '/' + id, projectAccount);
  }
  deleteProjectAccount(id:any) {
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
  
  findOneByAccountId(accountId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccountId/' + accountId + '?' + attributes);
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
  
  
  updateProjectAccountById(id:any, projectAccount:ProjectsAccounts) {
      return this.http.post(this.basePath + '/updateProjectAccountById?id=' + id, projectAccount);
  }
  
  updateProjectAccountByDeleted(deleted:any, projectAccount:ProjectsAccounts) {
      return this.http.post(this.basePath + '/updateProjectAccountByDeleted?deleted=' + deleted, projectAccount);
  }
  
  updateProjectAccountByAccountId(accountId:any, projectAccount:ProjectsAccounts) {
      return this.http.post(this.basePath + '/updateProjectAccountByAccountId?accountId=' + accountId, projectAccount);
  }
  
  updateProjectAccountByProjectId(projectId:any, projectAccount:ProjectsAccounts) {
      return this.http.post(this.basePath + '/updateProjectAccountByProjectId?projectId=' + projectId, projectAccount);
  }
  
  updateProjectAccountByDateModified(dateModified:any, projectAccount:ProjectsAccounts) {
      return this.http.post(this.basePath + '/updateProjectAccountByDateModified?dateModified=' + dateModified, projectAccount);
  }
  
  
  
  //</es-section>
}
