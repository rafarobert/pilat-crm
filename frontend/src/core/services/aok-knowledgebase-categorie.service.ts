/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:17 GMT-0400 (Bolivia Time)
 * Time: 2:41:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:17 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:17
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
export class AokKnowledgebaseCategorieService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aok-knowledgebase-categories`;
  dataChange: BehaviorSubject<AokKnowledgebaseCategories[]> = new BehaviorSubject<AokKnowledgebaseCategories[]>([]);
  aokKnowledgebaseCategorieData: AokKnowledgebaseCategories = new AokKnowledgebaseCategories();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AokKnowledgebaseCategories[] {
    return this.dataChange.value;
  }

  getDataAokKnowledgebaseCategories(): void {
    this.getAllAokKnowledgebaseCategories().subscribe(async (res) => {
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
  createAokKnowledgebaseCategorie(aokKnowledgebaseCategorie:AokKnowledgebaseCategories) {
    return this.http.post(this.basePath, aokKnowledgebaseCategorie);
  }
  getAokKnowledgebaseCategorie(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAokKnowledgebaseCategorie(id:any, aokKnowledgebaseCategorie:AokKnowledgebaseCategories) {
    return this.http.put(this.basePath + '/' + id, aokKnowledgebaseCategorie);
  }
  deleteAokKnowledgebaseCategorie(id:any) {
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
  
  
  updateAokKnowledgebaseCategorieById(id:any, aokKnowledgebaseCategorie:AokKnowledgebaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseCategorieById?id=' + id, aokKnowledgebaseCategorie);
  }
  
  updateAokKnowledgebaseCategorieByDeleted(deleted:any, aokKnowledgebaseCategorie:AokKnowledgebaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseCategorieByDeleted?deleted=' + deleted, aokKnowledgebaseCategorie);
  }
  
  updateAokKnowledgebaseCategorieByAokKnowledgebaseId(aokKnowledgebaseId:any, aokKnowledgebaseCategorie:AokKnowledgebaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseCategorieByAokKnowledgebaseId?aokKnowledgebaseId=' + aokKnowledgebaseId, aokKnowledgebaseCategorie);
  }
  
  updateAokKnowledgebaseCategorieByAokKnowledgeBaseCategoriesId(aokKnowledgeBaseCategoriesId:any, aokKnowledgebaseCategorie:AokKnowledgebaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseCategorieByAokKnowledgeBaseCategoriesId?aokKnowledgeBaseCategoriesId=' + aokKnowledgeBaseCategoriesId, aokKnowledgebaseCategorie);
  }
  
  updateAokKnowledgebaseCategorieByDateModified(dateModified:any, aokKnowledgebaseCategorie:AokKnowledgebaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseCategorieByDateModified?dateModified=' + dateModified, aokKnowledgebaseCategorie);
  }
  
  
  findAokKnowledgebaseAokKnowledgebaseWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findAokKnowledgebaseAokKnowledgebaseWithDeleted' + '?' + attributes);
  }
  
  findAokKnowledgeBaseCategoriesAokKnowledgeBaseCategoriesWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findAokKnowledgeBaseCategoriesAokKnowledgeBaseCategoriesWithDeleted' + '?' + attributes);
  }
  
  
  filterAokKnowledgebaseCategoriesByAokKnowledgebase(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterAokKnowledgebaseCategoriesByAokKnowledgebase/' + ids + '?' + attributes);
  }
  
  filterAokKnowledgebaseCategoriesByAokKnowledgeBaseCategories(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterAokKnowledgebaseCategoriesByAokKnowledgeBaseCategories/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
