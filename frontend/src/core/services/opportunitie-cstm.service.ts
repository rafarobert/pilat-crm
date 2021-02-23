/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:29 GMT-0400 (Bolivia Time)
 * Time: 2:43:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:29 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:29
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {OpportunitiesCstm} from "../models/opportunitiesCstm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class OpportunitieCstmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/opportunities-cstm`;
  dataChange: BehaviorSubject<OpportunitiesCstm[]> = new BehaviorSubject<OpportunitiesCstm[]>([]);
  opportunitieCstmData: OpportunitiesCstm = new OpportunitiesCstm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): OpportunitiesCstm[] {
    return this.dataChange.value;
  }

  getDataOpportunitiesCstm(): void {
    this.getAllOpportunitiesCstm().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:OpportunitiesCstm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllOpportunitiesCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createOpportunitieCstm(opportunitieCstm:OpportunitiesCstm) {
    return this.http.post(this.basePath, opportunitieCstm);
  }
  getOpportunitieCstm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOpportunitieCstm(id:any, opportunitieCstm:OpportunitiesCstm) {
    return this.http.put(this.basePath + '/' + id, opportunitieCstm);
  }
  deleteOpportunitieCstm(id:any) {
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
  
  
  updateOpportunitieCstmByIdC(idC:any, opportunitieCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunitieCstmByIdC?idC=' + idC, opportunitieCstm);
  }
  
  updateOpportunitieCstmByJjwgMapsLngC(jjwgMapsLngC:any, opportunitieCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunitieCstmByJjwgMapsLngC?jjwgMapsLngC=' + jjwgMapsLngC, opportunitieCstm);
  }
  
  updateOpportunitieCstmByJjwgMapsLatC(jjwgMapsLatC:any, opportunitieCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunitieCstmByJjwgMapsLatC?jjwgMapsLatC=' + jjwgMapsLatC, opportunitieCstm);
  }
  
  updateOpportunitieCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC:any, opportunitieCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunitieCstmByJjwgMapsGeocodeStatusC?jjwgMapsGeocodeStatusC=' + jjwgMapsGeocodeStatusC, opportunitieCstm);
  }
  
  updateOpportunitieCstmByJjwgMapsAddressC(jjwgMapsAddressC:any, opportunitieCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunitieCstmByJjwgMapsAddressC?jjwgMapsAddressC=' + jjwgMapsAddressC, opportunitieCstm);
  }
  
  
  findJjwgMapsJjwgMapsGeocodeStatusCWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findJjwgMapsJjwgMapsGeocodeStatusCWithDeleted' + '?' + attributes);
  }
  
  findJjwgMapsJjwgMapsAddressCWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findJjwgMapsJjwgMapsAddressCWithDeleted' + '?' + attributes);
  }
  
  
  filterOpportunitiesCstmByJjwgMapsGeocodeStatusC(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterOpportunitiesCstmByJjwgMapsGeocodeStatusC/' + ids + '?' + attributes);
  }
  
  filterOpportunitiesCstmByJjwgMapsAddressC(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterOpportunitiesCstmByJjwgMapsAddressC/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
