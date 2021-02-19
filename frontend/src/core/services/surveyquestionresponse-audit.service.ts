/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:13 GMT-0400 (Bolivia Time)
 * Time: 2:44:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:13 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:13
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SurveyquestionresponsesAudit} from "../models/surveyquestionresponsesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SurveyquestionresponseAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/surveyquestionresponses-audit`;
  dataChange: BehaviorSubject<SurveyquestionresponsesAudit[]> = new BehaviorSubject<SurveyquestionresponsesAudit[]>([]);
  surveyquestionresponseAuditData: SurveyquestionresponsesAudit = new SurveyquestionresponsesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): SurveyquestionresponsesAudit[] {
    return this.dataChange.value;
  }

  getDataSurveyquestionresponsesAudit(): void {
    this.getAllSurveyquestionresponsesAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SurveyquestionresponsesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSurveyquestionresponsesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSurveyquestionresponseAudit(surveyquestionresponseAudit:SurveyquestionresponsesAudit) {
    return this.http.post(this.basePath, surveyquestionresponseAudit);
  }
  getSurveyquestionresponseAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSurveyquestionresponseAudit(id:any, surveyquestionresponseAudit:SurveyquestionresponsesAudit) {
    return this.http.put(this.basePath + '/' + id, surveyquestionresponseAudit);
  }
  deleteSurveyquestionresponseAudit(id:any) {
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
  
  
  updateSurveyquestionresponseAuditById(id:any, surveyquestionresponseAudit:SurveyquestionresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseAuditById?id=' + id, surveyquestionresponseAudit);
  }
  
  updateSurveyquestionresponseAuditByCreatedBy(createdBy:any, surveyquestionresponseAudit:SurveyquestionresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseAuditByCreatedBy?createdBy=' + createdBy, surveyquestionresponseAudit);
  }
  
  updateSurveyquestionresponseAuditByFieldName(fieldName:any, surveyquestionresponseAudit:SurveyquestionresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseAuditByFieldName?fieldName=' + fieldName, surveyquestionresponseAudit);
  }
  
  updateSurveyquestionresponseAuditByDataType(dataType:any, surveyquestionresponseAudit:SurveyquestionresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseAuditByDataType?dataType=' + dataType, surveyquestionresponseAudit);
  }
  
  updateSurveyquestionresponseAuditByBeforeValueString(beforeValueString:any, surveyquestionresponseAudit:SurveyquestionresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseAuditByBeforeValueString?beforeValueString=' + beforeValueString, surveyquestionresponseAudit);
  }
  
  updateSurveyquestionresponseAuditByAfterValueString(afterValueString:any, surveyquestionresponseAudit:SurveyquestionresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseAuditByAfterValueString?afterValueString=' + afterValueString, surveyquestionresponseAudit);
  }
  
  updateSurveyquestionresponseAuditByBeforeValueText(beforeValueText:any, surveyquestionresponseAudit:SurveyquestionresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseAuditByBeforeValueText?beforeValueText=' + beforeValueText, surveyquestionresponseAudit);
  }
  
  updateSurveyquestionresponseAuditByAfterValueText(afterValueText:any, surveyquestionresponseAudit:SurveyquestionresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseAuditByAfterValueText?afterValueText=' + afterValueText, surveyquestionresponseAudit);
  }
  
  updateSurveyquestionresponseAuditByDateCreated(dateCreated:any, surveyquestionresponseAudit:SurveyquestionresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseAuditByDateCreated?dateCreated=' + dateCreated, surveyquestionresponseAudit);
  }
  
  updateSurveyquestionresponseAuditByParentId(parentId:any, surveyquestionresponseAudit:SurveyquestionresponsesAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseAuditByParentId?parentId=' + parentId, surveyquestionresponseAudit);
  }
  
  
  
  //</es-section>
}
