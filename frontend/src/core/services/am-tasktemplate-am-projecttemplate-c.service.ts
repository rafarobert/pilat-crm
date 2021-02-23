/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:05 GMT-0400 (Bolivia Time)
 * Time: 2:41:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AmTasktemplatesAmProjecttemplatesC} from "../models/amTasktemplatesAmProjecttemplatesC";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AmTasktemplateAmProjecttemplateCService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/am-tasktemplates-am-projecttemplates-c`;
  dataChange: BehaviorSubject<AmTasktemplatesAmProjecttemplatesC[]> = new BehaviorSubject<AmTasktemplatesAmProjecttemplatesC[]>([]);
  amTasktemplateAmProjecttemplateCData: AmTasktemplatesAmProjecttemplatesC = new AmTasktemplatesAmProjecttemplatesC();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AmTasktemplatesAmProjecttemplatesC[] {
    return this.dataChange.value;
  }

  getDataAmTasktemplatesAmProjecttemplatesC(): void {
    this.getAllAmTasktemplatesAmProjecttemplatesC().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AmTasktemplatesAmProjecttemplatesC[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAmTasktemplatesAmProjecttemplatesC(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAmTasktemplateAmProjecttemplateC(amTasktemplateAmProjecttemplateC:AmTasktemplatesAmProjecttemplatesC) {
    return this.http.post(this.basePath, amTasktemplateAmProjecttemplateC);
  }
  getAmTasktemplateAmProjecttemplateC(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAmTasktemplateAmProjecttemplateC(id:any, amTasktemplateAmProjecttemplateC:AmTasktemplatesAmProjecttemplatesC) {
    return this.http.put(this.basePath + '/' + id, amTasktemplateAmProjecttemplateC);
  }
  deleteAmTasktemplateAmProjecttemplateC(id:any) {
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
  
  findOneByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda(amTasktemplatesAmProjecttemplatesamProjecttemplatesIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda/' + amTasktemplatesAmProjecttemplatesamProjecttemplatesIda + '?' + attributes);
  }
  
  findOneByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb(amTasktemplatesAmProjecttemplatesamTasktemplatesIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb/' + amTasktemplatesAmProjecttemplatesamTasktemplatesIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateAmTasktemplateAmProjecttemplateCById(id:any, amTasktemplateAmProjecttemplateC:AmTasktemplatesAmProjecttemplatesC) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAmProjecttemplateCById?id=' + id, amTasktemplateAmProjecttemplateC);
  }
  
  updateAmTasktemplateAmProjecttemplateCByDeleted(deleted:any, amTasktemplateAmProjecttemplateC:AmTasktemplatesAmProjecttemplatesC) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAmProjecttemplateCByDeleted?deleted=' + deleted, amTasktemplateAmProjecttemplateC);
  }
  
  updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda(amTasktemplatesAmProjecttemplatesamProjecttemplatesIda:any, amTasktemplateAmProjecttemplateC:AmTasktemplatesAmProjecttemplatesC) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamProjecttemplatesIda?amTasktemplatesAmProjecttemplatesamProjecttemplatesIda=' + amTasktemplatesAmProjecttemplatesamProjecttemplatesIda, amTasktemplateAmProjecttemplateC);
  }
  
  updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb(amTasktemplatesAmProjecttemplatesamTasktemplatesIdb:any, amTasktemplateAmProjecttemplateC:AmTasktemplatesAmProjecttemplatesC) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAmProjecttemplateCByAmTasktemplatesAmProjecttemplatesamTasktemplatesIdb?amTasktemplatesAmProjecttemplatesamTasktemplatesIdb=' + amTasktemplatesAmProjecttemplatesamTasktemplatesIdb, amTasktemplateAmProjecttemplateC);
  }
  
  updateAmTasktemplateAmProjecttemplateCByDateModified(dateModified:any, amTasktemplateAmProjecttemplateC:AmTasktemplatesAmProjecttemplatesC) {
      return this.http.post(this.basePath + '/updateAmTasktemplateAmProjecttemplateCByDateModified?dateModified=' + dateModified, amTasktemplateAmProjecttemplateC);
  }
  
  
  
  //</es-section>
}
