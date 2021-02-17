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
import {Surveyquestionoptions} from "../models/surveyquestionoptions";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SurveyquestionoptionService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/surveyquestionoptions`;
  dataChange: BehaviorSubject<Surveyquestionoptions[]> = new BehaviorSubject<Surveyquestionoptions[]>([]);
  surveyquestionoptionData: Surveyquestionoptions = new Surveyquestionoptions();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Surveyquestionoptions[] {
    return this.dataChange.value;
  }

  getDataSurveyquestionoptions(): void {
    this.getAllSurveyquestionoptions().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Surveyquestionoptions[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSurveyquestionoptions(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSurveyquestionoption(surveyquestionoption:Surveyquestionoptions) {
    return this.http.post(this.basePath, surveyquestionoption);
  }
  getSurveyquestionoption(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSurveyquestionoption(id:any, surveyquestionoption:Surveyquestionoptions) {
    return this.http.put(this.basePath + '/' + id, surveyquestionoption);
  }
  deleteSurveyquestionoption(id:any) {
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
  
  findOneBySurveyQuestionId(surveyQuestionId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySurveyQuestionId/' + surveyQuestionId + '?' + attributes);
  }
  
  
  updateSurveyquestionoptionById(id:any, surveyquestionoption:Surveyquestionoptions) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionById?id=' + id, surveyquestionoption);
  }
  
  updateSurveyquestionoptionByDeleted(deleted:any, surveyquestionoption:Surveyquestionoptions) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionByDeleted?deleted=' + deleted, surveyquestionoption);
  }
  
  updateSurveyquestionoptionBySortOrder(sortOrder:any, surveyquestionoption:Surveyquestionoptions) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionBySortOrder?sortOrder=' + sortOrder, surveyquestionoption);
  }
  
  updateSurveyquestionoptionByName(name:any, surveyquestionoption:Surveyquestionoptions) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionByName?name=' + name, surveyquestionoption);
  }
  
  updateSurveyquestionoptionByDescription(description:any, surveyquestionoption:Surveyquestionoptions) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionByDescription?description=' + description, surveyquestionoption);
  }
  
  updateSurveyquestionoptionByDateEntered(dateEntered:any, surveyquestionoption:Surveyquestionoptions) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionByDateEntered?dateEntered=' + dateEntered, surveyquestionoption);
  }
  
  updateSurveyquestionoptionByDateModified(dateModified:any, surveyquestionoption:Surveyquestionoptions) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionByDateModified?dateModified=' + dateModified, surveyquestionoption);
  }
  
  updateSurveyquestionoptionByModifiedUserId(modifiedUserId:any, surveyquestionoption:Surveyquestionoptions) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionByModifiedUserId?modifiedUserId=' + modifiedUserId, surveyquestionoption);
  }
  
  updateSurveyquestionoptionByCreatedBy(createdBy:any, surveyquestionoption:Surveyquestionoptions) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionByCreatedBy?createdBy=' + createdBy, surveyquestionoption);
  }
  
  updateSurveyquestionoptionByAssignedUserId(assignedUserId:any, surveyquestionoption:Surveyquestionoptions) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionByAssignedUserId?assignedUserId=' + assignedUserId, surveyquestionoption);
  }
  
  updateSurveyquestionoptionBySurveyQuestionId(surveyQuestionId:any, surveyquestionoption:Surveyquestionoptions) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionBySurveyQuestionId?surveyQuestionId=' + surveyQuestionId, surveyquestionoption);
  }
  
  
  
  //</es-section>
}
