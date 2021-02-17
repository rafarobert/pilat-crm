/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:09 GMT-0400 (Bolivia Time)
 * Time: 2:43:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:09 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:9
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {LeadsImport} from "../models/leadsImport";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class LeadImportService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/leads-import`;
  dataChange: BehaviorSubject<LeadsImport[]> = new BehaviorSubject<LeadsImport[]>([]);
  leadImportData: LeadsImport = new LeadsImport();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): LeadsImport[] {
    return this.dataChange.value;
  }

  getDataLeadsImport(): void {
    this.getAllLeadsImport().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:LeadsImport[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllLeadsImport(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createLeadImport(leadImport:LeadsImport) {
    return this.http.post(this.basePath, leadImport);
  }
  getLeadImport(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateLeadImport(id:any, leadImport:LeadsImport) {
    return this.http.put(this.basePath + '/' + id, leadImport);
  }
  deleteLeadImport(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByProspeccion(prospeccion:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProspeccion/' + prospeccion + '?' + attributes);
  }
  
  findOneByOficial(oficial:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOficial/' + oficial + '?' + attributes);
  }
  
  findOneByMes(mes:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMes/' + mes + '?' + attributes);
  }
  
  findOneByCliente(cliente:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCliente/' + cliente + '?' + attributes);
  }
  
  findOneByLugarorubrodetrabajo(lugarorubrodetrabajo:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLugarorubrodetrabajo/' + lugarorubrodetrabajo + '?' + attributes);
  }
  
  findOneByTeléfono(teléfono:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTeléfono/' + teléfono + '?' + attributes);
  }
  
  findOneByFecha(fecha:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFecha/' + fecha + '?' + attributes);
  }
  
  
  updateLeadImportByProspeccion(prospeccion:any, leadImport:LeadsImport) {
      return this.http.post(this.basePath + '/updateLeadImportByProspeccion?prospeccion=' + prospeccion, leadImport);
  }
  
  updateLeadImportByOficial(oficial:any, leadImport:LeadsImport) {
      return this.http.post(this.basePath + '/updateLeadImportByOficial?oficial=' + oficial, leadImport);
  }
  
  updateLeadImportByMes(mes:any, leadImport:LeadsImport) {
      return this.http.post(this.basePath + '/updateLeadImportByMes?mes=' + mes, leadImport);
  }
  
  updateLeadImportByCliente(cliente:any, leadImport:LeadsImport) {
      return this.http.post(this.basePath + '/updateLeadImportByCliente?cliente=' + cliente, leadImport);
  }
  
  updateLeadImportByLugarorubrodetrabajo(lugarorubrodetrabajo:any, leadImport:LeadsImport) {
      return this.http.post(this.basePath + '/updateLeadImportByLugarorubrodetrabajo?lugarorubrodetrabajo=' + lugarorubrodetrabajo, leadImport);
  }
  
  updateLeadImportByTeléfono(teléfono:any, leadImport:LeadsImport) {
      return this.http.post(this.basePath + '/updateLeadImportByTeléfono?teléfono=' + teléfono, leadImport);
  }
  
  updateLeadImportByFecha(fecha:any, leadImport:LeadsImport) {
      return this.http.post(this.basePath + '/updateLeadImportByFecha?fecha=' + fecha, leadImport);
  }
  
  
  
  //</es-section>
}
