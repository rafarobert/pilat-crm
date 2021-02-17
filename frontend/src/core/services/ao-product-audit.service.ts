/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:42 GMT-0400 (Bolivia Time)
 * Time: 2:41:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:42 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:42
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosProductsAudit} from "../models/aosProductsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoProductAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-products-audit`;
  dataChange: BehaviorSubject<AosProductsAudit[]> = new BehaviorSubject<AosProductsAudit[]>([]);
  aoProductAuditData: AosProductsAudit = new AosProductsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosProductsAudit[] {
    return this.dataChange.value;
  }

  getDataAosProductsAudit(): void {
    this.getAllAosProductsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosProductsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosProductsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoProductAudit(aoProductAudit:AosProductsAudit) {
    return this.http.post(this.basePath, aoProductAudit);
  }
  getAoProductAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoProductAudit(id:any, aoProductAudit:AosProductsAudit) {
    return this.http.put(this.basePath + '/' + id, aoProductAudit);
  }
  deleteAoProductAudit(id:any) {
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
  
  
  updateAoProductAuditById(id:any, aoProductAudit:AosProductsAudit) {
      return this.http.post(this.basePath + '/updateAoProductAuditById?id=' + id, aoProductAudit);
  }
  
  updateAoProductAuditByCreatedBy(createdBy:any, aoProductAudit:AosProductsAudit) {
      return this.http.post(this.basePath + '/updateAoProductAuditByCreatedBy?createdBy=' + createdBy, aoProductAudit);
  }
  
  updateAoProductAuditByFieldName(fieldName:any, aoProductAudit:AosProductsAudit) {
      return this.http.post(this.basePath + '/updateAoProductAuditByFieldName?fieldName=' + fieldName, aoProductAudit);
  }
  
  updateAoProductAuditByDataType(dataType:any, aoProductAudit:AosProductsAudit) {
      return this.http.post(this.basePath + '/updateAoProductAuditByDataType?dataType=' + dataType, aoProductAudit);
  }
  
  updateAoProductAuditByBeforeValueString(beforeValueString:any, aoProductAudit:AosProductsAudit) {
      return this.http.post(this.basePath + '/updateAoProductAuditByBeforeValueString?beforeValueString=' + beforeValueString, aoProductAudit);
  }
  
  updateAoProductAuditByAfterValueString(afterValueString:any, aoProductAudit:AosProductsAudit) {
      return this.http.post(this.basePath + '/updateAoProductAuditByAfterValueString?afterValueString=' + afterValueString, aoProductAudit);
  }
  
  updateAoProductAuditByBeforeValueText(beforeValueText:any, aoProductAudit:AosProductsAudit) {
      return this.http.post(this.basePath + '/updateAoProductAuditByBeforeValueText?beforeValueText=' + beforeValueText, aoProductAudit);
  }
  
  updateAoProductAuditByAfterValueText(afterValueText:any, aoProductAudit:AosProductsAudit) {
      return this.http.post(this.basePath + '/updateAoProductAuditByAfterValueText?afterValueText=' + afterValueText, aoProductAudit);
  }
  
  updateAoProductAuditByDateCreated(dateCreated:any, aoProductAudit:AosProductsAudit) {
      return this.http.post(this.basePath + '/updateAoProductAuditByDateCreated?dateCreated=' + dateCreated, aoProductAudit);
  }
  
  updateAoProductAuditByParentId(parentId:any, aoProductAudit:AosProductsAudit) {
      return this.http.post(this.basePath + '/updateAoProductAuditByParentId?parentId=' + parentId, aoProductAudit);
  }
  
  
  
  //</es-section>
}
