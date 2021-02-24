/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:26 GMT-0400 (Bolivia Time)
 * Time: 2:44:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:26 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:26
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {UsersPasswordLink} from "../models/usersPasswordLink";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class UserPasswordLinkService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/users-password-link`;
  dataChange: BehaviorSubject<UsersPasswordLink[]> = new BehaviorSubject<UsersPasswordLink[]>([]);
  userPasswordLinkData: UsersPasswordLink = new UsersPasswordLink();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): UsersPasswordLink[] {
    return this.dataChange.value;
  }

  getDataUsersPasswordLink(): void {
    this.getAllUsersPasswordLink().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:UsersPasswordLink[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllUsersPasswordLink(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createUserPasswordLink(userPasswordLink:UsersPasswordLink) {
    return this.http.post(this.basePath, userPasswordLink);
  }
  getUserPasswordLink(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateUserPasswordLink(id:any, userPasswordLink:UsersPasswordLink) {
    return this.http.put(this.basePath + '/' + id, userPasswordLink);
  }
  deleteUserPasswordLink(id:any) {
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
  
  findOneByUsername(username:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUsername/' + username + '?' + attributes);
  }
  
  findOneByDateGenerated(dateGenerated:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateGenerated/' + dateGenerated + '?' + attributes);
  }
  
  
  updateUserPasswordLinkById(id:any, userPasswordLink:UsersPasswordLink) {
      return this.http.post(this.basePath + '/updateUserPasswordLinkById?id=' + id, userPasswordLink);
  }
  
  updateUserPasswordLinkByDeleted(deleted:any, userPasswordLink:UsersPasswordLink) {
      return this.http.post(this.basePath + '/updateUserPasswordLinkByDeleted?deleted=' + deleted, userPasswordLink);
  }
  
  updateUserPasswordLinkByUsername(username:any, userPasswordLink:UsersPasswordLink) {
      return this.http.post(this.basePath + '/updateUserPasswordLinkByUsername?username=' + username, userPasswordLink);
  }
  
  updateUserPasswordLinkByDateGenerated(dateGenerated:any, userPasswordLink:UsersPasswordLink) {
      return this.http.post(this.basePath + '/updateUserPasswordLinkByDateGenerated?dateGenerated=' + dateGenerated, userPasswordLink);
  }
  
  
  
  //</es-section>
}
