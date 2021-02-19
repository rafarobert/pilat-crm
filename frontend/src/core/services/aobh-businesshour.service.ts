/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:09 GMT-0400 (Bolivia Time)
 * Time: 2:41:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:09 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:9
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AobhBusinesshours} from "../models/aobhBusinesshours";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AobhBusinesshourService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aobh-businesshours`;
  dataChange: BehaviorSubject<AobhBusinesshours[]> = new BehaviorSubject<AobhBusinesshours[]>([]);
  aobhBusinesshourData: AobhBusinesshours = new AobhBusinesshours();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AobhBusinesshours[] {
    return this.dataChange.value;
  }

  getDataAobhBusinesshours(): void {
    this.getAllAobhBusinesshours().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AobhBusinesshours[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAobhBusinesshours(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAobhBusinesshour(aobhBusinesshour:AobhBusinesshours) {
    return this.http.post(this.basePath, aobhBusinesshour);
  }
  getAobhBusinesshour(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAobhBusinesshour(id:any, aobhBusinesshour:AobhBusinesshours) {
    return this.http.put(this.basePath + '/' + id, aobhBusinesshour);
  }
  deleteAobhBusinesshour(id:any) {
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
  
  findOneByOpen(open:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOpen/' + open + '?' + attributes);
  }
  
  findOneByOpenStatus(openStatus:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOpenStatus/' + openStatus + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByOpeningHours(openingHours:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOpeningHours/' + openingHours + '?' + attributes);
  }
  
  findOneByClosingHours(closingHours:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByClosingHours/' + closingHours + '?' + attributes);
  }
  
  findOneByDay(day:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDay/' + day + '?' + attributes);
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
  
  
  updateAobhBusinesshourById(id:any, aobhBusinesshour:AobhBusinesshours) {
      return this.http.post(this.basePath + '/updateAobhBusinesshourById?id=' + id, aobhBusinesshour);
  }
  
  updateAobhBusinesshourByDeleted(deleted:any, aobhBusinesshour:AobhBusinesshours) {
      return this.http.post(this.basePath + '/updateAobhBusinesshourByDeleted?deleted=' + deleted, aobhBusinesshour);
  }
  
  updateAobhBusinesshourByOpen(open:any, aobhBusinesshour:AobhBusinesshours) {
      return this.http.post(this.basePath + '/updateAobhBusinesshourByOpen?open=' + open, aobhBusinesshour);
  }
  
  updateAobhBusinesshourByOpenStatus(openStatus:any, aobhBusinesshour:AobhBusinesshours) {
      return this.http.post(this.basePath + '/updateAobhBusinesshourByOpenStatus?openStatus=' + openStatus, aobhBusinesshour);
  }
  
  updateAobhBusinesshourByName(name:any, aobhBusinesshour:AobhBusinesshours) {
      return this.http.post(this.basePath + '/updateAobhBusinesshourByName?name=' + name, aobhBusinesshour);
  }
  
  updateAobhBusinesshourByOpeningHours(openingHours:any, aobhBusinesshour:AobhBusinesshours) {
      return this.http.post(this.basePath + '/updateAobhBusinesshourByOpeningHours?openingHours=' + openingHours, aobhBusinesshour);
  }
  
  updateAobhBusinesshourByClosingHours(closingHours:any, aobhBusinesshour:AobhBusinesshours) {
      return this.http.post(this.basePath + '/updateAobhBusinesshourByClosingHours?closingHours=' + closingHours, aobhBusinesshour);
  }
  
  updateAobhBusinesshourByDay(day:any, aobhBusinesshour:AobhBusinesshours) {
      return this.http.post(this.basePath + '/updateAobhBusinesshourByDay?day=' + day, aobhBusinesshour);
  }
  
  updateAobhBusinesshourByDescription(description:any, aobhBusinesshour:AobhBusinesshours) {
      return this.http.post(this.basePath + '/updateAobhBusinesshourByDescription?description=' + description, aobhBusinesshour);
  }
  
  updateAobhBusinesshourByDateEntered(dateEntered:any, aobhBusinesshour:AobhBusinesshours) {
      return this.http.post(this.basePath + '/updateAobhBusinesshourByDateEntered?dateEntered=' + dateEntered, aobhBusinesshour);
  }
  
  updateAobhBusinesshourByDateModified(dateModified:any, aobhBusinesshour:AobhBusinesshours) {
      return this.http.post(this.basePath + '/updateAobhBusinesshourByDateModified?dateModified=' + dateModified, aobhBusinesshour);
  }
  
  updateAobhBusinesshourByModifiedUserId(modifiedUserId:any, aobhBusinesshour:AobhBusinesshours) {
      return this.http.post(this.basePath + '/updateAobhBusinesshourByModifiedUserId?modifiedUserId=' + modifiedUserId, aobhBusinesshour);
  }
  
  updateAobhBusinesshourByCreatedBy(createdBy:any, aobhBusinesshour:AobhBusinesshours) {
      return this.http.post(this.basePath + '/updateAobhBusinesshourByCreatedBy?createdBy=' + createdBy, aobhBusinesshour);
  }
  
  
  
  //</es-section>
}
