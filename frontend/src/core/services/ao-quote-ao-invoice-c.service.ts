/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:49 GMT-0400 (Bolivia Time)
 * Time: 2:41:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:49 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosQuotesAosInvoicesC} from "../models/aosQuotesAosInvoicesC";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoQuoteAoInvoiceCService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-quotes-aos-invoices-c`;
  dataChange: BehaviorSubject<AosQuotesAosInvoicesC[]> = new BehaviorSubject<AosQuotesAosInvoicesC[]>([]);
  aoQuoteAoInvoiceCData: AosQuotesAosInvoicesC = new AosQuotesAosInvoicesC();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosQuotesAosInvoicesC[] {
    return this.dataChange.value;
  }

  getDataAosQuotesAosInvoicesC(): void {
    this.getAllAosQuotesAosInvoicesC().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosQuotesAosInvoicesC[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosQuotesAosInvoicesC(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoQuoteAoInvoiceC(aoQuoteAoInvoiceC:AosQuotesAosInvoicesC) {
    return this.http.post(this.basePath, aoQuoteAoInvoiceC);
  }
  getAoQuoteAoInvoiceC(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoQuoteAoInvoiceC(id:any, aoQuoteAoInvoiceC:AosQuotesAosInvoicesC) {
    return this.http.put(this.basePath + '/' + id, aoQuoteAoInvoiceC);
  }
  deleteAoQuoteAoInvoiceC(id:any) {
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
  
  findOneByAosQuotes77d9QuotesIda(aosQuotes77d9QuotesIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAosQuotes77d9QuotesIda/' + aosQuotes77d9QuotesIda + '?' + attributes);
  }
  
  findOneByAosQuotes6b83nvoicesIdb(aosQuotes6b83nvoicesIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAosQuotes6b83nvoicesIdb/' + aosQuotes6b83nvoicesIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateAoQuoteAoInvoiceCById(id:any, aoQuoteAoInvoiceC:AosQuotesAosInvoicesC) {
      return this.http.post(this.basePath + '/updateAoQuoteAoInvoiceCById?id=' + id, aoQuoteAoInvoiceC);
  }
  
  updateAoQuoteAoInvoiceCByDeleted(deleted:any, aoQuoteAoInvoiceC:AosQuotesAosInvoicesC) {
      return this.http.post(this.basePath + '/updateAoQuoteAoInvoiceCByDeleted?deleted=' + deleted, aoQuoteAoInvoiceC);
  }
  
  updateAoQuoteAoInvoiceCByAosQuotes77d9QuotesIda(aosQuotes77d9QuotesIda:any, aoQuoteAoInvoiceC:AosQuotesAosInvoicesC) {
      return this.http.post(this.basePath + '/updateAoQuoteAoInvoiceCByAosQuotes77d9QuotesIda?aosQuotes77d9QuotesIda=' + aosQuotes77d9QuotesIda, aoQuoteAoInvoiceC);
  }
  
  updateAoQuoteAoInvoiceCByAosQuotes6b83nvoicesIdb(aosQuotes6b83nvoicesIdb:any, aoQuoteAoInvoiceC:AosQuotesAosInvoicesC) {
      return this.http.post(this.basePath + '/updateAoQuoteAoInvoiceCByAosQuotes6b83nvoicesIdb?aosQuotes6b83nvoicesIdb=' + aosQuotes6b83nvoicesIdb, aoQuoteAoInvoiceC);
  }
  
  updateAoQuoteAoInvoiceCByDateModified(dateModified:any, aoQuoteAoInvoiceC:AosQuotesAosInvoicesC) {
      return this.http.post(this.basePath + '/updateAoQuoteAoInvoiceCByDateModified?dateModified=' + dateModified, aoQuoteAoInvoiceC);
  }
  
  
  
  //</es-section>
}
