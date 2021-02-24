/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:36 GMT-0400 (Bolivia Time)
 * Time: 3:17:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:36 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:36
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Advancedreports} from "../models/advancedreports";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AdvancedreportService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/advancedreports`;
  dataChange: BehaviorSubject<Advancedreports[]> = new BehaviorSubject<Advancedreports[]>([]);
  advancedreportData: Advancedreports;

  constructor(private http: HttpClient) { }

  get data(): Advancedreports[] {
    return this.dataChange.value;
  }

  getDataAdvancedreports(): void {
    this.getAdvancedreports().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Advancedreports[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAdvancedreports(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAdvancedreport(advancedreport:Advancedreports) {
    return this.http.post(this.basePath, advancedreport);
  }
  getAdvancedreport(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAdvancedreport(id:any, advancedreport:Advancedreports) {
    return this.http.put(this.basePath + '/' + id, advancedreport);
  }
  deleteAdvancedreport(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByCategoryId(categoryId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCategoryId/' + categoryId + '?' + attributes);
  }
  
  findOneBySequence(sequence:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySequence/' + sequence + '?' + attributes);
  }
  
  findOneByShared(shared:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShared/' + shared + '?' + attributes);
  }
  
  findOneBySharedlevel(sharedlevel:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySharedlevel/' + sharedlevel + '?' + attributes);
  }
  
  findOneByIscombined(iscombined:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIscombined/' + iscombined + '?' + attributes);
  }
  
  findOneByVisible(visible:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVisible/' + visible + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByModule(module:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModule/' + module + '?' + attributes);
  }
  
  findOneByTitle(title:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTitle/' + title + '?' + attributes);
  }
  
  findOneByOwner(owner:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOwner/' + owner + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  findOneByModifiedUserId(modifiedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedUserId/' + modifiedUserId + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByRelatedData(relatedData:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedData/' + relatedData + '?' + attributes);
  }
  
  findOneByFields(fields:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFields/' + fields + '?' + attributes);
  }
  
  findOneByFilters(filters:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFilters/' + filters + '?' + attributes);
  }
  
  findOneByGrouping(grouping:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGrouping/' + grouping + '?' + attributes);
  }
  
  findOneByAggregates(aggregates:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAggregates/' + aggregates + '?' + attributes);
  }
  
  findOneByTotalaggregates(totalaggregates:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTotalaggregates/' + totalaggregates + '?' + attributes);
  }
  
  findOneByOptions(options:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOptions/' + options + '?' + attributes);
  }
  
  findOneByLabels(labels:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLabels/' + labels + '?' + attributes);
  }
  
  findOneByChart(chart:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByChart/' + chart + '?' + attributes);
  }
  
  findOneByCombinedfields(combinedfields:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCombinedfields/' + combinedfields + '?' + attributes);
  }
  
  findOneByCalcfields(calcfields:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCalcfields/' + calcfields + '?' + attributes);
  }
  
  findOneByColumnstate(columnstate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByColumnstate/' + columnstate + '?' + attributes);
  }
  
  
  updateAdvancedreportById(id:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportById?id=' + id, advancedreport);
  }
  
  updateAdvancedreportByCategoryId(categoryId:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByCategoryId?categoryId=' + categoryId, advancedreport);
  }
  
  updateAdvancedreportBySequence(sequence:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportBySequence?sequence=' + sequence, advancedreport);
  }
  
  updateAdvancedreportByShared(shared:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByShared?shared=' + shared, advancedreport);
  }
  
  updateAdvancedreportBySharedlevel(sharedlevel:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportBySharedlevel?sharedlevel=' + sharedlevel, advancedreport);
  }
  
  updateAdvancedreportByIscombined(iscombined:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByIscombined?iscombined=' + iscombined, advancedreport);
  }
  
  updateAdvancedreportByVisible(visible:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByVisible?visible=' + visible, advancedreport);
  }
  
  updateAdvancedreportByDeleted(deleted:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByDeleted?deleted=' + deleted, advancedreport);
  }
  
  updateAdvancedreportByModule(module:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByModule?module=' + module, advancedreport);
  }
  
  updateAdvancedreportByTitle(title:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByTitle?title=' + title, advancedreport);
  }
  
  updateAdvancedreportByOwner(owner:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByOwner?owner=' + owner, advancedreport);
  }
  
  updateAdvancedreportByAssignedUserId(assignedUserId:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByAssignedUserId?assignedUserId=' + assignedUserId, advancedreport);
  }
  
  updateAdvancedreportByModifiedUserId(modifiedUserId:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByModifiedUserId?modifiedUserId=' + modifiedUserId, advancedreport);
  }
  
  updateAdvancedreportByDescription(description:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByDescription?description=' + description, advancedreport);
  }
  
  updateAdvancedreportByRelatedData(relatedData:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByRelatedData?relatedData=' + relatedData, advancedreport);
  }
  
  updateAdvancedreportByFields(fields:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByFields?fields=' + fields, advancedreport);
  }
  
  updateAdvancedreportByFilters(filters:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByFilters?filters=' + filters, advancedreport);
  }
  
  updateAdvancedreportByGrouping(grouping:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByGrouping?grouping=' + grouping, advancedreport);
  }
  
  updateAdvancedreportByAggregates(aggregates:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByAggregates?aggregates=' + aggregates, advancedreport);
  }
  
  updateAdvancedreportByTotalaggregates(totalaggregates:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByTotalaggregates?totalaggregates=' + totalaggregates, advancedreport);
  }
  
  updateAdvancedreportByOptions(options:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByOptions?options=' + options, advancedreport);
  }
  
  updateAdvancedreportByLabels(labels:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByLabels?labels=' + labels, advancedreport);
  }
  
  updateAdvancedreportByChart(chart:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByChart?chart=' + chart, advancedreport);
  }
  
  updateAdvancedreportByCombinedfields(combinedfields:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByCombinedfields?combinedfields=' + combinedfields, advancedreport);
  }
  
  updateAdvancedreportByCalcfields(calcfields:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByCalcfields?calcfields=' + calcfields, advancedreport);
  }
  
  updateAdvancedreportByColumnstate(columnstate:any, advancedreport:Advancedreports) {
      return this.http.post(this.basePath + '/updateAdvancedreportByColumnstate?columnstate=' + columnstate, advancedreport);
  }
  
  
  
  //</es-section>
}
