/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:24 GMT-0400 (Bolivia Time)
 * Time: 2:42:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:24 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:24
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {DocumentsAccounts} from "../models/documentsAccounts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class DocumentAccountService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/documents-accounts`;
  dataChange: BehaviorSubject<DocumentsAccounts[]> = new BehaviorSubject<DocumentsAccounts[]>([]);
  documentAccountData: DocumentsAccounts = new DocumentsAccounts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): DocumentsAccounts[] {
    return this.dataChange.value;
  }

  getDataDocumentsAccounts(): void {
    this.getAllDocumentsAccounts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:DocumentsAccounts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllDocumentsAccounts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createDocumentAccount(documentAccount:DocumentsAccounts) {
    return this.http.post(this.basePath, documentAccount);
  }
  getDocumentAccount(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateDocumentAccount(id:any, documentAccount:DocumentsAccounts) {
    return this.http.put(this.basePath + '/' + id, documentAccount);
  }
  deleteDocumentAccount(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByDocumentId(documentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDocumentId/' + documentId + '?' + attributes);
  }
  
  findOneByAccountId(accountId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccountId/' + accountId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateDocumentAccountById(id:any, documentAccount:DocumentsAccounts) {
      return this.http.post(this.basePath + '/updateDocumentAccountById?id=' + id, documentAccount);
  }
  
  updateDocumentAccountByDeleted(deleted:any, documentAccount:DocumentsAccounts) {
      return this.http.post(this.basePath + '/updateDocumentAccountByDeleted?deleted=' + deleted, documentAccount);
  }
  
  updateDocumentAccountByDocumentId(documentId:any, documentAccount:DocumentsAccounts) {
      return this.http.post(this.basePath + '/updateDocumentAccountByDocumentId?documentId=' + documentId, documentAccount);
  }
  
  updateDocumentAccountByAccountId(accountId:any, documentAccount:DocumentsAccounts) {
      return this.http.post(this.basePath + '/updateDocumentAccountByAccountId?accountId=' + accountId, documentAccount);
  }
  
  updateDocumentAccountByDateModified(dateModified:any, documentAccount:DocumentsAccounts) {
      return this.http.post(this.basePath + '/updateDocumentAccountByDateModified?dateModified=' + dateModified, documentAccount);
  }
  
  
  
  //</es-section>
}
