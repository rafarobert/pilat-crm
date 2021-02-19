/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:37 GMT-0400 (Bolivia Time)
 * Time: 2:43:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:37 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:37
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {PilatParams} from "../models/pilatParams";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class PilatParamService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/pilat-params`;
  dataChange: BehaviorSubject<PilatParams[]> = new BehaviorSubject<PilatParams[]>([]);
  pilatParamData: PilatParams = new PilatParams();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): PilatParams[] {
    return this.dataChange.value;
  }

  getDataPilatParams(): void {
    this.getAllPilatParams().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:PilatParams[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllPilatParams(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createPilatParam(pilatParam:PilatParams) {
    return this.http.post(this.basePath, pilatParam);
  }
  getPilatParam(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updatePilatParam(id:any, pilatParam:PilatParams) {
    return this.http.put(this.basePath + '/' + id, pilatParam);
  }
  deletePilatParam(id:any) {
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
  
  findOneByParOrder(parOrder:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParOrder/' + parOrder + '?' + attributes);
  }
  
  findOneByParCod(parCod:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParCod/' + parCod + '?' + attributes);
  }
  
  findOneByParDescription(parDescription:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParDescription/' + parDescription + '?' + attributes);
  }
  
  findOneByParAbbr(parAbbr:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParAbbr/' + parAbbr + '?' + attributes);
  }
  
  findOneByParGroup(parGroup:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParGroup/' + parGroup + '?' + attributes);
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
  
  findOneByParDictionaryId(parDictionaryId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParDictionaryId/' + parDictionaryId + '?' + attributes);
  }
  
  findOneByParStatusId(parStatusId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParStatusId/' + parStatusId + '?' + attributes);
  }
  
  findOneByParParentId(parParentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParParentId/' + parParentId + '?' + attributes);
  }
  
  findOneByDuaat(duaat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDuaat/' + duaat + '?' + attributes);
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
  
  
  updatePilatParamByUid(Id:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByUid?Id=' + Id, pilatParam);
  }
  
  updatePilatParamById(id:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamById?id=' + id, pilatParam);
  }
  
  updatePilatParamByParOrder(parOrder:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByParOrder?parOrder=' + parOrder, pilatParam);
  }
  
  updatePilatParamByParCod(parCod:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByParCod?parCod=' + parCod, pilatParam);
  }
  
  updatePilatParamByParDescription(parDescription:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByParDescription?parDescription=' + parDescription, pilatParam);
  }
  
  updatePilatParamByParAbbr(parAbbr:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByParAbbr?parAbbr=' + parAbbr, pilatParam);
  }
  
  updatePilatParamByParGroup(parGroup:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByParGroup?parGroup=' + parGroup, pilatParam);
  }
  
  updatePilatParamByCreatedby(createdby:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByCreatedby?createdby=' + createdby, pilatParam);
  }
  
  updatePilatParamByUpdatedby(updatedby:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByUpdatedby?updatedby=' + updatedby, pilatParam);
  }
  
  updatePilatParamByParDictionaryId(parDictionaryId:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByParDictionaryId?parDictionaryId=' + parDictionaryId, pilatParam);
  }
  
  updatePilatParamByParStatusId(parStatusId:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByParStatusId?parStatusId=' + parStatusId, pilatParam);
  }
  
  updatePilatParamByParParentId(parParentId:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByParParentId?parParentId=' + parParentId, pilatParam);
  }
  
  updatePilatParamByDuaat(duaat:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByDuaat?duaat=' + duaat, pilatParam);
  }
  
  updatePilatParamByCreatedat(createdat:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByCreatedat?createdat=' + createdat, pilatParam);
  }
  
  updatePilatParamByUpdatedat(updatedat:any, pilatParam:PilatParams) {
      return this.http.post(this.basePath + '/updatePilatParamByUpdatedat?updatedat=' + updatedat, pilatParam);
  }
  
  
  findPilatDictionariesParDictionaryWithDicCode(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findPilatDictionariesParDictionaryWithDicCode' + '?' + attributes);
  }
  
  findPilatParamsParStatusWithParOrder(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findPilatParamsParStatusWithParOrder' + '?' + attributes);
  }
  
  findPilatParamsParParentWithParOrder(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findPilatParamsParParentWithParOrder' + '?' + attributes);
  }
  
  
  filterPilatParamsByParDictionary(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterPilatParamsByParDictionary/' + ids + '?' + attributes);
  }
  
  filterPilatParamsByParStatus(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterPilatParamsByParStatus/' + ids + '?' + attributes);
  }
  
  filterPilatParamsByParParent(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterPilatParamsByParParent/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
