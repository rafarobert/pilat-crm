/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:01 GMT-0400 (Bolivia Time)
 * Time: 2:41:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:01 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:1
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AmProjecttemplatesContacts1C} from "../models/amProjecttemplatesContacts1C";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AmProjecttemplateContact1CService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/am-projecttemplates-contacts-1-c`;
  dataChange: BehaviorSubject<AmProjecttemplatesContacts1C[]> = new BehaviorSubject<AmProjecttemplatesContacts1C[]>([]);
  amProjecttemplateContact1CData: AmProjecttemplatesContacts1C = new AmProjecttemplatesContacts1C();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AmProjecttemplatesContacts1C[] {
    return this.dataChange.value;
  }

  getDataAmProjecttemplatesContacts1C(): void {
    this.getAllAmProjecttemplatesContacts1C().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AmProjecttemplatesContacts1C[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAmProjecttemplatesContacts1C(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAmProjecttemplateContact1C(amProjecttemplateContact1C:AmProjecttemplatesContacts1C) {
    return this.http.post(this.basePath, amProjecttemplateContact1C);
  }
  getAmProjecttemplateContact1C(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAmProjecttemplateContact1C(id:any, amProjecttemplateContact1C:AmProjecttemplatesContacts1C) {
    return this.http.put(this.basePath + '/' + id, amProjecttemplateContact1C);
  }
  deleteAmProjecttemplateContact1C(id:any) {
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
  
  findOneByContactsIdb(contactsIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactsIdb/' + contactsIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateAmProjecttemplateContact1CById(id:any, amProjecttemplateContact1C:AmProjecttemplatesContacts1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateContact1CById?id=' + id, amProjecttemplateContact1C);
  }
  
  updateAmProjecttemplateContact1CByDeleted(deleted:any, amProjecttemplateContact1C:AmProjecttemplatesContacts1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateContact1CByDeleted?deleted=' + deleted, amProjecttemplateContact1C);
  }
  
  updateAmProjecttemplateContact1CByAmProjecttemplatesIda(amProjecttemplatesIda:any, amProjecttemplateContact1C:AmProjecttemplatesContacts1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateContact1CByAmProjecttemplatesIda?amProjecttemplatesIda=' + amProjecttemplatesIda, amProjecttemplateContact1C);
  }
  
  updateAmProjecttemplateContact1CByContactsIdb(contactsIdb:any, amProjecttemplateContact1C:AmProjecttemplatesContacts1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateContact1CByContactsIdb?contactsIdb=' + contactsIdb, amProjecttemplateContact1C);
  }
  
  updateAmProjecttemplateContact1CByDateModified(dateModified:any, amProjecttemplateContact1C:AmProjecttemplatesContacts1C) {
      return this.http.post(this.basePath + '/updateAmProjecttemplateContact1CByDateModified?dateModified=' + dateModified, amProjecttemplateContact1C);
  }
  
  
  
  //</es-section>
}
