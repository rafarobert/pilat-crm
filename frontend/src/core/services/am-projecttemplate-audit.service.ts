/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:00 GMT-0400 (Bolivia Time)
 * Time: 2:41:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:00 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AmProjecttemplatesAudit} from "../models/amProjecttemplatesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AmProjecttemplateAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/am-projecttemplates-audit`;
  dataChange: BehaviorSubject<AmProjecttemplatesAudit[]> = new BehaviorSubject<AmProjecttemplatesAudit[]>([]);
  amProjecttemplateAuditData: AmProjecttemplatesAudit = new AmProjecttemplatesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AmProjecttemplatesAudit[] {
    return this.dataChange.value;
  }

  getDataAmProjecttemplatesAudit(): void {
    this.getAllAmProjecttemplatesAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AmProjecttemplatesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAmProjecttemplatesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAmProjecttemplateAudit(amProjecttemplateAudit:AmProjecttemplatesAudit) {
    return this.http.post(this.basePath, amProjecttemplateAudit);
  }
  getAmProjecttemplateAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAmProjecttemplateAudit(id:any, amProjecttemplateAudit:AmProjecttemplatesAudit) {
    return this.http.put(this.basePath + '/' + id, amProjecttemplateAudit);
  }
  deleteAmProjecttemplateAudit(id:any) {
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
  
  
  updateAmProjecttemplateAuditById(id:any, amProjecttemplateAudit:AmProjecttemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateAuditById?id=' + id, amProjecttemplateAudit);
  }
  
  updateAmProjecttemplateAuditByCreatedBy(createdBy:any, amProjecttemplateAudit:AmProjecttemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateAuditByCreatedBy?createdBy=' + createdBy, amProjecttemplateAudit);
  }
  
  updateAmProjecttemplateAuditByFieldName(fieldName:any, amProjecttemplateAudit:AmProjecttemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateAuditByFieldName?fieldName=' + fieldName, amProjecttemplateAudit);
  }
  
  updateAmProjecttemplateAuditByDataType(dataType:any, amProjecttemplateAudit:AmProjecttemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateAuditByDataType?dataType=' + dataType, amProjecttemplateAudit);
  }
  
  updateAmProjecttemplateAuditByBeforeValueString(beforeValueString:any, amProjecttemplateAudit:AmProjecttemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateAuditByBeforeValueString?beforeValueString=' + beforeValueString, amProjecttemplateAudit);
  }
  
  updateAmProjecttemplateAuditByAfterValueString(afterValueString:any, amProjecttemplateAudit:AmProjecttemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateAuditByAfterValueString?afterValueString=' + afterValueString, amProjecttemplateAudit);
  }
  
  updateAmProjecttemplateAuditByBeforeValueText(beforeValueText:any, amProjecttemplateAudit:AmProjecttemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateAuditByBeforeValueText?beforeValueText=' + beforeValueText, amProjecttemplateAudit);
  }
  
  updateAmProjecttemplateAuditByAfterValueText(afterValueText:any, amProjecttemplateAudit:AmProjecttemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateAuditByAfterValueText?afterValueText=' + afterValueText, amProjecttemplateAudit);
  }
  
  updateAmProjecttemplateAuditByDateCreated(dateCreated:any, amProjecttemplateAudit:AmProjecttemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateAuditByDateCreated?dateCreated=' + dateCreated, amProjecttemplateAudit);
  }
  
  updateAmProjecttemplateAuditByParentId(parentId:any, amProjecttemplateAudit:AmProjecttemplatesAudit) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateAuditByParentId?parentId=' + parentId, amProjecttemplateAudit);
  }
  
  
  
  //</es-section>
}
