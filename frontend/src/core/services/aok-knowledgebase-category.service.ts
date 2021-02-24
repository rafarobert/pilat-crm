/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:20:12 GMT-0400 (Bolivia Time)
 * Time: 4:20:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:20:12 GMT-0400 (Bolivia Time)
 * Last time updated: 4:20:12
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AokKnowledgebaseCategories} from "../models/aokKnowledgebaseCategories";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AokKnowledgebaseCategoryService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aok-knowledgebase-categories`;
  dataChange: BehaviorSubject<AokKnowledgebaseCategories[]> = new BehaviorSubject<AokKnowledgebaseCategories[]>([]);
  aokKnowledgebaseCategoryData: AokKnowledgebaseCategories = new AokKnowledgebaseCategories();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AokKnowledgebaseCategories[] {
    return this.dataChange.value;
  }

  getDataAokKnowledgebaseCategories(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllAokKnowledgebaseCategories(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AokKnowledgebaseCategories[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAokKnowledgebaseCategories(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAokKnowledgebaseCategory(aokKnowledgebaseCategory:AokKnowledgebaseCategories) {
    return this.http.post(this.basePath, aokKnowledgebaseCategory);
  }
  getAokKnowledgebaseCategory(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAokKnowledgebaseCategory(id:any, aokKnowledgebaseCategory:AokKnowledgebaseCategories) {
    return this.http.put(this.basePath + '/' + id, aokKnowledgebaseCategory);
  }
  deleteAokKnowledgebaseCategory(id:any) {
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
  
  findOneByAokKnowledgebaseId(aokKnowledgebaseId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAokKnowledgebaseId/' + aokKnowledgebaseId + '?' + attributes);
  }
  
  findOneByAokKnowledgeBaseCategoriesId(aokKnowledgeBaseCategoriesId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAokKnowledgeBaseCategoriesId/' + aokKnowledgeBaseCategoriesId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateAokKnowledgebaseCategoryById(id:any, aokKnowledgebaseCategory:AokKnowledgebaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseCategoryById?id=' + id, aokKnowledgebaseCategory);
  }
  
  updateAokKnowledgebaseCategoryByDeleted(deleted:any, aokKnowledgebaseCategory:AokKnowledgebaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseCategoryByDeleted?deleted=' + deleted, aokKnowledgebaseCategory);
  }
  
  updateAokKnowledgebaseCategoryByAokKnowledgebaseId(aokKnowledgebaseId:any, aokKnowledgebaseCategory:AokKnowledgebaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseCategoryByAokKnowledgebaseId?aokKnowledgebaseId=' + aokKnowledgebaseId, aokKnowledgebaseCategory);
  }
  
  updateAokKnowledgebaseCategoryByAokKnowledgeBaseCategoriesId(aokKnowledgeBaseCategoriesId:any, aokKnowledgebaseCategory:AokKnowledgebaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseCategoryByAokKnowledgeBaseCategoriesId?aokKnowledgeBaseCategoriesId=' + aokKnowledgeBaseCategoriesId, aokKnowledgebaseCategory);
  }
  
  updateAokKnowledgebaseCategoryByDateModified(dateModified:any, aokKnowledgebaseCategory:AokKnowledgebaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseCategoryByDateModified?dateModified=' + dateModified, aokKnowledgebaseCategory);
  }
  
  
  
  //</es-section>
}
