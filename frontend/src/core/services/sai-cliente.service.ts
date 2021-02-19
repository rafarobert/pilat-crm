/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:01 GMT-0400 (Bolivia Time)
 * Time: 2:44:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:01 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:1
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SaiClientes} from "../models/saiClientes";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SaiClienteService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/sai-clientes`;
  dataChange: BehaviorSubject<SaiClientes[]> = new BehaviorSubject<SaiClientes[]>([]);
  saiClienteData: SaiClientes = new SaiClientes();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): SaiClientes[] {
    return this.dataChange.value;
  }

  getDataSaiClientes(): void {
    this.getAllSaiClientes().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SaiClientes[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSaiClientes(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSaiCliente(saiCliente:SaiClientes) {
    return this.http.post(this.basePath, saiCliente);
  }
  getSaiCliente(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSaiCliente(id:any, saiCliente:SaiClientes) {
    return this.http.put(this.basePath + '/' + id, saiCliente);
  }
  deleteSaiCliente(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByGbagecage(gbagecage:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbagecage/' + gbagecage + '?' + attributes);
  }
  
  findOneByIlsupcage(ilsupcage:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIlsupcage/' + ilsupcage + '?' + attributes);
  }
  
  findOneByGbagetper(gbagetper:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbagetper/' + gbagetper + '?' + attributes);
  }
  
  findOneByGbagesexo(gbagesexo:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbagesexo/' + gbagesexo + '?' + attributes);
  }
  
  findOneByGbagenruc(gbagenruc:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbagenruc/' + gbagenruc + '?' + attributes);
  }
  
  findOneByGbagendid(gbagendid:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbagendid/' + gbagendid + '?' + attributes);
  }
  
  findOneByGbagecorg(gbagecorg:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbagecorg/' + gbagecorg + '?' + attributes);
  }
  
  findOneByGbageappa(gbageappa:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbageappa/' + gbageappa + '?' + attributes);
  }
  
  findOneByGbageapma(gbageapma:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbageapma/' + gbageapma + '?' + attributes);
  }
  
  findOneByPrefijo(prefijo:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPrefijo/' + prefijo + '?' + attributes);
  }
  
  findOneByGbageapca(gbageapca:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbageapca/' + gbageapca + '?' + attributes);
  }
  
  findOneByGbagenoms(gbagenoms:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbagenoms/' + gbagenoms + '?' + attributes);
  }
  
  findOneByGbagenomb(gbagenomb:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbagenomb/' + gbagenomb + '?' + attributes);
  }
  
  findOneByGbtlfntl1(gbtlfntl1:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbtlfntl1/' + gbtlfntl1 + '?' + attributes);
  }
  
  findOneByGbtlfntl2(gbtlfntl2:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbtlfntl2/' + gbtlfntl2 + '?' + attributes);
  }
  
  findOneByGbtlfntl3(gbtlfntl3:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbtlfntl3/' + gbtlfntl3 + '?' + attributes);
  }
  
  findOneByGbtlfntl4(gbtlfntl4:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbtlfntl4/' + gbtlfntl4 + '?' + attributes);
  }
  
  findOneByGbtlfntl5(gbtlfntl5:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbtlfntl5/' + gbtlfntl5 + '?' + attributes);
  }
  
  findOneByGbtlfntl6(gbtlfntl6:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbtlfntl6/' + gbtlfntl6 + '?' + attributes);
  }
  
  findOneByGbpaidesc(gbpaidesc:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbpaidesc/' + gbpaidesc + '?' + attributes);
  }
  
  findOneByGbdptdesc(gbdptdesc:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbdptdesc/' + gbdptdesc + '?' + attributes);
  }
  
  findOneByGbciudesc(gbciudesc:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbciudesc/' + gbciudesc + '?' + attributes);
  }
  
  findOneByGbdirdire(gbdirdire:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbdirdire/' + gbdirdire + '?' + attributes);
  }
  
  findOneByGbemamail(gbemamail:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbemamail/' + gbemamail + '?' + attributes);
  }
  
  findOneByGbagefnac(gbagefnac:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbagefnac/' + gbagefnac + '?' + attributes);
  }
  
  findOneByGbagefreg(gbagefreg:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGbagefreg/' + gbagefreg + '?' + attributes);
  }
  
  
  updateSaiClienteByGbagecage(gbagecage:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbagecage?gbagecage=' + gbagecage, saiCliente);
  }
  
  updateSaiClienteByIlsupcage(ilsupcage:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByIlsupcage?ilsupcage=' + ilsupcage, saiCliente);
  }
  
  updateSaiClienteByGbagetper(gbagetper:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbagetper?gbagetper=' + gbagetper, saiCliente);
  }
  
  updateSaiClienteByGbagesexo(gbagesexo:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbagesexo?gbagesexo=' + gbagesexo, saiCliente);
  }
  
  updateSaiClienteByGbagenruc(gbagenruc:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbagenruc?gbagenruc=' + gbagenruc, saiCliente);
  }
  
  updateSaiClienteByGbagendid(gbagendid:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbagendid?gbagendid=' + gbagendid, saiCliente);
  }
  
  updateSaiClienteByGbagecorg(gbagecorg:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbagecorg?gbagecorg=' + gbagecorg, saiCliente);
  }
  
  updateSaiClienteByGbageappa(gbageappa:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbageappa?gbageappa=' + gbageappa, saiCliente);
  }
  
  updateSaiClienteByGbageapma(gbageapma:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbageapma?gbageapma=' + gbageapma, saiCliente);
  }
  
  updateSaiClienteByPrefijo(prefijo:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByPrefijo?prefijo=' + prefijo, saiCliente);
  }
  
  updateSaiClienteByGbageapca(gbageapca:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbageapca?gbageapca=' + gbageapca, saiCliente);
  }
  
  updateSaiClienteByGbagenoms(gbagenoms:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbagenoms?gbagenoms=' + gbagenoms, saiCliente);
  }
  
  updateSaiClienteByGbagenomb(gbagenomb:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbagenomb?gbagenomb=' + gbagenomb, saiCliente);
  }
  
  updateSaiClienteByGbtlfntl1(gbtlfntl1:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbtlfntl1?gbtlfntl1=' + gbtlfntl1, saiCliente);
  }
  
  updateSaiClienteByGbtlfntl2(gbtlfntl2:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbtlfntl2?gbtlfntl2=' + gbtlfntl2, saiCliente);
  }
  
  updateSaiClienteByGbtlfntl3(gbtlfntl3:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbtlfntl3?gbtlfntl3=' + gbtlfntl3, saiCliente);
  }
  
  updateSaiClienteByGbtlfntl4(gbtlfntl4:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbtlfntl4?gbtlfntl4=' + gbtlfntl4, saiCliente);
  }
  
  updateSaiClienteByGbtlfntl5(gbtlfntl5:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbtlfntl5?gbtlfntl5=' + gbtlfntl5, saiCliente);
  }
  
  updateSaiClienteByGbtlfntl6(gbtlfntl6:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbtlfntl6?gbtlfntl6=' + gbtlfntl6, saiCliente);
  }
  
  updateSaiClienteByGbpaidesc(gbpaidesc:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbpaidesc?gbpaidesc=' + gbpaidesc, saiCliente);
  }
  
  updateSaiClienteByGbdptdesc(gbdptdesc:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbdptdesc?gbdptdesc=' + gbdptdesc, saiCliente);
  }
  
  updateSaiClienteByGbciudesc(gbciudesc:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbciudesc?gbciudesc=' + gbciudesc, saiCliente);
  }
  
  updateSaiClienteByGbdirdire(gbdirdire:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbdirdire?gbdirdire=' + gbdirdire, saiCliente);
  }
  
  updateSaiClienteByGbemamail(gbemamail:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbemamail?gbemamail=' + gbemamail, saiCliente);
  }
  
  updateSaiClienteByGbagefnac(gbagefnac:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbagefnac?gbagefnac=' + gbagefnac, saiCliente);
  }
  
  updateSaiClienteByGbagefreg(gbagefreg:any, saiCliente:SaiClientes) {
      return this.http.post(this.basePath + '/updateSaiClienteByGbagefreg?gbagefreg=' + gbagefreg, saiCliente);
  }
  
  
  
  //</es-section>
}
