/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:28 GMT-0400 (Bolivia Time)
 * Time: 2:44:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:28 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:28
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Vcals} from "../models/vcals";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class VcalService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/vcals`;
  dataChange: BehaviorSubject<Vcals[]> = new BehaviorSubject<Vcals[]>([]);
  vcalData: Vcals = new Vcals();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Vcals[] {
    return this.dataChange.value;
  }

  getDataVcals(): void {
    this.getAllVcals().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Vcals[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllVcals(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createVcal(vcal:Vcals) {
    return this.http.post(this.basePath, vcal);
  }
  getVcal(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateVcal(id:any, vcal:Vcals) {
    return this.http.put(this.basePath + '/' + id, vcal);
  }
  deleteVcal(id:any) {
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
  
  findOneByType(type:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByType/' + type + '?' + attributes);
  }
  
  findOneBySource(source:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySource/' + source + '?' + attributes);
  }
  
  findOneByContent(content:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContent/' + content + '?' + attributes);
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
  
  findOneByUserId(userId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserId/' + userId + '?' + attributes);
  }
  
  
  updateVcalById(id:any, vcal:Vcals) {
      return this.http.post(this.basePath + '/updateVcalById?id=' + id, vcal);
  }
  
  updateVcalByDeleted(deleted:any, vcal:Vcals) {
      return this.http.post(this.basePath + '/updateVcalByDeleted?deleted=' + deleted, vcal);
  }
  
  updateVcalByType(type:any, vcal:Vcals) {
      return this.http.post(this.basePath + '/updateVcalByType?type=' + type, vcal);
  }
  
  updateVcalBySource(source:any, vcal:Vcals) {
      return this.http.post(this.basePath + '/updateVcalBySource?source=' + source, vcal);
  }
  
  updateVcalByContent(content:any, vcal:Vcals) {
      return this.http.post(this.basePath + '/updateVcalByContent?content=' + content, vcal);
  }
  
  updateVcalByDateEntered(dateEntered:any, vcal:Vcals) {
      return this.http.post(this.basePath + '/updateVcalByDateEntered?dateEntered=' + dateEntered, vcal);
  }
  
  updateVcalByDateModified(dateModified:any, vcal:Vcals) {
      return this.http.post(this.basePath + '/updateVcalByDateModified?dateModified=' + dateModified, vcal);
  }
  
  updateVcalByUserId(userId:any, vcal:Vcals) {
      return this.http.post(this.basePath + '/updateVcalByUserId?userId=' + userId, vcal);
  }
  
  
  
  //</es-section>
}
