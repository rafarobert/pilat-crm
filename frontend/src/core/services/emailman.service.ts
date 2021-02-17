/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:30 GMT-0400 (Bolivia Time)
 * Time: 2:42:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:30 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:30
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Emailman} from "../models/emailman";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EmailmanService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/emailman`;
  dataChange: BehaviorSubject<Emailman[]> = new BehaviorSubject<Emailman[]>([]);
  emailmanData: Emailman = new Emailman();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Emailman[] {
    return this.dataChange.value;
  }

  getDataEmailman(): void {
    this.getAllEmailman().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Emailman[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEmailman(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEmailman(emailman:Emailman) {
    return this.http.post(this.basePath, emailman);
  }
  getEmailman(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEmailman(id:any, emailman:Emailman) {
    return this.http.put(this.basePath + '/' + id, emailman);
  }
  deleteEmailman(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByInQueue(inQueue:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByInQueue/' + inQueue + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByRelatedConfirmOptIn(relatedConfirmOptIn:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedConfirmOptIn/' + relatedConfirmOptIn + '?' + attributes);
  }
  
  findOneBySendAttempts(sendAttempts:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySendAttempts/' + sendAttempts + '?' + attributes);
  }
  
  findOneByRelatedType(relatedType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedType/' + relatedType + '?' + attributes);
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
  
  findOneBySendDateTime(sendDateTime:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySendDateTime/' + sendDateTime + '?' + attributes);
  }
  
  findOneByInQueueDate(inQueueDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByInQueueDate/' + inQueueDate + '?' + attributes);
  }
  
  findOneByUserId(userId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserId/' + userId + '?' + attributes);
  }
  
  findOneByCampaignId(campaignId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCampaignId/' + campaignId + '?' + attributes);
  }
  
  findOneByMarketingId(marketingId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMarketingId/' + marketingId + '?' + attributes);
  }
  
  findOneByListId(listId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByListId/' + listId + '?' + attributes);
  }
  
  findOneByModifiedUserId(modifiedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedUserId/' + modifiedUserId + '?' + attributes);
  }
  
  findOneByRelatedId(relatedId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedId/' + relatedId + '?' + attributes);
  }
  
  
  updateEmailmanById(id:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanById?id=' + id, emailman);
  }
  
  updateEmailmanByInQueue(inQueue:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanByInQueue?inQueue=' + inQueue, emailman);
  }
  
  updateEmailmanByDeleted(deleted:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanByDeleted?deleted=' + deleted, emailman);
  }
  
  updateEmailmanByRelatedConfirmOptIn(relatedConfirmOptIn:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanByRelatedConfirmOptIn?relatedConfirmOptIn=' + relatedConfirmOptIn, emailman);
  }
  
  updateEmailmanBySendAttempts(sendAttempts:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanBySendAttempts?sendAttempts=' + sendAttempts, emailman);
  }
  
  updateEmailmanByRelatedType(relatedType:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanByRelatedType?relatedType=' + relatedType, emailman);
  }
  
  updateEmailmanByDateEntered(dateEntered:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanByDateEntered?dateEntered=' + dateEntered, emailman);
  }
  
  updateEmailmanByDateModified(dateModified:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanByDateModified?dateModified=' + dateModified, emailman);
  }
  
  updateEmailmanBySendDateTime(sendDateTime:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanBySendDateTime?sendDateTime=' + sendDateTime, emailman);
  }
  
  updateEmailmanByInQueueDate(inQueueDate:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanByInQueueDate?inQueueDate=' + inQueueDate, emailman);
  }
  
  updateEmailmanByUserId(userId:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanByUserId?userId=' + userId, emailman);
  }
  
  updateEmailmanByCampaignId(campaignId:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanByCampaignId?campaignId=' + campaignId, emailman);
  }
  
  updateEmailmanByMarketingId(marketingId:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanByMarketingId?marketingId=' + marketingId, emailman);
  }
  
  updateEmailmanByListId(listId:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanByListId?listId=' + listId, emailman);
  }
  
  updateEmailmanByModifiedUserId(modifiedUserId:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanByModifiedUserId?modifiedUserId=' + modifiedUserId, emailman);
  }
  
  updateEmailmanByRelatedId(relatedId:any, emailman:Emailman) {
      return this.http.post(this.basePath + '/updateEmailmanByRelatedId?relatedId=' + relatedId, emailman);
  }
  
  
  
  //</es-section>
}
