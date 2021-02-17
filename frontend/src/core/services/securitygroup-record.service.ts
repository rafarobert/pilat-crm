/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:06 GMT-0400 (Bolivia Time)
 * Time: 2:44:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:06 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:6
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SecuritygroupsRecords} from "../models/securitygroupsRecords";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SecuritygroupRecordService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/securitygroups-records`;
  dataChange: BehaviorSubject<SecuritygroupsRecords[]> = new BehaviorSubject<SecuritygroupsRecords[]>([]);
  securitygroupRecordData: SecuritygroupsRecords = new SecuritygroupsRecords();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): SecuritygroupsRecords[] {
    return this.dataChange.value;
  }

  getDataSecuritygroupsRecords(): void {
    this.getAllSecuritygroupsRecords().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SecuritygroupsRecords[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSecuritygroupsRecords(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSecuritygroupRecord(securitygroupRecord:SecuritygroupsRecords) {
    return this.http.post(this.basePath, securitygroupRecord);
  }
  getSecuritygroupRecord(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSecuritygroupRecord(id:any, securitygroupRecord:SecuritygroupsRecords) {
    return this.http.put(this.basePath + '/' + id, securitygroupRecord);
  }
  deleteSecuritygroupRecord(id:any) {
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
  
  findOneByRecordId(recordId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRecordId/' + recordId + '?' + attributes);
  }
  
  findOneByModule(module:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModule/' + module + '?' + attributes);
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
  
  
  updateSecuritygroupRecordById(id:any, securitygroupRecord:SecuritygroupsRecords) {
      return this.http.post(this.basePath + '/updateSecuritygroupRecordById?id=' + id, securitygroupRecord);
  }
  
  updateSecuritygroupRecordByDeleted(deleted:any, securitygroupRecord:SecuritygroupsRecords) {
      return this.http.post(this.basePath + '/updateSecuritygroupRecordByDeleted?deleted=' + deleted, securitygroupRecord);
  }
  
  updateSecuritygroupRecordByDateModified(dateModified:any, securitygroupRecord:SecuritygroupsRecords) {
      return this.http.post(this.basePath + '/updateSecuritygroupRecordByDateModified?dateModified=' + dateModified, securitygroupRecord);
  }
  
  updateSecuritygroupRecordBySecuritygroupId(securitygroupId:any, securitygroupRecord:SecuritygroupsRecords) {
      return this.http.post(this.basePath + '/updateSecuritygroupRecordBySecuritygroupId?securitygroupId=' + securitygroupId, securitygroupRecord);
  }
  
  updateSecuritygroupRecordByRecordId(recordId:any, securitygroupRecord:SecuritygroupsRecords) {
      return this.http.post(this.basePath + '/updateSecuritygroupRecordByRecordId?recordId=' + recordId, securitygroupRecord);
  }
  
  updateSecuritygroupRecordByModule(module:any, securitygroupRecord:SecuritygroupsRecords) {
      return this.http.post(this.basePath + '/updateSecuritygroupRecordByModule?module=' + module, securitygroupRecord);
  }
  
  updateSecuritygroupRecordByModifiedUserId(modifiedUserId:any, securitygroupRecord:SecuritygroupsRecords) {
      return this.http.post(this.basePath + '/updateSecuritygroupRecordByModifiedUserId?modifiedUserId=' + modifiedUserId, securitygroupRecord);
  }
  
  updateSecuritygroupRecordByCreatedBy(createdBy:any, securitygroupRecord:SecuritygroupsRecords) {
      return this.http.post(this.basePath + '/updateSecuritygroupRecordByCreatedBy?createdBy=' + createdBy, securitygroupRecord);
  }
  
  
  
  //</es-section>
}
