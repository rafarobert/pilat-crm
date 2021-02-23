/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:24 GMT-0400 (Bolivia Time)
 * Time: 2:41:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:24 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:24
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AorConditions} from "../models/aorConditions";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AorConditionService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aor-conditions`;
  dataChange: BehaviorSubject<AorConditions[]> = new BehaviorSubject<AorConditions[]>([]);
  aorConditionData: AorConditions = new AorConditions();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AorConditions[] {
    return this.dataChange.value;
  }

  getDataAorConditions(): void {
    this.getAllAorConditions().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AorConditions[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAorConditions(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAorCondition(aorCondition:AorConditions) {
    return this.http.post(this.basePath, aorCondition);
  }
  getAorCondition(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAorCondition(id:any, aorCondition:AorConditions) {
    return this.http.put(this.basePath + '/' + id, aorCondition);
  }
  deleteAorCondition(id:any) {
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
  
  findOneByParameter(parameter:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParameter/' + parameter + '?' + attributes);
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
  
  findOneByLogicOp(logicOp:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLogicOp/' + logicOp + '?' + attributes);
  }
  
  findOneByParenthesis(parenthesis:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParenthesis/' + parenthesis + '?' + attributes);
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
  
  findOneByAorReportId(aorReportId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAorReportId/' + aorReportId + '?' + attributes);
  }
  
  
  updateAorConditionById(id:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionById?id=' + id, aorCondition);
  }
  
  updateAorConditionByDeleted(deleted:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByDeleted?deleted=' + deleted, aorCondition);
  }
  
  updateAorConditionByParameter(parameter:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByParameter?parameter=' + parameter, aorCondition);
  }
  
  updateAorConditionByConditionOrder(conditionOrder:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByConditionOrder?conditionOrder=' + conditionOrder, aorCondition);
  }
  
  updateAorConditionByName(name:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByName?name=' + name, aorCondition);
  }
  
  updateAorConditionByLogicOp(logicOp:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByLogicOp?logicOp=' + logicOp, aorCondition);
  }
  
  updateAorConditionByParenthesis(parenthesis:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByParenthesis?parenthesis=' + parenthesis, aorCondition);
  }
  
  updateAorConditionByField(field:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByField?field=' + field, aorCondition);
  }
  
  updateAorConditionByOperator(operator:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByOperator?operator=' + operator, aorCondition);
  }
  
  updateAorConditionByValueType(valueType:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByValueType?valueType=' + valueType, aorCondition);
  }
  
  updateAorConditionByValue(value:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByValue?value=' + value, aorCondition);
  }
  
  updateAorConditionByDescription(description:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByDescription?description=' + description, aorCondition);
  }
  
  updateAorConditionByModulePath(modulePath:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByModulePath?modulePath=' + modulePath, aorCondition);
  }
  
  updateAorConditionByDateEntered(dateEntered:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByDateEntered?dateEntered=' + dateEntered, aorCondition);
  }
  
  updateAorConditionByDateModified(dateModified:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByDateModified?dateModified=' + dateModified, aorCondition);
  }
  
  updateAorConditionByModifiedUserId(modifiedUserId:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByModifiedUserId?modifiedUserId=' + modifiedUserId, aorCondition);
  }
  
  updateAorConditionByCreatedBy(createdBy:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByCreatedBy?createdBy=' + createdBy, aorCondition);
  }
  
  updateAorConditionByAorReportId(aorReportId:any, aorCondition:AorConditions) {
      return this.http.post(this.basePath + '/updateAorConditionByAorReportId?aorReportId=' + aorReportId, aorCondition);
  }
  
  
  
  //</es-section>
}
