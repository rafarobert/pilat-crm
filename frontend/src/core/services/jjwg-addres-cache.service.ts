/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:21:22 GMT-0400 (Bolivia Time)
 * Time: 4:21:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:21:22 GMT-0400 (Bolivia Time)
 * Last time updated: 4:21:22
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {JjwgAddressCache} from "../models/jjwgAddressCache";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class JjwgAddresCacheService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/jjwg-address-cache`;
  dataChange: BehaviorSubject<JjwgAddressCache[]> = new BehaviorSubject<JjwgAddressCache[]>([]);
  jjwgAddresCacheData: JjwgAddressCache = new JjwgAddressCache();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): JjwgAddressCache[] {
    return this.dataChange.value;
  }

  getDataJjwgAddressCache(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllJjwgAddressCache(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:JjwgAddressCache[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllJjwgAddressCache(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createJjwgAddresCache(jjwgAddresCache:JjwgAddressCache) {
    return this.http.post(this.basePath, jjwgAddresCache);
  }
  getJjwgAddresCache(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateJjwgAddresCache(id:any, jjwgAddresCache:JjwgAddressCache) {
    return this.http.put(this.basePath + '/' + id, jjwgAddresCache);
  }
  deleteJjwgAddresCache(id:any) {
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
  
  findOneByLat(lat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLat/' + lat + '?' + attributes);
  }
  
  findOneByLng(lng:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLng/' + lng + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
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
  
  
  updateJjwgAddresCacheById(id:any, jjwgAddresCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheById?id=' + id, jjwgAddresCache);
  }
  
  updateJjwgAddresCacheByDeleted(deleted:any, jjwgAddresCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheByDeleted?deleted=' + deleted, jjwgAddresCache);
  }
  
  updateJjwgAddresCacheByLat(lat:any, jjwgAddresCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheByLat?lat=' + lat, jjwgAddresCache);
  }
  
  updateJjwgAddresCacheByLng(lng:any, jjwgAddresCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheByLng?lng=' + lng, jjwgAddresCache);
  }
  
  updateJjwgAddresCacheByName(name:any, jjwgAddresCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheByName?name=' + name, jjwgAddresCache);
  }
  
  updateJjwgAddresCacheByDescription(description:any, jjwgAddresCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheByDescription?description=' + description, jjwgAddresCache);
  }
  
  updateJjwgAddresCacheByDateEntered(dateEntered:any, jjwgAddresCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheByDateEntered?dateEntered=' + dateEntered, jjwgAddresCache);
  }
  
  updateJjwgAddresCacheByDateModified(dateModified:any, jjwgAddresCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheByDateModified?dateModified=' + dateModified, jjwgAddresCache);
  }
  
  updateJjwgAddresCacheByModifiedUserId(modifiedUserId:any, jjwgAddresCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheByModifiedUserId?modifiedUserId=' + modifiedUserId, jjwgAddresCache);
  }
  
  updateJjwgAddresCacheByCreatedBy(createdBy:any, jjwgAddresCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheByCreatedBy?createdBy=' + createdBy, jjwgAddresCache);
  }
  
  updateJjwgAddresCacheByAssignedUserId(assignedUserId:any, jjwgAddresCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheByAssignedUserId?assignedUserId=' + assignedUserId, jjwgAddresCache);
  }
  
  
  
  //</es-section>
}
