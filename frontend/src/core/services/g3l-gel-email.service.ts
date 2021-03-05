/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Time: 14:0:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:55
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {G3lGelEmail} from "../models/g3lGelEmail";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class G3lGelEmailService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/g3l-gel-email`;
  dataChange: BehaviorSubject<G3lGelEmail[]> = new BehaviorSubject<G3lGelEmail[]>([]);
  g3lGelEmailData: G3lGelEmail = new G3lGelEmail();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): G3lGelEmail[] {
    return this.dataChange.value;
  }

  getDataG3lGelEmail(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllG3lGelEmail(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:G3lGelEmail[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllG3lGelEmail(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createG3lGelEmail(g3lGelEmail:G3lGelEmail) {
    return this.http.post(this.basePath, g3lGelEmail);
  }
  getG3lGelEmail(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateG3lGelEmail(id:any, g3lGelEmail:G3lGelEmail) {
    return this.http.put(this.basePath + '/' + id, g3lGelEmail);
  }
  deleteG3lGelEmail(id:any) {
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
  
  findOneByEstadoEnvio(estadoEnvio:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEstadoEnvio/' + estadoEnvio + '?' + attributes);
  }
  
  findOneByCorreoElectronico(correoElectronico:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCorreoElectronico/' + correoElectronico + '?' + attributes);
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
  
  
  updateG3lGelEmailById(id:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailById?id=' + id, g3lGelEmail);
  }
  
  updateG3lGelEmailByDeleted(deleted:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByDeleted?deleted=' + deleted, g3lGelEmail);
  }
  
  updateG3lGelEmailByName(name:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByName?name=' + name, g3lGelEmail);
  }
  
  updateG3lGelEmailByParentType(parentType:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByParentType?parentType=' + parentType, g3lGelEmail);
  }
  
  updateG3lGelEmailByEstadoEnvio(estadoEnvio:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByEstadoEnvio?estadoEnvio=' + estadoEnvio, g3lGelEmail);
  }
  
  updateG3lGelEmailByCorreoElectronico(correoElectronico:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByCorreoElectronico?correoElectronico=' + correoElectronico, g3lGelEmail);
  }
  
  updateG3lGelEmailByDescription(description:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByDescription?description=' + description, g3lGelEmail);
  }
  
  updateG3lGelEmailByMensaje(mensaje:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByMensaje?mensaje=' + mensaje, g3lGelEmail);
  }
  
  updateG3lGelEmailByDateEntered(dateEntered:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByDateEntered?dateEntered=' + dateEntered, g3lGelEmail);
  }
  
  updateG3lGelEmailByDateModified(dateModified:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByDateModified?dateModified=' + dateModified, g3lGelEmail);
  }
  
  updateG3lGelEmailByFechaEnvio(fechaEnvio:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByFechaEnvio?fechaEnvio=' + fechaEnvio, g3lGelEmail);
  }
  
  updateG3lGelEmailByModifiedUserId(modifiedUserId:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByModifiedUserId?modifiedUserId=' + modifiedUserId, g3lGelEmail);
  }
  
  updateG3lGelEmailByCreatedBy(createdBy:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByCreatedBy?createdBy=' + createdBy, g3lGelEmail);
  }
  
  updateG3lGelEmailByAssignedUserId(assignedUserId:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByAssignedUserId?assignedUserId=' + assignedUserId, g3lGelEmail);
  }
  
  updateG3lGelEmailByParentId(parentId:any, g3lGelEmail:G3lGelEmail) {
      return this.http.post(this.basePath + '/updateG3lGelEmailByParentId?parentId=' + parentId, g3lGelEmail);
  }
  
  
  
  //</es-section>
}
