/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:33 GMT-0400 (Bolivia Time)
 * Time: 2:42:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:33 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:33
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {EmailAddresses} from "../models/emailAddresses";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EmailAddresseService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/email-addresses`;
  dataChange: BehaviorSubject<EmailAddresses[]> = new BehaviorSubject<EmailAddresses[]>([]);
  emailAddresseData: EmailAddresses = new EmailAddresses();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): EmailAddresses[] {
    return this.dataChange.value;
  }

  getDataEmailAddresses(): void {
    this.getAllEmailAddresses().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:EmailAddresses[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEmailAddresses(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEmailAddresse(emailAddresse:EmailAddresses) {
    return this.http.post(this.basePath, emailAddresse);
  }
  getEmailAddresse(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEmailAddresse(id:any, emailAddresse:EmailAddresses) {
    return this.http.put(this.basePath + '/' + id, emailAddresse);
  }
  deleteEmailAddresse(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByInvalidEmail(invalidEmail:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByInvalidEmail/' + invalidEmail + '?' + attributes);
  }
  
  findOneByOptOut(optOut:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOptOut/' + optOut + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByEmailAddress(emailAddress:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailAddress/' + emailAddress + '?' + attributes);
  }
  
  findOneByEmailAddressCaps(emailAddressCaps:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailAddressCaps/' + emailAddressCaps + '?' + attributes);
  }
  
  findOneByConfirmOptIn(confirmOptIn:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByConfirmOptIn/' + confirmOptIn + '?' + attributes);
  }
  
  findOneByConfirmOptInToken(confirmOptInToken:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByConfirmOptInToken/' + confirmOptInToken + '?' + attributes);
  }
  
  findOneByConfirmOptInDate(confirmOptInDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByConfirmOptInDate/' + confirmOptInDate + '?' + attributes);
  }
  
  findOneByConfirmOptInSentDate(confirmOptInSentDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByConfirmOptInSentDate/' + confirmOptInSentDate + '?' + attributes);
  }
  
  findOneByConfirmOptInFailDate(confirmOptInFailDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByConfirmOptInFailDate/' + confirmOptInFailDate + '?' + attributes);
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
  
  
  updateEmailAddresseById(id:any, emailAddresse:EmailAddresses) {
      return this.http.post(this.basePath + '/updateEmailAddresseById?id=' + id, emailAddresse);
  }
  
  updateEmailAddresseByInvalidEmail(invalidEmail:any, emailAddresse:EmailAddresses) {
      return this.http.post(this.basePath + '/updateEmailAddresseByInvalidEmail?invalidEmail=' + invalidEmail, emailAddresse);
  }
  
  updateEmailAddresseByOptOut(optOut:any, emailAddresse:EmailAddresses) {
      return this.http.post(this.basePath + '/updateEmailAddresseByOptOut?optOut=' + optOut, emailAddresse);
  }
  
  updateEmailAddresseByDeleted(deleted:any, emailAddresse:EmailAddresses) {
      return this.http.post(this.basePath + '/updateEmailAddresseByDeleted?deleted=' + deleted, emailAddresse);
  }
  
  updateEmailAddresseByEmailAddress(emailAddress:any, emailAddresse:EmailAddresses) {
      return this.http.post(this.basePath + '/updateEmailAddresseByEmailAddress?emailAddress=' + emailAddress, emailAddresse);
  }
  
  updateEmailAddresseByEmailAddressCaps(emailAddressCaps:any, emailAddresse:EmailAddresses) {
      return this.http.post(this.basePath + '/updateEmailAddresseByEmailAddressCaps?emailAddressCaps=' + emailAddressCaps, emailAddresse);
  }
  
  updateEmailAddresseByConfirmOptIn(confirmOptIn:any, emailAddresse:EmailAddresses) {
      return this.http.post(this.basePath + '/updateEmailAddresseByConfirmOptIn?confirmOptIn=' + confirmOptIn, emailAddresse);
  }
  
  updateEmailAddresseByConfirmOptInToken(confirmOptInToken:any, emailAddresse:EmailAddresses) {
      return this.http.post(this.basePath + '/updateEmailAddresseByConfirmOptInToken?confirmOptInToken=' + confirmOptInToken, emailAddresse);
  }
  
  updateEmailAddresseByConfirmOptInDate(confirmOptInDate:any, emailAddresse:EmailAddresses) {
      return this.http.post(this.basePath + '/updateEmailAddresseByConfirmOptInDate?confirmOptInDate=' + confirmOptInDate, emailAddresse);
  }
  
  updateEmailAddresseByConfirmOptInSentDate(confirmOptInSentDate:any, emailAddresse:EmailAddresses) {
      return this.http.post(this.basePath + '/updateEmailAddresseByConfirmOptInSentDate?confirmOptInSentDate=' + confirmOptInSentDate, emailAddresse);
  }
  
  updateEmailAddresseByConfirmOptInFailDate(confirmOptInFailDate:any, emailAddresse:EmailAddresses) {
      return this.http.post(this.basePath + '/updateEmailAddresseByConfirmOptInFailDate?confirmOptInFailDate=' + confirmOptInFailDate, emailAddresse);
  }
  
  updateEmailAddresseByDateCreated(dateCreated:any, emailAddresse:EmailAddresses) {
      return this.http.post(this.basePath + '/updateEmailAddresseByDateCreated?dateCreated=' + dateCreated, emailAddresse);
  }
  
  updateEmailAddresseByDateModified(dateModified:any, emailAddresse:EmailAddresses) {
      return this.http.post(this.basePath + '/updateEmailAddresseByDateModified?dateModified=' + dateModified, emailAddresse);
  }
  
  
  
  //</es-section>
}
