/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:35 GMT-0400 (Bolivia Time)
 * Time: 2:41:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:35 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:35
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosInvoices} from "../models/aosInvoices";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoInvoiceService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-invoices`;
  dataChange: BehaviorSubject<AosInvoices[]> = new BehaviorSubject<AosInvoices[]>([]);
  aoInvoiceData: AosInvoices = new AosInvoices();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosInvoices[] {
    return this.dataChange.value;
  }

  getDataAosInvoices(): void {
    this.getAllAosInvoices().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosInvoices[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosInvoices(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoInvoice(aoInvoice:AosInvoices) {
    return this.http.post(this.basePath, aoInvoice);
  }
  getAoInvoice(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoInvoice(id:any, aoInvoice:AosInvoices) {
    return this.http.put(this.basePath + '/' + id, aoInvoice);
  }
  deleteAoInvoice(id:any) {
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
  
  findOneByQuoteNumber(quoteNumber:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByQuoteNumber/' + quoteNumber + '?' + attributes);
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
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByTemplateDdownC(templateDdownC:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTemplateDdownC/' + templateDdownC + '?' + attributes);
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
  
  findOneByQuoteDate(quoteDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByQuoteDate/' + quoteDate + '?' + attributes);
  }
  
  findOneByInvoiceDate(invoiceDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByInvoiceDate/' + invoiceDate + '?' + attributes);
  }
  
  findOneByDueDate(dueDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDueDate/' + dueDate + '?' + attributes);
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
  
  findOneByCurrencyId(currencyId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCurrencyId/' + currencyId + '?' + attributes);
  }
  
  
  updateAoInvoiceById(id:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceById?id=' + id, aoInvoice);
  }
  
  updateAoInvoiceByDeleted(deleted:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByDeleted?deleted=' + deleted, aoInvoice);
  }
  
  updateAoInvoiceByNumber(number:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByNumber?number=' + number, aoInvoice);
  }
  
  updateAoInvoiceByQuoteNumber(quoteNumber:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByQuoteNumber?quoteNumber=' + quoteNumber, aoInvoice);
  }
  
  updateAoInvoiceByTotalAmt(totalAmt:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByTotalAmt?totalAmt=' + totalAmt, aoInvoice);
  }
  
  updateAoInvoiceByTotalAmtUsdollar(totalAmtUsdollar:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByTotalAmtUsdollar?totalAmtUsdollar=' + totalAmtUsdollar, aoInvoice);
  }
  
  updateAoInvoiceBySubtotalAmount(subtotalAmount:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceBySubtotalAmount?subtotalAmount=' + subtotalAmount, aoInvoice);
  }
  
  updateAoInvoiceBySubtotalAmountUsdollar(subtotalAmountUsdollar:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceBySubtotalAmountUsdollar?subtotalAmountUsdollar=' + subtotalAmountUsdollar, aoInvoice);
  }
  
  updateAoInvoiceByDiscountAmount(discountAmount:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByDiscountAmount?discountAmount=' + discountAmount, aoInvoice);
  }
  
  updateAoInvoiceByDiscountAmountUsdollar(discountAmountUsdollar:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByDiscountAmountUsdollar?discountAmountUsdollar=' + discountAmountUsdollar, aoInvoice);
  }
  
  updateAoInvoiceByTaxAmount(taxAmount:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByTaxAmount?taxAmount=' + taxAmount, aoInvoice);
  }
  
  updateAoInvoiceByTaxAmountUsdollar(taxAmountUsdollar:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByTaxAmountUsdollar?taxAmountUsdollar=' + taxAmountUsdollar, aoInvoice);
  }
  
  updateAoInvoiceByShippingAmount(shippingAmount:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByShippingAmount?shippingAmount=' + shippingAmount, aoInvoice);
  }
  
  updateAoInvoiceByShippingAmountUsdollar(shippingAmountUsdollar:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByShippingAmountUsdollar?shippingAmountUsdollar=' + shippingAmountUsdollar, aoInvoice);
  }
  
  updateAoInvoiceByShippingTaxAmt(shippingTaxAmt:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByShippingTaxAmt?shippingTaxAmt=' + shippingTaxAmt, aoInvoice);
  }
  
  updateAoInvoiceByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByShippingTaxAmtUsdollar?shippingTaxAmtUsdollar=' + shippingTaxAmtUsdollar, aoInvoice);
  }
  
  updateAoInvoiceByTotalAmount(totalAmount:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByTotalAmount?totalAmount=' + totalAmount, aoInvoice);
  }
  
  updateAoInvoiceByTotalAmountUsdollar(totalAmountUsdollar:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByTotalAmountUsdollar?totalAmountUsdollar=' + totalAmountUsdollar, aoInvoice);
  }
  
  updateAoInvoiceBySubtotalTaxAmount(subtotalTaxAmount:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceBySubtotalTaxAmount?subtotalTaxAmount=' + subtotalTaxAmount, aoInvoice);
  }
  
  updateAoInvoiceBySubtotalTaxAmountUsdollar(subtotalTaxAmountUsdollar:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceBySubtotalTaxAmountUsdollar?subtotalTaxAmountUsdollar=' + subtotalTaxAmountUsdollar, aoInvoice);
  }
  
  updateAoInvoiceByName(name:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByName?name=' + name, aoInvoice);
  }
  
  updateAoInvoiceByBillingAddressStreet(billingAddressStreet:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByBillingAddressStreet?billingAddressStreet=' + billingAddressStreet, aoInvoice);
  }
  
  updateAoInvoiceByBillingAddressCity(billingAddressCity:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByBillingAddressCity?billingAddressCity=' + billingAddressCity, aoInvoice);
  }
  
  updateAoInvoiceByBillingAddressState(billingAddressState:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByBillingAddressState?billingAddressState=' + billingAddressState, aoInvoice);
  }
  
  updateAoInvoiceByBillingAddressPostalcode(billingAddressPostalcode:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByBillingAddressPostalcode?billingAddressPostalcode=' + billingAddressPostalcode, aoInvoice);
  }
  
  updateAoInvoiceByBillingAddressCountry(billingAddressCountry:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByBillingAddressCountry?billingAddressCountry=' + billingAddressCountry, aoInvoice);
  }
  
  updateAoInvoiceByShippingAddressStreet(shippingAddressStreet:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByShippingAddressStreet?shippingAddressStreet=' + shippingAddressStreet, aoInvoice);
  }
  
  updateAoInvoiceByShippingAddressCity(shippingAddressCity:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByShippingAddressCity?shippingAddressCity=' + shippingAddressCity, aoInvoice);
  }
  
  updateAoInvoiceByShippingAddressState(shippingAddressState:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByShippingAddressState?shippingAddressState=' + shippingAddressState, aoInvoice);
  }
  
  updateAoInvoiceByShippingAddressPostalcode(shippingAddressPostalcode:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByShippingAddressPostalcode?shippingAddressPostalcode=' + shippingAddressPostalcode, aoInvoice);
  }
  
  updateAoInvoiceByShippingAddressCountry(shippingAddressCountry:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByShippingAddressCountry?shippingAddressCountry=' + shippingAddressCountry, aoInvoice);
  }
  
  updateAoInvoiceByShippingTax(shippingTax:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByShippingTax?shippingTax=' + shippingTax, aoInvoice);
  }
  
  updateAoInvoiceByStatus(status:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByStatus?status=' + status, aoInvoice);
  }
  
  updateAoInvoiceByDescription(description:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByDescription?description=' + description, aoInvoice);
  }
  
  updateAoInvoiceByTemplateDdownC(templateDdownC:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByTemplateDdownC?templateDdownC=' + templateDdownC, aoInvoice);
  }
  
  updateAoInvoiceByDateEntered(dateEntered:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByDateEntered?dateEntered=' + dateEntered, aoInvoice);
  }
  
  updateAoInvoiceByDateModified(dateModified:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByDateModified?dateModified=' + dateModified, aoInvoice);
  }
  
  updateAoInvoiceByQuoteDate(quoteDate:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByQuoteDate?quoteDate=' + quoteDate, aoInvoice);
  }
  
  updateAoInvoiceByInvoiceDate(invoiceDate:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByInvoiceDate?invoiceDate=' + invoiceDate, aoInvoice);
  }
  
  updateAoInvoiceByDueDate(dueDate:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByDueDate?dueDate=' + dueDate, aoInvoice);
  }
  
  updateAoInvoiceByModifiedUserId(modifiedUserId:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByModifiedUserId?modifiedUserId=' + modifiedUserId, aoInvoice);
  }
  
  updateAoInvoiceByCreatedBy(createdBy:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByCreatedBy?createdBy=' + createdBy, aoInvoice);
  }
  
  updateAoInvoiceByAssignedUserId(assignedUserId:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByAssignedUserId?assignedUserId=' + assignedUserId, aoInvoice);
  }
  
  updateAoInvoiceByBillingAccountId(billingAccountId:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByBillingAccountId?billingAccountId=' + billingAccountId, aoInvoice);
  }
  
  updateAoInvoiceByBillingContactId(billingContactId:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByBillingContactId?billingContactId=' + billingContactId, aoInvoice);
  }
  
  updateAoInvoiceByCurrencyId(currencyId:any, aoInvoice:AosInvoices) {
      return this.http.post(this.basePath + '/updateAoInvoiceByCurrencyId?currencyId=' + currencyId, aoInvoice);
  }
  
  
  
  //</es-section>
}
