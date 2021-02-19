/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:47 GMT-0400 (Bolivia Time)
 * Time: 2:40:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:47 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:47
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AccountsAudit} from "../models/accountsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AccountAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/accounts-audit`;
  dataChange: BehaviorSubject<AccountsAudit[]> = new BehaviorSubject<AccountsAudit[]>([]);
  accountAuditData: AccountsAudit = new AccountsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AccountsAudit[] {
    return this.dataChange.value;
  }

  getDataAccountsAudit(): void {
    this.getAllAccountsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AccountsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAccountsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAccountAudit(accountAudit:AccountsAudit) {
    return this.http.post(this.basePath, accountAudit);
  }
  getAccountAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAccountAudit(id:any, accountAudit:AccountsAudit) {
    return this.http.put(this.basePath + '/' + id, accountAudit);
  }
  deleteAccountAudit(id:any) {
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
  
  
  updateAccountAuditById(id:any, accountAudit:AccountsAudit) {
      return this.http.post(this.basePath + '/updateAccountAuditById?id=' + id, accountAudit);
  }
  
  updateAccountAuditByCreatedBy(createdBy:any, accountAudit:AccountsAudit) {
      return this.http.post(this.basePath + '/updateAccountAuditByCreatedBy?createdBy=' + createdBy, accountAudit);
  }
  
  updateAccountAuditByFieldName(fieldName:any, accountAudit:AccountsAudit) {
      return this.http.post(this.basePath + '/updateAccountAuditByFieldName?fieldName=' + fieldName, accountAudit);
  }
  
  updateAccountAuditByDataType(dataType:any, accountAudit:AccountsAudit) {
      return this.http.post(this.basePath + '/updateAccountAuditByDataType?dataType=' + dataType, accountAudit);
  }
  
  updateAccountAuditByBeforeValueString(beforeValueString:any, accountAudit:AccountsAudit) {
      return this.http.post(this.basePath + '/updateAccountAuditByBeforeValueString?beforeValueString=' + beforeValueString, accountAudit);
  }
  
  updateAccountAuditByAfterValueString(afterValueString:any, accountAudit:AccountsAudit) {
      return this.http.post(this.basePath + '/updateAccountAuditByAfterValueString?afterValueString=' + afterValueString, accountAudit);
  }
  
  updateAccountAuditByBeforeValueText(beforeValueText:any, accountAudit:AccountsAudit) {
      return this.http.post(this.basePath + '/updateAccountAuditByBeforeValueText?beforeValueText=' + beforeValueText, accountAudit);
  }
  
  updateAccountAuditByAfterValueText(afterValueText:any, accountAudit:AccountsAudit) {
      return this.http.post(this.basePath + '/updateAccountAuditByAfterValueText?afterValueText=' + afterValueText, accountAudit);
  }
  
  updateAccountAuditByDateCreated(dateCreated:any, accountAudit:AccountsAudit) {
      return this.http.post(this.basePath + '/updateAccountAuditByDateCreated?dateCreated=' + dateCreated, accountAudit);
  }
  
  updateAccountAuditByParentId(parentId:any, accountAudit:AccountsAudit) {
      return this.http.post(this.basePath + '/updateAccountAuditByParentId?parentId=' + parentId, accountAudit);
  }
  
  
  
  //</es-section>
}
