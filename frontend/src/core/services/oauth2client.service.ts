/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:17 GMT-0400 (Bolivia Time)
 * Time: 2:43:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:17 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:17
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Oauth2clients} from "../models/oauth2clients";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class Oauth2clientService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/oauth2clients`;
  dataChange: BehaviorSubject<Oauth2clients[]> = new BehaviorSubject<Oauth2clients[]>([]);
  oauth2clientData: Oauth2clients = new Oauth2clients();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Oauth2clients[] {
    return this.dataChange.value;
  }

  getDataOauth2clients(): void {
    this.getAllOauth2clients().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Oauth2clients[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllOauth2clients(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createOauth2client(oauth2client:Oauth2clients) {
    return this.http.post(this.basePath, oauth2client);
  }
  getOauth2client(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOauth2client(id:any, oauth2client:Oauth2clients) {
    return this.http.put(this.basePath + '/' + id, oauth2client);
  }
  deleteOauth2client(id:any) {
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
  
  findOneByIsConfidential(isConfidential:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIsConfidential/' + isConfidential + '?' + attributes);
  }
  
  findOneByDurationValue(durationValue:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDurationValue/' + durationValue + '?' + attributes);
  }
  
  findOneByDurationAmount(durationAmount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDurationAmount/' + durationAmount + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneBySecret(secret:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySecret/' + secret + '?' + attributes);
  }
  
  findOneByRedirectUrl(redirectUrl:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRedirectUrl/' + redirectUrl + '?' + attributes);
  }
  
  findOneByAllowedGrantType(allowedGrantType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAllowedGrantType/' + allowedGrantType + '?' + attributes);
  }
  
  findOneByDurationUnit(durationUnit:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDurationUnit/' + durationUnit + '?' + attributes);
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
  
  
  updateOauth2clientById(id:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientById?id=' + id, oauth2client);
  }
  
  updateOauth2clientByDeleted(deleted:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByDeleted?deleted=' + deleted, oauth2client);
  }
  
  updateOauth2clientByIsConfidential(isConfidential:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByIsConfidential?isConfidential=' + isConfidential, oauth2client);
  }
  
  updateOauth2clientByDurationValue(durationValue:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByDurationValue?durationValue=' + durationValue, oauth2client);
  }
  
  updateOauth2clientByDurationAmount(durationAmount:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByDurationAmount?durationAmount=' + durationAmount, oauth2client);
  }
  
  updateOauth2clientByName(name:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByName?name=' + name, oauth2client);
  }
  
  updateOauth2clientBySecret(secret:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientBySecret?secret=' + secret, oauth2client);
  }
  
  updateOauth2clientByRedirectUrl(redirectUrl:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByRedirectUrl?redirectUrl=' + redirectUrl, oauth2client);
  }
  
  updateOauth2clientByAllowedGrantType(allowedGrantType:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByAllowedGrantType?allowedGrantType=' + allowedGrantType, oauth2client);
  }
  
  updateOauth2clientByDurationUnit(durationUnit:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByDurationUnit?durationUnit=' + durationUnit, oauth2client);
  }
  
  updateOauth2clientByDescription(description:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByDescription?description=' + description, oauth2client);
  }
  
  updateOauth2clientByDateEntered(dateEntered:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByDateEntered?dateEntered=' + dateEntered, oauth2client);
  }
  
  updateOauth2clientByDateModified(dateModified:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByDateModified?dateModified=' + dateModified, oauth2client);
  }
  
  updateOauth2clientByModifiedUserId(modifiedUserId:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByModifiedUserId?modifiedUserId=' + modifiedUserId, oauth2client);
  }
  
  updateOauth2clientByCreatedBy(createdBy:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByCreatedBy?createdBy=' + createdBy, oauth2client);
  }
  
  updateOauth2clientByAssignedUserId(assignedUserId:any, oauth2client:Oauth2clients) {
      return this.http.post(this.basePath + '/updateOauth2clientByAssignedUserId?assignedUserId=' + assignedUserId, oauth2client);
  }
  
  
  
  //</es-section>
}
