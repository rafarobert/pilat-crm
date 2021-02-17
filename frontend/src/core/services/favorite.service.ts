/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:40 GMT-0400 (Bolivia Time)
 * Time: 2:42:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:40 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:40
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Favorites} from "../models/favorites";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/favorites`;
  dataChange: BehaviorSubject<Favorites[]> = new BehaviorSubject<Favorites[]>([]);
  favoriteData: Favorites = new Favorites();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Favorites[] {
    return this.dataChange.value;
  }

  getDataFavorites(): void {
    this.getAllFavorites().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Favorites[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFavorites(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFavorite(favorite:Favorites) {
    return this.http.post(this.basePath, favorite);
  }
  getFavorite(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFavorite(id:any, favorite:Favorites) {
    return this.http.put(this.basePath + '/' + id, favorite);
  }
  deleteFavorite(id:any) {
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
  
  findOneByParentType(parentType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentType/' + parentType + '?' + attributes);
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
  
  findOneByModifiedUserId(modifiedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedUserId/' + modifiedUserId + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  
  updateFavoriteById(id:any, favorite:Favorites) {
      return this.http.post(this.basePath + '/updateFavoriteById?id=' + id, favorite);
  }
  
  updateFavoriteByDeleted(deleted:any, favorite:Favorites) {
      return this.http.post(this.basePath + '/updateFavoriteByDeleted?deleted=' + deleted, favorite);
  }
  
  updateFavoriteByName(name:any, favorite:Favorites) {
      return this.http.post(this.basePath + '/updateFavoriteByName?name=' + name, favorite);
  }
  
  updateFavoriteByParentType(parentType:any, favorite:Favorites) {
      return this.http.post(this.basePath + '/updateFavoriteByParentType?parentType=' + parentType, favorite);
  }
  
  updateFavoriteByDescription(description:any, favorite:Favorites) {
      return this.http.post(this.basePath + '/updateFavoriteByDescription?description=' + description, favorite);
  }
  
  updateFavoriteByDateEntered(dateEntered:any, favorite:Favorites) {
      return this.http.post(this.basePath + '/updateFavoriteByDateEntered?dateEntered=' + dateEntered, favorite);
  }
  
  updateFavoriteByDateModified(dateModified:any, favorite:Favorites) {
      return this.http.post(this.basePath + '/updateFavoriteByDateModified?dateModified=' + dateModified, favorite);
  }
  
  updateFavoriteByModifiedUserId(modifiedUserId:any, favorite:Favorites) {
      return this.http.post(this.basePath + '/updateFavoriteByModifiedUserId?modifiedUserId=' + modifiedUserId, favorite);
  }
  
  updateFavoriteByCreatedBy(createdBy:any, favorite:Favorites) {
      return this.http.post(this.basePath + '/updateFavoriteByCreatedBy?createdBy=' + createdBy, favorite);
  }
  
  updateFavoriteByAssignedUserId(assignedUserId:any, favorite:Favorites) {
      return this.http.post(this.basePath + '/updateFavoriteByAssignedUserId?assignedUserId=' + assignedUserId, favorite);
  }
  
  updateFavoriteByParentId(parentId:any, favorite:Favorites) {
      return this.http.post(this.basePath + '/updateFavoriteByParentId?parentId=' + parentId, favorite);
  }
  
  
  
  //</es-section>
}
