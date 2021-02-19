/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:05 GMT-0400 (Bolivia Time)
 * Time: 2:44:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SecuritygroupsDefault} from "../models/securitygroupsDefault";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SecuritygroupDefaultService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/securitygroups-default`;
  dataChange: BehaviorSubject<SecuritygroupsDefault[]> = new BehaviorSubject<SecuritygroupsDefault[]>([]);
  securitygroupDefaultData: SecuritygroupsDefault = new SecuritygroupsDefault();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): SecuritygroupsDefault[] {
    return this.dataChange.value;
  }

  getDataSecuritygroupsDefault(): void {
    this.getAllSecuritygroupsDefault().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SecuritygroupsDefault[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSecuritygroupsDefault(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSecuritygroupDefault(securitygroupDefault:SecuritygroupsDefault) {
    return this.http.post(this.basePath, securitygroupDefault);
  }
  getSecuritygroupDefault(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSecuritygroupDefault(id:any, securitygroupDefault:SecuritygroupsDefault) {
    return this.http.put(this.basePath + '/' + id, securitygroupDefault);
  }
  deleteSecuritygroupDefault(id:any) {
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
  
  findOneByModule(module:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModule/' + module + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  findOneBySecuritygroupId(securitygroupId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySecuritygroupId/' + securitygroupId + '?' + attributes);
  }
  
  
  updateSecuritygroupDefaultById(id:any, securitygroupDefault:SecuritygroupsDefault) {
      return this.http.post(this.basePath + '/updateSecuritygroupDefaultById?id=' + id, securitygroupDefault);
  }
  
  updateSecuritygroupDefaultByDeleted(deleted:any, securitygroupDefault:SecuritygroupsDefault) {
      return this.http.post(this.basePath + '/updateSecuritygroupDefaultByDeleted?deleted=' + deleted, securitygroupDefault);
  }
  
  updateSecuritygroupDefaultByModule(module:any, securitygroupDefault:SecuritygroupsDefault) {
      return this.http.post(this.basePath + '/updateSecuritygroupDefaultByModule?module=' + module, securitygroupDefault);
  }
  
  updateSecuritygroupDefaultByDateModified(dateModified:any, securitygroupDefault:SecuritygroupsDefault) {
      return this.http.post(this.basePath + '/updateSecuritygroupDefaultByDateModified?dateModified=' + dateModified, securitygroupDefault);
  }
  
  updateSecuritygroupDefaultBySecuritygroupId(securitygroupId:any, securitygroupDefault:SecuritygroupsDefault) {
      return this.http.post(this.basePath + '/updateSecuritygroupDefaultBySecuritygroupId?securitygroupId=' + securitygroupId, securitygroupDefault);
  }
  
  
  
  //</es-section>
}
