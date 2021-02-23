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
import {OauthConsumer} from "../models/oauthConsumer";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class OauthConsumerService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/oauth-consumer`;
  dataChange: BehaviorSubject<OauthConsumer[]> = new BehaviorSubject<OauthConsumer[]>([]);
  oauthConsumerData: OauthConsumer = new OauthConsumer();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): OauthConsumer[] {
    return this.dataChange.value;
  }

  getDataOauthConsumer(): void {
    this.getAllOauthConsumer().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:OauthConsumer[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllOauthConsumer(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createOauthConsumer(oauthConsumer:OauthConsumer) {
    return this.http.post(this.basePath, oauthConsumer);
  }
  getOauthConsumer(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOauthConsumer(id:any, oauthConsumer:OauthConsumer) {
    return this.http.put(this.basePath + '/' + id, oauthConsumer);
  }
  deleteOauthConsumer(id:any) {
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
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByCKey(cKey:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCKey/' + cKey + '?' + attributes);
  }
  
  findOneByCSecret(cSecret:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCSecret/' + cSecret + '?' + attributes);
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
  
  
  updateOauthConsumerById(id:any, oauthConsumer:OauthConsumer) {
      return this.http.post(this.basePath + '/updateOauthConsumerById?id=' + id, oauthConsumer);
  }
  
  updateOauthConsumerByDeleted(deleted:any, oauthConsumer:OauthConsumer) {
      return this.http.post(this.basePath + '/updateOauthConsumerByDeleted?deleted=' + deleted, oauthConsumer);
  }
  
  updateOauthConsumerByName(name:any, oauthConsumer:OauthConsumer) {
      return this.http.post(this.basePath + '/updateOauthConsumerByName?name=' + name, oauthConsumer);
  }
  
  updateOauthConsumerByCKey(cKey:any, oauthConsumer:OauthConsumer) {
      return this.http.post(this.basePath + '/updateOauthConsumerByCKey?cKey=' + cKey, oauthConsumer);
  }
  
  updateOauthConsumerByCSecret(cSecret:any, oauthConsumer:OauthConsumer) {
      return this.http.post(this.basePath + '/updateOauthConsumerByCSecret?cSecret=' + cSecret, oauthConsumer);
  }
  
  updateOauthConsumerByDescription(description:any, oauthConsumer:OauthConsumer) {
      return this.http.post(this.basePath + '/updateOauthConsumerByDescription?description=' + description, oauthConsumer);
  }
  
  updateOauthConsumerByDateEntered(dateEntered:any, oauthConsumer:OauthConsumer) {
      return this.http.post(this.basePath + '/updateOauthConsumerByDateEntered?dateEntered=' + dateEntered, oauthConsumer);
  }
  
  updateOauthConsumerByDateModified(dateModified:any, oauthConsumer:OauthConsumer) {
      return this.http.post(this.basePath + '/updateOauthConsumerByDateModified?dateModified=' + dateModified, oauthConsumer);
  }
  
  updateOauthConsumerByModifiedUserId(modifiedUserId:any, oauthConsumer:OauthConsumer) {
      return this.http.post(this.basePath + '/updateOauthConsumerByModifiedUserId?modifiedUserId=' + modifiedUserId, oauthConsumer);
  }
  
  updateOauthConsumerByCreatedBy(createdBy:any, oauthConsumer:OauthConsumer) {
      return this.http.post(this.basePath + '/updateOauthConsumerByCreatedBy?createdBy=' + createdBy, oauthConsumer);
  }
  
  updateOauthConsumerByAssignedUserId(assignedUserId:any, oauthConsumer:OauthConsumer) {
      return this.http.post(this.basePath + '/updateOauthConsumerByAssignedUserId?assignedUserId=' + assignedUserId, oauthConsumer);
  }
  
  
  
  //</es-section>
}
