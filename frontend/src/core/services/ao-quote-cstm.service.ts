/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:51 GMT-0400 (Bolivia Time)
 * Time: 2:41:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:51
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosQuotesCstm} from "../models/aosQuotesCstm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoQuoteCstmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-quotes-cstm`;
  dataChange: BehaviorSubject<AosQuotesCstm[]> = new BehaviorSubject<AosQuotesCstm[]>([]);
  aoQuoteCstmData: AosQuotesCstm = new AosQuotesCstm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosQuotesCstm[] {
    return this.dataChange.value;
  }

  getDataAosQuotesCstm(): void {
    this.getAllAosQuotesCstm().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosQuotesCstm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosQuotesCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoQuoteCstm(aoQuoteCstm:AosQuotesCstm) {
    return this.http.post(this.basePath, aoQuoteCstm);
  }
  getAoQuoteCstm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoQuoteCstm(id:any, aoQuoteCstm:AosQuotesCstm) {
    return this.http.put(this.basePath + '/' + id, aoQuoteCstm);
  }
  deleteAoQuoteCstm(id:any) {
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
  
  findOneByMetroCuadradoC(metroCuadradoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMetroCuadradoC/' + metroCuadradoC + '?' + attributes);
  }
  
  findOneByFrenteMetrosC(frenteMetrosC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFrenteMetrosC/' + frenteMetrosC + '?' + attributes);
  }
  
  findOneByFondoMetrosC(fondoMetrosC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFondoMetrosC/' + fondoMetrosC + '?' + attributes);
  }
  
  findOneByLblSuperficieC(lblSuperficieC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLblSuperficieC/' + lblSuperficieC + '?' + attributes);
  }
  
  findOneByLblCuotainicialC(lblCuotainicialC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLblCuotainicialC/' + lblCuotainicialC + '?' + attributes);
  }
  
  findOneBySaldoCuotaInicalC(saldoCuotaInicalC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySaldoCuotaInicalC/' + saldoCuotaInicalC + '?' + attributes);
  }
  
  findOneByPrecioMcuadradoC(precioMcuadradoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPrecioMcuadradoC/' + precioMcuadradoC + '?' + attributes);
  }
  
  findOneBySaldoC(saldoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySaldoC/' + saldoC + '?' + attributes);
  }
  
  findOneByCuotaMensualC(cuotaMensualC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCuotaMensualC/' + cuotaMensualC + '?' + attributes);
  }
  
  findOneByUbicacionC(ubicacionC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUbicacionC/' + ubicacionC + '?' + attributes);
  }
  
  findOneByLblTipoventaC(lblTipoventaC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLblTipoventaC/' + lblTipoventaC + '?' + attributes);
  }
  
  findOneByTermYearsC(termYearsC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTermYearsC/' + termYearsC + '?' + attributes);
  }
  
  findOneByTipoPagoC(tipoPagoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTipoPagoC/' + tipoPagoC + '?' + attributes);
  }
  
  findOneByLinkTerrenoC(linkTerrenoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLinkTerrenoC/' + linkTerrenoC + '?' + attributes);
  }
  
  findOneByMonedaC(monedaC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMonedaC/' + monedaC + '?' + attributes);
  }
  
  findOneByFechaEnvioProgramadaC(fechaEnvioProgramadaC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFechaEnvioProgramadaC/' + fechaEnvioProgramadaC + '?' + attributes);
  }
  
  
  updateAoQuoteCstmByIdC(idC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByIdC?idC=' + idC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByUnidadIndustrialC(unidadIndustrialC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByUnidadIndustrialC?unidadIndustrialC=' + unidadIndustrialC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByManzanoC(manzanoC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByManzanoC?manzanoC=' + manzanoC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByMetroCuadradoC(metroCuadradoC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByMetroCuadradoC?metroCuadradoC=' + metroCuadradoC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByFrenteMetrosC(frenteMetrosC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByFrenteMetrosC?frenteMetrosC=' + frenteMetrosC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByFondoMetrosC(fondoMetrosC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByFondoMetrosC?fondoMetrosC=' + fondoMetrosC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByLblSuperficieC(lblSuperficieC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByLblSuperficieC?lblSuperficieC=' + lblSuperficieC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByLblCuotainicialC(lblCuotainicialC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByLblCuotainicialC?lblCuotainicialC=' + lblCuotainicialC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmBySaldoCuotaInicalC(saldoCuotaInicalC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmBySaldoCuotaInicalC?saldoCuotaInicalC=' + saldoCuotaInicalC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByPrecioMcuadradoC(precioMcuadradoC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByPrecioMcuadradoC?precioMcuadradoC=' + precioMcuadradoC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmBySaldoC(saldoC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmBySaldoC?saldoC=' + saldoC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByCuotaMensualC(cuotaMensualC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByCuotaMensualC?cuotaMensualC=' + cuotaMensualC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByUbicacionC(ubicacionC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByUbicacionC?ubicacionC=' + ubicacionC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByLblTipoventaC(lblTipoventaC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByLblTipoventaC?lblTipoventaC=' + lblTipoventaC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByTermYearsC(termYearsC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByTermYearsC?termYearsC=' + termYearsC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByTipoPagoC(tipoPagoC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByTipoPagoC?tipoPagoC=' + tipoPagoC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByLinkTerrenoC(linkTerrenoC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByLinkTerrenoC?linkTerrenoC=' + linkTerrenoC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByMonedaC(monedaC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByMonedaC?monedaC=' + monedaC, aoQuoteCstm);
  }
  
  updateAoQuoteCstmByFechaEnvioProgramadaC(fechaEnvioProgramadaC:any, aoQuoteCstm:AosQuotesCstm) {
      return this.http.post(this.basePath + '/updateAoQuoteCstmByFechaEnvioProgramadaC?fechaEnvioProgramadaC=' + fechaEnvioProgramadaC, aoQuoteCstm);
  }
  
  
  
  //</es-section>
}
