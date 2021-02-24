/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:50 GMT-0400 (Bolivia Time)
 * Time: 2:41:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:50 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:50
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosQuotesAudit} from "../models/aosQuotesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoQuoteAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-quotes-audit`;
  dataChange: BehaviorSubject<AosQuotesAudit[]> = new BehaviorSubject<AosQuotesAudit[]>([]);
  aoQuoteAuditData: AosQuotesAudit = new AosQuotesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosQuotesAudit[] {
    return this.dataChange.value;
  }

  getDataAosQuotesAudit(): void {
    this.getAllAosQuotesAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosQuotesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosQuotesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoQuoteAudit(aoQuoteAudit:AosQuotesAudit) {
    return this.http.post(this.basePath, aoQuoteAudit);
  }
  getAoQuoteAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoQuoteAudit(id:any, aoQuoteAudit:AosQuotesAudit) {
    return this.http.put(this.basePath + '/' + id, aoQuoteAudit);
  }
  deleteAoQuoteAudit(id:any) {
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
  
  
  updateAoQuoteAuditById(id:any, aoQuoteAudit:AosQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoQuoteAuditById?id=' + id, aoQuoteAudit);
  }
  
  updateAoQuoteAuditByCreatedBy(createdBy:any, aoQuoteAudit:AosQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoQuoteAuditByCreatedBy?createdBy=' + createdBy, aoQuoteAudit);
  }
  
  updateAoQuoteAuditByFieldName(fieldName:any, aoQuoteAudit:AosQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoQuoteAuditByFieldName?fieldName=' + fieldName, aoQuoteAudit);
  }
  
  updateAoQuoteAuditByDataType(dataType:any, aoQuoteAudit:AosQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoQuoteAuditByDataType?dataType=' + dataType, aoQuoteAudit);
  }
  
  updateAoQuoteAuditByBeforeValueString(beforeValueString:any, aoQuoteAudit:AosQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoQuoteAuditByBeforeValueString?beforeValueString=' + beforeValueString, aoQuoteAudit);
  }
  
  updateAoQuoteAuditByAfterValueString(afterValueString:any, aoQuoteAudit:AosQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoQuoteAuditByAfterValueString?afterValueString=' + afterValueString, aoQuoteAudit);
  }
  
  updateAoQuoteAuditByBeforeValueText(beforeValueText:any, aoQuoteAudit:AosQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoQuoteAuditByBeforeValueText?beforeValueText=' + beforeValueText, aoQuoteAudit);
  }
  
  updateAoQuoteAuditByAfterValueText(afterValueText:any, aoQuoteAudit:AosQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoQuoteAuditByAfterValueText?afterValueText=' + afterValueText, aoQuoteAudit);
  }
  
  updateAoQuoteAuditByDateCreated(dateCreated:any, aoQuoteAudit:AosQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoQuoteAuditByDateCreated?dateCreated=' + dateCreated, aoQuoteAudit);
  }
  
  updateAoQuoteAuditByParentId(parentId:any, aoQuoteAudit:AosQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoQuoteAuditByParentId?parentId=' + parentId, aoQuoteAudit);
  }
  
  
  
  //</es-section>
}
