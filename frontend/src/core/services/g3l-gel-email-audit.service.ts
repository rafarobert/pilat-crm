/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Time: 0:23:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:2
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {G3lGelEmailAudit} from "../models/g3lGelEmailAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class G3lGelEmailAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/g3l-gel-email-audit`;
  dataChange: BehaviorSubject<G3lGelEmailAudit[]> = new BehaviorSubject<G3lGelEmailAudit[]>([]);
  g3lGelEmailAuditData: G3lGelEmailAudit = new G3lGelEmailAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): G3lGelEmailAudit[] {
    return this.dataChange.value;
  }

  getDataG3lGelEmailAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllG3lGelEmailAudit(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:G3lGelEmailAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllG3lGelEmailAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createG3lGelEmailAudit(g3lGelEmailAudit:G3lGelEmailAudit) {
    return this.http.post(this.basePath, g3lGelEmailAudit);
  }
  getG3lGelEmailAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateG3lGelEmailAudit(id:any, g3lGelEmailAudit:G3lGelEmailAudit) {
    return this.http.put(this.basePath + '/' + id, g3lGelEmailAudit);
  }
  deleteG3lGelEmailAudit(id:any) {
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
  
  
  updateG3lGelEmailAuditById(id:any, g3lGelEmailAudit:G3lGelEmailAudit) {
      return this.http.post(this.basePath + '/updateG3lGelEmailAuditById?id=' + id, g3lGelEmailAudit);
  }
  
  updateG3lGelEmailAuditByCreatedBy(createdBy:any, g3lGelEmailAudit:G3lGelEmailAudit) {
      return this.http.post(this.basePath + '/updateG3lGelEmailAuditByCreatedBy?createdBy=' + createdBy, g3lGelEmailAudit);
  }
  
  updateG3lGelEmailAuditByFieldName(fieldName:any, g3lGelEmailAudit:G3lGelEmailAudit) {
      return this.http.post(this.basePath + '/updateG3lGelEmailAuditByFieldName?fieldName=' + fieldName, g3lGelEmailAudit);
  }
  
  updateG3lGelEmailAuditByDataType(dataType:any, g3lGelEmailAudit:G3lGelEmailAudit) {
      return this.http.post(this.basePath + '/updateG3lGelEmailAuditByDataType?dataType=' + dataType, g3lGelEmailAudit);
  }
  
  updateG3lGelEmailAuditByBeforeValueString(beforeValueString:any, g3lGelEmailAudit:G3lGelEmailAudit) {
      return this.http.post(this.basePath + '/updateG3lGelEmailAuditByBeforeValueString?beforeValueString=' + beforeValueString, g3lGelEmailAudit);
  }
  
  updateG3lGelEmailAuditByAfterValueString(afterValueString:any, g3lGelEmailAudit:G3lGelEmailAudit) {
      return this.http.post(this.basePath + '/updateG3lGelEmailAuditByAfterValueString?afterValueString=' + afterValueString, g3lGelEmailAudit);
  }
  
  updateG3lGelEmailAuditByBeforeValueText(beforeValueText:any, g3lGelEmailAudit:G3lGelEmailAudit) {
      return this.http.post(this.basePath + '/updateG3lGelEmailAuditByBeforeValueText?beforeValueText=' + beforeValueText, g3lGelEmailAudit);
  }
  
  updateG3lGelEmailAuditByAfterValueText(afterValueText:any, g3lGelEmailAudit:G3lGelEmailAudit) {
      return this.http.post(this.basePath + '/updateG3lGelEmailAuditByAfterValueText?afterValueText=' + afterValueText, g3lGelEmailAudit);
  }
  
  updateG3lGelEmailAuditByDateCreated(dateCreated:any, g3lGelEmailAudit:G3lGelEmailAudit) {
      return this.http.post(this.basePath + '/updateG3lGelEmailAuditByDateCreated?dateCreated=' + dateCreated, g3lGelEmailAudit);
  }
  
  updateG3lGelEmailAuditByParentId(parentId:any, g3lGelEmailAudit:G3lGelEmailAudit) {
      return this.http.post(this.basePath + '/updateG3lGelEmailAuditByParentId?parentId=' + parentId, g3lGelEmailAudit);
  }
  
  
  
  //</es-section>
}
