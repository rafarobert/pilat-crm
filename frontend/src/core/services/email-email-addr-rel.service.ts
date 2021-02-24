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
import {EmailsEmailAddrRel} from "../models/emailsEmailAddrRel";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EmailEmailAddrRelService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/emails-email-addr-rel`;
  dataChange: BehaviorSubject<EmailsEmailAddrRel[]> = new BehaviorSubject<EmailsEmailAddrRel[]>([]);
  emailEmailAddrRelData: EmailsEmailAddrRel = new EmailsEmailAddrRel();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): EmailsEmailAddrRel[] {
    return this.dataChange.value;
  }

  getDataEmailsEmailAddrRel(): void {
    this.getAllEmailsEmailAddrRel().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:EmailsEmailAddrRel[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEmailsEmailAddrRel(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEmailEmailAddrRel(emailEmailAddrRel:EmailsEmailAddrRel) {
    return this.http.post(this.basePath, emailEmailAddrRel);
  }
  getEmailEmailAddrRel(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEmailEmailAddrRel(id:any, emailEmailAddrRel:EmailsEmailAddrRel) {
    return this.http.put(this.basePath + '/' + id, emailEmailAddrRel);
  }
  deleteEmailEmailAddrRel(id:any) {
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
  
  findOneByAddressType(addressType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAddressType/' + addressType + '?' + attributes);
  }
  
  findOneByEmailId(emailId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailId/' + emailId + '?' + attributes);
  }
  
  findOneByEmailAddressId(emailAddressId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailAddressId/' + emailAddressId + '?' + attributes);
  }
  
  
  updateEmailEmailAddrRelById(id:any, emailEmailAddrRel:EmailsEmailAddrRel) {
      return this.http.post(this.basePath + '/updateEmailEmailAddrRelById?id=' + id, emailEmailAddrRel);
  }
  
  updateEmailEmailAddrRelByDeleted(deleted:any, emailEmailAddrRel:EmailsEmailAddrRel) {
      return this.http.post(this.basePath + '/updateEmailEmailAddrRelByDeleted?deleted=' + deleted, emailEmailAddrRel);
  }
  
  updateEmailEmailAddrRelByAddressType(addressType:any, emailEmailAddrRel:EmailsEmailAddrRel) {
      return this.http.post(this.basePath + '/updateEmailEmailAddrRelByAddressType?addressType=' + addressType, emailEmailAddrRel);
  }
  
  updateEmailEmailAddrRelByEmailId(emailId:any, emailEmailAddrRel:EmailsEmailAddrRel) {
      return this.http.post(this.basePath + '/updateEmailEmailAddrRelByEmailId?emailId=' + emailId, emailEmailAddrRel);
  }
  
  updateEmailEmailAddrRelByEmailAddressId(emailAddressId:any, emailEmailAddrRel:EmailsEmailAddrRel) {
      return this.http.post(this.basePath + '/updateEmailEmailAddrRelByEmailAddressId?emailAddressId=' + emailAddressId, emailEmailAddrRel);
  }
  
  
  
  //</es-section>
}
