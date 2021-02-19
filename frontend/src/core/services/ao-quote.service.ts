/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:49 GMT-0400 (Bolivia Time)
 * Time: 2:41:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:49 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosQuotes} from "../models/aosQuotes";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoQuoteService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-quotes`;
  dataChange: BehaviorSubject<AosQuotes[]> = new BehaviorSubject<AosQuotes[]>([]);
  aoQuoteData: AosQuotes = new AosQuotes();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosQuotes[] {
    return this.dataChange.value;
  }

  getDataAosQuotes(): void {
    this.getAllAosQuotes().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosQuotes[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosQuotes(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoQuote(aoQuote:AosQuotes) {
    return this.http.post(this.basePath, aoQuote);
  }
  getAoQuote(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoQuote(id:any, aoQuote:AosQuotes) {
    return this.http.put(this.basePath + '/' + id, aoQuote);
  }
  deleteAoQuote(id:any) {
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
  
  findOneByShippingAmount(shippingAmount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingAmount/' + shippingAmount + '?' + attributes);
  }
  
  findOneByShippingAmountUsdollar(shippingAmountUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingAmountUsdollar/' + shippingAmountUsdollar + '?' + attributes);
  }
  
  findOneByShippingTaxAmt(shippingTaxAmt:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingTaxAmt/' + shippingTaxAmt + '?' + attributes);
  }
  
  findOneByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingTaxAmtUsdollar/' + shippingTaxAmtUsdollar + '?' + attributes);
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
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByBillingAddressStreet(billingAddressStreet:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBillingAddressStreet/' + billingAddressStreet + '?' + attributes);
  }
  
  findOneByBillingAddressCity(billingAddressCity:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBillingAddressCity/' + billingAddressCity + '?' + attributes);
  }
  
  findOneByBillingAddressState(billingAddressState:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBillingAddressState/' + billingAddressState + '?' + attributes);
  }
  
  findOneByBillingAddressPostalcode(billingAddressPostalcode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBillingAddressPostalcode/' + billingAddressPostalcode + '?' + attributes);
  }
  
  findOneByBillingAddressCountry(billingAddressCountry:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBillingAddressCountry/' + billingAddressCountry + '?' + attributes);
  }
  
  findOneByShippingAddressStreet(shippingAddressStreet:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingAddressStreet/' + shippingAddressStreet + '?' + attributes);
  }
  
  findOneByShippingAddressCity(shippingAddressCity:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingAddressCity/' + shippingAddressCity + '?' + attributes);
  }
  
  findOneByShippingAddressState(shippingAddressState:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingAddressState/' + shippingAddressState + '?' + attributes);
  }
  
  findOneByShippingAddressPostalcode(shippingAddressPostalcode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingAddressPostalcode/' + shippingAddressPostalcode + '?' + attributes);
  }
  
  findOneByShippingAddressCountry(shippingAddressCountry:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingAddressCountry/' + shippingAddressCountry + '?' + attributes);
  }
  
  findOneByShippingTax(shippingTax:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingTax/' + shippingTax + '?' + attributes);
  }
  
  findOneByStage(stage:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStage/' + stage + '?' + attributes);
  }
  
  findOneByTerm(term:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTerm/' + term + '?' + attributes);
  }
  
  findOneByApprovalStatus(approvalStatus:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByApprovalStatus/' + approvalStatus + '?' + attributes);
  }
  
  findOneByInvoiceStatus(invoiceStatus:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByInvoiceStatus/' + invoiceStatus + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByApprovalIssue(approvalIssue:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByApprovalIssue/' + approvalIssue + '?' + attributes);
  }
  
  findOneByTemplateDdownC(templateDdownC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTemplateDdownC/' + templateDdownC + '?' + attributes);
  }
  
  findOneByTermsC(termsC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTermsC/' + termsC + '?' + attributes);
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
  
  findOneByExpiration(expiration:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExpiration/' + expiration + '?' + attributes);
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
  
  findOneByBillingAccountId(billingAccountId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBillingAccountId/' + billingAccountId + '?' + attributes);
  }
  
  findOneByBillingContactId(billingContactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBillingContactId/' + billingContactId + '?' + attributes);
  }
  
  findOneByOpportunityId(opportunityId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOpportunityId/' + opportunityId + '?' + attributes);
  }
  
  findOneByCurrencyId(currencyId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCurrencyId/' + currencyId + '?' + attributes);
  }
  
  
  updateAoQuoteById(id:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteById?id=' + id, aoQuote);
  }
  
  updateAoQuoteByDeleted(deleted:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByDeleted?deleted=' + deleted, aoQuote);
  }
  
  updateAoQuoteByNumber(number:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByNumber?number=' + number, aoQuote);
  }
  
  updateAoQuoteByTotalAmt(totalAmt:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByTotalAmt?totalAmt=' + totalAmt, aoQuote);
  }
  
  updateAoQuoteByTotalAmtUsdollar(totalAmtUsdollar:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByTotalAmtUsdollar?totalAmtUsdollar=' + totalAmtUsdollar, aoQuote);
  }
  
  updateAoQuoteBySubtotalAmount(subtotalAmount:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteBySubtotalAmount?subtotalAmount=' + subtotalAmount, aoQuote);
  }
  
  updateAoQuoteBySubtotalAmountUsdollar(subtotalAmountUsdollar:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteBySubtotalAmountUsdollar?subtotalAmountUsdollar=' + subtotalAmountUsdollar, aoQuote);
  }
  
  updateAoQuoteByDiscountAmount(discountAmount:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByDiscountAmount?discountAmount=' + discountAmount, aoQuote);
  }
  
  updateAoQuoteByDiscountAmountUsdollar(discountAmountUsdollar:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByDiscountAmountUsdollar?discountAmountUsdollar=' + discountAmountUsdollar, aoQuote);
  }
  
  updateAoQuoteByTaxAmount(taxAmount:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByTaxAmount?taxAmount=' + taxAmount, aoQuote);
  }
  
  updateAoQuoteByTaxAmountUsdollar(taxAmountUsdollar:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByTaxAmountUsdollar?taxAmountUsdollar=' + taxAmountUsdollar, aoQuote);
  }
  
  updateAoQuoteByShippingAmount(shippingAmount:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByShippingAmount?shippingAmount=' + shippingAmount, aoQuote);
  }
  
  updateAoQuoteByShippingAmountUsdollar(shippingAmountUsdollar:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByShippingAmountUsdollar?shippingAmountUsdollar=' + shippingAmountUsdollar, aoQuote);
  }
  
  updateAoQuoteByShippingTaxAmt(shippingTaxAmt:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByShippingTaxAmt?shippingTaxAmt=' + shippingTaxAmt, aoQuote);
  }
  
  updateAoQuoteByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByShippingTaxAmtUsdollar?shippingTaxAmtUsdollar=' + shippingTaxAmtUsdollar, aoQuote);
  }
  
  updateAoQuoteByTotalAmount(totalAmount:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByTotalAmount?totalAmount=' + totalAmount, aoQuote);
  }
  
  updateAoQuoteByTotalAmountUsdollar(totalAmountUsdollar:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByTotalAmountUsdollar?totalAmountUsdollar=' + totalAmountUsdollar, aoQuote);
  }
  
  updateAoQuoteBySubtotalTaxAmount(subtotalTaxAmount:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteBySubtotalTaxAmount?subtotalTaxAmount=' + subtotalTaxAmount, aoQuote);
  }
  
  updateAoQuoteBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteBySubtotalTaxAmountUsdollar?subtotalTaxAmountUsdollar=' + subtotalTaxAmountUsdollar, aoQuote);
  }
  
  updateAoQuoteByName(name:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByName?name=' + name, aoQuote);
  }
  
  updateAoQuoteByBillingAddressStreet(billingAddressStreet:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByBillingAddressStreet?billingAddressStreet=' + billingAddressStreet, aoQuote);
  }
  
  updateAoQuoteByBillingAddressCity(billingAddressCity:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByBillingAddressCity?billingAddressCity=' + billingAddressCity, aoQuote);
  }
  
  updateAoQuoteByBillingAddressState(billingAddressState:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByBillingAddressState?billingAddressState=' + billingAddressState, aoQuote);
  }
  
  updateAoQuoteByBillingAddressPostalcode(billingAddressPostalcode:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByBillingAddressPostalcode?billingAddressPostalcode=' + billingAddressPostalcode, aoQuote);
  }
  
  updateAoQuoteByBillingAddressCountry(billingAddressCountry:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByBillingAddressCountry?billingAddressCountry=' + billingAddressCountry, aoQuote);
  }
  
  updateAoQuoteByShippingAddressStreet(shippingAddressStreet:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByShippingAddressStreet?shippingAddressStreet=' + shippingAddressStreet, aoQuote);
  }
  
  updateAoQuoteByShippingAddressCity(shippingAddressCity:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByShippingAddressCity?shippingAddressCity=' + shippingAddressCity, aoQuote);
  }
  
  updateAoQuoteByShippingAddressState(shippingAddressState:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByShippingAddressState?shippingAddressState=' + shippingAddressState, aoQuote);
  }
  
  updateAoQuoteByShippingAddressPostalcode(shippingAddressPostalcode:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByShippingAddressPostalcode?shippingAddressPostalcode=' + shippingAddressPostalcode, aoQuote);
  }
  
  updateAoQuoteByShippingAddressCountry(shippingAddressCountry:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByShippingAddressCountry?shippingAddressCountry=' + shippingAddressCountry, aoQuote);
  }
  
  updateAoQuoteByShippingTax(shippingTax:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByShippingTax?shippingTax=' + shippingTax, aoQuote);
  }
  
  updateAoQuoteByStage(stage:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByStage?stage=' + stage, aoQuote);
  }
  
  updateAoQuoteByTerm(term:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByTerm?term=' + term, aoQuote);
  }
  
  updateAoQuoteByApprovalStatus(approvalStatus:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByApprovalStatus?approvalStatus=' + approvalStatus, aoQuote);
  }
  
  updateAoQuoteByInvoiceStatus(invoiceStatus:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByInvoiceStatus?invoiceStatus=' + invoiceStatus, aoQuote);
  }
  
  updateAoQuoteByDescription(description:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByDescription?description=' + description, aoQuote);
  }
  
  updateAoQuoteByApprovalIssue(approvalIssue:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByApprovalIssue?approvalIssue=' + approvalIssue, aoQuote);
  }
  
  updateAoQuoteByTemplateDdownC(templateDdownC:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByTemplateDdownC?templateDdownC=' + templateDdownC, aoQuote);
  }
  
  updateAoQuoteByTermsC(termsC:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByTermsC?termsC=' + termsC, aoQuote);
  }
  
  updateAoQuoteByDateEntered(dateEntered:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByDateEntered?dateEntered=' + dateEntered, aoQuote);
  }
  
  updateAoQuoteByDateModified(dateModified:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByDateModified?dateModified=' + dateModified, aoQuote);
  }
  
  updateAoQuoteByExpiration(expiration:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByExpiration?expiration=' + expiration, aoQuote);
  }
  
  updateAoQuoteByModifiedUserId(modifiedUserId:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByModifiedUserId?modifiedUserId=' + modifiedUserId, aoQuote);
  }
  
  updateAoQuoteByCreatedBy(createdBy:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByCreatedBy?createdBy=' + createdBy, aoQuote);
  }
  
  updateAoQuoteByAssignedUserId(assignedUserId:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByAssignedUserId?assignedUserId=' + assignedUserId, aoQuote);
  }
  
  updateAoQuoteByBillingAccountId(billingAccountId:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByBillingAccountId?billingAccountId=' + billingAccountId, aoQuote);
  }
  
  updateAoQuoteByBillingContactId(billingContactId:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByBillingContactId?billingContactId=' + billingContactId, aoQuote);
  }
  
  updateAoQuoteByOpportunityId(opportunityId:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByOpportunityId?opportunityId=' + opportunityId, aoQuote);
  }
  
  updateAoQuoteByCurrencyId(currencyId:any, aoQuote:AosQuotes) {
      return this.http.post(this.basePath + '/updateAoQuoteByCurrencyId?currencyId=' + currencyId, aoQuote);
  }
  
  
  
  //</es-section>
}
