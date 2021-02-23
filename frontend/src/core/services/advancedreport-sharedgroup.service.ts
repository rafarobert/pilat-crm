/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:38 GMT-0400 (Bolivia Time)
 * Time: 3:17:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:38 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:38
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AdvancedreportsSharedgroups} from "../models/advancedreportsSharedgroups";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AdvancedreportSharedgroupService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/advancedreports-sharedgroups`;
  dataChange: BehaviorSubject<AdvancedreportsSharedgroups[]> = new BehaviorSubject<AdvancedreportsSharedgroups[]>([]);
  advancedreportSharedgroupData: AdvancedreportsSharedgroups;

  constructor(private http: HttpClient) { }

  get data(): AdvancedreportsSharedgroups[] {
    return this.dataChange.value;
  }

  getDataAdvancedreportsSharedgroups(): void {
    this.getAdvancedreportsSharedgroups().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AdvancedreportsSharedgroups[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAdvancedreportsSharedgroups(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAdvancedreportSharedgroup(advancedreportSharedgroup:AdvancedreportsSharedgroups) {
    return this.http.post(this.basePath, advancedreportSharedgroup);
  }
  getAdvancedreportSharedgroup(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAdvancedreportSharedgroup(id:any, advancedreportSharedgroup:AdvancedreportsSharedgroups) {
    return this.http.put(this.basePath + '/' + id, advancedreportSharedgroup);
  }
  deleteAdvancedreportSharedgroup(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByReportId(reportId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReportId/' + reportId + '?' + attributes);
  }
  
  findOneByGroupId(groupId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGroupId/' + groupId + '?' + attributes);
  }
  
  findOneByLevel(level:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLevel/' + level + '?' + attributes);
  }
  
  
  updateAdvancedreportSharedgroupByReportId(reportId:any, advancedreportSharedgroup:AdvancedreportsSharedgroups) {
      return this.http.post(this.basePath + '/updateAdvancedreportSharedgroupByReportId?reportId=' + reportId, advancedreportSharedgroup);
  }
  
  updateAdvancedreportSharedgroupByGroupId(groupId:any, advancedreportSharedgroup:AdvancedreportsSharedgroups) {
      return this.http.post(this.basePath + '/updateAdvancedreportSharedgroupByGroupId?groupId=' + groupId, advancedreportSharedgroup);
  }
  
  updateAdvancedreportSharedgroupByLevel(level:any, advancedreportSharedgroup:AdvancedreportsSharedgroups) {
      return this.http.post(this.basePath + '/updateAdvancedreportSharedgroupByLevel?level=' + level, advancedreportSharedgroup);
  }
  
  
  
  //</es-section>
}
