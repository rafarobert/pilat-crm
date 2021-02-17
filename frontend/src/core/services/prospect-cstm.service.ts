/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:51 GMT-0400 (Bolivia Time)
 * Time: 2:43:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:51
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ProspectsCstm} from "../models/prospectsCstm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProspectCstmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/prospects-cstm`;
  dataChange: BehaviorSubject<ProspectsCstm[]> = new BehaviorSubject<ProspectsCstm[]>([]);
  prospectCstmData: ProspectsCstm = new ProspectsCstm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProspectsCstm[] {
    return this.dataChange.value;
  }

  getDataProspectsCstm(): void {
    this.getAllProspectsCstm().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProspectsCstm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProspectsCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProspectCstm(prospectCstm:ProspectsCstm) {
    return this.http.post(this.basePath, prospectCstm);
  }
  getProspectCstm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProspectCstm(id:any, prospectCstm:ProspectsCstm) {
    return this.http.put(this.basePath + '/' + id, prospectCstm);
  }
  deleteProspectCstm(id:any) {
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
  
  
  updateProspectCstmByIdC(idC:any, prospectCstm:ProspectsCstm) {
      return this.http.post(this.basePath + '/updateProspectCstmByIdC?idC=' + idC, prospectCstm);
  }
  
  updateProspectCstmByJjwgMapsLngC(jjwgMapsLngC:any, prospectCstm:ProspectsCstm) {
      return this.http.post(this.basePath + '/updateProspectCstmByJjwgMapsLngC?jjwgMapsLngC=' + jjwgMapsLngC, prospectCstm);
  }
  
  updateProspectCstmByJjwgMapsLatC(jjwgMapsLatC:any, prospectCstm:ProspectsCstm) {
      return this.http.post(this.basePath + '/updateProspectCstmByJjwgMapsLatC?jjwgMapsLatC=' + jjwgMapsLatC, prospectCstm);
  }
  
  updateProspectCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC:any, prospectCstm:ProspectsCstm) {
      return this.http.post(this.basePath + '/updateProspectCstmByJjwgMapsGeocodeStatusC?jjwgMapsGeocodeStatusC=' + jjwgMapsGeocodeStatusC, prospectCstm);
  }
  
  updateProspectCstmByJjwgMapsAddressC(jjwgMapsAddressC:any, prospectCstm:ProspectsCstm) {
      return this.http.post(this.basePath + '/updateProspectCstmByJjwgMapsAddressC?jjwgMapsAddressC=' + jjwgMapsAddressC, prospectCstm);
  }
  
  
  
  //</es-section>
}
