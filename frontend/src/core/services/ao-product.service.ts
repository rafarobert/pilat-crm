/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:41 GMT-0400 (Bolivia Time)
 * Time: 2:41:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:41 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:41
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosProducts} from "../models/aosProducts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoProductService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-products`;
  dataChange: BehaviorSubject<AosProducts[]> = new BehaviorSubject<AosProducts[]>([]);
  aoProductData: AosProducts = new AosProducts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosProducts[] {
    return this.dataChange.value;
  }

  getDataAosProducts(): void {
    this.getAllAosProducts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosProducts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosProducts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoProduct(aoProduct:AosProducts) {
    return this.http.post(this.basePath, aoProduct);
  }
  getAoProduct(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoProduct(id:any, aoProduct:AosProducts) {
    return this.http.put(this.basePath + '/' + id, aoProduct);
  }
  deleteAoProduct(id:any) {
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
  
  findOneByCost(cost:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCost/' + cost + '?' + attributes);
  }
  
  findOneByCostUsdollar(costUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCostUsdollar/' + costUsdollar + '?' + attributes);
  }
  
  findOneByPrice(price:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPrice/' + price + '?' + attributes);
  }
  
  findOneByPriceUsdollar(priceUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPriceUsdollar/' + priceUsdollar + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByMaincode(maincode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaincode/' + maincode + '?' + attributes);
  }
  
  findOneByPartNumber(partNumber:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPartNumber/' + partNumber + '?' + attributes);
  }
  
  findOneByCategory(category:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCategory/' + category + '?' + attributes);
  }
  
  findOneByType(type:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByType/' + type + '?' + attributes);
  }
  
  findOneByUrl(url:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUrl/' + url + '?' + attributes);
  }
  
  findOneByProductImage(productImage:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductImage/' + productImage + '?' + attributes);
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
  
  findOneByCurrencyId(currencyId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCurrencyId/' + currencyId + '?' + attributes);
  }
  
  findOneByContactId(contactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactId/' + contactId + '?' + attributes);
  }
  
  findOneByAosProductCategoryId(aosProductCategoryId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAosProductCategoryId/' + aosProductCategoryId + '?' + attributes);
  }
  
  
  updateAoProductById(id:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductById?id=' + id, aoProduct);
  }
  
  updateAoProductByDeleted(deleted:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByDeleted?deleted=' + deleted, aoProduct);
  }
  
  updateAoProductByCost(cost:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByCost?cost=' + cost, aoProduct);
  }
  
  updateAoProductByCostUsdollar(costUsdollar:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByCostUsdollar?costUsdollar=' + costUsdollar, aoProduct);
  }
  
  updateAoProductByPrice(price:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByPrice?price=' + price, aoProduct);
  }
  
  updateAoProductByPriceUsdollar(priceUsdollar:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByPriceUsdollar?priceUsdollar=' + priceUsdollar, aoProduct);
  }
  
  updateAoProductByName(name:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByName?name=' + name, aoProduct);
  }
  
  updateAoProductByMaincode(maincode:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByMaincode?maincode=' + maincode, aoProduct);
  }
  
  updateAoProductByPartNumber(partNumber:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByPartNumber?partNumber=' + partNumber, aoProduct);
  }
  
  updateAoProductByCategory(category:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByCategory?category=' + category, aoProduct);
  }
  
  updateAoProductByType(type:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByType?type=' + type, aoProduct);
  }
  
  updateAoProductByUrl(url:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByUrl?url=' + url, aoProduct);
  }
  
  updateAoProductByProductImage(productImage:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByProductImage?productImage=' + productImage, aoProduct);
  }
  
  updateAoProductByDescription(description:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByDescription?description=' + description, aoProduct);
  }
  
  updateAoProductByDateEntered(dateEntered:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByDateEntered?dateEntered=' + dateEntered, aoProduct);
  }
  
  updateAoProductByDateModified(dateModified:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByDateModified?dateModified=' + dateModified, aoProduct);
  }
  
  updateAoProductByModifiedUserId(modifiedUserId:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByModifiedUserId?modifiedUserId=' + modifiedUserId, aoProduct);
  }
  
  updateAoProductByCreatedBy(createdBy:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByCreatedBy?createdBy=' + createdBy, aoProduct);
  }
  
  updateAoProductByAssignedUserId(assignedUserId:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByAssignedUserId?assignedUserId=' + assignedUserId, aoProduct);
  }
  
  updateAoProductByCurrencyId(currencyId:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByCurrencyId?currencyId=' + currencyId, aoProduct);
  }
  
  updateAoProductByContactId(contactId:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByContactId?contactId=' + contactId, aoProduct);
  }
  
  updateAoProductByAosProductCategoryId(aosProductCategoryId:any, aoProduct:AosProducts) {
      return this.http.post(this.basePath + '/updateAoProductByAosProductCategoryId?aosProductCategoryId=' + aosProductCategoryId, aoProduct);
  }
  
  
  
  //</es-section>
}
