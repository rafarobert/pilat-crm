/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:20:36 GMT-0400 (Bolivia Time)
 * Time: 4:20:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:20:36 GMT-0400 (Bolivia Time)
 * Last time updated: 4:20:36
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosProductCategories} from "../models/aosProductCategories";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoProductCategoryService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-product-categories`;
  dataChange: BehaviorSubject<AosProductCategories[]> = new BehaviorSubject<AosProductCategories[]>([]);
  aoProductCategoryData: AosProductCategories = new AosProductCategories();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosProductCategories[] {
    return this.dataChange.value;
  }

  getDataAosProductCategories(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllAosProductCategories(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosProductCategories[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosProductCategories(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoProductCategory(aoProductCategory:AosProductCategories) {
    return this.http.post(this.basePath, aoProductCategory);
  }
  getAoProductCategory(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoProductCategory(id:any, aoProductCategory:AosProductCategories) {
    return this.http.put(this.basePath + '/' + id, aoProductCategory);
  }
  deleteAoProductCategory(id:any) {
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
  
  findOneByIsParent(isParent:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIsParent/' + isParent + '?' + attributes);
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
  
  findOneByParentCategoryId(parentCategoryId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentCategoryId/' + parentCategoryId + '?' + attributes);
  }
  
  
  updateAoProductCategoryById(id:any, aoProductCategory:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategoryById?id=' + id, aoProductCategory);
  }
  
  updateAoProductCategoryByDeleted(deleted:any, aoProductCategory:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategoryByDeleted?deleted=' + deleted, aoProductCategory);
  }
  
  updateAoProductCategoryByIsParent(isParent:any, aoProductCategory:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategoryByIsParent?isParent=' + isParent, aoProductCategory);
  }
  
  updateAoProductCategoryByName(name:any, aoProductCategory:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategoryByName?name=' + name, aoProductCategory);
  }
  
  updateAoProductCategoryByDescription(description:any, aoProductCategory:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategoryByDescription?description=' + description, aoProductCategory);
  }
  
  updateAoProductCategoryByDateEntered(dateEntered:any, aoProductCategory:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategoryByDateEntered?dateEntered=' + dateEntered, aoProductCategory);
  }
  
  updateAoProductCategoryByDateModified(dateModified:any, aoProductCategory:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategoryByDateModified?dateModified=' + dateModified, aoProductCategory);
  }
  
  updateAoProductCategoryByModifiedUserId(modifiedUserId:any, aoProductCategory:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategoryByModifiedUserId?modifiedUserId=' + modifiedUserId, aoProductCategory);
  }
  
  updateAoProductCategoryByCreatedBy(createdBy:any, aoProductCategory:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategoryByCreatedBy?createdBy=' + createdBy, aoProductCategory);
  }
  
  updateAoProductCategoryByAssignedUserId(assignedUserId:any, aoProductCategory:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategoryByAssignedUserId?assignedUserId=' + assignedUserId, aoProductCategory);
  }
  
  updateAoProductCategoryByParentCategoryId(parentCategoryId:any, aoProductCategory:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategoryByParentCategoryId?parentCategoryId=' + parentCategoryId, aoProductCategory);
  }
  
  
  
  //</es-section>
}
