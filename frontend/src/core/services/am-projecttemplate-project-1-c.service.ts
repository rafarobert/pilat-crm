/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:02 GMT-0400 (Bolivia Time)
 * Time: 2:41:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:02 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:2
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AmProjecttemplatesProject1C} from "../models/amProjecttemplatesProject1C";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AmProjecttemplateProject1CService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/am-projecttemplates-project-1-c`;
  dataChange: BehaviorSubject<AmProjecttemplatesProject1C[]> = new BehaviorSubject<AmProjecttemplatesProject1C[]>([]);
  amProjecttemplateProject1CData: AmProjecttemplatesProject1C = new AmProjecttemplatesProject1C();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AmProjecttemplatesProject1C[] {
    return this.dataChange.value;
  }

  getDataAmProjecttemplatesProject1C(): void {
    this.getAllAmProjecttemplatesProject1C().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AmProjecttemplatesProject1C[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAmProjecttemplatesProject1C(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAmProjecttemplateProject1C(amProjecttemplateProject1C:AmProjecttemplatesProject1C) {
    return this.http.post(this.basePath, amProjecttemplateProject1C);
  }
  getAmProjecttemplateProject1C(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAmProjecttemplateProject1C(id:any, amProjecttemplateProject1C:AmProjecttemplatesProject1C) {
    return this.http.put(this.basePath + '/' + id, amProjecttemplateProject1C);
  }
  deleteAmProjecttemplateProject1C(id:any) {
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
  
  findOneByAmProjecttemplatesProject1amProjecttemplatesIda(amProjecttemplatesProject1amProjecttemplatesIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAmProjecttemplatesProject1amProjecttemplatesIda/' + amProjecttemplatesProject1amProjecttemplatesIda + '?' + attributes);
  }
  
  findOneByAmProjecttemplatesProject1projectIdb(amProjecttemplatesProject1projectIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAmProjecttemplatesProject1projectIdb/' + amProjecttemplatesProject1projectIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateAmProjecttemplateProject1CById(id:any, amProjecttemplateProject1C:AmProjecttemplatesProject1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateProject1CById?id=' + id, amProjecttemplateProject1C);
  }
  
  updateAmProjecttemplateProject1CByDeleted(deleted:any, amProjecttemplateProject1C:AmProjecttemplatesProject1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateProject1CByDeleted?deleted=' + deleted, amProjecttemplateProject1C);
  }
  
  updateAmProjecttemplateProject1CByAmProjecttemplatesProject1amProjecttemplatesIda(amProjecttemplatesProject1amProjecttemplatesIda:any, amProjecttemplateProject1C:AmProjecttemplatesProject1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateProject1CByAmProjecttemplatesProject1amProjecttemplatesIda?amProjecttemplatesProject1amProjecttemplatesIda=' + amProjecttemplatesProject1amProjecttemplatesIda, amProjecttemplateProject1C);
  }
  
  updateAmProjecttemplateProject1CByAmProjecttemplatesProject1projectIdb(amProjecttemplatesProject1projectIdb:any, amProjecttemplateProject1C:AmProjecttemplatesProject1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateProject1CByAmProjecttemplatesProject1projectIdb?amProjecttemplatesProject1projectIdb=' + amProjecttemplatesProject1projectIdb, amProjecttemplateProject1C);
  }
  
  updateAmProjecttemplateProject1CByDateModified(dateModified:any, amProjecttemplateProject1C:AmProjecttemplatesProject1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateProject1CByDateModified?dateModified=' + dateModified, amProjecttemplateProject1C);
  }
  
  
  
  //</es-section>
}
