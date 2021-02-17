/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:59 GMT-0400 (Bolivia Time)
 * Time: 2:40:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:59 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AmProjecttemplates} from "../models/amProjecttemplates";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AmProjecttemplateService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/am-projecttemplates`;
  dataChange: BehaviorSubject<AmProjecttemplates[]> = new BehaviorSubject<AmProjecttemplates[]>([]);
  amProjecttemplateData: AmProjecttemplates = new AmProjecttemplates();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AmProjecttemplates[] {
    return this.dataChange.value;
  }

  getDataAmProjecttemplates(): void {
    this.getAllAmProjecttemplates().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AmProjecttemplates[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAmProjecttemplates(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAmProjecttemplate(amProjecttemplate:AmProjecttemplates) {
    return this.http.post(this.basePath, amProjecttemplate);
  }
  getAmProjecttemplate(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAmProjecttemplate(id:any, amProjecttemplate:AmProjecttemplates) {
    return this.http.put(this.basePath + '/' + id, amProjecttemplate);
  }
  deleteAmProjecttemplate(id:any) {
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
  
  findOneByOverrideBusinessHours(overrideBusinessHours:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOverrideBusinessHours/' + overrideBusinessHours + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByPriority(priority:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPriority/' + priority + '?' + attributes);
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
  
  
  updateAmProjecttemplateById(id:any, amProjecttemplate:AmProjecttemplates) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateById?id=' + id, amProjecttemplate);
  }
  
  updateAmProjecttemplateByDeleted(deleted:any, amProjecttemplate:AmProjecttemplates) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateByDeleted?deleted=' + deleted, amProjecttemplate);
  }
  
  updateAmProjecttemplateByOverrideBusinessHours(overrideBusinessHours:any, amProjecttemplate:AmProjecttemplates) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateByOverrideBusinessHours?overrideBusinessHours=' + overrideBusinessHours, amProjecttemplate);
  }
  
  updateAmProjecttemplateByName(name:any, amProjecttemplate:AmProjecttemplates) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateByName?name=' + name, amProjecttemplate);
  }
  
  updateAmProjecttemplateByStatus(status:any, amProjecttemplate:AmProjecttemplates) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateByStatus?status=' + status, amProjecttemplate);
  }
  
  updateAmProjecttemplateByPriority(priority:any, amProjecttemplate:AmProjecttemplates) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateByPriority?priority=' + priority, amProjecttemplate);
  }
  
  updateAmProjecttemplateByDescription(description:any, amProjecttemplate:AmProjecttemplates) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateByDescription?description=' + description, amProjecttemplate);
  }
  
  updateAmProjecttemplateByDateEntered(dateEntered:any, amProjecttemplate:AmProjecttemplates) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateByDateEntered?dateEntered=' + dateEntered, amProjecttemplate);
  }
  
  updateAmProjecttemplateByDateModified(dateModified:any, amProjecttemplate:AmProjecttemplates) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateByDateModified?dateModified=' + dateModified, amProjecttemplate);
  }
  
  updateAmProjecttemplateByModifiedUserId(modifiedUserId:any, amProjecttemplate:AmProjecttemplates) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateByModifiedUserId?modifiedUserId=' + modifiedUserId, amProjecttemplate);
  }
  
  updateAmProjecttemplateByCreatedBy(createdBy:any, amProjecttemplate:AmProjecttemplates) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateByCreatedBy?createdBy=' + createdBy, amProjecttemplate);
  }
  
  updateAmProjecttemplateByAssignedUserId(assignedUserId:any, amProjecttemplate:AmProjecttemplates) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateByAssignedUserId?assignedUserId=' + assignedUserId, amProjecttemplate);
  }
  
  
  
  //</es-section>
}
