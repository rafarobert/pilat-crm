/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:53 GMT-0400 (Bolivia Time)
 * Time: 2:43:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:53 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:53
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ProspectListsProspects} from "../models/prospectListsProspects";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProspectListProspectService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/prospect-lists-prospects`;
  dataChange: BehaviorSubject<ProspectListsProspects[]> = new BehaviorSubject<ProspectListsProspects[]>([]);
  prospectListProspectData: ProspectListsProspects = new ProspectListsProspects();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProspectListsProspects[] {
    return this.dataChange.value;
  }

  getDataProspectListsProspects(): void {
    this.getAllProspectListsProspects().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProspectListsProspects[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProspectListsProspects(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProspectListProspect(prospectListProspect:ProspectListsProspects) {
    return this.http.post(this.basePath, prospectListProspect);
  }
  getProspectListProspect(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProspectListProspect(id:any, prospectListProspect:ProspectListsProspects) {
    return this.http.put(this.basePath + '/' + id, prospectListProspect);
  }
  deleteProspectListProspect(id:any) {
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
  
  findOneByProspectListId(prospectListId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProspectListId/' + prospectListId + '?' + attributes);
  }
  
  findOneByRelatedId(relatedId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedId/' + relatedId + '?' + attributes);
  }
  
  findOneByRelatedType(relatedType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedType/' + relatedType + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateProspectListProspectById(id:any, prospectListProspect:ProspectListsProspects) {
      return this.http.post(this.basePath + '/updateProspectListProspectById?id=' + id, prospectListProspect);
  }
  
  updateProspectListProspectByDeleted(deleted:any, prospectListProspect:ProspectListsProspects) {
      return this.http.post(this.basePath + '/updateProspectListProspectByDeleted?deleted=' + deleted, prospectListProspect);
  }
  
  updateProspectListProspectByProspectListId(prospectListId:any, prospectListProspect:ProspectListsProspects) {
      return this.http.post(this.basePath + '/updateProspectListProspectByProspectListId?prospectListId=' + prospectListId, prospectListProspect);
  }
  
  updateProspectListProspectByRelatedId(relatedId:any, prospectListProspect:ProspectListsProspects) {
      return this.http.post(this.basePath + '/updateProspectListProspectByRelatedId?relatedId=' + relatedId, prospectListProspect);
  }
  
  updateProspectListProspectByRelatedType(relatedType:any, prospectListProspect:ProspectListsProspects) {
      return this.http.post(this.basePath + '/updateProspectListProspectByRelatedType?relatedType=' + relatedType, prospectListProspect);
  }
  
  updateProspectListProspectByDateModified(dateModified:any, prospectListProspect:ProspectListsProspects) {
      return this.http.post(this.basePath + '/updateProspectListProspectByDateModified?dateModified=' + dateModified, prospectListProspect);
  }
  
  
  
  //</es-section>
}
