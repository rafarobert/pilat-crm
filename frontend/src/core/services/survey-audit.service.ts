/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:18 GMT-0400 (Bolivia Time)
 * Time: 2:44:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:18 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:18
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SurveysAudit} from "../models/surveysAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SurveyAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/surveys-audit`;
  dataChange: BehaviorSubject<SurveysAudit[]> = new BehaviorSubject<SurveysAudit[]>([]);
  surveyAuditData: SurveysAudit = new SurveysAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): SurveysAudit[] {
    return this.dataChange.value;
  }

  getDataSurveysAudit(): void {
    this.getAllSurveysAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SurveysAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSurveysAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSurveyAudit(surveyAudit:SurveysAudit) {
    return this.http.post(this.basePath, surveyAudit);
  }
  getSurveyAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSurveyAudit(id:any, surveyAudit:SurveysAudit) {
    return this.http.put(this.basePath + '/' + id, surveyAudit);
  }
  deleteSurveyAudit(id:any) {
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
  
  
  updateSurveyAuditById(id:any, surveyAudit:SurveysAudit) {
      return this.http.post(this.basePath + '/updateSurveyAuditById?id=' + id, surveyAudit);
  }
  
  updateSurveyAuditByCreatedBy(createdBy:any, surveyAudit:SurveysAudit) {
      return this.http.post(this.basePath + '/updateSurveyAuditByCreatedBy?createdBy=' + createdBy, surveyAudit);
  }
  
  updateSurveyAuditByFieldName(fieldName:any, surveyAudit:SurveysAudit) {
      return this.http.post(this.basePath + '/updateSurveyAuditByFieldName?fieldName=' + fieldName, surveyAudit);
  }
  
  updateSurveyAuditByDataType(dataType:any, surveyAudit:SurveysAudit) {
      return this.http.post(this.basePath + '/updateSurveyAuditByDataType?dataType=' + dataType, surveyAudit);
  }
  
  updateSurveyAuditByBeforeValueString(beforeValueString:any, surveyAudit:SurveysAudit) {
      return this.http.post(this.basePath + '/updateSurveyAuditByBeforeValueString?beforeValueString=' + beforeValueString, surveyAudit);
  }
  
  updateSurveyAuditByAfterValueString(afterValueString:any, surveyAudit:SurveysAudit) {
      return this.http.post(this.basePath + '/updateSurveyAuditByAfterValueString?afterValueString=' + afterValueString, surveyAudit);
  }
  
  updateSurveyAuditByBeforeValueText(beforeValueText:any, surveyAudit:SurveysAudit) {
      return this.http.post(this.basePath + '/updateSurveyAuditByBeforeValueText?beforeValueText=' + beforeValueText, surveyAudit);
  }
  
  updateSurveyAuditByAfterValueText(afterValueText:any, surveyAudit:SurveysAudit) {
      return this.http.post(this.basePath + '/updateSurveyAuditByAfterValueText?afterValueText=' + afterValueText, surveyAudit);
  }
  
  updateSurveyAuditByDateCreated(dateCreated:any, surveyAudit:SurveysAudit) {
      return this.http.post(this.basePath + '/updateSurveyAuditByDateCreated?dateCreated=' + dateCreated, surveyAudit);
  }
  
  updateSurveyAuditByParentId(parentId:any, surveyAudit:SurveysAudit) {
      return this.http.post(this.basePath + '/updateSurveyAuditByParentId?parentId=' + parentId, surveyAudit);
  }
  
  
  
  //</es-section>
}
