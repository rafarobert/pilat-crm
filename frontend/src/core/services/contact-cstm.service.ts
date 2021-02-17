/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:19 GMT-0400 (Bolivia Time)
 * Time: 2:42:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:19 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:19
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ContactsCstm} from "../models/contactsCstm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ContactCstmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/contacts-cstm`;
  dataChange: BehaviorSubject<ContactsCstm[]> = new BehaviorSubject<ContactsCstm[]>([]);
  contactCstmData: ContactsCstm = new ContactsCstm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ContactsCstm[] {
    return this.dataChange.value;
  }

  getDataContactsCstm(): void {
    this.getAllContactsCstm().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ContactsCstm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllContactsCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createContactCstm(contactCstm:ContactsCstm) {
    return this.http.post(this.basePath, contactCstm);
  }
  getContactCstm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateContactCstm(id:any, contactCstm:ContactsCstm) {
    return this.http.put(this.basePath + '/' + id, contactCstm);
  }
  deleteContactCstm(id:any) {
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
  
  
  updateContactCstmByIdC(idC:any, contactCstm:ContactsCstm) {
      return this.http.post(this.basePath + '/updateContactCstmByIdC?idC=' + idC, contactCstm);
  }
  
  updateContactCstmByJjwgMapsLngC(jjwgMapsLngC:any, contactCstm:ContactsCstm) {
      return this.http.post(this.basePath + '/updateContactCstmByJjwgMapsLngC?jjwgMapsLngC=' + jjwgMapsLngC, contactCstm);
  }
  
  updateContactCstmByJjwgMapsLatC(jjwgMapsLatC:any, contactCstm:ContactsCstm) {
      return this.http.post(this.basePath + '/updateContactCstmByJjwgMapsLatC?jjwgMapsLatC=' + jjwgMapsLatC, contactCstm);
  }
  
  updateContactCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC:any, contactCstm:ContactsCstm) {
      return this.http.post(this.basePath + '/updateContactCstmByJjwgMapsGeocodeStatusC?jjwgMapsGeocodeStatusC=' + jjwgMapsGeocodeStatusC, contactCstm);
  }
  
  updateContactCstmByJjwgMapsAddressC(jjwgMapsAddressC:any, contactCstm:ContactsCstm) {
      return this.http.post(this.basePath + '/updateContactCstmByJjwgMapsAddressC?jjwgMapsAddressC=' + jjwgMapsAddressC, contactCstm);
  }
  
  
  
  //</es-section>
}
