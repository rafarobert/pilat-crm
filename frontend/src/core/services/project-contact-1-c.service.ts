/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:43 GMT-0400 (Bolivia Time)
 * Time: 2:43:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:43 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:43
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ProjectContacts1C} from "../models/projectContacts1C";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProjectContact1CService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/project-contacts-1-c`;
  dataChange: BehaviorSubject<ProjectContacts1C[]> = new BehaviorSubject<ProjectContacts1C[]>([]);
  projectContact1CData: ProjectContacts1C = new ProjectContacts1C();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProjectContacts1C[] {
    return this.dataChange.value;
  }

  getDataProjectContacts1C(): void {
    this.getAllProjectContacts1C().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProjectContacts1C[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProjectContacts1C(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProjectContact1C(projectContact1C:ProjectContacts1C) {
    return this.http.post(this.basePath, projectContact1C);
  }
  getProjectContact1C(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProjectContact1C(id:any, projectContact1C:ProjectContacts1C) {
    return this.http.put(this.basePath + '/' + id, projectContact1C);
  }
  deleteProjectContact1C(id:any) {
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
  
  findOneByProjectContacts1projectIda(projectContacts1projectIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProjectContacts1projectIda/' + projectContacts1projectIda + '?' + attributes);
  }
  
  findOneByProjectContacts1contactsIdb(projectContacts1contactsIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProjectContacts1contactsIdb/' + projectContacts1contactsIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateProjectContact1CById(id:any, projectContact1C:ProjectContacts1C) {
      return this.http.post(this.basePath + '/updateProjectContact1CById?id=' + id, projectContact1C);
  }
  
  updateProjectContact1CByDeleted(deleted:any, projectContact1C:ProjectContacts1C) {
      return this.http.post(this.basePath + '/updateProjectContact1CByDeleted?deleted=' + deleted, projectContact1C);
  }
  
  updateProjectContact1CByProjectContacts1projectIda(projectContacts1projectIda:any, projectContact1C:ProjectContacts1C) {
      return this.http.post(this.basePath + '/updateProjectContact1CByProjectContacts1projectIda?projectContacts1projectIda=' + projectContacts1projectIda, projectContact1C);
  }
  
  updateProjectContact1CByProjectContacts1contactsIdb(projectContacts1contactsIdb:any, projectContact1C:ProjectContacts1C) {
      return this.http.post(this.basePath + '/updateProjectContact1CByProjectContacts1contactsIdb?projectContacts1contactsIdb=' + projectContacts1contactsIdb, projectContact1C);
  }
  
  updateProjectContact1CByDateModified(dateModified:any, projectContact1C:ProjectContacts1C) {
      return this.http.post(this.basePath + '/updateProjectContact1CByDateModified?dateModified=' + dateModified, projectContact1C);
  }
  
  
  
  //</es-section>
}
