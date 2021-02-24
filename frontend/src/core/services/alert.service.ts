/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:57 GMT-0400 (Bolivia Time)
 * Time: 2:40:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:57 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:57
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Alerts} from "../models/alerts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/alerts`;
  dataChange: BehaviorSubject<Alerts[]> = new BehaviorSubject<Alerts[]>([]);
  alertData: Alerts = new Alerts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Alerts[] {
    return this.dataChange.value;
  }

  getDataAlerts(): void {
    this.getAllAlerts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Alerts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAlerts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAlert(alert:Alerts) {
    return this.http.post(this.basePath, alert);
  }
  getAlert(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAlert(id:any, alert:Alerts) {
    return this.http.put(this.basePath + '/' + id, alert);
  }
  deleteAlert(id:any) {
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
  
  findOneByIsRead(isRead:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIsRead/' + isRead + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByTargetModule(targetModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTargetModule/' + targetModule + '?' + attributes);
  }
  
  findOneByType(type:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByType/' + type + '?' + attributes);
  }
  
  findOneByUrlRedirect(urlRedirect:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUrlRedirect/' + urlRedirect + '?' + attributes);
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
  
  findOneByReminderId(reminderId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReminderId/' + reminderId + '?' + attributes);
  }
  
  
  updateAlertById(id:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertById?id=' + id, alert);
  }
  
  updateAlertByDeleted(deleted:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertByDeleted?deleted=' + deleted, alert);
  }
  
  updateAlertByIsRead(isRead:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertByIsRead?isRead=' + isRead, alert);
  }
  
  updateAlertByName(name:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertByName?name=' + name, alert);
  }
  
  updateAlertByTargetModule(targetModule:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertByTargetModule?targetModule=' + targetModule, alert);
  }
  
  updateAlertByType(type:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertByType?type=' + type, alert);
  }
  
  updateAlertByUrlRedirect(urlRedirect:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertByUrlRedirect?urlRedirect=' + urlRedirect, alert);
  }
  
  updateAlertByDescription(description:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertByDescription?description=' + description, alert);
  }
  
  updateAlertByDateEntered(dateEntered:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertByDateEntered?dateEntered=' + dateEntered, alert);
  }
  
  updateAlertByDateModified(dateModified:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertByDateModified?dateModified=' + dateModified, alert);
  }
  
  updateAlertByModifiedUserId(modifiedUserId:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertByModifiedUserId?modifiedUserId=' + modifiedUserId, alert);
  }
  
  updateAlertByCreatedBy(createdBy:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertByCreatedBy?createdBy=' + createdBy, alert);
  }
  
  updateAlertByAssignedUserId(assignedUserId:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertByAssignedUserId?assignedUserId=' + assignedUserId, alert);
  }
  
  updateAlertByReminderId(reminderId:any, alert:Alerts) {
      return this.http.post(this.basePath + '/updateAlertByReminderId?reminderId=' + reminderId, alert);
  }
  
  
  
  //</es-section>
}
