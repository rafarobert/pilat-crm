/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:45 GMT-0400 (Bolivia Time)
 * Time: 2:41:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:45
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
export class AoProductCategorieService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-product-categories`;
  dataChange: BehaviorSubject<AosProductCategories[]> = new BehaviorSubject<AosProductCategories[]>([]);
  aoProductCategorieData: AosProductCategories = new AosProductCategories();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosProductCategories[] {
    return this.dataChange.value;
  }

  getDataAosProductCategories(): void {
    this.getAllAosProductCategories().subscribe(async (res) => {
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
  createAoProductCategorie(aoProductCategorie:AosProductCategories) {
    return this.http.post(this.basePath, aoProductCategorie);
  }
  getAoProductCategorie(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoProductCategorie(id:any, aoProductCategorie:AosProductCategories) {
    return this.http.put(this.basePath + '/' + id, aoProductCategorie);
  }
  deleteAoProductCategorie(id:any) {
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
  
  findOneByModifiedUserId(modifiedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedUserId/' + modifiedUserId + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
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
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  findOneByParentCategoryId(parentCategoryId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentCategoryId/' + parentCategoryId + '?' + attributes);
  }
  
  
  updateAoProductCategorieById(id:any, aoProductCategorie:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategorieById?id=' + id, aoProductCategorie);
  }
  
  updateAoProductCategorieByDeleted(deleted:any, aoProductCategorie:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategorieByDeleted?deleted=' + deleted, aoProductCategorie);
  }
  
  updateAoProductCategorieByIsParent(isParent:any, aoProductCategorie:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategorieByIsParent?isParent=' + isParent, aoProductCategorie);
  }
  
  updateAoProductCategorieByName(name:any, aoProductCategorie:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategorieByName?name=' + name, aoProductCategorie);
  }
  
  updateAoProductCategorieByDescription(description:any, aoProductCategorie:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategorieByDescription?description=' + description, aoProductCategorie);
  }
  
  updateAoProductCategorieByModifiedUserId(modifiedUserId:any, aoProductCategorie:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategorieByModifiedUserId?modifiedUserId=' + modifiedUserId, aoProductCategorie);
  }
  
  updateAoProductCategorieByAssignedUserId(assignedUserId:any, aoProductCategorie:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategorieByAssignedUserId?assignedUserId=' + assignedUserId, aoProductCategorie);
  }
  
  updateAoProductCategorieByDateEntered(dateEntered:any, aoProductCategorie:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategorieByDateEntered?dateEntered=' + dateEntered, aoProductCategorie);
  }
  
  updateAoProductCategorieByDateModified(dateModified:any, aoProductCategorie:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategorieByDateModified?dateModified=' + dateModified, aoProductCategorie);
  }
  
  updateAoProductCategorieByCreatedBy(createdBy:any, aoProductCategorie:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategorieByCreatedBy?createdBy=' + createdBy, aoProductCategorie);
  }
  
  updateAoProductCategorieByParentCategoryId(parentCategoryId:any, aoProductCategorie:AosProductCategories) {
      return this.http.post(this.basePath + '/updateAoProductCategorieByParentCategoryId?parentCategoryId=' + parentCategoryId, aoProductCategorie);
  }
  
  
  findUsersModifiedUserWithSystemGeneratedPassword(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findUsersModifiedUserWithSystemGeneratedPassword' + '?' + attributes);
  }
  
  findUsersAssignedUserWithSystemGeneratedPassword(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findUsersAssignedUserWithSystemGeneratedPassword' + '?' + attributes);
  }
  
  
  filterAosProductCategoriesByModifiedUser(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterAosProductCategoriesByModifiedUser/' + ids + '?' + attributes);
  }
  
  filterAosProductCategoriesByAssignedUser(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterAosProductCategoriesByAssignedUser/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
