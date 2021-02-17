/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:39 GMT-0400 (Bolivia Time)
 * Time: 2:41:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:39 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:39
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosPdfTemplates} from "../models/aosPdfTemplates";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoPdfTemplateService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-pdf-templates`;
  dataChange: BehaviorSubject<AosPdfTemplates[]> = new BehaviorSubject<AosPdfTemplates[]>([]);
  aoPdfTemplateData: AosPdfTemplates = new AosPdfTemplates();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosPdfTemplates[] {
    return this.dataChange.value;
  }

  getDataAosPdfTemplates(): void {
    this.getAllAosPdfTemplates().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosPdfTemplates[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosPdfTemplates(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoPdfTemplate(aoPdfTemplate:AosPdfTemplates) {
    return this.http.post(this.basePath, aoPdfTemplate);
  }
  getAoPdfTemplate(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoPdfTemplate(id:any, aoPdfTemplate:AosPdfTemplates) {
    return this.http.put(this.basePath + '/' + id, aoPdfTemplate);
  }
  deleteAoPdfTemplate(id:any) {
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
  
  findOneByActive(active:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActive/' + active + '?' + attributes);
  }
  
  findOneByMarginLeft(marginLeft:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMarginLeft/' + marginLeft + '?' + attributes);
  }
  
  findOneByMarginRight(marginRight:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMarginRight/' + marginRight + '?' + attributes);
  }
  
  findOneByMarginTop(marginTop:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMarginTop/' + marginTop + '?' + attributes);
  }
  
  findOneByMarginBottom(marginBottom:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMarginBottom/' + marginBottom + '?' + attributes);
  }
  
  findOneByMarginHeader(marginHeader:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMarginHeader/' + marginHeader + '?' + attributes);
  }
  
  findOneByMarginFooter(marginFooter:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMarginFooter/' + marginFooter + '?' + attributes);
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
  
  findOneByPageSize(pageSize:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPageSize/' + pageSize + '?' + attributes);
  }
  
  findOneByOrientation(orientation:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOrientation/' + orientation + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByPdfheader(pdfheader:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPdfheader/' + pdfheader + '?' + attributes);
  }
  
  findOneByPdffooter(pdffooter:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPdffooter/' + pdffooter + '?' + attributes);
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
  
  
  updateAoPdfTemplateById(id:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateById?id=' + id, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByDeleted(deleted:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByDeleted?deleted=' + deleted, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByActive(active:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByActive?active=' + active, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByMarginLeft(marginLeft:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByMarginLeft?marginLeft=' + marginLeft, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByMarginRight(marginRight:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByMarginRight?marginRight=' + marginRight, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByMarginTop(marginTop:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByMarginTop?marginTop=' + marginTop, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByMarginBottom(marginBottom:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByMarginBottom?marginBottom=' + marginBottom, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByMarginHeader(marginHeader:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByMarginHeader?marginHeader=' + marginHeader, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByMarginFooter(marginFooter:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByMarginFooter?marginFooter=' + marginFooter, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByName(name:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByName?name=' + name, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByType(type:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByType?type=' + type, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByPageSize(pageSize:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByPageSize?pageSize=' + pageSize, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByOrientation(orientation:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByOrientation?orientation=' + orientation, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByDescription(description:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByDescription?description=' + description, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByPdfheader(pdfheader:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByPdfheader?pdfheader=' + pdfheader, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByPdffooter(pdffooter:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByPdffooter?pdffooter=' + pdffooter, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByDateEntered(dateEntered:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByDateEntered?dateEntered=' + dateEntered, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByDateModified(dateModified:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByDateModified?dateModified=' + dateModified, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByModifiedUserId(modifiedUserId:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByModifiedUserId?modifiedUserId=' + modifiedUserId, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByCreatedBy(createdBy:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByCreatedBy?createdBy=' + createdBy, aoPdfTemplate);
  }
  
  updateAoPdfTemplateByAssignedUserId(assignedUserId:any, aoPdfTemplate:AosPdfTemplates) {
      return this.http.post(this.basePath + '/updateAoPdfTemplateByAssignedUserId?assignedUserId=' + assignedUserId, aoPdfTemplate);
  }
  
  
  
  //</es-section>
}
