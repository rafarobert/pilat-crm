/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 01:09:21 GMT-0400 (Bolivia Time)
 * Time: 1:9:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 01:09:21 GMT-0400 (Bolivia Time)
 * Last time updated: 1:9:21
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
export class CurrencieService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/currencies`;
  dataChange: BehaviorSubject<Currencies[]> = new BehaviorSubject<Currencies[]>([]);
  currencieData: Currencies = new Currencies();
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
  createCurrencie(currencie:Currencies) {
    return this.http.post(this.basePath, currencie);
  }
  getCurrencie(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCurrencie(id:any, currencie:Currencies) {
    return this.http.put(this.basePath + '/' + id, currencie);
  }
  deleteCurrencie(id:any) {
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
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
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
  
  
  updateCurrencieById(id:any, currencie:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencieById?id=' + id, currencie);
  }
  
  updateCurrencieByDeleted(deleted:any, currencie:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencieByDeleted?deleted=' + deleted, currencie);
  }
  
  updateCurrencieByConversionRate(conversionRate:any, currencie:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencieByConversionRate?conversionRate=' + conversionRate, currencie);
  }
  
  updateCurrencieByName(name:any, currencie:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencieByName?name=' + name, currencie);
  }
  
  updateCurrencieBySymbol(symbol:any, currencie:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencieBySymbol?symbol=' + symbol, currencie);
  }
  
  updateCurrencieByIso4217(iso4217:any, currencie:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencieByIso4217?iso4217=' + iso4217, currencie);
  }
  
  updateCurrencieByStatus(status:any, currencie:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencieByStatus?status=' + status, currencie);
  }
  
  updateCurrencieByCreatedBy(createdBy:any, currencie:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencieByCreatedBy?createdBy=' + createdBy, currencie);
  }
  
  updateCurrencieByDateEntered(dateEntered:any, currencie:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencieByDateEntered?dateEntered=' + dateEntered, currencie);
  }
  
  updateCurrencieByDateModified(dateModified:any, currencie:Currencies) {
      return this.http.post(this.basePath + '/updateCurrencieByDateModified?dateModified=' + dateModified, currencie);
  }
  
  
  findUsersCreatedByWithSystemGeneratedPassword(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findUsersCreatedByWithSystemGeneratedPassword' + '?' + attributes);
  }
  
  
  filterCurrenciesByCreatedBy(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterCurrenciesByCreatedBy/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
