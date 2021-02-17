/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:52 GMT-0400 (Bolivia Time)
 * Time: 2:41:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:52 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:52
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosQuotesProjectC} from "../models/aosQuotesProjectC";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoQuoteProjectCService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-quotes-project-c`;
  dataChange: BehaviorSubject<AosQuotesProjectC[]> = new BehaviorSubject<AosQuotesProjectC[]>([]);
  aoQuoteProjectCData: AosQuotesProjectC = new AosQuotesProjectC();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosQuotesProjectC[] {
    return this.dataChange.value;
  }

  getDataAosQuotesProjectC(): void {
    this.getAllAosQuotesProjectC().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosQuotesProjectC[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosQuotesProjectC(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoQuoteProjectC(aoQuoteProjectC:AosQuotesProjectC) {
    return this.http.post(this.basePath, aoQuoteProjectC);
  }
  getAoQuoteProjectC(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoQuoteProjectC(id:any, aoQuoteProjectC:AosQuotesProjectC) {
    return this.http.put(this.basePath + '/' + id, aoQuoteProjectC);
  }
  deleteAoQuoteProjectC(id:any) {
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
  
  findOneByAosQuotes1112QuotesIda(aosQuotes1112QuotesIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAosQuotes1112QuotesIda/' + aosQuotes1112QuotesIda + '?' + attributes);
  }
  
  findOneByAosQuotes7207projectIdb(aosQuotes7207projectIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAosQuotes7207projectIdb/' + aosQuotes7207projectIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateAoQuoteProjectCById(id:any, aoQuoteProjectC:AosQuotesProjectC) {
      return this.http.post(this.basePath + '/updateAoQuoteProjectCById?id=' + id, aoQuoteProjectC);
  }
  
  updateAoQuoteProjectCByDeleted(deleted:any, aoQuoteProjectC:AosQuotesProjectC) {
      return this.http.post(this.basePath + '/updateAoQuoteProjectCByDeleted?deleted=' + deleted, aoQuoteProjectC);
  }
  
  updateAoQuoteProjectCByAosQuotes1112QuotesIda(aosQuotes1112QuotesIda:any, aoQuoteProjectC:AosQuotesProjectC) {
      return this.http.post(this.basePath + '/updateAoQuoteProjectCByAosQuotes1112QuotesIda?aosQuotes1112QuotesIda=' + aosQuotes1112QuotesIda, aoQuoteProjectC);
  }
  
  updateAoQuoteProjectCByAosQuotes7207projectIdb(aosQuotes7207projectIdb:any, aoQuoteProjectC:AosQuotesProjectC) {
      return this.http.post(this.basePath + '/updateAoQuoteProjectCByAosQuotes7207projectIdb?aosQuotes7207projectIdb=' + aosQuotes7207projectIdb, aoQuoteProjectC);
  }
  
  updateAoQuoteProjectCByDateModified(dateModified:any, aoQuoteProjectC:AosQuotesProjectC) {
      return this.http.post(this.basePath + '/updateAoQuoteProjectCByDateModified?dateModified=' + dateModified, aoQuoteProjectC);
  }
  
  
  
  //</es-section>
}
