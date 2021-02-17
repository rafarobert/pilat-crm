/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:11 GMT-0400 (Bolivia Time)
 * Time: 2:44:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:11 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:11
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SurveyquestionoptionsSurveyquestionresponses} from "../models/surveyquestionoptionsSurveyquestionresponses";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SurveyquestionoptionSurveyquestionresponseService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/surveyquestionoptions-surveyquestionresponses`;
  dataChange: BehaviorSubject<SurveyquestionoptionsSurveyquestionresponses[]> = new BehaviorSubject<SurveyquestionoptionsSurveyquestionresponses[]>([]);
  surveyquestionoptionSurveyquestionresponseData: SurveyquestionoptionsSurveyquestionresponses = new SurveyquestionoptionsSurveyquestionresponses();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): SurveyquestionoptionsSurveyquestionresponses[] {
    return this.dataChange.value;
  }

  getDataSurveyquestionoptionsSurveyquestionresponses(): void {
    this.getAllSurveyquestionoptionsSurveyquestionresponses().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SurveyquestionoptionsSurveyquestionresponses[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSurveyquestionoptionsSurveyquestionresponses(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSurveyquestionoptionSurveyquestionresponse(surveyquestionoptionSurveyquestionresponse:SurveyquestionoptionsSurveyquestionresponses) {
    return this.http.post(this.basePath, surveyquestionoptionSurveyquestionresponse);
  }
  getSurveyquestionoptionSurveyquestionresponse(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSurveyquestionoptionSurveyquestionresponse(id:any, surveyquestionoptionSurveyquestionresponse:SurveyquestionoptionsSurveyquestionresponses) {
    return this.http.put(this.basePath + '/' + id, surveyquestionoptionSurveyquestionresponse);
  }
  deleteSurveyquestionoptionSurveyquestionresponse(id:any) {
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
  
  findOneBySurveyq72c7optionsIda(surveyq72c7optionsIda:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySurveyq72c7optionsIda/' + surveyq72c7optionsIda + '?' + attributes);
  }
  
  findOneBySurveyq10d4sponsesIdb(surveyq10d4sponsesIdb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySurveyq10d4sponsesIdb/' + surveyq10d4sponsesIdb + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateSurveyquestionoptionSurveyquestionresponseById(id:any, surveyquestionoptionSurveyquestionresponse:SurveyquestionoptionsSurveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionSurveyquestionresponseById?id=' + id, surveyquestionoptionSurveyquestionresponse);
  }
  
  updateSurveyquestionoptionSurveyquestionresponseByDeleted(deleted:any, surveyquestionoptionSurveyquestionresponse:SurveyquestionoptionsSurveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionSurveyquestionresponseByDeleted?deleted=' + deleted, surveyquestionoptionSurveyquestionresponse);
  }
  
  updateSurveyquestionoptionSurveyquestionresponseBySurveyq72c7optionsIda(surveyq72c7optionsIda:any, surveyquestionoptionSurveyquestionresponse:SurveyquestionoptionsSurveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionSurveyquestionresponseBySurveyq72c7optionsIda?surveyq72c7optionsIda=' + surveyq72c7optionsIda, surveyquestionoptionSurveyquestionresponse);
  }
  
  updateSurveyquestionoptionSurveyquestionresponseBySurveyq10d4sponsesIdb(surveyq10d4sponsesIdb:any, surveyquestionoptionSurveyquestionresponse:SurveyquestionoptionsSurveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionSurveyquestionresponseBySurveyq10d4sponsesIdb?surveyq10d4sponsesIdb=' + surveyq10d4sponsesIdb, surveyquestionoptionSurveyquestionresponse);
  }
  
  updateSurveyquestionoptionSurveyquestionresponseByDateModified(dateModified:any, surveyquestionoptionSurveyquestionresponse:SurveyquestionoptionsSurveyquestionresponses) {
      return this.http.post(this.basePath + '/updateSurveyquestionoptionSurveyquestionresponseByDateModified?dateModified=' + dateModified, surveyquestionoptionSurveyquestionresponse);
  }
  
  
  
  //</es-section>
}
