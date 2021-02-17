/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:35 GMT-0400 (Bolivia Time)
 * Time: 2:43:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:35 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:35
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {PilatDictionaries} from "../models/pilatDictionaries";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class PilatDictionarieService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/pilat-dictionaries`;
  dataChange: BehaviorSubject<PilatDictionaries[]> = new BehaviorSubject<PilatDictionaries[]>([]);
  pilatDictionarieData: PilatDictionaries = new PilatDictionaries();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): PilatDictionaries[] {
    return this.dataChange.value;
  }

  getDataPilatDictionaries(): void {
    this.getAllPilatDictionaries().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:PilatDictionaries[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllPilatDictionaries(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createPilatDictionarie(pilatDictionarie:PilatDictionaries) {
    return this.http.post(this.basePath, pilatDictionarie);
  }
  getPilatDictionarie(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updatePilatDictionarie(id:any, pilatDictionarie:PilatDictionaries) {
    return this.http.put(this.basePath + '/' + id, pilatDictionarie);
  }
  deletePilatDictionarie(id:any) {
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
  
  findOneByDicCode(dicCode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDicCode/' + dicCode + '?' + attributes);
  }
  
  findOneByDicDescription(dicDescription:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDicDescription/' + dicDescription + '?' + attributes);
  }
  
  findOneByDicGroup(dicGroup:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDicGroup/' + dicGroup + '?' + attributes);
  }
  
  findOneByDicParStatusId(dicParStatusId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDicParStatusId/' + dicParStatusId + '?' + attributes);
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
  
  
  updatePilatDictionarieByUid(Id:any, pilatDictionarie:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionarieByUid?Id=' + Id, pilatDictionarie);
  }
  
  updatePilatDictionarieById(id:any, pilatDictionarie:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionarieById?id=' + id, pilatDictionarie);
  }
  
  updatePilatDictionarieByDicCode(dicCode:any, pilatDictionarie:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionarieByDicCode?dicCode=' + dicCode, pilatDictionarie);
  }
  
  updatePilatDictionarieByDicDescription(dicDescription:any, pilatDictionarie:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionarieByDicDescription?dicDescription=' + dicDescription, pilatDictionarie);
  }
  
  updatePilatDictionarieByDicGroup(dicGroup:any, pilatDictionarie:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionarieByDicGroup?dicGroup=' + dicGroup, pilatDictionarie);
  }
  
  updatePilatDictionarieByDicParStatusId(dicParStatusId:any, pilatDictionarie:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionarieByDicParStatusId?dicParStatusId=' + dicParStatusId, pilatDictionarie);
  }
  
  updatePilatDictionarieByCreatedby(createdby:any, pilatDictionarie:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionarieByCreatedby?createdby=' + createdby, pilatDictionarie);
  }
  
  updatePilatDictionarieByUpdatedby(updatedby:any, pilatDictionarie:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionarieByUpdatedby?updatedby=' + updatedby, pilatDictionarie);
  }
  
  updatePilatDictionarieByDueat(dueat:any, pilatDictionarie:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionarieByDueat?dueat=' + dueat, pilatDictionarie);
  }
  
  updatePilatDictionarieByCreatedat(createdat:any, pilatDictionarie:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionarieByCreatedat?createdat=' + createdat, pilatDictionarie);
  }
  
  updatePilatDictionarieByUpdatedat(updatedat:any, pilatDictionarie:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionarieByUpdatedat?updatedat=' + updatedat, pilatDictionarie);
  }
  
  
  findPilatParamsDicParStatusWithParOrder(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findPilatParamsDicParStatusWithParOrder' + '?' + attributes);
  }
  
  
  filterPilatDictionariesByDicParStatus(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterPilatDictionariesByDicParStatus/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
