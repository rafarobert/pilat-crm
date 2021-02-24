/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:54 GMT-0400 (Bolivia Time)
 * Time: 2:42:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:54 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {InboundEmailCacheTs} from "../models/inboundEmailCacheTs";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class InboundEmailCacheTService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/inbound-email-cache-ts`;
  dataChange: BehaviorSubject<InboundEmailCacheTs[]> = new BehaviorSubject<InboundEmailCacheTs[]>([]);
  inboundEmailCacheTData: InboundEmailCacheTs = new InboundEmailCacheTs();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): InboundEmailCacheTs[] {
    return this.dataChange.value;
  }

  getDataInboundEmailCacheTs(): void {
    this.getAllInboundEmailCacheTs().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:InboundEmailCacheTs[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllInboundEmailCacheTs(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createInboundEmailCacheT(inboundEmailCacheT:InboundEmailCacheTs) {
    return this.http.post(this.basePath, inboundEmailCacheT);
  }
  getInboundEmailCacheT(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateInboundEmailCacheT(id:any, inboundEmailCacheT:InboundEmailCacheTs) {
    return this.http.put(this.basePath + '/' + id, inboundEmailCacheT);
  }
  deleteInboundEmailCacheT(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByIeTimestamp(ieTimestamp:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIeTimestamp/' + ieTimestamp + '?' + attributes);
  }
  
  
  updateInboundEmailCacheTById(id:any, inboundEmailCacheT:InboundEmailCacheTs) {
      return this.http.post(this.basePath + '/updateInboundEmailCacheTById?id=' + id, inboundEmailCacheT);
  }
  
  updateInboundEmailCacheTByIeTimestamp(ieTimestamp:any, inboundEmailCacheT:InboundEmailCacheTs) {
      return this.http.post(this.basePath + '/updateInboundEmailCacheTByIeTimestamp?ieTimestamp=' + ieTimestamp, inboundEmailCacheT);
  }
  
  
  
  //</es-section>
}
