/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:49 GMT-0400 (Bolivia Time)
 * Time: 2:40:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:49 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AccountsContacts} from "../models/accountsContacts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AccountContactService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/accounts-contacts`;
  dataChange: BehaviorSubject<AccountsContacts[]> = new BehaviorSubject<AccountsContacts[]>([]);
  accountContactData: AccountsContacts = new AccountsContacts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AccountsContacts[] {
    return this.dataChange.value;
  }

  getDataAccountsContacts(): void {
    this.getAllAccountsContacts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AccountsContacts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAccountsContacts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAccountContact(accountContact:AccountsContacts) {
    return this.http.post(this.basePath, accountContact);
  }
  getAccountContact(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAccountContact(id:any, accountContact:AccountsContacts) {
    return this.http.put(this.basePath + '/' + id, accountContact);
  }
  deleteAccountContact(id:any) {
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
  
  findOneByContactId(contactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactId/' + contactId + '?' + attributes);
  }
  
  findOneByAccountId(accountId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccountId/' + accountId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateAccountContactById(id:any, accountContact:AccountsContacts) {
      return this.http.post(this.basePath + '/updateAccountContactById?id=' + id, accountContact);
  }
  
  updateAccountContactByDeleted(deleted:any, accountContact:AccountsContacts) {
      return this.http.post(this.basePath + '/updateAccountContactByDeleted?deleted=' + deleted, accountContact);
  }
  
  updateAccountContactByContactId(contactId:any, accountContact:AccountsContacts) {
      return this.http.post(this.basePath + '/updateAccountContactByContactId?contactId=' + contactId, accountContact);
  }
  
  updateAccountContactByAccountId(accountId:any, accountContact:AccountsContacts) {
      return this.http.post(this.basePath + '/updateAccountContactByAccountId?accountId=' + accountId, accountContact);
  }
  
  updateAccountContactByDateModified(dateModified:any, accountContact:AccountsContacts) {
      return this.http.post(this.basePath + '/updateAccountContactByDateModified?dateModified=' + dateModified, accountContact);
  }
  
  
  
  //</es-section>
}
