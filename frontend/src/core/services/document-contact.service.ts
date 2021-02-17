/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:25 GMT-0400 (Bolivia Time)
 * Time: 2:42:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:25 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {DocumentsContacts} from "../models/documentsContacts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class DocumentContactService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/documents-contacts`;
  dataChange: BehaviorSubject<DocumentsContacts[]> = new BehaviorSubject<DocumentsContacts[]>([]);
  documentContactData: DocumentsContacts = new DocumentsContacts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): DocumentsContacts[] {
    return this.dataChange.value;
  }

  getDataDocumentsContacts(): void {
    this.getAllDocumentsContacts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:DocumentsContacts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllDocumentsContacts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createDocumentContact(documentContact:DocumentsContacts) {
    return this.http.post(this.basePath, documentContact);
  }
  getDocumentContact(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateDocumentContact(id:any, documentContact:DocumentsContacts) {
    return this.http.put(this.basePath + '/' + id, documentContact);
  }
  deleteDocumentContact(id:any) {
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
  
  findOneByContactId(contactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactId/' + contactId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateDocumentContactById(id:any, documentContact:DocumentsContacts) {
      return this.http.post(this.basePath + '/updateDocumentContactById?id=' + id, documentContact);
  }
  
  updateDocumentContactByDeleted(deleted:any, documentContact:DocumentsContacts) {
      return this.http.post(this.basePath + '/updateDocumentContactByDeleted?deleted=' + deleted, documentContact);
  }
  
  updateDocumentContactByDocumentId(documentId:any, documentContact:DocumentsContacts) {
      return this.http.post(this.basePath + '/updateDocumentContactByDocumentId?documentId=' + documentId, documentContact);
  }
  
  updateDocumentContactByContactId(contactId:any, documentContact:DocumentsContacts) {
      return this.http.post(this.basePath + '/updateDocumentContactByContactId?contactId=' + contactId, documentContact);
  }
  
  updateDocumentContactByDateModified(dateModified:any, documentContact:DocumentsContacts) {
      return this.http.post(this.basePath + '/updateDocumentContactByDateModified?dateModified=' + dateModified, documentContact);
  }
  
  
  
  //</es-section>
}
