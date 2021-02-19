/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:48 GMT-0400 (Bolivia Time)
 * Time: 2:43:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:48 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:48
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ProjectUsers1C} from "../models/projectUsers1C";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProjectUser1CService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/project-users-1-c`;
  dataChange: BehaviorSubject<ProjectUsers1C[]> = new BehaviorSubject<ProjectUsers1C[]>([]);
  projectUser1CData: ProjectUsers1C = new ProjectUsers1C();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProjectUsers1C[] {
    return this.dataChange.value;
  }

  getDataProjectUsers1C(): void {
    this.getAllProjectUsers1C().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProjectUsers1C[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProjectUsers1C(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProjectUser1C(projectUser1C:ProjectUsers1C) {
    return this.http.post(this.basePath, projectUser1C);
  }
  getProjectUser1C(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProjectUser1C(id:any, projectUser1C:ProjectUsers1C) {
    return this.http.put(this.basePath + '/' + id, projectUser1C);
  }
  deleteProjectUser1C(id:any) {
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
  
  findOneByProjectUsers1projectIda(projectUsers1projectIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProjectUsers1projectIda/' + projectUsers1projectIda + '?' + attributes);
  }
  
  findOneByProjectUsers1usersIdb(projectUsers1usersIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProjectUsers1usersIdb/' + projectUsers1usersIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateProjectUser1CById(id:any, projectUser1C:ProjectUsers1C) {
      return this.http.post(this.basePath + '/updateProjectUser1CById?id=' + id, projectUser1C);
  }
  
  updateProjectUser1CByDeleted(deleted:any, projectUser1C:ProjectUsers1C) {
      return this.http.post(this.basePath + '/updateProjectUser1CByDeleted?deleted=' + deleted, projectUser1C);
  }
  
  updateProjectUser1CByProjectUsers1projectIda(projectUsers1projectIda:any, projectUser1C:ProjectUsers1C) {
      return this.http.post(this.basePath + '/updateProjectUser1CByProjectUsers1projectIda?projectUsers1projectIda=' + projectUsers1projectIda, projectUser1C);
  }
  
  updateProjectUser1CByProjectUsers1usersIdb(projectUsers1usersIdb:any, projectUser1C:ProjectUsers1C) {
      return this.http.post(this.basePath + '/updateProjectUser1CByProjectUsers1usersIdb?projectUsers1usersIdb=' + projectUsers1usersIdb, projectUser1C);
  }
  
  updateProjectUser1CByDateModified(dateModified:any, projectUser1C:ProjectUsers1C) {
      return this.http.post(this.basePath + '/updateProjectUser1CByDateModified?dateModified=' + dateModified, projectUser1C);
  }
  
  
  
  //</es-section>
}
