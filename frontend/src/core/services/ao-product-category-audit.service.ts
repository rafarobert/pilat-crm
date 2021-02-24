/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:20:37 GMT-0400 (Bolivia Time)
 * Time: 4:20:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:20:37 GMT-0400 (Bolivia Time)
 * Last time updated: 4:20:37
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosProductCategoriesAudit} from "../models/aosProductCategoriesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoProductCategoryAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-product-categories-audit`;
  dataChange: BehaviorSubject<AosProductCategoriesAudit[]> = new BehaviorSubject<AosProductCategoriesAudit[]>([]);
  aoProductCategoryAuditData: AosProductCategoriesAudit = new AosProductCategoriesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosProductCategoriesAudit[] {
    return this.dataChange.value;
  }

  getDataAosProductCategoriesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllAosProductCategoriesAudit(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosProductCategoriesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosProductCategoriesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoProductCategoryAudit(aoProductCategoryAudit:AosProductCategoriesAudit) {
    return this.http.post(this.basePath, aoProductCategoryAudit);
  }
  getAoProductCategoryAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoProductCategoryAudit(id:any, aoProductCategoryAudit:AosProductCategoriesAudit) {
    return this.http.put(this.basePath + '/' + id, aoProductCategoryAudit);
  }
  deleteAoProductCategoryAudit(id:any) {
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
  
  
  updateAoProductCategoryAuditById(id:any, aoProductCategoryAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategoryAuditById?id=' + id, aoProductCategoryAudit);
  }
  
  updateAoProductCategoryAuditByCreatedBy(createdBy:any, aoProductCategoryAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategoryAuditByCreatedBy?createdBy=' + createdBy, aoProductCategoryAudit);
  }
  
  updateAoProductCategoryAuditByFieldName(fieldName:any, aoProductCategoryAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategoryAuditByFieldName?fieldName=' + fieldName, aoProductCategoryAudit);
  }
  
  updateAoProductCategoryAuditByDataType(dataType:any, aoProductCategoryAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategoryAuditByDataType?dataType=' + dataType, aoProductCategoryAudit);
  }
  
  updateAoProductCategoryAuditByBeforeValueString(beforeValueString:any, aoProductCategoryAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategoryAuditByBeforeValueString?beforeValueString=' + beforeValueString, aoProductCategoryAudit);
  }
  
  updateAoProductCategoryAuditByAfterValueString(afterValueString:any, aoProductCategoryAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategoryAuditByAfterValueString?afterValueString=' + afterValueString, aoProductCategoryAudit);
  }
  
  updateAoProductCategoryAuditByBeforeValueText(beforeValueText:any, aoProductCategoryAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategoryAuditByBeforeValueText?beforeValueText=' + beforeValueText, aoProductCategoryAudit);
  }
  
  updateAoProductCategoryAuditByAfterValueText(afterValueText:any, aoProductCategoryAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategoryAuditByAfterValueText?afterValueText=' + afterValueText, aoProductCategoryAudit);
  }
  
  updateAoProductCategoryAuditByDateCreated(dateCreated:any, aoProductCategoryAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategoryAuditByDateCreated?dateCreated=' + dateCreated, aoProductCategoryAudit);
  }
  
  updateAoProductCategoryAuditByParentId(parentId:any, aoProductCategoryAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategoryAuditByParentId?parentId=' + parentId, aoProductCategoryAudit);
  }
  
  
  
  //</es-section>
}
