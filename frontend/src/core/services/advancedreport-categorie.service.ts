/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:37 GMT-0400 (Bolivia Time)
 * Time: 3:17:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:37 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:37
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AdvancedreportsCategories} from "../models/advancedreportsCategories";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AdvancedreportCategorieService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/advancedreports-categories`;
  dataChange: BehaviorSubject<AdvancedreportsCategories[]> = new BehaviorSubject<AdvancedreportsCategories[]>([]);
  advancedreportCategorieData: AdvancedreportsCategories;

  constructor(private http: HttpClient) { }

  get data(): AdvancedreportsCategories[] {
    return this.dataChange.value;
  }

  getDataAdvancedreportsCategories(): void {
    this.getAdvancedreportsCategories().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AdvancedreportsCategories[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAdvancedreportsCategories(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAdvancedreportCategorie(advancedreportCategorie:AdvancedreportsCategories) {
    return this.http.post(this.basePath, advancedreportCategorie);
  }
  getAdvancedreportCategorie(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAdvancedreportCategorie(id:any, advancedreportCategorie:AdvancedreportsCategories) {
    return this.http.put(this.basePath + '/' + id, advancedreportCategorie);
  }
  deleteAdvancedreportCategorie(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  findOneBySequence(sequence:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySequence/' + sequence + '?' + attributes);
  }
  
  findOneByVisible(visible:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVisible/' + visible + '?' + attributes);
  }
  
  findOneByTitle(title:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTitle/' + title + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  
  updateAdvancedreportCategorieById(id:any, advancedreportCategorie:AdvancedreportsCategories) {
      return this.http.post(this.basePath + '/updateAdvancedreportCategorieById?id=' + id, advancedreportCategorie);
  }
  
  updateAdvancedreportCategorieByParentId(parentId:any, advancedreportCategorie:AdvancedreportsCategories) {
      return this.http.post(this.basePath + '/updateAdvancedreportCategorieByParentId?parentId=' + parentId, advancedreportCategorie);
  }
  
  updateAdvancedreportCategorieBySequence(sequence:any, advancedreportCategorie:AdvancedreportsCategories) {
      return this.http.post(this.basePath + '/updateAdvancedreportCategorieBySequence?sequence=' + sequence, advancedreportCategorie);
  }
  
  updateAdvancedreportCategorieByVisible(visible:any, advancedreportCategorie:AdvancedreportsCategories) {
      return this.http.post(this.basePath + '/updateAdvancedreportCategorieByVisible?visible=' + visible, advancedreportCategorie);
  }
  
  updateAdvancedreportCategorieByTitle(title:any, advancedreportCategorie:AdvancedreportsCategories) {
      return this.http.post(this.basePath + '/updateAdvancedreportCategorieByTitle?title=' + title, advancedreportCategorie);
  }
  
  updateAdvancedreportCategorieByDescription(description:any, advancedreportCategorie:AdvancedreportsCategories) {
      return this.http.post(this.basePath + '/updateAdvancedreportCategorieByDescription?description=' + description, advancedreportCategorie);
  }
  
  
  
  //</es-section>
}
