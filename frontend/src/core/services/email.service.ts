/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:31 GMT-0400 (Bolivia Time)
 * Time: 2:42:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:31 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:31
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Emails} from "../models/emails";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/emails`;
  dataChange: BehaviorSubject<Emails[]> = new BehaviorSubject<Emails[]>([]);
  emailData: Emails = new Emails();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Emails[] {
    return this.dataChange.value;
  }

  getDataEmails(): void {
    this.getAllEmails().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Emails[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEmails(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEmail(email:Emails) {
    return this.http.post(this.basePath, email);
  }
  getEmail(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEmail(id:any, email:Emails) {
    return this.http.put(this.basePath + '/' + id, email);
  }
  deleteEmail(id:any) {
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
  
  findOneByOrphaned(orphaned:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOrphaned/' + orphaned + '?' + attributes);
  }
  
  findOneByFlagged(flagged:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFlagged/' + flagged + '?' + attributes);
  }
  
  findOneByReplyToStatus(replyToStatus:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReplyToStatus/' + replyToStatus + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByMessageId(messageId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMessageId/' + messageId + '?' + attributes);
  }
  
  findOneByType(type:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByType/' + type + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByIntent(intent:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIntent/' + intent + '?' + attributes);
  }
  
  findOneByParentType(parentType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentType/' + parentType + '?' + attributes);
  }
  
  findOneByUid(uid:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUid/' + uid + '?' + attributes);
  }
  
  findOneByCategoryId(categoryId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCategoryId/' + categoryId + '?' + attributes);
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
  
  findOneByLastSynced(lastSynced:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLastSynced/' + lastSynced + '?' + attributes);
  }
  
  findOneByDateSentReceived(dateSentReceived:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateSentReceived/' + dateSentReceived + '?' + attributes);
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
  
  findOneByMailboxId(mailboxId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMailboxId/' + mailboxId + '?' + attributes);
  }
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  
  updateEmailById(id:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailById?id=' + id, email);
  }
  
  updateEmailByDeleted(deleted:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByDeleted?deleted=' + deleted, email);
  }
  
  updateEmailByOrphaned(orphaned:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByOrphaned?orphaned=' + orphaned, email);
  }
  
  updateEmailByFlagged(flagged:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByFlagged?flagged=' + flagged, email);
  }
  
  updateEmailByReplyToStatus(replyToStatus:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByReplyToStatus?replyToStatus=' + replyToStatus, email);
  }
  
  updateEmailByName(name:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByName?name=' + name, email);
  }
  
  updateEmailByMessageId(messageId:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByMessageId?messageId=' + messageId, email);
  }
  
  updateEmailByType(type:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByType?type=' + type, email);
  }
  
  updateEmailByStatus(status:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByStatus?status=' + status, email);
  }
  
  updateEmailByIntent(intent:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByIntent?intent=' + intent, email);
  }
  
  updateEmailByParentType(parentType:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByParentType?parentType=' + parentType, email);
  }
  
  updateEmailByUid(uid:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByUid?uid=' + uid, email);
  }
  
  updateEmailByCategoryId(categoryId:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByCategoryId?categoryId=' + categoryId, email);
  }
  
  updateEmailByDateEntered(dateEntered:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByDateEntered?dateEntered=' + dateEntered, email);
  }
  
  updateEmailByDateModified(dateModified:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByDateModified?dateModified=' + dateModified, email);
  }
  
  updateEmailByLastSynced(lastSynced:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByLastSynced?lastSynced=' + lastSynced, email);
  }
  
  updateEmailByDateSentReceived(dateSentReceived:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByDateSentReceived?dateSentReceived=' + dateSentReceived, email);
  }
  
  updateEmailByModifiedUserId(modifiedUserId:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByModifiedUserId?modifiedUserId=' + modifiedUserId, email);
  }
  
  updateEmailByCreatedBy(createdBy:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByCreatedBy?createdBy=' + createdBy, email);
  }
  
  updateEmailByAssignedUserId(assignedUserId:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByAssignedUserId?assignedUserId=' + assignedUserId, email);
  }
  
  updateEmailByMailboxId(mailboxId:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByMailboxId?mailboxId=' + mailboxId, email);
  }
  
  updateEmailByParentId(parentId:any, email:Emails) {
      return this.http.post(this.basePath + '/updateEmailByParentId?parentId=' + parentId, email);
  }
  
  
  
  //</es-section>
}
