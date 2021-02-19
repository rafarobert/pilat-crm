/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:22 GMT-0400 (Bolivia Time)
 * Time: 2:42:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:22 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:22
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {CustomFields} from "../models/customFields";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CustomFieldService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/custom-fields`;
  dataChange: BehaviorSubject<CustomFields[]> = new BehaviorSubject<CustomFields[]>([]);
  customFieldData: CustomFields = new CustomFields();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CustomFields[] {
    return this.dataChange.value;
  }

  getDataCustomFields(): void {
    this.getAllCustomFields().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CustomFields[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCustomFields(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCustomField(customField:CustomFields) {
    return this.http.post(this.basePath, customField);
  }
  getCustomField(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCustomField(id:any, customField:CustomFields) {
    return this.http.put(this.basePath + '/' + id, customField);
  }
  deleteCustomField(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneBySetNum(setNum:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySetNum/' + setNum + '?' + attributes);
  }
  
  findOneByBeanId(beanId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeanId/' + beanId + '?' + attributes);
  }
  
  findOneByField0(field0:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByField0/' + field0 + '?' + attributes);
  }
  
  findOneByField1(field1:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByField1/' + field1 + '?' + attributes);
  }
  
  findOneByField2(field2:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByField2/' + field2 + '?' + attributes);
  }
  
  findOneByField3(field3:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByField3/' + field3 + '?' + attributes);
  }
  
  findOneByField4(field4:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByField4/' + field4 + '?' + attributes);
  }
  
  findOneByField5(field5:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByField5/' + field5 + '?' + attributes);
  }
  
  findOneByField6(field6:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByField6/' + field6 + '?' + attributes);
  }
  
  findOneByField7(field7:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByField7/' + field7 + '?' + attributes);
  }
  
  findOneByField8(field8:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByField8/' + field8 + '?' + attributes);
  }
  
  findOneByField9(field9:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByField9/' + field9 + '?' + attributes);
  }
  
  
  updateCustomFieldByDeleted(deleted:any, customField:CustomFields) {
      return this.http.post(this.basePath + '/updateCustomFieldByDeleted?deleted=' + deleted, customField);
  }
  
  updateCustomFieldBySetNum(setNum:any, customField:CustomFields) {
      return this.http.post(this.basePath + '/updateCustomFieldBySetNum?setNum=' + setNum, customField);
  }
  
  updateCustomFieldByBeanId(beanId:any, customField:CustomFields) {
      return this.http.post(this.basePath + '/updateCustomFieldByBeanId?beanId=' + beanId, customField);
  }
  
  updateCustomFieldByField0(field0:any, customField:CustomFields) {
      return this.http.post(this.basePath + '/updateCustomFieldByField0?field0=' + field0, customField);
  }
  
  updateCustomFieldByField1(field1:any, customField:CustomFields) {
      return this.http.post(this.basePath + '/updateCustomFieldByField1?field1=' + field1, customField);
  }
  
  updateCustomFieldByField2(field2:any, customField:CustomFields) {
      return this.http.post(this.basePath + '/updateCustomFieldByField2?field2=' + field2, customField);
  }
  
  updateCustomFieldByField3(field3:any, customField:CustomFields) {
      return this.http.post(this.basePath + '/updateCustomFieldByField3?field3=' + field3, customField);
  }
  
  updateCustomFieldByField4(field4:any, customField:CustomFields) {
      return this.http.post(this.basePath + '/updateCustomFieldByField4?field4=' + field4, customField);
  }
  
  updateCustomFieldByField5(field5:any, customField:CustomFields) {
      return this.http.post(this.basePath + '/updateCustomFieldByField5?field5=' + field5, customField);
  }
  
  updateCustomFieldByField6(field6:any, customField:CustomFields) {
      return this.http.post(this.basePath + '/updateCustomFieldByField6?field6=' + field6, customField);
  }
  
  updateCustomFieldByField7(field7:any, customField:CustomFields) {
      return this.http.post(this.basePath + '/updateCustomFieldByField7?field7=' + field7, customField);
  }
  
  updateCustomFieldByField8(field8:any, customField:CustomFields) {
      return this.http.post(this.basePath + '/updateCustomFieldByField8?field8=' + field8, customField);
  }
  
  updateCustomFieldByField9(field9:any, customField:CustomFields) {
      return this.http.post(this.basePath + '/updateCustomFieldByField9?field9=' + field9, customField);
  }
  
  
  
  //</es-section>
}
