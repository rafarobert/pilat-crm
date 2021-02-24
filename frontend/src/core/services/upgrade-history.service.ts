/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:22 GMT-0400 (Bolivia Time)
 * Time: 2:44:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:22 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:22
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {UpgradeHistory} from "../models/upgradeHistory";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class UpgradeHistoryService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/upgrade-history`;
  dataChange: BehaviorSubject<UpgradeHistory[]> = new BehaviorSubject<UpgradeHistory[]>([]);
  upgradeHistoryData: UpgradeHistory = new UpgradeHistory();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): UpgradeHistory[] {
    return this.dataChange.value;
  }

  getDataUpgradeHistory(): void {
    this.getAllUpgradeHistory().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:UpgradeHistory[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllUpgradeHistory(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createUpgradeHistory(upgradeHistory:UpgradeHistory) {
    return this.http.post(this.basePath, upgradeHistory);
  }
  getUpgradeHistory(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateUpgradeHistory(id:any, upgradeHistory:UpgradeHistory) {
    return this.http.put(this.basePath + '/' + id, upgradeHistory);
  }
  deleteUpgradeHistory(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByEnabled(enabled:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEnabled/' + enabled + '?' + attributes);
  }
  
  findOneByFilename(filename:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFilename/' + filename + '?' + attributes);
  }
  
  findOneByMd5sum(md5sum:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMd5sum/' + md5sum + '?' + attributes);
  }
  
  findOneByType(type:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByType/' + type + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByVersion(version:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVersion/' + version + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByIdName(idName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIdName/' + idName + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByManifest(manifest:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByManifest/' + manifest + '?' + attributes);
  }
  
  findOneByDateEntered(dateEntered:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateEntered/' + dateEntered + '?' + attributes);
  }
  
  
  updateUpgradeHistoryById(id:any, upgradeHistory:UpgradeHistory) {
      return this.http.post(this.basePath + '/updateUpgradeHistoryById?id=' + id, upgradeHistory);
  }
  
  updateUpgradeHistoryByEnabled(enabled:any, upgradeHistory:UpgradeHistory) {
      return this.http.post(this.basePath + '/updateUpgradeHistoryByEnabled?enabled=' + enabled, upgradeHistory);
  }
  
  updateUpgradeHistoryByFilename(filename:any, upgradeHistory:UpgradeHistory) {
      return this.http.post(this.basePath + '/updateUpgradeHistoryByFilename?filename=' + filename, upgradeHistory);
  }
  
  updateUpgradeHistoryByMd5sum(md5sum:any, upgradeHistory:UpgradeHistory) {
      return this.http.post(this.basePath + '/updateUpgradeHistoryByMd5sum?md5sum=' + md5sum, upgradeHistory);
  }
  
  updateUpgradeHistoryByType(type:any, upgradeHistory:UpgradeHistory) {
      return this.http.post(this.basePath + '/updateUpgradeHistoryByType?type=' + type, upgradeHistory);
  }
  
  updateUpgradeHistoryByStatus(status:any, upgradeHistory:UpgradeHistory) {
      return this.http.post(this.basePath + '/updateUpgradeHistoryByStatus?status=' + status, upgradeHistory);
  }
  
  updateUpgradeHistoryByVersion(version:any, upgradeHistory:UpgradeHistory) {
      return this.http.post(this.basePath + '/updateUpgradeHistoryByVersion?version=' + version, upgradeHistory);
  }
  
  updateUpgradeHistoryByName(name:any, upgradeHistory:UpgradeHistory) {
      return this.http.post(this.basePath + '/updateUpgradeHistoryByName?name=' + name, upgradeHistory);
  }
  
  updateUpgradeHistoryByIdName(idName:any, upgradeHistory:UpgradeHistory) {
      return this.http.post(this.basePath + '/updateUpgradeHistoryByIdName?idName=' + idName, upgradeHistory);
  }
  
  updateUpgradeHistoryByDescription(description:any, upgradeHistory:UpgradeHistory) {
      return this.http.post(this.basePath + '/updateUpgradeHistoryByDescription?description=' + description, upgradeHistory);
  }
  
  updateUpgradeHistoryByManifest(manifest:any, upgradeHistory:UpgradeHistory) {
      return this.http.post(this.basePath + '/updateUpgradeHistoryByManifest?manifest=' + manifest, upgradeHistory);
  }
  
  updateUpgradeHistoryByDateEntered(dateEntered:any, upgradeHistory:UpgradeHistory) {
      return this.http.post(this.basePath + '/updateUpgradeHistoryByDateEntered?dateEntered=' + dateEntered, upgradeHistory);
  }
  
  
  
  //</es-section>
}
