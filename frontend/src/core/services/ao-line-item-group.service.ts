/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:37 GMT-0400 (Bolivia Time)
 * Time: 2:41:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:37 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:37
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosLineItemGroups} from "../models/aosLineItemGroups";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoLineItemGroupService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-line-item-groups`;
  dataChange: BehaviorSubject<AosLineItemGroups[]> = new BehaviorSubject<AosLineItemGroups[]>([]);
  aoLineItemGroupData: AosLineItemGroups = new AosLineItemGroups();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosLineItemGroups[] {
    return this.dataChange.value;
  }

  getDataAosLineItemGroups(): void {
    this.getAllAosLineItemGroups().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosLineItemGroups[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosLineItemGroups(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoLineItemGroup(aoLineItemGroup:AosLineItemGroups) {
    return this.http.post(this.basePath, aoLineItemGroup);
  }
  getAoLineItemGroup(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoLineItemGroup(id:any, aoLineItemGroup:AosLineItemGroups) {
    return this.http.put(this.basePath + '/' + id, aoLineItemGroup);
  }
  deleteAoLineItemGroup(id:any) {
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
  
  findOneByTotalAmt(totalAmt:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTotalAmt/' + totalAmt + '?' + attributes);
  }
  
  findOneByTotalAmtUsdollar(totalAmtUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTotalAmtUsdollar/' + totalAmtUsdollar + '?' + attributes);
  }
  
  findOneByDiscountAmount(discountAmount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDiscountAmount/' + discountAmount + '?' + attributes);
  }
  
  findOneByDiscountAmountUsdollar(discountAmountUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDiscountAmountUsdollar/' + discountAmountUsdollar + '?' + attributes);
  }
  
  findOneBySubtotalAmount(subtotalAmount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySubtotalAmount/' + subtotalAmount + '?' + attributes);
  }
  
  findOneBySubtotalAmountUsdollar(subtotalAmountUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySubtotalAmountUsdollar/' + subtotalAmountUsdollar + '?' + attributes);
  }
  
  findOneByTaxAmount(taxAmount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTaxAmount/' + taxAmount + '?' + attributes);
  }
  
  findOneByTaxAmountUsdollar(taxAmountUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTaxAmountUsdollar/' + taxAmountUsdollar + '?' + attributes);
  }
  
  findOneBySubtotalTaxAmount(subtotalTaxAmount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySubtotalTaxAmount/' + subtotalTaxAmount + '?' + attributes);
  }
  
  findOneBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySubtotalTaxAmountUsdollar/' + subtotalTaxAmountUsdollar + '?' + attributes);
  }
  
  findOneByTotalAmount(totalAmount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTotalAmount/' + totalAmount + '?' + attributes);
  }
  
  findOneByTotalAmountUsdollar(totalAmountUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTotalAmountUsdollar/' + totalAmountUsdollar + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
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
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  findOneByCurrencyId(currencyId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCurrencyId/' + currencyId + '?' + attributes);
  }
  
  
  updateAoLineItemGroupById(id:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupById?id=' + id, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByDeleted(deleted:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByDeleted?deleted=' + deleted, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByNumber(number:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByNumber?number=' + number, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByTotalAmt(totalAmt:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByTotalAmt?totalAmt=' + totalAmt, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByTotalAmtUsdollar(totalAmtUsdollar:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByTotalAmtUsdollar?totalAmtUsdollar=' + totalAmtUsdollar, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByDiscountAmount(discountAmount:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByDiscountAmount?discountAmount=' + discountAmount, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByDiscountAmountUsdollar(discountAmountUsdollar:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByDiscountAmountUsdollar?discountAmountUsdollar=' + discountAmountUsdollar, aoLineItemGroup);
  }
  
  updateAoLineItemGroupBySubtotalAmount(subtotalAmount:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupBySubtotalAmount?subtotalAmount=' + subtotalAmount, aoLineItemGroup);
  }
  
  updateAoLineItemGroupBySubtotalAmountUsdollar(subtotalAmountUsdollar:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupBySubtotalAmountUsdollar?subtotalAmountUsdollar=' + subtotalAmountUsdollar, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByTaxAmount(taxAmount:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByTaxAmount?taxAmount=' + taxAmount, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByTaxAmountUsdollar(taxAmountUsdollar:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByTaxAmountUsdollar?taxAmountUsdollar=' + taxAmountUsdollar, aoLineItemGroup);
  }
  
  updateAoLineItemGroupBySubtotalTaxAmount(subtotalTaxAmount:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupBySubtotalTaxAmount?subtotalTaxAmount=' + subtotalTaxAmount, aoLineItemGroup);
  }
  
  updateAoLineItemGroupBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupBySubtotalTaxAmountUsdollar?subtotalTaxAmountUsdollar=' + subtotalTaxAmountUsdollar, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByTotalAmount(totalAmount:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByTotalAmount?totalAmount=' + totalAmount, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByTotalAmountUsdollar(totalAmountUsdollar:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByTotalAmountUsdollar?totalAmountUsdollar=' + totalAmountUsdollar, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByName(name:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByName?name=' + name, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByParentType(parentType:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByParentType?parentType=' + parentType, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByDescription(description:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByDescription?description=' + description, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByDateEntered(dateEntered:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByDateEntered?dateEntered=' + dateEntered, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByDateModified(dateModified:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByDateModified?dateModified=' + dateModified, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByModifiedUserId(modifiedUserId:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByModifiedUserId?modifiedUserId=' + modifiedUserId, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByCreatedBy(createdBy:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByCreatedBy?createdBy=' + createdBy, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByAssignedUserId(assignedUserId:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByAssignedUserId?assignedUserId=' + assignedUserId, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByParentId(parentId:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByParentId?parentId=' + parentId, aoLineItemGroup);
  }
  
  updateAoLineItemGroupByCurrencyId(currencyId:any, aoLineItemGroup:AosLineItemGroups) {
      return this.http.post(this.basePath + '/updateAoLineItemGroupByCurrencyId?currencyId=' + currencyId, aoLineItemGroup);
  }
  
  
  
  //</es-section>
}
