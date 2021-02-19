/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:31 GMT-0400 (Bolivia Time)
 * Time: 2:41:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:31 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:31
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AosContracts} from "../models/aosContracts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AoContractService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aos-contracts`;
  dataChange: BehaviorSubject<AosContracts[]> = new BehaviorSubject<AosContracts[]>([]);
  aoContractData: AosContracts = new AosContracts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AosContracts[] {
    return this.dataChange.value;
  }

  getDataAosContracts(): void {
    this.getAllAosContracts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosContracts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAosContracts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAoContract(aoContract:AosContracts) {
    return this.http.post(this.basePath, aoContract);
  }
  getAoContract(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAoContract(id:any, aoContract:AosContracts) {
    return this.http.put(this.basePath + '/' + id, aoContract);
  }
  deleteAoContract(id:any) {
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
  
  findOneByTotalContractValue(totalContractValue:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTotalContractValue/' + totalContractValue + '?' + attributes);
  }
  
  findOneByTotalContractValueUsdollar(totalContractValueUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTotalContractValueUsdollar/' + totalContractValueUsdollar + '?' + attributes);
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
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByReferenceCode(referenceCode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReferenceCode/' + referenceCode + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByContractType(contractType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContractType/' + contractType + '?' + attributes);
  }
  
  findOneByShippingTax(shippingTax:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShippingTax/' + shippingTax + '?' + attributes);
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
  
  findOneByStartDate(startDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStartDate/' + startDate + '?' + attributes);
  }
  
  findOneByEndDate(endDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEndDate/' + endDate + '?' + attributes);
  }
  
  findOneByCustomerSignedDate(customerSignedDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCustomerSignedDate/' + customerSignedDate + '?' + attributes);
  }
  
  findOneByCompanySignedDate(companySignedDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCompanySignedDate/' + companySignedDate + '?' + attributes);
  }
  
  findOneByRenewalReminderDate(renewalReminderDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRenewalReminderDate/' + renewalReminderDate + '?' + attributes);
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
  
  findOneByContractAccountId(contractAccountId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContractAccountId/' + contractAccountId + '?' + attributes);
  }
  
  findOneByOpportunityId(opportunityId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOpportunityId/' + opportunityId + '?' + attributes);
  }
  
  findOneByContactId(contactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactId/' + contactId + '?' + attributes);
  }
  
  findOneByCallId(callId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCallId/' + callId + '?' + attributes);
  }
  
  
  updateAoContractById(id:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractById?id=' + id, aoContract);
  }
  
  updateAoContractByDeleted(deleted:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByDeleted?deleted=' + deleted, aoContract);
  }
  
  updateAoContractByTotalContractValue(totalContractValue:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByTotalContractValue?totalContractValue=' + totalContractValue, aoContract);
  }
  
  updateAoContractByTotalContractValueUsdollar(totalContractValueUsdollar:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByTotalContractValueUsdollar?totalContractValueUsdollar=' + totalContractValueUsdollar, aoContract);
  }
  
  updateAoContractByTotalAmt(totalAmt:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByTotalAmt?totalAmt=' + totalAmt, aoContract);
  }
  
  updateAoContractByTotalAmtUsdollar(totalAmtUsdollar:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByTotalAmtUsdollar?totalAmtUsdollar=' + totalAmtUsdollar, aoContract);
  }
  
  updateAoContractBySubtotalAmount(subtotalAmount:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractBySubtotalAmount?subtotalAmount=' + subtotalAmount, aoContract);
  }
  
  updateAoContractBySubtotalAmountUsdollar(subtotalAmountUsdollar:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractBySubtotalAmountUsdollar?subtotalAmountUsdollar=' + subtotalAmountUsdollar, aoContract);
  }
  
  updateAoContractByDiscountAmount(discountAmount:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByDiscountAmount?discountAmount=' + discountAmount, aoContract);
  }
  
  updateAoContractByDiscountAmountUsdollar(discountAmountUsdollar:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByDiscountAmountUsdollar?discountAmountUsdollar=' + discountAmountUsdollar, aoContract);
  }
  
  updateAoContractByTaxAmount(taxAmount:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByTaxAmount?taxAmount=' + taxAmount, aoContract);
  }
  
  updateAoContractByTaxAmountUsdollar(taxAmountUsdollar:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByTaxAmountUsdollar?taxAmountUsdollar=' + taxAmountUsdollar, aoContract);
  }
  
  updateAoContractByShippingAmount(shippingAmount:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByShippingAmount?shippingAmount=' + shippingAmount, aoContract);
  }
  
  updateAoContractByShippingAmountUsdollar(shippingAmountUsdollar:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByShippingAmountUsdollar?shippingAmountUsdollar=' + shippingAmountUsdollar, aoContract);
  }
  
  updateAoContractByShippingTaxAmt(shippingTaxAmt:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByShippingTaxAmt?shippingTaxAmt=' + shippingTaxAmt, aoContract);
  }
  
  updateAoContractByShippingTaxAmtUsdollar(shippingTaxAmtUsdollar:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByShippingTaxAmtUsdollar?shippingTaxAmtUsdollar=' + shippingTaxAmtUsdollar, aoContract);
  }
  
  updateAoContractByTotalAmount(totalAmount:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByTotalAmount?totalAmount=' + totalAmount, aoContract);
  }
  
  updateAoContractByTotalAmountUsdollar(totalAmountUsdollar:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByTotalAmountUsdollar?totalAmountUsdollar=' + totalAmountUsdollar, aoContract);
  }
  
  updateAoContractByName(name:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByName?name=' + name, aoContract);
  }
  
  updateAoContractByReferenceCode(referenceCode:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByReferenceCode?referenceCode=' + referenceCode, aoContract);
  }
  
  updateAoContractByStatus(status:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByStatus?status=' + status, aoContract);
  }
  
  updateAoContractByContractType(contractType:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByContractType?contractType=' + contractType, aoContract);
  }
  
  updateAoContractByShippingTax(shippingTax:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByShippingTax?shippingTax=' + shippingTax, aoContract);
  }
  
  updateAoContractByDescription(description:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByDescription?description=' + description, aoContract);
  }
  
  updateAoContractByDateEntered(dateEntered:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByDateEntered?dateEntered=' + dateEntered, aoContract);
  }
  
  updateAoContractByDateModified(dateModified:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByDateModified?dateModified=' + dateModified, aoContract);
  }
  
  updateAoContractByStartDate(startDate:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByStartDate?startDate=' + startDate, aoContract);
  }
  
  updateAoContractByEndDate(endDate:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByEndDate?endDate=' + endDate, aoContract);
  }
  
  updateAoContractByCustomerSignedDate(customerSignedDate:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByCustomerSignedDate?customerSignedDate=' + customerSignedDate, aoContract);
  }
  
  updateAoContractByCompanySignedDate(companySignedDate:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByCompanySignedDate?companySignedDate=' + companySignedDate, aoContract);
  }
  
  updateAoContractByRenewalReminderDate(renewalReminderDate:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByRenewalReminderDate?renewalReminderDate=' + renewalReminderDate, aoContract);
  }
  
  updateAoContractByModifiedUserId(modifiedUserId:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByModifiedUserId?modifiedUserId=' + modifiedUserId, aoContract);
  }
  
  updateAoContractByCreatedBy(createdBy:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByCreatedBy?createdBy=' + createdBy, aoContract);
  }
  
  updateAoContractByAssignedUserId(assignedUserId:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByAssignedUserId?assignedUserId=' + assignedUserId, aoContract);
  }
  
  updateAoContractByCurrencyId(currencyId:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByCurrencyId?currencyId=' + currencyId, aoContract);
  }
  
  updateAoContractByContractAccountId(contractAccountId:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByContractAccountId?contractAccountId=' + contractAccountId, aoContract);
  }
  
  updateAoContractByOpportunityId(opportunityId:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByOpportunityId?opportunityId=' + opportunityId, aoContract);
  }
  
  updateAoContractByContactId(contactId:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByContactId?contactId=' + contactId, aoContract);
  }
  
  updateAoContractByCallId(callId:any, aoContract:AosContracts) {
      return this.http.post(this.basePath + '/updateAoContractByCallId?callId=' + callId, aoContract);
  }
  
  
  
  //</es-section>
}
