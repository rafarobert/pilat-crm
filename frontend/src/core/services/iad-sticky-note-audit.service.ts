/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:52 GMT-0400 (Bolivia Time)
 * Time: 2:42:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:52 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:52
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {IadStickyNotesAudit} from "../models/iadStickyNotesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class IadStickyNoteAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/iad-sticky-notes-audit`;
  dataChange: BehaviorSubject<IadStickyNotesAudit[]> = new BehaviorSubject<IadStickyNotesAudit[]>([]);
  iadStickyNoteAuditData: IadStickyNotesAudit = new IadStickyNotesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): IadStickyNotesAudit[] {
    return this.dataChange.value;
  }

  getDataIadStickyNotesAudit(): void {
    this.getAllIadStickyNotesAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:IadStickyNotesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllIadStickyNotesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createIadStickyNoteAudit(iadStickyNoteAudit:IadStickyNotesAudit) {
    return this.http.post(this.basePath, iadStickyNoteAudit);
  }
  getIadStickyNoteAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateIadStickyNoteAudit(id:any, iadStickyNoteAudit:IadStickyNotesAudit) {
    return this.http.put(this.basePath + '/' + id, iadStickyNoteAudit);
  }
  deleteIadStickyNoteAudit(id:any) {
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
  
  
  updateIadStickyNoteAuditById(id:any, iadStickyNoteAudit:IadStickyNotesAudit) {
      return this.http.post(this.basePath + '/updateIadStickyNoteAuditById?id=' + id, iadStickyNoteAudit);
  }
  
  updateIadStickyNoteAuditByCreatedBy(createdBy:any, iadStickyNoteAudit:IadStickyNotesAudit) {
      return this.http.post(this.basePath + '/updateIadStickyNoteAuditByCreatedBy?createdBy=' + createdBy, iadStickyNoteAudit);
  }
  
  updateIadStickyNoteAuditByFieldName(fieldName:any, iadStickyNoteAudit:IadStickyNotesAudit) {
      return this.http.post(this.basePath + '/updateIadStickyNoteAuditByFieldName?fieldName=' + fieldName, iadStickyNoteAudit);
  }
  
  updateIadStickyNoteAuditByDataType(dataType:any, iadStickyNoteAudit:IadStickyNotesAudit) {
      return this.http.post(this.basePath + '/updateIadStickyNoteAuditByDataType?dataType=' + dataType, iadStickyNoteAudit);
  }
  
  updateIadStickyNoteAuditByBeforeValueString(beforeValueString:any, iadStickyNoteAudit:IadStickyNotesAudit) {
      return this.http.post(this.basePath + '/updateIadStickyNoteAuditByBeforeValueString?beforeValueString=' + beforeValueString, iadStickyNoteAudit);
  }
  
  updateIadStickyNoteAuditByAfterValueString(afterValueString:any, iadStickyNoteAudit:IadStickyNotesAudit) {
      return this.http.post(this.basePath + '/updateIadStickyNoteAuditByAfterValueString?afterValueString=' + afterValueString, iadStickyNoteAudit);
  }
  
  updateIadStickyNoteAuditByBeforeValueText(beforeValueText:any, iadStickyNoteAudit:IadStickyNotesAudit) {
      return this.http.post(this.basePath + '/updateIadStickyNoteAuditByBeforeValueText?beforeValueText=' + beforeValueText, iadStickyNoteAudit);
  }
  
  updateIadStickyNoteAuditByAfterValueText(afterValueText:any, iadStickyNoteAudit:IadStickyNotesAudit) {
      return this.http.post(this.basePath + '/updateIadStickyNoteAuditByAfterValueText?afterValueText=' + afterValueText, iadStickyNoteAudit);
  }
  
  updateIadStickyNoteAuditByDateCreated(dateCreated:any, iadStickyNoteAudit:IadStickyNotesAudit) {
      return this.http.post(this.basePath + '/updateIadStickyNoteAuditByDateCreated?dateCreated=' + dateCreated, iadStickyNoteAudit);
  }
  
  updateIadStickyNoteAuditByParentId(parentId:any, iadStickyNoteAudit:IadStickyNotesAudit) {
      return this.http.post(this.basePath + '/updateIadStickyNoteAuditByParentId?parentId=' + parentId, iadStickyNoteAudit);
  }
  
  
  
  //</es-section>
}
