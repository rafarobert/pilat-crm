/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:55 GMT-0400 (Bolivia Time)
 * Time: 2:42:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:55 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:55
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
export class JjwgAddreCacheService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/jjwg-address-cache`;
  dataChange: BehaviorSubject<JjwgAddressCache[]> = new BehaviorSubject<JjwgAddressCache[]>([]);
  jjwgAddreCacheData: JjwgAddressCache = new JjwgAddressCache();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): JjwgAddressCache[] {
    return this.dataChange.value;
  }

  getDataJjwgAddressCache(): void {
    this.getAllJjwgAddressCache().subscribe(async (res) => {
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
  createJjwgAddreCache(jjwgAddreCache:JjwgAddressCache) {
    return this.http.post(this.basePath, jjwgAddreCache);
  }
  getJjwgAddreCache(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateJjwgAddreCache(id:any, jjwgAddreCache:JjwgAddressCache) {
    return this.http.put(this.basePath + '/' + id, jjwgAddreCache);
  }
  deleteJjwgAddreCache(id:any) {
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
  
  findOneByModifiedUserId(modifiedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedUserId/' + modifiedUserId + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
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
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  
  updateJjwgAddreCacheById(id:any, jjwgAddreCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheById?id=' + id, jjwgAddreCache);
  }
  
  updateJjwgAddreCacheByDeleted(deleted:any, jjwgAddreCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheByDeleted?deleted=' + deleted, jjwgAddreCache);
  }
  
  updateJjwgAddreCacheByLat(lat:any, jjwgAddreCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheByLat?lat=' + lat, jjwgAddreCache);
  }
  
  updateJjwgAddreCacheByLng(lng:any, jjwgAddreCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheByLng?lng=' + lng, jjwgAddreCache);
  }
  
  updateJjwgAddreCacheByName(name:any, jjwgAddreCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheByName?name=' + name, jjwgAddreCache);
  }
  
  updateJjwgAddreCacheByDescription(description:any, jjwgAddreCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheByDescription?description=' + description, jjwgAddreCache);
  }
  
  updateJjwgAddreCacheByModifiedUserId(modifiedUserId:any, jjwgAddreCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheByModifiedUserId?modifiedUserId=' + modifiedUserId, jjwgAddreCache);
  }
  
  updateJjwgAddreCacheByAssignedUserId(assignedUserId:any, jjwgAddreCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheByAssignedUserId?assignedUserId=' + assignedUserId, jjwgAddreCache);
  }
  
  updateJjwgAddreCacheByDateEntered(dateEntered:any, jjwgAddreCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheByDateEntered?dateEntered=' + dateEntered, jjwgAddreCache);
  }
  
  updateJjwgAddreCacheByDateModified(dateModified:any, jjwgAddreCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheByDateModified?dateModified=' + dateModified, jjwgAddreCache);
  }
  
  updateJjwgAddreCacheByCreatedBy(createdBy:any, jjwgAddreCache:JjwgAddressCache) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheByCreatedBy?createdBy=' + createdBy, jjwgAddreCache);
  }
  
  
  findUsersModifiedUserWithSystemGeneratedPassword(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findUsersModifiedUserWithSystemGeneratedPassword' + '?' + attributes);
  }
  
  findUsersAssignedUserWithSystemGeneratedPassword(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findUsersAssignedUserWithSystemGeneratedPassword' + '?' + attributes);
  }
  
  
  filterJjwgAddressCacheByModifiedUser(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterJjwgAddressCacheByModifiedUser/' + ids + '?' + attributes);
  }
  
  filterJjwgAddressCacheByAssignedUser(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterJjwgAddressCacheByAssignedUser/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
