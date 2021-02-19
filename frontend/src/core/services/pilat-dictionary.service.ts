/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 01:10:14 GMT-0400 (Bolivia Time)
 * Time: 1:10:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 01:10:14 GMT-0400 (Bolivia Time)
 * Last time updated: 1:10:14
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
export class PilatDictionaryService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/pilat-dictionaries`;
  dataChange: BehaviorSubject<PilatDictionaries[]> = new BehaviorSubject<PilatDictionaries[]>([]);
  pilatDictionaryData: PilatDictionaries = new PilatDictionaries();
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
  createPilatDictionary(pilatDictionary:PilatDictionaries) {
    return this.http.post(this.basePath, pilatDictionary);
  }
  getPilatDictionary(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updatePilatDictionary(id:any, pilatDictionary:PilatDictionaries) {
    return this.http.put(this.basePath + '/' + id, pilatDictionary);
  }
  deletePilatDictionary(id:any) {
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
  
  
  updatePilatDictionaryByUid(Id:any, pilatDictionary:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionaryByUid?Id=' + Id, pilatDictionary);
  }
  
  updatePilatDictionaryById(id:any, pilatDictionary:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionaryById?id=' + id, pilatDictionary);
  }
  
  updatePilatDictionaryByDicCode(dicCode:any, pilatDictionary:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionaryByDicCode?dicCode=' + dicCode, pilatDictionary);
  }
  
  updatePilatDictionaryByDicDescription(dicDescription:any, pilatDictionary:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionaryByDicDescription?dicDescription=' + dicDescription, pilatDictionary);
  }
  
  updatePilatDictionaryByDicGroup(dicGroup:any, pilatDictionary:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionaryByDicGroup?dicGroup=' + dicGroup, pilatDictionary);
  }
  
  updatePilatDictionaryByDicParStatusId(dicParStatusId:any, pilatDictionary:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionaryByDicParStatusId?dicParStatusId=' + dicParStatusId, pilatDictionary);
  }
  
  updatePilatDictionaryByCreatedby(createdby:any, pilatDictionary:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionaryByCreatedby?createdby=' + createdby, pilatDictionary);
  }
  
  updatePilatDictionaryByUpdatedby(updatedby:any, pilatDictionary:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionaryByUpdatedby?updatedby=' + updatedby, pilatDictionary);
  }
  
  updatePilatDictionaryByDueat(dueat:any, pilatDictionary:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionaryByDueat?dueat=' + dueat, pilatDictionary);
  }
  
  updatePilatDictionaryByCreatedat(createdat:any, pilatDictionary:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionaryByCreatedat?createdat=' + createdat, pilatDictionary);
  }
  
  updatePilatDictionaryByUpdatedat(updatedat:any, pilatDictionary:PilatDictionaries) {
      return this.http.post(this.basePath + '/updatePilatDictionaryByUpdatedat?updatedat=' + updatedat, pilatDictionary);
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
