/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:00 GMT-0400 (Bolivia Time)
 * Time: 2:44:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:00 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {RolesModules} from "../models/rolesModules";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class RoleModuleService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/roles-modules`;
  dataChange: BehaviorSubject<RolesModules[]> = new BehaviorSubject<RolesModules[]>([]);
  roleModuleData: RolesModules = new RolesModules();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): RolesModules[] {
    return this.dataChange.value;
  }

  getDataRolesModules(): void {
    this.getAllRolesModules().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:RolesModules[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllRolesModules(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createRoleModule(roleModule:RolesModules) {
    return this.http.post(this.basePath, roleModule);
  }
  getRoleModule(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateRoleModule(id:any, roleModule:RolesModules) {
    return this.http.put(this.basePath + '/' + id, roleModule);
  }
  deleteRoleModule(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByAllow(allow:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAllow/' + allow + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByRoleId(roleId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRoleId/' + roleId + '?' + attributes);
  }
  
  findOneByModuleId(moduleId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModuleId/' + moduleId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateRoleModuleById(id:any, roleModule:RolesModules) {
      return this.http.post(this.basePath + '/updateRoleModuleById?id=' + id, roleModule);
  }
  
  updateRoleModuleByAllow(allow:any, roleModule:RolesModules) {
      return this.http.post(this.basePath + '/updateRoleModuleByAllow?allow=' + allow, roleModule);
  }
  
  updateRoleModuleByDeleted(deleted:any, roleModule:RolesModules) {
      return this.http.post(this.basePath + '/updateRoleModuleByDeleted?deleted=' + deleted, roleModule);
  }
  
  updateRoleModuleByRoleId(roleId:any, roleModule:RolesModules) {
      return this.http.post(this.basePath + '/updateRoleModuleByRoleId?roleId=' + roleId, roleModule);
  }
  
  updateRoleModuleByModuleId(moduleId:any, roleModule:RolesModules) {
      return this.http.post(this.basePath + '/updateRoleModuleByModuleId?moduleId=' + moduleId, roleModule);
  }
  
  updateRoleModuleByDateModified(dateModified:any, roleModule:RolesModules) {
      return this.http.post(this.basePath + '/updateRoleModuleByDateModified?dateModified=' + dateModified, roleModule);
  }
  
  
  
  //</es-section>
}
