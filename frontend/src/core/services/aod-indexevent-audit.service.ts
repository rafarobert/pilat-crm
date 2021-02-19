/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:13 GMT-0400 (Bolivia Time)
 * Time: 2:41:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:13 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:13
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AodIndexeventAudit} from "../models/aodIndexeventAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AodIndexeventAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aod-indexevent-audit`;
  dataChange: BehaviorSubject<AodIndexeventAudit[]> = new BehaviorSubject<AodIndexeventAudit[]>([]);
  aodIndexeventAuditData: AodIndexeventAudit = new AodIndexeventAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AodIndexeventAudit[] {
    return this.dataChange.value;
  }

  getDataAodIndexeventAudit(): void {
    this.getAllAodIndexeventAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AodIndexeventAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAodIndexeventAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAodIndexeventAudit(aodIndexeventAudit:AodIndexeventAudit) {
    return this.http.post(this.basePath, aodIndexeventAudit);
  }
  getAodIndexeventAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAodIndexeventAudit(id:any, aodIndexeventAudit:AodIndexeventAudit) {
    return this.http.put(this.basePath + '/' + id, aodIndexeventAudit);
  }
  deleteAodIndexeventAudit(id:any) {
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
  
  
  updateAodIndexeventAuditById(id:any, aodIndexeventAudit:AodIndexeventAudit) {
      return this.http.post(this.basePath + '/updateAodIndexeventAuditById?id=' + id, aodIndexeventAudit);
  }
  
  updateAodIndexeventAuditByCreatedBy(createdBy:any, aodIndexeventAudit:AodIndexeventAudit) {
      return this.http.post(this.basePath + '/updateAodIndexeventAuditByCreatedBy?createdBy=' + createdBy, aodIndexeventAudit);
  }
  
  updateAodIndexeventAuditByFieldName(fieldName:any, aodIndexeventAudit:AodIndexeventAudit) {
      return this.http.post(this.basePath + '/updateAodIndexeventAuditByFieldName?fieldName=' + fieldName, aodIndexeventAudit);
  }
  
  updateAodIndexeventAuditByDataType(dataType:any, aodIndexeventAudit:AodIndexeventAudit) {
      return this.http.post(this.basePath + '/updateAodIndexeventAuditByDataType?dataType=' + dataType, aodIndexeventAudit);
  }
  
  updateAodIndexeventAuditByBeforeValueString(beforeValueString:any, aodIndexeventAudit:AodIndexeventAudit) {
      return this.http.post(this.basePath + '/updateAodIndexeventAuditByBeforeValueString?beforeValueString=' + beforeValueString, aodIndexeventAudit);
  }
  
  updateAodIndexeventAuditByAfterValueString(afterValueString:any, aodIndexeventAudit:AodIndexeventAudit) {
      return this.http.post(this.basePath + '/updateAodIndexeventAuditByAfterValueString?afterValueString=' + afterValueString, aodIndexeventAudit);
  }
  
  updateAodIndexeventAuditByBeforeValueText(beforeValueText:any, aodIndexeventAudit:AodIndexeventAudit) {
      return this.http.post(this.basePath + '/updateAodIndexeventAuditByBeforeValueText?beforeValueText=' + beforeValueText, aodIndexeventAudit);
  }
  
  updateAodIndexeventAuditByAfterValueText(afterValueText:any, aodIndexeventAudit:AodIndexeventAudit) {
      return this.http.post(this.basePath + '/updateAodIndexeventAuditByAfterValueText?afterValueText=' + afterValueText, aodIndexeventAudit);
  }
  
  updateAodIndexeventAuditByDateCreated(dateCreated:any, aodIndexeventAudit:AodIndexeventAudit) {
      return this.http.post(this.basePath + '/updateAodIndexeventAuditByDateCreated?dateCreated=' + dateCreated, aodIndexeventAudit);
  }
  
  updateAodIndexeventAuditByParentId(parentId:any, aodIndexeventAudit:AodIndexeventAudit) {
      return this.http.post(this.basePath + '/updateAodIndexeventAuditByParentId?parentId=' + parentId, aodIndexeventAudit);
  }
  
  
  
  //</es-section>
}
