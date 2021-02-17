/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:24 GMT-0400 (Bolivia Time)
 * Time: 2:44:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:24 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:24
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {UsersCstm} from "../models/usersCstm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class UserCstmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/users-cstm`;
  dataChange: BehaviorSubject<UsersCstm[]> = new BehaviorSubject<UsersCstm[]>([]);
  userCstmData: UsersCstm = new UsersCstm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): UsersCstm[] {
    return this.dataChange.value;
  }

  getDataUsersCstm(): void {
    this.getAllUsersCstm().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:UsersCstm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllUsersCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createUserCstm(userCstm:UsersCstm) {
    return this.http.post(this.basePath, userCstm);
  }
  getUserCstm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateUserCstm(id:any, userCstm:UsersCstm) {
    return this.http.put(this.basePath + '/' + id, userCstm);
  }
  deleteUserCstm(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByIdC(idC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIdC/' + idC + '?' + attributes);
  }
  
  findOneByCodigoAgendaC(codigoAgendaC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCodigoAgendaC/' + codigoAgendaC + '?' + attributes);
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
  
  
  updateUserCstmByIdC(idC:any, userCstm:UsersCstm) {
      return this.http.post(this.basePath + '/updateUserCstmByIdC?idC=' + idC, userCstm);
  }
  
  updateUserCstmByCodigoAgendaC(codigoAgendaC:any, userCstm:UsersCstm) {
      return this.http.post(this.basePath + '/updateUserCstmByCodigoAgendaC?codigoAgendaC=' + codigoAgendaC, userCstm);
  }
  
  updateUserCstmByNumeroDocumentoC(numeroDocumentoC:any, userCstm:UsersCstm) {
      return this.http.post(this.basePath + '/updateUserCstmByNumeroDocumentoC?numeroDocumentoC=' + numeroDocumentoC, userCstm);
  }
  
  updateUserCstmByExtensionDocumentoC(extensionDocumentoC:any, userCstm:UsersCstm) {
      return this.http.post(this.basePath + '/updateUserCstmByExtensionDocumentoC?extensionDocumentoC=' + extensionDocumentoC, userCstm);
  }
  
  
  
  //</es-section>
}
