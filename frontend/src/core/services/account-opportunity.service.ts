/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:19:58 GMT-0400 (Bolivia Time)
 * Time: 4:19:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:19:58 GMT-0400 (Bolivia Time)
 * Last time updated: 4:19:58
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AccountsOpportunities} from "../models/accountsOpportunities";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AccountOpportunityService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/accounts-opportunities`;
  dataChange: BehaviorSubject<AccountsOpportunities[]> = new BehaviorSubject<AccountsOpportunities[]>([]);
  accountOpportunityData: AccountsOpportunities = new AccountsOpportunities();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AccountsOpportunities[] {
    return this.dataChange.value;
  }

  getDataAccountsOpportunities(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllAccountsOpportunities(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AccountsOpportunities[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAccountsOpportunities(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAccountOpportunity(accountOpportunity:AccountsOpportunities) {
    return this.http.post(this.basePath, accountOpportunity);
  }
  getAccountOpportunity(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAccountOpportunity(id:any, accountOpportunity:AccountsOpportunities) {
    return this.http.put(this.basePath + '/' + id, accountOpportunity);
  }
  deleteAccountOpportunity(id:any) {
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
  
  findOneByOpportunityId(opportunityId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOpportunityId/' + opportunityId + '?' + attributes);
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
  
  
  updateAccountOpportunityById(id:any, accountOpportunity:AccountsOpportunities) {
      return this.http.post(this.basePath + '/updateAccountOpportunityById?id=' + id, accountOpportunity);
  }
  
  updateAccountOpportunityByDeleted(deleted:any, accountOpportunity:AccountsOpportunities) {
      return this.http.post(this.basePath + '/updateAccountOpportunityByDeleted?deleted=' + deleted, accountOpportunity);
  }
  
  updateAccountOpportunityByOpportunityId(opportunityId:any, accountOpportunity:AccountsOpportunities) {
      return this.http.post(this.basePath + '/updateAccountOpportunityByOpportunityId?opportunityId=' + opportunityId, accountOpportunity);
  }
  
  updateAccountOpportunityByAccountId(accountId:any, accountOpportunity:AccountsOpportunities) {
      return this.http.post(this.basePath + '/updateAccountOpportunityByAccountId?accountId=' + accountId, accountOpportunity);
  }
  
  updateAccountOpportunityByDateModified(dateModified:any, accountOpportunity:AccountsOpportunities) {
      return this.http.post(this.basePath + '/updateAccountOpportunityByDateModified?dateModified=' + dateModified, accountOpportunity);
  }
  
  
  
  //</es-section>
}
