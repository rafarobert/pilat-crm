/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:49 GMT-0400 (Bolivia Time)
 * Time: 2:42:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:49 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {FpEventLocations} from "../models/fpEventLocations";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FpEventLocationService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/fp-event-locations`;
  dataChange: BehaviorSubject<FpEventLocations[]> = new BehaviorSubject<FpEventLocations[]>([]);
  fpEventLocationData: FpEventLocations = new FpEventLocations();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): FpEventLocations[] {
    return this.dataChange.value;
  }

  getDataFpEventLocations(): void {
    this.getAllFpEventLocations().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:FpEventLocations[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFpEventLocations(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFpEventLocation(fpEventLocation:FpEventLocations) {
    return this.http.post(this.basePath, fpEventLocation);
  }
  getFpEventLocation(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFpEventLocation(id:any, fpEventLocation:FpEventLocations) {
    return this.http.put(this.basePath + '/' + id, fpEventLocation);
  }
  deleteFpEventLocation(id:any) {
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
  
  findOneByAddress(address:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAddress/' + address + '?' + attributes);
  }
  
  findOneByAddressCity(addressCity:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAddressCity/' + addressCity + '?' + attributes);
  }
  
  findOneByAddressCountry(addressCountry:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAddressCountry/' + addressCountry + '?' + attributes);
  }
  
  findOneByAddressPostalcode(addressPostalcode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAddressPostalcode/' + addressPostalcode + '?' + attributes);
  }
  
  findOneByAddressState(addressState:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAddressState/' + addressState + '?' + attributes);
  }
  
  findOneByCapacity(capacity:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCapacity/' + capacity + '?' + attributes);
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
  
  
  updateFpEventLocationById(id:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationById?id=' + id, fpEventLocation);
  }
  
  updateFpEventLocationByDeleted(deleted:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByDeleted?deleted=' + deleted, fpEventLocation);
  }
  
  updateFpEventLocationByName(name:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByName?name=' + name, fpEventLocation);
  }
  
  updateFpEventLocationByAddress(address:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByAddress?address=' + address, fpEventLocation);
  }
  
  updateFpEventLocationByAddressCity(addressCity:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByAddressCity?addressCity=' + addressCity, fpEventLocation);
  }
  
  updateFpEventLocationByAddressCountry(addressCountry:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByAddressCountry?addressCountry=' + addressCountry, fpEventLocation);
  }
  
  updateFpEventLocationByAddressPostalcode(addressPostalcode:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByAddressPostalcode?addressPostalcode=' + addressPostalcode, fpEventLocation);
  }
  
  updateFpEventLocationByAddressState(addressState:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByAddressState?addressState=' + addressState, fpEventLocation);
  }
  
  updateFpEventLocationByCapacity(capacity:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByCapacity?capacity=' + capacity, fpEventLocation);
  }
  
  updateFpEventLocationByDescription(description:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByDescription?description=' + description, fpEventLocation);
  }
  
  updateFpEventLocationByDateEntered(dateEntered:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByDateEntered?dateEntered=' + dateEntered, fpEventLocation);
  }
  
  updateFpEventLocationByDateModified(dateModified:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByDateModified?dateModified=' + dateModified, fpEventLocation);
  }
  
  updateFpEventLocationByModifiedUserId(modifiedUserId:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByModifiedUserId?modifiedUserId=' + modifiedUserId, fpEventLocation);
  }
  
  updateFpEventLocationByCreatedBy(createdBy:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByCreatedBy?createdBy=' + createdBy, fpEventLocation);
  }
  
  updateFpEventLocationByAssignedUserId(assignedUserId:any, fpEventLocation:FpEventLocations) {
      return this.http.post(this.basePath + '/updateFpEventLocationByAssignedUserId?assignedUserId=' + assignedUserId, fpEventLocation);
  }
  
  
  
  //</es-section>
}
