/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:18:54 GMT-0400 (Bolivia Time)
 * Time: 3:18:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:18:54 GMT-0400 (Bolivia Time)
 * Last time updated: 3:18:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Kreports} from "../models/kreports";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class KreportService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/kreports`;
  dataChange: BehaviorSubject<Kreports[]> = new BehaviorSubject<Kreports[]>([]);
  kreportData: Kreports;

  constructor(private http: HttpClient) { }

  get data(): Kreports[] {
    return this.dataChange.value;
  }

  getDataKreports(): void {
    this.getKreports().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Kreports[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getKreports(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createKreport(kreport:Kreports) {
    return this.http.post(this.basePath, kreport);
  }
  getKreport(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateKreport(id:any, kreport:Kreports) {
    return this.http.put(this.basePath + '/' + id, kreport);
  }
  deleteKreport(id:any) {
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
  
  findOneByCategoryPriority(categoryPriority:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCategoryPriority/' + categoryPriority + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByReportModule(reportModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReportModule/' + reportModule + '?' + attributes);
  }
  
  findOneByReportStatus(reportStatus:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReportStatus/' + reportStatus + '?' + attributes);
  }
  
  findOneByListtype(listtype:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByListtype/' + listtype + '?' + attributes);
  }
  
  findOneBySelectionlimit(selectionlimit:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySelectionlimit/' + selectionlimit + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByUnionModules(unionModules:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUnionModules/' + unionModules + '?' + attributes);
  }
  
  findOneByReportoptions(reportoptions:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReportoptions/' + reportoptions + '?' + attributes);
  }
  
  findOneByListtypeproperties(listtypeproperties:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByListtypeproperties/' + listtypeproperties + '?' + attributes);
  }
  
  findOneByPresentationParams(presentationParams:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPresentationParams/' + presentationParams + '?' + attributes);
  }
  
  findOneByVisualizationParams(visualizationParams:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVisualizationParams/' + visualizationParams + '?' + attributes);
  }
  
  findOneByIntegrationParams(integrationParams:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIntegrationParams/' + integrationParams + '?' + attributes);
  }
  
  findOneByWheregroups(wheregroups:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByWheregroups/' + wheregroups + '?' + attributes);
  }
  
  findOneByWhereconditions(whereconditions:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByWhereconditions/' + whereconditions + '?' + attributes);
  }
  
  findOneByListfields(listfields:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByListfields/' + listfields + '?' + attributes);
  }
  
  findOneByUnionlistfields(unionlistfields:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUnionlistfields/' + unionlistfields + '?' + attributes);
  }
  
  findOneByAdvancedoptions(advancedoptions:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAdvancedoptions/' + advancedoptions + '?' + attributes);
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
  
  findOneByCategoryId(categoryId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCategoryId/' + categoryId + '?' + attributes);
  }
  
  
  updateKreportById(id:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportById?id=' + id, kreport);
  }
  
  updateKreportByDeleted(deleted:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByDeleted?deleted=' + deleted, kreport);
  }
  
  updateKreportByCategoryPriority(categoryPriority:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByCategoryPriority?categoryPriority=' + categoryPriority, kreport);
  }
  
  updateKreportByName(name:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByName?name=' + name, kreport);
  }
  
  updateKreportByReportModule(reportModule:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByReportModule?reportModule=' + reportModule, kreport);
  }
  
  updateKreportByReportStatus(reportStatus:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByReportStatus?reportStatus=' + reportStatus, kreport);
  }
  
  updateKreportByListtype(listtype:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByListtype?listtype=' + listtype, kreport);
  }
  
  updateKreportBySelectionlimit(selectionlimit:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportBySelectionlimit?selectionlimit=' + selectionlimit, kreport);
  }
  
  updateKreportByDescription(description:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByDescription?description=' + description, kreport);
  }
  
  updateKreportByUnionModules(unionModules:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByUnionModules?unionModules=' + unionModules, kreport);
  }
  
  updateKreportByReportoptions(reportoptions:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByReportoptions?reportoptions=' + reportoptions, kreport);
  }
  
  updateKreportByListtypeproperties(listtypeproperties:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByListtypeproperties?listtypeproperties=' + listtypeproperties, kreport);
  }
  
  updateKreportByPresentationParams(presentationParams:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByPresentationParams?presentationParams=' + presentationParams, kreport);
  }
  
  updateKreportByVisualizationParams(visualizationParams:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByVisualizationParams?visualizationParams=' + visualizationParams, kreport);
  }
  
  updateKreportByIntegrationParams(integrationParams:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByIntegrationParams?integrationParams=' + integrationParams, kreport);
  }
  
  updateKreportByWheregroups(wheregroups:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByWheregroups?wheregroups=' + wheregroups, kreport);
  }
  
  updateKreportByWhereconditions(whereconditions:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByWhereconditions?whereconditions=' + whereconditions, kreport);
  }
  
  updateKreportByListfields(listfields:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByListfields?listfields=' + listfields, kreport);
  }
  
  updateKreportByUnionlistfields(unionlistfields:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByUnionlistfields?unionlistfields=' + unionlistfields, kreport);
  }
  
  updateKreportByAdvancedoptions(advancedoptions:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByAdvancedoptions?advancedoptions=' + advancedoptions, kreport);
  }
  
  updateKreportByDateEntered(dateEntered:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByDateEntered?dateEntered=' + dateEntered, kreport);
  }
  
  updateKreportByDateModified(dateModified:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByDateModified?dateModified=' + dateModified, kreport);
  }
  
  updateKreportByModifiedUserId(modifiedUserId:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByModifiedUserId?modifiedUserId=' + modifiedUserId, kreport);
  }
  
  updateKreportByCreatedBy(createdBy:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByCreatedBy?createdBy=' + createdBy, kreport);
  }
  
  updateKreportByAssignedUserId(assignedUserId:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByAssignedUserId?assignedUserId=' + assignedUserId, kreport);
  }
  
  updateKreportByCategoryId(categoryId:any, kreport:Kreports) {
      return this.http.post(this.basePath + '/updateKreportByCategoryId?categoryId=' + categoryId, kreport);
  }
  
  
  
  //</es-section>
}
