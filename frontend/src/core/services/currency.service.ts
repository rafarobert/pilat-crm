/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:21 GMT-0400 (Bolivia Time)
 * Time: 2:42:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:21
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Currencies} from "../models/currencies";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/currencies`;
  dataChange: BehaviorSubject<Currencies[]> = new BehaviorSubject<Currencies[]>([]);
  currencyData: Currencies = new Currencies();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Currencies[] {
    return this.dataChange.value;
  }

  getDataCurrencies(): void {
    this.getAllCurrencies().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Currencies[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCurrencies(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCurrency(currency:Currencies) {
    return this.http.post(this.basePath, currency);
  }
  getCurrency(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCurrency(id:any, currency:Currencies) {
    return this.http.put(this.basePath + '/' + id, currency);
  }
  deleteCurrency(id:any) {
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
  
  findOneByConversionRate(conversionRate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByConversionRate/' + conversionRate + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneBySymbol(symbol:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySymbol/' + symbol + '?' + attributes);
  }
  
  findOneByIso4217(iso4217:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIso4217/' + iso4217 + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
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
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  
  updateCurrencyById(id:any, currency:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencyById?id=' + id, currency);
  }
  
  updateCurrencyByDeleted(deleted:any, currency:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencyByDeleted?deleted=' + deleted, currency);
  }
  
  updateCurrencyByConversionRate(conversionRate:any, currency:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencyByConversionRate?conversionRate=' + conversionRate, currency);
  }
  
  updateCurrencyByName(name:any, currency:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencyByName?name=' + name, currency);
  }
  
  updateCurrencyBySymbol(symbol:any, currency:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencyBySymbol?symbol=' + symbol, currency);
  }
  
  updateCurrencyByIso4217(iso4217:any, currency:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencyByIso4217?iso4217=' + iso4217, currency);
  }
  
  updateCurrencyByStatus(status:any, currency:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencyByStatus?status=' + status, currency);
  }
  
  updateCurrencyByDateEntered(dateEntered:any, currency:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencyByDateEntered?dateEntered=' + dateEntered, currency);
  }
  
  updateCurrencyByDateModified(dateModified:any, currency:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencyByDateModified?dateModified=' + dateModified, currency);
  }
  
  updateCurrencyByCreatedBy(createdBy:any, currency:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencyByCreatedBy?createdBy=' + createdBy, currency);
  }
  
  
  
  //</es-section>
}
