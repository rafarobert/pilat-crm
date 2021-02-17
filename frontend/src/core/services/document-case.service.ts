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
import {DocumentsCases} from "../models/documentsCases";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class DocumentCaseService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/documents-cases`;
  dataChange: BehaviorSubject<DocumentsCases[]> = new BehaviorSubject<DocumentsCases[]>([]);
  documentCaseData: DocumentsCases = new DocumentsCases();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): DocumentsCases[] {
    return this.dataChange.value;
  }

  getDataDocumentsCases(): void {
    this.getAllDocumentsCases().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:DocumentsCases[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllDocumentsCases(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createDocumentCase(documentCase:DocumentsCases) {
    return this.http.post(this.basePath, documentCase);
  }
  getDocumentCase(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateDocumentCase(id:any, documentCase:DocumentsCases) {
    return this.http.put(this.basePath + '/' + id, documentCase);
  }
  deleteDocumentCase(id:any) {
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
  
  findOneByCaseId(caseId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCaseId/' + caseId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateDocumentCaseById(id:any, documentCase:DocumentsCases) {
      return this.http.post(this.basePath + '/updateDocumentCaseById?id=' + id, documentCase);
  }
  
  updateDocumentCaseByDeleted(deleted:any, documentCase:DocumentsCases) {
      return this.http.post(this.basePath + '/updateDocumentCaseByDeleted?deleted=' + deleted, documentCase);
  }
  
  updateDocumentCaseByDocumentId(documentId:any, documentCase:DocumentsCases) {
      return this.http.post(this.basePath + '/updateDocumentCaseByDocumentId?documentId=' + documentId, documentCase);
  }
  
  updateDocumentCaseByCaseId(caseId:any, documentCase:DocumentsCases) {
      return this.http.post(this.basePath + '/updateDocumentCaseByCaseId?caseId=' + caseId, documentCase);
  }
  
  updateDocumentCaseByDateModified(dateModified:any, documentCase:DocumentsCases) {
      return this.http.post(this.basePath + '/updateDocumentCaseByDateModified?dateModified=' + dateModified, documentCase);
  }
  
  
  
  //</es-section>
}
