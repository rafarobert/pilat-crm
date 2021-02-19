/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:54 GMT-0400 (Bolivia Time)
 * Time: 2:42:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:54 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {InboundEmail} from "../models/inboundEmail";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class InboundEmailService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/inbound-email`;
  dataChange: BehaviorSubject<InboundEmail[]> = new BehaviorSubject<InboundEmail[]>([]);
  inboundEmailData: InboundEmail = new InboundEmail();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): InboundEmail[] {
    return this.dataChange.value;
  }

  getDataInboundEmail(): void {
    this.getAllInboundEmail().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:InboundEmail[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllInboundEmail(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createInboundEmail(inboundEmail:InboundEmail) {
    return this.http.post(this.basePath, inboundEmail);
  }
  getInboundEmail(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateInboundEmail(id:any, inboundEmail:InboundEmail) {
    return this.http.put(this.basePath + '/' + id, inboundEmail);
  }
  deleteInboundEmail(id:any) {
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
  
  findOneByDeleteSeen(deleteSeen:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleteSeen/' + deleteSeen + '?' + attributes);
  }
  
  findOneByIsPersonal(isPersonal:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIsPersonal/' + isPersonal + '?' + attributes);
  }
  
  findOneByPort(port:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPort/' + port + '?' + attributes);
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
  
  findOneByServerUrl(serverUrl:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByServerUrl/' + serverUrl + '?' + attributes);
  }
  
  findOneByEmailUser(emailUser:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailUser/' + emailUser + '?' + attributes);
  }
  
  findOneByEmailPassword(emailPassword:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailPassword/' + emailPassword + '?' + attributes);
  }
  
  findOneByService(service:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByService/' + service + '?' + attributes);
  }
  
  findOneByMailboxType(mailboxType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMailboxType/' + mailboxType + '?' + attributes);
  }
  
  findOneByMailbox(mailbox:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMailbox/' + mailbox + '?' + attributes);
  }
  
  findOneByStoredOptions(storedOptions:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStoredOptions/' + storedOptions + '?' + attributes);
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
  
  findOneByTemplateId(templateId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTemplateId/' + templateId + '?' + attributes);
  }
  
  findOneByGroupId(groupId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGroupId/' + groupId + '?' + attributes);
  }
  
  findOneByGroupfolderId(groupfolderId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGroupfolderId/' + groupfolderId + '?' + attributes);
  }
  
  
  updateInboundEmailById(id:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailById?id=' + id, inboundEmail);
  }
  
  updateInboundEmailByDeleted(deleted:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByDeleted?deleted=' + deleted, inboundEmail);
  }
  
  updateInboundEmailByDeleteSeen(deleteSeen:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByDeleteSeen?deleteSeen=' + deleteSeen, inboundEmail);
  }
  
  updateInboundEmailByIsPersonal(isPersonal:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByIsPersonal?isPersonal=' + isPersonal, inboundEmail);
  }
  
  updateInboundEmailByPort(port:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByPort?port=' + port, inboundEmail);
  }
  
  updateInboundEmailByName(name:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByName?name=' + name, inboundEmail);
  }
  
  updateInboundEmailByStatus(status:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByStatus?status=' + status, inboundEmail);
  }
  
  updateInboundEmailByServerUrl(serverUrl:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByServerUrl?serverUrl=' + serverUrl, inboundEmail);
  }
  
  updateInboundEmailByEmailUser(emailUser:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByEmailUser?emailUser=' + emailUser, inboundEmail);
  }
  
  updateInboundEmailByEmailPassword(emailPassword:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByEmailPassword?emailPassword=' + emailPassword, inboundEmail);
  }
  
  updateInboundEmailByService(service:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByService?service=' + service, inboundEmail);
  }
  
  updateInboundEmailByMailboxType(mailboxType:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByMailboxType?mailboxType=' + mailboxType, inboundEmail);
  }
  
  updateInboundEmailByMailbox(mailbox:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByMailbox?mailbox=' + mailbox, inboundEmail);
  }
  
  updateInboundEmailByStoredOptions(storedOptions:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByStoredOptions?storedOptions=' + storedOptions, inboundEmail);
  }
  
  updateInboundEmailByDateEntered(dateEntered:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByDateEntered?dateEntered=' + dateEntered, inboundEmail);
  }
  
  updateInboundEmailByDateModified(dateModified:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByDateModified?dateModified=' + dateModified, inboundEmail);
  }
  
  updateInboundEmailByModifiedUserId(modifiedUserId:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByModifiedUserId?modifiedUserId=' + modifiedUserId, inboundEmail);
  }
  
  updateInboundEmailByCreatedBy(createdBy:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByCreatedBy?createdBy=' + createdBy, inboundEmail);
  }
  
  updateInboundEmailByTemplateId(templateId:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByTemplateId?templateId=' + templateId, inboundEmail);
  }
  
  updateInboundEmailByGroupId(groupId:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByGroupId?groupId=' + groupId, inboundEmail);
  }
  
  updateInboundEmailByGroupfolderId(groupfolderId:any, inboundEmail:InboundEmail) {
      return this.http.post(this.basePath + '/updateInboundEmailByGroupfolderId?groupfolderId=' + groupfolderId, inboundEmail);
  }
  
  
  
  //</es-section>
}
