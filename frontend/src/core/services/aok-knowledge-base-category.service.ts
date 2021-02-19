/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:20:13 GMT-0400 (Bolivia Time)
 * Time: 4:20:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:20:13 GMT-0400 (Bolivia Time)
 * Last time updated: 4:20:13
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AokKnowledgeBaseCategories} from "../models/aokKnowledgeBaseCategories";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AokKnowledgeBaseCategoryService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aok-knowledge-base-categories`;
  dataChange: BehaviorSubject<AokKnowledgeBaseCategories[]> = new BehaviorSubject<AokKnowledgeBaseCategories[]>([]);
  aokKnowledgeBaseCategoryData: AokKnowledgeBaseCategories = new AokKnowledgeBaseCategories();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AokKnowledgeBaseCategories[] {
    return this.dataChange.value;
  }

  getDataAokKnowledgeBaseCategories(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllAokKnowledgeBaseCategories(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AokKnowledgeBaseCategories[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAokKnowledgeBaseCategories(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAokKnowledgeBaseCategory(aokKnowledgeBaseCategory:AokKnowledgeBaseCategories) {
    return this.http.post(this.basePath, aokKnowledgeBaseCategory);
  }
  getAokKnowledgeBaseCategory(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAokKnowledgeBaseCategory(id:any, aokKnowledgeBaseCategory:AokKnowledgeBaseCategories) {
    return this.http.put(this.basePath + '/' + id, aokKnowledgeBaseCategory);
  }
  deleteAokKnowledgeBaseCategory(id:any) {
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
  
  
  updateAokKnowledgeBaseCategoryById(id:any, aokKnowledgeBaseCategory:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryById?id=' + id, aokKnowledgeBaseCategory);
  }
  
  updateAokKnowledgeBaseCategoryByDeleted(deleted:any, aokKnowledgeBaseCategory:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryByDeleted?deleted=' + deleted, aokKnowledgeBaseCategory);
  }
  
  updateAokKnowledgeBaseCategoryByName(name:any, aokKnowledgeBaseCategory:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryByName?name=' + name, aokKnowledgeBaseCategory);
  }
  
  updateAokKnowledgeBaseCategoryByDescription(description:any, aokKnowledgeBaseCategory:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryByDescription?description=' + description, aokKnowledgeBaseCategory);
  }
  
  updateAokKnowledgeBaseCategoryByDateEntered(dateEntered:any, aokKnowledgeBaseCategory:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryByDateEntered?dateEntered=' + dateEntered, aokKnowledgeBaseCategory);
  }
  
  updateAokKnowledgeBaseCategoryByDateModified(dateModified:any, aokKnowledgeBaseCategory:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryByDateModified?dateModified=' + dateModified, aokKnowledgeBaseCategory);
  }
  
  updateAokKnowledgeBaseCategoryByModifiedUserId(modifiedUserId:any, aokKnowledgeBaseCategory:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryByModifiedUserId?modifiedUserId=' + modifiedUserId, aokKnowledgeBaseCategory);
  }
  
  updateAokKnowledgeBaseCategoryByCreatedBy(createdBy:any, aokKnowledgeBaseCategory:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryByCreatedBy?createdBy=' + createdBy, aokKnowledgeBaseCategory);
  }
  
  updateAokKnowledgeBaseCategoryByAssignedUserId(assignedUserId:any, aokKnowledgeBaseCategory:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryByAssignedUserId?assignedUserId=' + assignedUserId, aokKnowledgeBaseCategory);
  }
  
  
  
  //</es-section>
}
