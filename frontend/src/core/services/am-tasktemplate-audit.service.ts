/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:06 GMT-0400 (Bolivia Time)
 * Time: 2:41:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:06 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:6
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AmTasktemplatesAudit} from "../models/amTasktemplatesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AmTasktemplateAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/am-tasktemplates-audit`;
  dataChange: BehaviorSubject<AmTasktemplatesAudit[]> = new BehaviorSubject<AmTasktemplatesAudit[]>([]);
  amTasktemplateAuditData: AmTasktemplatesAudit = new AmTasktemplatesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AmTasktemplatesAudit[] {
    return this.dataChange.value;
  }

  getDataAmTasktemplatesAudit(): void {
    this.getAllAmTasktemplatesAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AmTasktemplatesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAmTasktemplatesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAmTasktemplateAudit(amTasktemplateAudit:AmTasktemplatesAudit) {
    return this.http.post(this.basePath, amTasktemplateAudit);
  }
  getAmTasktemplateAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAmTasktemplateAudit(id:any, amTasktemplateAudit:AmTasktemplatesAudit) {
    return this.http.put(this.basePath + '/' + id, amTasktemplateAudit);
  }
  deleteAmTasktemplateAudit(id:any) {
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
  
  
  updateAmTasktemplateAuditById(id:any, amTasktemplateAudit:AmTasktemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAuditById?id=' + id, amTasktemplateAudit);
  }
  
  updateAmTasktemplateAuditByCreatedBy(createdBy:any, amTasktemplateAudit:AmTasktemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAuditByCreatedBy?createdBy=' + createdBy, amTasktemplateAudit);
  }
  
  updateAmTasktemplateAuditByFieldName(fieldName:any, amTasktemplateAudit:AmTasktemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAuditByFieldName?fieldName=' + fieldName, amTasktemplateAudit);
  }
  
  updateAmTasktemplateAuditByDataType(dataType:any, amTasktemplateAudit:AmTasktemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAuditByDataType?dataType=' + dataType, amTasktemplateAudit);
  }
  
  updateAmTasktemplateAuditByBeforeValueString(beforeValueString:any, amTasktemplateAudit:AmTasktemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAuditByBeforeValueString?beforeValueString=' + beforeValueString, amTasktemplateAudit);
  }
  
  updateAmTasktemplateAuditByAfterValueString(afterValueString:any, amTasktemplateAudit:AmTasktemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAuditByAfterValueString?afterValueString=' + afterValueString, amTasktemplateAudit);
  }
  
  updateAmTasktemplateAuditByBeforeValueText(beforeValueText:any, amTasktemplateAudit:AmTasktemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAuditByBeforeValueText?beforeValueText=' + beforeValueText, amTasktemplateAudit);
  }
  
  updateAmTasktemplateAuditByAfterValueText(afterValueText:any, amTasktemplateAudit:AmTasktemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAuditByAfterValueText?afterValueText=' + afterValueText, amTasktemplateAudit);
  }
  
  updateAmTasktemplateAuditByDateCreated(dateCreated:any, amTasktemplateAudit:AmTasktemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAuditByDateCreated?dateCreated=' + dateCreated, amTasktemplateAudit);
  }
  
  updateAmTasktemplateAuditByParentId(parentId:any, amTasktemplateAudit:AmTasktemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAuditByParentId?parentId=' + parentId, amTasktemplateAudit);
  }
  
  
  
  //</es-section>
}
