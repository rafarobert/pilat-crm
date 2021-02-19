/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:42 GMT-0400 (Bolivia Time)
 * Time: 2:42:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:42 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:42
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Folders} from "../models/folders";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/folders`;
  dataChange: BehaviorSubject<Folders[]> = new BehaviorSubject<Folders[]>([]);
  folderData: Folders = new Folders();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Folders[] {
    return this.dataChange.value;
  }

  getDataFolders(): void {
    this.getAllFolders().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Folders[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFolders(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFolder(folder:Folders) {
    return this.http.post(this.basePath, folder);
  }
  getFolder(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFolder(id:any, folder:Folders) {
    return this.http.put(this.basePath + '/' + id, folder);
  }
  deleteFolder(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByHasChild(hasChild:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByHasChild/' + hasChild + '?' + attributes);
  }
  
  findOneByIsGroup(isGroup:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIsGroup/' + isGroup + '?' + attributes);
  }
  
  findOneByIsDynamic(isDynamic:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIsDynamic/' + isDynamic + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByFolderType(folderType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFolderType/' + folderType + '?' + attributes);
  }
  
  findOneByDynamicQuery(dynamicQuery:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDynamicQuery/' + dynamicQuery + '?' + attributes);
  }
  
  findOneByParentFolder(parentFolder:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentFolder/' + parentFolder + '?' + attributes);
  }
  
  findOneByAssignToId(assignToId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignToId/' + assignToId + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  findOneByModifiedBy(modifiedBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedBy/' + modifiedBy + '?' + attributes);
  }
  
  
  updateFolderById(id:any, folder:Folders) {
      return this.http.post(this.basePath + '/updateFolderById?id=' + id, folder);
  }
  
  updateFolderByHasChild(hasChild:any, folder:Folders) {
      return this.http.post(this.basePath + '/updateFolderByHasChild?hasChild=' + hasChild, folder);
  }
  
  updateFolderByIsGroup(isGroup:any, folder:Folders) {
      return this.http.post(this.basePath + '/updateFolderByIsGroup?isGroup=' + isGroup, folder);
  }
  
  updateFolderByIsDynamic(isDynamic:any, folder:Folders) {
      return this.http.post(this.basePath + '/updateFolderByIsDynamic?isDynamic=' + isDynamic, folder);
  }
  
  updateFolderByDeleted(deleted:any, folder:Folders) {
      return this.http.post(this.basePath + '/updateFolderByDeleted?deleted=' + deleted, folder);
  }
  
  updateFolderByName(name:any, folder:Folders) {
      return this.http.post(this.basePath + '/updateFolderByName?name=' + name, folder);
  }
  
  updateFolderByFolderType(folderType:any, folder:Folders) {
      return this.http.post(this.basePath + '/updateFolderByFolderType?folderType=' + folderType, folder);
  }
  
  updateFolderByDynamicQuery(dynamicQuery:any, folder:Folders) {
      return this.http.post(this.basePath + '/updateFolderByDynamicQuery?dynamicQuery=' + dynamicQuery, folder);
  }
  
  updateFolderByParentFolder(parentFolder:any, folder:Folders) {
      return this.http.post(this.basePath + '/updateFolderByParentFolder?parentFolder=' + parentFolder, folder);
  }
  
  updateFolderByAssignToId(assignToId:any, folder:Folders) {
      return this.http.post(this.basePath + '/updateFolderByAssignToId?assignToId=' + assignToId, folder);
  }
  
  updateFolderByCreatedBy(createdBy:any, folder:Folders) {
      return this.http.post(this.basePath + '/updateFolderByCreatedBy?createdBy=' + createdBy, folder);
  }
  
  updateFolderByModifiedBy(modifiedBy:any, folder:Folders) {
      return this.http.post(this.basePath + '/updateFolderByModifiedBy?modifiedBy=' + modifiedBy, folder);
  }
  
  
  
  //</es-section>
}
