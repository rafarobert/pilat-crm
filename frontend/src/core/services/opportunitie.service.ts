/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 01:10:10 GMT-0400 (Bolivia Time)
 * Time: 1:10:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 01:10:10 GMT-0400 (Bolivia Time)
 * Last time updated: 1:10:10
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
export class OpportunitieService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/opportunities`;
  dataChange: BehaviorSubject<Opportunities[]> = new BehaviorSubject<Opportunities[]>([]);
  opportunitieData: Opportunities = new Opportunities();
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
  createOpportunitie(opportunitie:Opportunities) {
    return this.http.post(this.basePath, opportunitie);
  }
  getOpportunitie(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOpportunitie(id:any, opportunitie:Opportunities) {
    return this.http.put(this.basePath + '/' + id, opportunitie);
  }
  deleteOpportunitie(id:any) {
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
  
  findOneByLeadSource(leadSource:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLeadSource/' + leadSource + '?' + attributes);
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
  
  
  updateOpportunitieById(id:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieById?id=' + id, opportunitie);
  }
  
  updateOpportunitieByDeleted(deleted:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByDeleted?deleted=' + deleted, opportunitie);
  }
  
  updateOpportunitieByAmount(amount:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByAmount?amount=' + amount, opportunitie);
  }
  
  updateOpportunitieByAmountUsdollar(amountUsdollar:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByAmountUsdollar?amountUsdollar=' + amountUsdollar, opportunitie);
  }
  
  updateOpportunitieByProbability(probability:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByProbability?probability=' + probability, opportunitie);
  }
  
  updateOpportunitieByName(name:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByName?name=' + name, opportunitie);
  }
  
  updateOpportunitieByOpportunityType(opportunityType:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByOpportunityType?opportunityType=' + opportunityType, opportunitie);
  }
  
  updateOpportunitieByNextStep(nextStep:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByNextStep?nextStep=' + nextStep, opportunitie);
  }
  
  updateOpportunitieBySalesStage(salesStage:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieBySalesStage?salesStage=' + salesStage, opportunitie);
  }
  
  updateOpportunitieByDescription(description:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByDescription?description=' + description, opportunitie);
  }
  
  updateOpportunitieByModifiedUserId(modifiedUserId:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByModifiedUserId?modifiedUserId=' + modifiedUserId, opportunitie);
  }
  
  updateOpportunitieByCreatedBy(createdBy:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByCreatedBy?createdBy=' + createdBy, opportunitie);
  }
  
  updateOpportunitieByAssignedUserId(assignedUserId:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByAssignedUserId?assignedUserId=' + assignedUserId, opportunitie);
  }
  
  updateOpportunitieByCampaignId(campaignId:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByCampaignId?campaignId=' + campaignId, opportunitie);
  }
  
  updateOpportunitieByLeadSource(leadSource:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByLeadSource?leadSource=' + leadSource, opportunitie);
  }
  
  updateOpportunitieByDateEntered(dateEntered:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByDateEntered?dateEntered=' + dateEntered, opportunitie);
  }
  
  updateOpportunitieByDateModified(dateModified:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByDateModified?dateModified=' + dateModified, opportunitie);
  }
  
  updateOpportunitieByDateClosed(dateClosed:any, opportunitie:Opportunities) {
      return this.http.post(this.basePath + '/updateOpportunitieByDateClosed?dateClosed=' + dateClosed, opportunitie);
  }
  
  
  findUsersModifiedUserWithSystemGeneratedPassword(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findUsersModifiedUserWithSystemGeneratedPassword' + '?' + attributes);
  }
  
  findUsersCreatedByWithSystemGeneratedPassword(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findUsersCreatedByWithSystemGeneratedPassword' + '?' + attributes);
  }
  
  findUsersAssignedUserWithSystemGeneratedPassword(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findUsersAssignedUserWithSystemGeneratedPassword' + '?' + attributes);
  }
  
  findCampaignsCampaignWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findCampaignsCampaignWithDeleted' + '?' + attributes);
  }
  
  findLeadsLeadSourceWithDeleted(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findLeadsLeadSourceWithDeleted' + '?' + attributes);
  }
  
  
  filterOpportunitiesByModifiedUser(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterOpportunitiesByModifiedUser/' + ids + '?' + attributes);
  }
  
  filterOpportunitiesByCreatedBy(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterOpportunitiesByCreatedBy/' + ids + '?' + attributes);
  }
  
  filterOpportunitiesByAssignedUser(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterOpportunitiesByAssignedUser/' + ids + '?' + attributes);
  }
  
  filterOpportunitiesByCampaign(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterOpportunitiesByCampaign/' + ids + '?' + attributes);
  }
  
  filterOpportunitiesByLeadSource(ids:any, level:number = 0, select = [], order = []) {
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
        return this.http.get(this.basePath + '/filterOpportunitiesByLeadSource/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
