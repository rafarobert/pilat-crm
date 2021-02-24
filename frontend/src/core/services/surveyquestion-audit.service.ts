/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:15 GMT-0400 (Bolivia Time)
 * Time: 2:44:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:15 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:15
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SurveyquestionsAudit} from "../models/surveyquestionsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SurveyquestionAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/surveyquestions-audit`;
  dataChange: BehaviorSubject<SurveyquestionsAudit[]> = new BehaviorSubject<SurveyquestionsAudit[]>([]);
  surveyquestionAuditData: SurveyquestionsAudit = new SurveyquestionsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): SurveyquestionsAudit[] {
    return this.dataChange.value;
  }

  getDataSurveyquestionsAudit(): void {
    this.getAllSurveyquestionsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SurveyquestionsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSurveyquestionsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSurveyquestionAudit(surveyquestionAudit:SurveyquestionsAudit) {
    return this.http.post(this.basePath, surveyquestionAudit);
  }
  getSurveyquestionAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSurveyquestionAudit(id:any, surveyquestionAudit:SurveyquestionsAudit) {
    return this.http.put(this.basePath + '/' + id, surveyquestionAudit);
  }
  deleteSurveyquestionAudit(id:any) {
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
  
  
  updateSurveyquestionAuditById(id:any, surveyquestionAudit:SurveyquestionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionAuditById?id=' + id, surveyquestionAudit);
  }
  
  updateSurveyquestionAuditByCreatedBy(createdBy:any, surveyquestionAudit:SurveyquestionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionAuditByCreatedBy?createdBy=' + createdBy, surveyquestionAudit);
  }
  
  updateSurveyquestionAuditByFieldName(fieldName:any, surveyquestionAudit:SurveyquestionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionAuditByFieldName?fieldName=' + fieldName, surveyquestionAudit);
  }
  
  updateSurveyquestionAuditByDataType(dataType:any, surveyquestionAudit:SurveyquestionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionAuditByDataType?dataType=' + dataType, surveyquestionAudit);
  }
  
  updateSurveyquestionAuditByBeforeValueString(beforeValueString:any, surveyquestionAudit:SurveyquestionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionAuditByBeforeValueString?beforeValueString=' + beforeValueString, surveyquestionAudit);
  }
  
  updateSurveyquestionAuditByAfterValueString(afterValueString:any, surveyquestionAudit:SurveyquestionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionAuditByAfterValueString?afterValueString=' + afterValueString, surveyquestionAudit);
  }
  
  updateSurveyquestionAuditByBeforeValueText(beforeValueText:any, surveyquestionAudit:SurveyquestionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionAuditByBeforeValueText?beforeValueText=' + beforeValueText, surveyquestionAudit);
  }
  
  updateSurveyquestionAuditByAfterValueText(afterValueText:any, surveyquestionAudit:SurveyquestionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionAuditByAfterValueText?afterValueText=' + afterValueText, surveyquestionAudit);
  }
  
  updateSurveyquestionAuditByDateCreated(dateCreated:any, surveyquestionAudit:SurveyquestionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionAuditByDateCreated?dateCreated=' + dateCreated, surveyquestionAudit);
  }
  
  updateSurveyquestionAuditByParentId(parentId:any, surveyquestionAudit:SurveyquestionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionAuditByParentId?parentId=' + parentId, surveyquestionAudit);
  }
  
  
  
  //</es-section>
}
