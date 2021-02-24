/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:44 GMT-0400 (Bolivia Time)
 * Time: 2:42:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:44 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:44
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {FpEvents} from "../models/fpEvents";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FpEventService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/fp-events`;
  dataChange: BehaviorSubject<FpEvents[]> = new BehaviorSubject<FpEvents[]>([]);
  fpEventData: FpEvents = new FpEvents();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): FpEvents[] {
    return this.dataChange.value;
  }

  getDataFpEvents(): void {
    this.getAllFpEvents().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:FpEvents[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFpEvents(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFpEvent(fpEvent:FpEvents) {
    return this.http.post(this.basePath, fpEvent);
  }
  getFpEvent(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFpEvent(id:any, fpEvent:FpEvents) {
    return this.http.put(this.basePath + '/' + id, fpEvent);
  }
  deleteFpEvent(id:any) {
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
  
  findOneByDurationHours(durationHours:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDurationHours/' + durationHours + '?' + attributes);
  }
  
  findOneByDurationMinutes(durationMinutes:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDurationMinutes/' + durationMinutes + '?' + attributes);
  }
  
  findOneByBudget(budget:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBudget/' + budget + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByInviteTemplates(inviteTemplates:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByInviteTemplates/' + inviteTemplates + '?' + attributes);
  }
  
  findOneByAcceptRedirect(acceptRedirect:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAcceptRedirect/' + acceptRedirect + '?' + attributes);
  }
  
  findOneByDeclineRedirect(declineRedirect:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeclineRedirect/' + declineRedirect + '?' + attributes);
  }
  
  findOneByActivityStatusType(activityStatusType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActivityStatusType/' + activityStatusType + '?' + attributes);
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
  
  findOneByDateStart(dateStart:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateStart/' + dateStart + '?' + attributes);
  }
  
  findOneByDateEnd(dateEnd:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateEnd/' + dateEnd + '?' + attributes);
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
  
  findOneByCurrencyId(currencyId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCurrencyId/' + currencyId + '?' + attributes);
  }
  
  
  updateFpEventById(id:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventById?id=' + id, fpEvent);
  }
  
  updateFpEventByDeleted(deleted:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByDeleted?deleted=' + deleted, fpEvent);
  }
  
  updateFpEventByDurationHours(durationHours:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByDurationHours?durationHours=' + durationHours, fpEvent);
  }
  
  updateFpEventByDurationMinutes(durationMinutes:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByDurationMinutes?durationMinutes=' + durationMinutes, fpEvent);
  }
  
  updateFpEventByBudget(budget:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByBudget?budget=' + budget, fpEvent);
  }
  
  updateFpEventByName(name:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByName?name=' + name, fpEvent);
  }
  
  updateFpEventByInviteTemplates(inviteTemplates:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByInviteTemplates?inviteTemplates=' + inviteTemplates, fpEvent);
  }
  
  updateFpEventByAcceptRedirect(acceptRedirect:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByAcceptRedirect?acceptRedirect=' + acceptRedirect, fpEvent);
  }
  
  updateFpEventByDeclineRedirect(declineRedirect:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByDeclineRedirect?declineRedirect=' + declineRedirect, fpEvent);
  }
  
  updateFpEventByActivityStatusType(activityStatusType:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByActivityStatusType?activityStatusType=' + activityStatusType, fpEvent);
  }
  
  updateFpEventByDescription(description:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByDescription?description=' + description, fpEvent);
  }
  
  updateFpEventByDateEntered(dateEntered:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByDateEntered?dateEntered=' + dateEntered, fpEvent);
  }
  
  updateFpEventByDateModified(dateModified:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByDateModified?dateModified=' + dateModified, fpEvent);
  }
  
  updateFpEventByDateStart(dateStart:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByDateStart?dateStart=' + dateStart, fpEvent);
  }
  
  updateFpEventByDateEnd(dateEnd:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByDateEnd?dateEnd=' + dateEnd, fpEvent);
  }
  
  updateFpEventByModifiedUserId(modifiedUserId:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByModifiedUserId?modifiedUserId=' + modifiedUserId, fpEvent);
  }
  
  updateFpEventByCreatedBy(createdBy:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByCreatedBy?createdBy=' + createdBy, fpEvent);
  }
  
  updateFpEventByAssignedUserId(assignedUserId:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByAssignedUserId?assignedUserId=' + assignedUserId, fpEvent);
  }
  
  updateFpEventByCurrencyId(currencyId:any, fpEvent:FpEvents) {
      return this.http.post(this.basePath + '/updateFpEventByCurrencyId?currencyId=' + currencyId, fpEvent);
  }
  
  
  
  //</es-section>
}
