/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:57 GMT-0400 (Bolivia Time)
 * Time: 2:42:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:57 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:57
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {JjwgAreas} from "../models/jjwgAreas";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class JjwgAreaService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/jjwg-areas`;
  dataChange: BehaviorSubject<JjwgAreas[]> = new BehaviorSubject<JjwgAreas[]>([]);
  jjwgAreaData: JjwgAreas = new JjwgAreas();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): JjwgAreas[] {
    return this.dataChange.value;
  }

  getDataJjwgAreas(): void {
    this.getAllJjwgAreas().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:JjwgAreas[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllJjwgAreas(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createJjwgArea(jjwgArea:JjwgAreas) {
    return this.http.post(this.basePath, jjwgArea);
  }
  getJjwgArea(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateJjwgArea(id:any, jjwgArea:JjwgAreas) {
    return this.http.put(this.basePath + '/' + id, jjwgArea);
  }
  deleteJjwgArea(id:any) {
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
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByCoordinates(coordinates:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCoordinates/' + coordinates + '?' + attributes);
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
  
  
  updateJjwgAreaById(id:any, jjwgArea:JjwgAreas) {
      return this.http.post(this.basePath + '/updateJjwgAreaById?id=' + id, jjwgArea);
  }
  
  updateJjwgAreaByDeleted(deleted:any, jjwgArea:JjwgAreas) {
      return this.http.post(this.basePath + '/updateJjwgAreaByDeleted?deleted=' + deleted, jjwgArea);
  }
  
  updateJjwgAreaByName(name:any, jjwgArea:JjwgAreas) {
      return this.http.post(this.basePath + '/updateJjwgAreaByName?name=' + name, jjwgArea);
  }
  
  updateJjwgAreaByCity(city:any, jjwgArea:JjwgAreas) {
      return this.http.post(this.basePath + '/updateJjwgAreaByCity?city=' + city, jjwgArea);
  }
  
  updateJjwgAreaByState(state:any, jjwgArea:JjwgAreas) {
      return this.http.post(this.basePath + '/updateJjwgAreaByState?state=' + state, jjwgArea);
  }
  
  updateJjwgAreaByCountry(country:any, jjwgArea:JjwgAreas) {
      return this.http.post(this.basePath + '/updateJjwgAreaByCountry?country=' + country, jjwgArea);
  }
  
  updateJjwgAreaByDescription(description:any, jjwgArea:JjwgAreas) {
      return this.http.post(this.basePath + '/updateJjwgAreaByDescription?description=' + description, jjwgArea);
  }
  
  updateJjwgAreaByCoordinates(coordinates:any, jjwgArea:JjwgAreas) {
      return this.http.post(this.basePath + '/updateJjwgAreaByCoordinates?coordinates=' + coordinates, jjwgArea);
  }
  
  updateJjwgAreaByDateEntered(dateEntered:any, jjwgArea:JjwgAreas) {
      return this.http.post(this.basePath + '/updateJjwgAreaByDateEntered?dateEntered=' + dateEntered, jjwgArea);
  }
  
  updateJjwgAreaByDateModified(dateModified:any, jjwgArea:JjwgAreas) {
      return this.http.post(this.basePath + '/updateJjwgAreaByDateModified?dateModified=' + dateModified, jjwgArea);
  }
  
  updateJjwgAreaByModifiedUserId(modifiedUserId:any, jjwgArea:JjwgAreas) {
      return this.http.post(this.basePath + '/updateJjwgAreaByModifiedUserId?modifiedUserId=' + modifiedUserId, jjwgArea);
  }
  
  updateJjwgAreaByCreatedBy(createdBy:any, jjwgArea:JjwgAreas) {
      return this.http.post(this.basePath + '/updateJjwgAreaByCreatedBy?createdBy=' + createdBy, jjwgArea);
  }
  
  updateJjwgAreaByAssignedUserId(assignedUserId:any, jjwgArea:JjwgAreas) {
      return this.http.post(this.basePath + '/updateJjwgAreaByAssignedUserId?assignedUserId=' + assignedUserId, jjwgArea);
  }
  
  
  
  //</es-section>
}
