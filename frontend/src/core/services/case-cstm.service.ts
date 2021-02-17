/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:14 GMT-0400 (Bolivia Time)
 * Time: 2:42:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:14 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {CasesCstm} from "../models/casesCstm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CaseCstmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/cases-cstm`;
  dataChange: BehaviorSubject<CasesCstm[]> = new BehaviorSubject<CasesCstm[]>([]);
  caseCstmData: CasesCstm = new CasesCstm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CasesCstm[] {
    return this.dataChange.value;
  }

  getDataCasesCstm(): void {
    this.getAllCasesCstm().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CasesCstm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCasesCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCaseCstm(caseCstm:CasesCstm) {
    return this.http.post(this.basePath, caseCstm);
  }
  getCaseCstm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCaseCstm(id:any, caseCstm:CasesCstm) {
    return this.http.put(this.basePath + '/' + id, caseCstm);
  }
  deleteCaseCstm(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByIdC(idC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIdC/' + idC + '?' + attributes);
  }
  
  findOneByJjwgMapsLngC(jjwgMapsLngC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsLngC/' + jjwgMapsLngC + '?' + attributes);
  }
  
  findOneByJjwgMapsLatC(jjwgMapsLatC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsLatC/' + jjwgMapsLatC + '?' + attributes);
  }
  
  findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsGeocodeStatusC/' + jjwgMapsGeocodeStatusC + '?' + attributes);
  }
  
  findOneByJjwgMapsAddressC(jjwgMapsAddressC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsAddressC/' + jjwgMapsAddressC + '?' + attributes);
  }
  
  
  updateCaseCstmByIdC(idC:any, caseCstm:CasesCstm) {
      return this.http.post(this.basePath + '/updateCaseCstmByIdC?idC=' + idC, caseCstm);
  }
  
  updateCaseCstmByJjwgMapsLngC(jjwgMapsLngC:any, caseCstm:CasesCstm) {
      return this.http.post(this.basePath + '/updateCaseCstmByJjwgMapsLngC?jjwgMapsLngC=' + jjwgMapsLngC, caseCstm);
  }
  
  updateCaseCstmByJjwgMapsLatC(jjwgMapsLatC:any, caseCstm:CasesCstm) {
      return this.http.post(this.basePath + '/updateCaseCstmByJjwgMapsLatC?jjwgMapsLatC=' + jjwgMapsLatC, caseCstm);
  }
  
  updateCaseCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC:any, caseCstm:CasesCstm) {
      return this.http.post(this.basePath + '/updateCaseCstmByJjwgMapsGeocodeStatusC?jjwgMapsGeocodeStatusC=' + jjwgMapsGeocodeStatusC, caseCstm);
  }
  
  updateCaseCstmByJjwgMapsAddressC(jjwgMapsAddressC:any, caseCstm:CasesCstm) {
      return this.http.post(this.basePath + '/updateCaseCstmByJjwgMapsAddressC?jjwgMapsAddressC=' + jjwgMapsAddressC, caseCstm);
  }
  
  
  
  //</es-section>
}
