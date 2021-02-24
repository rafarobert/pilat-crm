/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:16 GMT-0400 (Bolivia Time)
 * Time: 2:44:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:16 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:16
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Surveyresponses} from "../models/surveyresponses";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SurveyresponseService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/surveyresponses`;
  dataChange: BehaviorSubject<Surveyresponses[]> = new BehaviorSubject<Surveyresponses[]>([]);
  surveyresponseData: Surveyresponses = new Surveyresponses();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Surveyresponses[] {
    return this.dataChange.value;
  }

  getDataSurveyresponses(): void {
    this.getAllSurveyresponses().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Surveyresponses[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSurveyresponses(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSurveyresponse(surveyresponse:Surveyresponses) {
    return this.http.post(this.basePath, surveyresponse);
  }
  getSurveyresponse(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSurveyresponse(id:any, surveyresponse:Surveyresponses) {
    return this.http.put(this.basePath + '/' + id, surveyresponse);
  }
  deleteSurveyresponse(id:any) {
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
  
  findOneByEmailResponseSent(emailResponseSent:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailResponseSent/' + emailResponseSent + '?' + attributes);
  }
  
  findOneByHappiness(happiness:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByHappiness/' + happiness + '?' + attributes);
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
  
  findOneByAccountId(accountId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccountId/' + accountId + '?' + attributes);
  }
  
  findOneByCampaignId(campaignId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCampaignId/' + campaignId + '?' + attributes);
  }
  
  findOneByContactId(contactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactId/' + contactId + '?' + attributes);
  }
  
  findOneBySurveyId(surveyId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySurveyId/' + surveyId + '?' + attributes);
  }
  
  
  updateSurveyresponseById(id:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseById?id=' + id, surveyresponse);
  }
  
  updateSurveyresponseByDeleted(deleted:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseByDeleted?deleted=' + deleted, surveyresponse);
  }
  
  updateSurveyresponseByEmailResponseSent(emailResponseSent:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseByEmailResponseSent?emailResponseSent=' + emailResponseSent, surveyresponse);
  }
  
  updateSurveyresponseByHappiness(happiness:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseByHappiness?happiness=' + happiness, surveyresponse);
  }
  
  updateSurveyresponseByName(name:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseByName?name=' + name, surveyresponse);
  }
  
  updateSurveyresponseByDescription(description:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseByDescription?description=' + description, surveyresponse);
  }
  
  updateSurveyresponseByDateEntered(dateEntered:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseByDateEntered?dateEntered=' + dateEntered, surveyresponse);
  }
  
  updateSurveyresponseByDateModified(dateModified:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseByDateModified?dateModified=' + dateModified, surveyresponse);
  }
  
  updateSurveyresponseByModifiedUserId(modifiedUserId:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseByModifiedUserId?modifiedUserId=' + modifiedUserId, surveyresponse);
  }
  
  updateSurveyresponseByCreatedBy(createdBy:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseByCreatedBy?createdBy=' + createdBy, surveyresponse);
  }
  
  updateSurveyresponseByAssignedUserId(assignedUserId:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseByAssignedUserId?assignedUserId=' + assignedUserId, surveyresponse);
  }
  
  updateSurveyresponseByAccountId(accountId:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseByAccountId?accountId=' + accountId, surveyresponse);
  }
  
  updateSurveyresponseByCampaignId(campaignId:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseByCampaignId?campaignId=' + campaignId, surveyresponse);
  }
  
  updateSurveyresponseByContactId(contactId:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseByContactId?contactId=' + contactId, surveyresponse);
  }
  
  updateSurveyresponseBySurveyId(surveyId:any, surveyresponse:Surveyresponses) {
      return this.http.post(this.basePath + '/updateSurveyresponseBySurveyId?surveyId=' + surveyId, surveyresponse);
  }
  
  
  
  //</es-section>
}
