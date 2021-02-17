/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:48 GMT-0400 (Bolivia Time)
 * Time: 2:42:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:48 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:48
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {FpEventsProspects1C} from "../models/fpEventsProspects1C";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FpEventProspect1CService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/fp-events-prospects-1-c`;
  dataChange: BehaviorSubject<FpEventsProspects1C[]> = new BehaviorSubject<FpEventsProspects1C[]>([]);
  fpEventProspect1CData: FpEventsProspects1C = new FpEventsProspects1C();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): FpEventsProspects1C[] {
    return this.dataChange.value;
  }

  getDataFpEventsProspects1C(): void {
    this.getAllFpEventsProspects1C().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:FpEventsProspects1C[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFpEventsProspects1C(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFpEventProspect1C(fpEventProspect1C:FpEventsProspects1C) {
    return this.http.post(this.basePath, fpEventProspect1C);
  }
  getFpEventProspect1C(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFpEventProspect1C(id:any, fpEventProspect1C:FpEventsProspects1C) {
    return this.http.put(this.basePath + '/' + id, fpEventProspect1C);
  }
  deleteFpEventProspect1C(id:any) {
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
  
  findOneByEmailResponded(emailResponded:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailResponded/' + emailResponded + '?' + attributes);
  }
  
  findOneByFpEventsProspects1fpEventsIda(fpEventsProspects1fpEventsIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFpEventsProspects1fpEventsIda/' + fpEventsProspects1fpEventsIda + '?' + attributes);
  }
  
  findOneByFpEventsProspects1prospectsIdb(fpEventsProspects1prospectsIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFpEventsProspects1prospectsIdb/' + fpEventsProspects1prospectsIdb + '?' + attributes);
  }
  
  findOneByInviteStatus(inviteStatus:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByInviteStatus/' + inviteStatus + '?' + attributes);
  }
  
  findOneByAcceptStatus(acceptStatus:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAcceptStatus/' + acceptStatus + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateFpEventProspect1CById(id:any, fpEventProspect1C:FpEventsProspects1C) {
      return this.http.post(this.basePath + '/updateFpEventProspect1CById?id=' + id, fpEventProspect1C);
  }
  
  updateFpEventProspect1CByDeleted(deleted:any, fpEventProspect1C:FpEventsProspects1C) {
      return this.http.post(this.basePath + '/updateFpEventProspect1CByDeleted?deleted=' + deleted, fpEventProspect1C);
  }
  
  updateFpEventProspect1CByEmailResponded(emailResponded:any, fpEventProspect1C:FpEventsProspects1C) {
      return this.http.post(this.basePath + '/updateFpEventProspect1CByEmailResponded?emailResponded=' + emailResponded, fpEventProspect1C);
  }
  
  updateFpEventProspect1CByFpEventsProspects1fpEventsIda(fpEventsProspects1fpEventsIda:any, fpEventProspect1C:FpEventsProspects1C) {
      return this.http.post(this.basePath + '/updateFpEventProspect1CByFpEventsProspects1fpEventsIda?fpEventsProspects1fpEventsIda=' + fpEventsProspects1fpEventsIda, fpEventProspect1C);
  }
  
  updateFpEventProspect1CByFpEventsProspects1prospectsIdb(fpEventsProspects1prospectsIdb:any, fpEventProspect1C:FpEventsProspects1C) {
      return this.http.post(this.basePath + '/updateFpEventProspect1CByFpEventsProspects1prospectsIdb?fpEventsProspects1prospectsIdb=' + fpEventsProspects1prospectsIdb, fpEventProspect1C);
  }
  
  updateFpEventProspect1CByInviteStatus(inviteStatus:any, fpEventProspect1C:FpEventsProspects1C) {
      return this.http.post(this.basePath + '/updateFpEventProspect1CByInviteStatus?inviteStatus=' + inviteStatus, fpEventProspect1C);
  }
  
  updateFpEventProspect1CByAcceptStatus(acceptStatus:any, fpEventProspect1C:FpEventsProspects1C) {
      return this.http.post(this.basePath + '/updateFpEventProspect1CByAcceptStatus?acceptStatus=' + acceptStatus, fpEventProspect1C);
  }
  
  updateFpEventProspect1CByDateModified(dateModified:any, fpEventProspect1C:FpEventsProspects1C) {
      return this.http.post(this.basePath + '/updateFpEventProspect1CByDateModified?dateModified=' + dateModified, fpEventProspect1C);
  }
  
  
  
  //</es-section>
}
