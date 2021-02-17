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
import {FoldersRel} from "../models/foldersRel";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FolderRelService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/folders-rel`;
  dataChange: BehaviorSubject<FoldersRel[]> = new BehaviorSubject<FoldersRel[]>([]);
  folderRelData: FoldersRel = new FoldersRel();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): FoldersRel[] {
    return this.dataChange.value;
  }

  getDataFoldersRel(): void {
    this.getAllFoldersRel().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:FoldersRel[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFoldersRel(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFolderRel(folderRel:FoldersRel) {
    return this.http.post(this.basePath, folderRel);
  }
  getFolderRel(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFolderRel(id:any, folderRel:FoldersRel) {
    return this.http.put(this.basePath + '/' + id, folderRel);
  }
  deleteFolderRel(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByPolymorphicModule(polymorphicModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPolymorphicModule/' + polymorphicModule + '?' + attributes);
  }
  
  findOneByFolderId(folderId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFolderId/' + folderId + '?' + attributes);
  }
  
  findOneByPolymorphicId(polymorphicId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPolymorphicId/' + polymorphicId + '?' + attributes);
  }
  
  
  updateFolderRelById(id:any, folderRel:FoldersRel) {
      return this.http.post(this.basePath + '/updateFolderRelById?id=' + id, folderRel);
  }
  
  updateFolderRelByDeleted(deleted:any, folderRel:FoldersRel) {
      return this.http.post(this.basePath + '/updateFolderRelByDeleted?deleted=' + deleted, folderRel);
  }
  
  updateFolderRelByPolymorphicModule(polymorphicModule:any, folderRel:FoldersRel) {
      return this.http.post(this.basePath + '/updateFolderRelByPolymorphicModule?polymorphicModule=' + polymorphicModule, folderRel);
  }
  
  updateFolderRelByFolderId(folderId:any, folderRel:FoldersRel) {
      return this.http.post(this.basePath + '/updateFolderRelByFolderId?folderId=' + folderId, folderRel);
  }
  
  updateFolderRelByPolymorphicId(polymorphicId:any, folderRel:FoldersRel) {
      return this.http.post(this.basePath + '/updateFolderRelByPolymorphicId?polymorphicId=' + polymorphicId, folderRel);
  }
  
  
  
  //</es-section>
}
