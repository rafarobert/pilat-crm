/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:25 GMT-0400 (Bolivia Time)
 * Time: 2:44:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:25 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {UsersFeeds} from "../models/usersFeeds";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class UserFeedService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/users-feeds`;
  dataChange: BehaviorSubject<UsersFeeds[]> = new BehaviorSubject<UsersFeeds[]>([]);
  userFeedData: UsersFeeds = new UsersFeeds();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): UsersFeeds[] {
    return this.dataChange.value;
  }

  getDataUsersFeeds(): void {
    this.getAllUsersFeeds().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:UsersFeeds[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllUsersFeeds(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createUserFeed(userFeed:UsersFeeds) {
    return this.http.post(this.basePath, userFeed);
  }
  getUserFeed(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateUserFeed(id:any, userFeed:UsersFeeds) {
    return this.http.put(this.basePath + '/' + id, userFeed);
  }
  deleteUserFeed(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByRank(rank:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRank/' + rank + '?' + attributes);
  }
  
  findOneByUserId(userId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserId/' + userId + '?' + attributes);
  }
  
  findOneByFeedId(feedId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFeedId/' + feedId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateUserFeedByDeleted(deleted:any, userFeed:UsersFeeds) {
      return this.http.post(this.basePath + '/updateUserFeedByDeleted?deleted=' + deleted, userFeed);
  }
  
  updateUserFeedByRank(rank:any, userFeed:UsersFeeds) {
      return this.http.post(this.basePath + '/updateUserFeedByRank?rank=' + rank, userFeed);
  }
  
  updateUserFeedByUserId(userId:any, userFeed:UsersFeeds) {
      return this.http.post(this.basePath + '/updateUserFeedByUserId?userId=' + userId, userFeed);
  }
  
  updateUserFeedByFeedId(feedId:any, userFeed:UsersFeeds) {
      return this.http.post(this.basePath + '/updateUserFeedByFeedId?feedId=' + feedId, userFeed);
  }
  
  updateUserFeedByDateModified(dateModified:any, userFeed:UsersFeeds) {
      return this.http.post(this.basePath + '/updateUserFeedByDateModified?dateModified=' + dateModified, userFeed);
  }
  
  
  
  //</es-section>
}
