/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:23 GMT-0400 (Bolivia Time)
 * Time: 2:42:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:23 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:23
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Documents} from "../models/documents";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/documents`;
  dataChange: BehaviorSubject<Documents[]> = new BehaviorSubject<Documents[]>([]);
  documentData: Documents = new Documents();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Documents[] {
    return this.dataChange.value;
  }

  getDataDocuments(): void {
    this.getAllDocuments().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Documents[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllDocuments(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createDocument(document:Documents) {
    return this.http.post(this.basePath, document);
  }
  getDocument(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateDocument(id:any, document:Documents) {
    return this.http.put(this.basePath + '/' + id, document);
  }
  deleteDocument(id:any) {
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
  
  findOneByIsTemplate(isTemplate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIsTemplate/' + isTemplate + '?' + attributes);
  }
  
  findOneByDocumentName(documentName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDocumentName/' + documentName + '?' + attributes);
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
  
  findOneByCategoryId(categoryId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCategoryId/' + categoryId + '?' + attributes);
  }
  
  findOneBySubcategoryId(subcategoryId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySubcategoryId/' + subcategoryId + '?' + attributes);
  }
  
  findOneByStatusId(statusId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatusId/' + statusId + '?' + attributes);
  }
  
  findOneByDocumentRevisionId(documentRevisionId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDocumentRevisionId/' + documentRevisionId + '?' + attributes);
  }
  
  findOneByTemplateType(templateType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTemplateType/' + templateType + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
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
  
  findOneByActiveDate(activeDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActiveDate/' + activeDate + '?' + attributes);
  }
  
  findOneByExpDate(expDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExpDate/' + expDate + '?' + attributes);
  }
  
  findOneByModifiedUserId(modifiedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedUserId/' + modifiedUserId + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  findOneByRelatedDocId(relatedDocId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedDocId/' + relatedDocId + '?' + attributes);
  }
  
  findOneByRelatedDocRevId(relatedDocRevId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedDocRevId/' + relatedDocRevId + '?' + attributes);
  }
  
  
  updateDocumentById(id:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentById?id=' + id, document);
  }
  
  updateDocumentByDeleted(deleted:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByDeleted?deleted=' + deleted, document);
  }
  
  updateDocumentByIsTemplate(isTemplate:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByIsTemplate?isTemplate=' + isTemplate, document);
  }
  
  updateDocumentByDocumentName(documentName:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByDocumentName?documentName=' + documentName, document);
  }
  
  updateDocumentByDocId(docId:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByDocId?docId=' + docId, document);
  }
  
  updateDocumentByDocType(docType:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByDocType?docType=' + docType, document);
  }
  
  updateDocumentByDocUrl(docUrl:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByDocUrl?docUrl=' + docUrl, document);
  }
  
  updateDocumentByCategoryId(categoryId:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByCategoryId?categoryId=' + categoryId, document);
  }
  
  updateDocumentBySubcategoryId(subcategoryId:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentBySubcategoryId?subcategoryId=' + subcategoryId, document);
  }
  
  updateDocumentByStatusId(statusId:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByStatusId?statusId=' + statusId, document);
  }
  
  updateDocumentByDocumentRevisionId(documentRevisionId:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByDocumentRevisionId?documentRevisionId=' + documentRevisionId, document);
  }
  
  updateDocumentByTemplateType(templateType:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByTemplateType?templateType=' + templateType, document);
  }
  
  updateDocumentByDescription(description:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByDescription?description=' + description, document);
  }
  
  updateDocumentByDateEntered(dateEntered:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByDateEntered?dateEntered=' + dateEntered, document);
  }
  
  updateDocumentByDateModified(dateModified:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByDateModified?dateModified=' + dateModified, document);
  }
  
  updateDocumentByActiveDate(activeDate:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByActiveDate?activeDate=' + activeDate, document);
  }
  
  updateDocumentByExpDate(expDate:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByExpDate?expDate=' + expDate, document);
  }
  
  updateDocumentByModifiedUserId(modifiedUserId:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByModifiedUserId?modifiedUserId=' + modifiedUserId, document);
  }
  
  updateDocumentByCreatedBy(createdBy:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByCreatedBy?createdBy=' + createdBy, document);
  }
  
  updateDocumentByAssignedUserId(assignedUserId:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByAssignedUserId?assignedUserId=' + assignedUserId, document);
  }
  
  updateDocumentByRelatedDocId(relatedDocId:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByRelatedDocId?relatedDocId=' + relatedDocId, document);
  }
  
  updateDocumentByRelatedDocRevId(relatedDocRevId:any, document:Documents) {
      return this.http.post(this.basePath + '/updateDocumentByRelatedDocRevId?relatedDocRevId=' + relatedDocRevId, document);
  }
  
  
  
  //</es-section>
}
