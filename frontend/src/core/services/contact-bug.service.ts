/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:18 GMT-0400 (Bolivia Time)
 * Time: 2:42:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:18 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:18
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ContactsBugs} from "../models/contactsBugs";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ContactBugService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/contacts-bugs`;
  dataChange: BehaviorSubject<ContactsBugs[]> = new BehaviorSubject<ContactsBugs[]>([]);
  contactBugData: ContactsBugs = new ContactsBugs();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ContactsBugs[] {
    return this.dataChange.value;
  }

  getDataContactsBugs(): void {
    this.getAllContactsBugs().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ContactsBugs[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllContactsBugs(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createContactBug(contactBug:ContactsBugs) {
    return this.http.post(this.basePath, contactBug);
  }
  getContactBug(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateContactBug(id:any, contactBug:ContactsBugs) {
    return this.http.put(this.basePath + '/' + id, contactBug);
  }
  deleteContactBug(id:any) {
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
  
  findOneByBugId(bugId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBugId/' + bugId + '?' + attributes);
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
  
  
  updateContactBugById(id:any, contactBug:ContactsBugs) {
      return this.http.post(this.basePath + '/updateContactBugById?id=' + id, contactBug);
  }
  
  updateContactBugByDeleted(deleted:any, contactBug:ContactsBugs) {
      return this.http.post(this.basePath + '/updateContactBugByDeleted?deleted=' + deleted, contactBug);
  }
  
  updateContactBugByContactId(contactId:any, contactBug:ContactsBugs) {
      return this.http.post(this.basePath + '/updateContactBugByContactId?contactId=' + contactId, contactBug);
  }
  
  updateContactBugByBugId(bugId:any, contactBug:ContactsBugs) {
      return this.http.post(this.basePath + '/updateContactBugByBugId?bugId=' + bugId, contactBug);
  }
  
  updateContactBugByContactRole(contactRole:any, contactBug:ContactsBugs) {
      return this.http.post(this.basePath + '/updateContactBugByContactRole?contactRole=' + contactRole, contactBug);
  }
  
  updateContactBugByDateModified(dateModified:any, contactBug:ContactsBugs) {
      return this.http.post(this.basePath + '/updateContactBugByDateModified?dateModified=' + dateModified, contactBug);
  }
  
  
  
  //</es-section>
}
