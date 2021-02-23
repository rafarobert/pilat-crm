/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:34 GMT-0400 (Bolivia Time)
 * Time: 2:42:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:34 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:34
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {EmailAddrBeanRel} from "../models/emailAddrBeanRel";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EmailAddrBeanRelService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/email-addr-bean-rel`;
  dataChange: BehaviorSubject<EmailAddrBeanRel[]> = new BehaviorSubject<EmailAddrBeanRel[]>([]);
  emailAddrBeanRelData: EmailAddrBeanRel = new EmailAddrBeanRel();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): EmailAddrBeanRel[] {
    return this.dataChange.value;
  }

  getDataEmailAddrBeanRel(): void {
    this.getAllEmailAddrBeanRel().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:EmailAddrBeanRel[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEmailAddrBeanRel(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEmailAddrBeanRel(emailAddrBeanRel:EmailAddrBeanRel) {
    return this.http.post(this.basePath, emailAddrBeanRel);
  }
  getEmailAddrBeanRel(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEmailAddrBeanRel(id:any, emailAddrBeanRel:EmailAddrBeanRel) {
    return this.http.put(this.basePath + '/' + id, emailAddrBeanRel);
  }
  deleteEmailAddrBeanRel(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByPrimaryAddress(primaryAddress:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPrimaryAddress/' + primaryAddress + '?' + attributes);
  }
  
  findOneByReplyToAddress(replyToAddress:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReplyToAddress/' + replyToAddress + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByBeanModule(beanModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeanModule/' + beanModule + '?' + attributes);
  }
  
  findOneByDateCreated(dateCreated:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateCreated/' + dateCreated + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  findOneByEmailAddressId(emailAddressId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailAddressId/' + emailAddressId + '?' + attributes);
  }
  
  findOneByBeanId(beanId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeanId/' + beanId + '?' + attributes);
  }
  
  
  updateEmailAddrBeanRelById(id:any, emailAddrBeanRel:EmailAddrBeanRel) {
      return this.http.post(this.basePath + '/updateEmailAddrBeanRelById?id=' + id, emailAddrBeanRel);
  }
  
  updateEmailAddrBeanRelByPrimaryAddress(primaryAddress:any, emailAddrBeanRel:EmailAddrBeanRel) {
      return this.http.post(this.basePath + '/updateEmailAddrBeanRelByPrimaryAddress?primaryAddress=' + primaryAddress, emailAddrBeanRel);
  }
  
  updateEmailAddrBeanRelByReplyToAddress(replyToAddress:any, emailAddrBeanRel:EmailAddrBeanRel) {
      return this.http.post(this.basePath + '/updateEmailAddrBeanRelByReplyToAddress?replyToAddress=' + replyToAddress, emailAddrBeanRel);
  }
  
  updateEmailAddrBeanRelByDeleted(deleted:any, emailAddrBeanRel:EmailAddrBeanRel) {
      return this.http.post(this.basePath + '/updateEmailAddrBeanRelByDeleted?deleted=' + deleted, emailAddrBeanRel);
  }
  
  updateEmailAddrBeanRelByBeanModule(beanModule:any, emailAddrBeanRel:EmailAddrBeanRel) {
      return this.http.post(this.basePath + '/updateEmailAddrBeanRelByBeanModule?beanModule=' + beanModule, emailAddrBeanRel);
  }
  
  updateEmailAddrBeanRelByDateCreated(dateCreated:any, emailAddrBeanRel:EmailAddrBeanRel) {
      return this.http.post(this.basePath + '/updateEmailAddrBeanRelByDateCreated?dateCreated=' + dateCreated, emailAddrBeanRel);
  }
  
  updateEmailAddrBeanRelByDateModified(dateModified:any, emailAddrBeanRel:EmailAddrBeanRel) {
      return this.http.post(this.basePath + '/updateEmailAddrBeanRelByDateModified?dateModified=' + dateModified, emailAddrBeanRel);
  }
  
  updateEmailAddrBeanRelByEmailAddressId(emailAddressId:any, emailAddrBeanRel:EmailAddrBeanRel) {
      return this.http.post(this.basePath + '/updateEmailAddrBeanRelByEmailAddressId?emailAddressId=' + emailAddressId, emailAddrBeanRel);
  }
  
  updateEmailAddrBeanRelByBeanId(beanId:any, emailAddrBeanRel:EmailAddrBeanRel) {
      return this.http.post(this.basePath + '/updateEmailAddrBeanRelByBeanId?beanId=' + beanId, emailAddrBeanRel);
  }
  
  
  
  //</es-section>
}
