/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:32 GMT-0400 (Bolivia Time)
 * Time: 2:42:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:32 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:32
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {EmailsText} from "../models/emailsText";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EmailTextService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/emails-text`;
  dataChange: BehaviorSubject<EmailsText[]> = new BehaviorSubject<EmailsText[]>([]);
  emailTextData: EmailsText = new EmailsText();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): EmailsText[] {
    return this.dataChange.value;
  }

  getDataEmailsText(): void {
    this.getAllEmailsText().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:EmailsText[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEmailsText(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEmailText(emailText:EmailsText) {
    return this.http.post(this.basePath, emailText);
  }
  getEmailText(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEmailText(id:any, emailText:EmailsText) {
    return this.http.put(this.basePath + '/' + id, emailText);
  }
  deleteEmailText(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByEmailId(emailId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailId/' + emailId + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByFromAddr(fromAddr:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFromAddr/' + fromAddr + '?' + attributes);
  }
  
  findOneByReplyToAddr(replyToAddr:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReplyToAddr/' + replyToAddr + '?' + attributes);
  }
  
  findOneByToAddrs(toAddrs:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByToAddrs/' + toAddrs + '?' + attributes);
  }
  
  findOneByCcAddrs(ccAddrs:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCcAddrs/' + ccAddrs + '?' + attributes);
  }
  
  findOneByBccAddrs(bccAddrs:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBccAddrs/' + bccAddrs + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByDescriptionHtml(descriptionHtml:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescriptionHtml/' + descriptionHtml + '?' + attributes);
  }
  
  findOneByRawSource(rawSource:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRawSource/' + rawSource + '?' + attributes);
  }
  
  
  updateEmailTextByEmailId(emailId:any, emailText:EmailsText) {
      return this.http.post(this.basePath + '/updateEmailTextByEmailId?emailId=' + emailId, emailText);
  }
  
  updateEmailTextByDeleted(deleted:any, emailText:EmailsText) {
      return this.http.post(this.basePath + '/updateEmailTextByDeleted?deleted=' + deleted, emailText);
  }
  
  updateEmailTextByFromAddr(fromAddr:any, emailText:EmailsText) {
      return this.http.post(this.basePath + '/updateEmailTextByFromAddr?fromAddr=' + fromAddr, emailText);
  }
  
  updateEmailTextByReplyToAddr(replyToAddr:any, emailText:EmailsText) {
      return this.http.post(this.basePath + '/updateEmailTextByReplyToAddr?replyToAddr=' + replyToAddr, emailText);
  }
  
  updateEmailTextByToAddrs(toAddrs:any, emailText:EmailsText) {
      return this.http.post(this.basePath + '/updateEmailTextByToAddrs?toAddrs=' + toAddrs, emailText);
  }
  
  updateEmailTextByCcAddrs(ccAddrs:any, emailText:EmailsText) {
      return this.http.post(this.basePath + '/updateEmailTextByCcAddrs?ccAddrs=' + ccAddrs, emailText);
  }
  
  updateEmailTextByBccAddrs(bccAddrs:any, emailText:EmailsText) {
      return this.http.post(this.basePath + '/updateEmailTextByBccAddrs?bccAddrs=' + bccAddrs, emailText);
  }
  
  updateEmailTextByDescription(description:any, emailText:EmailsText) {
      return this.http.post(this.basePath + '/updateEmailTextByDescription?description=' + description, emailText);
  }
  
  updateEmailTextByDescriptionHtml(descriptionHtml:any, emailText:EmailsText) {
      return this.http.post(this.basePath + '/updateEmailTextByDescriptionHtml?descriptionHtml=' + descriptionHtml, emailText);
  }
  
  updateEmailTextByRawSource(rawSource:any, emailText:EmailsText) {
      return this.http.post(this.basePath + '/updateEmailTextByRawSource?rawSource=' + rawSource, emailText);
  }
  
  
  
  //</es-section>
}
