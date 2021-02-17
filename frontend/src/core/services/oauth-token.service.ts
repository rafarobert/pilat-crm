/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:22 GMT-0400 (Bolivia Time)
 * Time: 2:43:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:22 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:22
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {OauthTokens} from "../models/oauthTokens";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class OauthTokenService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/oauth-tokens`;
  dataChange: BehaviorSubject<OauthTokens[]> = new BehaviorSubject<OauthTokens[]>([]);
  oauthTokenData: OauthTokens = new OauthTokens();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): OauthTokens[] {
    return this.dataChange.value;
  }

  getDataOauthTokens(): void {
    this.getAllOauthTokens().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:OauthTokens[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllOauthTokens(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createOauthToken(oauthToken:OauthTokens) {
    return this.http.post(this.basePath, oauthToken);
  }
  getOauthToken(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOauthToken(id:any, oauthToken:OauthTokens) {
    return this.http.put(this.basePath + '/' + id, oauthToken);
  }
  deleteOauthToken(id:any) {
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
  
  findOneByTokenTs(tokenTs:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTokenTs/' + tokenTs + '?' + attributes);
  }
  
  findOneBySecret(secret:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySecret/' + secret + '?' + attributes);
  }
  
  findOneByTstate(tstate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTstate/' + tstate + '?' + attributes);
  }
  
  findOneByVerify(verify:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVerify/' + verify + '?' + attributes);
  }
  
  findOneByCallbackUrl(callbackUrl:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCallbackUrl/' + callbackUrl + '?' + attributes);
  }
  
  findOneByConsumer(consumer:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByConsumer/' + consumer + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  
  updateOauthTokenById(id:any, oauthToken:OauthTokens) {
      return this.http.post(this.basePath + '/updateOauthTokenById?id=' + id, oauthToken);
  }
  
  updateOauthTokenByDeleted(deleted:any, oauthToken:OauthTokens) {
      return this.http.post(this.basePath + '/updateOauthTokenByDeleted?deleted=' + deleted, oauthToken);
  }
  
  updateOauthTokenByTokenTs(tokenTs:any, oauthToken:OauthTokens) {
      return this.http.post(this.basePath + '/updateOauthTokenByTokenTs?tokenTs=' + tokenTs, oauthToken);
  }
  
  updateOauthTokenBySecret(secret:any, oauthToken:OauthTokens) {
      return this.http.post(this.basePath + '/updateOauthTokenBySecret?secret=' + secret, oauthToken);
  }
  
  updateOauthTokenByTstate(tstate:any, oauthToken:OauthTokens) {
      return this.http.post(this.basePath + '/updateOauthTokenByTstate?tstate=' + tstate, oauthToken);
  }
  
  updateOauthTokenByVerify(verify:any, oauthToken:OauthTokens) {
      return this.http.post(this.basePath + '/updateOauthTokenByVerify?verify=' + verify, oauthToken);
  }
  
  updateOauthTokenByCallbackUrl(callbackUrl:any, oauthToken:OauthTokens) {
      return this.http.post(this.basePath + '/updateOauthTokenByCallbackUrl?callbackUrl=' + callbackUrl, oauthToken);
  }
  
  updateOauthTokenByConsumer(consumer:any, oauthToken:OauthTokens) {
      return this.http.post(this.basePath + '/updateOauthTokenByConsumer?consumer=' + consumer, oauthToken);
  }
  
  updateOauthTokenByAssignedUserId(assignedUserId:any, oauthToken:OauthTokens) {
      return this.http.post(this.basePath + '/updateOauthTokenByAssignedUserId?assignedUserId=' + assignedUserId, oauthToken);
  }
  
  
  
  //</es-section>
}
