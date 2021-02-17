/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:12 GMT-0400 (Bolivia Time)
 * Time: 2:41:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:12 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:12
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AodIndexevent} from "../models/aodIndexevent";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AodIndexeventService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aod-indexevent`;
  dataChange: BehaviorSubject<AodIndexevent[]> = new BehaviorSubject<AodIndexevent[]>([]);
  aodIndexeventData: AodIndexevent = new AodIndexevent();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AodIndexevent[] {
    return this.dataChange.value;
  }

  getDataAodIndexevent(): void {
    this.getAllAodIndexevent().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AodIndexevent[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAodIndexevent(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAodIndexevent(aodIndexevent:AodIndexevent) {
    return this.http.post(this.basePath, aodIndexevent);
  }
  getAodIndexevent(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAodIndexevent(id:any, aodIndexevent:AodIndexevent) {
    return this.http.put(this.basePath + '/' + id, aodIndexevent);
  }
  deleteAodIndexevent(id:any) {
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
  
  findOneBySuccess(success:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySuccess/' + success + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByError(error:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByError/' + error + '?' + attributes);
  }
  
  findOneByRecordModule(recordModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRecordModule/' + recordModule + '?' + attributes);
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
  
  findOneByRecordId(recordId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRecordId/' + recordId + '?' + attributes);
  }
  
  
  updateAodIndexeventById(id:any, aodIndexevent:AodIndexevent) {
      return this.http.post(this.basePath + '/updateAodIndexeventById?id=' + id, aodIndexevent);
  }
  
  updateAodIndexeventByDeleted(deleted:any, aodIndexevent:AodIndexevent) {
      return this.http.post(this.basePath + '/updateAodIndexeventByDeleted?deleted=' + deleted, aodIndexevent);
  }
  
  updateAodIndexeventBySuccess(success:any, aodIndexevent:AodIndexevent) {
      return this.http.post(this.basePath + '/updateAodIndexeventBySuccess?success=' + success, aodIndexevent);
  }
  
  updateAodIndexeventByName(name:any, aodIndexevent:AodIndexevent) {
      return this.http.post(this.basePath + '/updateAodIndexeventByName?name=' + name, aodIndexevent);
  }
  
  updateAodIndexeventByError(error:any, aodIndexevent:AodIndexevent) {
      return this.http.post(this.basePath + '/updateAodIndexeventByError?error=' + error, aodIndexevent);
  }
  
  updateAodIndexeventByRecordModule(recordModule:any, aodIndexevent:AodIndexevent) {
      return this.http.post(this.basePath + '/updateAodIndexeventByRecordModule?recordModule=' + recordModule, aodIndexevent);
  }
  
  updateAodIndexeventByDescription(description:any, aodIndexevent:AodIndexevent) {
      return this.http.post(this.basePath + '/updateAodIndexeventByDescription?description=' + description, aodIndexevent);
  }
  
  updateAodIndexeventByDateEntered(dateEntered:any, aodIndexevent:AodIndexevent) {
      return this.http.post(this.basePath + '/updateAodIndexeventByDateEntered?dateEntered=' + dateEntered, aodIndexevent);
  }
  
  updateAodIndexeventByDateModified(dateModified:any, aodIndexevent:AodIndexevent) {
      return this.http.post(this.basePath + '/updateAodIndexeventByDateModified?dateModified=' + dateModified, aodIndexevent);
  }
  
  updateAodIndexeventByModifiedUserId(modifiedUserId:any, aodIndexevent:AodIndexevent) {
      return this.http.post(this.basePath + '/updateAodIndexeventByModifiedUserId?modifiedUserId=' + modifiedUserId, aodIndexevent);
  }
  
  updateAodIndexeventByCreatedBy(createdBy:any, aodIndexevent:AodIndexevent) {
      return this.http.post(this.basePath + '/updateAodIndexeventByCreatedBy?createdBy=' + createdBy, aodIndexevent);
  }
  
  updateAodIndexeventByAssignedUserId(assignedUserId:any, aodIndexevent:AodIndexevent) {
      return this.http.post(this.basePath + '/updateAodIndexeventByAssignedUserId?assignedUserId=' + assignedUserId, aodIndexevent);
  }
  
  updateAodIndexeventByRecordId(recordId:any, aodIndexevent:AodIndexevent) {
      return this.http.post(this.basePath + '/updateAodIndexeventByRecordId?recordId=' + recordId, aodIndexevent);
  }
  
  
  
  //</es-section>
}
