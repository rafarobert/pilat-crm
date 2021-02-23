/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:28 GMT-0400 (Bolivia Time)
 * Time: 2:43:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:28 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:28
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
export class OpportunitieContactService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/opportunities-contacts`;
  dataChange: BehaviorSubject<OpportunitiesContacts[]> = new BehaviorSubject<OpportunitiesContacts[]>([]);
  opportunitieContactData: OpportunitiesContacts = new OpportunitiesContacts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): OpportunitiesContacts[] {
    return this.dataChange.value;
  }

  getDataOpportunitiesContacts(): void {
    this.getAllOpportunitiesContacts().subscribe(async (res) => {
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
  createOpportunitieContact(opportunitieContact:OpportunitiesContacts) {
    return this.http.post(this.basePath, opportunitieContact);
  }
  getOpportunitieContact(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOpportunitieContact(id:any, opportunitieContact:OpportunitiesContacts) {
    return this.http.put(this.basePath + '/' + id, opportunitieContact);
  }
  deleteOpportunitieContact(id:any) {
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
  
  
  updateOpportunitieContactById(id:any, opportunitieContact:OpportunitiesContacts) {
      return this.http.post(this.basePath + '/updateOpportunitieContactById?id=' + id, opportunitieContact);
  }
  
  updateOpportunitieContactByDeleted(deleted:any, opportunitieContact:OpportunitiesContacts) {
      return this.http.post(this.basePath + '/updateOpportunitieContactByDeleted?deleted=' + deleted, opportunitieContact);
  }
  
  updateOpportunitieContactByContactId(contactId:any, opportunitieContact:OpportunitiesContacts) {
      return this.http.post(this.basePath + '/updateOpportunitieContactByContactId?contactId=' + contactId, opportunitieContact);
  }
  
  updateOpportunitieContactByOpportunityId(opportunityId:any, opportunitieContact:OpportunitiesContacts) {
      return this.http.post(this.basePath + '/updateOpportunitieContactByOpportunityId?opportunityId=' + opportunityId, opportunitieContact);
  }
  
  updateOpportunitieContactByContactRole(contactRole:any, opportunitieContact:OpportunitiesContacts) {
      return this.http.post(this.basePath + '/updateOpportunitieContactByContactRole?contactRole=' + contactRole, opportunitieContact);
  }
  
  updateOpportunitieContactByDateModified(dateModified:any, opportunitieContact:OpportunitiesContacts) {
      return this.http.post(this.basePath + '/updateOpportunitieContactByDateModified?dateModified=' + dateModified, opportunitieContact);
  }
  
  
  findContactsContactWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findContactsContactWithDeleted' + '?' + attributes);
  }
  
  findOpportunitiesOpportunityWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOpportunitiesOpportunityWithDeleted' + '?' + attributes);
  }
  
  findContactsContactRoleWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findContactsContactRoleWithDeleted' + '?' + attributes);
  }
  
  
  filterOpportunitiesContactsByContact(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterOpportunitiesContactsByContact/' + ids + '?' + attributes);
  }
  
  filterOpportunitiesContactsByOpportunity(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterOpportunitiesContactsByOpportunity/' + ids + '?' + attributes);
  }
  
  filterOpportunitiesContactsByContactRole(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterOpportunitiesContactsByContactRole/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
