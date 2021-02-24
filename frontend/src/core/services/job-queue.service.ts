/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:03 GMT-0400 (Bolivia Time)
 * Time: 2:43:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:03 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:3
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {JobQueue} from "../models/jobQueue";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class JobQueueService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/job-queue`;
  dataChange: BehaviorSubject<JobQueue[]> = new BehaviorSubject<JobQueue[]>([]);
  jobQueueData: JobQueue = new JobQueue();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): JobQueue[] {
    return this.dataChange.value;
  }

  getDataJobQueue(): void {
    this.getAllJobQueue().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:JobQueue[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllJobQueue(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createJobQueue(jobQueue:JobQueue) {
    return this.http.post(this.basePath, jobQueue);
  }
  getJobQueue(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateJobQueue(id:any, jobQueue:JobQueue) {
    return this.http.put(this.basePath + '/' + id, jobQueue);
  }
  deleteJobQueue(id:any) {
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
  
  findOneByRequeue(requeue:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRequeue/' + requeue + '?' + attributes);
  }
  
  findOneByRetryCount(retryCount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRetryCount/' + retryCount + '?' + attributes);
  }
  
  findOneByFailureCount(failureCount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFailureCount/' + failureCount + '?' + attributes);
  }
  
  findOneByJobDelay(jobDelay:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJobDelay/' + jobDelay + '?' + attributes);
  }
  
  findOneByPercentComplete(percentComplete:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPercentComplete/' + percentComplete + '?' + attributes);
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
  
  findOneByResolution(resolution:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByResolution/' + resolution + '?' + attributes);
  }
  
  findOneByTarget(target:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTarget/' + target + '?' + attributes);
  }
  
  findOneByClient(client:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByClient/' + client + '?' + attributes);
  }
  
  findOneByMessage(message:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMessage/' + message + '?' + attributes);
  }
  
  findOneByData(data:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByData/' + data + '?' + attributes);
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
  
  findOneByExecuteTime(executeTime:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExecuteTime/' + executeTime + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  findOneBySchedulerId(schedulerId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySchedulerId/' + schedulerId + '?' + attributes);
  }
  
  
  updateJobQueueById(id:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueById?id=' + id, jobQueue);
  }
  
  updateJobQueueByDeleted(deleted:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByDeleted?deleted=' + deleted, jobQueue);
  }
  
  updateJobQueueByRequeue(requeue:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByRequeue?requeue=' + requeue, jobQueue);
  }
  
  updateJobQueueByRetryCount(retryCount:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByRetryCount?retryCount=' + retryCount, jobQueue);
  }
  
  updateJobQueueByFailureCount(failureCount:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByFailureCount?failureCount=' + failureCount, jobQueue);
  }
  
  updateJobQueueByJobDelay(jobDelay:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByJobDelay?jobDelay=' + jobDelay, jobQueue);
  }
  
  updateJobQueueByPercentComplete(percentComplete:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByPercentComplete?percentComplete=' + percentComplete, jobQueue);
  }
  
  updateJobQueueByName(name:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByName?name=' + name, jobQueue);
  }
  
  updateJobQueueByStatus(status:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByStatus?status=' + status, jobQueue);
  }
  
  updateJobQueueByResolution(resolution:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByResolution?resolution=' + resolution, jobQueue);
  }
  
  updateJobQueueByTarget(target:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByTarget?target=' + target, jobQueue);
  }
  
  updateJobQueueByClient(client:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByClient?client=' + client, jobQueue);
  }
  
  updateJobQueueByMessage(message:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByMessage?message=' + message, jobQueue);
  }
  
  updateJobQueueByData(data:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByData?data=' + data, jobQueue);
  }
  
  updateJobQueueByDateEntered(dateEntered:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByDateEntered?dateEntered=' + dateEntered, jobQueue);
  }
  
  updateJobQueueByDateModified(dateModified:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByDateModified?dateModified=' + dateModified, jobQueue);
  }
  
  updateJobQueueByExecuteTime(executeTime:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByExecuteTime?executeTime=' + executeTime, jobQueue);
  }
  
  updateJobQueueByAssignedUserId(assignedUserId:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueByAssignedUserId?assignedUserId=' + assignedUserId, jobQueue);
  }
  
  updateJobQueueBySchedulerId(schedulerId:any, jobQueue:JobQueue) {
      return this.http.post(this.basePath + '/updateJobQueueBySchedulerId?schedulerId=' + schedulerId, jobQueue);
  }
  
  
  
  //</es-section>
}
