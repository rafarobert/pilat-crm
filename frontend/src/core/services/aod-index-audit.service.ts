/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:14 GMT-0400 (Bolivia Time)
 * Time: 2:41:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:14 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AodIndexAudit} from "../models/aodIndexAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AodIndexAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aod-index-audit`;
  dataChange: BehaviorSubject<AodIndexAudit[]> = new BehaviorSubject<AodIndexAudit[]>([]);
  aodIndexAuditData: AodIndexAudit = new AodIndexAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AodIndexAudit[] {
    return this.dataChange.value;
  }

  getDataAodIndexAudit(): void {
    this.getAllAodIndexAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AodIndexAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAodIndexAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAodIndexAudit(aodIndexAudit:AodIndexAudit) {
    return this.http.post(this.basePath, aodIndexAudit);
  }
  getAodIndexAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAodIndexAudit(id:any, aodIndexAudit:AodIndexAudit) {
    return this.http.put(this.basePath + '/' + id, aodIndexAudit);
  }
  deleteAodIndexAudit(id:any) {
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
  
  
  updateAodIndexAuditById(id:any, aodIndexAudit:AodIndexAudit) {
      return this.http.post(this.basePath + '/updateAodIndexAuditById?id=' + id, aodIndexAudit);
  }
  
  updateAodIndexAuditByCreatedBy(createdBy:any, aodIndexAudit:AodIndexAudit) {
      return this.http.post(this.basePath + '/updateAodIndexAuditByCreatedBy?createdBy=' + createdBy, aodIndexAudit);
  }
  
  updateAodIndexAuditByFieldName(fieldName:any, aodIndexAudit:AodIndexAudit) {
      return this.http.post(this.basePath + '/updateAodIndexAuditByFieldName?fieldName=' + fieldName, aodIndexAudit);
  }
  
  updateAodIndexAuditByDataType(dataType:any, aodIndexAudit:AodIndexAudit) {
      return this.http.post(this.basePath + '/updateAodIndexAuditByDataType?dataType=' + dataType, aodIndexAudit);
  }
  
  updateAodIndexAuditByBeforeValueString(beforeValueString:any, aodIndexAudit:AodIndexAudit) {
      return this.http.post(this.basePath + '/updateAodIndexAuditByBeforeValueString?beforeValueString=' + beforeValueString, aodIndexAudit);
  }
  
  updateAodIndexAuditByAfterValueString(afterValueString:any, aodIndexAudit:AodIndexAudit) {
      return this.http.post(this.basePath + '/updateAodIndexAuditByAfterValueString?afterValueString=' + afterValueString, aodIndexAudit);
  }
  
  updateAodIndexAuditByBeforeValueText(beforeValueText:any, aodIndexAudit:AodIndexAudit) {
      return this.http.post(this.basePath + '/updateAodIndexAuditByBeforeValueText?beforeValueText=' + beforeValueText, aodIndexAudit);
  }
  
  updateAodIndexAuditByAfterValueText(afterValueText:any, aodIndexAudit:AodIndexAudit) {
      return this.http.post(this.basePath + '/updateAodIndexAuditByAfterValueText?afterValueText=' + afterValueText, aodIndexAudit);
  }
  
  updateAodIndexAuditByDateCreated(dateCreated:any, aodIndexAudit:AodIndexAudit) {
      return this.http.post(this.basePath + '/updateAodIndexAuditByDateCreated?dateCreated=' + dateCreated, aodIndexAudit);
  }
  
  updateAodIndexAuditByParentId(parentId:any, aodIndexAudit:AodIndexAudit) {
      return this.http.post(this.basePath + '/updateAodIndexAuditByParentId?parentId=' + parentId, aodIndexAudit);
  }
  
  
  
  //</es-section>
}
