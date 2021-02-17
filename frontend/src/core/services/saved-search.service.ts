/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:02 GMT-0400 (Bolivia Time)
 * Time: 2:44:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:02 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:2
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SavedSearch} from "../models/savedSearch";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SavedSearchService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/saved-search`;
  dataChange: BehaviorSubject<SavedSearch[]> = new BehaviorSubject<SavedSearch[]>([]);
  savedSearchData: SavedSearch = new SavedSearch();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): SavedSearch[] {
    return this.dataChange.value;
  }

  getDataSavedSearch(): void {
    this.getAllSavedSearch().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SavedSearch[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSavedSearch(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSavedSearch(savedSearch:SavedSearch) {
    return this.http.post(this.basePath, savedSearch);
  }
  getSavedSearch(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSavedSearch(id:any, savedSearch:SavedSearch) {
    return this.http.put(this.basePath + '/' + id, savedSearch);
  }
  deleteSavedSearch(id:any) {
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
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneBySearchModule(searchModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySearchModule/' + searchModule + '?' + attributes);
  }
  
  findOneByContents(contents:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContents/' + contents + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
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
  
  
  updateSavedSearchById(id:any, savedSearch:SavedSearch) {
      return this.http.post(this.basePath + '/updateSavedSearchById?id=' + id, savedSearch);
  }
  
  updateSavedSearchByDeleted(deleted:any, savedSearch:SavedSearch) {
      return this.http.post(this.basePath + '/updateSavedSearchByDeleted?deleted=' + deleted, savedSearch);
  }
  
  updateSavedSearchByName(name:any, savedSearch:SavedSearch) {
      return this.http.post(this.basePath + '/updateSavedSearchByName?name=' + name, savedSearch);
  }
  
  updateSavedSearchBySearchModule(searchModule:any, savedSearch:SavedSearch) {
      return this.http.post(this.basePath + '/updateSavedSearchBySearchModule?searchModule=' + searchModule, savedSearch);
  }
  
  updateSavedSearchByContents(contents:any, savedSearch:SavedSearch) {
      return this.http.post(this.basePath + '/updateSavedSearchByContents?contents=' + contents, savedSearch);
  }
  
  updateSavedSearchByDescription(description:any, savedSearch:SavedSearch) {
      return this.http.post(this.basePath + '/updateSavedSearchByDescription?description=' + description, savedSearch);
  }
  
  updateSavedSearchByDateEntered(dateEntered:any, savedSearch:SavedSearch) {
      return this.http.post(this.basePath + '/updateSavedSearchByDateEntered?dateEntered=' + dateEntered, savedSearch);
  }
  
  updateSavedSearchByDateModified(dateModified:any, savedSearch:SavedSearch) {
      return this.http.post(this.basePath + '/updateSavedSearchByDateModified?dateModified=' + dateModified, savedSearch);
  }
  
  updateSavedSearchByAssignedUserId(assignedUserId:any, savedSearch:SavedSearch) {
      return this.http.post(this.basePath + '/updateSavedSearchByAssignedUserId?assignedUserId=' + assignedUserId, savedSearch);
  }
  
  
  
  //</es-section>
}
