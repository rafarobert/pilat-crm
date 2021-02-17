/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:27 GMT-0400 (Bolivia Time)
 * Time: 2:44:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:27 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:27
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {UsersSignatures} from "../models/usersSignatures";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class UserSignatureService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/users-signatures`;
  dataChange: BehaviorSubject<UsersSignatures[]> = new BehaviorSubject<UsersSignatures[]>([]);
  userSignatureData: UsersSignatures = new UsersSignatures();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): UsersSignatures[] {
    return this.dataChange.value;
  }

  getDataUsersSignatures(): void {
    this.getAllUsersSignatures().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:UsersSignatures[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllUsersSignatures(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createUserSignature(userSignature:UsersSignatures) {
    return this.http.post(this.basePath, userSignature);
  }
  getUserSignature(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateUserSignature(id:any, userSignature:UsersSignatures) {
    return this.http.put(this.basePath + '/' + id, userSignature);
  }
  deleteUserSignature(id:any) {
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
  
  findOneByUserId(userId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserId/' + userId + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneBySignature(signature:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySignature/' + signature + '?' + attributes);
  }
  
  findOneBySignatureHtml(signatureHtml:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySignatureHtml/' + signatureHtml + '?' + attributes);
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
  
  
  updateUserSignatureById(id:any, userSignature:UsersSignatures) {
      return this.http.post(this.basePath + '/updateUserSignatureById?id=' + id, userSignature);
  }
  
  updateUserSignatureByDeleted(deleted:any, userSignature:UsersSignatures) {
      return this.http.post(this.basePath + '/updateUserSignatureByDeleted?deleted=' + deleted, userSignature);
  }
  
  updateUserSignatureByUserId(userId:any, userSignature:UsersSignatures) {
      return this.http.post(this.basePath + '/updateUserSignatureByUserId?userId=' + userId, userSignature);
  }
  
  updateUserSignatureByName(name:any, userSignature:UsersSignatures) {
      return this.http.post(this.basePath + '/updateUserSignatureByName?name=' + name, userSignature);
  }
  
  updateUserSignatureBySignature(signature:any, userSignature:UsersSignatures) {
      return this.http.post(this.basePath + '/updateUserSignatureBySignature?signature=' + signature, userSignature);
  }
  
  updateUserSignatureBySignatureHtml(signatureHtml:any, userSignature:UsersSignatures) {
      return this.http.post(this.basePath + '/updateUserSignatureBySignatureHtml?signatureHtml=' + signatureHtml, userSignature);
  }
  
  updateUserSignatureByDateEntered(dateEntered:any, userSignature:UsersSignatures) {
      return this.http.post(this.basePath + '/updateUserSignatureByDateEntered?dateEntered=' + dateEntered, userSignature);
  }
  
  updateUserSignatureByDateModified(dateModified:any, userSignature:UsersSignatures) {
      return this.http.post(this.basePath + '/updateUserSignatureByDateModified?dateModified=' + dateModified, userSignature);
  }
  
  
  
  //</es-section>
}
