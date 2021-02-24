/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:10 GMT-0400 (Bolivia Time)
 * Time: 2:41:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:10 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:10
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AodIndex} from "../models/aodIndex";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AodIndexService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aod-index`;
  dataChange: BehaviorSubject<AodIndex[]> = new BehaviorSubject<AodIndex[]>([]);
  aodIndexData: AodIndex = new AodIndex();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AodIndex[] {
    return this.dataChange.value;
  }

  getDataAodIndex(): void {
    this.getAllAodIndex().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AodIndex[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAodIndex(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAodIndex(aodIndex:AodIndex) {
    return this.http.post(this.basePath, aodIndex);
  }
  getAodIndex(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAodIndex(id:any, aodIndex:AodIndex) {
    return this.http.put(this.basePath + '/' + id, aodIndex);
  }
  deleteAodIndex(id:any) {
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
  
  findOneByLocation(location:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLocation/' + location + '?' + attributes);
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
  
  findOneByLastOptimised(lastOptimised:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLastOptimised/' + lastOptimised + '?' + attributes);
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
  
  
  updateAodIndexById(id:any, aodIndex:AodIndex) {
      return this.http.post(this.basePath + '/updateAodIndexById?id=' + id, aodIndex);
  }
  
  updateAodIndexByDeleted(deleted:any, aodIndex:AodIndex) {
      return this.http.post(this.basePath + '/updateAodIndexByDeleted?deleted=' + deleted, aodIndex);
  }
  
  updateAodIndexByName(name:any, aodIndex:AodIndex) {
      return this.http.post(this.basePath + '/updateAodIndexByName?name=' + name, aodIndex);
  }
  
  updateAodIndexByLocation(location:any, aodIndex:AodIndex) {
      return this.http.post(this.basePath + '/updateAodIndexByLocation?location=' + location, aodIndex);
  }
  
  updateAodIndexByDescription(description:any, aodIndex:AodIndex) {
      return this.http.post(this.basePath + '/updateAodIndexByDescription?description=' + description, aodIndex);
  }
  
  updateAodIndexByDateEntered(dateEntered:any, aodIndex:AodIndex) {
      return this.http.post(this.basePath + '/updateAodIndexByDateEntered?dateEntered=' + dateEntered, aodIndex);
  }
  
  updateAodIndexByDateModified(dateModified:any, aodIndex:AodIndex) {
      return this.http.post(this.basePath + '/updateAodIndexByDateModified?dateModified=' + dateModified, aodIndex);
  }
  
  updateAodIndexByLastOptimised(lastOptimised:any, aodIndex:AodIndex) {
      return this.http.post(this.basePath + '/updateAodIndexByLastOptimised?lastOptimised=' + lastOptimised, aodIndex);
  }
  
  updateAodIndexByModifiedUserId(modifiedUserId:any, aodIndex:AodIndex) {
      return this.http.post(this.basePath + '/updateAodIndexByModifiedUserId?modifiedUserId=' + modifiedUserId, aodIndex);
  }
  
  updateAodIndexByCreatedBy(createdBy:any, aodIndex:AodIndex) {
      return this.http.post(this.basePath + '/updateAodIndexByCreatedBy?createdBy=' + createdBy, aodIndex);
  }
  
  updateAodIndexByAssignedUserId(assignedUserId:any, aodIndex:AodIndex) {
      return this.http.post(this.basePath + '/updateAodIndexByAssignedUserId?assignedUserId=' + assignedUserId, aodIndex);
  }
  
  
  
  //</es-section>
}
