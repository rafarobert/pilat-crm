/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Time: 14:1:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:15
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {PilatCrons} from "../models/pilatCrons";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class PilatCronService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/pilat-crons`;
  dataChange: BehaviorSubject<PilatCrons[]> = new BehaviorSubject<PilatCrons[]>([]);
  pilatCronData: PilatCrons = new PilatCrons();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): PilatCrons[] {
    return this.dataChange.value;
  }

  getDataPilatCrons(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllPilatCrons(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:PilatCrons[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllPilatCrons(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createPilatCron(pilatCron:PilatCrons) {
    return this.http.post(this.basePath, pilatCron);
  }
  getPilatCron(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updatePilatCron(id:any, pilatCron:PilatCrons) {
    return this.http.put(this.basePath + '/' + id, pilatCron);
  }
  deletePilatCron(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByUid(Id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUid/' + Id + '?' + attributes);
  }
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByCroStatus(croStatus:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCroStatus/' + croStatus + '?' + attributes);
  }
  
  findOneByCroDescription(croDescription:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCroDescription/' + croDescription + '?' + attributes);
  }
  
  findOneByCroExpression(croExpression:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCroExpression/' + croExpression + '?' + attributes);
  }
  
  findOneByCroGroup(croGroup:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCroGroup/' + croGroup + '?' + attributes);
  }
  
  findOneByCroMaiId(croMaiId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCroMaiId/' + croMaiId + '?' + attributes);
  }
  
  findOneByCreatedby(createdby:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedby/' + createdby + '?' + attributes);
  }
  
  findOneByUpdatedby(updatedby:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUpdatedby/' + updatedby + '?' + attributes);
  }
  
  findOneByDueat(dueat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDueat/' + dueat + '?' + attributes);
  }
  
  findOneByCreatedat(createdat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedat/' + createdat + '?' + attributes);
  }
  
  findOneByUpdatedat(updatedat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUpdatedat/' + updatedat + '?' + attributes);
  }
  
  
  updatePilatCronByUid(Id:any, pilatCron:PilatCrons) {
      return this.http.post(this.basePath + '/updatePilatCronByUid?Id=' + Id, pilatCron);
  }
  
  updatePilatCronById(id:any, pilatCron:PilatCrons) {
      return this.http.post(this.basePath + '/updatePilatCronById?id=' + id, pilatCron);
  }
  
  updatePilatCronByCroStatus(croStatus:any, pilatCron:PilatCrons) {
      return this.http.post(this.basePath + '/updatePilatCronByCroStatus?croStatus=' + croStatus, pilatCron);
  }
  
  updatePilatCronByCroDescription(croDescription:any, pilatCron:PilatCrons) {
      return this.http.post(this.basePath + '/updatePilatCronByCroDescription?croDescription=' + croDescription, pilatCron);
  }
  
  updatePilatCronByCroExpression(croExpression:any, pilatCron:PilatCrons) {
      return this.http.post(this.basePath + '/updatePilatCronByCroExpression?croExpression=' + croExpression, pilatCron);
  }
  
  updatePilatCronByCroGroup(croGroup:any, pilatCron:PilatCrons) {
      return this.http.post(this.basePath + '/updatePilatCronByCroGroup?croGroup=' + croGroup, pilatCron);
  }
  
  updatePilatCronByCroMaiId(croMaiId:any, pilatCron:PilatCrons) {
      return this.http.post(this.basePath + '/updatePilatCronByCroMaiId?croMaiId=' + croMaiId, pilatCron);
  }
  
  updatePilatCronByCreatedby(createdby:any, pilatCron:PilatCrons) {
      return this.http.post(this.basePath + '/updatePilatCronByCreatedby?createdby=' + createdby, pilatCron);
  }
  
  updatePilatCronByUpdatedby(updatedby:any, pilatCron:PilatCrons) {
      return this.http.post(this.basePath + '/updatePilatCronByUpdatedby?updatedby=' + updatedby, pilatCron);
  }
  
  updatePilatCronByDueat(dueat:any, pilatCron:PilatCrons) {
      return this.http.post(this.basePath + '/updatePilatCronByDueat?dueat=' + dueat, pilatCron);
  }
  
  updatePilatCronByCreatedat(createdat:any, pilatCron:PilatCrons) {
      return this.http.post(this.basePath + '/updatePilatCronByCreatedat?createdat=' + createdat, pilatCron);
  }
  
  updatePilatCronByUpdatedat(updatedat:any, pilatCron:PilatCrons) {
      return this.http.post(this.basePath + '/updatePilatCronByUpdatedat?updatedat=' + updatedat, pilatCron);
  }
  
  
  
  //</es-section>
}
