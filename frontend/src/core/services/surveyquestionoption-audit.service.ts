/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:10 GMT-0400 (Bolivia Time)
 * Time: 2:44:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:10 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:10
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SurveyquestionoptionsAudit} from "../models/surveyquestionoptionsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SurveyquestionoptionAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/surveyquestionoptions-audit`;
  dataChange: BehaviorSubject<SurveyquestionoptionsAudit[]> = new BehaviorSubject<SurveyquestionoptionsAudit[]>([]);
  surveyquestionoptionAuditData: SurveyquestionoptionsAudit = new SurveyquestionoptionsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): SurveyquestionoptionsAudit[] {
    return this.dataChange.value;
  }

  getDataSurveyquestionoptionsAudit(): void {
    this.getAllSurveyquestionoptionsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SurveyquestionoptionsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSurveyquestionoptionsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSurveyquestionoptionAudit(surveyquestionoptionAudit:SurveyquestionoptionsAudit) {
    return this.http.post(this.basePath, surveyquestionoptionAudit);
  }
  getSurveyquestionoptionAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSurveyquestionoptionAudit(id:any, surveyquestionoptionAudit:SurveyquestionoptionsAudit) {
    return this.http.put(this.basePath + '/' + id, surveyquestionoptionAudit);
  }
  deleteSurveyquestionoptionAudit(id:any) {
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
  
  
  updateSurveyquestionoptionAuditById(id:any, surveyquestionoptionAudit:SurveyquestionoptionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionAuditById?id=' + id, surveyquestionoptionAudit);
  }
  
  updateSurveyquestionoptionAuditByCreatedBy(createdBy:any, surveyquestionoptionAudit:SurveyquestionoptionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionAuditByCreatedBy?createdBy=' + createdBy, surveyquestionoptionAudit);
  }
  
  updateSurveyquestionoptionAuditByFieldName(fieldName:any, surveyquestionoptionAudit:SurveyquestionoptionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionAuditByFieldName?fieldName=' + fieldName, surveyquestionoptionAudit);
  }
  
  updateSurveyquestionoptionAuditByDataType(dataType:any, surveyquestionoptionAudit:SurveyquestionoptionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionAuditByDataType?dataType=' + dataType, surveyquestionoptionAudit);
  }
  
  updateSurveyquestionoptionAuditByBeforeValueString(beforeValueString:any, surveyquestionoptionAudit:SurveyquestionoptionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionAuditByBeforeValueString?beforeValueString=' + beforeValueString, surveyquestionoptionAudit);
  }
  
  updateSurveyquestionoptionAuditByAfterValueString(afterValueString:any, surveyquestionoptionAudit:SurveyquestionoptionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionAuditByAfterValueString?afterValueString=' + afterValueString, surveyquestionoptionAudit);
  }
  
  updateSurveyquestionoptionAuditByBeforeValueText(beforeValueText:any, surveyquestionoptionAudit:SurveyquestionoptionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionAuditByBeforeValueText?beforeValueText=' + beforeValueText, surveyquestionoptionAudit);
  }
  
  updateSurveyquestionoptionAuditByAfterValueText(afterValueText:any, surveyquestionoptionAudit:SurveyquestionoptionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionAuditByAfterValueText?afterValueText=' + afterValueText, surveyquestionoptionAudit);
  }
  
  updateSurveyquestionoptionAuditByDateCreated(dateCreated:any, surveyquestionoptionAudit:SurveyquestionoptionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionAuditByDateCreated?dateCreated=' + dateCreated, surveyquestionoptionAudit);
  }
  
  updateSurveyquestionoptionAuditByParentId(parentId:any, surveyquestionoptionAudit:SurveyquestionoptionsAudit) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionAuditByParentId?parentId=' + parentId, surveyquestionoptionAudit);
  }
  
  
  
  //</es-section>
}
