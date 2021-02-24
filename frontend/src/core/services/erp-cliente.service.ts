/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:39 GMT-0400 (Bolivia Time)
 * Time: 2:42:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:39 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:39
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ErpCliente} from "../models/erpCliente";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ErpClienteService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/erp-cliente`;
  dataChange: BehaviorSubject<ErpCliente[]> = new BehaviorSubject<ErpCliente[]>([]);
  erpClienteData: ErpCliente = new ErpCliente();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ErpCliente[] {
    return this.dataChange.value;
  }

  getDataErpCliente(): void {
    this.getAllErpCliente().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ErpCliente[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllErpCliente(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createErpCliente(erpCliente:ErpCliente) {
    return this.http.post(this.basePath, erpCliente);
  }
  getErpCliente(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateErpCliente(id:any, erpCliente:ErpCliente) {
    return this.http.put(this.basePath + '/' + id, erpCliente);
  }
  deleteErpCliente(id:any) {
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
  
  
  updateErpClienteById(id:any, erpCliente:ErpCliente) {
      return this.http.post(this.basePath + '/updateErpClienteById?id=' + id, erpCliente);
  }
  
  updateErpClienteByDeleted(deleted:any, erpCliente:ErpCliente) {
      return this.http.post(this.basePath + '/updateErpClienteByDeleted?deleted=' + deleted, erpCliente);
  }
  
  updateErpClienteByName(name:any, erpCliente:ErpCliente) {
      return this.http.post(this.basePath + '/updateErpClienteByName?name=' + name, erpCliente);
  }
  
  updateErpClienteByDescription(description:any, erpCliente:ErpCliente) {
      return this.http.post(this.basePath + '/updateErpClienteByDescription?description=' + description, erpCliente);
  }
  
  updateErpClienteByDateEntered(dateEntered:any, erpCliente:ErpCliente) {
      return this.http.post(this.basePath + '/updateErpClienteByDateEntered?dateEntered=' + dateEntered, erpCliente);
  }
  
  updateErpClienteByDateModified(dateModified:any, erpCliente:ErpCliente) {
      return this.http.post(this.basePath + '/updateErpClienteByDateModified?dateModified=' + dateModified, erpCliente);
  }
  
  updateErpClienteByModifiedUserId(modifiedUserId:any, erpCliente:ErpCliente) {
      return this.http.post(this.basePath + '/updateErpClienteByModifiedUserId?modifiedUserId=' + modifiedUserId, erpCliente);
  }
  
  updateErpClienteByCreatedBy(createdBy:any, erpCliente:ErpCliente) {
      return this.http.post(this.basePath + '/updateErpClienteByCreatedBy?createdBy=' + createdBy, erpCliente);
  }
  
  updateErpClienteByAssignedUserId(assignedUserId:any, erpCliente:ErpCliente) {
      return this.http.post(this.basePath + '/updateErpClienteByAssignedUserId?assignedUserId=' + assignedUserId, erpCliente);
  }
  
  
  
  //</es-section>
}
