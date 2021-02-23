/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:17 GMT-0400 (Bolivia Time)
 * Time: 2:44:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:17 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:17
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SurveyresponsesAudit} from "../models/surveyresponsesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SurveyresponseAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/surveyresponses-audit`;
  dataChange: BehaviorSubject<SurveyresponsesAudit[]> = new BehaviorSubject<SurveyresponsesAudit[]>([]);
  surveyresponseAuditData: SurveyresponsesAudit = new SurveyresponsesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): SurveyresponsesAudit[] {
    return this.dataChange.value;
  }

  getDataSurveyresponsesAudit(): void {
    this.getAllSurveyresponsesAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SurveyresponsesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSurveyresponsesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSurveyresponseAudit(surveyresponseAudit:SurveyresponsesAudit) {
    return this.http.post(this.basePath, surveyresponseAudit);
  }
  getSurveyresponseAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSurveyresponseAudit(id:any, surveyresponseAudit:SurveyresponsesAudit) {
    return this.http.put(this.basePath + '/' + id, surveyresponseAudit);
  }
  deleteSurveyresponseAudit(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  findOneByFieldName(fieldName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFieldName/' + fieldName + '?' + attributes);
  }
  
  findOneByDataType(dataType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDataType/' + dataType + '?' + attributes);
  }
  
  findOneByBeforeValueString(beforeValueString:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeforeValueString/' + beforeValueString + '?' + attributes);
  }
  
  findOneByAfterValueString(afterValueString:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAfterValueString/' + afterValueString + '?' + attributes);
  }
  
  findOneByBeforeValueText(beforeValueText:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeforeValueText/' + beforeValueText + '?' + attributes);
  }
  
  findOneByAfterValueText(afterValueText:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAfterValueText/' + afterValueText + '?' + attributes);
  }
  
  findOneByDateCreated(dateCreated:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateCreated/' + dateCreated + '?' + attributes);
  }
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  
  updateSurveyresponseAuditById(id:any, surveyresponseAudit:SurveyresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyresponseAuditById?id=' + id, surveyresponseAudit);
  }
  
  updateSurveyresponseAuditByCreatedBy(createdBy:any, surveyresponseAudit:SurveyresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyresponseAuditByCreatedBy?createdBy=' + createdBy, surveyresponseAudit);
  }
  
  updateSurveyresponseAuditByFieldName(fieldName:any, surveyresponseAudit:SurveyresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyresponseAuditByFieldName?fieldName=' + fieldName, surveyresponseAudit);
  }
  
  updateSurveyresponseAuditByDataType(dataType:any, surveyresponseAudit:SurveyresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyresponseAuditByDataType?dataType=' + dataType, surveyresponseAudit);
  }
  
  updateSurveyresponseAuditByBeforeValueString(beforeValueString:any, surveyresponseAudit:SurveyresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyresponseAuditByBeforeValueString?beforeValueString=' + beforeValueString, surveyresponseAudit);
  }
  
  updateSurveyresponseAuditByAfterValueString(afterValueString:any, surveyresponseAudit:SurveyresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyresponseAuditByAfterValueString?afterValueString=' + afterValueString, surveyresponseAudit);
  }
  
  updateSurveyresponseAuditByBeforeValueText(beforeValueText:any, surveyresponseAudit:SurveyresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyresponseAuditByBeforeValueText?beforeValueText=' + beforeValueText, surveyresponseAudit);
  }
  
  updateSurveyresponseAuditByAfterValueText(afterValueText:any, surveyresponseAudit:SurveyresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyresponseAuditByAfterValueText?afterValueText=' + afterValueText, surveyresponseAudit);
  }
  
  updateSurveyresponseAuditByDateCreated(dateCreated:any, surveyresponseAudit:SurveyresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyresponseAuditByDateCreated?dateCreated=' + dateCreated, surveyresponseAudit);
  }
  
  updateSurveyresponseAuditByParentId(parentId:any, surveyresponseAudit:SurveyresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyresponseAuditByParentId?parentId=' + parentId, surveyresponseAudit);
  }
  
  
  
  //</es-section>
}
