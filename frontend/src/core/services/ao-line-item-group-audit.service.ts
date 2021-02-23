/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:38 GMT-0400 (Bolivia Time)
 * Time: 2:41:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:38 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:38
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosLineItemGroupsAudit} from "../models/aosLineItemGroupsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoLineItemGroupAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-line-item-groups-audit`;
  dataChange: BehaviorSubject<AosLineItemGroupsAudit[]> = new BehaviorSubject<AosLineItemGroupsAudit[]>([]);
  aoLineItemGroupAuditData: AosLineItemGroupsAudit = new AosLineItemGroupsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosLineItemGroupsAudit[] {
    return this.dataChange.value;
  }

  getDataAosLineItemGroupsAudit(): void {
    this.getAllAosLineItemGroupsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosLineItemGroupsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosLineItemGroupsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoLineItemGroupAudit(aoLineItemGroupAudit:AosLineItemGroupsAudit) {
    return this.http.post(this.basePath, aoLineItemGroupAudit);
  }
  getAoLineItemGroupAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoLineItemGroupAudit(id:any, aoLineItemGroupAudit:AosLineItemGroupsAudit) {
    return this.http.put(this.basePath + '/' + id, aoLineItemGroupAudit);
  }
  deleteAoLineItemGroupAudit(id:any) {
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
  
  
  updateAoLineItemGroupAuditById(id:any, aoLineItemGroupAudit:AosLineItemGroupsAudit) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupAuditById?id=' + id, aoLineItemGroupAudit);
  }
  
  updateAoLineItemGroupAuditByCreatedBy(createdBy:any, aoLineItemGroupAudit:AosLineItemGroupsAudit) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupAuditByCreatedBy?createdBy=' + createdBy, aoLineItemGroupAudit);
  }
  
  updateAoLineItemGroupAuditByFieldName(fieldName:any, aoLineItemGroupAudit:AosLineItemGroupsAudit) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupAuditByFieldName?fieldName=' + fieldName, aoLineItemGroupAudit);
  }
  
  updateAoLineItemGroupAuditByDataType(dataType:any, aoLineItemGroupAudit:AosLineItemGroupsAudit) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupAuditByDataType?dataType=' + dataType, aoLineItemGroupAudit);
  }
  
  updateAoLineItemGroupAuditByBeforeValueString(beforeValueString:any, aoLineItemGroupAudit:AosLineItemGroupsAudit) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupAuditByBeforeValueString?beforeValueString=' + beforeValueString, aoLineItemGroupAudit);
  }
  
  updateAoLineItemGroupAuditByAfterValueString(afterValueString:any, aoLineItemGroupAudit:AosLineItemGroupsAudit) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupAuditByAfterValueString?afterValueString=' + afterValueString, aoLineItemGroupAudit);
  }
  
  updateAoLineItemGroupAuditByBeforeValueText(beforeValueText:any, aoLineItemGroupAudit:AosLineItemGroupsAudit) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupAuditByBeforeValueText?beforeValueText=' + beforeValueText, aoLineItemGroupAudit);
  }
  
  updateAoLineItemGroupAuditByAfterValueText(afterValueText:any, aoLineItemGroupAudit:AosLineItemGroupsAudit) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupAuditByAfterValueText?afterValueText=' + afterValueText, aoLineItemGroupAudit);
  }
  
  updateAoLineItemGroupAuditByDateCreated(dateCreated:any, aoLineItemGroupAudit:AosLineItemGroupsAudit) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupAuditByDateCreated?dateCreated=' + dateCreated, aoLineItemGroupAudit);
  }
  
  updateAoLineItemGroupAuditByParentId(parentId:any, aoLineItemGroupAudit:AosLineItemGroupsAudit) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupAuditByParentId?parentId=' + parentId, aoLineItemGroupAudit);
  }
  
  
  
  //</es-section>
}
