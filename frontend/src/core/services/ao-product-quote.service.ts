/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:44 GMT-0400 (Bolivia Time)
 * Time: 2:41:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:44 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:44
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosProductsQuotes} from "../models/aosProductsQuotes";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoProductQuoteService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-products-quotes`;
  dataChange: BehaviorSubject<AosProductsQuotes[]> = new BehaviorSubject<AosProductsQuotes[]>([]);
  aoProductQuoteData: AosProductsQuotes = new AosProductsQuotes();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosProductsQuotes[] {
    return this.dataChange.value;
  }

  getDataAosProductsQuotes(): void {
    this.getAllAosProductsQuotes().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosProductsQuotes[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosProductsQuotes(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoProductQuote(aoProductQuote:AosProductsQuotes) {
    return this.http.post(this.basePath, aoProductQuote);
  }
  getAoProductQuote(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoProductQuote(id:any, aoProductQuote:AosProductsQuotes) {
    return this.http.put(this.basePath + '/' + id, aoProductQuote);
  }
  deleteAoProductQuote(id:any) {
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
  
  findOneByNumber(number:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNumber/' + number + '?' + attributes);
  }
  
  findOneByProductQty(productQty:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductQty/' + productQty + '?' + attributes);
  }
  
  findOneByProductCostPrice(productCostPrice:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductCostPrice/' + productCostPrice + '?' + attributes);
  }
  
  findOneByProductCostPriceUsdollar(productCostPriceUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductCostPriceUsdollar/' + productCostPriceUsdollar + '?' + attributes);
  }
  
  findOneByProductListPrice(productListPrice:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductListPrice/' + productListPrice + '?' + attributes);
  }
  
  findOneByProductListPriceUsdollar(productListPriceUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductListPriceUsdollar/' + productListPriceUsdollar + '?' + attributes);
  }
  
  findOneByProductDiscount(productDiscount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductDiscount/' + productDiscount + '?' + attributes);
  }
  
  findOneByProductDiscountUsdollar(productDiscountUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductDiscountUsdollar/' + productDiscountUsdollar + '?' + attributes);
  }
  
  findOneByProductDiscountAmount(productDiscountAmount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductDiscountAmount/' + productDiscountAmount + '?' + attributes);
  }
  
  findOneByProductDiscountAmountUsdollar(productDiscountAmountUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductDiscountAmountUsdollar/' + productDiscountAmountUsdollar + '?' + attributes);
  }
  
  findOneByProductUnitPrice(productUnitPrice:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductUnitPrice/' + productUnitPrice + '?' + attributes);
  }
  
  findOneByProductUnitPriceUsdollar(productUnitPriceUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductUnitPriceUsdollar/' + productUnitPriceUsdollar + '?' + attributes);
  }
  
  findOneByVatAmt(vatAmt:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVatAmt/' + vatAmt + '?' + attributes);
  }
  
  findOneByVatAmtUsdollar(vatAmtUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVatAmtUsdollar/' + vatAmtUsdollar + '?' + attributes);
  }
  
  findOneByProductTotalPrice(productTotalPrice:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductTotalPrice/' + productTotalPrice + '?' + attributes);
  }
  
  findOneByProductTotalPriceUsdollar(productTotalPriceUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductTotalPriceUsdollar/' + productTotalPriceUsdollar + '?' + attributes);
  }
  
  findOneByPartNumber(partNumber:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPartNumber/' + partNumber + '?' + attributes);
  }
  
  findOneByDiscount(discount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDiscount/' + discount + '?' + attributes);
  }
  
  findOneByVat(vat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByVat/' + vat + '?' + attributes);
  }
  
  findOneByParentType(parentType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentType/' + parentType + '?' + attributes);
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
  
  findOneByItemDescription(itemDescription:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByItemDescription/' + itemDescription + '?' + attributes);
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
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  findOneByProductId(productId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProductId/' + productId + '?' + attributes);
  }
  
  findOneByGroupId(groupId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGroupId/' + groupId + '?' + attributes);
  }
  
  
  updateAoProductQuoteById(id:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteById?id=' + id, aoProductQuote);
  }
  
  updateAoProductQuoteByDeleted(deleted:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByDeleted?deleted=' + deleted, aoProductQuote);
  }
  
  updateAoProductQuoteByNumber(number:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByNumber?number=' + number, aoProductQuote);
  }
  
  updateAoProductQuoteByProductQty(productQty:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductQty?productQty=' + productQty, aoProductQuote);
  }
  
  updateAoProductQuoteByProductCostPrice(productCostPrice:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductCostPrice?productCostPrice=' + productCostPrice, aoProductQuote);
  }
  
  updateAoProductQuoteByProductCostPriceUsdollar(productCostPriceUsdollar:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductCostPriceUsdollar?productCostPriceUsdollar=' + productCostPriceUsdollar, aoProductQuote);
  }
  
  updateAoProductQuoteByProductListPrice(productListPrice:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductListPrice?productListPrice=' + productListPrice, aoProductQuote);
  }
  
  updateAoProductQuoteByProductListPriceUsdollar(productListPriceUsdollar:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductListPriceUsdollar?productListPriceUsdollar=' + productListPriceUsdollar, aoProductQuote);
  }
  
  updateAoProductQuoteByProductDiscount(productDiscount:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductDiscount?productDiscount=' + productDiscount, aoProductQuote);
  }
  
  updateAoProductQuoteByProductDiscountUsdollar(productDiscountUsdollar:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductDiscountUsdollar?productDiscountUsdollar=' + productDiscountUsdollar, aoProductQuote);
  }
  
  updateAoProductQuoteByProductDiscountAmount(productDiscountAmount:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductDiscountAmount?productDiscountAmount=' + productDiscountAmount, aoProductQuote);
  }
  
  updateAoProductQuoteByProductDiscountAmountUsdollar(productDiscountAmountUsdollar:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductDiscountAmountUsdollar?productDiscountAmountUsdollar=' + productDiscountAmountUsdollar, aoProductQuote);
  }
  
  updateAoProductQuoteByProductUnitPrice(productUnitPrice:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductUnitPrice?productUnitPrice=' + productUnitPrice, aoProductQuote);
  }
  
  updateAoProductQuoteByProductUnitPriceUsdollar(productUnitPriceUsdollar:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductUnitPriceUsdollar?productUnitPriceUsdollar=' + productUnitPriceUsdollar, aoProductQuote);
  }
  
  updateAoProductQuoteByVatAmt(vatAmt:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByVatAmt?vatAmt=' + vatAmt, aoProductQuote);
  }
  
  updateAoProductQuoteByVatAmtUsdollar(vatAmtUsdollar:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByVatAmtUsdollar?vatAmtUsdollar=' + vatAmtUsdollar, aoProductQuote);
  }
  
  updateAoProductQuoteByProductTotalPrice(productTotalPrice:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductTotalPrice?productTotalPrice=' + productTotalPrice, aoProductQuote);
  }
  
  updateAoProductQuoteByProductTotalPriceUsdollar(productTotalPriceUsdollar:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductTotalPriceUsdollar?productTotalPriceUsdollar=' + productTotalPriceUsdollar, aoProductQuote);
  }
  
  updateAoProductQuoteByPartNumber(partNumber:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByPartNumber?partNumber=' + partNumber, aoProductQuote);
  }
  
  updateAoProductQuoteByDiscount(discount:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByDiscount?discount=' + discount, aoProductQuote);
  }
  
  updateAoProductQuoteByVat(vat:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByVat?vat=' + vat, aoProductQuote);
  }
  
  updateAoProductQuoteByParentType(parentType:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByParentType?parentType=' + parentType, aoProductQuote);
  }
  
  updateAoProductQuoteByName(name:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByName?name=' + name, aoProductQuote);
  }
  
  updateAoProductQuoteByDescription(description:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByDescription?description=' + description, aoProductQuote);
  }
  
  updateAoProductQuoteByItemDescription(itemDescription:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByItemDescription?itemDescription=' + itemDescription, aoProductQuote);
  }
  
  updateAoProductQuoteByDateEntered(dateEntered:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByDateEntered?dateEntered=' + dateEntered, aoProductQuote);
  }
  
  updateAoProductQuoteByDateModified(dateModified:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByDateModified?dateModified=' + dateModified, aoProductQuote);
  }
  
  updateAoProductQuoteByModifiedUserId(modifiedUserId:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByModifiedUserId?modifiedUserId=' + modifiedUserId, aoProductQuote);
  }
  
  updateAoProductQuoteByCreatedBy(createdBy:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByCreatedBy?createdBy=' + createdBy, aoProductQuote);
  }
  
  updateAoProductQuoteByAssignedUserId(assignedUserId:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByAssignedUserId?assignedUserId=' + assignedUserId, aoProductQuote);
  }
  
  updateAoProductQuoteByCurrencyId(currencyId:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByCurrencyId?currencyId=' + currencyId, aoProductQuote);
  }
  
  updateAoProductQuoteByParentId(parentId:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByParentId?parentId=' + parentId, aoProductQuote);
  }
  
  updateAoProductQuoteByProductId(productId:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByProductId?productId=' + productId, aoProductQuote);
  }
  
  updateAoProductQuoteByGroupId(groupId:any, aoProductQuote:AosProductsQuotes) {
      return this.http.post(this.basePath + '/updateAoProductQuoteByGroupId?groupId=' + groupId, aoProductQuote);
  }
  
  
  
  //</es-section>
}
