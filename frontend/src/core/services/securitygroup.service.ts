/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:03 GMT-0400 (Bolivia Time)
 * Time: 2:44:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:03 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:3
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Securitygroups} from "../models/securitygroups";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SecuritygroupService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/securitygroups`;
  dataChange: BehaviorSubject<Securitygroups[]> = new BehaviorSubject<Securitygroups[]>([]);
  securitygroupData: Securitygroups = new Securitygroups();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Securitygroups[] {
    return this.dataChange.value;
  }

  getDataSecuritygroups(): void {
    this.getAllSecuritygroups().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Securitygroups[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSecuritygroups(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSecuritygroup(securitygroup:Securitygroups) {
    return this.http.post(this.basePath, securitygroup);
  }
  getSecuritygroup(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSecuritygroup(id:any, securitygroup:Securitygroups) {
    return this.http.put(this.basePath + '/' + id, securitygroup);
  }
  deleteSecuritygroup(id:any) {
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
  
  findOneByNoninheritable(noninheritable:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNoninheritable/' + noninheritable + '?' + attributes);
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
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  
  updateSecuritygroupById(id:any, securitygroup:Securitygroups) {
      return this.http.post(this.basePath + '/updateSecuritygroupById?id=' + id, securitygroup);
  }
  
  updateSecuritygroupByDeleted(deleted:any, securitygroup:Securitygroups) {
      return this.http.post(this.basePath + '/updateSecuritygroupByDeleted?deleted=' + deleted, securitygroup);
  }
  
  updateSecuritygroupByNoninheritable(noninheritable:any, securitygroup:Securitygroups) {
      return this.http.post(this.basePath + '/updateSecuritygroupByNoninheritable?noninheritable=' + noninheritable, securitygroup);
  }
  
  updateSecuritygroupByName(name:any, securitygroup:Securitygroups) {
      return this.http.post(this.basePath + '/updateSecuritygroupByName?name=' + name, securitygroup);
  }
  
  updateSecuritygroupByDescription(description:any, securitygroup:Securitygroups) {
      return this.http.post(this.basePath + '/updateSecuritygroupByDescription?description=' + description, securitygroup);
  }
  
  updateSecuritygroupByDateEntered(dateEntered:any, securitygroup:Securitygroups) {
      return this.http.post(this.basePath + '/updateSecuritygroupByDateEntered?dateEntered=' + dateEntered, securitygroup);
  }
  
  updateSecuritygroupByDateModified(dateModified:any, securitygroup:Securitygroups) {
      return this.http.post(this.basePath + '/updateSecuritygroupByDateModified?dateModified=' + dateModified, securitygroup);
  }
  
  updateSecuritygroupByModifiedUserId(modifiedUserId:any, securitygroup:Securitygroups) {
      return this.http.post(this.basePath + '/updateSecuritygroupByModifiedUserId?modifiedUserId=' + modifiedUserId, securitygroup);
  }
  
  updateSecuritygroupByCreatedBy(createdBy:any, securitygroup:Securitygroups) {
      return this.http.post(this.basePath + '/updateSecuritygroupByCreatedBy?createdBy=' + createdBy, securitygroup);
  }
  
  updateSecuritygroupByAssignedUserId(assignedUserId:any, securitygroup:Securitygroups) {
      return this.http.post(this.basePath + '/updateSecuritygroupByAssignedUserId?assignedUserId=' + assignedUserId, securitygroup);
  }
  
  
  
  //</es-section>
}
