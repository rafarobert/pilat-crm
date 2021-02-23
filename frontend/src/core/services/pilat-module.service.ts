/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 03 2021 23:45:30 GMT-0400 (Bolivia Time)
 * Time: 23:45:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 03 2021 23:45:30 GMT-0400 (Bolivia Time)
 * Last time updated: 23:45:30
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {PilatModules} from "../models/pilatModules";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class PilatModuleService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/pilat-modules`;
  dataChange: BehaviorSubject<PilatModules[]> = new BehaviorSubject<PilatModules[]>([]);
  pilatModuleData: PilatModules = new PilatModules();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): PilatModules[] {
    return this.dataChange.value;
  }

  getDataPilatModules(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllPilatModules(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:PilatModules[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllPilatModules(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createPilatModule(pilatModule:PilatModules) {
    return this.http.post(this.basePath, pilatModule);
  }
  getPilatModule(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updatePilatModule(id:any, pilatModule:PilatModules) {
    return this.http.put(this.basePath + '/' + id, pilatModule);
  }
  deletePilatModule(id:any) {
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
  
  findOneByModCode(modCode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModCode/' + modCode + '?' + attributes);
  }
  
  findOneByModDescription(modDescription:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModDescription/' + modDescription + '?' + attributes);
  }
  
  findOneByModAbbr(modAbbr:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModAbbr/' + modAbbr + '?' + attributes);
  }
  
  findOneByModIcon(modIcon:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModIcon/' + modIcon + '?' + attributes);
  }
  
  findOneByModGroup(modGroup:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModGroup/' + modGroup + '?' + attributes);
  }
  
  findOneByModParStatusId(modParStatusId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModParStatusId/' + modParStatusId + '?' + attributes);
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
  
  findOneByModParentId(modParentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModParentId/' + modParentId + '?' + attributes);
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
  
  
  updatePilatModuleByUid(Id:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleByUid?Id=' + Id, pilatModule);
  }
  
  updatePilatModuleById(id:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleById?id=' + id, pilatModule);
  }
  
  updatePilatModuleByModCode(modCode:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleByModCode?modCode=' + modCode, pilatModule);
  }
  
  updatePilatModuleByModDescription(modDescription:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleByModDescription?modDescription=' + modDescription, pilatModule);
  }
  
  updatePilatModuleByModAbbr(modAbbr:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleByModAbbr?modAbbr=' + modAbbr, pilatModule);
  }
  
  updatePilatModuleByModIcon(modIcon:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleByModIcon?modIcon=' + modIcon, pilatModule);
  }
  
  updatePilatModuleByModGroup(modGroup:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleByModGroup?modGroup=' + modGroup, pilatModule);
  }
  
  updatePilatModuleByModParStatusId(modParStatusId:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleByModParStatusId?modParStatusId=' + modParStatusId, pilatModule);
  }
  
  updatePilatModuleByCreatedby(createdby:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleByCreatedby?createdby=' + createdby, pilatModule);
  }
  
  updatePilatModuleByUpdatedby(updatedby:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleByUpdatedby?updatedby=' + updatedby, pilatModule);
  }
  
  updatePilatModuleByModParentId(modParentId:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleByModParentId?modParentId=' + modParentId, pilatModule);
  }
  
  updatePilatModuleByDueat(dueat:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleByDueat?dueat=' + dueat, pilatModule);
  }
  
  updatePilatModuleByCreatedat(createdat:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleByCreatedat?createdat=' + createdat, pilatModule);
  }
  
  updatePilatModuleByUpdatedat(updatedat:any, pilatModule:PilatModules) {
      return this.http.post(this.basePath + '/updatePilatModuleByUpdatedat?updatedat=' + updatedat, pilatModule);
  }
  
  
  findPilatParamsModParStatusWithParOrder(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findPilatParamsModParStatusWithParOrder' + '?' + attributes);
  }
  
  findPilatModulesModParentWithModCode(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findPilatModulesModParentWithModCode' + '?' + attributes);
  }
  
  
  filterPilatModulesByModParStatus(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterPilatModulesByModParStatus/' + ids + '?' + attributes);
  }
  
  filterPilatModulesByModParent(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterPilatModulesByModParent/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
