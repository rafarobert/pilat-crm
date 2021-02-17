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
import {EmailTemplatesCstm} from "../models/emailTemplatesCstm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EmailTemplateCstmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/email-templates-cstm`;
  dataChange: BehaviorSubject<EmailTemplatesCstm[]> = new BehaviorSubject<EmailTemplatesCstm[]>([]);
  emailTemplateCstmData: EmailTemplatesCstm = new EmailTemplatesCstm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): EmailTemplatesCstm[] {
    return this.dataChange.value;
  }

  getDataEmailTemplatesCstm(): void {
    this.getAllEmailTemplatesCstm().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:EmailTemplatesCstm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEmailTemplatesCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEmailTemplateCstm(emailTemplateCstm:EmailTemplatesCstm) {
    return this.http.post(this.basePath, emailTemplateCstm);
  }
  getEmailTemplateCstm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEmailTemplateCstm(id:any, emailTemplateCstm:EmailTemplatesCstm) {
    return this.http.put(this.basePath + '/' + id, emailTemplateCstm);
  }
  deleteEmailTemplateCstm(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByIdC(idC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIdC/' + idC + '?' + attributes);
  }
  
  findOneBySmsModuleC(smsModuleC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySmsModuleC/' + smsModuleC + '?' + attributes);
  }
  
  
  updateEmailTemplateCstmByIdC(idC:any, emailTemplateCstm:EmailTemplatesCstm) {
      return this.http.post(this.basePath + '/updateEmailTemplateCstmByIdC?idC=' + idC, emailTemplateCstm);
  }
  
  updateEmailTemplateCstmBySmsModuleC(smsModuleC:any, emailTemplateCstm:EmailTemplatesCstm) {
      return this.http.post(this.basePath + '/updateEmailTemplateCstmBySmsModuleC?smsModuleC=' + smsModuleC, emailTemplateCstm);
  }
  
  
  
  //</es-section>
}
