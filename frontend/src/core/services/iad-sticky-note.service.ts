/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:51 GMT-0400 (Bolivia Time)
 * Time: 2:42:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:51
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {IadStickyNotes} from "../models/iadStickyNotes";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class IadStickyNoteService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/iad-sticky-notes`;
  dataChange: BehaviorSubject<IadStickyNotes[]> = new BehaviorSubject<IadStickyNotes[]>([]);
  iadStickyNoteData: IadStickyNotes = new IadStickyNotes();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): IadStickyNotes[] {
    return this.dataChange.value;
  }

  getDataIadStickyNotes(): void {
    this.getAllIadStickyNotes().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:IadStickyNotes[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllIadStickyNotes(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createIadStickyNote(iadStickyNote:IadStickyNotes) {
    return this.http.post(this.basePath, iadStickyNote);
  }
  getIadStickyNote(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateIadStickyNote(id:any, iadStickyNote:IadStickyNotes) {
    return this.http.put(this.basePath + '/' + id, iadStickyNote);
  }
  deleteIadStickyNote(id:any) {
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
  
  findOneByDocumentName(documentName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDocumentName/' + documentName + '?' + attributes);
  }
  
  findOneByFilename(filename:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFilename/' + filename + '?' + attributes);
  }
  
  findOneByFileExt(fileExt:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFileExt/' + fileExt + '?' + attributes);
  }
  
  findOneByFileMimeType(fileMimeType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFileMimeType/' + fileMimeType + '?' + attributes);
  }
  
  findOneByCategoryId(categoryId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCategoryId/' + categoryId + '?' + attributes);
  }
  
  findOneBySubcategoryId(subcategoryId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySubcategoryId/' + subcategoryId + '?' + attributes);
  }
  
  findOneByStatusId(statusId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatusId/' + statusId + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByDateEntered(dateEntered:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateEntered/' + dateEntered + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  findOneByActiveDate(activeDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActiveDate/' + activeDate + '?' + attributes);
  }
  
  findOneByExpDate(expDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExpDate/' + expDate + '?' + attributes);
  }
  
  findOneByModifiedUserId(modifiedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedUserId/' + modifiedUserId + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  
  updateIadStickyNoteById(id:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteById?id=' + id, iadStickyNote);
  }
  
  updateIadStickyNoteByDeleted(deleted:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByDeleted?deleted=' + deleted, iadStickyNote);
  }
  
  updateIadStickyNoteByDocumentName(documentName:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByDocumentName?documentName=' + documentName, iadStickyNote);
  }
  
  updateIadStickyNoteByFilename(filename:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByFilename?filename=' + filename, iadStickyNote);
  }
  
  updateIadStickyNoteByFileExt(fileExt:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByFileExt?fileExt=' + fileExt, iadStickyNote);
  }
  
  updateIadStickyNoteByFileMimeType(fileMimeType:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByFileMimeType?fileMimeType=' + fileMimeType, iadStickyNote);
  }
  
  updateIadStickyNoteByCategoryId(categoryId:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByCategoryId?categoryId=' + categoryId, iadStickyNote);
  }
  
  updateIadStickyNoteBySubcategoryId(subcategoryId:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteBySubcategoryId?subcategoryId=' + subcategoryId, iadStickyNote);
  }
  
  updateIadStickyNoteByStatusId(statusId:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByStatusId?statusId=' + statusId, iadStickyNote);
  }
  
  updateIadStickyNoteByDescription(description:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByDescription?description=' + description, iadStickyNote);
  }
  
  updateIadStickyNoteByDateEntered(dateEntered:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByDateEntered?dateEntered=' + dateEntered, iadStickyNote);
  }
  
  updateIadStickyNoteByDateModified(dateModified:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByDateModified?dateModified=' + dateModified, iadStickyNote);
  }
  
  updateIadStickyNoteByActiveDate(activeDate:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByActiveDate?activeDate=' + activeDate, iadStickyNote);
  }
  
  updateIadStickyNoteByExpDate(expDate:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByExpDate?expDate=' + expDate, iadStickyNote);
  }
  
  updateIadStickyNoteByModifiedUserId(modifiedUserId:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByModifiedUserId?modifiedUserId=' + modifiedUserId, iadStickyNote);
  }
  
  updateIadStickyNoteByCreatedBy(createdBy:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByCreatedBy?createdBy=' + createdBy, iadStickyNote);
  }
  
  updateIadStickyNoteByAssignedUserId(assignedUserId:any, iadStickyNote:IadStickyNotes) {
      return this.http.post(this.basePath + '/updateIadStickyNoteByAssignedUserId?assignedUserId=' + assignedUserId, iadStickyNote);
  }
  
  
  
  //</es-section>
}
