/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:03 GMT-0400 (Bolivia Time)
 * Time: 2:44:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:03 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:3
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Schedulers} from "../models/schedulers";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/schedulers`;
  dataChange: BehaviorSubject<Schedulers[]> = new BehaviorSubject<Schedulers[]>([]);
  schedulerData: Schedulers = new Schedulers();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Schedulers[] {
    return this.dataChange.value;
  }

  getDataSchedulers(): void {
    this.getAllSchedulers().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Schedulers[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSchedulers(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createScheduler(scheduler:Schedulers) {
    return this.http.post(this.basePath, scheduler);
  }
  getScheduler(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateScheduler(id:any, scheduler:Schedulers) {
    return this.http.put(this.basePath + '/' + id, scheduler);
  }
  deleteScheduler(id:any) {
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
  
  findOneByCatchUp(catchUp:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCatchUp/' + catchUp + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByJob(job:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJob/' + job + '?' + attributes);
  }
  
  findOneByJobInterval(jobInterval:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJobInterval/' + jobInterval + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
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
  
  findOneByDateTimeStart(dateTimeStart:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateTimeStart/' + dateTimeStart + '?' + attributes);
  }
  
  findOneByDateTimeEnd(dateTimeEnd:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateTimeEnd/' + dateTimeEnd + '?' + attributes);
  }
  
  findOneByLastRun(lastRun:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLastRun/' + lastRun + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  findOneByModifiedUserId(modifiedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedUserId/' + modifiedUserId + '?' + attributes);
  }
  
  
  updateSchedulerById(id:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerById?id=' + id, scheduler);
  }
  
  updateSchedulerByDeleted(deleted:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerByDeleted?deleted=' + deleted, scheduler);
  }
  
  updateSchedulerByCatchUp(catchUp:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerByCatchUp?catchUp=' + catchUp, scheduler);
  }
  
  updateSchedulerByName(name:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerByName?name=' + name, scheduler);
  }
  
  updateSchedulerByJob(job:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerByJob?job=' + job, scheduler);
  }
  
  updateSchedulerByJobInterval(jobInterval:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerByJobInterval?jobInterval=' + jobInterval, scheduler);
  }
  
  updateSchedulerByStatus(status:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerByStatus?status=' + status, scheduler);
  }
  
  updateSchedulerByDateEntered(dateEntered:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerByDateEntered?dateEntered=' + dateEntered, scheduler);
  }
  
  updateSchedulerByDateModified(dateModified:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerByDateModified?dateModified=' + dateModified, scheduler);
  }
  
  updateSchedulerByDateTimeStart(dateTimeStart:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerByDateTimeStart?dateTimeStart=' + dateTimeStart, scheduler);
  }
  
  updateSchedulerByDateTimeEnd(dateTimeEnd:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerByDateTimeEnd?dateTimeEnd=' + dateTimeEnd, scheduler);
  }
  
  updateSchedulerByLastRun(lastRun:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerByLastRun?lastRun=' + lastRun, scheduler);
  }
  
  updateSchedulerByCreatedBy(createdBy:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerByCreatedBy?createdBy=' + createdBy, scheduler);
  }
  
  updateSchedulerByModifiedUserId(modifiedUserId:any, scheduler:Schedulers) {
      return this.http.post(this.basePath + '/updateSchedulerByModifiedUserId?modifiedUserId=' + modifiedUserId, scheduler);
  }
  
  
  
  //</es-section>
}
