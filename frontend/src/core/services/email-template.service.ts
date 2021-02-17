/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:38 GMT-0400 (Bolivia Time)
 * Time: 2:42:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:38 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:38
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {EmailTemplates} from "../models/emailTemplates";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EmailTemplateService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/email-templates`;
  dataChange: BehaviorSubject<EmailTemplates[]> = new BehaviorSubject<EmailTemplates[]>([]);
  emailTemplateData: EmailTemplates = new EmailTemplates();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): EmailTemplates[] {
    return this.dataChange.value;
  }

  getDataEmailTemplates(): void {
    this.getAllEmailTemplates().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:EmailTemplates[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEmailTemplates(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEmailTemplate(emailTemplate:EmailTemplates) {
    return this.http.post(this.basePath, emailTemplate);
  }
  getEmailTemplate(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEmailTemplate(id:any, emailTemplate:EmailTemplates) {
    return this.http.put(this.basePath + '/' + id, emailTemplate);
  }
  deleteEmailTemplate(id:any) {
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
  
  findOneByTextOnly(textOnly:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTextOnly/' + textOnly + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  findOneByPublished(published:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPublished/' + published + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneBySubject(subject:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySubject/' + subject + '?' + attributes);
  }
  
  findOneByType(type:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByType/' + type + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByBody(body:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBody/' + body + '?' + attributes);
  }
  
  findOneByBodyHtml(bodyHtml:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBodyHtml/' + bodyHtml + '?' + attributes);
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
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  
  updateEmailTemplateById(id:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateById?id=' + id, emailTemplate);
  }
  
  updateEmailTemplateByDeleted(deleted:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateByDeleted?deleted=' + deleted, emailTemplate);
  }
  
  updateEmailTemplateByTextOnly(textOnly:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateByTextOnly?textOnly=' + textOnly, emailTemplate);
  }
  
  updateEmailTemplateByCreatedBy(createdBy:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateByCreatedBy?createdBy=' + createdBy, emailTemplate);
  }
  
  updateEmailTemplateByPublished(published:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateByPublished?published=' + published, emailTemplate);
  }
  
  updateEmailTemplateByName(name:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateByName?name=' + name, emailTemplate);
  }
  
  updateEmailTemplateBySubject(subject:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateBySubject?subject=' + subject, emailTemplate);
  }
  
  updateEmailTemplateByType(type:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateByType?type=' + type, emailTemplate);
  }
  
  updateEmailTemplateByDescription(description:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateByDescription?description=' + description, emailTemplate);
  }
  
  updateEmailTemplateByBody(body:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateByBody?body=' + body, emailTemplate);
  }
  
  updateEmailTemplateByBodyHtml(bodyHtml:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateByBodyHtml?bodyHtml=' + bodyHtml, emailTemplate);
  }
  
  updateEmailTemplateByDateEntered(dateEntered:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateByDateEntered?dateEntered=' + dateEntered, emailTemplate);
  }
  
  updateEmailTemplateByDateModified(dateModified:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateByDateModified?dateModified=' + dateModified, emailTemplate);
  }
  
  updateEmailTemplateByModifiedUserId(modifiedUserId:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateByModifiedUserId?modifiedUserId=' + modifiedUserId, emailTemplate);
  }
  
  updateEmailTemplateByAssignedUserId(assignedUserId:any, emailTemplate:EmailTemplates) {
      return this.http.post(this.basePath + '/updateEmailTemplateByAssignedUserId?assignedUserId=' + assignedUserId, emailTemplate);
  }
  
  
  
  //</es-section>
}
