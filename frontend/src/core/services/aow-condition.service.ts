/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:54 GMT-0400 (Bolivia Time)
 * Time: 2:41:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:54 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AowConditions} from "../models/aowConditions";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AowConditionService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aow-conditions`;
  dataChange: BehaviorSubject<AowConditions[]> = new BehaviorSubject<AowConditions[]>([]);
  aowConditionData: AowConditions = new AowConditions();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AowConditions[] {
    return this.dataChange.value;
  }

  getDataAowConditions(): void {
    this.getAllAowConditions().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AowConditions[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAowConditions(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAowCondition(aowCondition:AowConditions) {
    return this.http.post(this.basePath, aowCondition);
  }
  getAowCondition(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAowCondition(id:any, aowCondition:AowConditions) {
    return this.http.put(this.basePath + '/' + id, aowCondition);
  }
  deleteAowCondition(id:any) {
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
  
  findOneByConditionOrder(conditionOrder:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByConditionOrder/' + conditionOrder + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByField(field:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByField/' + field + '?' + attributes);
  }
  
  findOneByOperator(operator:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOperator/' + operator + '?' + attributes);
  }
  
  findOneByValueType(valueType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByValueType/' + valueType + '?' + attributes);
  }
  
  findOneByValue(value:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByValue/' + value + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByModulePath(modulePath:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModulePath/' + modulePath + '?' + attributes);
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
  
  findOneByAowWorkflowId(aowWorkflowId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAowWorkflowId/' + aowWorkflowId + '?' + attributes);
  }
  
  
  updateAowConditionById(id:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionById?id=' + id, aowCondition);
  }
  
  updateAowConditionByDeleted(deleted:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByDeleted?deleted=' + deleted, aowCondition);
  }
  
  updateAowConditionByConditionOrder(conditionOrder:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByConditionOrder?conditionOrder=' + conditionOrder, aowCondition);
  }
  
  updateAowConditionByName(name:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByName?name=' + name, aowCondition);
  }
  
  updateAowConditionByField(field:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByField?field=' + field, aowCondition);
  }
  
  updateAowConditionByOperator(operator:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByOperator?operator=' + operator, aowCondition);
  }
  
  updateAowConditionByValueType(valueType:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByValueType?valueType=' + valueType, aowCondition);
  }
  
  updateAowConditionByValue(value:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByValue?value=' + value, aowCondition);
  }
  
  updateAowConditionByDescription(description:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByDescription?description=' + description, aowCondition);
  }
  
  updateAowConditionByModulePath(modulePath:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByModulePath?modulePath=' + modulePath, aowCondition);
  }
  
  updateAowConditionByDateEntered(dateEntered:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByDateEntered?dateEntered=' + dateEntered, aowCondition);
  }
  
  updateAowConditionByDateModified(dateModified:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByDateModified?dateModified=' + dateModified, aowCondition);
  }
  
  updateAowConditionByModifiedUserId(modifiedUserId:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByModifiedUserId?modifiedUserId=' + modifiedUserId, aowCondition);
  }
  
  updateAowConditionByCreatedBy(createdBy:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByCreatedBy?createdBy=' + createdBy, aowCondition);
  }
  
  updateAowConditionByAowWorkflowId(aowWorkflowId:any, aowCondition:AowConditions) {
      return this.http.post(this.basePath + '/updateAowConditionByAowWorkflowId?aowWorkflowId=' + aowWorkflowId, aowCondition);
  }
  
  
  
  //</es-section>
}
