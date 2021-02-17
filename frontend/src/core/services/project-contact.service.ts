/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:41 GMT-0400 (Bolivia Time)
 * Time: 2:43:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:41 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:41
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ProjectsContacts} from "../models/projectsContacts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProjectContactService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/projects-contacts`;
  dataChange: BehaviorSubject<ProjectsContacts[]> = new BehaviorSubject<ProjectsContacts[]>([]);
  projectContactData: ProjectsContacts = new ProjectsContacts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProjectsContacts[] {
    return this.dataChange.value;
  }

  getDataProjectsContacts(): void {
    this.getAllProjectsContacts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProjectsContacts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProjectsContacts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProjectContact(projectContact:ProjectsContacts) {
    return this.http.post(this.basePath, projectContact);
  }
  getProjectContact(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProjectContact(id:any, projectContact:ProjectsContacts) {
    return this.http.put(this.basePath + '/' + id, projectContact);
  }
  deleteProjectContact(id:any) {
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
  
  findOneByContactId(contactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactId/' + contactId + '?' + attributes);
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
  
  
  updateProjectContactById(id:any, projectContact:ProjectsContacts) {
      return this.http.post(this.basePath + '/updateProjectContactById?id=' + id, projectContact);
  }
  
  updateProjectContactByDeleted(deleted:any, projectContact:ProjectsContacts) {
      return this.http.post(this.basePath + '/updateProjectContactByDeleted?deleted=' + deleted, projectContact);
  }
  
  updateProjectContactByContactId(contactId:any, projectContact:ProjectsContacts) {
      return this.http.post(this.basePath + '/updateProjectContactByContactId?contactId=' + contactId, projectContact);
  }
  
  updateProjectContactByProjectId(projectId:any, projectContact:ProjectsContacts) {
      return this.http.post(this.basePath + '/updateProjectContactByProjectId?projectId=' + projectId, projectContact);
  }
  
  updateProjectContactByDateModified(dateModified:any, projectContact:ProjectsContacts) {
      return this.http.post(this.basePath + '/updateProjectContactByDateModified?dateModified=' + dateModified, projectContact);
  }
  
  
  
  //</es-section>
}
