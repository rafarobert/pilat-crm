/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:23 GMT-0400 (Bolivia Time)
 * Time: 2:41:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:23 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:23
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AorCharts} from "../models/aorCharts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AorChartService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aor-charts`;
  dataChange: BehaviorSubject<AorCharts[]> = new BehaviorSubject<AorCharts[]>([]);
  aorChartData: AorCharts = new AorCharts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AorCharts[] {
    return this.dataChange.value;
  }

  getDataAorCharts(): void {
    this.getAllAorCharts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AorCharts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAorCharts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAorChart(aorChart:AorCharts) {
    return this.http.post(this.basePath, aorChart);
  }
  getAorChart(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAorChart(id:any, aorChart:AorCharts) {
    return this.http.put(this.basePath + '/' + id, aorChart);
  }
  deleteAorChart(id:any) {
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
  
  findOneByXField(xField:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByXField/' + xField + '?' + attributes);
  }
  
  findOneByYField(yField:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByYField/' + yField + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByType(type:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByType/' + type + '?' + attributes);
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
  
  findOneByAorReportId(aorReportId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAorReportId/' + aorReportId + '?' + attributes);
  }
  
  
  updateAorChartById(id:any, aorChart:AorCharts) {
      return this.http.post(this.basePath + '/updateAorChartById?id=' + id, aorChart);
  }
  
  updateAorChartByDeleted(deleted:any, aorChart:AorCharts) {
      return this.http.post(this.basePath + '/updateAorChartByDeleted?deleted=' + deleted, aorChart);
  }
  
  updateAorChartByXField(xField:any, aorChart:AorCharts) {
      return this.http.post(this.basePath + '/updateAorChartByXField?xField=' + xField, aorChart);
  }
  
  updateAorChartByYField(yField:any, aorChart:AorCharts) {
      return this.http.post(this.basePath + '/updateAorChartByYField?yField=' + yField, aorChart);
  }
  
  updateAorChartByName(name:any, aorChart:AorCharts) {
      return this.http.post(this.basePath + '/updateAorChartByName?name=' + name, aorChart);
  }
  
  updateAorChartByType(type:any, aorChart:AorCharts) {
      return this.http.post(this.basePath + '/updateAorChartByType?type=' + type, aorChart);
  }
  
  updateAorChartByDescription(description:any, aorChart:AorCharts) {
      return this.http.post(this.basePath + '/updateAorChartByDescription?description=' + description, aorChart);
  }
  
  updateAorChartByDateEntered(dateEntered:any, aorChart:AorCharts) {
      return this.http.post(this.basePath + '/updateAorChartByDateEntered?dateEntered=' + dateEntered, aorChart);
  }
  
  updateAorChartByDateModified(dateModified:any, aorChart:AorCharts) {
      return this.http.post(this.basePath + '/updateAorChartByDateModified?dateModified=' + dateModified, aorChart);
  }
  
  updateAorChartByModifiedUserId(modifiedUserId:any, aorChart:AorCharts) {
      return this.http.post(this.basePath + '/updateAorChartByModifiedUserId?modifiedUserId=' + modifiedUserId, aorChart);
  }
  
  updateAorChartByCreatedBy(createdBy:any, aorChart:AorCharts) {
      return this.http.post(this.basePath + '/updateAorChartByCreatedBy?createdBy=' + createdBy, aorChart);
  }
  
  updateAorChartByAorReportId(aorReportId:any, aorChart:AorCharts) {
      return this.http.post(this.basePath + '/updateAorChartByAorReportId?aorReportId=' + aorReportId, aorChart);
  }
  
  
  
  //</es-section>
}
