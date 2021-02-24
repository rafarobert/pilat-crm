/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:14 GMT-0400 (Bolivia Time)
 * Time: 2:44:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:14 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Surveyquestions} from "../models/surveyquestions";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SurveyquestionService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/surveyquestions`;
  dataChange: BehaviorSubject<Surveyquestions[]> = new BehaviorSubject<Surveyquestions[]>([]);
  surveyquestionData: Surveyquestions = new Surveyquestions();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Surveyquestions[] {
    return this.dataChange.value;
  }

  getDataSurveyquestions(): void {
    this.getAllSurveyquestions().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Surveyquestions[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSurveyquestions(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSurveyquestion(surveyquestion:Surveyquestions) {
    return this.http.post(this.basePath, surveyquestion);
  }
  getSurveyquestion(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSurveyquestion(id:any, surveyquestion:Surveyquestions) {
    return this.http.put(this.basePath + '/' + id, surveyquestion);
  }
  deleteSurveyquestion(id:any) {
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
  
  findOneByHappinessQuestion(happinessQuestion:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByHappinessQuestion/' + happinessQuestion + '?' + attributes);
  }
  
  findOneBySortOrder(sortOrder:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySortOrder/' + sortOrder + '?' + attributes);
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
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  findOneBySurveyId(surveyId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySurveyId/' + surveyId + '?' + attributes);
  }
  
  
  updateSurveyquestionById(id:any, surveyquestion:Surveyquestions) {
      return this.http.post(this.basePath + '/updateSurveyquestionById?id=' + id, surveyquestion);
  }
  
  updateSurveyquestionByDeleted(deleted:any, surveyquestion:Surveyquestions) {
      return this.http.post(this.basePath + '/updateSurveyquestionByDeleted?deleted=' + deleted, surveyquestion);
  }
  
  updateSurveyquestionByHappinessQuestion(happinessQuestion:any, surveyquestion:Surveyquestions) {
      return this.http.post(this.basePath + '/updateSurveyquestionByHappinessQuestion?happinessQuestion=' + happinessQuestion, surveyquestion);
  }
  
  updateSurveyquestionBySortOrder(sortOrder:any, surveyquestion:Surveyquestions) {
      return this.http.post(this.basePath + '/updateSurveyquestionBySortOrder?sortOrder=' + sortOrder, surveyquestion);
  }
  
  updateSurveyquestionByName(name:any, surveyquestion:Surveyquestions) {
      return this.http.post(this.basePath + '/updateSurveyquestionByName?name=' + name, surveyquestion);
  }
  
  updateSurveyquestionByType(type:any, surveyquestion:Surveyquestions) {
      return this.http.post(this.basePath + '/updateSurveyquestionByType?type=' + type, surveyquestion);
  }
  
  updateSurveyquestionByDescription(description:any, surveyquestion:Surveyquestions) {
      return this.http.post(this.basePath + '/updateSurveyquestionByDescription?description=' + description, surveyquestion);
  }
  
  updateSurveyquestionByDateEntered(dateEntered:any, surveyquestion:Surveyquestions) {
      return this.http.post(this.basePath + '/updateSurveyquestionByDateEntered?dateEntered=' + dateEntered, surveyquestion);
  }
  
  updateSurveyquestionByDateModified(dateModified:any, surveyquestion:Surveyquestions) {
      return this.http.post(this.basePath + '/updateSurveyquestionByDateModified?dateModified=' + dateModified, surveyquestion);
  }
  
  updateSurveyquestionByModifiedUserId(modifiedUserId:any, surveyquestion:Surveyquestions) {
      return this.http.post(this.basePath + '/updateSurveyquestionByModifiedUserId?modifiedUserId=' + modifiedUserId, surveyquestion);
  }
  
  updateSurveyquestionByCreatedBy(createdBy:any, surveyquestion:Surveyquestions) {
      return this.http.post(this.basePath + '/updateSurveyquestionByCreatedBy?createdBy=' + createdBy, surveyquestion);
  }
  
  updateSurveyquestionByAssignedUserId(assignedUserId:any, surveyquestion:Surveyquestions) {
      return this.http.post(this.basePath + '/updateSurveyquestionByAssignedUserId?assignedUserId=' + assignedUserId, surveyquestion);
  }
  
  updateSurveyquestionBySurveyId(surveyId:any, surveyquestion:Surveyquestions) {
      return this.http.post(this.basePath + '/updateSurveyquestionBySurveyId?surveyId=' + surveyId, surveyquestion);
  }
  
  
  
  //</es-section>
}
