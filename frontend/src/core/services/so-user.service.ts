/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:19:30 GMT-0400 (Bolivia Time)
 * Time: 3:19:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:19:30 GMT-0400 (Bolivia Time)
 * Last time updated: 3:19:30
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SoUsers} from "../models/soUsers";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SoUserService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/so-users`;
  dataChange: BehaviorSubject<SoUsers[]> = new BehaviorSubject<SoUsers[]>([]);
  soUserData: SoUsers;

  constructor(private http: HttpClient) { }

  get data(): SoUsers[] {
    return this.dataChange.value;
  }

  getDataSoUsers(): void {
    this.getSoUsers().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SoUsers[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getSoUsers(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSoUser(soUser:SoUsers) {
    return this.http.post(this.basePath, soUser);
  }
  getSoUser(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSoUser(id:any, soUser:SoUsers) {
    return this.http.put(this.basePath + '/' + id, soUser);
  }
  deleteSoUser(id:any) {
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
  
  findOneByShortname(shortname:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShortname/' + shortname + '?' + attributes);
  }
  
  findOneByUserId(userId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserId/' + userId + '?' + attributes);
  }
  
  
  updateSoUserById(id:any, soUser:SoUsers) {
      return this.http.post(this.basePath + '/updateSoUserById?id=' + id, soUser);
  }
  
  updateSoUserByDeleted(deleted:any, soUser:SoUsers) {
      return this.http.post(this.basePath + '/updateSoUserByDeleted?deleted=' + deleted, soUser);
  }
  
  updateSoUserByShortname(shortname:any, soUser:SoUsers) {
      return this.http.post(this.basePath + '/updateSoUserByShortname?shortname=' + shortname, soUser);
  }
  
  updateSoUserByUserId(userId:any, soUser:SoUsers) {
      return this.http.post(this.basePath + '/updateSoUserByUserId?userId=' + userId, soUser);
  }
  
  
  
  //</es-section>
}
