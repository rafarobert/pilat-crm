/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:47 GMT-0400 (Bolivia Time)
 * Time: 2:42:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:47 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:47
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {FpEventsLeads1C} from "../models/fpEventsLeads1C";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FpEventLead1CService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/fp-events-leads-1-c`;
  dataChange: BehaviorSubject<FpEventsLeads1C[]> = new BehaviorSubject<FpEventsLeads1C[]>([]);
  fpEventLead1CData: FpEventsLeads1C = new FpEventsLeads1C();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): FpEventsLeads1C[] {
    return this.dataChange.value;
  }

  getDataFpEventsLeads1C(): void {
    this.getAllFpEventsLeads1C().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:FpEventsLeads1C[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFpEventsLeads1C(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFpEventLead1C(fpEventLead1C:FpEventsLeads1C) {
    return this.http.post(this.basePath, fpEventLead1C);
  }
  getFpEventLead1C(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFpEventLead1C(id:any, fpEventLead1C:FpEventsLeads1C) {
    return this.http.put(this.basePath + '/' + id, fpEventLead1C);
  }
  deleteFpEventLead1C(id:any) {
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
  
  findOneByFpEventsLeads1fpEventsIda(fpEventsLeads1fpEventsIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFpEventsLeads1fpEventsIda/' + fpEventsLeads1fpEventsIda + '?' + attributes);
  }
  
  findOneByFpEventsLeads1leadsIdb(fpEventsLeads1leadsIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFpEventsLeads1leadsIdb/' + fpEventsLeads1leadsIdb + '?' + attributes);
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
  
  
  updateFpEventLead1CById(id:any, fpEventLead1C:FpEventsLeads1C) {
      return this.http.post(this.basePath + '/updateFpEventLead1CById?id=' + id, fpEventLead1C);
  }
  
  updateFpEventLead1CByDeleted(deleted:any, fpEventLead1C:FpEventsLeads1C) {
      return this.http.post(this.basePath + '/updateFpEventLead1CByDeleted?deleted=' + deleted, fpEventLead1C);
  }
  
  updateFpEventLead1CByEmailResponded(emailResponded:any, fpEventLead1C:FpEventsLeads1C) {
      return this.http.post(this.basePath + '/updateFpEventLead1CByEmailResponded?emailResponded=' + emailResponded, fpEventLead1C);
  }
  
  updateFpEventLead1CByFpEventsLeads1fpEventsIda(fpEventsLeads1fpEventsIda:any, fpEventLead1C:FpEventsLeads1C) {
      return this.http.post(this.basePath + '/updateFpEventLead1CByFpEventsLeads1fpEventsIda?fpEventsLeads1fpEventsIda=' + fpEventsLeads1fpEventsIda, fpEventLead1C);
  }
  
  updateFpEventLead1CByFpEventsLeads1leadsIdb(fpEventsLeads1leadsIdb:any, fpEventLead1C:FpEventsLeads1C) {
      return this.http.post(this.basePath + '/updateFpEventLead1CByFpEventsLeads1leadsIdb?fpEventsLeads1leadsIdb=' + fpEventsLeads1leadsIdb, fpEventLead1C);
  }
  
  updateFpEventLead1CByInviteStatus(inviteStatus:any, fpEventLead1C:FpEventsLeads1C) {
      return this.http.post(this.basePath + '/updateFpEventLead1CByInviteStatus?inviteStatus=' + inviteStatus, fpEventLead1C);
  }
  
  updateFpEventLead1CByAcceptStatus(acceptStatus:any, fpEventLead1C:FpEventsLeads1C) {
      return this.http.post(this.basePath + '/updateFpEventLead1CByAcceptStatus?acceptStatus=' + acceptStatus, fpEventLead1C);
  }
  
  updateFpEventLead1CByDateModified(dateModified:any, fpEventLead1C:FpEventsLeads1C) {
      return this.http.post(this.basePath + '/updateFpEventLead1CByDateModified?dateModified=' + dateModified, fpEventLead1C);
  }
  
  
  
  //</es-section>
}
