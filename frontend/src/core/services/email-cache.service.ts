/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:35 GMT-0400 (Bolivia Time)
 * Time: 2:42:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:35 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:35
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {EmailCache} from "../models/emailCache";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EmailCacheService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/email-cache`;
  dataChange: BehaviorSubject<EmailCache[]> = new BehaviorSubject<EmailCache[]>([]);
  emailCacheData: EmailCache = new EmailCache();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): EmailCache[] {
    return this.dataChange.value;
  }

  getDataEmailCache(): void {
    this.getAllEmailCache().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:EmailCache[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEmailCache(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEmailCache(emailCache:EmailCache) {
    return this.http.post(this.basePath, emailCache);
  }
  getEmailCache(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEmailCache(id:any, emailCache:EmailCache) {
    return this.http.put(this.basePath + '/' + id, emailCache);
  }
  deleteEmailCache(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByRecent(recent:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRecent/' + recent + '?' + attributes);
  }
  
  findOneByFlagged(flagged:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFlagged/' + flagged + '?' + attributes);
  }
  
  findOneByAnswered(answered:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAnswered/' + answered + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneBySeen(seen:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySeen/' + seen + '?' + attributes);
  }
  
  findOneByDraft(draft:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDraft/' + draft + '?' + attributes);
  }
  
  findOneByMailsize(mailsize:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMailsize/' + mailsize + '?' + attributes);
  }
  
  findOneByImapUid(imapUid:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByImapUid/' + imapUid + '?' + attributes);
  }
  
  findOneByMsgno(msgno:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMsgno/' + msgno + '?' + attributes);
  }
  
  findOneByMbox(mbox:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMbox/' + mbox + '?' + attributes);
  }
  
  findOneBySubject(subject:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySubject/' + subject + '?' + attributes);
  }
  
  findOneByFromaddr(fromaddr:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFromaddr/' + fromaddr + '?' + attributes);
  }
  
  findOneByToaddr(toaddr:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByToaddr/' + toaddr + '?' + attributes);
  }
  
  findOneByMessageId(messageId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMessageId/' + messageId + '?' + attributes);
  }
  
  findOneBySenddate(senddate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySenddate/' + senddate + '?' + attributes);
  }
  
  findOneByIeId(ieId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIeId/' + ieId + '?' + attributes);
  }
  
  
  updateEmailCacheByRecent(recent:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheByRecent?recent=' + recent, emailCache);
  }
  
  updateEmailCacheByFlagged(flagged:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheByFlagged?flagged=' + flagged, emailCache);
  }
  
  updateEmailCacheByAnswered(answered:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheByAnswered?answered=' + answered, emailCache);
  }
  
  updateEmailCacheByDeleted(deleted:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheByDeleted?deleted=' + deleted, emailCache);
  }
  
  updateEmailCacheBySeen(seen:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheBySeen?seen=' + seen, emailCache);
  }
  
  updateEmailCacheByDraft(draft:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheByDraft?draft=' + draft, emailCache);
  }
  
  updateEmailCacheByMailsize(mailsize:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheByMailsize?mailsize=' + mailsize, emailCache);
  }
  
  updateEmailCacheByImapUid(imapUid:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheByImapUid?imapUid=' + imapUid, emailCache);
  }
  
  updateEmailCacheByMsgno(msgno:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheByMsgno?msgno=' + msgno, emailCache);
  }
  
  updateEmailCacheByMbox(mbox:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheByMbox?mbox=' + mbox, emailCache);
  }
  
  updateEmailCacheBySubject(subject:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheBySubject?subject=' + subject, emailCache);
  }
  
  updateEmailCacheByFromaddr(fromaddr:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheByFromaddr?fromaddr=' + fromaddr, emailCache);
  }
  
  updateEmailCacheByToaddr(toaddr:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheByToaddr?toaddr=' + toaddr, emailCache);
  }
  
  updateEmailCacheByMessageId(messageId:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheByMessageId?messageId=' + messageId, emailCache);
  }
  
  updateEmailCacheBySenddate(senddate:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheBySenddate?senddate=' + senddate, emailCache);
  }
  
  updateEmailCacheByIeId(ieId:any, emailCache:EmailCache) {
      return this.http.post(this.basePath + '/updateEmailCacheByIeId?ieId=' + ieId, emailCache);
  }
  
  
  
  //</es-section>
}
