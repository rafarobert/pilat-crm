/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:37 GMT-0400 (Bolivia Time)
 * Time: 2:42:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:37 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:37
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {EmailMarketingProspectLists} from "../models/emailMarketingProspectLists";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EmailMarketingProspectListService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/email-marketing-prospect-lists`;
  dataChange: BehaviorSubject<EmailMarketingProspectLists[]> = new BehaviorSubject<EmailMarketingProspectLists[]>([]);
  emailMarketingProspectListData: EmailMarketingProspectLists = new EmailMarketingProspectLists();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): EmailMarketingProspectLists[] {
    return this.dataChange.value;
  }

  getDataEmailMarketingProspectLists(): void {
    this.getAllEmailMarketingProspectLists().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:EmailMarketingProspectLists[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEmailMarketingProspectLists(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEmailMarketingProspectList(emailMarketingProspectList:EmailMarketingProspectLists) {
    return this.http.post(this.basePath, emailMarketingProspectList);
  }
  getEmailMarketingProspectList(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEmailMarketingProspectList(id:any, emailMarketingProspectList:EmailMarketingProspectLists) {
    return this.http.put(this.basePath + '/' + id, emailMarketingProspectList);
  }
  deleteEmailMarketingProspectList(id:any) {
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
  
  findOneByEmailMarketingId(emailMarketingId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailMarketingId/' + emailMarketingId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateEmailMarketingProspectListById(id:any, emailMarketingProspectList:EmailMarketingProspectLists) {
      return this.http.post(this.basePath + '/updateEmailMarketingProspectListById?id=' + id, emailMarketingProspectList);
  }
  
  updateEmailMarketingProspectListByDeleted(deleted:any, emailMarketingProspectList:EmailMarketingProspectLists) {
      return this.http.post(this.basePath + '/updateEmailMarketingProspectListByDeleted?deleted=' + deleted, emailMarketingProspectList);
  }
  
  updateEmailMarketingProspectListByProspectListId(prospectListId:any, emailMarketingProspectList:EmailMarketingProspectLists) {
      return this.http.post(this.basePath + '/updateEmailMarketingProspectListByProspectListId?prospectListId=' + prospectListId, emailMarketingProspectList);
  }
  
  updateEmailMarketingProspectListByEmailMarketingId(emailMarketingId:any, emailMarketingProspectList:EmailMarketingProspectLists) {
      return this.http.post(this.basePath + '/updateEmailMarketingProspectListByEmailMarketingId?emailMarketingId=' + emailMarketingId, emailMarketingProspectList);
  }
  
  updateEmailMarketingProspectListByDateModified(dateModified:any, emailMarketingProspectList:EmailMarketingProspectLists) {
      return this.http.post(this.basePath + '/updateEmailMarketingProspectListByDateModified?dateModified=' + dateModified, emailMarketingProspectList);
  }
  
  
  
  //</es-section>
}
