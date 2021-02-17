/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:50 GMT-0400 (Bolivia Time)
 * Time: 2:42:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:50 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:50
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {FpEventLocationsFpEvents1C} from "../models/fpEventLocationsFpEvents1C";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FpEventLocationFpEvent1CService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/fp-event-locations-fp-events-1-c`;
  dataChange: BehaviorSubject<FpEventLocationsFpEvents1C[]> = new BehaviorSubject<FpEventLocationsFpEvents1C[]>([]);
  fpEventLocationFpEvent1CData: FpEventLocationsFpEvents1C = new FpEventLocationsFpEvents1C();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): FpEventLocationsFpEvents1C[] {
    return this.dataChange.value;
  }

  getDataFpEventLocationsFpEvents1C(): void {
    this.getAllFpEventLocationsFpEvents1C().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:FpEventLocationsFpEvents1C[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFpEventLocationsFpEvents1C(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFpEventLocationFpEvent1C(fpEventLocationFpEvent1C:FpEventLocationsFpEvents1C) {
    return this.http.post(this.basePath, fpEventLocationFpEvent1C);
  }
  getFpEventLocationFpEvent1C(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFpEventLocationFpEvent1C(id:any, fpEventLocationFpEvent1C:FpEventLocationsFpEvents1C) {
    return this.http.put(this.basePath + '/' + id, fpEventLocationFpEvent1C);
  }
  deleteFpEventLocationFpEvent1C(id:any) {
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
  
  findOneByFpEventLocationsFpEvents1fpEventLocationsIda(fpEventLocationsFpEvents1fpEventLocationsIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFpEventLocationsFpEvents1fpEventLocationsIda/' + fpEventLocationsFpEvents1fpEventLocationsIda + '?' + attributes);
  }
  
  findOneByFpEventLocationsFpEvents1fpEventsIdb(fpEventLocationsFpEvents1fpEventsIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFpEventLocationsFpEvents1fpEventsIdb/' + fpEventLocationsFpEvents1fpEventsIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateFpEventLocationFpEvent1CById(id:any, fpEventLocationFpEvent1C:FpEventLocationsFpEvents1C) {
      return this.http.post(this.basePath + '/updateFpEventLocationFpEvent1CById?id=' + id, fpEventLocationFpEvent1C);
  }
  
  updateFpEventLocationFpEvent1CByDeleted(deleted:any, fpEventLocationFpEvent1C:FpEventLocationsFpEvents1C) {
      return this.http.post(this.basePath + '/updateFpEventLocationFpEvent1CByDeleted?deleted=' + deleted, fpEventLocationFpEvent1C);
  }
  
  updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventLocationsIda(fpEventLocationsFpEvents1fpEventLocationsIda:any, fpEventLocationFpEvent1C:FpEventLocationsFpEvents1C) {
      return this.http.post(this.basePath + '/updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventLocationsIda?fpEventLocationsFpEvents1fpEventLocationsIda=' + fpEventLocationsFpEvents1fpEventLocationsIda, fpEventLocationFpEvent1C);
  }
  
  updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventsIdb(fpEventLocationsFpEvents1fpEventsIdb:any, fpEventLocationFpEvent1C:FpEventLocationsFpEvents1C) {
      return this.http.post(this.basePath + '/updateFpEventLocationFpEvent1CByFpEventLocationsFpEvents1fpEventsIdb?fpEventLocationsFpEvents1fpEventsIdb=' + fpEventLocationsFpEvents1fpEventsIdb, fpEventLocationFpEvent1C);
  }
  
  updateFpEventLocationFpEvent1CByDateModified(dateModified:any, fpEventLocationFpEvent1C:FpEventLocationsFpEvents1C) {
      return this.http.post(this.basePath + '/updateFpEventLocationFpEvent1CByDateModified?dateModified=' + dateModified, fpEventLocationFpEvent1C);
  }
  
  
  
  //</es-section>
}
