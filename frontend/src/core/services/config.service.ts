/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:14 GMT-0400 (Bolivia Time)
 * Time: 2:42:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:14 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Config} from "../models/config";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/config`;
  dataChange: BehaviorSubject<Config[]> = new BehaviorSubject<Config[]>([]);
  configData: Config = new Config();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Config[] {
    return this.dataChange.value;
  }

  getDataConfig(): void {
    this.getAllConfig().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Config[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllConfig(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createConfig(config:Config) {
    return this.http.post(this.basePath, config);
  }
  getConfig(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateConfig(id:any, config:Config) {
    return this.http.put(this.basePath + '/' + id, config);
  }
  deleteConfig(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByCategory(category:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCategory/' + category + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByValue(value:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByValue/' + value + '?' + attributes);
  }
  
  
  updateConfigByCategory(category:any, config:Config) {
      return this.http.post(this.basePath + '/updateConfigByCategory?category=' + category, config);
  }
  
  updateConfigByName(name:any, config:Config) {
      return this.http.post(this.basePath + '/updateConfigByName?name=' + name, config);
  }
  
  updateConfigByValue(value:any, config:Config) {
      return this.http.post(this.basePath + '/updateConfigByValue?value=' + value, config);
  }
  
  
  
  //</es-section>
}
