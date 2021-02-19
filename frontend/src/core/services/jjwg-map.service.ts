/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:58 GMT-0400 (Bolivia Time)
 * Time: 2:42:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:58 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:58
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {JjwgMaps} from "../models/jjwgMaps";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class JjwgMapService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/jjwg-maps`;
  dataChange: BehaviorSubject<JjwgMaps[]> = new BehaviorSubject<JjwgMaps[]>([]);
  jjwgMapData: JjwgMaps = new JjwgMaps();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): JjwgMaps[] {
    return this.dataChange.value;
  }

  getDataJjwgMaps(): void {
    this.getAllJjwgMaps().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:JjwgMaps[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllJjwgMaps(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createJjwgMap(jjwgMap:JjwgMaps) {
    return this.http.post(this.basePath, jjwgMap);
  }
  getJjwgMap(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateJjwgMap(id:any, jjwgMap:JjwgMaps) {
    return this.http.put(this.basePath + '/' + id, jjwgMap);
  }
  deleteJjwgMap(id:any) {
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
  
  findOneByDistance(distance:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDistance/' + distance + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByUnitType(unitType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUnitType/' + unitType + '?' + attributes);
  }
  
  findOneByModuleType(moduleType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModuleType/' + moduleType + '?' + attributes);
  }
  
  findOneByParentType(parentType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentType/' + parentType + '?' + attributes);
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
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  
  updateJjwgMapById(id:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapById?id=' + id, jjwgMap);
  }
  
  updateJjwgMapByDeleted(deleted:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapByDeleted?deleted=' + deleted, jjwgMap);
  }
  
  updateJjwgMapByDistance(distance:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapByDistance?distance=' + distance, jjwgMap);
  }
  
  updateJjwgMapByName(name:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapByName?name=' + name, jjwgMap);
  }
  
  updateJjwgMapByUnitType(unitType:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapByUnitType?unitType=' + unitType, jjwgMap);
  }
  
  updateJjwgMapByModuleType(moduleType:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapByModuleType?moduleType=' + moduleType, jjwgMap);
  }
  
  updateJjwgMapByParentType(parentType:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapByParentType?parentType=' + parentType, jjwgMap);
  }
  
  updateJjwgMapByDescription(description:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapByDescription?description=' + description, jjwgMap);
  }
  
  updateJjwgMapByDateEntered(dateEntered:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapByDateEntered?dateEntered=' + dateEntered, jjwgMap);
  }
  
  updateJjwgMapByDateModified(dateModified:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapByDateModified?dateModified=' + dateModified, jjwgMap);
  }
  
  updateJjwgMapByModifiedUserId(modifiedUserId:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapByModifiedUserId?modifiedUserId=' + modifiedUserId, jjwgMap);
  }
  
  updateJjwgMapByCreatedBy(createdBy:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapByCreatedBy?createdBy=' + createdBy, jjwgMap);
  }
  
  updateJjwgMapByAssignedUserId(assignedUserId:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapByAssignedUserId?assignedUserId=' + assignedUserId, jjwgMap);
  }
  
  updateJjwgMapByParentId(parentId:any, jjwgMap:JjwgMaps) {
      return this.http.post(this.basePath + '/updateJjwgMapByParentId?parentId=' + parentId, jjwgMap);
  }
  
  
  
  //</es-section>
}
