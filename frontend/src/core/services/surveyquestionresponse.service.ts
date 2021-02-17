/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:12 GMT-0400 (Bolivia Time)
 * Time: 2:44:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:12 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:12
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Surveyquestionresponses} from "../models/surveyquestionresponses";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SurveyquestionresponseService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/surveyquestionresponses`;
  dataChange: BehaviorSubject<Surveyquestionresponses[]> = new BehaviorSubject<Surveyquestionresponses[]>([]);
  surveyquestionresponseData: Surveyquestionresponses = new Surveyquestionresponses();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Surveyquestionresponses[] {
    return this.dataChange.value;
  }

  getDataSurveyquestionresponses(): void {
    this.getAllSurveyquestionresponses().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Surveyquestionresponses[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSurveyquestionresponses(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSurveyquestionresponse(surveyquestionresponse:Surveyquestionresponses) {
    return this.http.post(this.basePath, surveyquestionresponse);
  }
  getSurveyquestionresponse(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSurveyquestionresponse(id:any, surveyquestionresponse:Surveyquestionresponses) {
    return this.http.put(this.basePath + '/' + id, surveyquestionresponse);
  }
  deleteSurveyquestionresponse(id:any) {
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
  
  findOneByAnswerBool(answerBool:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAnswerBool/' + answerBool + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByAnswer(answer:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAnswer/' + answer + '?' + attributes);
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
  
  findOneByAnswerDatetime(answerDatetime:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAnswerDatetime/' + answerDatetime + '?' + attributes);
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
  
  findOneBySurveyquestionId(surveyquestionId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySurveyquestionId/' + surveyquestionId + '?' + attributes);
  }
  
  findOneBySurveyresponseId(surveyresponseId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySurveyresponseId/' + surveyresponseId + '?' + attributes);
  }
  
  
  updateSurveyquestionresponseById(id:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseById?id=' + id, surveyquestionresponse);
  }
  
  updateSurveyquestionresponseByDeleted(deleted:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseByDeleted?deleted=' + deleted, surveyquestionresponse);
  }
  
  updateSurveyquestionresponseByAnswerBool(answerBool:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseByAnswerBool?answerBool=' + answerBool, surveyquestionresponse);
  }
  
  updateSurveyquestionresponseByName(name:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseByName?name=' + name, surveyquestionresponse);
  }
  
  updateSurveyquestionresponseByDescription(description:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseByDescription?description=' + description, surveyquestionresponse);
  }
  
  updateSurveyquestionresponseByAnswer(answer:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseByAnswer?answer=' + answer, surveyquestionresponse);
  }
  
  updateSurveyquestionresponseByDateEntered(dateEntered:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseByDateEntered?dateEntered=' + dateEntered, surveyquestionresponse);
  }
  
  updateSurveyquestionresponseByDateModified(dateModified:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseByDateModified?dateModified=' + dateModified, surveyquestionresponse);
  }
  
  updateSurveyquestionresponseByAnswerDatetime(answerDatetime:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseByAnswerDatetime?answerDatetime=' + answerDatetime, surveyquestionresponse);
  }
  
  updateSurveyquestionresponseByModifiedUserId(modifiedUserId:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseByModifiedUserId?modifiedUserId=' + modifiedUserId, surveyquestionresponse);
  }
  
  updateSurveyquestionresponseByCreatedBy(createdBy:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseByCreatedBy?createdBy=' + createdBy, surveyquestionresponse);
  }
  
  updateSurveyquestionresponseByAssignedUserId(assignedUserId:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseByAssignedUserId?assignedUserId=' + assignedUserId, surveyquestionresponse);
  }
  
  updateSurveyquestionresponseBySurveyquestionId(surveyquestionId:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseBySurveyquestionId?surveyquestionId=' + surveyquestionId, surveyquestionresponse);
  }
  
  updateSurveyquestionresponseBySurveyresponseId(surveyresponseId:any, surveyquestionresponse:Surveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionresponseBySurveyresponseId?surveyresponseId=' + surveyresponseId, surveyquestionresponse);
  }
  
  
  
  //</es-section>
}
