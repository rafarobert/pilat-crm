/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:00 GMT-0400 (Bolivia Time)
 * Time: 2:43:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:00 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {JjwgMapsJjwgAreasC} from "../models/jjwgMapsJjwgAreasC";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class JjwgMapJjwgAreaCService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/jjwg-maps-jjwg-areas-c`;
  dataChange: BehaviorSubject<JjwgMapsJjwgAreasC[]> = new BehaviorSubject<JjwgMapsJjwgAreasC[]>([]);
  jjwgMapJjwgAreaCData: JjwgMapsJjwgAreasC = new JjwgMapsJjwgAreasC();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): JjwgMapsJjwgAreasC[] {
    return this.dataChange.value;
  }

  getDataJjwgMapsJjwgAreasC(): void {
    this.getAllJjwgMapsJjwgAreasC().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:JjwgMapsJjwgAreasC[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllJjwgMapsJjwgAreasC(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createJjwgMapJjwgAreaC(jjwgMapJjwgAreaC:JjwgMapsJjwgAreasC) {
    return this.http.post(this.basePath, jjwgMapJjwgAreaC);
  }
  getJjwgMapJjwgAreaC(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateJjwgMapJjwgAreaC(id:any, jjwgMapJjwgAreaC:JjwgMapsJjwgAreasC) {
    return this.http.put(this.basePath + '/' + id, jjwgMapJjwgAreaC);
  }
  deleteJjwgMapJjwgAreaC(id:any) {
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
  
  findOneByJjwgMaps5304wgMapsIda(jjwgMaps5304wgMapsIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMaps5304wgMapsIda/' + jjwgMaps5304wgMapsIda + '?' + attributes);
  }
  
  findOneByJjwgMaps41f2gAreasIdb(jjwgMaps41f2gAreasIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMaps41f2gAreasIdb/' + jjwgMaps41f2gAreasIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateJjwgMapJjwgAreaCById(id:any, jjwgMapJjwgAreaC:JjwgMapsJjwgAreasC) {
      return this.http.post(this.basePath + '/updateJjwgMapJjwgAreaCById?id=' + id, jjwgMapJjwgAreaC);
  }
  
  updateJjwgMapJjwgAreaCByDeleted(deleted:any, jjwgMapJjwgAreaC:JjwgMapsJjwgAreasC) {
      return this.http.post(this.basePath + '/updateJjwgMapJjwgAreaCByDeleted?deleted=' + deleted, jjwgMapJjwgAreaC);
  }
  
  updateJjwgMapJjwgAreaCByJjwgMaps5304wgMapsIda(jjwgMaps5304wgMapsIda:any, jjwgMapJjwgAreaC:JjwgMapsJjwgAreasC) {
      return this.http.post(this.basePath + '/updateJjwgMapJjwgAreaCByJjwgMaps5304wgMapsIda?jjwgMaps5304wgMapsIda=' + jjwgMaps5304wgMapsIda, jjwgMapJjwgAreaC);
  }
  
  updateJjwgMapJjwgAreaCByJjwgMaps41f2gAreasIdb(jjwgMaps41f2gAreasIdb:any, jjwgMapJjwgAreaC:JjwgMapsJjwgAreasC) {
      return this.http.post(this.basePath + '/updateJjwgMapJjwgAreaCByJjwgMaps41f2gAreasIdb?jjwgMaps41f2gAreasIdb=' + jjwgMaps41f2gAreasIdb, jjwgMapJjwgAreaC);
  }
  
  updateJjwgMapJjwgAreaCByDateModified(dateModified:any, jjwgMapJjwgAreaC:JjwgMapsJjwgAreasC) {
      return this.http.post(this.basePath + '/updateJjwgMapJjwgAreaCByDateModified?dateModified=' + dateModified, jjwgMapJjwgAreaC);
  }
  
  
  
  //</es-section>
}
