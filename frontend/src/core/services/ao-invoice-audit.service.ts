/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:35 GMT-0400 (Bolivia Time)
 * Time: 2:41:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:35 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:35
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosInvoicesAudit} from "../models/aosInvoicesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoInvoiceAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-invoices-audit`;
  dataChange: BehaviorSubject<AosInvoicesAudit[]> = new BehaviorSubject<AosInvoicesAudit[]>([]);
  aoInvoiceAuditData: AosInvoicesAudit = new AosInvoicesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosInvoicesAudit[] {
    return this.dataChange.value;
  }

  getDataAosInvoicesAudit(): void {
    this.getAllAosInvoicesAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosInvoicesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosInvoicesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoInvoiceAudit(aoInvoiceAudit:AosInvoicesAudit) {
    return this.http.post(this.basePath, aoInvoiceAudit);
  }
  getAoInvoiceAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoInvoiceAudit(id:any, aoInvoiceAudit:AosInvoicesAudit) {
    return this.http.put(this.basePath + '/' + id, aoInvoiceAudit);
  }
  deleteAoInvoiceAudit(id:any) {
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
  
  
  updateAoInvoiceAuditById(id:any, aoInvoiceAudit:AosInvoicesAudit) {
      return this.http.post(this.basePath + '/updateAoInvoiceAuditById?id=' + id, aoInvoiceAudit);
  }
  
  updateAoInvoiceAuditByCreatedBy(createdBy:any, aoInvoiceAudit:AosInvoicesAudit) {
      return this.http.post(this.basePath + '/updateAoInvoiceAuditByCreatedBy?createdBy=' + createdBy, aoInvoiceAudit);
  }
  
  updateAoInvoiceAuditByFieldName(fieldName:any, aoInvoiceAudit:AosInvoicesAudit) {
      return this.http.post(this.basePath + '/updateAoInvoiceAuditByFieldName?fieldName=' + fieldName, aoInvoiceAudit);
  }
  
  updateAoInvoiceAuditByDataType(dataType:any, aoInvoiceAudit:AosInvoicesAudit) {
      return this.http.post(this.basePath + '/updateAoInvoiceAuditByDataType?dataType=' + dataType, aoInvoiceAudit);
  }
  
  updateAoInvoiceAuditByBeforeValueString(beforeValueString:any, aoInvoiceAudit:AosInvoicesAudit) {
      return this.http.post(this.basePath + '/updateAoInvoiceAuditByBeforeValueString?beforeValueString=' + beforeValueString, aoInvoiceAudit);
  }
  
  updateAoInvoiceAuditByAfterValueString(afterValueString:any, aoInvoiceAudit:AosInvoicesAudit) {
      return this.http.post(this.basePath + '/updateAoInvoiceAuditByAfterValueString?afterValueString=' + afterValueString, aoInvoiceAudit);
  }
  
  updateAoInvoiceAuditByBeforeValueText(beforeValueText:any, aoInvoiceAudit:AosInvoicesAudit) {
      return this.http.post(this.basePath + '/updateAoInvoiceAuditByBeforeValueText?beforeValueText=' + beforeValueText, aoInvoiceAudit);
  }
  
  updateAoInvoiceAuditByAfterValueText(afterValueText:any, aoInvoiceAudit:AosInvoicesAudit) {
      return this.http.post(this.basePath + '/updateAoInvoiceAuditByAfterValueText?afterValueText=' + afterValueText, aoInvoiceAudit);
  }
  
  updateAoInvoiceAuditByDateCreated(dateCreated:any, aoInvoiceAudit:AosInvoicesAudit) {
      return this.http.post(this.basePath + '/updateAoInvoiceAuditByDateCreated?dateCreated=' + dateCreated, aoInvoiceAudit);
  }
  
  updateAoInvoiceAuditByParentId(parentId:any, aoInvoiceAudit:AosInvoicesAudit) {
      return this.http.post(this.basePath + '/updateAoInvoiceAuditByParentId?parentId=' + parentId, aoInvoiceAudit);
  }
  
  
  
  //</es-section>
}
