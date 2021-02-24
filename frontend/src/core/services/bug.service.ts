/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:59 GMT-0400 (Bolivia Time)
 * Time: 2:41:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:59 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Bugs} from "../models/bugs";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class BugService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/bugs`;
  dataChange: BehaviorSubject<Bugs[]> = new BehaviorSubject<Bugs[]>([]);
  bugData: Bugs = new Bugs();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Bugs[] {
    return this.dataChange.value;
  }

  getDataBugs(): void {
    this.getAllBugs().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Bugs[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllBugs(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createBug(bug:Bugs) {
    return this.http.post(this.basePath, bug);
  }
  getBug(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateBug(id:any, bug:Bugs) {
    return this.http.put(this.basePath + '/' + id, bug);
  }
  deleteBug(id:any) {
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
  
  findOneByBugNumber(bugNumber:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBugNumber/' + bugNumber + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByType(type:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByType/' + type + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByPriority(priority:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPriority/' + priority + '?' + attributes);
  }
  
  findOneByResolution(resolution:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByResolution/' + resolution + '?' + attributes);
  }
  
  findOneByFoundInRelease(foundInRelease:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFoundInRelease/' + foundInRelease + '?' + attributes);
  }
  
  findOneByFixedInRelease(fixedInRelease:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFixedInRelease/' + fixedInRelease + '?' + attributes);
  }
  
  findOneBySource(source:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySource/' + source + '?' + attributes);
  }
  
  findOneByProductCategory(productCategory:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductCategory/' + productCategory + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByWorkLog(workLog:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByWorkLog/' + workLog + '?' + attributes);
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
  
  
  updateBugById(id:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugById?id=' + id, bug);
  }
  
  updateBugByDeleted(deleted:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByDeleted?deleted=' + deleted, bug);
  }
  
  updateBugByBugNumber(bugNumber:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByBugNumber?bugNumber=' + bugNumber, bug);
  }
  
  updateBugByName(name:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByName?name=' + name, bug);
  }
  
  updateBugByType(type:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByType?type=' + type, bug);
  }
  
  updateBugByStatus(status:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByStatus?status=' + status, bug);
  }
  
  updateBugByPriority(priority:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByPriority?priority=' + priority, bug);
  }
  
  updateBugByResolution(resolution:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByResolution?resolution=' + resolution, bug);
  }
  
  updateBugByFoundInRelease(foundInRelease:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByFoundInRelease?foundInRelease=' + foundInRelease, bug);
  }
  
  updateBugByFixedInRelease(fixedInRelease:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByFixedInRelease?fixedInRelease=' + fixedInRelease, bug);
  }
  
  updateBugBySource(source:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugBySource?source=' + source, bug);
  }
  
  updateBugByProductCategory(productCategory:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByProductCategory?productCategory=' + productCategory, bug);
  }
  
  updateBugByDescription(description:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByDescription?description=' + description, bug);
  }
  
  updateBugByWorkLog(workLog:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByWorkLog?workLog=' + workLog, bug);
  }
  
  updateBugByDateEntered(dateEntered:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByDateEntered?dateEntered=' + dateEntered, bug);
  }
  
  updateBugByDateModified(dateModified:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByDateModified?dateModified=' + dateModified, bug);
  }
  
  updateBugByModifiedUserId(modifiedUserId:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByModifiedUserId?modifiedUserId=' + modifiedUserId, bug);
  }
  
  updateBugByCreatedBy(createdBy:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByCreatedBy?createdBy=' + createdBy, bug);
  }
  
  updateBugByAssignedUserId(assignedUserId:any, bug:Bugs) {
      return this.http.post(this.basePath + '/updateBugByAssignedUserId?assignedUserId=' + assignedUserId, bug);
  }
  
  
  
  //</es-section>
}
