/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Jan 29 2021 20:07:17 GMT-0400 (Bolivia Time)
 * Time: 20:7:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Jan 29 2021 20:07:17 GMT-0400 (Bolivia Time)
 * Last time updated: 20:7:17
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {G3lGelWhatsappAudit} from "../models/g3lGelWhatsappAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class G3lGelWhatsappAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/g3l-gel-whatsapp-audit`;
  dataChange: BehaviorSubject<G3lGelWhatsappAudit[]> = new BehaviorSubject<G3lGelWhatsappAudit[]>([]);
  g3lGelWhatsappAuditData: G3lGelWhatsappAudit = new G3lGelWhatsappAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): G3lGelWhatsappAudit[] {
    return this.dataChange.value;
  }

  getDataG3lGelWhatsappAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllG3lGelWhatsappAudit(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:G3lGelWhatsappAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllG3lGelWhatsappAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createG3lGelWhatsappAudit(g3lGelWhatsappAudit:G3lGelWhatsappAudit) {
    return this.http.post(this.basePath, g3lGelWhatsappAudit);
  }
  getG3lGelWhatsappAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateG3lGelWhatsappAudit(id:any, g3lGelWhatsappAudit:G3lGelWhatsappAudit) {
    return this.http.put(this.basePath + '/' + id, g3lGelWhatsappAudit);
  }
  deleteG3lGelWhatsappAudit(id:any) {
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
  
  
  updateG3lGelWhatsappAuditById(id:any, g3lGelWhatsappAudit:G3lGelWhatsappAudit) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappAuditById?id=' + id, g3lGelWhatsappAudit);
  }
  
  updateG3lGelWhatsappAuditByCreatedBy(createdBy:any, g3lGelWhatsappAudit:G3lGelWhatsappAudit) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappAuditByCreatedBy?createdBy=' + createdBy, g3lGelWhatsappAudit);
  }
  
  updateG3lGelWhatsappAuditByFieldName(fieldName:any, g3lGelWhatsappAudit:G3lGelWhatsappAudit) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappAuditByFieldName?fieldName=' + fieldName, g3lGelWhatsappAudit);
  }
  
  updateG3lGelWhatsappAuditByDataType(dataType:any, g3lGelWhatsappAudit:G3lGelWhatsappAudit) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappAuditByDataType?dataType=' + dataType, g3lGelWhatsappAudit);
  }
  
  updateG3lGelWhatsappAuditByBeforeValueString(beforeValueString:any, g3lGelWhatsappAudit:G3lGelWhatsappAudit) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappAuditByBeforeValueString?beforeValueString=' + beforeValueString, g3lGelWhatsappAudit);
  }
  
  updateG3lGelWhatsappAuditByAfterValueString(afterValueString:any, g3lGelWhatsappAudit:G3lGelWhatsappAudit) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappAuditByAfterValueString?afterValueString=' + afterValueString, g3lGelWhatsappAudit);
  }
  
  updateG3lGelWhatsappAuditByBeforeValueText(beforeValueText:any, g3lGelWhatsappAudit:G3lGelWhatsappAudit) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappAuditByBeforeValueText?beforeValueText=' + beforeValueText, g3lGelWhatsappAudit);
  }
  
  updateG3lGelWhatsappAuditByAfterValueText(afterValueText:any, g3lGelWhatsappAudit:G3lGelWhatsappAudit) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappAuditByAfterValueText?afterValueText=' + afterValueText, g3lGelWhatsappAudit);
  }
  
  updateG3lGelWhatsappAuditByDateCreated(dateCreated:any, g3lGelWhatsappAudit:G3lGelWhatsappAudit) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappAuditByDateCreated?dateCreated=' + dateCreated, g3lGelWhatsappAudit);
  }
  
  updateG3lGelWhatsappAuditByParentId(parentId:any, g3lGelWhatsappAudit:G3lGelWhatsappAudit) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappAuditByParentId?parentId=' + parentId, g3lGelWhatsappAudit);
  }
  
  
  
  //</es-section>
}
