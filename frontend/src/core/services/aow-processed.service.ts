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
import {AowProcessed} from "../models/aowProcessed";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AowProcessedService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aow-processed`;
  dataChange: BehaviorSubject<AowProcessed[]> = new BehaviorSubject<AowProcessed[]>([]);
  aowProcessedData: AowProcessed = new AowProcessed();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AowProcessed[] {
    return this.dataChange.value;
  }

  getDataAowProcessed(): void {
    this.getAllAowProcessed().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AowProcessed[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAowProcessed(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAowProcessed(aowProcessed:AowProcessed) {
    return this.http.post(this.basePath, aowProcessed);
  }
  getAowProcessed(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAowProcessed(id:any, aowProcessed:AowProcessed) {
    return this.http.put(this.basePath + '/' + id, aowProcessed);
  }
  deleteAowProcessed(id:any) {
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
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
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
  
  findOneByAowWorkflowId(aowWorkflowId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAowWorkflowId/' + aowWorkflowId + '?' + attributes);
  }
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  
  updateAowProcessedById(id:any, aowProcessed:AowProcessed) {
      return this.http.post(this.basePath + '/updateAowProcessedById?id=' + id, aowProcessed);
  }
  
  updateAowProcessedByDeleted(deleted:any, aowProcessed:AowProcessed) {
      return this.http.post(this.basePath + '/updateAowProcessedByDeleted?deleted=' + deleted, aowProcessed);
  }
  
  updateAowProcessedByName(name:any, aowProcessed:AowProcessed) {
      return this.http.post(this.basePath + '/updateAowProcessedByName?name=' + name, aowProcessed);
  }
  
  updateAowProcessedByParentType(parentType:any, aowProcessed:AowProcessed) {
      return this.http.post(this.basePath + '/updateAowProcessedByParentType?parentType=' + parentType, aowProcessed);
  }
  
  updateAowProcessedByStatus(status:any, aowProcessed:AowProcessed) {
      return this.http.post(this.basePath + '/updateAowProcessedByStatus?status=' + status, aowProcessed);
  }
  
  updateAowProcessedByDescription(description:any, aowProcessed:AowProcessed) {
      return this.http.post(this.basePath + '/updateAowProcessedByDescription?description=' + description, aowProcessed);
  }
  
  updateAowProcessedByDateEntered(dateEntered:any, aowProcessed:AowProcessed) {
      return this.http.post(this.basePath + '/updateAowProcessedByDateEntered?dateEntered=' + dateEntered, aowProcessed);
  }
  
  updateAowProcessedByDateModified(dateModified:any, aowProcessed:AowProcessed) {
      return this.http.post(this.basePath + '/updateAowProcessedByDateModified?dateModified=' + dateModified, aowProcessed);
  }
  
  updateAowProcessedByModifiedUserId(modifiedUserId:any, aowProcessed:AowProcessed) {
      return this.http.post(this.basePath + '/updateAowProcessedByModifiedUserId?modifiedUserId=' + modifiedUserId, aowProcessed);
  }
  
  updateAowProcessedByCreatedBy(createdBy:any, aowProcessed:AowProcessed) {
      return this.http.post(this.basePath + '/updateAowProcessedByCreatedBy?createdBy=' + createdBy, aowProcessed);
  }
  
  updateAowProcessedByAowWorkflowId(aowWorkflowId:any, aowProcessed:AowProcessed) {
      return this.http.post(this.basePath + '/updateAowProcessedByAowWorkflowId?aowWorkflowId=' + aowWorkflowId, aowProcessed);
  }
  
  updateAowProcessedByParentId(parentId:any, aowProcessed:AowProcessed) {
      return this.http.post(this.basePath + '/updateAowProcessedByParentId?parentId=' + parentId, aowProcessed);
  }
  
  
  
  //</es-section>
}
