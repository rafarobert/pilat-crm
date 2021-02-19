/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:50 GMT-0400 (Bolivia Time)
 * Time: 2:40:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:50 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:50
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AccountsCstm} from "../models/accountsCstm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AccountCstmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/accounts-cstm`;
  dataChange: BehaviorSubject<AccountsCstm[]> = new BehaviorSubject<AccountsCstm[]>([]);
  accountCstmData: AccountsCstm = new AccountsCstm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AccountsCstm[] {
    return this.dataChange.value;
  }

  getDataAccountsCstm(): void {
    this.getAllAccountsCstm().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AccountsCstm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAccountsCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAccountCstm(accountCstm:AccountsCstm) {
    return this.http.post(this.basePath, accountCstm);
  }
  getAccountCstm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAccountCstm(id:any, accountCstm:AccountsCstm) {
    return this.http.put(this.basePath + '/' + id, accountCstm);
  }
  deleteAccountCstm(id:any) {
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
  
  findOneByNumeroDocumentoC(numeroDocumentoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNumeroDocumentoC/' + numeroDocumentoC + '?' + attributes);
  }
  
  findOneByExtensionDocumentoC(extensionDocumentoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExtensionDocumentoC/' + extensionDocumentoC + '?' + attributes);
  }
  
  
  updateAccountCstmByIdC(idC:any, accountCstm:AccountsCstm) {
      return this.http.post(this.basePath + '/updateAccountCstmByIdC?idC=' + idC, accountCstm);
  }
  
  updateAccountCstmByJjwgMapsLngC(jjwgMapsLngC:any, accountCstm:AccountsCstm) {
      return this.http.post(this.basePath + '/updateAccountCstmByJjwgMapsLngC?jjwgMapsLngC=' + jjwgMapsLngC, accountCstm);
  }
  
  updateAccountCstmByJjwgMapsLatC(jjwgMapsLatC:any, accountCstm:AccountsCstm) {
      return this.http.post(this.basePath + '/updateAccountCstmByJjwgMapsLatC?jjwgMapsLatC=' + jjwgMapsLatC, accountCstm);
  }
  
  updateAccountCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC:any, accountCstm:AccountsCstm) {
      return this.http.post(this.basePath + '/updateAccountCstmByJjwgMapsGeocodeStatusC?jjwgMapsGeocodeStatusC=' + jjwgMapsGeocodeStatusC, accountCstm);
  }
  
  updateAccountCstmByJjwgMapsAddressC(jjwgMapsAddressC:any, accountCstm:AccountsCstm) {
      return this.http.post(this.basePath + '/updateAccountCstmByJjwgMapsAddressC?jjwgMapsAddressC=' + jjwgMapsAddressC, accountCstm);
  }
  
  updateAccountCstmByNumeroDocumentoC(numeroDocumentoC:any, accountCstm:AccountsCstm) {
      return this.http.post(this.basePath + '/updateAccountCstmByNumeroDocumentoC?numeroDocumentoC=' + numeroDocumentoC, accountCstm);
  }
  
  updateAccountCstmByExtensionDocumentoC(extensionDocumentoC:any, accountCstm:AccountsCstm) {
      return this.http.post(this.basePath + '/updateAccountCstmByExtensionDocumentoC?extensionDocumentoC=' + extensionDocumentoC, accountCstm);
  }
  
  
  
  //</es-section>
}
