/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:16 GMT-0400 (Bolivia Time)
 * Time: 2:43:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:16 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:16
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Notes} from "../models/notes";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/notes`;
  dataChange: BehaviorSubject<Notes[]> = new BehaviorSubject<Notes[]>([]);
  noteData: Notes = new Notes();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Notes[] {
    return this.dataChange.value;
  }

  getDataNotes(): void {
    this.getAllNotes().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Notes[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllNotes(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createNote(note:Notes) {
    return this.http.post(this.basePath, note);
  }
  getNote(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateNote(id:any, note:Notes) {
    return this.http.put(this.basePath + '/' + id, note);
  }
  deleteNote(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByPortalFlag(portalFlag:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPortalFlag/' + portalFlag + '?' + attributes);
  }
  
  findOneByEmbedFlag(embedFlag:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmbedFlag/' + embedFlag + '?' + attributes);
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
  
  findOneByFileMimeType(fileMimeType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFileMimeType/' + fileMimeType + '?' + attributes);
  }
  
  findOneByFilename(filename:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFilename/' + filename + '?' + attributes);
  }
  
  findOneByParentType(parentType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentType/' + parentType + '?' + attributes);
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
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
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
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  findOneByContactId(contactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactId/' + contactId + '?' + attributes);
  }
  
  
  updateNoteById(id:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteById?id=' + id, note);
  }
  
  updateNoteByPortalFlag(portalFlag:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByPortalFlag?portalFlag=' + portalFlag, note);
  }
  
  updateNoteByEmbedFlag(embedFlag:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByEmbedFlag?embedFlag=' + embedFlag, note);
  }
  
  updateNoteByDeleted(deleted:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByDeleted?deleted=' + deleted, note);
  }
  
  updateNoteByName(name:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByName?name=' + name, note);
  }
  
  updateNoteByFileMimeType(fileMimeType:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByFileMimeType?fileMimeType=' + fileMimeType, note);
  }
  
  updateNoteByFilename(filename:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByFilename?filename=' + filename, note);
  }
  
  updateNoteByParentType(parentType:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByParentType?parentType=' + parentType, note);
  }
  
  updateNoteByDescription(description:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByDescription?description=' + description, note);
  }
  
  updateNoteByDateEntered(dateEntered:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByDateEntered?dateEntered=' + dateEntered, note);
  }
  
  updateNoteByDateModified(dateModified:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByDateModified?dateModified=' + dateModified, note);
  }
  
  updateNoteByAssignedUserId(assignedUserId:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByAssignedUserId?assignedUserId=' + assignedUserId, note);
  }
  
  updateNoteByModifiedUserId(modifiedUserId:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByModifiedUserId?modifiedUserId=' + modifiedUserId, note);
  }
  
  updateNoteByCreatedBy(createdBy:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByCreatedBy?createdBy=' + createdBy, note);
  }
  
  updateNoteByParentId(parentId:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByParentId?parentId=' + parentId, note);
  }
  
  updateNoteByContactId(contactId:any, note:Notes) {
      return this.http.post(this.basePath + '/updateNoteByContactId?contactId=' + contactId, note);
  }
  
  
  
  //</es-section>
}
