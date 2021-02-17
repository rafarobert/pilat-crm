/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:37 GMT-0400 (Bolivia Time)
 * Time: 3:17:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:37 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:37
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AdvancedreportsConfig} from "../models/advancedreportsConfig";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AdvancedreportConfigService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/advancedreports-config`;
  dataChange: BehaviorSubject<AdvancedreportsConfig[]> = new BehaviorSubject<AdvancedreportsConfig[]>([]);
  advancedreportConfigData: AdvancedreportsConfig;

  constructor(private http: HttpClient) { }

  get data(): AdvancedreportsConfig[] {
    return this.dataChange.value;
  }

  getDataAdvancedreportsConfig(): void {
    this.getAdvancedreportsConfig().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AdvancedreportsConfig[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAdvancedreportsConfig(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAdvancedreportConfig(advancedreportConfig:AdvancedreportsConfig) {
    return this.http.post(this.basePath, advancedreportConfig);
  }
  getAdvancedreportConfig(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAdvancedreportConfig(id:any, advancedreportConfig:AdvancedreportsConfig) {
    return this.http.put(this.basePath + '/' + id, advancedreportConfig);
  }
  deleteAdvancedreportConfig(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByKey(key:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByKey/' + key + '?' + attributes);
  }
  
  findOneByValue(value:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByValue/' + value + '?' + attributes);
  }
  
  
  updateAdvancedreportConfigByKey(key:any, advancedreportConfig:AdvancedreportsConfig) {
      return this.http.post(this.basePath + '/updateAdvancedreportConfigByKey?key=' + key, advancedreportConfig);
  }
  
  updateAdvancedreportConfigByValue(value:any, advancedreportConfig:AdvancedreportsConfig) {
      return this.http.post(this.basePath + '/updateAdvancedreportConfigByValue?value=' + value, advancedreportConfig);
  }
  
  
  
  //</es-section>
}
