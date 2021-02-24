/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:44 GMT-0400 (Bolivia Time)
 * Time: 2:43:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:44 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:44
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ProjectCstm} from "../models/projectCstm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProjectCstmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/project-cstm`;
  dataChange: BehaviorSubject<ProjectCstm[]> = new BehaviorSubject<ProjectCstm[]>([]);
  projectCstmData: ProjectCstm = new ProjectCstm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProjectCstm[] {
    return this.dataChange.value;
  }

  getDataProjectCstm(): void {
    this.getAllProjectCstm().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProjectCstm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProjectCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProjectCstm(projectCstm:ProjectCstm) {
    return this.http.post(this.basePath, projectCstm);
  }
  getProjectCstm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProjectCstm(id:any, projectCstm:ProjectCstm) {
    return this.http.put(this.basePath + '/' + id, projectCstm);
  }
  deleteProjectCstm(id:any) {
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
  
  
  updateProjectCstmByIdC(idC:any, projectCstm:ProjectCstm) {
      return this.http.post(this.basePath + '/updateProjectCstmByIdC?idC=' + idC, projectCstm);
  }
  
  updateProjectCstmByJjwgMapsLngC(jjwgMapsLngC:any, projectCstm:ProjectCstm) {
      return this.http.post(this.basePath + '/updateProjectCstmByJjwgMapsLngC?jjwgMapsLngC=' + jjwgMapsLngC, projectCstm);
  }
  
  updateProjectCstmByJjwgMapsLatC(jjwgMapsLatC:any, projectCstm:ProjectCstm) {
      return this.http.post(this.basePath + '/updateProjectCstmByJjwgMapsLatC?jjwgMapsLatC=' + jjwgMapsLatC, projectCstm);
  }
  
  updateProjectCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC:any, projectCstm:ProjectCstm) {
      return this.http.post(this.basePath + '/updateProjectCstmByJjwgMapsGeocodeStatusC?jjwgMapsGeocodeStatusC=' + jjwgMapsGeocodeStatusC, projectCstm);
  }
  
  updateProjectCstmByJjwgMapsAddressC(jjwgMapsAddressC:any, projectCstm:ProjectCstm) {
      return this.http.post(this.basePath + '/updateProjectCstmByJjwgMapsAddressC?jjwgMapsAddressC=' + jjwgMapsAddressC, projectCstm);
  }
  
  
  
  //</es-section>
}
