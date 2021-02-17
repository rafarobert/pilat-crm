/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:45 GMT-0400 (Bolivia Time)
 * Time: 2:42:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:45
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {FpEventsContactsC} from "../models/fpEventsContactsC";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FpEventContactCService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/fp-events-contacts-c`;
  dataChange: BehaviorSubject<FpEventsContactsC[]> = new BehaviorSubject<FpEventsContactsC[]>([]);
  fpEventContactCData: FpEventsContactsC = new FpEventsContactsC();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): FpEventsContactsC[] {
    return this.dataChange.value;
  }

  getDataFpEventsContactsC(): void {
    this.getAllFpEventsContactsC().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:FpEventsContactsC[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFpEventsContactsC(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFpEventContactC(fpEventContactC:FpEventsContactsC) {
    return this.http.post(this.basePath, fpEventContactC);
  }
  getFpEventContactC(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFpEventContactC(id:any, fpEventContactC:FpEventsContactsC) {
    return this.http.put(this.basePath + '/' + id, fpEventContactC);
  }
  deleteFpEventContactC(id:any) {
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
  
  findOneByFpEventsContactsfpEventsIda(fpEventsContactsfpEventsIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFpEventsContactsfpEventsIda/' + fpEventsContactsfpEventsIda + '?' + attributes);
  }
  
  findOneByFpEventsContactscontactsIdb(fpEventsContactscontactsIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFpEventsContactscontactsIdb/' + fpEventsContactscontactsIdb + '?' + attributes);
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
  
  
  updateFpEventContactCById(id:any, fpEventContactC:FpEventsContactsC) {
      return this.http.post(this.basePath + '/updateFpEventContactCById?id=' + id, fpEventContactC);
  }
  
  updateFpEventContactCByDeleted(deleted:any, fpEventContactC:FpEventsContactsC) {
      return this.http.post(this.basePath + '/updateFpEventContactCByDeleted?deleted=' + deleted, fpEventContactC);
  }
  
  updateFpEventContactCByEmailResponded(emailResponded:any, fpEventContactC:FpEventsContactsC) {
      return this.http.post(this.basePath + '/updateFpEventContactCByEmailResponded?emailResponded=' + emailResponded, fpEventContactC);
  }
  
  updateFpEventContactCByFpEventsContactsfpEventsIda(fpEventsContactsfpEventsIda:any, fpEventContactC:FpEventsContactsC) {
      return this.http.post(this.basePath + '/updateFpEventContactCByFpEventsContactsfpEventsIda?fpEventsContactsfpEventsIda=' + fpEventsContactsfpEventsIda, fpEventContactC);
  }
  
  updateFpEventContactCByFpEventsContactscontactsIdb(fpEventsContactscontactsIdb:any, fpEventContactC:FpEventsContactsC) {
      return this.http.post(this.basePath + '/updateFpEventContactCByFpEventsContactscontactsIdb?fpEventsContactscontactsIdb=' + fpEventsContactscontactsIdb, fpEventContactC);
  }
  
  updateFpEventContactCByInviteStatus(inviteStatus:any, fpEventContactC:FpEventsContactsC) {
      return this.http.post(this.basePath + '/updateFpEventContactCByInviteStatus?inviteStatus=' + inviteStatus, fpEventContactC);
  }
  
  updateFpEventContactCByAcceptStatus(acceptStatus:any, fpEventContactC:FpEventsContactsC) {
      return this.http.post(this.basePath + '/updateFpEventContactCByAcceptStatus?acceptStatus=' + acceptStatus, fpEventContactC);
  }
  
  updateFpEventContactCByDateModified(dateModified:any, fpEventContactC:FpEventsContactsC) {
      return this.http.post(this.basePath + '/updateFpEventContactCByDateModified?dateModified=' + dateModified, fpEventContactC);
  }
  
  
  
  //</es-section>
}
