/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:17 GMT-0400 (Bolivia Time)
 * Time: 2:42:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:17 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:17
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ContactsAudit} from "../models/contactsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ContactAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/contacts-audit`;
  dataChange: BehaviorSubject<ContactsAudit[]> = new BehaviorSubject<ContactsAudit[]>([]);
  contactAuditData: ContactsAudit = new ContactsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ContactsAudit[] {
    return this.dataChange.value;
  }

  getDataContactsAudit(): void {
    this.getAllContactsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ContactsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllContactsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createContactAudit(contactAudit:ContactsAudit) {
    return this.http.post(this.basePath, contactAudit);
  }
  getContactAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateContactAudit(id:any, contactAudit:ContactsAudit) {
    return this.http.put(this.basePath + '/' + id, contactAudit);
  }
  deleteContactAudit(id:any) {
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
  
  
  updateContactAuditById(id:any, contactAudit:ContactsAudit) {
      return this.http.post(this.basePath + '/updateContactAuditById?id=' + id, contactAudit);
  }
  
  updateContactAuditByCreatedBy(createdBy:any, contactAudit:ContactsAudit) {
      return this.http.post(this.basePath + '/updateContactAuditByCreatedBy?createdBy=' + createdBy, contactAudit);
  }
  
  updateContactAuditByFieldName(fieldName:any, contactAudit:ContactsAudit) {
      return this.http.post(this.basePath + '/updateContactAuditByFieldName?fieldName=' + fieldName, contactAudit);
  }
  
  updateContactAuditByDataType(dataType:any, contactAudit:ContactsAudit) {
      return this.http.post(this.basePath + '/updateContactAuditByDataType?dataType=' + dataType, contactAudit);
  }
  
  updateContactAuditByBeforeValueString(beforeValueString:any, contactAudit:ContactsAudit) {
      return this.http.post(this.basePath + '/updateContactAuditByBeforeValueString?beforeValueString=' + beforeValueString, contactAudit);
  }
  
  updateContactAuditByAfterValueString(afterValueString:any, contactAudit:ContactsAudit) {
      return this.http.post(this.basePath + '/updateContactAuditByAfterValueString?afterValueString=' + afterValueString, contactAudit);
  }
  
  updateContactAuditByBeforeValueText(beforeValueText:any, contactAudit:ContactsAudit) {
      return this.http.post(this.basePath + '/updateContactAuditByBeforeValueText?beforeValueText=' + beforeValueText, contactAudit);
  }
  
  updateContactAuditByAfterValueText(afterValueText:any, contactAudit:ContactsAudit) {
      return this.http.post(this.basePath + '/updateContactAuditByAfterValueText?afterValueText=' + afterValueText, contactAudit);
  }
  
  updateContactAuditByDateCreated(dateCreated:any, contactAudit:ContactsAudit) {
      return this.http.post(this.basePath + '/updateContactAuditByDateCreated?dateCreated=' + dateCreated, contactAudit);
  }
  
  updateContactAuditByParentId(parentId:any, contactAudit:ContactsAudit) {
      return this.http.post(this.basePath + '/updateContactAuditByParentId?parentId=' + parentId, contactAudit);
  }
  
  
  
  //</es-section>
}
