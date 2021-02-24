/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:02 GMT-0400 (Bolivia Time)
 * Time: 2:43:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:02 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:2
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {JjwgMarkers} from "../models/jjwgMarkers";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class JjwgMarkerService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/jjwg-markers`;
  dataChange: BehaviorSubject<JjwgMarkers[]> = new BehaviorSubject<JjwgMarkers[]>([]);
  jjwgMarkerData: JjwgMarkers = new JjwgMarkers();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): JjwgMarkers[] {
    return this.dataChange.value;
  }

  getDataJjwgMarkers(): void {
    this.getAllJjwgMarkers().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:JjwgMarkers[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllJjwgMarkers(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createJjwgMarker(jjwgMarker:JjwgMarkers) {
    return this.http.post(this.basePath, jjwgMarker);
  }
  getJjwgMarker(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateJjwgMarker(id:any, jjwgMarker:JjwgMarkers) {
    return this.http.put(this.basePath + '/' + id, jjwgMarker);
  }
  deleteJjwgMarker(id:any) {
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
  
  findOneByJjwgMapsLat(jjwgMapsLat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsLat/' + jjwgMapsLat + '?' + attributes);
  }
  
  findOneByJjwgMapsLng(jjwgMapsLng:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsLng/' + jjwgMapsLng + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByCity(city:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCity/' + city + '?' + attributes);
  }
  
  findOneByState(state:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByState/' + state + '?' + attributes);
  }
  
  findOneByCountry(country:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCountry/' + country + '?' + attributes);
  }
  
  findOneByMarkerImage(markerImage:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMarkerImage/' + markerImage + '?' + attributes);
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
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  
  updateJjwgMarkerById(id:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerById?id=' + id, jjwgMarker);
  }
  
  updateJjwgMarkerByDeleted(deleted:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByDeleted?deleted=' + deleted, jjwgMarker);
  }
  
  updateJjwgMarkerByJjwgMapsLat(jjwgMapsLat:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByJjwgMapsLat?jjwgMapsLat=' + jjwgMapsLat, jjwgMarker);
  }
  
  updateJjwgMarkerByJjwgMapsLng(jjwgMapsLng:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByJjwgMapsLng?jjwgMapsLng=' + jjwgMapsLng, jjwgMarker);
  }
  
  updateJjwgMarkerByName(name:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByName?name=' + name, jjwgMarker);
  }
  
  updateJjwgMarkerByCity(city:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByCity?city=' + city, jjwgMarker);
  }
  
  updateJjwgMarkerByState(state:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByState?state=' + state, jjwgMarker);
  }
  
  updateJjwgMarkerByCountry(country:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByCountry?country=' + country, jjwgMarker);
  }
  
  updateJjwgMarkerByMarkerImage(markerImage:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByMarkerImage?markerImage=' + markerImage, jjwgMarker);
  }
  
  updateJjwgMarkerByDescription(description:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByDescription?description=' + description, jjwgMarker);
  }
  
  updateJjwgMarkerByDateEntered(dateEntered:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByDateEntered?dateEntered=' + dateEntered, jjwgMarker);
  }
  
  updateJjwgMarkerByDateModified(dateModified:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByDateModified?dateModified=' + dateModified, jjwgMarker);
  }
  
  updateJjwgMarkerByModifiedUserId(modifiedUserId:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByModifiedUserId?modifiedUserId=' + modifiedUserId, jjwgMarker);
  }
  
  updateJjwgMarkerByCreatedBy(createdBy:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByCreatedBy?createdBy=' + createdBy, jjwgMarker);
  }
  
  updateJjwgMarkerByAssignedUserId(assignedUserId:any, jjwgMarker:JjwgMarkers) {
      return this.http.post(this.basePath + '/updateJjwgMarkerByAssignedUserId?assignedUserId=' + assignedUserId, jjwgMarker);
  }
  
  
  
  //</es-section>
}
