/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:20 GMT-0400 (Bolivia Time)
 * Time: 2:44:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:20 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:20
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Templatesectionline} from "../models/templatesectionline";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class TemplatesectionlineService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/templatesectionline`;
  dataChange: BehaviorSubject<Templatesectionline[]> = new BehaviorSubject<Templatesectionline[]>([]);
  templatesectionlineData: Templatesectionline = new Templatesectionline();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Templatesectionline[] {
    return this.dataChange.value;
  }

  getDataTemplatesectionline(): void {
    this.getAllTemplatesectionline().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Templatesectionline[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllTemplatesectionline(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createTemplatesectionline(templatesectionline:Templatesectionline) {
    return this.http.post(this.basePath, templatesectionline);
  }
  getTemplatesectionline(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateTemplatesectionline(id:any, templatesectionline:Templatesectionline) {
    return this.http.put(this.basePath + '/' + id, templatesectionline);
  }
  deleteTemplatesectionline(id:any) {
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
  
  findOneByOrd(ord:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOrd/' + ord + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByThumbnail(thumbnail:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByThumbnail/' + thumbnail + '?' + attributes);
  }
  
  findOneByGrp(grp:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGrp/' + grp + '?' + attributes);
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
  
  
  updateTemplatesectionlineById(id:any, templatesectionline:Templatesectionline) {
      return this.http.post(this.basePath + '/updateTemplatesectionlineById?id=' + id, templatesectionline);
  }
  
  updateTemplatesectionlineByDeleted(deleted:any, templatesectionline:Templatesectionline) {
      return this.http.post(this.basePath + '/updateTemplatesectionlineByDeleted?deleted=' + deleted, templatesectionline);
  }
  
  updateTemplatesectionlineByOrd(ord:any, templatesectionline:Templatesectionline) {
      return this.http.post(this.basePath + '/updateTemplatesectionlineByOrd?ord=' + ord, templatesectionline);
  }
  
  updateTemplatesectionlineByName(name:any, templatesectionline:Templatesectionline) {
      return this.http.post(this.basePath + '/updateTemplatesectionlineByName?name=' + name, templatesectionline);
  }
  
  updateTemplatesectionlineByThumbnail(thumbnail:any, templatesectionline:Templatesectionline) {
      return this.http.post(this.basePath + '/updateTemplatesectionlineByThumbnail?thumbnail=' + thumbnail, templatesectionline);
  }
  
  updateTemplatesectionlineByGrp(grp:any, templatesectionline:Templatesectionline) {
      return this.http.post(this.basePath + '/updateTemplatesectionlineByGrp?grp=' + grp, templatesectionline);
  }
  
  updateTemplatesectionlineByDescription(description:any, templatesectionline:Templatesectionline) {
      return this.http.post(this.basePath + '/updateTemplatesectionlineByDescription?description=' + description, templatesectionline);
  }
  
  updateTemplatesectionlineByDateEntered(dateEntered:any, templatesectionline:Templatesectionline) {
      return this.http.post(this.basePath + '/updateTemplatesectionlineByDateEntered?dateEntered=' + dateEntered, templatesectionline);
  }
  
  updateTemplatesectionlineByDateModified(dateModified:any, templatesectionline:Templatesectionline) {
      return this.http.post(this.basePath + '/updateTemplatesectionlineByDateModified?dateModified=' + dateModified, templatesectionline);
  }
  
  updateTemplatesectionlineByModifiedUserId(modifiedUserId:any, templatesectionline:Templatesectionline) {
      return this.http.post(this.basePath + '/updateTemplatesectionlineByModifiedUserId?modifiedUserId=' + modifiedUserId, templatesectionline);
  }
  
  updateTemplatesectionlineByCreatedBy(createdBy:any, templatesectionline:Templatesectionline) {
      return this.http.post(this.basePath + '/updateTemplatesectionlineByCreatedBy?createdBy=' + createdBy, templatesectionline);
  }
  
  
  
  //</es-section>
}
