/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:51 GMT-0400 (Bolivia Time)
 * Time: 2:41:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:51
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosQuotesOsContractsC} from "../models/aosQuotesOsContractsC";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoQuoteOContractCService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-quotes-os-contracts-c`;
  dataChange: BehaviorSubject<AosQuotesOsContractsC[]> = new BehaviorSubject<AosQuotesOsContractsC[]>([]);
  aoQuoteOContractCData: AosQuotesOsContractsC = new AosQuotesOsContractsC();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosQuotesOsContractsC[] {
    return this.dataChange.value;
  }

  getDataAosQuotesOsContractsC(): void {
    this.getAllAosQuotesOsContractsC().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosQuotesOsContractsC[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosQuotesOsContractsC(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoQuoteOContractC(aoQuoteOContractC:AosQuotesOsContractsC) {
    return this.http.post(this.basePath, aoQuoteOContractC);
  }
  getAoQuoteOContractC(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoQuoteOContractC(id:any, aoQuoteOContractC:AosQuotesOsContractsC) {
    return this.http.put(this.basePath + '/' + id, aoQuoteOContractC);
  }
  deleteAoQuoteOContractC(id:any) {
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
  
  findOneByAosQuotese81eQuotesIda(aosQuotese81eQuotesIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAosQuotese81eQuotesIda/' + aosQuotese81eQuotesIda + '?' + attributes);
  }
  
  findOneByAosQuotes4dc0ntractsIdb(aosQuotes4dc0ntractsIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAosQuotes4dc0ntractsIdb/' + aosQuotes4dc0ntractsIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateAoQuoteOContractCById(id:any, aoQuoteOContractC:AosQuotesOsContractsC) {
      return this.http.post(this.basePath + '/updateAoQuoteOContractCById?id=' + id, aoQuoteOContractC);
  }
  
  updateAoQuoteOContractCByDeleted(deleted:any, aoQuoteOContractC:AosQuotesOsContractsC) {
      return this.http.post(this.basePath + '/updateAoQuoteOContractCByDeleted?deleted=' + deleted, aoQuoteOContractC);
  }
  
  updateAoQuoteOContractCByAosQuotese81eQuotesIda(aosQuotese81eQuotesIda:any, aoQuoteOContractC:AosQuotesOsContractsC) {
      return this.http.post(this.basePath + '/updateAoQuoteOContractCByAosQuotese81eQuotesIda?aosQuotese81eQuotesIda=' + aosQuotese81eQuotesIda, aoQuoteOContractC);
  }
  
  updateAoQuoteOContractCByAosQuotes4dc0ntractsIdb(aosQuotes4dc0ntractsIdb:any, aoQuoteOContractC:AosQuotesOsContractsC) {
      return this.http.post(this.basePath + '/updateAoQuoteOContractCByAosQuotes4dc0ntractsIdb?aosQuotes4dc0ntractsIdb=' + aosQuotes4dc0ntractsIdb, aoQuoteOContractC);
  }
  
  updateAoQuoteOContractCByDateModified(dateModified:any, aoQuoteOContractC:AosQuotesOsContractsC) {
      return this.http.post(this.basePath + '/updateAoQuoteOContractCByDateModified?dateModified=' + dateModified, aoQuoteOContractC);
  }
  
  
  
  //</es-section>
}
