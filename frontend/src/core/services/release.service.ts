/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:56 GMT-0400 (Bolivia Time)
 * Time: 2:43:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:56 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:56
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Releases} from "../models/releases";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/releases`;
  dataChange: BehaviorSubject<Releases[]> = new BehaviorSubject<Releases[]>([]);
  releaseData: Releases = new Releases();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Releases[] {
    return this.dataChange.value;
  }

  getDataReleases(): void {
    this.getAllReleases().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Releases[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllReleases(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createRelease(release:Releases) {
    return this.http.post(this.basePath, release);
  }
  getRelease(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateRelease(id:any, release:Releases) {
    return this.http.put(this.basePath + '/' + id, release);
  }
  deleteRelease(id:any) {
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
  
  findOneByListOrder(listOrder:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByListOrder/' + listOrder + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
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
  
  
  updateReleaseById(id:any, release:Releases) {
      return this.http.post(this.basePath + '/updateReleaseById?id=' + id, release);
  }
  
  updateReleaseByDeleted(deleted:any, release:Releases) {
      return this.http.post(this.basePath + '/updateReleaseByDeleted?deleted=' + deleted, release);
  }
  
  updateReleaseByListOrder(listOrder:any, release:Releases) {
      return this.http.post(this.basePath + '/updateReleaseByListOrder?listOrder=' + listOrder, release);
  }
  
  updateReleaseByName(name:any, release:Releases) {
      return this.http.post(this.basePath + '/updateReleaseByName?name=' + name, release);
  }
  
  updateReleaseByStatus(status:any, release:Releases) {
      return this.http.post(this.basePath + '/updateReleaseByStatus?status=' + status, release);
  }
  
  updateReleaseByDateEntered(dateEntered:any, release:Releases) {
      return this.http.post(this.basePath + '/updateReleaseByDateEntered?dateEntered=' + dateEntered, release);
  }
  
  updateReleaseByDateModified(dateModified:any, release:Releases) {
      return this.http.post(this.basePath + '/updateReleaseByDateModified?dateModified=' + dateModified, release);
  }
  
  updateReleaseByModifiedUserId(modifiedUserId:any, release:Releases) {
      return this.http.post(this.basePath + '/updateReleaseByModifiedUserId?modifiedUserId=' + modifiedUserId, release);
  }
  
  updateReleaseByCreatedBy(createdBy:any, release:Releases) {
      return this.http.post(this.basePath + '/updateReleaseByCreatedBy?createdBy=' + createdBy, release);
  }
  
  
  
  //</es-section>
}
