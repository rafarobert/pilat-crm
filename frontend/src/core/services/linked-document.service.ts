/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:09 GMT-0400 (Bolivia Time)
 * Time: 2:43:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:09 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:9
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {LinkedDocuments} from "../models/linkedDocuments";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class LinkedDocumentService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/linked-documents`;
  dataChange: BehaviorSubject<LinkedDocuments[]> = new BehaviorSubject<LinkedDocuments[]>([]);
  linkedDocumentData: LinkedDocuments = new LinkedDocuments();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): LinkedDocuments[] {
    return this.dataChange.value;
  }

  getDataLinkedDocuments(): void {
    this.getAllLinkedDocuments().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:LinkedDocuments[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllLinkedDocuments(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createLinkedDocument(linkedDocument:LinkedDocuments) {
    return this.http.post(this.basePath, linkedDocument);
  }
  getLinkedDocument(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateLinkedDocument(id:any, linkedDocument:LinkedDocuments) {
    return this.http.put(this.basePath + '/' + id, linkedDocument);
  }
  deleteLinkedDocument(id:any) {
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
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  findOneByParentType(parentType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentType/' + parentType + '?' + attributes);
  }
  
  findOneByDocumentId(documentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDocumentId/' + documentId + '?' + attributes);
  }
  
  findOneByDocumentRevisionId(documentRevisionId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDocumentRevisionId/' + documentRevisionId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateLinkedDocumentById(id:any, linkedDocument:LinkedDocuments) {
      return this.http.post(this.basePath + '/updateLinkedDocumentById?id=' + id, linkedDocument);
  }
  
  updateLinkedDocumentByDeleted(deleted:any, linkedDocument:LinkedDocuments) {
      return this.http.post(this.basePath + '/updateLinkedDocumentByDeleted?deleted=' + deleted, linkedDocument);
  }
  
  updateLinkedDocumentByParentId(parentId:any, linkedDocument:LinkedDocuments) {
      return this.http.post(this.basePath + '/updateLinkedDocumentByParentId?parentId=' + parentId, linkedDocument);
  }
  
  updateLinkedDocumentByParentType(parentType:any, linkedDocument:LinkedDocuments) {
      return this.http.post(this.basePath + '/updateLinkedDocumentByParentType?parentType=' + parentType, linkedDocument);
  }
  
  updateLinkedDocumentByDocumentId(documentId:any, linkedDocument:LinkedDocuments) {
      return this.http.post(this.basePath + '/updateLinkedDocumentByDocumentId?documentId=' + documentId, linkedDocument);
  }
  
  updateLinkedDocumentByDocumentRevisionId(documentRevisionId:any, linkedDocument:LinkedDocuments) {
      return this.http.post(this.basePath + '/updateLinkedDocumentByDocumentRevisionId?documentRevisionId=' + documentRevisionId, linkedDocument);
  }
  
  updateLinkedDocumentByDateModified(dateModified:any, linkedDocument:LinkedDocuments) {
      return this.http.post(this.basePath + '/updateLinkedDocumentByDateModified?dateModified=' + dateModified, linkedDocument);
  }
  
  
  
  //</es-section>
}
