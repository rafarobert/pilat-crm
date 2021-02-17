/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:59 GMT-0400 (Bolivia Time)
 * Time: 2:42:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:59 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {JjwgMapsAudit} from "../models/jjwgMapsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class JjwgMapAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/jjwg-maps-audit`;
  dataChange: BehaviorSubject<JjwgMapsAudit[]> = new BehaviorSubject<JjwgMapsAudit[]>([]);
  jjwgMapAuditData: JjwgMapsAudit = new JjwgMapsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): JjwgMapsAudit[] {
    return this.dataChange.value;
  }

  getDataJjwgMapsAudit(): void {
    this.getAllJjwgMapsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:JjwgMapsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllJjwgMapsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createJjwgMapAudit(jjwgMapAudit:JjwgMapsAudit) {
    return this.http.post(this.basePath, jjwgMapAudit);
  }
  getJjwgMapAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateJjwgMapAudit(id:any, jjwgMapAudit:JjwgMapsAudit) {
    return this.http.put(this.basePath + '/' + id, jjwgMapAudit);
  }
  deleteJjwgMapAudit(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  findOneByFieldName(fieldName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFieldName/' + fieldName + '?' + attributes);
  }
  
  findOneByDataType(dataType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDataType/' + dataType + '?' + attributes);
  }
  
  findOneByBeforeValueString(beforeValueString:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeforeValueString/' + beforeValueString + '?' + attributes);
  }
  
  findOneByAfterValueString(afterValueString:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAfterValueString/' + afterValueString + '?' + attributes);
  }
  
  findOneByBeforeValueText(beforeValueText:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeforeValueText/' + beforeValueText + '?' + attributes);
  }
  
  findOneByAfterValueText(afterValueText:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAfterValueText/' + afterValueText + '?' + attributes);
  }
  
  findOneByDateCreated(dateCreated:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateCreated/' + dateCreated + '?' + attributes);
  }
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  
  updateJjwgMapAuditById(id:any, jjwgMapAudit:JjwgMapsAudit) {
      return this.http.post(this.basePath + '/updateJjwgMapAuditById?id=' + id, jjwgMapAudit);
  }
  
  updateJjwgMapAuditByCreatedBy(createdBy:any, jjwgMapAudit:JjwgMapsAudit) {
      return this.http.post(this.basePath + '/updateJjwgMapAuditByCreatedBy?createdBy=' + createdBy, jjwgMapAudit);
  }
  
  updateJjwgMapAuditByFieldName(fieldName:any, jjwgMapAudit:JjwgMapsAudit) {
      return this.http.post(this.basePath + '/updateJjwgMapAuditByFieldName?fieldName=' + fieldName, jjwgMapAudit);
  }
  
  updateJjwgMapAuditByDataType(dataType:any, jjwgMapAudit:JjwgMapsAudit) {
      return this.http.post(this.basePath + '/updateJjwgMapAuditByDataType?dataType=' + dataType, jjwgMapAudit);
  }
  
  updateJjwgMapAuditByBeforeValueString(beforeValueString:any, jjwgMapAudit:JjwgMapsAudit) {
      return this.http.post(this.basePath + '/updateJjwgMapAuditByBeforeValueString?beforeValueString=' + beforeValueString, jjwgMapAudit);
  }
  
  updateJjwgMapAuditByAfterValueString(afterValueString:any, jjwgMapAudit:JjwgMapsAudit) {
      return this.http.post(this.basePath + '/updateJjwgMapAuditByAfterValueString?afterValueString=' + afterValueString, jjwgMapAudit);
  }
  
  updateJjwgMapAuditByBeforeValueText(beforeValueText:any, jjwgMapAudit:JjwgMapsAudit) {
      return this.http.post(this.basePath + '/updateJjwgMapAuditByBeforeValueText?beforeValueText=' + beforeValueText, jjwgMapAudit);
  }
  
  updateJjwgMapAuditByAfterValueText(afterValueText:any, jjwgMapAudit:JjwgMapsAudit) {
      return this.http.post(this.basePath + '/updateJjwgMapAuditByAfterValueText?afterValueText=' + afterValueText, jjwgMapAudit);
  }
  
  updateJjwgMapAuditByDateCreated(dateCreated:any, jjwgMapAudit:JjwgMapsAudit) {
      return this.http.post(this.basePath + '/updateJjwgMapAuditByDateCreated?dateCreated=' + dateCreated, jjwgMapAudit);
  }
  
  updateJjwgMapAuditByParentId(parentId:any, jjwgMapAudit:JjwgMapsAudit) {
      return this.http.post(this.basePath + '/updateJjwgMapAuditByParentId?parentId=' + parentId, jjwgMapAudit);
  }
  
  
  
  //</es-section>
}
