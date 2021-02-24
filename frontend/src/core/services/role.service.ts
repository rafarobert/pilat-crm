/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:59 GMT-0400 (Bolivia Time)
 * Time: 2:43:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:59 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Roles} from "../models/roles";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/roles`;
  dataChange: BehaviorSubject<Roles[]> = new BehaviorSubject<Roles[]>([]);
  roleData: Roles = new Roles();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Roles[] {
    return this.dataChange.value;
  }

  getDataRoles(): void {
    this.getAllRoles().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Roles[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllRoles(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createRole(role:Roles) {
    return this.http.post(this.basePath, role);
  }
  getRole(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateRole(id:any, role:Roles) {
    return this.http.put(this.basePath + '/' + id, role);
  }
  deleteRole(id:any) {
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
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByModules(modules:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModules/' + modules + '?' + attributes);
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
  
  
  updateRoleById(id:any, role:Roles) {
      return this.http.post(this.basePath + '/updateRoleById?id=' + id, role);
  }
  
  updateRoleByDeleted(deleted:any, role:Roles) {
      return this.http.post(this.basePath + '/updateRoleByDeleted?deleted=' + deleted, role);
  }
  
  updateRoleByName(name:any, role:Roles) {
      return this.http.post(this.basePath + '/updateRoleByName?name=' + name, role);
  }
  
  updateRoleByDescription(description:any, role:Roles) {
      return this.http.post(this.basePath + '/updateRoleByDescription?description=' + description, role);
  }
  
  updateRoleByModules(modules:any, role:Roles) {
      return this.http.post(this.basePath + '/updateRoleByModules?modules=' + modules, role);
  }
  
  updateRoleByDateEntered(dateEntered:any, role:Roles) {
      return this.http.post(this.basePath + '/updateRoleByDateEntered?dateEntered=' + dateEntered, role);
  }
  
  updateRoleByDateModified(dateModified:any, role:Roles) {
      return this.http.post(this.basePath + '/updateRoleByDateModified?dateModified=' + dateModified, role);
  }
  
  updateRoleByModifiedUserId(modifiedUserId:any, role:Roles) {
      return this.http.post(this.basePath + '/updateRoleByModifiedUserId?modifiedUserId=' + modifiedUserId, role);
  }
  
  updateRoleByCreatedBy(createdBy:any, role:Roles) {
      return this.http.post(this.basePath + '/updateRoleByCreatedBy?createdBy=' + createdBy, role);
  }
  
  
  
  //</es-section>
}
