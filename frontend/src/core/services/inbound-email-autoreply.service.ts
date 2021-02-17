/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:54 GMT-0400 (Bolivia Time)
 * Time: 2:42:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:54 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {InboundEmailAutoreply} from "../models/inboundEmailAutoreply";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class InboundEmailAutoreplyService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/inbound-email-autoreply`;
  dataChange: BehaviorSubject<InboundEmailAutoreply[]> = new BehaviorSubject<InboundEmailAutoreply[]>([]);
  inboundEmailAutoreplyData: InboundEmailAutoreply = new InboundEmailAutoreply();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): InboundEmailAutoreply[] {
    return this.dataChange.value;
  }

  getDataInboundEmailAutoreply(): void {
    this.getAllInboundEmailAutoreply().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:InboundEmailAutoreply[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllInboundEmailAutoreply(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createInboundEmailAutoreply(inboundEmailAutoreply:InboundEmailAutoreply) {
    return this.http.post(this.basePath, inboundEmailAutoreply);
  }
  getInboundEmailAutoreply(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateInboundEmailAutoreply(id:any, inboundEmailAutoreply:InboundEmailAutoreply) {
    return this.http.put(this.basePath + '/' + id, inboundEmailAutoreply);
  }
  deleteInboundEmailAutoreply(id:any) {
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
  
  findOneByAutorepliedTo(autorepliedTo:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAutorepliedTo/' + autorepliedTo + '?' + attributes);
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
  
  findOneByIeId(ieId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIeId/' + ieId + '?' + attributes);
  }
  
  
  updateInboundEmailAutoreplyById(id:any, inboundEmailAutoreply:InboundEmailAutoreply) {
      return this.http.post(this.basePath + '/updateInboundEmailAutoreplyById?id=' + id, inboundEmailAutoreply);
  }
  
  updateInboundEmailAutoreplyByDeleted(deleted:any, inboundEmailAutoreply:InboundEmailAutoreply) {
      return this.http.post(this.basePath + '/updateInboundEmailAutoreplyByDeleted?deleted=' + deleted, inboundEmailAutoreply);
  }
  
  updateInboundEmailAutoreplyByAutorepliedTo(autorepliedTo:any, inboundEmailAutoreply:InboundEmailAutoreply) {
      return this.http.post(this.basePath + '/updateInboundEmailAutoreplyByAutorepliedTo?autorepliedTo=' + autorepliedTo, inboundEmailAutoreply);
  }
  
  updateInboundEmailAutoreplyByDateEntered(dateEntered:any, inboundEmailAutoreply:InboundEmailAutoreply) {
      return this.http.post(this.basePath + '/updateInboundEmailAutoreplyByDateEntered?dateEntered=' + dateEntered, inboundEmailAutoreply);
  }
  
  updateInboundEmailAutoreplyByDateModified(dateModified:any, inboundEmailAutoreply:InboundEmailAutoreply) {
      return this.http.post(this.basePath + '/updateInboundEmailAutoreplyByDateModified?dateModified=' + dateModified, inboundEmailAutoreply);
  }
  
  updateInboundEmailAutoreplyByIeId(ieId:any, inboundEmailAutoreply:InboundEmailAutoreply) {
      return this.http.post(this.basePath + '/updateInboundEmailAutoreplyByIeId?ieId=' + ieId, inboundEmailAutoreply);
  }
  
  
  
  //</es-section>
}
