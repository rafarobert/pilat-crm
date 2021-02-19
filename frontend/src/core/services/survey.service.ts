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
import {Surveys} from "../models/surveys";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/surveys`;
  dataChange: BehaviorSubject<Surveys[]> = new BehaviorSubject<Surveys[]>([]);
  surveyData: Surveys = new Surveys();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Surveys[] {
    return this.dataChange.value;
  }

  getDataSurveys(): void {
    this.getAllSurveys().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Surveys[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSurveys(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSurvey(survey:Surveys) {
    return this.http.post(this.basePath, survey);
  }
  getSurvey(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSurvey(id:any, survey:Surveys) {
    return this.http.put(this.basePath + '/' + id, survey);
  }
  deleteSurvey(id:any) {
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
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneBySubmitText(submitText:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySubmitText/' + submitText + '?' + attributes);
  }
  
  findOneBySatisfiedText(satisfiedText:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySatisfiedText/' + satisfiedText + '?' + attributes);
  }
  
  findOneByNeitherText(neitherText:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNeitherText/' + neitherText + '?' + attributes);
  }
  
  findOneByDissatisfiedText(dissatisfiedText:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDissatisfiedText/' + dissatisfiedText + '?' + attributes);
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
  
  
  updateSurveyById(id:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyById?id=' + id, survey);
  }
  
  updateSurveyByDeleted(deleted:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyByDeleted?deleted=' + deleted, survey);
  }
  
  updateSurveyByName(name:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyByName?name=' + name, survey);
  }
  
  updateSurveyByStatus(status:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyByStatus?status=' + status, survey);
  }
  
  updateSurveyBySubmitText(submitText:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyBySubmitText?submitText=' + submitText, survey);
  }
  
  updateSurveyBySatisfiedText(satisfiedText:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyBySatisfiedText?satisfiedText=' + satisfiedText, survey);
  }
  
  updateSurveyByNeitherText(neitherText:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyByNeitherText?neitherText=' + neitherText, survey);
  }
  
  updateSurveyByDissatisfiedText(dissatisfiedText:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyByDissatisfiedText?dissatisfiedText=' + dissatisfiedText, survey);
  }
  
  updateSurveyByDescription(description:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyByDescription?description=' + description, survey);
  }
  
  updateSurveyByDateEntered(dateEntered:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyByDateEntered?dateEntered=' + dateEntered, survey);
  }
  
  updateSurveyByDateModified(dateModified:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyByDateModified?dateModified=' + dateModified, survey);
  }
  
  updateSurveyByModifiedUserId(modifiedUserId:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyByModifiedUserId?modifiedUserId=' + modifiedUserId, survey);
  }
  
  updateSurveyByCreatedBy(createdBy:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyByCreatedBy?createdBy=' + createdBy, survey);
  }
  
  updateSurveyByAssignedUserId(assignedUserId:any, survey:Surveys) {
      return this.http.post(this.basePath + '/updateSurveyByAssignedUserId?assignedUserId=' + assignedUserId, survey);
  }
  
  
  
  //</es-section>
}
