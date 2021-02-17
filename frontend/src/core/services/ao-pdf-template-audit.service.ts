/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:40 GMT-0400 (Bolivia Time)
 * Time: 2:41:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:40 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:40
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosPdfTemplatesAudit} from "../models/aosPdfTemplatesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoPdfTemplateAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-pdf-templates-audit`;
  dataChange: BehaviorSubject<AosPdfTemplatesAudit[]> = new BehaviorSubject<AosPdfTemplatesAudit[]>([]);
  aoPdfTemplateAuditData: AosPdfTemplatesAudit = new AosPdfTemplatesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosPdfTemplatesAudit[] {
    return this.dataChange.value;
  }

  getDataAosPdfTemplatesAudit(): void {
    this.getAllAosPdfTemplatesAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosPdfTemplatesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosPdfTemplatesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoPdfTemplateAudit(aoPdfTemplateAudit:AosPdfTemplatesAudit) {
    return this.http.post(this.basePath, aoPdfTemplateAudit);
  }
  getAoPdfTemplateAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoPdfTemplateAudit(id:any, aoPdfTemplateAudit:AosPdfTemplatesAudit) {
    return this.http.put(this.basePath + '/' + id, aoPdfTemplateAudit);
  }
  deleteAoPdfTemplateAudit(id:any) {
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
  
  
  updateAoPdfTemplateAuditById(id:any, aoPdfTemplateAudit:AosPdfTemplatesAudit) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateAuditById?id=' + id, aoPdfTemplateAudit);
  }
  
  updateAoPdfTemplateAuditByCreatedBy(createdBy:any, aoPdfTemplateAudit:AosPdfTemplatesAudit) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateAuditByCreatedBy?createdBy=' + createdBy, aoPdfTemplateAudit);
  }
  
  updateAoPdfTemplateAuditByFieldName(fieldName:any, aoPdfTemplateAudit:AosPdfTemplatesAudit) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateAuditByFieldName?fieldName=' + fieldName, aoPdfTemplateAudit);
  }
  
  updateAoPdfTemplateAuditByDataType(dataType:any, aoPdfTemplateAudit:AosPdfTemplatesAudit) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateAuditByDataType?dataType=' + dataType, aoPdfTemplateAudit);
  }
  
  updateAoPdfTemplateAuditByBeforeValueString(beforeValueString:any, aoPdfTemplateAudit:AosPdfTemplatesAudit) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateAuditByBeforeValueString?beforeValueString=' + beforeValueString, aoPdfTemplateAudit);
  }
  
  updateAoPdfTemplateAuditByAfterValueString(afterValueString:any, aoPdfTemplateAudit:AosPdfTemplatesAudit) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateAuditByAfterValueString?afterValueString=' + afterValueString, aoPdfTemplateAudit);
  }
  
  updateAoPdfTemplateAuditByBeforeValueText(beforeValueText:any, aoPdfTemplateAudit:AosPdfTemplatesAudit) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateAuditByBeforeValueText?beforeValueText=' + beforeValueText, aoPdfTemplateAudit);
  }
  
  updateAoPdfTemplateAuditByAfterValueText(afterValueText:any, aoPdfTemplateAudit:AosPdfTemplatesAudit) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateAuditByAfterValueText?afterValueText=' + afterValueText, aoPdfTemplateAudit);
  }
  
  updateAoPdfTemplateAuditByDateCreated(dateCreated:any, aoPdfTemplateAudit:AosPdfTemplatesAudit) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateAuditByDateCreated?dateCreated=' + dateCreated, aoPdfTemplateAudit);
  }
  
  updateAoPdfTemplateAuditByParentId(parentId:any, aoPdfTemplateAudit:AosPdfTemplatesAudit) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateAuditByParentId?parentId=' + parentId, aoPdfTemplateAudit);
  }
  
  
  
  //</es-section>
}
