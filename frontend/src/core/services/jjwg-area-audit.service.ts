/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:57 GMT-0400 (Bolivia Time)
 * Time: 2:42:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:57 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:57
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {JjwgAreasAudit} from "../models/jjwgAreasAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class JjwgAreaAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/jjwg-areas-audit`;
  dataChange: BehaviorSubject<JjwgAreasAudit[]> = new BehaviorSubject<JjwgAreasAudit[]>([]);
  jjwgAreaAuditData: JjwgAreasAudit = new JjwgAreasAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): JjwgAreasAudit[] {
    return this.dataChange.value;
  }

  getDataJjwgAreasAudit(): void {
    this.getAllJjwgAreasAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:JjwgAreasAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllJjwgAreasAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createJjwgAreaAudit(jjwgAreaAudit:JjwgAreasAudit) {
    return this.http.post(this.basePath, jjwgAreaAudit);
  }
  getJjwgAreaAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateJjwgAreaAudit(id:any, jjwgAreaAudit:JjwgAreasAudit) {
    return this.http.put(this.basePath + '/' + id, jjwgAreaAudit);
  }
  deleteJjwgAreaAudit(id:any) {
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
  
  
  updateJjwgAreaAuditById(id:any, jjwgAreaAudit:JjwgAreasAudit) {
      return this.http.post(this.basePath + '/updateJjwgAreaAuditById?id=' + id, jjwgAreaAudit);
  }
  
  updateJjwgAreaAuditByCreatedBy(createdBy:any, jjwgAreaAudit:JjwgAreasAudit) {
      return this.http.post(this.basePath + '/updateJjwgAreaAuditByCreatedBy?createdBy=' + createdBy, jjwgAreaAudit);
  }
  
  updateJjwgAreaAuditByFieldName(fieldName:any, jjwgAreaAudit:JjwgAreasAudit) {
      return this.http.post(this.basePath + '/updateJjwgAreaAuditByFieldName?fieldName=' + fieldName, jjwgAreaAudit);
  }
  
  updateJjwgAreaAuditByDataType(dataType:any, jjwgAreaAudit:JjwgAreasAudit) {
      return this.http.post(this.basePath + '/updateJjwgAreaAuditByDataType?dataType=' + dataType, jjwgAreaAudit);
  }
  
  updateJjwgAreaAuditByBeforeValueString(beforeValueString:any, jjwgAreaAudit:JjwgAreasAudit) {
      return this.http.post(this.basePath + '/updateJjwgAreaAuditByBeforeValueString?beforeValueString=' + beforeValueString, jjwgAreaAudit);
  }
  
  updateJjwgAreaAuditByAfterValueString(afterValueString:any, jjwgAreaAudit:JjwgAreasAudit) {
      return this.http.post(this.basePath + '/updateJjwgAreaAuditByAfterValueString?afterValueString=' + afterValueString, jjwgAreaAudit);
  }
  
  updateJjwgAreaAuditByBeforeValueText(beforeValueText:any, jjwgAreaAudit:JjwgAreasAudit) {
      return this.http.post(this.basePath + '/updateJjwgAreaAuditByBeforeValueText?beforeValueText=' + beforeValueText, jjwgAreaAudit);
  }
  
  updateJjwgAreaAuditByAfterValueText(afterValueText:any, jjwgAreaAudit:JjwgAreasAudit) {
      return this.http.post(this.basePath + '/updateJjwgAreaAuditByAfterValueText?afterValueText=' + afterValueText, jjwgAreaAudit);
  }
  
  updateJjwgAreaAuditByDateCreated(dateCreated:any, jjwgAreaAudit:JjwgAreasAudit) {
      return this.http.post(this.basePath + '/updateJjwgAreaAuditByDateCreated?dateCreated=' + dateCreated, jjwgAreaAudit);
  }
  
  updateJjwgAreaAuditByParentId(parentId:any, jjwgAreaAudit:JjwgAreasAudit) {
      return this.http.post(this.basePath + '/updateJjwgAreaAuditByParentId?parentId=' + parentId, jjwgAreaAudit);
  }
  
  
  
  //</es-section>
}
