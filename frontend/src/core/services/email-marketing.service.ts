/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:36 GMT-0400 (Bolivia Time)
 * Time: 2:42:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:36 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:36
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {EmailMarketing} from "../models/emailMarketing";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EmailMarketingService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/email-marketing`;
  dataChange: BehaviorSubject<EmailMarketing[]> = new BehaviorSubject<EmailMarketing[]>([]);
  emailMarketingData: EmailMarketing = new EmailMarketing();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): EmailMarketing[] {
    return this.dataChange.value;
  }

  getDataEmailMarketing(): void {
    this.getAllEmailMarketing().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:EmailMarketing[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEmailMarketing(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEmailMarketing(emailMarketing:EmailMarketing) {
    return this.http.post(this.basePath, emailMarketing);
  }
  getEmailMarketing(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEmailMarketing(id:any, emailMarketing:EmailMarketing) {
    return this.http.put(this.basePath + '/' + id, emailMarketing);
  }
  deleteEmailMarketing(id:any) {
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
  
  findOneByAllProspectLists(allProspectLists:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAllProspectLists/' + allProspectLists + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByFromName(fromName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFromName/' + fromName + '?' + attributes);
  }
  
  findOneByFromAddr(fromAddr:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFromAddr/' + fromAddr + '?' + attributes);
  }
  
  findOneByReplyToName(replyToName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReplyToName/' + replyToName + '?' + attributes);
  }
  
  findOneByReplyToAddr(replyToAddr:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReplyToAddr/' + replyToAddr + '?' + attributes);
  }
  
  findOneByInboundEmailId(inboundEmailId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByInboundEmailId/' + inboundEmailId + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
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
  
  findOneByCampaignId(campaignId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCampaignId/' + campaignId + '?' + attributes);
  }
  
  findOneByOutboundEmailId(outboundEmailId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOutboundEmailId/' + outboundEmailId + '?' + attributes);
  }
  
  
  updateEmailMarketingById(id:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingById?id=' + id, emailMarketing);
  }
  
  updateEmailMarketingByDeleted(deleted:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByDeleted?deleted=' + deleted, emailMarketing);
  }
  
  updateEmailMarketingByAllProspectLists(allProspectLists:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByAllProspectLists?allProspectLists=' + allProspectLists, emailMarketing);
  }
  
  updateEmailMarketingByName(name:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByName?name=' + name, emailMarketing);
  }
  
  updateEmailMarketingByFromName(fromName:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByFromName?fromName=' + fromName, emailMarketing);
  }
  
  updateEmailMarketingByFromAddr(fromAddr:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByFromAddr?fromAddr=' + fromAddr, emailMarketing);
  }
  
  updateEmailMarketingByReplyToName(replyToName:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByReplyToName?replyToName=' + replyToName, emailMarketing);
  }
  
  updateEmailMarketingByReplyToAddr(replyToAddr:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByReplyToAddr?replyToAddr=' + replyToAddr, emailMarketing);
  }
  
  updateEmailMarketingByInboundEmailId(inboundEmailId:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByInboundEmailId?inboundEmailId=' + inboundEmailId, emailMarketing);
  }
  
  updateEmailMarketingByStatus(status:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByStatus?status=' + status, emailMarketing);
  }
  
  updateEmailMarketingByDateEntered(dateEntered:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByDateEntered?dateEntered=' + dateEntered, emailMarketing);
  }
  
  updateEmailMarketingByDateModified(dateModified:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByDateModified?dateModified=' + dateModified, emailMarketing);
  }
  
  updateEmailMarketingByDateStart(dateStart:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByDateStart?dateStart=' + dateStart, emailMarketing);
  }
  
  updateEmailMarketingByModifiedUserId(modifiedUserId:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByModifiedUserId?modifiedUserId=' + modifiedUserId, emailMarketing);
  }
  
  updateEmailMarketingByCreatedBy(createdBy:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByCreatedBy?createdBy=' + createdBy, emailMarketing);
  }
  
  updateEmailMarketingByTemplateId(templateId:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByTemplateId?templateId=' + templateId, emailMarketing);
  }
  
  updateEmailMarketingByCampaignId(campaignId:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByCampaignId?campaignId=' + campaignId, emailMarketing);
  }
  
  updateEmailMarketingByOutboundEmailId(outboundEmailId:any, emailMarketing:EmailMarketing) {
      return this.http.post(this.basePath + '/updateEmailMarketingByOutboundEmailId?outboundEmailId=' + outboundEmailId, emailMarketing);
  }
  
  
  
  //</es-section>
}
