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
import {UserPreferences} from "../models/userPreferences";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class UserPreferenceService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/user-preferences`;
  dataChange: BehaviorSubject<UserPreferences[]> = new BehaviorSubject<UserPreferences[]>([]);
  userPreferenceData: UserPreferences = new UserPreferences();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): UserPreferences[] {
    return this.dataChange.value;
  }

  getDataUserPreferences(): void {
    this.getAllUserPreferences().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:UserPreferences[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllUserPreferences(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createUserPreference(userPreference:UserPreferences) {
    return this.http.post(this.basePath, userPreference);
  }
  getUserPreference(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateUserPreference(id:any, userPreference:UserPreferences) {
    return this.http.put(this.basePath + '/' + id, userPreference);
  }
  deleteUserPreference(id:any) {
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
  
  findOneByCategory(category:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCategory/' + category + '?' + attributes);
  }
  
  findOneByContents(contents:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContents/' + contents + '?' + attributes);
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
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  
  updateUserPreferenceById(id:any, userPreference:UserPreferences) {
      return this.http.post(this.basePath + '/updateUserPreferenceById?id=' + id, userPreference);
  }
  
  updateUserPreferenceByDeleted(deleted:any, userPreference:UserPreferences) {
      return this.http.post(this.basePath + '/updateUserPreferenceByDeleted?deleted=' + deleted, userPreference);
  }
  
  updateUserPreferenceByCategory(category:any, userPreference:UserPreferences) {
      return this.http.post(this.basePath + '/updateUserPreferenceByCategory?category=' + category, userPreference);
  }
  
  updateUserPreferenceByContents(contents:any, userPreference:UserPreferences) {
      return this.http.post(this.basePath + '/updateUserPreferenceByContents?contents=' + contents, userPreference);
  }
  
  updateUserPreferenceByDateEntered(dateEntered:any, userPreference:UserPreferences) {
      return this.http.post(this.basePath + '/updateUserPreferenceByDateEntered?dateEntered=' + dateEntered, userPreference);
  }
  
  updateUserPreferenceByDateModified(dateModified:any, userPreference:UserPreferences) {
      return this.http.post(this.basePath + '/updateUserPreferenceByDateModified?dateModified=' + dateModified, userPreference);
  }
  
  updateUserPreferenceByAssignedUserId(assignedUserId:any, userPreference:UserPreferences) {
      return this.http.post(this.basePath + '/updateUserPreferenceByAssignedUserId?assignedUserId=' + assignedUserId, userPreference);
  }
  
  
  
  //</es-section>
}
