/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:26 GMT-0400 (Bolivia Time)
 * Time: 2:41:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:26 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:26
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AorFields} from "../models/aorFields";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AorFieldService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aor-fields`;
  dataChange: BehaviorSubject<AorFields[]> = new BehaviorSubject<AorFields[]>([]);
  aorFieldData: AorFields = new AorFields();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AorFields[] {
    return this.dataChange.value;
  }

  getDataAorFields(): void {
    this.getAllAorFields().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AorFields[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAorFields(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAorField(aorField:AorFields) {
    return this.http.post(this.basePath, aorField);
  }
  getAorField(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAorField(id:any, aorField:AorFields) {
    return this.http.put(this.basePath + '/' + id, aorField);
  }
  deleteAorField(id:any) {
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
  
  findOneByDisplay(display:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDisplay/' + display + '?' + attributes);
  }
  
  findOneByLink(link:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLink/' + link + '?' + attributes);
  }
  
  findOneByGroupBy(groupBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGroupBy/' + groupBy + '?' + attributes);
  }
  
  findOneByFieldOrder(fieldOrder:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFieldOrder/' + fieldOrder + '?' + attributes);
  }
  
  findOneByGroupDisplay(groupDisplay:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGroupDisplay/' + groupDisplay + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByField(field:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByField/' + field + '?' + attributes);
  }
  
  findOneByLabel(label:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLabel/' + label + '?' + attributes);
  }
  
  findOneByFieldFunction(fieldFunction:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFieldFunction/' + fieldFunction + '?' + attributes);
  }
  
  findOneBySortBy(sortBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySortBy/' + sortBy + '?' + attributes);
  }
  
  findOneByFormat(format:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFormat/' + format + '?' + attributes);
  }
  
  findOneByTotal(total:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTotal/' + total + '?' + attributes);
  }
  
  findOneBySortOrder(sortOrder:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySortOrder/' + sortOrder + '?' + attributes);
  }
  
  findOneByGroupOrder(groupOrder:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGroupOrder/' + groupOrder + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByModulePath(modulePath:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModulePath/' + modulePath + '?' + attributes);
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
  
  findOneByAorReportId(aorReportId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAorReportId/' + aorReportId + '?' + attributes);
  }
  
  
  updateAorFieldById(id:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldById?id=' + id, aorField);
  }
  
  updateAorFieldByDeleted(deleted:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByDeleted?deleted=' + deleted, aorField);
  }
  
  updateAorFieldByDisplay(display:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByDisplay?display=' + display, aorField);
  }
  
  updateAorFieldByLink(link:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByLink?link=' + link, aorField);
  }
  
  updateAorFieldByGroupBy(groupBy:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByGroupBy?groupBy=' + groupBy, aorField);
  }
  
  updateAorFieldByFieldOrder(fieldOrder:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByFieldOrder?fieldOrder=' + fieldOrder, aorField);
  }
  
  updateAorFieldByGroupDisplay(groupDisplay:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByGroupDisplay?groupDisplay=' + groupDisplay, aorField);
  }
  
  updateAorFieldByName(name:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByName?name=' + name, aorField);
  }
  
  updateAorFieldByField(field:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByField?field=' + field, aorField);
  }
  
  updateAorFieldByLabel(label:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByLabel?label=' + label, aorField);
  }
  
  updateAorFieldByFieldFunction(fieldFunction:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByFieldFunction?fieldFunction=' + fieldFunction, aorField);
  }
  
  updateAorFieldBySortBy(sortBy:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldBySortBy?sortBy=' + sortBy, aorField);
  }
  
  updateAorFieldByFormat(format:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByFormat?format=' + format, aorField);
  }
  
  updateAorFieldByTotal(total:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByTotal?total=' + total, aorField);
  }
  
  updateAorFieldBySortOrder(sortOrder:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldBySortOrder?sortOrder=' + sortOrder, aorField);
  }
  
  updateAorFieldByGroupOrder(groupOrder:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByGroupOrder?groupOrder=' + groupOrder, aorField);
  }
  
  updateAorFieldByDescription(description:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByDescription?description=' + description, aorField);
  }
  
  updateAorFieldByModulePath(modulePath:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByModulePath?modulePath=' + modulePath, aorField);
  }
  
  updateAorFieldByDateEntered(dateEntered:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByDateEntered?dateEntered=' + dateEntered, aorField);
  }
  
  updateAorFieldByDateModified(dateModified:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByDateModified?dateModified=' + dateModified, aorField);
  }
  
  updateAorFieldByModifiedUserId(modifiedUserId:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByModifiedUserId?modifiedUserId=' + modifiedUserId, aorField);
  }
  
  updateAorFieldByCreatedBy(createdBy:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByCreatedBy?createdBy=' + createdBy, aorField);
  }
  
  updateAorFieldByAorReportId(aorReportId:any, aorField:AorFields) {
      return this.http.post(this.basePath + '/updateAorFieldByAorReportId?aorReportId=' + aorReportId, aorField);
  }
  
  
  
  //</es-section>
}
