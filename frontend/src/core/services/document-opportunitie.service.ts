/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:26 GMT-0400 (Bolivia Time)
 * Time: 2:42:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:26 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:26
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
export class DocumentOpportunitieService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/documents-opportunities`;
  dataChange: BehaviorSubject<DocumentsOpportunities[]> = new BehaviorSubject<DocumentsOpportunities[]>([]);
  documentOpportunitieData: DocumentsOpportunities = new DocumentsOpportunities();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): DocumentsOpportunities[] {
    return this.dataChange.value;
  }

  getDataDocumentsOpportunities(): void {
    this.getAllDocumentsOpportunities().subscribe(async (res) => {
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
  createDocumentOpportunitie(documentOpportunitie:DocumentsOpportunities) {
    return this.http.post(this.basePath, documentOpportunitie);
  }
  getDocumentOpportunitie(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateDocumentOpportunitie(id:any, documentOpportunitie:DocumentsOpportunities) {
    return this.http.put(this.basePath + '/' + id, documentOpportunitie);
  }
  deleteDocumentOpportunitie(id:any) {
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
  
  
  updateDocumentOpportunitieById(id:any, documentOpportunitie:DocumentsOpportunities) {
      return this.http.post(this.basePath + '/updateDocumentOpportunitieById?id=' + id, documentOpportunitie);
  }
  
  updateDocumentOpportunitieByDeleted(deleted:any, documentOpportunitie:DocumentsOpportunities) {
      return this.http.post(this.basePath + '/updateDocumentOpportunitieByDeleted?deleted=' + deleted, documentOpportunitie);
  }
  
  updateDocumentOpportunitieByDocumentId(documentId:any, documentOpportunitie:DocumentsOpportunities) {
      return this.http.post(this.basePath + '/updateDocumentOpportunitieByDocumentId?documentId=' + documentId, documentOpportunitie);
  }
  
  updateDocumentOpportunitieByOpportunityId(opportunityId:any, documentOpportunitie:DocumentsOpportunities) {
      return this.http.post(this.basePath + '/updateDocumentOpportunitieByOpportunityId?opportunityId=' + opportunityId, documentOpportunitie);
  }
  
  updateDocumentOpportunitieByDateModified(dateModified:any, documentOpportunitie:DocumentsOpportunities) {
      return this.http.post(this.basePath + '/updateDocumentOpportunitieByDateModified?dateModified=' + dateModified, documentOpportunitie);
  }
  
  
  findDocumentsDocumentWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findDocumentsDocumentWithDeleted' + '?' + attributes);
  }
  
  findOpportunitiesOpportunityWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOpportunitiesOpportunityWithDeleted' + '?' + attributes);
  }
  
  
  filterDocumentsOpportunitiesByDocument(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterDocumentsOpportunitiesByDocument/' + ids + '?' + attributes);
  }
  
  filterDocumentsOpportunitiesByOpportunity(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterDocumentsOpportunitiesByOpportunity/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
