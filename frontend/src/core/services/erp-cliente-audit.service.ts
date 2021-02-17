/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:40 GMT-0400 (Bolivia Time)
 * Time: 2:42:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:40 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:40
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ErpClienteAudit} from "../models/erpClienteAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ErpClienteAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/erp-cliente-audit`;
  dataChange: BehaviorSubject<ErpClienteAudit[]> = new BehaviorSubject<ErpClienteAudit[]>([]);
  erpClienteAuditData: ErpClienteAudit = new ErpClienteAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ErpClienteAudit[] {
    return this.dataChange.value;
  }

  getDataErpClienteAudit(): void {
    this.getAllErpClienteAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ErpClienteAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllErpClienteAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createErpClienteAudit(erpClienteAudit:ErpClienteAudit) {
    return this.http.post(this.basePath, erpClienteAudit);
  }
  getErpClienteAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateErpClienteAudit(id:any, erpClienteAudit:ErpClienteAudit) {
    return this.http.put(this.basePath + '/' + id, erpClienteAudit);
  }
  deleteErpClienteAudit(id:any) {
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
  
  
  updateErpClienteAuditById(id:any, erpClienteAudit:ErpClienteAudit) {
      return this.http.post(this.basePath + '/updateErpClienteAuditById?id=' + id, erpClienteAudit);
  }
  
  updateErpClienteAuditByCreatedBy(createdBy:any, erpClienteAudit:ErpClienteAudit) {
      return this.http.post(this.basePath + '/updateErpClienteAuditByCreatedBy?createdBy=' + createdBy, erpClienteAudit);
  }
  
  updateErpClienteAuditByFieldName(fieldName:any, erpClienteAudit:ErpClienteAudit) {
      return this.http.post(this.basePath + '/updateErpClienteAuditByFieldName?fieldName=' + fieldName, erpClienteAudit);
  }
  
  updateErpClienteAuditByDataType(dataType:any, erpClienteAudit:ErpClienteAudit) {
      return this.http.post(this.basePath + '/updateErpClienteAuditByDataType?dataType=' + dataType, erpClienteAudit);
  }
  
  updateErpClienteAuditByBeforeValueString(beforeValueString:any, erpClienteAudit:ErpClienteAudit) {
      return this.http.post(this.basePath + '/updateErpClienteAuditByBeforeValueString?beforeValueString=' + beforeValueString, erpClienteAudit);
  }
  
  updateErpClienteAuditByAfterValueString(afterValueString:any, erpClienteAudit:ErpClienteAudit) {
      return this.http.post(this.basePath + '/updateErpClienteAuditByAfterValueString?afterValueString=' + afterValueString, erpClienteAudit);
  }
  
  updateErpClienteAuditByBeforeValueText(beforeValueText:any, erpClienteAudit:ErpClienteAudit) {
      return this.http.post(this.basePath + '/updateErpClienteAuditByBeforeValueText?beforeValueText=' + beforeValueText, erpClienteAudit);
  }
  
  updateErpClienteAuditByAfterValueText(afterValueText:any, erpClienteAudit:ErpClienteAudit) {
      return this.http.post(this.basePath + '/updateErpClienteAuditByAfterValueText?afterValueText=' + afterValueText, erpClienteAudit);
  }
  
  updateErpClienteAuditByDateCreated(dateCreated:any, erpClienteAudit:ErpClienteAudit) {
      return this.http.post(this.basePath + '/updateErpClienteAuditByDateCreated?dateCreated=' + dateCreated, erpClienteAudit);
  }
  
  updateErpClienteAuditByParentId(parentId:any, erpClienteAudit:ErpClienteAudit) {
      return this.http.post(this.basePath + '/updateErpClienteAuditByParentId?parentId=' + parentId, erpClienteAudit);
  }
  
  
  
  //</es-section>
}
