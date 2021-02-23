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
import {DocumentsBugs} from "../models/documentsBugs";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class DocumentBugService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/documents-bugs`;
  dataChange: BehaviorSubject<DocumentsBugs[]> = new BehaviorSubject<DocumentsBugs[]>([]);
  documentBugData: DocumentsBugs = new DocumentsBugs();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): DocumentsBugs[] {
    return this.dataChange.value;
  }

  getDataDocumentsBugs(): void {
    this.getAllDocumentsBugs().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:DocumentsBugs[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllDocumentsBugs(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createDocumentBug(documentBug:DocumentsBugs) {
    return this.http.post(this.basePath, documentBug);
  }
  getDocumentBug(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateDocumentBug(id:any, documentBug:DocumentsBugs) {
    return this.http.put(this.basePath + '/' + id, documentBug);
  }
  deleteDocumentBug(id:any) {
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
  
  findOneByBugId(bugId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBugId/' + bugId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateDocumentBugById(id:any, documentBug:DocumentsBugs) {
      return this.http.post(this.basePath + '/updateDocumentBugById?id=' + id, documentBug);
  }
  
  updateDocumentBugByDeleted(deleted:any, documentBug:DocumentsBugs) {
      return this.http.post(this.basePath + '/updateDocumentBugByDeleted?deleted=' + deleted, documentBug);
  }
  
  updateDocumentBugByDocumentId(documentId:any, documentBug:DocumentsBugs) {
      return this.http.post(this.basePath + '/updateDocumentBugByDocumentId?documentId=' + documentId, documentBug);
  }
  
  updateDocumentBugByBugId(bugId:any, documentBug:DocumentsBugs) {
      return this.http.post(this.basePath + '/updateDocumentBugByBugId?bugId=' + bugId, documentBug);
  }
  
  updateDocumentBugByDateModified(dateModified:any, documentBug:DocumentsBugs) {
      return this.http.post(this.basePath + '/updateDocumentBugByDateModified?dateModified=' + dateModified, documentBug);
  }
  
  
  
  //</es-section>
}
