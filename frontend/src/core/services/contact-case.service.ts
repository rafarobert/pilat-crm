/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:19 GMT-0400 (Bolivia Time)
 * Time: 2:42:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:19 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:19
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ContactsCases} from "../models/contactsCases";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ContactCaseService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/contacts-cases`;
  dataChange: BehaviorSubject<ContactsCases[]> = new BehaviorSubject<ContactsCases[]>([]);
  contactCaseData: ContactsCases = new ContactsCases();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ContactsCases[] {
    return this.dataChange.value;
  }

  getDataContactsCases(): void {
    this.getAllContactsCases().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ContactsCases[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllContactsCases(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createContactCase(contactCase:ContactsCases) {
    return this.http.post(this.basePath, contactCase);
  }
  getContactCase(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateContactCase(id:any, contactCase:ContactsCases) {
    return this.http.put(this.basePath + '/' + id, contactCase);
  }
  deleteContactCase(id:any) {
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
  
  findOneByCaseId(caseId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCaseId/' + caseId + '?' + attributes);
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
  
  
  updateContactCaseById(id:any, contactCase:ContactsCases) {
      return this.http.post(this.basePath + '/updateContactCaseById?id=' + id, contactCase);
  }
  
  updateContactCaseByDeleted(deleted:any, contactCase:ContactsCases) {
      return this.http.post(this.basePath + '/updateContactCaseByDeleted?deleted=' + deleted, contactCase);
  }
  
  updateContactCaseByContactId(contactId:any, contactCase:ContactsCases) {
      return this.http.post(this.basePath + '/updateContactCaseByContactId?contactId=' + contactId, contactCase);
  }
  
  updateContactCaseByCaseId(caseId:any, contactCase:ContactsCases) {
      return this.http.post(this.basePath + '/updateContactCaseByCaseId?caseId=' + caseId, contactCase);
  }
  
  updateContactCaseByContactRole(contactRole:any, contactCase:ContactsCases) {
      return this.http.post(this.basePath + '/updateContactCaseByContactRole?contactRole=' + contactRole, contactCase);
  }
  
  updateContactCaseByDateModified(dateModified:any, contactCase:ContactsCases) {
      return this.http.post(this.basePath + '/updateContactCaseByDateModified?dateModified=' + dateModified, contactCase);
  }
  
  
  
  //</es-section>
}
