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
import {ProspectLists} from "../models/prospectLists";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProspectListService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/prospect-lists`;
  dataChange: BehaviorSubject<ProspectLists[]> = new BehaviorSubject<ProspectLists[]>([]);
  prospectListData: ProspectLists = new ProspectLists();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProspectLists[] {
    return this.dataChange.value;
  }

  getDataProspectLists(): void {
    this.getAllProspectLists().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProspectLists[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProspectLists(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProspectList(prospectList:ProspectLists) {
    return this.http.post(this.basePath, prospectList);
  }
  getProspectList(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProspectList(id:any, prospectList:ProspectLists) {
    return this.http.put(this.basePath + '/' + id, prospectList);
  }
  deleteProspectList(id:any) {
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
  
  findOneByListType(listType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByListType/' + listType + '?' + attributes);
  }
  
  findOneByDomainName(domainName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDomainName/' + domainName + '?' + attributes);
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
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
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
  
  
  updateProspectListById(id:any, prospectList:ProspectLists) {
      return this.http.post(this.basePath + '/updateProspectListById?id=' + id, prospectList);
  }
  
  updateProspectListByDeleted(deleted:any, prospectList:ProspectLists) {
      return this.http.post(this.basePath + '/updateProspectListByDeleted?deleted=' + deleted, prospectList);
  }
  
  updateProspectListByName(name:any, prospectList:ProspectLists) {
      return this.http.post(this.basePath + '/updateProspectListByName?name=' + name, prospectList);
  }
  
  updateProspectListByListType(listType:any, prospectList:ProspectLists) {
      return this.http.post(this.basePath + '/updateProspectListByListType?listType=' + listType, prospectList);
  }
  
  updateProspectListByDomainName(domainName:any, prospectList:ProspectLists) {
      return this.http.post(this.basePath + '/updateProspectListByDomainName?domainName=' + domainName, prospectList);
  }
  
  updateProspectListByDescription(description:any, prospectList:ProspectLists) {
      return this.http.post(this.basePath + '/updateProspectListByDescription?description=' + description, prospectList);
  }
  
  updateProspectListByDateEntered(dateEntered:any, prospectList:ProspectLists) {
      return this.http.post(this.basePath + '/updateProspectListByDateEntered?dateEntered=' + dateEntered, prospectList);
  }
  
  updateProspectListByDateModified(dateModified:any, prospectList:ProspectLists) {
      return this.http.post(this.basePath + '/updateProspectListByDateModified?dateModified=' + dateModified, prospectList);
  }
  
  updateProspectListByAssignedUserId(assignedUserId:any, prospectList:ProspectLists) {
      return this.http.post(this.basePath + '/updateProspectListByAssignedUserId?assignedUserId=' + assignedUserId, prospectList);
  }
  
  updateProspectListByModifiedUserId(modifiedUserId:any, prospectList:ProspectLists) {
      return this.http.post(this.basePath + '/updateProspectListByModifiedUserId?modifiedUserId=' + modifiedUserId, prospectList);
  }
  
  updateProspectListByCreatedBy(createdBy:any, prospectList:ProspectLists) {
      return this.http.post(this.basePath + '/updateProspectListByCreatedBy?createdBy=' + createdBy, prospectList);
  }
  
  
  
  //</es-section>
}
