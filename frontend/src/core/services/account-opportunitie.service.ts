/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:51 GMT-0400 (Bolivia Time)
 * Time: 2:40:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:51
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
export class AccountOpportunitieService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/accounts-opportunities`;
  dataChange: BehaviorSubject<AccountsOpportunities[]> = new BehaviorSubject<AccountsOpportunities[]>([]);
  accountOpportunitieData: AccountsOpportunities = new AccountsOpportunities();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AccountsOpportunities[] {
    return this.dataChange.value;
  }

  getDataAccountsOpportunities(): void {
    this.getAllAccountsOpportunities().subscribe(async (res) => {
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
  createAccountOpportunitie(accountOpportunitie:AccountsOpportunities) {
    return this.http.post(this.basePath, accountOpportunitie);
  }
  getAccountOpportunitie(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAccountOpportunitie(id:any, accountOpportunitie:AccountsOpportunities) {
    return this.http.put(this.basePath + '/' + id, accountOpportunitie);
  }
  deleteAccountOpportunitie(id:any) {
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
  
  
  updateAccountOpportunitieById(id:any, accountOpportunitie:AccountsOpportunities) {
      return this.http.post(this.basePath + '/updateAccountOpportunitieById?id=' + id, accountOpportunitie);
  }
  
  updateAccountOpportunitieByDeleted(deleted:any, accountOpportunitie:AccountsOpportunities) {
      return this.http.post(this.basePath + '/updateAccountOpportunitieByDeleted?deleted=' + deleted, accountOpportunitie);
  }
  
  updateAccountOpportunitieByOpportunityId(opportunityId:any, accountOpportunitie:AccountsOpportunities) {
      return this.http.post(this.basePath + '/updateAccountOpportunitieByOpportunityId?opportunityId=' + opportunityId, accountOpportunitie);
  }
  
  updateAccountOpportunitieByAccountId(accountId:any, accountOpportunitie:AccountsOpportunities) {
      return this.http.post(this.basePath + '/updateAccountOpportunitieByAccountId?accountId=' + accountId, accountOpportunitie);
  }
  
  updateAccountOpportunitieByDateModified(dateModified:any, accountOpportunitie:AccountsOpportunities) {
      return this.http.post(this.basePath + '/updateAccountOpportunitieByDateModified?dateModified=' + dateModified, accountOpportunitie);
  }
  
  
  findOpportunitiesOpportunityWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOpportunitiesOpportunityWithDeleted' + '?' + attributes);
  }
  
  findAccountsAccountWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findAccountsAccountWithDeleted' + '?' + attributes);
  }
  
  
  filterAccountsOpportunitiesByOpportunity(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterAccountsOpportunitiesByOpportunity/' + ids + '?' + attributes);
  }
  
  filterAccountsOpportunitiesByAccount(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterAccountsOpportunitiesByAccount/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
