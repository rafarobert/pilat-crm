/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:31 GMT-0400 (Bolivia Time)
 * Time: 2:41:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:31 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:31
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosContractsAudit} from "../models/aosContractsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoContractAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-contracts-audit`;
  dataChange: BehaviorSubject<AosContractsAudit[]> = new BehaviorSubject<AosContractsAudit[]>([]);
  aoContractAuditData: AosContractsAudit = new AosContractsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosContractsAudit[] {
    return this.dataChange.value;
  }

  getDataAosContractsAudit(): void {
    this.getAllAosContractsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosContractsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosContractsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoContractAudit(aoContractAudit:AosContractsAudit) {
    return this.http.post(this.basePath, aoContractAudit);
  }
  getAoContractAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoContractAudit(id:any, aoContractAudit:AosContractsAudit) {
    return this.http.put(this.basePath + '/' + id, aoContractAudit);
  }
  deleteAoContractAudit(id:any) {
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
  
  
  updateAoContractAuditById(id:any, aoContractAudit:AosContractsAudit) {
      return this.http.post(this.basePath + '/updateAoContractAuditById?id=' + id, aoContractAudit);
  }
  
  updateAoContractAuditByCreatedBy(createdBy:any, aoContractAudit:AosContractsAudit) {
      return this.http.post(this.basePath + '/updateAoContractAuditByCreatedBy?createdBy=' + createdBy, aoContractAudit);
  }
  
  updateAoContractAuditByFieldName(fieldName:any, aoContractAudit:AosContractsAudit) {
      return this.http.post(this.basePath + '/updateAoContractAuditByFieldName?fieldName=' + fieldName, aoContractAudit);
  }
  
  updateAoContractAuditByDataType(dataType:any, aoContractAudit:AosContractsAudit) {
      return this.http.post(this.basePath + '/updateAoContractAuditByDataType?dataType=' + dataType, aoContractAudit);
  }
  
  updateAoContractAuditByBeforeValueString(beforeValueString:any, aoContractAudit:AosContractsAudit) {
      return this.http.post(this.basePath + '/updateAoContractAuditByBeforeValueString?beforeValueString=' + beforeValueString, aoContractAudit);
  }
  
  updateAoContractAuditByAfterValueString(afterValueString:any, aoContractAudit:AosContractsAudit) {
      return this.http.post(this.basePath + '/updateAoContractAuditByAfterValueString?afterValueString=' + afterValueString, aoContractAudit);
  }
  
  updateAoContractAuditByBeforeValueText(beforeValueText:any, aoContractAudit:AosContractsAudit) {
      return this.http.post(this.basePath + '/updateAoContractAuditByBeforeValueText?beforeValueText=' + beforeValueText, aoContractAudit);
  }
  
  updateAoContractAuditByAfterValueText(afterValueText:any, aoContractAudit:AosContractsAudit) {
      return this.http.post(this.basePath + '/updateAoContractAuditByAfterValueText?afterValueText=' + afterValueText, aoContractAudit);
  }
  
  updateAoContractAuditByDateCreated(dateCreated:any, aoContractAudit:AosContractsAudit) {
      return this.http.post(this.basePath + '/updateAoContractAuditByDateCreated?dateCreated=' + dateCreated, aoContractAudit);
  }
  
  updateAoContractAuditByParentId(parentId:any, aoContractAudit:AosContractsAudit) {
      return this.http.post(this.basePath + '/updateAoContractAuditByParentId?parentId=' + parentId, aoContractAudit);
  }
  
  
  
  //</es-section>
}
