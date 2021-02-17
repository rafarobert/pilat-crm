/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:46 GMT-0400 (Bolivia Time)
 * Time: 2:41:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:46 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:46
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
export class AoProductCategorieAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-product-categories-audit`;
  dataChange: BehaviorSubject<AosProductCategoriesAudit[]> = new BehaviorSubject<AosProductCategoriesAudit[]>([]);
  aoProductCategorieAuditData: AosProductCategoriesAudit = new AosProductCategoriesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosProductCategoriesAudit[] {
    return this.dataChange.value;
  }

  getDataAosProductCategoriesAudit(): void {
    this.getAllAosProductCategoriesAudit().subscribe(async (res) => {
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
  createAoProductCategorieAudit(aoProductCategorieAudit:AosProductCategoriesAudit) {
    return this.http.post(this.basePath, aoProductCategorieAudit);
  }
  getAoProductCategorieAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoProductCategorieAudit(id:any, aoProductCategorieAudit:AosProductCategoriesAudit) {
    return this.http.put(this.basePath + '/' + id, aoProductCategorieAudit);
  }
  deleteAoProductCategorieAudit(id:any) {
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
  
  
  updateAoProductCategorieAuditById(id:any, aoProductCategorieAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategorieAuditById?id=' + id, aoProductCategorieAudit);
  }
  
  updateAoProductCategorieAuditByCreatedBy(createdBy:any, aoProductCategorieAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategorieAuditByCreatedBy?createdBy=' + createdBy, aoProductCategorieAudit);
  }
  
  updateAoProductCategorieAuditByFieldName(fieldName:any, aoProductCategorieAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategorieAuditByFieldName?fieldName=' + fieldName, aoProductCategorieAudit);
  }
  
  updateAoProductCategorieAuditByDataType(dataType:any, aoProductCategorieAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategorieAuditByDataType?dataType=' + dataType, aoProductCategorieAudit);
  }
  
  updateAoProductCategorieAuditByBeforeValueString(beforeValueString:any, aoProductCategorieAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategorieAuditByBeforeValueString?beforeValueString=' + beforeValueString, aoProductCategorieAudit);
  }
  
  updateAoProductCategorieAuditByAfterValueString(afterValueString:any, aoProductCategorieAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategorieAuditByAfterValueString?afterValueString=' + afterValueString, aoProductCategorieAudit);
  }
  
  updateAoProductCategorieAuditByBeforeValueText(beforeValueText:any, aoProductCategorieAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategorieAuditByBeforeValueText?beforeValueText=' + beforeValueText, aoProductCategorieAudit);
  }
  
  updateAoProductCategorieAuditByAfterValueText(afterValueText:any, aoProductCategorieAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategorieAuditByAfterValueText?afterValueText=' + afterValueText, aoProductCategorieAudit);
  }
  
  updateAoProductCategorieAuditByDateCreated(dateCreated:any, aoProductCategorieAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategorieAuditByDateCreated?dateCreated=' + dateCreated, aoProductCategorieAudit);
  }
  
  updateAoProductCategorieAuditByParentId(parentId:any, aoProductCategorieAudit:AosProductCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAoProductCategorieAuditByParentId?parentId=' + parentId, aoProductCategorieAudit);
  }
  
  
  
  //</es-section>
}
