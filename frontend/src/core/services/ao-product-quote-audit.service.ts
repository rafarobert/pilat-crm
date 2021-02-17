/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:45 GMT-0400 (Bolivia Time)
 * Time: 2:41:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:45
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosProductsQuotesAudit} from "../models/aosProductsQuotesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoProductQuoteAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-products-quotes-audit`;
  dataChange: BehaviorSubject<AosProductsQuotesAudit[]> = new BehaviorSubject<AosProductsQuotesAudit[]>([]);
  aoProductQuoteAuditData: AosProductsQuotesAudit = new AosProductsQuotesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosProductsQuotesAudit[] {
    return this.dataChange.value;
  }

  getDataAosProductsQuotesAudit(): void {
    this.getAllAosProductsQuotesAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosProductsQuotesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosProductsQuotesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoProductQuoteAudit(aoProductQuoteAudit:AosProductsQuotesAudit) {
    return this.http.post(this.basePath, aoProductQuoteAudit);
  }
  getAoProductQuoteAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoProductQuoteAudit(id:any, aoProductQuoteAudit:AosProductsQuotesAudit) {
    return this.http.put(this.basePath + '/' + id, aoProductQuoteAudit);
  }
  deleteAoProductQuoteAudit(id:any) {
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
  
  
  updateAoProductQuoteAuditById(id:any, aoProductQuoteAudit:AosProductsQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoProductQuoteAuditById?id=' + id, aoProductQuoteAudit);
  }
  
  updateAoProductQuoteAuditByCreatedBy(createdBy:any, aoProductQuoteAudit:AosProductsQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoProductQuoteAuditByCreatedBy?createdBy=' + createdBy, aoProductQuoteAudit);
  }
  
  updateAoProductQuoteAuditByFieldName(fieldName:any, aoProductQuoteAudit:AosProductsQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoProductQuoteAuditByFieldName?fieldName=' + fieldName, aoProductQuoteAudit);
  }
  
  updateAoProductQuoteAuditByDataType(dataType:any, aoProductQuoteAudit:AosProductsQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoProductQuoteAuditByDataType?dataType=' + dataType, aoProductQuoteAudit);
  }
  
  updateAoProductQuoteAuditByBeforeValueString(beforeValueString:any, aoProductQuoteAudit:AosProductsQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoProductQuoteAuditByBeforeValueString?beforeValueString=' + beforeValueString, aoProductQuoteAudit);
  }
  
  updateAoProductQuoteAuditByAfterValueString(afterValueString:any, aoProductQuoteAudit:AosProductsQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoProductQuoteAuditByAfterValueString?afterValueString=' + afterValueString, aoProductQuoteAudit);
  }
  
  updateAoProductQuoteAuditByBeforeValueText(beforeValueText:any, aoProductQuoteAudit:AosProductsQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoProductQuoteAuditByBeforeValueText?beforeValueText=' + beforeValueText, aoProductQuoteAudit);
  }
  
  updateAoProductQuoteAuditByAfterValueText(afterValueText:any, aoProductQuoteAudit:AosProductsQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoProductQuoteAuditByAfterValueText?afterValueText=' + afterValueText, aoProductQuoteAudit);
  }
  
  updateAoProductQuoteAuditByDateCreated(dateCreated:any, aoProductQuoteAudit:AosProductsQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoProductQuoteAuditByDateCreated?dateCreated=' + dateCreated, aoProductQuoteAudit);
  }
  
  updateAoProductQuoteAuditByParentId(parentId:any, aoProductQuoteAudit:AosProductsQuotesAudit) {
      return this.http.post(this.basePath + '/updateAoProductQuoteAuditByParentId?parentId=' + parentId, aoProductQuoteAudit);
  }
  
  
  
  //</es-section>
}
