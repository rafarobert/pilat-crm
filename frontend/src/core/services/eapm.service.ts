/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:28 GMT-0400 (Bolivia Time)
 * Time: 2:42:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:28 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:28
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Eapm} from "../models/eapm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EapmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/eapm`;
  dataChange: BehaviorSubject<Eapm[]> = new BehaviorSubject<Eapm[]>([]);
  eapmData: Eapm = new Eapm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Eapm[] {
    return this.dataChange.value;
  }

  getDataEapm(): void {
    this.getAllEapm().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Eapm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEapm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEapm(eapm:Eapm) {
    return this.http.post(this.basePath, eapm);
  }
  getEapm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEapm(id:any, eapm:Eapm) {
    return this.http.put(this.basePath + '/' + id, eapm);
  }
  deleteEapm(id:any) {
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
  
  findOneByValidated(validated:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByValidated/' + validated + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByPassword(password:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPassword/' + password + '?' + attributes);
  }
  
  findOneByUrl(url:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUrl/' + url + '?' + attributes);
  }
  
  findOneByApplication(application:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByApplication/' + application + '?' + attributes);
  }
  
  findOneByConsumerKey(consumerKey:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByConsumerKey/' + consumerKey + '?' + attributes);
  }
  
  findOneByConsumerSecret(consumerSecret:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByConsumerSecret/' + consumerSecret + '?' + attributes);
  }
  
  findOneByOauthToken(oauthToken:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOauthToken/' + oauthToken + '?' + attributes);
  }
  
  findOneByOauthSecret(oauthSecret:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOauthSecret/' + oauthSecret + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByApiData(apiData:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByApiData/' + apiData + '?' + attributes);
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
  
  
  updateEapmById(id:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmById?id=' + id, eapm);
  }
  
  updateEapmByDeleted(deleted:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByDeleted?deleted=' + deleted, eapm);
  }
  
  updateEapmByValidated(validated:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByValidated?validated=' + validated, eapm);
  }
  
  updateEapmByName(name:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByName?name=' + name, eapm);
  }
  
  updateEapmByPassword(password:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByPassword?password=' + password, eapm);
  }
  
  updateEapmByUrl(url:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByUrl?url=' + url, eapm);
  }
  
  updateEapmByApplication(application:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByApplication?application=' + application, eapm);
  }
  
  updateEapmByConsumerKey(consumerKey:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByConsumerKey?consumerKey=' + consumerKey, eapm);
  }
  
  updateEapmByConsumerSecret(consumerSecret:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByConsumerSecret?consumerSecret=' + consumerSecret, eapm);
  }
  
  updateEapmByOauthToken(oauthToken:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByOauthToken?oauthToken=' + oauthToken, eapm);
  }
  
  updateEapmByOauthSecret(oauthSecret:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByOauthSecret?oauthSecret=' + oauthSecret, eapm);
  }
  
  updateEapmByDescription(description:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByDescription?description=' + description, eapm);
  }
  
  updateEapmByApiData(apiData:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByApiData?apiData=' + apiData, eapm);
  }
  
  updateEapmByDateEntered(dateEntered:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByDateEntered?dateEntered=' + dateEntered, eapm);
  }
  
  updateEapmByDateModified(dateModified:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByDateModified?dateModified=' + dateModified, eapm);
  }
  
  updateEapmByModifiedUserId(modifiedUserId:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByModifiedUserId?modifiedUserId=' + modifiedUserId, eapm);
  }
  
  updateEapmByCreatedBy(createdBy:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByCreatedBy?createdBy=' + createdBy, eapm);
  }
  
  updateEapmByAssignedUserId(assignedUserId:any, eapm:Eapm) {
      return this.http.post(this.basePath + '/updateEapmByAssignedUserId?assignedUserId=' + assignedUserId, eapm);
  }
  
  
  
  //</es-section>
}
