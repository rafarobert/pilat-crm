/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:48 GMT-0400 (Bolivia Time)
 * Time: 2:40:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:48 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:48
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AccountsBugs} from "../models/accountsBugs";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AccountBugService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/accounts-bugs`;
  dataChange: BehaviorSubject<AccountsBugs[]> = new BehaviorSubject<AccountsBugs[]>([]);
  accountBugData: AccountsBugs = new AccountsBugs();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AccountsBugs[] {
    return this.dataChange.value;
  }

  getDataAccountsBugs(): void {
    this.getAllAccountsBugs().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AccountsBugs[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAccountsBugs(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAccountBug(accountBug:AccountsBugs) {
    return this.http.post(this.basePath, accountBug);
  }
  getAccountBug(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAccountBug(id:any, accountBug:AccountsBugs) {
    return this.http.put(this.basePath + '/' + id, accountBug);
  }
  deleteAccountBug(id:any) {
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
  
  findOneByAccountId(accountId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccountId/' + accountId + '?' + attributes);
  }
  
  findOneByBugId(bugId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBugId/' + bugId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateAccountBugById(id:any, accountBug:AccountsBugs) {
      return this.http.post(this.basePath + '/updateAccountBugById?id=' + id, accountBug);
  }
  
  updateAccountBugByDeleted(deleted:any, accountBug:AccountsBugs) {
      return this.http.post(this.basePath + '/updateAccountBugByDeleted?deleted=' + deleted, accountBug);
  }
  
  updateAccountBugByAccountId(accountId:any, accountBug:AccountsBugs) {
      return this.http.post(this.basePath + '/updateAccountBugByAccountId?accountId=' + accountId, accountBug);
  }
  
  updateAccountBugByBugId(bugId:any, accountBug:AccountsBugs) {
      return this.http.post(this.basePath + '/updateAccountBugByBugId?bugId=' + bugId, accountBug);
  }
  
  updateAccountBugByDateModified(dateModified:any, accountBug:AccountsBugs) {
      return this.http.post(this.basePath + '/updateAccountBugByDateModified?dateModified=' + dateModified, accountBug);
  }
  
  
  
  //</es-section>
}
