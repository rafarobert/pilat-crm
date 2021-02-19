/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:41 GMT-0400 (Bolivia Time)
 * Time: 2:42:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:41 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:41
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {FieldsMetaData} from "../models/fieldsMetaData";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FieldMetaDataService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/fields-meta-data`;
  dataChange: BehaviorSubject<FieldsMetaData[]> = new BehaviorSubject<FieldsMetaData[]>([]);
  fieldMetaDataData: FieldsMetaData = new FieldsMetaData();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): FieldsMetaData[] {
    return this.dataChange.value;
  }

  getDataFieldsMetaData(): void {
    this.getAllFieldsMetaData().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:FieldsMetaData[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFieldsMetaData(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFieldMetaData(fieldMetaData:FieldsMetaData) {
    return this.http.post(this.basePath, fieldMetaData);
  }
  getFieldMetaData(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFieldMetaData(id:any, fieldMetaData:FieldsMetaData) {
    return this.http.put(this.basePath + '/' + id, fieldMetaData);
  }
  deleteFieldMetaData(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByRequired(required:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRequired/' + required + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByAudited(audited:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAudited/' + audited + '?' + attributes);
  }
  
  findOneByMassupdate(massupdate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMassupdate/' + massupdate + '?' + attributes);
  }
  
  findOneByReportable(reportable:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReportable/' + reportable + '?' + attributes);
  }
  
  findOneByLen(len:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLen/' + len + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByVname(vname:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVname/' + vname + '?' + attributes);
  }
  
  findOneByComments(comments:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByComments/' + comments + '?' + attributes);
  }
  
  findOneByHelp(help:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByHelp/' + help + '?' + attributes);
  }
  
  findOneByCustomModule(customModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCustomModule/' + customModule + '?' + attributes);
  }
  
  findOneByType(type:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByType/' + type + '?' + attributes);
  }
  
  findOneByDefaultValue(defaultValue:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDefaultValue/' + defaultValue + '?' + attributes);
  }
  
  findOneByImportable(importable:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByImportable/' + importable + '?' + attributes);
  }
  
  findOneByExt1(ext1:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExt1/' + ext1 + '?' + attributes);
  }
  
  findOneByExt2(ext2:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExt2/' + ext2 + '?' + attributes);
  }
  
  findOneByExt3(ext3:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExt3/' + ext3 + '?' + attributes);
  }
  
  findOneByExt4(ext4:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExt4/' + ext4 + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateFieldMetaDataById(id:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataById?id=' + id, fieldMetaData);
  }
  
  updateFieldMetaDataByRequired(required:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByRequired?required=' + required, fieldMetaData);
  }
  
  updateFieldMetaDataByDeleted(deleted:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByDeleted?deleted=' + deleted, fieldMetaData);
  }
  
  updateFieldMetaDataByAudited(audited:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByAudited?audited=' + audited, fieldMetaData);
  }
  
  updateFieldMetaDataByMassupdate(massupdate:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByMassupdate?massupdate=' + massupdate, fieldMetaData);
  }
  
  updateFieldMetaDataByReportable(reportable:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByReportable?reportable=' + reportable, fieldMetaData);
  }
  
  updateFieldMetaDataByLen(len:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByLen?len=' + len, fieldMetaData);
  }
  
  updateFieldMetaDataByName(name:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByName?name=' + name, fieldMetaData);
  }
  
  updateFieldMetaDataByVname(vname:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByVname?vname=' + vname, fieldMetaData);
  }
  
  updateFieldMetaDataByComments(comments:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByComments?comments=' + comments, fieldMetaData);
  }
  
  updateFieldMetaDataByHelp(help:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByHelp?help=' + help, fieldMetaData);
  }
  
  updateFieldMetaDataByCustomModule(customModule:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByCustomModule?customModule=' + customModule, fieldMetaData);
  }
  
  updateFieldMetaDataByType(type:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByType?type=' + type, fieldMetaData);
  }
  
  updateFieldMetaDataByDefaultValue(defaultValue:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByDefaultValue?defaultValue=' + defaultValue, fieldMetaData);
  }
  
  updateFieldMetaDataByImportable(importable:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByImportable?importable=' + importable, fieldMetaData);
  }
  
  updateFieldMetaDataByExt1(ext1:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByExt1?ext1=' + ext1, fieldMetaData);
  }
  
  updateFieldMetaDataByExt2(ext2:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByExt2?ext2=' + ext2, fieldMetaData);
  }
  
  updateFieldMetaDataByExt3(ext3:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByExt3?ext3=' + ext3, fieldMetaData);
  }
  
  updateFieldMetaDataByExt4(ext4:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByExt4?ext4=' + ext4, fieldMetaData);
  }
  
  updateFieldMetaDataByDateModified(dateModified:any, fieldMetaData:FieldsMetaData) {
      return this.http.post(this.basePath + '/updateFieldMetaDataByDateModified?dateModified=' + dateModified, fieldMetaData);
  }
  
  
  
  //</es-section>
}
