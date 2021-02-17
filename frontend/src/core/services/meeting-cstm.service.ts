/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:13 GMT-0400 (Bolivia Time)
 * Time: 2:43:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:13 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:13
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {MeetingsCstm} from "../models/meetingsCstm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class MeetingCstmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/meetings-cstm`;
  dataChange: BehaviorSubject<MeetingsCstm[]> = new BehaviorSubject<MeetingsCstm[]>([]);
  meetingCstmData: MeetingsCstm = new MeetingsCstm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): MeetingsCstm[] {
    return this.dataChange.value;
  }

  getDataMeetingsCstm(): void {
    this.getAllMeetingsCstm().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:MeetingsCstm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllMeetingsCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createMeetingCstm(meetingCstm:MeetingsCstm) {
    return this.http.post(this.basePath, meetingCstm);
  }
  getMeetingCstm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateMeetingCstm(id:any, meetingCstm:MeetingsCstm) {
    return this.http.put(this.basePath + '/' + id, meetingCstm);
  }
  deleteMeetingCstm(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByIdC(idC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIdC/' + idC + '?' + attributes);
  }
  
  findOneByJjwgMapsLngC(jjwgMapsLngC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsLngC/' + jjwgMapsLngC + '?' + attributes);
  }
  
  findOneByJjwgMapsLatC(jjwgMapsLatC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsLatC/' + jjwgMapsLatC + '?' + attributes);
  }
  
  findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsGeocodeStatusC/' + jjwgMapsGeocodeStatusC + '?' + attributes);
  }
  
  findOneByJjwgMapsAddressC(jjwgMapsAddressC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsAddressC/' + jjwgMapsAddressC + '?' + attributes);
  }
  
  
  updateMeetingCstmByIdC(idC:any, meetingCstm:MeetingsCstm) {
      return this.http.post(this.basePath + '/updateMeetingCstmByIdC?idC=' + idC, meetingCstm);
  }
  
  updateMeetingCstmByJjwgMapsLngC(jjwgMapsLngC:any, meetingCstm:MeetingsCstm) {
      return this.http.post(this.basePath + '/updateMeetingCstmByJjwgMapsLngC?jjwgMapsLngC=' + jjwgMapsLngC, meetingCstm);
  }
  
  updateMeetingCstmByJjwgMapsLatC(jjwgMapsLatC:any, meetingCstm:MeetingsCstm) {
      return this.http.post(this.basePath + '/updateMeetingCstmByJjwgMapsLatC?jjwgMapsLatC=' + jjwgMapsLatC, meetingCstm);
  }
  
  updateMeetingCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC:any, meetingCstm:MeetingsCstm) {
      return this.http.post(this.basePath + '/updateMeetingCstmByJjwgMapsGeocodeStatusC?jjwgMapsGeocodeStatusC=' + jjwgMapsGeocodeStatusC, meetingCstm);
  }
  
  updateMeetingCstmByJjwgMapsAddressC(jjwgMapsAddressC:any, meetingCstm:MeetingsCstm) {
      return this.http.post(this.basePath + '/updateMeetingCstmByJjwgMapsAddressC?jjwgMapsAddressC=' + jjwgMapsAddressC, meetingCstm);
  }
  
  
  
  //</es-section>
}
