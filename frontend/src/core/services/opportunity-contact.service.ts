/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:21:41 GMT-0400 (Bolivia Time)
 * Time: 4:21:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:21:41 GMT-0400 (Bolivia Time)
 * Last time updated: 4:21:41
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {OpportunitiesContacts} from "../models/opportunitiesContacts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class OpportunityContactService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/opportunities-contacts`;
  dataChange: BehaviorSubject<OpportunitiesContacts[]> = new BehaviorSubject<OpportunitiesContacts[]>([]);
  opportunityContactData: OpportunitiesContacts = new OpportunitiesContacts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): OpportunitiesContacts[] {
    return this.dataChange.value;
  }

  getDataOpportunitiesContacts(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllOpportunitiesContacts(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:OpportunitiesContacts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllOpportunitiesContacts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createOpportunityContact(opportunityContact:OpportunitiesContacts) {
    return this.http.post(this.basePath, opportunityContact);
  }
  getOpportunityContact(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOpportunityContact(id:any, opportunityContact:OpportunitiesContacts) {
    return this.http.put(this.basePath + '/' + id, opportunityContact);
  }
  deleteOpportunityContact(id:any) {
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
  
  findOneByContactId(contactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactId/' + contactId + '?' + attributes);
  }
  
  findOneByOpportunityId(opportunityId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOpportunityId/' + opportunityId + '?' + attributes);
  }
  
  findOneByContactRole(contactRole:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactRole/' + contactRole + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateOpportunityContactById(id:any, opportunityContact:OpportunitiesContacts) {
      return this.http.post(this.basePath + '/updateOpportunityContactById?id=' + id, opportunityContact);
  }
  
  updateOpportunityContactByDeleted(deleted:any, opportunityContact:OpportunitiesContacts) {
      return this.http.post(this.basePath + '/updateOpportunityContactByDeleted?deleted=' + deleted, opportunityContact);
  }
  
  updateOpportunityContactByContactId(contactId:any, opportunityContact:OpportunitiesContacts) {
      return this.http.post(this.basePath + '/updateOpportunityContactByContactId?contactId=' + contactId, opportunityContact);
  }
  
  updateOpportunityContactByOpportunityId(opportunityId:any, opportunityContact:OpportunitiesContacts) {
      return this.http.post(this.basePath + '/updateOpportunityContactByOpportunityId?opportunityId=' + opportunityId, opportunityContact);
  }
  
  updateOpportunityContactByContactRole(contactRole:any, opportunityContact:OpportunitiesContacts) {
      return this.http.post(this.basePath + '/updateOpportunityContactByContactRole?contactRole=' + contactRole, opportunityContact);
  }
  
  updateOpportunityContactByDateModified(dateModified:any, opportunityContact:OpportunitiesContacts) {
      return this.http.post(this.basePath + '/updateOpportunityContactByDateModified?dateModified=' + dateModified, opportunityContact);
  }
  
  
  
  //</es-section>
}
