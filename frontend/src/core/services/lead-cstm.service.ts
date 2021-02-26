/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:08 GMT-0400 (Bolivia Time)
 * Time: 2:43:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:08 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:8
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {LeadsCstm} from "../models/leadsCstm";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class LeadCstmService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/leads-cstm`;
  dataChange: BehaviorSubject<LeadsCstm[]> = new BehaviorSubject<LeadsCstm[]>([]);
  leadCstmData: LeadsCstm = new LeadsCstm();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): LeadsCstm[] {
    return this.dataChange.value;
  }

  getDataLeadsCstm(): void {
    this.getAllLeadsCstm().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:LeadsCstm[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllLeadsCstm(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createLeadCstm(leadCstm:LeadsCstm) {
    return this.http.post(this.basePath, leadCstm);
  }
  getLeadCstm(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateLeadCstm(id:any, leadCstm:LeadsCstm) {
    return this.http.put(this.basePath + '/' + id, leadCstm);
  }
  deleteLeadCstm(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByIdC(idC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIdC/' + idC + '?' + attributes);
  }
  
  findOneByActividadLlamarC(actividadLlamarC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActividadLlamarC/' + actividadLlamarC + '?' + attributes);
  }
  
  findOneByTieneWhatsappC(tieneWhatsappC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTieneWhatsappC/' + tieneWhatsappC + '?' + attributes);
  }
  
  findOneByCorreoPrincipalC(correoPrincipalC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCorreoPrincipalC/' + correoPrincipalC + '?' + attributes);
  }
  
  findOneByCorreoAlternativoC(correoAlternativoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCorreoAlternativoC/' + correoAlternativoC + '?' + attributes);
  }
  
  findOneByComercialDiasCierre(comercialDiasCierre:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByComercialDiasCierre/' + comercialDiasCierre + '?' + attributes);
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
  
  findOneBySuperficieC(superficieC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySuperficieC/' + superficieC + '?' + attributes);
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
  
  findOneByExtensionDocumentoC(extensionDocumentoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExtensionDocumentoC/' + extensionDocumentoC + '?' + attributes);
  }
  
  findOneByGeneroC(generoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGeneroC/' + generoC + '?' + attributes);
  }
  
  findOneByEtapasC(etapasC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEtapasC/' + etapasC + '?' + attributes);
  }
  
  findOneByNumeroDocumentoC(numeroDocumentoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNumeroDocumentoC/' + numeroDocumentoC + '?' + attributes);
  }
  
  findOneBySecEmailC(secEmailC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySecEmailC/' + secEmailC + '?' + attributes);
  }
  
  findOneByNombreEmpresaC(nombreEmpresaC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNombreEmpresaC/' + nombreEmpresaC + '?' + attributes);
  }
  
  findOneByNombreContactoC(nombreContactoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNombreContactoC/' + nombreContactoC + '?' + attributes);
  }
  
  findOneByNitEmpresaC(nitEmpresaC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNitEmpresaC/' + nitEmpresaC + '?' + attributes);
  }
  
  findOneByEmailEmpresaC(emailEmpresaC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailEmpresaC/' + emailEmpresaC + '?' + attributes);
  }
  
  findOneByPhoneMobil2C(phoneMobil2C:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPhoneMobil2C/' + phoneMobil2C + '?' + attributes);
  }
  
  findOneByPhoneMobil3C(phoneMobil3C:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPhoneMobil3C/' + phoneMobil3C + '?' + attributes);
  }
  
  findOneByAsesorNegocioC(asesorNegocioC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAsesorNegocioC/' + asesorNegocioC + '?' + attributes);
  }
  
  findOneByTipoLeadC(tipoLeadC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTipoLeadC/' + tipoLeadC + '?' + attributes);
  }
  
  findOneByRubroC(rubroC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRubroC/' + rubroC + '?' + attributes);
  }
  
  findOneByTipoClienteC(tipoClienteC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTipoClienteC/' + tipoClienteC + '?' + attributes);
  }
  
  findOneBySexoC(sexoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySexoC/' + sexoC + '?' + attributes);
  }
  
  findOneByCiudadC(ciudadC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCiudadC/' + ciudadC + '?' + attributes);
  }
  
  findOneByDepartamentoC(departamentoC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDepartamentoC/' + departamentoC + '?' + attributes);
  }
  
  findOneByPaisC(paisC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPaisC/' + paisC + '?' + attributes);
  }
  
  findOneByDireccionC(direccionC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDireccionC/' + direccionC + '?' + attributes);
  }
  
  findOneByNuevoRubroC(nuevoRubroC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNuevoRubroC/' + nuevoRubroC + '?' + attributes);
  }
  
  findOneByDireccionEmpresaC(direccionEmpresaC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDireccionEmpresaC/' + direccionEmpresaC + '?' + attributes);
  }
  
  findOneByActividadC(actividadC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActividadC/' + actividadC + '?' + attributes);
  }
  
  findOneByActividadLlamarFechaC(actividadLlamarFechaC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActividadLlamarFechaC/' + actividadLlamarFechaC + '?' + attributes);
  }
  
  findOneByFechaValidexC(fechaValidexC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFechaValidexC/' + fechaValidexC + '?' + attributes);
  }
  
  
  updateLeadCstmByIdC(idC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByIdC?idC=' + idC, leadCstm);
  }
  
  updateLeadCstmByActividadLlamarC(actividadLlamarC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByActividadLlamarC?actividadLlamarC=' + actividadLlamarC, leadCstm);
  }
  
  updateLeadCstmByTieneWhatsappC(tieneWhatsappC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByTieneWhatsappC?tieneWhatsappC=' + tieneWhatsappC, leadCstm);
  }
  
  updateLeadCstmByCorreoPrincipalC(correoPrincipalC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByCorreoPrincipalC?correoPrincipalC=' + correoPrincipalC, leadCstm);
  }
  
  updateLeadCstmByCorreoAlternativoC(correoAlternativoC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByCorreoAlternativoC?correoAlternativoC=' + correoAlternativoC, leadCstm);
  }
  
  updateLeadCstmByComercialDiasCierre(comercialDiasCierre:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByComercialDiasCierre?comercialDiasCierre=' + comercialDiasCierre, leadCstm);
  }
  
  updateLeadCstmByJjwgMapsLngC(jjwgMapsLngC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByJjwgMapsLngC?jjwgMapsLngC=' + jjwgMapsLngC, leadCstm);
  }
  
  updateLeadCstmByJjwgMapsLatC(jjwgMapsLatC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByJjwgMapsLatC?jjwgMapsLatC=' + jjwgMapsLatC, leadCstm);
  }
  
  updateLeadCstmBySuperficieC(superficieC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmBySuperficieC?superficieC=' + superficieC, leadCstm);
  }
  
  updateLeadCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByJjwgMapsGeocodeStatusC?jjwgMapsGeocodeStatusC=' + jjwgMapsGeocodeStatusC, leadCstm);
  }
  
  updateLeadCstmByJjwgMapsAddressC(jjwgMapsAddressC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByJjwgMapsAddressC?jjwgMapsAddressC=' + jjwgMapsAddressC, leadCstm);
  }
  
  updateLeadCstmByExtensionDocumentoC(extensionDocumentoC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByExtensionDocumentoC?extensionDocumentoC=' + extensionDocumentoC, leadCstm);
  }
  
  updateLeadCstmByGeneroC(generoC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByGeneroC?generoC=' + generoC, leadCstm);
  }
  
  updateLeadCstmByEtapasC(etapasC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByEtapasC?etapasC=' + etapasC, leadCstm);
  }
  
  updateLeadCstmByNumeroDocumentoC(numeroDocumentoC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByNumeroDocumentoC?numeroDocumentoC=' + numeroDocumentoC, leadCstm);
  }
  
  updateLeadCstmBySecEmailC(secEmailC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmBySecEmailC?secEmailC=' + secEmailC, leadCstm);
  }
  
  updateLeadCstmByNombreEmpresaC(nombreEmpresaC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByNombreEmpresaC?nombreEmpresaC=' + nombreEmpresaC, leadCstm);
  }
  
  updateLeadCstmByNombreContactoC(nombreContactoC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByNombreContactoC?nombreContactoC=' + nombreContactoC, leadCstm);
  }
  
  updateLeadCstmByNitEmpresaC(nitEmpresaC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByNitEmpresaC?nitEmpresaC=' + nitEmpresaC, leadCstm);
  }
  
  updateLeadCstmByEmailEmpresaC(emailEmpresaC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByEmailEmpresaC?emailEmpresaC=' + emailEmpresaC, leadCstm);
  }
  
  updateLeadCstmByPhoneMobil2C(phoneMobil2C:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByPhoneMobil2C?phoneMobil2C=' + phoneMobil2C, leadCstm);
  }
  
  updateLeadCstmByPhoneMobil3C(phoneMobil3C:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByPhoneMobil3C?phoneMobil3C=' + phoneMobil3C, leadCstm);
  }
  
  updateLeadCstmByAsesorNegocioC(asesorNegocioC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByAsesorNegocioC?asesorNegocioC=' + asesorNegocioC, leadCstm);
  }
  
  updateLeadCstmByTipoLeadC(tipoLeadC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByTipoLeadC?tipoLeadC=' + tipoLeadC, leadCstm);
  }
  
  updateLeadCstmByRubroC(rubroC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByRubroC?rubroC=' + rubroC, leadCstm);
  }
  
  updateLeadCstmByTipoClienteC(tipoClienteC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByTipoClienteC?tipoClienteC=' + tipoClienteC, leadCstm);
  }
  
  updateLeadCstmBySexoC(sexoC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmBySexoC?sexoC=' + sexoC, leadCstm);
  }
  
  updateLeadCstmByCiudadC(ciudadC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByCiudadC?ciudadC=' + ciudadC, leadCstm);
  }
  
  updateLeadCstmByDepartamentoC(departamentoC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByDepartamentoC?departamentoC=' + departamentoC, leadCstm);
  }
  
  updateLeadCstmByPaisC(paisC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByPaisC?paisC=' + paisC, leadCstm);
  }
  
  updateLeadCstmByDireccionC(direccionC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByDireccionC?direccionC=' + direccionC, leadCstm);
  }
  
  updateLeadCstmByNuevoRubroC(nuevoRubroC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByNuevoRubroC?nuevoRubroC=' + nuevoRubroC, leadCstm);
  }
  
  updateLeadCstmByDireccionEmpresaC(direccionEmpresaC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByDireccionEmpresaC?direccionEmpresaC=' + direccionEmpresaC, leadCstm);
  }
  
  updateLeadCstmByActividadC(actividadC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByActividadC?actividadC=' + actividadC, leadCstm);
  }
  
  updateLeadCstmByActividadLlamarFechaC(actividadLlamarFechaC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByActividadLlamarFechaC?actividadLlamarFechaC=' + actividadLlamarFechaC, leadCstm);
  }
  
  updateLeadCstmByFechaValidexC(fechaValidexC:any, leadCstm:LeadsCstm) {
      return this.http.post(this.basePath + '/updateLeadCstmByFechaValidexC?fechaValidexC=' + fechaValidexC, leadCstm);
  }
  
  
  
  //</es-section>
}
