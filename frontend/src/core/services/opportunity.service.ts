/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:25 GMT-0400 (Bolivia Time)
 * Time: 2:43:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:25 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Opportunities} from "../models/opportunities";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/opportunities`;
  dataChange: BehaviorSubject<Opportunities[]> = new BehaviorSubject<Opportunities[]>([]);
  opportunityData: Opportunities = new Opportunities();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Opportunities[] {
    return this.dataChange.value;
  }

  getDataOpportunities(): void {
    this.getAllOpportunities().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Opportunities[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllOpportunities(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createOpportunity(opportunity:Opportunities) {
    return this.http.post(this.basePath, opportunity);
  }
  getOpportunity(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOpportunity(id:any, opportunity:Opportunities) {
    return this.http.put(this.basePath + '/' + id, opportunity);
  }
  deleteOpportunity(id:any) {
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
  
  findOneByAmount(amount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAmount/' + amount + '?' + attributes);
  }
  
  findOneByAmountUsdollar(amountUsdollar:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAmountUsdollar/' + amountUsdollar + '?' + attributes);
  }
  
  findOneByProbability(probability:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProbability/' + probability + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByOpportunityType(opportunityType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOpportunityType/' + opportunityType + '?' + attributes);
  }
  
  findOneByLeadSource(leadSource:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLeadSource/' + leadSource + '?' + attributes);
  }
  
  findOneByNextStep(nextStep:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNextStep/' + nextStep + '?' + attributes);
  }
  
  findOneBySalesStage(salesStage:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySalesStage/' + salesStage + '?' + attributes);
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
  
  findOneByDateClosed(dateClosed:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateClosed/' + dateClosed + '?' + attributes);
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
  
  findOneByCampaignId(campaignId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCampaignId/' + campaignId + '?' + attributes);
  }
  
  findOneByCurrencyId(currencyId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCurrencyId/' + currencyId + '?' + attributes);
  }
  
  
  updateOpportunityById(id:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityById?id=' + id, opportunity);
  }
  
  updateOpportunityByDeleted(deleted:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByDeleted?deleted=' + deleted, opportunity);
  }
  
  updateOpportunityByAmount(amount:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByAmount?amount=' + amount, opportunity);
  }
  
  updateOpportunityByAmountUsdollar(amountUsdollar:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByAmountUsdollar?amountUsdollar=' + amountUsdollar, opportunity);
  }
  
  updateOpportunityByProbability(probability:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByProbability?probability=' + probability, opportunity);
  }
  
  updateOpportunityByName(name:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByName?name=' + name, opportunity);
  }
  
  updateOpportunityByOpportunityType(opportunityType:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByOpportunityType?opportunityType=' + opportunityType, opportunity);
  }
  
  updateOpportunityByLeadSource(leadSource:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByLeadSource?leadSource=' + leadSource, opportunity);
  }
  
  updateOpportunityByNextStep(nextStep:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByNextStep?nextStep=' + nextStep, opportunity);
  }
  
  updateOpportunityBySalesStage(salesStage:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityBySalesStage?salesStage=' + salesStage, opportunity);
  }
  
  updateOpportunityByDescription(description:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByDescription?description=' + description, opportunity);
  }
  
  updateOpportunityByDateEntered(dateEntered:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByDateEntered?dateEntered=' + dateEntered, opportunity);
  }
  
  updateOpportunityByDateModified(dateModified:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByDateModified?dateModified=' + dateModified, opportunity);
  }
  
  updateOpportunityByDateClosed(dateClosed:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByDateClosed?dateClosed=' + dateClosed, opportunity);
  }
  
  updateOpportunityByModifiedUserId(modifiedUserId:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByModifiedUserId?modifiedUserId=' + modifiedUserId, opportunity);
  }
  
  updateOpportunityByCreatedBy(createdBy:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByCreatedBy?createdBy=' + createdBy, opportunity);
  }
  
  updateOpportunityByAssignedUserId(assignedUserId:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByAssignedUserId?assignedUserId=' + assignedUserId, opportunity);
  }
  
  updateOpportunityByCampaignId(campaignId:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByCampaignId?campaignId=' + campaignId, opportunity);
  }
  
  updateOpportunityByCurrencyId(currencyId:any, opportunity:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunityByCurrencyId?currencyId=' + currencyId, opportunity);
  }
  
  
  
  //</es-section>
}
