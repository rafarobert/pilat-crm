/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:42 GMT-0400 (Bolivia Time)
 * Time: 2:43:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:42 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:42
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ProjectsProducts} from "../models/projectsProducts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProjectProductService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/projects-products`;
  dataChange: BehaviorSubject<ProjectsProducts[]> = new BehaviorSubject<ProjectsProducts[]>([]);
  projectProductData: ProjectsProducts = new ProjectsProducts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProjectsProducts[] {
    return this.dataChange.value;
  }

  getDataProjectsProducts(): void {
    this.getAllProjectsProducts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProjectsProducts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProjectsProducts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProjectProduct(projectProduct:ProjectsProducts) {
    return this.http.post(this.basePath, projectProduct);
  }
  getProjectProduct(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProjectProduct(id:any, projectProduct:ProjectsProducts) {
    return this.http.put(this.basePath + '/' + id, projectProduct);
  }
  deleteProjectProduct(id:any) {
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
  
  findOneByProductId(productId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductId/' + productId + '?' + attributes);
  }
  
  findOneByProjectId(projectId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProjectId/' + projectId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateProjectProductById(id:any, projectProduct:ProjectsProducts) {
      return this.http.post(this.basePath + '/updateProjectProductById?id=' + id, projectProduct);
  }
  
  updateProjectProductByDeleted(deleted:any, projectProduct:ProjectsProducts) {
      return this.http.post(this.basePath + '/updateProjectProductByDeleted?deleted=' + deleted, projectProduct);
  }
  
  updateProjectProductByProductId(productId:any, projectProduct:ProjectsProducts) {
      return this.http.post(this.basePath + '/updateProjectProductByProductId?productId=' + productId, projectProduct);
  }
  
  updateProjectProductByProjectId(projectId:any, projectProduct:ProjectsProducts) {
      return this.http.post(this.basePath + '/updateProjectProductByProjectId?projectId=' + projectId, projectProduct);
  }
  
  updateProjectProductByDateModified(dateModified:any, projectProduct:ProjectsProducts) {
      return this.http.post(this.basePath + '/updateProjectProductByDateModified?dateModified=' + dateModified, projectProduct);
  }
  
  
  
  //</es-section>
}
