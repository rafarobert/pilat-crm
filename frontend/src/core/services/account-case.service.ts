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
import {AccountsCases} from "../models/accountsCases";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AccountCaseService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/accounts-cases`;
  dataChange: BehaviorSubject<AccountsCases[]> = new BehaviorSubject<AccountsCases[]>([]);
  accountCaseData: AccountsCases = new AccountsCases();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AccountsCases[] {
    return this.dataChange.value;
  }

  getDataAccountsCases(): void {
    this.getAllAccountsCases().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AccountsCases[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAccountsCases(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAccountCase(accountCase:AccountsCases) {
    return this.http.post(this.basePath, accountCase);
  }
  getAccountCase(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAccountCase(id:any, accountCase:AccountsCases) {
    return this.http.put(this.basePath + '/' + id, accountCase);
  }
  deleteAccountCase(id:any) {
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
  
  findOneByCaseId(caseId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCaseId/' + caseId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateAccountCaseById(id:any, accountCase:AccountsCases) {
      return this.http.post(this.basePath + '/updateAccountCaseById?id=' + id, accountCase);
  }
  
  updateAccountCaseByDeleted(deleted:any, accountCase:AccountsCases) {
      return this.http.post(this.basePath + '/updateAccountCaseByDeleted?deleted=' + deleted, accountCase);
  }
  
  updateAccountCaseByAccountId(accountId:any, accountCase:AccountsCases) {
      return this.http.post(this.basePath + '/updateAccountCaseByAccountId?accountId=' + accountId, accountCase);
  }
  
  updateAccountCaseByCaseId(caseId:any, accountCase:AccountsCases) {
      return this.http.post(this.basePath + '/updateAccountCaseByCaseId?caseId=' + caseId, accountCase);
  }
  
  updateAccountCaseByDateModified(dateModified:any, accountCase:AccountsCases) {
      return this.http.post(this.basePath + '/updateAccountCaseByDateModified?dateModified=' + dateModified, accountCase);
  }
  
  
  
  //</es-section>
}
