/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:27 GMT-0400 (Bolivia Time)
 * Time: 2:42:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:27 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:27
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {DocumentRevisions} from "../models/documentRevisions";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class DocumentRevisionService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/document-revisions`;
  dataChange: BehaviorSubject<DocumentRevisions[]> = new BehaviorSubject<DocumentRevisions[]>([]);
  documentRevisionData: DocumentRevisions = new DocumentRevisions();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): DocumentRevisions[] {
    return this.dataChange.value;
  }

  getDataDocumentRevisions(): void {
    this.getAllDocumentRevisions().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:DocumentRevisions[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllDocumentRevisions(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createDocumentRevision(documentRevision:DocumentRevisions) {
    return this.http.post(this.basePath, documentRevision);
  }
  getDocumentRevision(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateDocumentRevision(id:any, documentRevision:DocumentRevisions) {
    return this.http.put(this.basePath + '/' + id, documentRevision);
  }
  deleteDocumentRevision(id:any) {
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
  
  findOneByChangeLog(changeLog:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByChangeLog/' + changeLog + '?' + attributes);
  }
  
  findOneByDocumentId(documentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDocumentId/' + documentId + '?' + attributes);
  }
  
  findOneByDocId(docId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDocId/' + docId + '?' + attributes);
  }
  
  findOneByDocType(docType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDocType/' + docType + '?' + attributes);
  }
  
  findOneByDocUrl(docUrl:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDocUrl/' + docUrl + '?' + attributes);
  }
  
  findOneByFilename(filename:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFilename/' + filename + '?' + attributes);
  }
  
  findOneByFileExt(fileExt:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFileExt/' + fileExt + '?' + attributes);
  }
  
  findOneByFileMimeType(fileMimeType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFileMimeType/' + fileMimeType + '?' + attributes);
  }
  
  findOneByRevision(revision:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRevision/' + revision + '?' + attributes);
  }
  
  findOneByDateEntered(dateEntered:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateEntered/' + dateEntered + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  
  updateDocumentRevisionById(id:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionById?id=' + id, documentRevision);
  }
  
  updateDocumentRevisionByDeleted(deleted:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionByDeleted?deleted=' + deleted, documentRevision);
  }
  
  updateDocumentRevisionByChangeLog(changeLog:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionByChangeLog?changeLog=' + changeLog, documentRevision);
  }
  
  updateDocumentRevisionByDocumentId(documentId:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionByDocumentId?documentId=' + documentId, documentRevision);
  }
  
  updateDocumentRevisionByDocId(docId:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionByDocId?docId=' + docId, documentRevision);
  }
  
  updateDocumentRevisionByDocType(docType:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionByDocType?docType=' + docType, documentRevision);
  }
  
  updateDocumentRevisionByDocUrl(docUrl:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionByDocUrl?docUrl=' + docUrl, documentRevision);
  }
  
  updateDocumentRevisionByFilename(filename:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionByFilename?filename=' + filename, documentRevision);
  }
  
  updateDocumentRevisionByFileExt(fileExt:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionByFileExt?fileExt=' + fileExt, documentRevision);
  }
  
  updateDocumentRevisionByFileMimeType(fileMimeType:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionByFileMimeType?fileMimeType=' + fileMimeType, documentRevision);
  }
  
  updateDocumentRevisionByRevision(revision:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionByRevision?revision=' + revision, documentRevision);
  }
  
  updateDocumentRevisionByDateEntered(dateEntered:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionByDateEntered?dateEntered=' + dateEntered, documentRevision);
  }
  
  updateDocumentRevisionByDateModified(dateModified:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionByDateModified?dateModified=' + dateModified, documentRevision);
  }
  
  updateDocumentRevisionByCreatedBy(createdBy:any, documentRevision:DocumentRevisions) {
      return this.http.post(this.basePath + '/updateDocumentRevisionByCreatedBy?createdBy=' + createdBy, documentRevision);
  }
  
  
  
  //</es-section>
}
