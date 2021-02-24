/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:46 GMT-0400 (Bolivia Time)
 * Time: 2:42:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:46 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:46
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {FpEventsFpEventDelegates1C} from "../models/fpEventsFpEventDelegates1C";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FpEventFpEventDelegate1CService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/fp-events-fp-event-delegates-1-c`;
  dataChange: BehaviorSubject<FpEventsFpEventDelegates1C[]> = new BehaviorSubject<FpEventsFpEventDelegates1C[]>([]);
  fpEventFpEventDelegate1CData: FpEventsFpEventDelegates1C = new FpEventsFpEventDelegates1C();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): FpEventsFpEventDelegates1C[] {
    return this.dataChange.value;
  }

  getDataFpEventsFpEventDelegates1C(): void {
    this.getAllFpEventsFpEventDelegates1C().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:FpEventsFpEventDelegates1C[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFpEventsFpEventDelegates1C(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFpEventFpEventDelegate1C(fpEventFpEventDelegate1C:FpEventsFpEventDelegates1C) {
    return this.http.post(this.basePath, fpEventFpEventDelegate1C);
  }
  getFpEventFpEventDelegate1C(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFpEventFpEventDelegate1C(id:any, fpEventFpEventDelegate1C:FpEventsFpEventDelegates1C) {
    return this.http.put(this.basePath + '/' + id, fpEventFpEventDelegate1C);
  }
  deleteFpEventFpEventDelegate1C(id:any) {
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
  
  findOneByFpEventsFpEventDelegates1fpEventsIda(fpEventsFpEventDelegates1fpEventsIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFpEventsFpEventDelegates1fpEventsIda/' + fpEventsFpEventDelegates1fpEventsIda + '?' + attributes);
  }
  
  findOneByFpEventsFpEventDelegates1fpEventDelegatesIdb(fpEventsFpEventDelegates1fpEventDelegatesIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFpEventsFpEventDelegates1fpEventDelegatesIdb/' + fpEventsFpEventDelegates1fpEventDelegatesIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateFpEventFpEventDelegate1CById(id:any, fpEventFpEventDelegate1C:FpEventsFpEventDelegates1C) {
      return this.http.post(this.basePath + '/updateFpEventFpEventDelegate1CById?id=' + id, fpEventFpEventDelegate1C);
  }
  
  updateFpEventFpEventDelegate1CByDeleted(deleted:any, fpEventFpEventDelegate1C:FpEventsFpEventDelegates1C) {
      return this.http.post(this.basePath + '/updateFpEventFpEventDelegate1CByDeleted?deleted=' + deleted, fpEventFpEventDelegate1C);
  }
  
  updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventsIda(fpEventsFpEventDelegates1fpEventsIda:any, fpEventFpEventDelegate1C:FpEventsFpEventDelegates1C) {
      return this.http.post(this.basePath + '/updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventsIda?fpEventsFpEventDelegates1fpEventsIda=' + fpEventsFpEventDelegates1fpEventsIda, fpEventFpEventDelegate1C);
  }
  
  updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventDelegatesIdb(fpEventsFpEventDelegates1fpEventDelegatesIdb:any, fpEventFpEventDelegate1C:FpEventsFpEventDelegates1C) {
      return this.http.post(this.basePath + '/updateFpEventFpEventDelegate1CByFpEventsFpEventDelegates1fpEventDelegatesIdb?fpEventsFpEventDelegates1fpEventDelegatesIdb=' + fpEventsFpEventDelegates1fpEventDelegatesIdb, fpEventFpEventDelegate1C);
  }
  
  updateFpEventFpEventDelegate1CByDateModified(dateModified:any, fpEventFpEventDelegate1C:FpEventsFpEventDelegates1C) {
      return this.http.post(this.basePath + '/updateFpEventFpEventDelegate1CByDateModified?dateModified=' + dateModified, fpEventFpEventDelegate1C);
  }
  
  
  
  //</es-section>
}
