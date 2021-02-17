/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:33 GMT-0400 (Bolivia Time)
 * Time: 2:43:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:33 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:33
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {OutboundEmail} from "../models/outboundEmail";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class OutboundEmailService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/outbound-email`;
  dataChange: BehaviorSubject<OutboundEmail[]> = new BehaviorSubject<OutboundEmail[]>([]);
  outboundEmailData: OutboundEmail = new OutboundEmail();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): OutboundEmail[] {
    return this.dataChange.value;
  }

  getDataOutboundEmail(): void {
    this.getAllOutboundEmail().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:OutboundEmail[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllOutboundEmail(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createOutboundEmail(outboundEmail:OutboundEmail) {
    return this.http.post(this.basePath, outboundEmail);
  }
  getOutboundEmail(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOutboundEmail(id:any, outboundEmail:OutboundEmail) {
    return this.http.put(this.basePath + '/' + id, outboundEmail);
  }
  deleteOutboundEmail(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByMailSmtpauthReq(mailSmtpauthReq:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMailSmtpauthReq/' + mailSmtpauthReq + '?' + attributes);
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
  
  findOneByType(type:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByType/' + type + '?' + attributes);
  }
  
  findOneBySmtpFromName(smtpFromName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySmtpFromName/' + smtpFromName + '?' + attributes);
  }
  
  findOneBySmtpFromAddr(smtpFromAddr:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySmtpFromAddr/' + smtpFromAddr + '?' + attributes);
  }
  
  findOneByMailSendtype(mailSendtype:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMailSendtype/' + mailSendtype + '?' + attributes);
  }
  
  findOneByMailSmtptype(mailSmtptype:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMailSmtptype/' + mailSmtptype + '?' + attributes);
  }
  
  findOneByMailSmtpserver(mailSmtpserver:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMailSmtpserver/' + mailSmtpserver + '?' + attributes);
  }
  
  findOneByMailSmtpport(mailSmtpport:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMailSmtpport/' + mailSmtpport + '?' + attributes);
  }
  
  findOneByMailSmtpuser(mailSmtpuser:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMailSmtpuser/' + mailSmtpuser + '?' + attributes);
  }
  
  findOneByMailSmtppass(mailSmtppass:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMailSmtppass/' + mailSmtppass + '?' + attributes);
  }
  
  findOneByMailSmtpssl(mailSmtpssl:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMailSmtpssl/' + mailSmtpssl + '?' + attributes);
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
  
  findOneByUserId(userId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserId/' + userId + '?' + attributes);
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
  
  
  updateOutboundEmailById(id:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailById?id=' + id, outboundEmail);
  }
  
  updateOutboundEmailByMailSmtpauthReq(mailSmtpauthReq:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByMailSmtpauthReq?mailSmtpauthReq=' + mailSmtpauthReq, outboundEmail);
  }
  
  updateOutboundEmailByDeleted(deleted:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByDeleted?deleted=' + deleted, outboundEmail);
  }
  
  updateOutboundEmailByName(name:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByName?name=' + name, outboundEmail);
  }
  
  updateOutboundEmailByType(type:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByType?type=' + type, outboundEmail);
  }
  
  updateOutboundEmailBySmtpFromName(smtpFromName:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailBySmtpFromName?smtpFromName=' + smtpFromName, outboundEmail);
  }
  
  updateOutboundEmailBySmtpFromAddr(smtpFromAddr:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailBySmtpFromAddr?smtpFromAddr=' + smtpFromAddr, outboundEmail);
  }
  
  updateOutboundEmailByMailSendtype(mailSendtype:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByMailSendtype?mailSendtype=' + mailSendtype, outboundEmail);
  }
  
  updateOutboundEmailByMailSmtptype(mailSmtptype:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByMailSmtptype?mailSmtptype=' + mailSmtptype, outboundEmail);
  }
  
  updateOutboundEmailByMailSmtpserver(mailSmtpserver:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByMailSmtpserver?mailSmtpserver=' + mailSmtpserver, outboundEmail);
  }
  
  updateOutboundEmailByMailSmtpport(mailSmtpport:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByMailSmtpport?mailSmtpport=' + mailSmtpport, outboundEmail);
  }
  
  updateOutboundEmailByMailSmtpuser(mailSmtpuser:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByMailSmtpuser?mailSmtpuser=' + mailSmtpuser, outboundEmail);
  }
  
  updateOutboundEmailByMailSmtppass(mailSmtppass:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByMailSmtppass?mailSmtppass=' + mailSmtppass, outboundEmail);
  }
  
  updateOutboundEmailByMailSmtpssl(mailSmtpssl:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByMailSmtpssl?mailSmtpssl=' + mailSmtpssl, outboundEmail);
  }
  
  updateOutboundEmailByDateEntered(dateEntered:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByDateEntered?dateEntered=' + dateEntered, outboundEmail);
  }
  
  updateOutboundEmailByDateModified(dateModified:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByDateModified?dateModified=' + dateModified, outboundEmail);
  }
  
  updateOutboundEmailByUserId(userId:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByUserId?userId=' + userId, outboundEmail);
  }
  
  updateOutboundEmailByModifiedUserId(modifiedUserId:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByModifiedUserId?modifiedUserId=' + modifiedUserId, outboundEmail);
  }
  
  updateOutboundEmailByCreatedBy(createdBy:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByCreatedBy?createdBy=' + createdBy, outboundEmail);
  }
  
  updateOutboundEmailByAssignedUserId(assignedUserId:any, outboundEmail:OutboundEmail) {
      return this.http.post(this.basePath + '/updateOutboundEmailByAssignedUserId?assignedUserId=' + assignedUserId, outboundEmail);
  }
  
  
  
  //</es-section>
}
