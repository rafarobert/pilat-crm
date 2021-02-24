/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:20 GMT-0400 (Bolivia Time)
 * Time: 2:42:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:20 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:20
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {CronRemoveDocuments} from "../models/cronRemoveDocuments";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CronRemoveDocumentService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/cron-remove-documents`;
  dataChange: BehaviorSubject<CronRemoveDocuments[]> = new BehaviorSubject<CronRemoveDocuments[]>([]);
  cronRemoveDocumentData: CronRemoveDocuments = new CronRemoveDocuments();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CronRemoveDocuments[] {
    return this.dataChange.value;
  }

  getDataCronRemoveDocuments(): void {
    this.getAllCronRemoveDocuments().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CronRemoveDocuments[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCronRemoveDocuments(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCronRemoveDocument(cronRemoveDocument:CronRemoveDocuments) {
    return this.http.post(this.basePath, cronRemoveDocument);
  }
  getCronRemoveDocument(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCronRemoveDocument(id:any, cronRemoveDocument:CronRemoveDocuments) {
    return this.http.put(this.basePath + '/' + id, cronRemoveDocument);
  }
  deleteCronRemoveDocument(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByBeanId(beanId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeanId/' + beanId + '?' + attributes);
  }
  
  findOneByModule(module:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModule/' + module + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateCronRemoveDocumentById(id:any, cronRemoveDocument:CronRemoveDocuments) {
      return this.http.post(this.basePath + '/updateCronRemoveDocumentById?id=' + id, cronRemoveDocument);
  }
  
  updateCronRemoveDocumentByBeanId(beanId:any, cronRemoveDocument:CronRemoveDocuments) {
      return this.http.post(this.basePath + '/updateCronRemoveDocumentByBeanId?beanId=' + beanId, cronRemoveDocument);
  }
  
  updateCronRemoveDocumentByModule(module:any, cronRemoveDocument:CronRemoveDocuments) {
      return this.http.post(this.basePath + '/updateCronRemoveDocumentByModule?module=' + module, cronRemoveDocument);
  }
  
  updateCronRemoveDocumentByDateModified(dateModified:any, cronRemoveDocument:CronRemoveDocuments) {
      return this.http.post(this.basePath + '/updateCronRemoveDocumentByDateModified?dateModified=' + dateModified, cronRemoveDocument);
  }
  
  
  
  //</es-section>
}
