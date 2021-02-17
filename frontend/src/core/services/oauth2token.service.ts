/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:19 GMT-0400 (Bolivia Time)
 * Time: 2:43:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:19 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:19
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Oauth2tokens} from "../models/oauth2tokens";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class Oauth2tokenService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/oauth2tokens`;
  dataChange: BehaviorSubject<Oauth2tokens[]> = new BehaviorSubject<Oauth2tokens[]>([]);
  oauth2tokenData: Oauth2tokens = new Oauth2tokens();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Oauth2tokens[] {
    return this.dataChange.value;
  }

  getDataOauth2tokens(): void {
    this.getAllOauth2tokens().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Oauth2tokens[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllOauth2tokens(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createOauth2token(oauth2token:Oauth2tokens) {
    return this.http.post(this.basePath, oauth2token);
  }
  getOauth2token(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOauth2token(id:any, oauth2token:Oauth2tokens) {
    return this.http.put(this.basePath + '/' + id, oauth2token);
  }
  deleteOauth2token(id:any) {
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
  
  findOneByTokenIsRevoked(tokenIsRevoked:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTokenIsRevoked/' + tokenIsRevoked + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByTokenType(tokenType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTokenType/' + tokenType + '?' + attributes);
  }
  
  findOneByAccessToken(accessToken:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccessToken/' + accessToken + '?' + attributes);
  }
  
  findOneByRefreshToken(refreshToken:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRefreshToken/' + refreshToken + '?' + attributes);
  }
  
  findOneByGrantType(grantType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGrantType/' + grantType + '?' + attributes);
  }
  
  findOneByState(state:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByState/' + state + '?' + attributes);
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
  
  findOneByAccessTokenExpires(accessTokenExpires:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccessTokenExpires/' + accessTokenExpires + '?' + attributes);
  }
  
  findOneByRefreshTokenExpires(refreshTokenExpires:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRefreshTokenExpires/' + refreshTokenExpires + '?' + attributes);
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
  
  findOneByClient(client:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByClient/' + client + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  
  updateOauth2tokenById(id:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenById?id=' + id, oauth2token);
  }
  
  updateOauth2tokenByDeleted(deleted:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByDeleted?deleted=' + deleted, oauth2token);
  }
  
  updateOauth2tokenByTokenIsRevoked(tokenIsRevoked:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByTokenIsRevoked?tokenIsRevoked=' + tokenIsRevoked, oauth2token);
  }
  
  updateOauth2tokenByName(name:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByName?name=' + name, oauth2token);
  }
  
  updateOauth2tokenByTokenType(tokenType:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByTokenType?tokenType=' + tokenType, oauth2token);
  }
  
  updateOauth2tokenByAccessToken(accessToken:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByAccessToken?accessToken=' + accessToken, oauth2token);
  }
  
  updateOauth2tokenByRefreshToken(refreshToken:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByRefreshToken?refreshToken=' + refreshToken, oauth2token);
  }
  
  updateOauth2tokenByGrantType(grantType:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByGrantType?grantType=' + grantType, oauth2token);
  }
  
  updateOauth2tokenByState(state:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByState?state=' + state, oauth2token);
  }
  
  updateOauth2tokenByDescription(description:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByDescription?description=' + description, oauth2token);
  }
  
  updateOauth2tokenByDateEntered(dateEntered:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByDateEntered?dateEntered=' + dateEntered, oauth2token);
  }
  
  updateOauth2tokenByDateModified(dateModified:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByDateModified?dateModified=' + dateModified, oauth2token);
  }
  
  updateOauth2tokenByAccessTokenExpires(accessTokenExpires:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByAccessTokenExpires?accessTokenExpires=' + accessTokenExpires, oauth2token);
  }
  
  updateOauth2tokenByRefreshTokenExpires(refreshTokenExpires:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByRefreshTokenExpires?refreshTokenExpires=' + refreshTokenExpires, oauth2token);
  }
  
  updateOauth2tokenByModifiedUserId(modifiedUserId:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByModifiedUserId?modifiedUserId=' + modifiedUserId, oauth2token);
  }
  
  updateOauth2tokenByCreatedBy(createdBy:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByCreatedBy?createdBy=' + createdBy, oauth2token);
  }
  
  updateOauth2tokenByClient(client:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByClient?client=' + client, oauth2token);
  }
  
  updateOauth2tokenByAssignedUserId(assignedUserId:any, oauth2token:Oauth2tokens) {
      return this.http.post(this.basePath + '/updateOauth2tokenByAssignedUserId?assignedUserId=' + assignedUserId, oauth2token);
  }
  
  
  
  //</es-section>
}
