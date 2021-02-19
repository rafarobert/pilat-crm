/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:21:41 GMT-0400 (Bolivia Time)
 * Time: 4:21:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:21:41 GMT-0400 (Bolivia Time)
 * Last time updated: 4:21:41
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {OpportunitiesCstm} from "../models/opportunitiesCstm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class OpportunityCstmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/opportunities-cstm`;
  dataChange: BehaviorSubject<OpportunitiesCstm[]> = new BehaviorSubject<OpportunitiesCstm[]>([]);
  opportunityCstmData: OpportunitiesCstm = new OpportunitiesCstm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): OpportunitiesCstm[] {
    return this.dataChange.value;
  }

  getDataOpportunitiesCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllOpportunitiesCstm(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:OpportunitiesCstm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllOpportunitiesCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createOpportunityCstm(opportunityCstm:OpportunitiesCstm) {
    return this.http.post(this.basePath, opportunityCstm);
  }
  getOpportunityCstm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOpportunityCstm(id:any, opportunityCstm:OpportunitiesCstm) {
    return this.http.put(this.basePath + '/' + id, opportunityCstm);
  }
  deleteOpportunityCstm(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByIdC(idC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIdC/' + idC + '?' + attributes);
  }
  
  findOneByUnidadIndustrialC(unidadIndustrialC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUnidadIndustrialC/' + unidadIndustrialC + '?' + attributes);
  }
  
  findOneByManzanoC(manzanoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByManzanoC/' + manzanoC + '?' + attributes);
  }
  
  findOneBySuperficieC(superficieC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySuperficieC/' + superficieC + '?' + attributes);
  }
  
  findOneByJjwgMapsLngC(jjwgMapsLngC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsLngC/' + jjwgMapsLngC + '?' + attributes);
  }
  
  findOneByJjwgMapsLatC(jjwgMapsLatC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsLatC/' + jjwgMapsLatC + '?' + attributes);
  }
  
  findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsGeocodeStatusC/' + jjwgMapsGeocodeStatusC + '?' + attributes);
  }
  
  findOneByJjwgMapsAddressC(jjwgMapsAddressC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJjwgMapsAddressC/' + jjwgMapsAddressC + '?' + attributes);
  }
  
  findOneByLblTipoPagoC(lblTipoPagoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLblTipoPagoC/' + lblTipoPagoC + '?' + attributes);
  }
  
  findOneByUbicacionC(ubicacionC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUbicacionC/' + ubicacionC + '?' + attributes);
  }
  
  findOneByTipoVentaC(tipoVentaC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTipoVentaC/' + tipoVentaC + '?' + attributes);
  }
  
  findOneByMonedaC(monedaC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMonedaC/' + monedaC + '?' + attributes);
  }
  
  
  updateOpportunityCstmByIdC(idC:any, opportunityCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunityCstmByIdC?idC=' + idC, opportunityCstm);
  }
  
  updateOpportunityCstmByUnidadIndustrialC(unidadIndustrialC:any, opportunityCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunityCstmByUnidadIndustrialC?unidadIndustrialC=' + unidadIndustrialC, opportunityCstm);
  }
  
  updateOpportunityCstmByManzanoC(manzanoC:any, opportunityCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunityCstmByManzanoC?manzanoC=' + manzanoC, opportunityCstm);
  }
  
  updateOpportunityCstmBySuperficieC(superficieC:any, opportunityCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunityCstmBySuperficieC?superficieC=' + superficieC, opportunityCstm);
  }
  
  updateOpportunityCstmByJjwgMapsLngC(jjwgMapsLngC:any, opportunityCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunityCstmByJjwgMapsLngC?jjwgMapsLngC=' + jjwgMapsLngC, opportunityCstm);
  }
  
  updateOpportunityCstmByJjwgMapsLatC(jjwgMapsLatC:any, opportunityCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunityCstmByJjwgMapsLatC?jjwgMapsLatC=' + jjwgMapsLatC, opportunityCstm);
  }
  
  updateOpportunityCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC:any, opportunityCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunityCstmByJjwgMapsGeocodeStatusC?jjwgMapsGeocodeStatusC=' + jjwgMapsGeocodeStatusC, opportunityCstm);
  }
  
  updateOpportunityCstmByJjwgMapsAddressC(jjwgMapsAddressC:any, opportunityCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunityCstmByJjwgMapsAddressC?jjwgMapsAddressC=' + jjwgMapsAddressC, opportunityCstm);
  }
  
  updateOpportunityCstmByLblTipoPagoC(lblTipoPagoC:any, opportunityCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunityCstmByLblTipoPagoC?lblTipoPagoC=' + lblTipoPagoC, opportunityCstm);
  }
  
  updateOpportunityCstmByUbicacionC(ubicacionC:any, opportunityCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunityCstmByUbicacionC?ubicacionC=' + ubicacionC, opportunityCstm);
  }
  
  updateOpportunityCstmByTipoVentaC(tipoVentaC:any, opportunityCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunityCstmByTipoVentaC?tipoVentaC=' + tipoVentaC, opportunityCstm);
  }
  
  updateOpportunityCstmByMonedaC(monedaC:any, opportunityCstm:OpportunitiesCstm) {
      return this.http.post(this.basePath + '/updateOpportunityCstmByMonedaC?monedaC=' + monedaC, opportunityCstm);
  }
  
  
  
  //</es-section>
}
