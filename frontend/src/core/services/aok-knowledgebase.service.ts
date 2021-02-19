/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:16 GMT-0400 (Bolivia Time)
 * Time: 2:41:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:16 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:16
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AokKnowledgebase} from "../models/aokKnowledgebase";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AokKnowledgebaseService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aok-knowledgebase`;
  dataChange: BehaviorSubject<AokKnowledgebase[]> = new BehaviorSubject<AokKnowledgebase[]>([]);
  aokKnowledgebaseData: AokKnowledgebase = new AokKnowledgebase();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AokKnowledgebase[] {
    return this.dataChange.value;
  }

  getDataAokKnowledgebase(): void {
    this.getAllAokKnowledgebase().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AokKnowledgebase[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAokKnowledgebase(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAokKnowledgebase(aokKnowledgebase:AokKnowledgebase) {
    return this.http.post(this.basePath, aokKnowledgebase);
  }
  getAokKnowledgebase(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAokKnowledgebase(id:any, aokKnowledgebase:AokKnowledgebase) {
    return this.http.put(this.basePath + '/' + id, aokKnowledgebase);
  }
  deleteAokKnowledgebase(id:any) {
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
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByRevision(revision:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRevision/' + revision + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByAdditionalInfo(additionalInfo:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAdditionalInfo/' + additionalInfo + '?' + attributes);
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
  
  findOneByUserIdC(userIdC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserIdC/' + userIdC + '?' + attributes);
  }
  
  findOneByUserId1C(userId1C:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserId1C/' + userId1C + '?' + attributes);
  }
  
  
  updateAokKnowledgebaseById(id:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseById?id=' + id, aokKnowledgebase);
  }
  
  updateAokKnowledgebaseByDeleted(deleted:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseByDeleted?deleted=' + deleted, aokKnowledgebase);
  }
  
  updateAokKnowledgebaseByName(name:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseByName?name=' + name, aokKnowledgebase);
  }
  
  updateAokKnowledgebaseByStatus(status:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseByStatus?status=' + status, aokKnowledgebase);
  }
  
  updateAokKnowledgebaseByRevision(revision:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseByRevision?revision=' + revision, aokKnowledgebase);
  }
  
  updateAokKnowledgebaseByDescription(description:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseByDescription?description=' + description, aokKnowledgebase);
  }
  
  updateAokKnowledgebaseByAdditionalInfo(additionalInfo:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseByAdditionalInfo?additionalInfo=' + additionalInfo, aokKnowledgebase);
  }
  
  updateAokKnowledgebaseByDateEntered(dateEntered:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseByDateEntered?dateEntered=' + dateEntered, aokKnowledgebase);
  }
  
  updateAokKnowledgebaseByDateModified(dateModified:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseByDateModified?dateModified=' + dateModified, aokKnowledgebase);
  }
  
  updateAokKnowledgebaseByModifiedUserId(modifiedUserId:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseByModifiedUserId?modifiedUserId=' + modifiedUserId, aokKnowledgebase);
  }
  
  updateAokKnowledgebaseByCreatedBy(createdBy:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseByCreatedBy?createdBy=' + createdBy, aokKnowledgebase);
  }
  
  updateAokKnowledgebaseByAssignedUserId(assignedUserId:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseByAssignedUserId?assignedUserId=' + assignedUserId, aokKnowledgebase);
  }
  
  updateAokKnowledgebaseByUserIdC(userIdC:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseByUserIdC?userIdC=' + userIdC, aokKnowledgebase);
  }
  
  updateAokKnowledgebaseByUserId1C(userId1C:any, aokKnowledgebase:AokKnowledgebase) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseByUserId1C?userId1C=' + userId1C, aokKnowledgebase);
  }
  
  
  
  //</es-section>
}
