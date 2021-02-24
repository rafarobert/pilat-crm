/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:46 GMT-0400 (Bolivia Time)
 * Time: 2:40:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:46 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:46
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Accounts} from "../models/accounts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/accounts`;
  dataChange: BehaviorSubject<Accounts[]> = new BehaviorSubject<Accounts[]>([]);
  accountData: Accounts = new Accounts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Accounts[] {
    return this.dataChange.value;
  }

  getDataAccounts(): void {
    this.getAllAccounts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Accounts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAccounts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAccount(account:Accounts) {
    return this.http.post(this.basePath, account);
  }
  getAccount(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAccount(id:any, account:Accounts) {
    return this.http.put(this.basePath + '/' + id, account);
  }
  deleteAccount(id:any) {
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
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByAccountType(accountType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccountType/' + accountType + '?' + attributes);
  }
  
  findOneByIndustry(industry:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIndustry/' + industry + '?' + attributes);
  }
  
  findOneByAnnualRevenue(annualRevenue:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAnnualRevenue/' + annualRevenue + '?' + attributes);
  }
  
  findOneByPhoneFax(phoneFax:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPhoneFax/' + phoneFax + '?' + attributes);
  }
  
  findOneByBillingAddressStreet(billingAddressStreet:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBillingAddressStreet/' + billingAddressStreet + '?' + attributes);
  }
  
  findOneByBillingAddressCity(billingAddressCity:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBillingAddressCity/' + billingAddressCity + '?' + attributes);
  }
  
  findOneByBillingAddressState(billingAddressState:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBillingAddressState/' + billingAddressState + '?' + attributes);
  }
  
  findOneByBillingAddressPostalcode(billingAddressPostalcode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBillingAddressPostalcode/' + billingAddressPostalcode + '?' + attributes);
  }
  
  findOneByBillingAddressCountry(billingAddressCountry:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBillingAddressCountry/' + billingAddressCountry + '?' + attributes);
  }
  
  findOneByRating(rating:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRating/' + rating + '?' + attributes);
  }
  
  findOneByPhoneOffice(phoneOffice:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPhoneOffice/' + phoneOffice + '?' + attributes);
  }
  
  findOneByPhoneAlternate(phoneAlternate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPhoneAlternate/' + phoneAlternate + '?' + attributes);
  }
  
  findOneByWebsite(website:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByWebsite/' + website + '?' + attributes);
  }
  
  findOneByOwnership(ownership:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOwnership/' + ownership + '?' + attributes);
  }
  
  findOneByEmployees(employees:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmployees/' + employees + '?' + attributes);
  }
  
  findOneByTickerSymbol(tickerSymbol:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTickerSymbol/' + tickerSymbol + '?' + attributes);
  }
  
  findOneByShippingAddressStreet(shippingAddressStreet:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingAddressStreet/' + shippingAddressStreet + '?' + attributes);
  }
  
  findOneByShippingAddressCity(shippingAddressCity:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingAddressCity/' + shippingAddressCity + '?' + attributes);
  }
  
  findOneByShippingAddressState(shippingAddressState:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingAddressState/' + shippingAddressState + '?' + attributes);
  }
  
  findOneByShippingAddressPostalcode(shippingAddressPostalcode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingAddressPostalcode/' + shippingAddressPostalcode + '?' + attributes);
  }
  
  findOneByShippingAddressCountry(shippingAddressCountry:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingAddressCountry/' + shippingAddressCountry + '?' + attributes);
  }
  
  findOneBySicCode(sicCode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySicCode/' + sicCode + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByDateEntered(dateEntered:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateEntered/' + dateEntered + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  findOneByModifiedUserId(modifiedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedUserId/' + modifiedUserId + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  findOneByCampaignId(campaignId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCampaignId/' + campaignId + '?' + attributes);
  }
  
  
  updateAccountById(id:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountById?id=' + id, account);
  }
  
  updateAccountByDeleted(deleted:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByDeleted?deleted=' + deleted, account);
  }
  
  updateAccountByName(name:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByName?name=' + name, account);
  }
  
  updateAccountByAccountType(accountType:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByAccountType?accountType=' + accountType, account);
  }
  
  updateAccountByIndustry(industry:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByIndustry?industry=' + industry, account);
  }
  
  updateAccountByAnnualRevenue(annualRevenue:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByAnnualRevenue?annualRevenue=' + annualRevenue, account);
  }
  
  updateAccountByPhoneFax(phoneFax:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByPhoneFax?phoneFax=' + phoneFax, account);
  }
  
  updateAccountByBillingAddressStreet(billingAddressStreet:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByBillingAddressStreet?billingAddressStreet=' + billingAddressStreet, account);
  }
  
  updateAccountByBillingAddressCity(billingAddressCity:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByBillingAddressCity?billingAddressCity=' + billingAddressCity, account);
  }
  
  updateAccountByBillingAddressState(billingAddressState:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByBillingAddressState?billingAddressState=' + billingAddressState, account);
  }
  
  updateAccountByBillingAddressPostalcode(billingAddressPostalcode:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByBillingAddressPostalcode?billingAddressPostalcode=' + billingAddressPostalcode, account);
  }
  
  updateAccountByBillingAddressCountry(billingAddressCountry:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByBillingAddressCountry?billingAddressCountry=' + billingAddressCountry, account);
  }
  
  updateAccountByRating(rating:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByRating?rating=' + rating, account);
  }
  
  updateAccountByPhoneOffice(phoneOffice:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByPhoneOffice?phoneOffice=' + phoneOffice, account);
  }
  
  updateAccountByPhoneAlternate(phoneAlternate:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByPhoneAlternate?phoneAlternate=' + phoneAlternate, account);
  }
  
  updateAccountByWebsite(website:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByWebsite?website=' + website, account);
  }
  
  updateAccountByOwnership(ownership:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByOwnership?ownership=' + ownership, account);
  }
  
  updateAccountByEmployees(employees:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByEmployees?employees=' + employees, account);
  }
  
  updateAccountByTickerSymbol(tickerSymbol:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByTickerSymbol?tickerSymbol=' + tickerSymbol, account);
  }
  
  updateAccountByShippingAddressStreet(shippingAddressStreet:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByShippingAddressStreet?shippingAddressStreet=' + shippingAddressStreet, account);
  }
  
  updateAccountByShippingAddressCity(shippingAddressCity:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByShippingAddressCity?shippingAddressCity=' + shippingAddressCity, account);
  }
  
  updateAccountByShippingAddressState(shippingAddressState:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByShippingAddressState?shippingAddressState=' + shippingAddressState, account);
  }
  
  updateAccountByShippingAddressPostalcode(shippingAddressPostalcode:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByShippingAddressPostalcode?shippingAddressPostalcode=' + shippingAddressPostalcode, account);
  }
  
  updateAccountByShippingAddressCountry(shippingAddressCountry:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByShippingAddressCountry?shippingAddressCountry=' + shippingAddressCountry, account);
  }
  
  updateAccountBySicCode(sicCode:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountBySicCode?sicCode=' + sicCode, account);
  }
  
  updateAccountByDescription(description:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByDescription?description=' + description, account);
  }
  
  updateAccountByDateEntered(dateEntered:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByDateEntered?dateEntered=' + dateEntered, account);
  }
  
  updateAccountByDateModified(dateModified:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByDateModified?dateModified=' + dateModified, account);
  }
  
  updateAccountByModifiedUserId(modifiedUserId:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByModifiedUserId?modifiedUserId=' + modifiedUserId, account);
  }
  
  updateAccountByCreatedBy(createdBy:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByCreatedBy?createdBy=' + createdBy, account);
  }
  
  updateAccountByAssignedUserId(assignedUserId:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByAssignedUserId?assignedUserId=' + assignedUserId, account);
  }
  
  updateAccountByParentId(parentId:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByParentId?parentId=' + parentId, account);
  }
  
  updateAccountByCampaignId(campaignId:any, account:Accounts) {
      return this.http.post(this.basePath + '/updateAccountByCampaignId?campaignId=' + campaignId, account);
  }
  
  
  
  //</es-section>
}
