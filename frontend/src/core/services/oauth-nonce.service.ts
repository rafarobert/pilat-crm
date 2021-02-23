/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:21 GMT-0400 (Bolivia Time)
 * Time: 2:43:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:21
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {OauthNonce} from "../models/oauthNonce";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class OauthNonceService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/oauth-nonce`;
  dataChange: BehaviorSubject<OauthNonce[]> = new BehaviorSubject<OauthNonce[]>([]);
  oauthNonceData: OauthNonce = new OauthNonce();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): OauthNonce[] {
    return this.dataChange.value;
  }

  getDataOauthNonce(): void {
    this.getAllOauthNonce().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:OauthNonce[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllOauthNonce(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createOauthNonce(oauthNonce:OauthNonce) {
    return this.http.post(this.basePath, oauthNonce);
  }
  getOauthNonce(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOauthNonce(id:any, oauthNonce:OauthNonce) {
    return this.http.put(this.basePath + '/' + id, oauthNonce);
  }
  deleteOauthNonce(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByConskey(conskey:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByConskey/' + conskey + '?' + attributes);
  }
  
  findOneByNonce(nonce:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNonce/' + nonce + '?' + attributes);
  }
  
  findOneByNonceTs(nonceTs:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNonceTs/' + nonceTs + '?' + attributes);
  }
  
  
  updateOauthNonceByConskey(conskey:any, oauthNonce:OauthNonce) {
      return this.http.post(this.basePath + '/updateOauthNonceByConskey?conskey=' + conskey, oauthNonce);
  }
  
  updateOauthNonceByNonce(nonce:any, oauthNonce:OauthNonce) {
      return this.http.post(this.basePath + '/updateOauthNonceByNonce?nonce=' + nonce, oauthNonce);
  }
  
  updateOauthNonceByNonceTs(nonceTs:any, oauthNonce:OauthNonce) {
      return this.http.post(this.basePath + '/updateOauthNonceByNonceTs?nonceTs=' + nonceTs, oauthNonce);
  }
  
  
  
  //</es-section>
}
