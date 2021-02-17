/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:09 GMT-0400 (Bolivia Time)
 * Time: 2:44:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:09 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:9
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Sugarfeed} from "../models/sugarfeed";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SugarfeedService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/sugarfeed`;
  dataChange: BehaviorSubject<Sugarfeed[]> = new BehaviorSubject<Sugarfeed[]>([]);
  sugarfeedData: Sugarfeed = new Sugarfeed();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Sugarfeed[] {
    return this.dataChange.value;
  }

  getDataSugarfeed(): void {
    this.getAllSugarfeed().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Sugarfeed[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSugarfeed(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSugarfeed(sugarfeed:Sugarfeed) {
    return this.http.post(this.basePath, sugarfeed);
  }
  getSugarfeed(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSugarfeed(id:any, sugarfeed:Sugarfeed) {
    return this.http.put(this.basePath + '/' + id, sugarfeed);
  }
  deleteSugarfeed(id:any) {
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
  
  findOneByRelatedModule(relatedModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedModule/' + relatedModule + '?' + attributes);
  }
  
  findOneByLinkUrl(linkUrl:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLinkUrl/' + linkUrl + '?' + attributes);
  }
  
  findOneByLinkType(linkType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLinkType/' + linkType + '?' + attributes);
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
  
  findOneByRelatedId(relatedId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedId/' + relatedId + '?' + attributes);
  }
  
  
  updateSugarfeedById(id:any, sugarfeed:Sugarfeed) {
      return this.http.post(this.basePath + '/updateSugarfeedById?id=' + id, sugarfeed);
  }
  
  updateSugarfeedByDeleted(deleted:any, sugarfeed:Sugarfeed) {
      return this.http.post(this.basePath + '/updateSugarfeedByDeleted?deleted=' + deleted, sugarfeed);
  }
  
  updateSugarfeedByName(name:any, sugarfeed:Sugarfeed) {
      return this.http.post(this.basePath + '/updateSugarfeedByName?name=' + name, sugarfeed);
  }
  
  updateSugarfeedByRelatedModule(relatedModule:any, sugarfeed:Sugarfeed) {
      return this.http.post(this.basePath + '/updateSugarfeedByRelatedModule?relatedModule=' + relatedModule, sugarfeed);
  }
  
  updateSugarfeedByLinkUrl(linkUrl:any, sugarfeed:Sugarfeed) {
      return this.http.post(this.basePath + '/updateSugarfeedByLinkUrl?linkUrl=' + linkUrl, sugarfeed);
  }
  
  updateSugarfeedByLinkType(linkType:any, sugarfeed:Sugarfeed) {
      return this.http.post(this.basePath + '/updateSugarfeedByLinkType?linkType=' + linkType, sugarfeed);
  }
  
  updateSugarfeedByDescription(description:any, sugarfeed:Sugarfeed) {
      return this.http.post(this.basePath + '/updateSugarfeedByDescription?description=' + description, sugarfeed);
  }
  
  updateSugarfeedByDateEntered(dateEntered:any, sugarfeed:Sugarfeed) {
      return this.http.post(this.basePath + '/updateSugarfeedByDateEntered?dateEntered=' + dateEntered, sugarfeed);
  }
  
  updateSugarfeedByDateModified(dateModified:any, sugarfeed:Sugarfeed) {
      return this.http.post(this.basePath + '/updateSugarfeedByDateModified?dateModified=' + dateModified, sugarfeed);
  }
  
  updateSugarfeedByModifiedUserId(modifiedUserId:any, sugarfeed:Sugarfeed) {
      return this.http.post(this.basePath + '/updateSugarfeedByModifiedUserId?modifiedUserId=' + modifiedUserId, sugarfeed);
  }
  
  updateSugarfeedByCreatedBy(createdBy:any, sugarfeed:Sugarfeed) {
      return this.http.post(this.basePath + '/updateSugarfeedByCreatedBy?createdBy=' + createdBy, sugarfeed);
  }
  
  updateSugarfeedByAssignedUserId(assignedUserId:any, sugarfeed:Sugarfeed) {
      return this.http.post(this.basePath + '/updateSugarfeedByAssignedUserId?assignedUserId=' + assignedUserId, sugarfeed);
  }
  
  updateSugarfeedByRelatedId(relatedId:any, sugarfeed:Sugarfeed) {
      return this.http.post(this.basePath + '/updateSugarfeedByRelatedId?relatedId=' + relatedId, sugarfeed);
  }
  
  
  
  //</es-section>
}
