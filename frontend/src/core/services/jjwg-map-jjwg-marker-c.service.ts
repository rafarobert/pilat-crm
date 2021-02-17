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
import {JjwgMapsJjwgMarkersC} from "../models/jjwgMapsJjwgMarkersC";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class JjwgMapJjwgMarkerCService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/jjwg-maps-jjwg-markers-c`;
  dataChange: BehaviorSubject<JjwgMapsJjwgMarkersC[]> = new BehaviorSubject<JjwgMapsJjwgMarkersC[]>([]);
  jjwgMapJjwgMarkerCData: JjwgMapsJjwgMarkersC = new JjwgMapsJjwgMarkersC();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): JjwgMapsJjwgMarkersC[] {
    return this.dataChange.value;
  }

  getDataJjwgMapsJjwgMarkersC(): void {
    this.getAllJjwgMapsJjwgMarkersC().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:JjwgMapsJjwgMarkersC[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllJjwgMapsJjwgMarkersC(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createJjwgMapJjwgMarkerC(jjwgMapJjwgMarkerC:JjwgMapsJjwgMarkersC) {
    return this.http.post(this.basePath, jjwgMapJjwgMarkerC);
  }
  getJjwgMapJjwgMarkerC(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateJjwgMapJjwgMarkerC(id:any, jjwgMapJjwgMarkerC:JjwgMapsJjwgMarkersC) {
    return this.http.put(this.basePath + '/' + id, jjwgMapJjwgMarkerC);
  }
  deleteJjwgMapJjwgMarkerC(id:any) {
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
  
  findOneByJjwgMapsB229wgMapsIda(jjwgMapsB229wgMapsIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsB229wgMapsIda/' + jjwgMapsB229wgMapsIda + '?' + attributes);
  }
  
  findOneByJjwgMaps2e31markersIdb(jjwgMaps2e31markersIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMaps2e31markersIdb/' + jjwgMaps2e31markersIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateJjwgMapJjwgMarkerCById(id:any, jjwgMapJjwgMarkerC:JjwgMapsJjwgMarkersC) {
      return this.http.post(this.basePath + '/updateJjwgMapJjwgMarkerCById?id=' + id, jjwgMapJjwgMarkerC);
  }
  
  updateJjwgMapJjwgMarkerCByDeleted(deleted:any, jjwgMapJjwgMarkerC:JjwgMapsJjwgMarkersC) {
      return this.http.post(this.basePath + '/updateJjwgMapJjwgMarkerCByDeleted?deleted=' + deleted, jjwgMapJjwgMarkerC);
  }
  
  updateJjwgMapJjwgMarkerCByJjwgMapsB229wgMapsIda(jjwgMapsB229wgMapsIda:any, jjwgMapJjwgMarkerC:JjwgMapsJjwgMarkersC) {
      return this.http.post(this.basePath + '/updateJjwgMapJjwgMarkerCByJjwgMapsB229wgMapsIda?jjwgMapsB229wgMapsIda=' + jjwgMapsB229wgMapsIda, jjwgMapJjwgMarkerC);
  }
  
  updateJjwgMapJjwgMarkerCByJjwgMaps2e31markersIdb(jjwgMaps2e31markersIdb:any, jjwgMapJjwgMarkerC:JjwgMapsJjwgMarkersC) {
      return this.http.post(this.basePath + '/updateJjwgMapJjwgMarkerCByJjwgMaps2e31markersIdb?jjwgMaps2e31markersIdb=' + jjwgMaps2e31markersIdb, jjwgMapJjwgMarkerC);
  }
  
  updateJjwgMapJjwgMarkerCByDateModified(dateModified:any, jjwgMapJjwgMarkerC:JjwgMapsJjwgMarkersC) {
      return this.http.post(this.basePath + '/updateJjwgMapJjwgMarkerCByDateModified?dateModified=' + dateModified, jjwgMapJjwgMarkerC);
  }
  
  
  
  //</es-section>
}
