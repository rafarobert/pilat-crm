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
import {FpEventsFpEventLocations1C} from "../models/fpEventsFpEventLocations1C";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FpEventFpEventLocation1CService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/fp-events-fp-event-locations-1-c`;
  dataChange: BehaviorSubject<FpEventsFpEventLocations1C[]> = new BehaviorSubject<FpEventsFpEventLocations1C[]>([]);
  fpEventFpEventLocation1CData: FpEventsFpEventLocations1C = new FpEventsFpEventLocations1C();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): FpEventsFpEventLocations1C[] {
    return this.dataChange.value;
  }

  getDataFpEventsFpEventLocations1C(): void {
    this.getAllFpEventsFpEventLocations1C().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:FpEventsFpEventLocations1C[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFpEventsFpEventLocations1C(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFpEventFpEventLocation1C(fpEventFpEventLocation1C:FpEventsFpEventLocations1C) {
    return this.http.post(this.basePath, fpEventFpEventLocation1C);
  }
  getFpEventFpEventLocation1C(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFpEventFpEventLocation1C(id:any, fpEventFpEventLocation1C:FpEventsFpEventLocations1C) {
    return this.http.put(this.basePath + '/' + id, fpEventFpEventLocation1C);
  }
  deleteFpEventFpEventLocation1C(id:any) {
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
  
  findOneByFpEventsFpEventLocations1fpEventsIda(fpEventsFpEventLocations1fpEventsIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFpEventsFpEventLocations1fpEventsIda/' + fpEventsFpEventLocations1fpEventsIda + '?' + attributes);
  }
  
  findOneByFpEventsFpEventLocations1fpEventLocationsIdb(fpEventsFpEventLocations1fpEventLocationsIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFpEventsFpEventLocations1fpEventLocationsIdb/' + fpEventsFpEventLocations1fpEventLocationsIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateFpEventFpEventLocation1CById(id:any, fpEventFpEventLocation1C:FpEventsFpEventLocations1C) {
      return this.http.post(this.basePath + '/updateFpEventFpEventLocation1CById?id=' + id, fpEventFpEventLocation1C);
  }
  
  updateFpEventFpEventLocation1CByDeleted(deleted:any, fpEventFpEventLocation1C:FpEventsFpEventLocations1C) {
      return this.http.post(this.basePath + '/updateFpEventFpEventLocation1CByDeleted?deleted=' + deleted, fpEventFpEventLocation1C);
  }
  
  updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventsIda(fpEventsFpEventLocations1fpEventsIda:any, fpEventFpEventLocation1C:FpEventsFpEventLocations1C) {
      return this.http.post(this.basePath + '/updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventsIda?fpEventsFpEventLocations1fpEventsIda=' + fpEventsFpEventLocations1fpEventsIda, fpEventFpEventLocation1C);
  }
  
  updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventLocationsIdb(fpEventsFpEventLocations1fpEventLocationsIdb:any, fpEventFpEventLocation1C:FpEventsFpEventLocations1C) {
      return this.http.post(this.basePath + '/updateFpEventFpEventLocation1CByFpEventsFpEventLocations1fpEventLocationsIdb?fpEventsFpEventLocations1fpEventLocationsIdb=' + fpEventsFpEventLocations1fpEventLocationsIdb, fpEventFpEventLocation1C);
  }
  
  updateFpEventFpEventLocation1CByDateModified(dateModified:any, fpEventFpEventLocation1C:FpEventsFpEventLocations1C) {
      return this.http.post(this.basePath + '/updateFpEventFpEventLocation1CByDateModified?dateModified=' + dateModified, fpEventFpEventLocation1C);
  }
  
  
  
  //</es-section>
}
