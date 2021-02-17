/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Jan 29 2021 20:07:17 GMT-0400 (Bolivia Time)
 * Time: 20:7:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Jan 29 2021 20:07:17 GMT-0400 (Bolivia Time)
 * Last time updated: 20:7:17
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {G3lGelWhatsapp} from "../models/g3lGelWhatsapp";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class G3lGelWhatsappService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/g3l-gel-whatsapp`;
  dataChange: BehaviorSubject<G3lGelWhatsapp[]> = new BehaviorSubject<G3lGelWhatsapp[]>([]);
  g3lGelWhatsappData: G3lGelWhatsapp = new G3lGelWhatsapp();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): G3lGelWhatsapp[] {
    return this.dataChange.value;
  }

  getDataG3lGelWhatsapp(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllG3lGelWhatsapp(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:G3lGelWhatsapp[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllG3lGelWhatsapp(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createG3lGelWhatsapp(g3lGelWhatsapp:G3lGelWhatsapp) {
    return this.http.post(this.basePath, g3lGelWhatsapp);
  }
  getG3lGelWhatsapp(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateG3lGelWhatsapp(id:any, g3lGelWhatsapp:G3lGelWhatsapp) {
    return this.http.put(this.basePath + '/' + id, g3lGelWhatsapp);
  }
  deleteG3lGelWhatsapp(id:any) {
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
  
  findOneByParentType(parentType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentType/' + parentType + '?' + attributes);
  }
  
  findOneByNumeroEnvio(numeroEnvio:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNumeroEnvio/' + numeroEnvio + '?' + attributes);
  }
  
  findOneByEstadoEnvio(estadoEnvio:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEstadoEnvio/' + estadoEnvio + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByMensaje(mensaje:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMensaje/' + mensaje + '?' + attributes);
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
  
  findOneByFechaEnvio(fechaEnvio:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFechaEnvio/' + fechaEnvio + '?' + attributes);
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
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  
  updateG3lGelWhatsappById(id:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappById?id=' + id, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByDeleted(deleted:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByDeleted?deleted=' + deleted, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByName(name:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByName?name=' + name, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByParentType(parentType:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByParentType?parentType=' + parentType, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByNumeroEnvio(numeroEnvio:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByNumeroEnvio?numeroEnvio=' + numeroEnvio, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByEstadoEnvio(estadoEnvio:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByEstadoEnvio?estadoEnvio=' + estadoEnvio, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByDescription(description:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByDescription?description=' + description, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByMensaje(mensaje:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByMensaje?mensaje=' + mensaje, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByDateEntered(dateEntered:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByDateEntered?dateEntered=' + dateEntered, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByDateModified(dateModified:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByDateModified?dateModified=' + dateModified, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByFechaEnvio(fechaEnvio:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByFechaEnvio?fechaEnvio=' + fechaEnvio, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByModifiedUserId(modifiedUserId:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByModifiedUserId?modifiedUserId=' + modifiedUserId, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByCreatedBy(createdBy:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByCreatedBy?createdBy=' + createdBy, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByAssignedUserId(assignedUserId:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByAssignedUserId?assignedUserId=' + assignedUserId, g3lGelWhatsapp);
  }
  
  updateG3lGelWhatsappByParentId(parentId:any, g3lGelWhatsapp:G3lGelWhatsapp) {
      return this.http.post(this.basePath + '/updateG3lGelWhatsappByParentId?parentId=' + parentId, g3lGelWhatsapp);
  }
  
  
  
  //</es-section>
}
