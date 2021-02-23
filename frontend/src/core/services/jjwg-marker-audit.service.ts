/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:02 GMT-0400 (Bolivia Time)
 * Time: 2:43:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:02 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:2
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {JjwgMarkersAudit} from "../models/jjwgMarkersAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class JjwgMarkerAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/jjwg-markers-audit`;
  dataChange: BehaviorSubject<JjwgMarkersAudit[]> = new BehaviorSubject<JjwgMarkersAudit[]>([]);
  jjwgMarkerAuditData: JjwgMarkersAudit = new JjwgMarkersAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): JjwgMarkersAudit[] {
    return this.dataChange.value;
  }

  getDataJjwgMarkersAudit(): void {
    this.getAllJjwgMarkersAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:JjwgMarkersAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllJjwgMarkersAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createJjwgMarkerAudit(jjwgMarkerAudit:JjwgMarkersAudit) {
    return this.http.post(this.basePath, jjwgMarkerAudit);
  }
  getJjwgMarkerAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateJjwgMarkerAudit(id:any, jjwgMarkerAudit:JjwgMarkersAudit) {
    return this.http.put(this.basePath + '/' + id, jjwgMarkerAudit);
  }
  deleteJjwgMarkerAudit(id:any) {
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
  
  
  updateJjwgMarkerAuditById(id:any, jjwgMarkerAudit:JjwgMarkersAudit) {
      return this.http.post(this.basePath + '/updateJjwgMarkerAuditById?id=' + id, jjwgMarkerAudit);
  }
  
  updateJjwgMarkerAuditByCreatedBy(createdBy:any, jjwgMarkerAudit:JjwgMarkersAudit) {
      return this.http.post(this.basePath + '/updateJjwgMarkerAuditByCreatedBy?createdBy=' + createdBy, jjwgMarkerAudit);
  }
  
  updateJjwgMarkerAuditByFieldName(fieldName:any, jjwgMarkerAudit:JjwgMarkersAudit) {
      return this.http.post(this.basePath + '/updateJjwgMarkerAuditByFieldName?fieldName=' + fieldName, jjwgMarkerAudit);
  }
  
  updateJjwgMarkerAuditByDataType(dataType:any, jjwgMarkerAudit:JjwgMarkersAudit) {
      return this.http.post(this.basePath + '/updateJjwgMarkerAuditByDataType?dataType=' + dataType, jjwgMarkerAudit);
  }
  
  updateJjwgMarkerAuditByBeforeValueString(beforeValueString:any, jjwgMarkerAudit:JjwgMarkersAudit) {
      return this.http.post(this.basePath + '/updateJjwgMarkerAuditByBeforeValueString?beforeValueString=' + beforeValueString, jjwgMarkerAudit);
  }
  
  updateJjwgMarkerAuditByAfterValueString(afterValueString:any, jjwgMarkerAudit:JjwgMarkersAudit) {
      return this.http.post(this.basePath + '/updateJjwgMarkerAuditByAfterValueString?afterValueString=' + afterValueString, jjwgMarkerAudit);
  }
  
  updateJjwgMarkerAuditByBeforeValueText(beforeValueText:any, jjwgMarkerAudit:JjwgMarkersAudit) {
      return this.http.post(this.basePath + '/updateJjwgMarkerAuditByBeforeValueText?beforeValueText=' + beforeValueText, jjwgMarkerAudit);
  }
  
  updateJjwgMarkerAuditByAfterValueText(afterValueText:any, jjwgMarkerAudit:JjwgMarkersAudit) {
      return this.http.post(this.basePath + '/updateJjwgMarkerAuditByAfterValueText?afterValueText=' + afterValueText, jjwgMarkerAudit);
  }
  
  updateJjwgMarkerAuditByDateCreated(dateCreated:any, jjwgMarkerAudit:JjwgMarkersAudit) {
      return this.http.post(this.basePath + '/updateJjwgMarkerAuditByDateCreated?dateCreated=' + dateCreated, jjwgMarkerAudit);
  }
  
  updateJjwgMarkerAuditByParentId(parentId:any, jjwgMarkerAudit:JjwgMarkersAudit) {
      return this.http.post(this.basePath + '/updateJjwgMarkerAuditByParentId?parentId=' + parentId, jjwgMarkerAudit);
  }
  
  
  
  //</es-section>
}
