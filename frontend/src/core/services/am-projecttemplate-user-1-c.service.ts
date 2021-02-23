/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:03 GMT-0400 (Bolivia Time)
 * Time: 2:41:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:03 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:3
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AmProjecttemplatesUsers1C} from "../models/amProjecttemplatesUsers1C";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AmProjecttemplateUser1CService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/am-projecttemplates-users-1-c`;
  dataChange: BehaviorSubject<AmProjecttemplatesUsers1C[]> = new BehaviorSubject<AmProjecttemplatesUsers1C[]>([]);
  amProjecttemplateUser1CData: AmProjecttemplatesUsers1C = new AmProjecttemplatesUsers1C();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AmProjecttemplatesUsers1C[] {
    return this.dataChange.value;
  }

  getDataAmProjecttemplatesUsers1C(): void {
    this.getAllAmProjecttemplatesUsers1C().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AmProjecttemplatesUsers1C[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAmProjecttemplatesUsers1C(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAmProjecttemplateUser1C(amProjecttemplateUser1C:AmProjecttemplatesUsers1C) {
    return this.http.post(this.basePath, amProjecttemplateUser1C);
  }
  getAmProjecttemplateUser1C(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAmProjecttemplateUser1C(id:any, amProjecttemplateUser1C:AmProjecttemplatesUsers1C) {
    return this.http.put(this.basePath + '/' + id, amProjecttemplateUser1C);
  }
  deleteAmProjecttemplateUser1C(id:any) {
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
  
  findOneByAmProjecttemplatesIda(amProjecttemplatesIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAmProjecttemplatesIda/' + amProjecttemplatesIda + '?' + attributes);
  }
  
  findOneByUsersIdb(usersIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUsersIdb/' + usersIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateAmProjecttemplateUser1CById(id:any, amProjecttemplateUser1C:AmProjecttemplatesUsers1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateUser1CById?id=' + id, amProjecttemplateUser1C);
  }
  
  updateAmProjecttemplateUser1CByDeleted(deleted:any, amProjecttemplateUser1C:AmProjecttemplatesUsers1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateUser1CByDeleted?deleted=' + deleted, amProjecttemplateUser1C);
  }
  
  updateAmProjecttemplateUser1CByAmProjecttemplatesIda(amProjecttemplatesIda:any, amProjecttemplateUser1C:AmProjecttemplatesUsers1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateUser1CByAmProjecttemplatesIda?amProjecttemplatesIda=' + amProjecttemplatesIda, amProjecttemplateUser1C);
  }
  
  updateAmProjecttemplateUser1CByUsersIdb(usersIdb:any, amProjecttemplateUser1C:AmProjecttemplatesUsers1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateUser1CByUsersIdb?usersIdb=' + usersIdb, amProjecttemplateUser1C);
  }
  
  updateAmProjecttemplateUser1CByDateModified(dateModified:any, amProjecttemplateUser1C:AmProjecttemplatesUsers1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateUser1CByDateModified?dateModified=' + dateModified, amProjecttemplateUser1C);
  }
  
  
  
  //</es-section>
}
