/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:21:01 GMT-0400 (Bolivia Time)
 * Time: 4:21:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:21:01 GMT-0400 (Bolivia Time)
 * Last time updated: 4:21:1
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {DocumentsOpportunities} from "../models/documentsOpportunities";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class DocumentOpportunityService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/documents-opportunities`;
  dataChange: BehaviorSubject<DocumentsOpportunities[]> = new BehaviorSubject<DocumentsOpportunities[]>([]);
  documentOpportunityData: DocumentsOpportunities = new DocumentsOpportunities();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): DocumentsOpportunities[] {
    return this.dataChange.value;
  }

  getDataDocumentsOpportunities(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllDocumentsOpportunities(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:DocumentsOpportunities[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllDocumentsOpportunities(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createDocumentOpportunity(documentOpportunity:DocumentsOpportunities) {
    return this.http.post(this.basePath, documentOpportunity);
  }
  getDocumentOpportunity(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateDocumentOpportunity(id:any, documentOpportunity:DocumentsOpportunities) {
    return this.http.put(this.basePath + '/' + id, documentOpportunity);
  }
  deleteDocumentOpportunity(id:any) {
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
  
  findOneByOpportunityId(opportunityId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOpportunityId/' + opportunityId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateDocumentOpportunityById(id:any, documentOpportunity:DocumentsOpportunities) {
      return this.http.post(this.basePath + '/updateDocumentOpportunityById?id=' + id, documentOpportunity);
  }
  
  updateDocumentOpportunityByDeleted(deleted:any, documentOpportunity:DocumentsOpportunities) {
      return this.http.post(this.basePath + '/updateDocumentOpportunityByDeleted?deleted=' + deleted, documentOpportunity);
  }
  
  updateDocumentOpportunityByDocumentId(documentId:any, documentOpportunity:DocumentsOpportunities) {
      return this.http.post(this.basePath + '/updateDocumentOpportunityByDocumentId?documentId=' + documentId, documentOpportunity);
  }
  
  updateDocumentOpportunityByOpportunityId(opportunityId:any, documentOpportunity:DocumentsOpportunities) {
      return this.http.post(this.basePath + '/updateDocumentOpportunityByOpportunityId?opportunityId=' + opportunityId, documentOpportunity);
  }
  
  updateDocumentOpportunityByDateModified(dateModified:any, documentOpportunity:DocumentsOpportunities) {
      return this.http.post(this.basePath + '/updateDocumentOpportunityByDateModified?dateModified=' + dateModified, documentOpportunity);
  }
  
  
  
  //</es-section>
}
