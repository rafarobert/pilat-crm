/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 03 2021 23:45:31 GMT-0400 (Bolivia Time)
 * Time: 23:45:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 03 2021 23:45:31 GMT-0400 (Bolivia Time)
 * Last time updated: 23:45:31
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {PilatViews} from "../models/pilatViews";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class PilatViewService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/pilat-views`;
  dataChange: BehaviorSubject<PilatViews[]> = new BehaviorSubject<PilatViews[]>([]);
  pilatViewData: PilatViews = new PilatViews();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): PilatViews[] {
    return this.dataChange.value;
  }

  getDataPilatViews(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllPilatViews(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:PilatViews[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllPilatViews(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createPilatView(pilatView:PilatViews) {
    return this.http.post(this.basePath, pilatView);
  }
  getPilatView(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updatePilatView(id:any, pilatView:PilatViews) {
    return this.http.put(this.basePath + '/' + id, pilatView);
  }
  deletePilatView(id:any) {
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
  
  findOneByVieCode(vieCode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVieCode/' + vieCode + '?' + attributes);
  }
  
  findOneByVieDescription(vieDescription:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVieDescription/' + vieDescription + '?' + attributes);
  }
  
  findOneByVieRoute(vieRoute:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVieRoute/' + vieRoute + '?' + attributes);
  }
  
  findOneByVieParams(vieParams:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVieParams/' + vieParams + '?' + attributes);
  }
  
  findOneByVieIcon(vieIcon:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVieIcon/' + vieIcon + '?' + attributes);
  }
  
  findOneByVieGroup(vieGroup:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVieGroup/' + vieGroup + '?' + attributes);
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
  
  findOneByVieModuleId(vieModuleId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVieModuleId/' + vieModuleId + '?' + attributes);
  }
  
  findOneByVieReturnId(vieReturnId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVieReturnId/' + vieReturnId + '?' + attributes);
  }
  
  findOneByVieParStatusId(vieParStatusId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVieParStatusId/' + vieParStatusId + '?' + attributes);
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
  
  
  updatePilatViewByUid(Id:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByUid?Id=' + Id, pilatView);
  }
  
  updatePilatViewById(id:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewById?id=' + id, pilatView);
  }
  
  updatePilatViewByVieCode(vieCode:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByVieCode?vieCode=' + vieCode, pilatView);
  }
  
  updatePilatViewByVieDescription(vieDescription:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByVieDescription?vieDescription=' + vieDescription, pilatView);
  }
  
  updatePilatViewByVieRoute(vieRoute:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByVieRoute?vieRoute=' + vieRoute, pilatView);
  }
  
  updatePilatViewByVieParams(vieParams:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByVieParams?vieParams=' + vieParams, pilatView);
  }
  
  updatePilatViewByVieIcon(vieIcon:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByVieIcon?vieIcon=' + vieIcon, pilatView);
  }
  
  updatePilatViewByVieGroup(vieGroup:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByVieGroup?vieGroup=' + vieGroup, pilatView);
  }
  
  updatePilatViewByCreatedby(createdby:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByCreatedby?createdby=' + createdby, pilatView);
  }
  
  updatePilatViewByUpdatedby(updatedby:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByUpdatedby?updatedby=' + updatedby, pilatView);
  }
  
  updatePilatViewByVieModuleId(vieModuleId:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByVieModuleId?vieModuleId=' + vieModuleId, pilatView);
  }
  
  updatePilatViewByVieReturnId(vieReturnId:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByVieReturnId?vieReturnId=' + vieReturnId, pilatView);
  }
  
  updatePilatViewByVieParStatusId(vieParStatusId:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByVieParStatusId?vieParStatusId=' + vieParStatusId, pilatView);
  }
  
  updatePilatViewByDueat(dueat:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByDueat?dueat=' + dueat, pilatView);
  }
  
  updatePilatViewByCreatedat(createdat:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByCreatedat?createdat=' + createdat, pilatView);
  }
  
  updatePilatViewByUpdatedat(updatedat:any, pilatView:PilatViews) {
      return this.http.post(this.basePath + '/updatePilatViewByUpdatedat?updatedat=' + updatedat, pilatView);
  }
  
  
  findPilatModulesVieModuleWithModCode(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findPilatModulesVieModuleWithModCode' + '?' + attributes);
  }
  
  findPilatViewsVieReturnWithVieCode(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findPilatViewsVieReturnWithVieCode' + '?' + attributes);
  }
  
  findPilatParamsVieParStatusWithParOrder(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findPilatParamsVieParStatusWithParOrder' + '?' + attributes);
  }
  
  
  filterPilatViewsByVieModule(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterPilatViewsByVieModule/' + ids + '?' + attributes);
  }
  
  filterPilatViewsByVieReturn(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterPilatViewsByVieReturn/' + ids + '?' + attributes);
  }
  
  filterPilatViewsByVieParStatus(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterPilatViewsByVieParStatus/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
