/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Dec 20 2020 15:45:58 GMT-0400 (Bolivia Time)
 * Time: 15:45:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Dec 20 2020 15:45:58 GMT-0400 (Bolivia Time)
 * Last time updated: 15:45:58
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import '../../helpers/utils';

//<es-section>
import {Features} from "../models/features";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/features/`;

  constructor(private http: HttpClient) { }
  
  //<es-section>
  
  getFeatures(select = [], where = {}, limit:number = null, offset:number = null) {
    let attributes = '';
    if(select.length) {
        attributes += 'select=' + select.toString();
    }
    if(Object.keys(where).length) {
        attributes += 'where=' + JSON.parse(where);
    }
    if(limit) {
        attributes += 'limit=' + limit;
    }
    if(offset) {
        attributes += 'offset=' + offset;
    }
    return this.http.get(this.basePath + '?' + attributes);
  }
  createFeature(feature:Features) {
    return this.http.post(this.basePath, feature);
  }
  getFeature(id:any) {
    return this.http.get(this.basePath + id);
  }
  updateFeature(id:any, feature:Features) {
    return this.http.post(this.basePath + id, feature);
  }
  deleteFeature(id:any) {
    return this.http.delete(this.basePath + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + 'findOneById/' + id + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + 'findOneByName/' + name + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + 'findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + 'findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByCreatedat(createdat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + 'findOneByCreatedat/' + createdat + '?' + attributes);
  }
  
  findOneByUpdatedat(updatedat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + 'findOneByUpdatedat/' + updatedat + '?' + attributes);
  }
  
  
  updateFeatureById(id:any, feature:Features) {
      return this.http.post(this.basePath + 'updateFeatureById?id=' + id, feature);
  }
  
  updateFeatureByName(name:any, feature:Features) {
      return this.http.post(this.basePath + 'updateFeatureByName?name=' + name, feature);
  }
  
  updateFeatureByStatus(status:any, feature:Features) {
      return this.http.post(this.basePath + 'updateFeatureByStatus?status=' + status, feature);
  }
  
  updateFeatureByDescription(description:any, feature:Features) {
      return this.http.post(this.basePath + 'updateFeatureByDescription?description=' + description, feature);
  }
  
  updateFeatureByCreatedat(createdat:any, feature:Features) {
      return this.http.post(this.basePath + 'updateFeatureByCreatedat?createdat=' + createdat, feature);
  }
  
  updateFeatureByUpdatedat(updatedat:any, feature:Features) {
      return this.http.post(this.basePath + 'updateFeatureByUpdatedat?updatedat=' + updatedat, feature);
  }
  
  
  
  //</es-section>
}
