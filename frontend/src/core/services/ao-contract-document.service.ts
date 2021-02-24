/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:32 GMT-0400 (Bolivia Time)
 * Time: 2:41:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:32 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:32
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosContractsDocuments} from "../models/aosContractsDocuments";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoContractDocumentService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-contracts-documents`;
  dataChange: BehaviorSubject<AosContractsDocuments[]> = new BehaviorSubject<AosContractsDocuments[]>([]);
  aoContractDocumentData: AosContractsDocuments = new AosContractsDocuments();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosContractsDocuments[] {
    return this.dataChange.value;
  }

  getDataAosContractsDocuments(): void {
    this.getAllAosContractsDocuments().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosContractsDocuments[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosContractsDocuments(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoContractDocument(aoContractDocument:AosContractsDocuments) {
    return this.http.post(this.basePath, aoContractDocument);
  }
  getAoContractDocument(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoContractDocument(id:any, aoContractDocument:AosContractsDocuments) {
    return this.http.put(this.basePath + '/' + id, aoContractDocument);
  }
  deleteAoContractDocument(id:any) {
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
  
  findOneByAosContractsId(aosContractsId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAosContractsId/' + aosContractsId + '?' + attributes);
  }
  
  findOneByDocumentsId(documentsId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDocumentsId/' + documentsId + '?' + attributes);
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
  
  
  updateAoContractDocumentById(id:any, aoContractDocument:AosContractsDocuments) {
      return this.http.post(this.basePath + '/updateAoContractDocumentById?id=' + id, aoContractDocument);
  }
  
  updateAoContractDocumentByDeleted(deleted:any, aoContractDocument:AosContractsDocuments) {
      return this.http.post(this.basePath + '/updateAoContractDocumentByDeleted?deleted=' + deleted, aoContractDocument);
  }
  
  updateAoContractDocumentByAosContractsId(aosContractsId:any, aoContractDocument:AosContractsDocuments) {
      return this.http.post(this.basePath + '/updateAoContractDocumentByAosContractsId?aosContractsId=' + aosContractsId, aoContractDocument);
  }
  
  updateAoContractDocumentByDocumentsId(documentsId:any, aoContractDocument:AosContractsDocuments) {
      return this.http.post(this.basePath + '/updateAoContractDocumentByDocumentsId?documentsId=' + documentsId, aoContractDocument);
  }
  
  updateAoContractDocumentByDocumentRevisionId(documentRevisionId:any, aoContractDocument:AosContractsDocuments) {
      return this.http.post(this.basePath + '/updateAoContractDocumentByDocumentRevisionId?documentRevisionId=' + documentRevisionId, aoContractDocument);
  }
  
  updateAoContractDocumentByDateModified(dateModified:any, aoContractDocument:AosContractsDocuments) {
      return this.http.post(this.basePath + '/updateAoContractDocumentByDateModified?dateModified=' + dateModified, aoContractDocument);
  }
  
  
  
  //</es-section>
}
