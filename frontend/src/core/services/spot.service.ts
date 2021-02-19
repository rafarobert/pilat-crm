/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:07 GMT-0400 (Bolivia Time)
 * Time: 2:44:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:07 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:7
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Spots} from "../models/spots";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SpotService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/spots`;
  dataChange: BehaviorSubject<Spots[]> = new BehaviorSubject<Spots[]>([]);
  spotData: Spots = new Spots();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Spots[] {
    return this.dataChange.value;
  }

  getDataSpots(): void {
    this.getAllSpots().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Spots[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSpots(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSpot(spot:Spots) {
    return this.http.post(this.basePath, spot);
  }
  getSpot(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSpot(id:any, spot:Spots) {
    return this.http.put(this.basePath + '/' + id, spot);
  }
  deleteSpot(id:any) {
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
  
  findOneByType(type:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByType/' + type + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByConfig(config:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByConfig/' + config + '?' + attributes);
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
  
  
  updateSpotById(id:any, spot:Spots) {
      return this.http.post(this.basePath + '/updateSpotById?id=' + id, spot);
  }
  
  updateSpotByDeleted(deleted:any, spot:Spots) {
      return this.http.post(this.basePath + '/updateSpotByDeleted?deleted=' + deleted, spot);
  }
  
  updateSpotByName(name:any, spot:Spots) {
      return this.http.post(this.basePath + '/updateSpotByName?name=' + name, spot);
  }
  
  updateSpotByType(type:any, spot:Spots) {
      return this.http.post(this.basePath + '/updateSpotByType?type=' + type, spot);
  }
  
  updateSpotByDescription(description:any, spot:Spots) {
      return this.http.post(this.basePath + '/updateSpotByDescription?description=' + description, spot);
  }
  
  updateSpotByConfig(config:any, spot:Spots) {
      return this.http.post(this.basePath + '/updateSpotByConfig?config=' + config, spot);
  }
  
  updateSpotByDateEntered(dateEntered:any, spot:Spots) {
      return this.http.post(this.basePath + '/updateSpotByDateEntered?dateEntered=' + dateEntered, spot);
  }
  
  updateSpotByDateModified(dateModified:any, spot:Spots) {
      return this.http.post(this.basePath + '/updateSpotByDateModified?dateModified=' + dateModified, spot);
  }
  
  updateSpotByModifiedUserId(modifiedUserId:any, spot:Spots) {
      return this.http.post(this.basePath + '/updateSpotByModifiedUserId?modifiedUserId=' + modifiedUserId, spot);
  }
  
  updateSpotByCreatedBy(createdBy:any, spot:Spots) {
      return this.http.post(this.basePath + '/updateSpotByCreatedBy?createdBy=' + createdBy, spot);
  }
  
  updateSpotByAssignedUserId(assignedUserId:any, spot:Spots) {
      return this.http.post(this.basePath + '/updateSpotByAssignedUserId?assignedUserId=' + assignedUserId, spot);
  }
  
  
  
  //</es-section>
}
