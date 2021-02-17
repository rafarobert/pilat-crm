/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:21 GMT-0400 (Bolivia Time)
 * Time: 2:44:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:21
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Tracker} from "../models/tracker";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/tracker`;
  dataChange: BehaviorSubject<Tracker[]> = new BehaviorSubject<Tracker[]>([]);
  trackerData: Tracker = new Tracker();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Tracker[] {
    return this.dataChange.value;
  }

  getDataTracker(): void {
    this.getAllTracker().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Tracker[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllTracker(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createTracker(tracker:Tracker) {
    return this.http.post(this.basePath, tracker);
  }
  getTracker(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateTracker(id:any, tracker:Tracker) {
    return this.http.put(this.basePath + '/' + id, tracker);
  }
  deleteTracker(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByVisible(visible:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVisible/' + visible + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByUserId(userId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserId/' + userId + '?' + attributes);
  }
  
  findOneByModuleName(moduleName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModuleName/' + moduleName + '?' + attributes);
  }
  
  findOneByItemId(itemId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByItemId/' + itemId + '?' + attributes);
  }
  
  findOneByItemSummary(itemSummary:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByItemSummary/' + itemSummary + '?' + attributes);
  }
  
  findOneByAction(action:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAction/' + action + '?' + attributes);
  }
  
  findOneBySessionId(sessionId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySessionId/' + sessionId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  findOneByMonitorId(monitorId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMonitorId/' + monitorId + '?' + attributes);
  }
  
  
  updateTrackerById(id:any, tracker:Tracker) {
      return this.http.post(this.basePath + '/updateTrackerById?id=' + id, tracker);
  }
  
  updateTrackerByVisible(visible:any, tracker:Tracker) {
      return this.http.post(this.basePath + '/updateTrackerByVisible?visible=' + visible, tracker);
  }
  
  updateTrackerByDeleted(deleted:any, tracker:Tracker) {
      return this.http.post(this.basePath + '/updateTrackerByDeleted?deleted=' + deleted, tracker);
  }
  
  updateTrackerByUserId(userId:any, tracker:Tracker) {
      return this.http.post(this.basePath + '/updateTrackerByUserId?userId=' + userId, tracker);
  }
  
  updateTrackerByModuleName(moduleName:any, tracker:Tracker) {
      return this.http.post(this.basePath + '/updateTrackerByModuleName?moduleName=' + moduleName, tracker);
  }
  
  updateTrackerByItemId(itemId:any, tracker:Tracker) {
      return this.http.post(this.basePath + '/updateTrackerByItemId?itemId=' + itemId, tracker);
  }
  
  updateTrackerByItemSummary(itemSummary:any, tracker:Tracker) {
      return this.http.post(this.basePath + '/updateTrackerByItemSummary?itemSummary=' + itemSummary, tracker);
  }
  
  updateTrackerByAction(action:any, tracker:Tracker) {
      return this.http.post(this.basePath + '/updateTrackerByAction?action=' + action, tracker);
  }
  
  updateTrackerBySessionId(sessionId:any, tracker:Tracker) {
      return this.http.post(this.basePath + '/updateTrackerBySessionId?sessionId=' + sessionId, tracker);
  }
  
  updateTrackerByDateModified(dateModified:any, tracker:Tracker) {
      return this.http.post(this.basePath + '/updateTrackerByDateModified?dateModified=' + dateModified, tracker);
  }
  
  updateTrackerByMonitorId(monitorId:any, tracker:Tracker) {
      return this.http.post(this.basePath + '/updateTrackerByMonitorId?monitorId=' + monitorId, tracker);
  }
  
  
  
  //</es-section>
}
