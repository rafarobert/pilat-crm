/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:55 GMT-0400 (Bolivia Time)
 * Time: 2:43:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:55 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:55
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Relationships} from "../models/relationships";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class RelationshipService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/relationships`;
  dataChange: BehaviorSubject<Relationships[]> = new BehaviorSubject<Relationships[]>([]);
  relationshipData: Relationships = new Relationships();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Relationships[] {
    return this.dataChange.value;
  }

  getDataRelationships(): void {
    this.getAllRelationships().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Relationships[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllRelationships(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createRelationship(relationship:Relationships) {
    return this.http.post(this.basePath, relationship);
  }
  getRelationship(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateRelationship(id:any, relationship:Relationships) {
    return this.http.put(this.basePath + '/' + id, relationship);
  }
  deleteRelationship(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByReverse(reverse:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReverse/' + reverse + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByRelationshipName(relationshipName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelationshipName/' + relationshipName + '?' + attributes);
  }
  
  findOneByLhsModule(lhsModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLhsModule/' + lhsModule + '?' + attributes);
  }
  
  findOneByLhsTable(lhsTable:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLhsTable/' + lhsTable + '?' + attributes);
  }
  
  findOneByLhsKey(lhsKey:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLhsKey/' + lhsKey + '?' + attributes);
  }
  
  findOneByRhsModule(rhsModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRhsModule/' + rhsModule + '?' + attributes);
  }
  
  findOneByRhsTable(rhsTable:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRhsTable/' + rhsTable + '?' + attributes);
  }
  
  findOneByRhsKey(rhsKey:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRhsKey/' + rhsKey + '?' + attributes);
  }
  
  findOneByJoinTable(joinTable:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJoinTable/' + joinTable + '?' + attributes);
  }
  
  findOneByJoinKeyLhs(joinKeyLhs:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJoinKeyLhs/' + joinKeyLhs + '?' + attributes);
  }
  
  findOneByJoinKeyRhs(joinKeyRhs:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJoinKeyRhs/' + joinKeyRhs + '?' + attributes);
  }
  
  findOneByRelationshipType(relationshipType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelationshipType/' + relationshipType + '?' + attributes);
  }
  
  findOneByRelationshipRoleColumn(relationshipRoleColumn:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelationshipRoleColumn/' + relationshipRoleColumn + '?' + attributes);
  }
  
  findOneByRelationshipRoleColumnValue(relationshipRoleColumnValue:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelationshipRoleColumnValue/' + relationshipRoleColumnValue + '?' + attributes);
  }
  
  
  updateRelationshipById(id:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipById?id=' + id, relationship);
  }
  
  updateRelationshipByReverse(reverse:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByReverse?reverse=' + reverse, relationship);
  }
  
  updateRelationshipByDeleted(deleted:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByDeleted?deleted=' + deleted, relationship);
  }
  
  updateRelationshipByRelationshipName(relationshipName:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByRelationshipName?relationshipName=' + relationshipName, relationship);
  }
  
  updateRelationshipByLhsModule(lhsModule:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByLhsModule?lhsModule=' + lhsModule, relationship);
  }
  
  updateRelationshipByLhsTable(lhsTable:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByLhsTable?lhsTable=' + lhsTable, relationship);
  }
  
  updateRelationshipByLhsKey(lhsKey:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByLhsKey?lhsKey=' + lhsKey, relationship);
  }
  
  updateRelationshipByRhsModule(rhsModule:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByRhsModule?rhsModule=' + rhsModule, relationship);
  }
  
  updateRelationshipByRhsTable(rhsTable:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByRhsTable?rhsTable=' + rhsTable, relationship);
  }
  
  updateRelationshipByRhsKey(rhsKey:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByRhsKey?rhsKey=' + rhsKey, relationship);
  }
  
  updateRelationshipByJoinTable(joinTable:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByJoinTable?joinTable=' + joinTable, relationship);
  }
  
  updateRelationshipByJoinKeyLhs(joinKeyLhs:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByJoinKeyLhs?joinKeyLhs=' + joinKeyLhs, relationship);
  }
  
  updateRelationshipByJoinKeyRhs(joinKeyRhs:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByJoinKeyRhs?joinKeyRhs=' + joinKeyRhs, relationship);
  }
  
  updateRelationshipByRelationshipType(relationshipType:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByRelationshipType?relationshipType=' + relationshipType, relationship);
  }
  
  updateRelationshipByRelationshipRoleColumn(relationshipRoleColumn:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByRelationshipRoleColumn?relationshipRoleColumn=' + relationshipRoleColumn, relationship);
  }
  
  updateRelationshipByRelationshipRoleColumnValue(relationshipRoleColumnValue:any, relationship:Relationships) {
      return this.http.post(this.basePath + '/updateRelationshipByRelationshipRoleColumnValue?relationshipRoleColumnValue=' + relationshipRoleColumnValue, relationship);
  }
  
  
  
  //</es-section>
}
