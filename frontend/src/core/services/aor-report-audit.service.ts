/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:27 GMT-0400 (Bolivia Time)
 * Time: 2:41:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:27 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:27
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AorReportsAudit} from "../models/aorReportsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AorReportAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aor-reports-audit`;
  dataChange: BehaviorSubject<AorReportsAudit[]> = new BehaviorSubject<AorReportsAudit[]>([]);
  aorReportAuditData: AorReportsAudit = new AorReportsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AorReportsAudit[] {
    return this.dataChange.value;
  }

  getDataAorReportsAudit(): void {
    this.getAllAorReportsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AorReportsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAorReportsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAorReportAudit(aorReportAudit:AorReportsAudit) {
    return this.http.post(this.basePath, aorReportAudit);
  }
  getAorReportAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAorReportAudit(id:any, aorReportAudit:AorReportsAudit) {
    return this.http.put(this.basePath + '/' + id, aorReportAudit);
  }
  deleteAorReportAudit(id:any) {
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
  
  
  updateAorReportAuditById(id:any, aorReportAudit:AorReportsAudit) {
      return this.http.post(this.basePath + '/updateAorReportAuditById?id=' + id, aorReportAudit);
  }
  
  updateAorReportAuditByCreatedBy(createdBy:any, aorReportAudit:AorReportsAudit) {
      return this.http.post(this.basePath + '/updateAorReportAuditByCreatedBy?createdBy=' + createdBy, aorReportAudit);
  }
  
  updateAorReportAuditByFieldName(fieldName:any, aorReportAudit:AorReportsAudit) {
      return this.http.post(this.basePath + '/updateAorReportAuditByFieldName?fieldName=' + fieldName, aorReportAudit);
  }
  
  updateAorReportAuditByDataType(dataType:any, aorReportAudit:AorReportsAudit) {
      return this.http.post(this.basePath + '/updateAorReportAuditByDataType?dataType=' + dataType, aorReportAudit);
  }
  
  updateAorReportAuditByBeforeValueString(beforeValueString:any, aorReportAudit:AorReportsAudit) {
      return this.http.post(this.basePath + '/updateAorReportAuditByBeforeValueString?beforeValueString=' + beforeValueString, aorReportAudit);
  }
  
  updateAorReportAuditByAfterValueString(afterValueString:any, aorReportAudit:AorReportsAudit) {
      return this.http.post(this.basePath + '/updateAorReportAuditByAfterValueString?afterValueString=' + afterValueString, aorReportAudit);
  }
  
  updateAorReportAuditByBeforeValueText(beforeValueText:any, aorReportAudit:AorReportsAudit) {
      return this.http.post(this.basePath + '/updateAorReportAuditByBeforeValueText?beforeValueText=' + beforeValueText, aorReportAudit);
  }
  
  updateAorReportAuditByAfterValueText(afterValueText:any, aorReportAudit:AorReportsAudit) {
      return this.http.post(this.basePath + '/updateAorReportAuditByAfterValueText?afterValueText=' + afterValueText, aorReportAudit);
  }
  
  updateAorReportAuditByDateCreated(dateCreated:any, aorReportAudit:AorReportsAudit) {
      return this.http.post(this.basePath + '/updateAorReportAuditByDateCreated?dateCreated=' + dateCreated, aorReportAudit);
  }
  
  updateAorReportAuditByParentId(parentId:any, aorReportAudit:AorReportsAudit) {
      return this.http.post(this.basePath + '/updateAorReportAuditByParentId?parentId=' + parentId, aorReportAudit);
  }
  
  
  
  //</es-section>
}
