/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:18 GMT-0400 (Bolivia Time)
 * Time: 2:41:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:18 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:18
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AokKnowledgeBaseCategories} from "../models/aokKnowledgeBaseCategories";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AokKnowledgeBaseCategorieService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aok-knowledge-base-categories`;
  dataChange: BehaviorSubject<AokKnowledgeBaseCategories[]> = new BehaviorSubject<AokKnowledgeBaseCategories[]>([]);
  aokKnowledgeBaseCategorieData: AokKnowledgeBaseCategories = new AokKnowledgeBaseCategories();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AokKnowledgeBaseCategories[] {
    return this.dataChange.value;
  }

  getDataAokKnowledgeBaseCategories(): void {
    this.getAllAokKnowledgeBaseCategories().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AokKnowledgeBaseCategories[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAokKnowledgeBaseCategories(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAokKnowledgeBaseCategorie(aokKnowledgeBaseCategorie:AokKnowledgeBaseCategories) {
    return this.http.post(this.basePath, aokKnowledgeBaseCategorie);
  }
  getAokKnowledgeBaseCategorie(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAokKnowledgeBaseCategorie(id:any, aokKnowledgeBaseCategorie:AokKnowledgeBaseCategories) {
    return this.http.put(this.basePath + '/' + id, aokKnowledgeBaseCategorie);
  }
  deleteAokKnowledgeBaseCategorie(id:any) {
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
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByModifiedUserId(modifiedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedUserId/' + modifiedUserId + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
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
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  
  updateAokKnowledgeBaseCategorieById(id:any, aokKnowledgeBaseCategorie:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieById?id=' + id, aokKnowledgeBaseCategorie);
  }
  
  updateAokKnowledgeBaseCategorieByDeleted(deleted:any, aokKnowledgeBaseCategorie:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieByDeleted?deleted=' + deleted, aokKnowledgeBaseCategorie);
  }
  
  updateAokKnowledgeBaseCategorieByName(name:any, aokKnowledgeBaseCategorie:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieByName?name=' + name, aokKnowledgeBaseCategorie);
  }
  
  updateAokKnowledgeBaseCategorieByDescription(description:any, aokKnowledgeBaseCategorie:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieByDescription?description=' + description, aokKnowledgeBaseCategorie);
  }
  
  updateAokKnowledgeBaseCategorieByModifiedUserId(modifiedUserId:any, aokKnowledgeBaseCategorie:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieByModifiedUserId?modifiedUserId=' + modifiedUserId, aokKnowledgeBaseCategorie);
  }
  
  updateAokKnowledgeBaseCategorieByAssignedUserId(assignedUserId:any, aokKnowledgeBaseCategorie:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieByAssignedUserId?assignedUserId=' + assignedUserId, aokKnowledgeBaseCategorie);
  }
  
  updateAokKnowledgeBaseCategorieByDateEntered(dateEntered:any, aokKnowledgeBaseCategorie:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieByDateEntered?dateEntered=' + dateEntered, aokKnowledgeBaseCategorie);
  }
  
  updateAokKnowledgeBaseCategorieByDateModified(dateModified:any, aokKnowledgeBaseCategorie:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieByDateModified?dateModified=' + dateModified, aokKnowledgeBaseCategorie);
  }
  
  updateAokKnowledgeBaseCategorieByCreatedBy(createdBy:any, aokKnowledgeBaseCategorie:AokKnowledgeBaseCategories) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieByCreatedBy?createdBy=' + createdBy, aokKnowledgeBaseCategorie);
  }
  
  
  findUsersModifiedUserWithSystemGeneratedPassword(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findUsersModifiedUserWithSystemGeneratedPassword' + '?' + attributes);
  }
  
  findUsersAssignedUserWithSystemGeneratedPassword(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findUsersAssignedUserWithSystemGeneratedPassword' + '?' + attributes);
  }
  
  
  filterAokKnowledgeBaseCategoriesByModifiedUser(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterAokKnowledgeBaseCategoriesByModifiedUser/' + ids + '?' + attributes);
  }
  
  filterAokKnowledgeBaseCategoriesByAssignedUser(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterAokKnowledgeBaseCategoriesByAssignedUser/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
