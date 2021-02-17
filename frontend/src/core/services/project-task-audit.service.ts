/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:47 GMT-0400 (Bolivia Time)
 * Time: 2:43:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:47 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:47
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ProjectTaskAudit} from "../models/projectTaskAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProjectTaskAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/project-task-audit`;
  dataChange: BehaviorSubject<ProjectTaskAudit[]> = new BehaviorSubject<ProjectTaskAudit[]>([]);
  projectTaskAuditData: ProjectTaskAudit = new ProjectTaskAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProjectTaskAudit[] {
    return this.dataChange.value;
  }

  getDataProjectTaskAudit(): void {
    this.getAllProjectTaskAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProjectTaskAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProjectTaskAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProjectTaskAudit(projectTaskAudit:ProjectTaskAudit) {
    return this.http.post(this.basePath, projectTaskAudit);
  }
  getProjectTaskAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProjectTaskAudit(id:any, projectTaskAudit:ProjectTaskAudit) {
    return this.http.put(this.basePath + '/' + id, projectTaskAudit);
  }
  deleteProjectTaskAudit(id:any) {
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
  
  
  updateProjectTaskAuditById(id:any, projectTaskAudit:ProjectTaskAudit) {
      return this.http.post(this.basePath + '/updateProjectTaskAuditById?id=' + id, projectTaskAudit);
  }
  
  updateProjectTaskAuditByCreatedBy(createdBy:any, projectTaskAudit:ProjectTaskAudit) {
      return this.http.post(this.basePath + '/updateProjectTaskAuditByCreatedBy?createdBy=' + createdBy, projectTaskAudit);
  }
  
  updateProjectTaskAuditByFieldName(fieldName:any, projectTaskAudit:ProjectTaskAudit) {
      return this.http.post(this.basePath + '/updateProjectTaskAuditByFieldName?fieldName=' + fieldName, projectTaskAudit);
  }
  
  updateProjectTaskAuditByDataType(dataType:any, projectTaskAudit:ProjectTaskAudit) {
      return this.http.post(this.basePath + '/updateProjectTaskAuditByDataType?dataType=' + dataType, projectTaskAudit);
  }
  
  updateProjectTaskAuditByBeforeValueString(beforeValueString:any, projectTaskAudit:ProjectTaskAudit) {
      return this.http.post(this.basePath + '/updateProjectTaskAuditByBeforeValueString?beforeValueString=' + beforeValueString, projectTaskAudit);
  }
  
  updateProjectTaskAuditByAfterValueString(afterValueString:any, projectTaskAudit:ProjectTaskAudit) {
      return this.http.post(this.basePath + '/updateProjectTaskAuditByAfterValueString?afterValueString=' + afterValueString, projectTaskAudit);
  }
  
  updateProjectTaskAuditByBeforeValueText(beforeValueText:any, projectTaskAudit:ProjectTaskAudit) {
      return this.http.post(this.basePath + '/updateProjectTaskAuditByBeforeValueText?beforeValueText=' + beforeValueText, projectTaskAudit);
  }
  
  updateProjectTaskAuditByAfterValueText(afterValueText:any, projectTaskAudit:ProjectTaskAudit) {
      return this.http.post(this.basePath + '/updateProjectTaskAuditByAfterValueText?afterValueText=' + afterValueText, projectTaskAudit);
  }
  
  updateProjectTaskAuditByDateCreated(dateCreated:any, projectTaskAudit:ProjectTaskAudit) {
      return this.http.post(this.basePath + '/updateProjectTaskAuditByDateCreated?dateCreated=' + dateCreated, projectTaskAudit);
  }
  
  updateProjectTaskAuditByParentId(parentId:any, projectTaskAudit:ProjectTaskAudit) {
      return this.http.post(this.basePath + '/updateProjectTaskAuditByParentId?parentId=' + parentId, projectTaskAudit);
  }
  
  
  
  //</es-section>
}
