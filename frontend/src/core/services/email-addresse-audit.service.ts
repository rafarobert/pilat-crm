/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:34 GMT-0400 (Bolivia Time)
 * Time: 2:42:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:34 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:34
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {EmailAddressesAudit} from "../models/emailAddressesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EmailAddresseAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/email-addresses-audit`;
  dataChange: BehaviorSubject<EmailAddressesAudit[]> = new BehaviorSubject<EmailAddressesAudit[]>([]);
  emailAddresseAuditData: EmailAddressesAudit = new EmailAddressesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): EmailAddressesAudit[] {
    return this.dataChange.value;
  }

  getDataEmailAddressesAudit(): void {
    this.getAllEmailAddressesAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:EmailAddressesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEmailAddressesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEmailAddresseAudit(emailAddresseAudit:EmailAddressesAudit) {
    return this.http.post(this.basePath, emailAddresseAudit);
  }
  getEmailAddresseAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEmailAddresseAudit(id:any, emailAddresseAudit:EmailAddressesAudit) {
    return this.http.put(this.basePath + '/' + id, emailAddresseAudit);
  }
  deleteEmailAddresseAudit(id:any) {
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
  
  
  updateEmailAddresseAuditById(id:any, emailAddresseAudit:EmailAddressesAudit) {
      return this.http.post(this.basePath + '/updateEmailAddresseAuditById?id=' + id, emailAddresseAudit);
  }
  
  updateEmailAddresseAuditByCreatedBy(createdBy:any, emailAddresseAudit:EmailAddressesAudit) {
      return this.http.post(this.basePath + '/updateEmailAddresseAuditByCreatedBy?createdBy=' + createdBy, emailAddresseAudit);
  }
  
  updateEmailAddresseAuditByFieldName(fieldName:any, emailAddresseAudit:EmailAddressesAudit) {
      return this.http.post(this.basePath + '/updateEmailAddresseAuditByFieldName?fieldName=' + fieldName, emailAddresseAudit);
  }
  
  updateEmailAddresseAuditByDataType(dataType:any, emailAddresseAudit:EmailAddressesAudit) {
      return this.http.post(this.basePath + '/updateEmailAddresseAuditByDataType?dataType=' + dataType, emailAddresseAudit);
  }
  
  updateEmailAddresseAuditByBeforeValueString(beforeValueString:any, emailAddresseAudit:EmailAddressesAudit) {
      return this.http.post(this.basePath + '/updateEmailAddresseAuditByBeforeValueString?beforeValueString=' + beforeValueString, emailAddresseAudit);
  }
  
  updateEmailAddresseAuditByAfterValueString(afterValueString:any, emailAddresseAudit:EmailAddressesAudit) {
      return this.http.post(this.basePath + '/updateEmailAddresseAuditByAfterValueString?afterValueString=' + afterValueString, emailAddresseAudit);
  }
  
  updateEmailAddresseAuditByBeforeValueText(beforeValueText:any, emailAddresseAudit:EmailAddressesAudit) {
      return this.http.post(this.basePath + '/updateEmailAddresseAuditByBeforeValueText?beforeValueText=' + beforeValueText, emailAddresseAudit);
  }
  
  updateEmailAddresseAuditByAfterValueText(afterValueText:any, emailAddresseAudit:EmailAddressesAudit) {
      return this.http.post(this.basePath + '/updateEmailAddresseAuditByAfterValueText?afterValueText=' + afterValueText, emailAddresseAudit);
  }
  
  updateEmailAddresseAuditByDateCreated(dateCreated:any, emailAddresseAudit:EmailAddressesAudit) {
      return this.http.post(this.basePath + '/updateEmailAddresseAuditByDateCreated?dateCreated=' + dateCreated, emailAddresseAudit);
  }
  
  updateEmailAddresseAuditByParentId(parentId:any, emailAddresseAudit:EmailAddressesAudit) {
      return this.http.post(this.basePath + '/updateEmailAddresseAuditByParentId?parentId=' + parentId, emailAddresseAudit);
  }
  
  
  
  //</es-section>
}
