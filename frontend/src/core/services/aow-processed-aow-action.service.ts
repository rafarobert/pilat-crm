/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:55 GMT-0400 (Bolivia Time)
 * Time: 2:41:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:55 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:55
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AowProcessedAowActions} from "../models/aowProcessedAowActions";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AowProcessedAowActionService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aow-processed-aow-actions`;
  dataChange: BehaviorSubject<AowProcessedAowActions[]> = new BehaviorSubject<AowProcessedAowActions[]>([]);
  aowProcessedAowActionData: AowProcessedAowActions = new AowProcessedAowActions();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AowProcessedAowActions[] {
    return this.dataChange.value;
  }

  getDataAowProcessedAowActions(): void {
    this.getAllAowProcessedAowActions().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AowProcessedAowActions[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAowProcessedAowActions(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAowProcessedAowAction(aowProcessedAowAction:AowProcessedAowActions) {
    return this.http.post(this.basePath, aowProcessedAowAction);
  }
  getAowProcessedAowAction(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAowProcessedAowAction(id:any, aowProcessedAowAction:AowProcessedAowActions) {
    return this.http.put(this.basePath + '/' + id, aowProcessedAowAction);
  }
  deleteAowProcessedAowAction(id:any) {
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
  
  findOneByAowProcessedId(aowProcessedId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAowProcessedId/' + aowProcessedId + '?' + attributes);
  }
  
  findOneByAowActionId(aowActionId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAowActionId/' + aowActionId + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateAowProcessedAowActionById(id:any, aowProcessedAowAction:AowProcessedAowActions) {
      return this.http.post(this.basePath + '/updateAowProcessedAowActionById?id=' + id, aowProcessedAowAction);
  }
  
  updateAowProcessedAowActionByDeleted(deleted:any, aowProcessedAowAction:AowProcessedAowActions) {
      return this.http.post(this.basePath + '/updateAowProcessedAowActionByDeleted?deleted=' + deleted, aowProcessedAowAction);
  }
  
  updateAowProcessedAowActionByAowProcessedId(aowProcessedId:any, aowProcessedAowAction:AowProcessedAowActions) {
      return this.http.post(this.basePath + '/updateAowProcessedAowActionByAowProcessedId?aowProcessedId=' + aowProcessedId, aowProcessedAowAction);
  }
  
  updateAowProcessedAowActionByAowActionId(aowActionId:any, aowProcessedAowAction:AowProcessedAowActions) {
      return this.http.post(this.basePath + '/updateAowProcessedAowActionByAowActionId?aowActionId=' + aowActionId, aowProcessedAowAction);
  }
  
  updateAowProcessedAowActionByStatus(status:any, aowProcessedAowAction:AowProcessedAowActions) {
      return this.http.post(this.basePath + '/updateAowProcessedAowActionByStatus?status=' + status, aowProcessedAowAction);
  }
  
  updateAowProcessedAowActionByDateModified(dateModified:any, aowProcessedAowAction:AowProcessedAowActions) {
      return this.http.post(this.basePath + '/updateAowProcessedAowActionByDateModified?dateModified=' + dateModified, aowProcessedAowAction);
  }
  
  
  
  //</es-section>
}
