/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:52 GMT-0400 (Bolivia Time)
 * Time: 2:42:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:52 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:52
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ImportMaps} from "../models/importMaps";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ImportMapService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/import-maps`;
  dataChange: BehaviorSubject<ImportMaps[]> = new BehaviorSubject<ImportMaps[]>([]);
  importMapData: ImportMaps = new ImportMaps();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ImportMaps[] {
    return this.dataChange.value;
  }

  getDataImportMaps(): void {
    this.getAllImportMaps().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ImportMaps[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllImportMaps(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createImportMap(importMap:ImportMaps) {
    return this.http.post(this.basePath, importMap);
  }
  getImportMap(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateImportMap(id:any, importMap:ImportMaps) {
    return this.http.put(this.basePath + '/' + id, importMap);
  }
  deleteImportMap(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByHasHeader(hasHeader:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByHasHeader/' + hasHeader + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneBySource(source:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySource/' + source + '?' + attributes);
  }
  
  findOneByEnclosure(enclosure:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEnclosure/' + enclosure + '?' + attributes);
  }
  
  findOneByDelimiter(delimiter:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDelimiter/' + delimiter + '?' + attributes);
  }
  
  findOneByModule(module:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModule/' + module + '?' + attributes);
  }
  
  findOneByIsPublished(isPublished:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIsPublished/' + isPublished + '?' + attributes);
  }
  
  findOneByContent(content:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContent/' + content + '?' + attributes);
  }
  
  findOneByDefaultValues(defaultValues:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDefaultValues/' + defaultValues + '?' + attributes);
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
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  
  updateImportMapById(id:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapById?id=' + id, importMap);
  }
  
  updateImportMapByHasHeader(hasHeader:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapByHasHeader?hasHeader=' + hasHeader, importMap);
  }
  
  updateImportMapByDeleted(deleted:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapByDeleted?deleted=' + deleted, importMap);
  }
  
  updateImportMapByName(name:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapByName?name=' + name, importMap);
  }
  
  updateImportMapBySource(source:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapBySource?source=' + source, importMap);
  }
  
  updateImportMapByEnclosure(enclosure:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapByEnclosure?enclosure=' + enclosure, importMap);
  }
  
  updateImportMapByDelimiter(delimiter:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapByDelimiter?delimiter=' + delimiter, importMap);
  }
  
  updateImportMapByModule(module:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapByModule?module=' + module, importMap);
  }
  
  updateImportMapByIsPublished(isPublished:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapByIsPublished?isPublished=' + isPublished, importMap);
  }
  
  updateImportMapByContent(content:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapByContent?content=' + content, importMap);
  }
  
  updateImportMapByDefaultValues(defaultValues:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapByDefaultValues?defaultValues=' + defaultValues, importMap);
  }
  
  updateImportMapByDateEntered(dateEntered:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapByDateEntered?dateEntered=' + dateEntered, importMap);
  }
  
  updateImportMapByDateModified(dateModified:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapByDateModified?dateModified=' + dateModified, importMap);
  }
  
  updateImportMapByAssignedUserId(assignedUserId:any, importMap:ImportMaps) {
      return this.http.post(this.basePath + '/updateImportMapByAssignedUserId?assignedUserId=' + assignedUserId, importMap);
  }
  
  
  
  //</es-section>
}
