/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:02 GMT-0400 (Bolivia Time)
 * Time: 2:42:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:02 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:2
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {CallsCstm} from "../models/callsCstm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CallCstmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/calls-cstm`;
  dataChange: BehaviorSubject<CallsCstm[]> = new BehaviorSubject<CallsCstm[]>([]);
  callCstmData: CallsCstm = new CallsCstm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CallsCstm[] {
    return this.dataChange.value;
  }

  getDataCallsCstm(): void {
    this.getAllCallsCstm().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CallsCstm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCallsCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCallCstm(callCstm:CallsCstm) {
    return this.http.post(this.basePath, callCstm);
  }
  getCallCstm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCallCstm(id:any, callCstm:CallsCstm) {
    return this.http.put(this.basePath + '/' + id, callCstm);
  }
  deleteCallCstm(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByIdC(idC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIdC/' + idC + '?' + attributes);
  }
  
  findOneByLlamadaRealizadaC(llamadaRealizadaC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLlamadaRealizadaC/' + llamadaRealizadaC + '?' + attributes);
  }
  
  findOneByMessageIdC(messageIdC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMessageIdC/' + messageIdC + '?' + attributes);
  }
  
  findOneByLlamadaFechaC(llamadaFechaC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLlamadaFechaC/' + llamadaFechaC + '?' + attributes);
  }
  
  
  updateCallCstmByIdC(idC:any, callCstm:CallsCstm) {
      return this.http.post(this.basePath + '/updateCallCstmByIdC?idC=' + idC, callCstm);
  }
  
  updateCallCstmByLlamadaRealizadaC(llamadaRealizadaC:any, callCstm:CallsCstm) {
      return this.http.post(this.basePath + '/updateCallCstmByLlamadaRealizadaC?llamadaRealizadaC=' + llamadaRealizadaC, callCstm);
  }
  
  updateCallCstmByMessageIdC(messageIdC:any, callCstm:CallsCstm) {
      return this.http.post(this.basePath + '/updateCallCstmByMessageIdC?messageIdC=' + messageIdC, callCstm);
  }
  
  updateCallCstmByLlamadaFechaC(llamadaFechaC:any, callCstm:CallsCstm) {
      return this.http.post(this.basePath + '/updateCallCstmByLlamadaFechaC?llamadaFechaC=' + llamadaFechaC, callCstm);
  }
  
  
  
  //</es-section>
}
