/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:43 GMT-0400 (Bolivia Time)
 * Time: 2:42:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:43 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:43
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {FoldersSubscriptions} from "../models/foldersSubscriptions";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FolderSubscriptionService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/folders-subscriptions`;
  dataChange: BehaviorSubject<FoldersSubscriptions[]> = new BehaviorSubject<FoldersSubscriptions[]>([]);
  folderSubscriptionData: FoldersSubscriptions = new FoldersSubscriptions();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): FoldersSubscriptions[] {
    return this.dataChange.value;
  }

  getDataFoldersSubscriptions(): void {
    this.getAllFoldersSubscriptions().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:FoldersSubscriptions[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFoldersSubscriptions(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFolderSubscription(folderSubscription:FoldersSubscriptions) {
    return this.http.post(this.basePath, folderSubscription);
  }
  getFolderSubscription(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFolderSubscription(id:any, folderSubscription:FoldersSubscriptions) {
    return this.http.put(this.basePath + '/' + id, folderSubscription);
  }
  deleteFolderSubscription(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByFolderId(folderId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFolderId/' + folderId + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  
  updateFolderSubscriptionById(id:any, folderSubscription:FoldersSubscriptions) {
      return this.http.post(this.basePath + '/updateFolderSubscriptionById?id=' + id, folderSubscription);
  }
  
  updateFolderSubscriptionByFolderId(folderId:any, folderSubscription:FoldersSubscriptions) {
      return this.http.post(this.basePath + '/updateFolderSubscriptionByFolderId?folderId=' + folderId, folderSubscription);
  }
  
  updateFolderSubscriptionByAssignedUserId(assignedUserId:any, folderSubscription:FoldersSubscriptions) {
      return this.http.post(this.basePath + '/updateFolderSubscriptionByAssignedUserId?assignedUserId=' + assignedUserId, folderSubscription);
  }
  
  
  
  //</es-section>
}
