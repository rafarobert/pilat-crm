/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:06 GMT-0400 (Bolivia Time)
 * Time: 2:43:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:06 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:6
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Leads} from "../models/leads";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/leads`;
  dataChange: BehaviorSubject<Leads[]> = new BehaviorSubject<Leads[]>([]);
  leadData: Leads = new Leads();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Leads[] {
    return this.dataChange.value;
  }

  getDataLeads(): void {
    this.getAllLeads().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Leads[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllLeads(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createLead(lead:Leads) {
    return this.http.post(this.basePath, lead);
  }
  getLead(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateLead(id:any, lead:Leads) {
    return this.http.put(this.basePath + '/' + id, lead);
  }
  deleteLead(id:any) {
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
  
  findOneByDoNotCall(doNotCall:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDoNotCall/' + doNotCall + '?' + attributes);
  }
  
  findOneByConverted(converted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByConverted/' + converted + '?' + attributes);
  }
  
  findOneBySalutation(salutation:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySalutation/' + salutation + '?' + attributes);
  }
  
  findOneByFirstName(firstName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFirstName/' + firstName + '?' + attributes);
  }
  
  findOneByLastName(lastName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLastName/' + lastName + '?' + attributes);
  }
  
  findOneByTitle(title:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTitle/' + title + '?' + attributes);
  }
  
  findOneByPhoto(photo:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPhoto/' + photo + '?' + attributes);
  }
  
  findOneByDepartment(department:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDepartment/' + department + '?' + attributes);
  }
  
  findOneByPhoneHome(phoneHome:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPhoneHome/' + phoneHome + '?' + attributes);
  }
  
  findOneByPhoneMobile(phoneMobile:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPhoneMobile/' + phoneMobile + '?' + attributes);
  }
  
  findOneByPhoneWork(phoneWork:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPhoneWork/' + phoneWork + '?' + attributes);
  }
  
  findOneByPhoneOther(phoneOther:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPhoneOther/' + phoneOther + '?' + attributes);
  }
  
  findOneByPhoneFax(phoneFax:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPhoneFax/' + phoneFax + '?' + attributes);
  }
  
  findOneByLawfulBasisSource(lawfulBasisSource:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLawfulBasisSource/' + lawfulBasisSource + '?' + attributes);
  }
  
  findOneByPrimaryAddressStreet(primaryAddressStreet:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPrimaryAddressStreet/' + primaryAddressStreet + '?' + attributes);
  }
  
  findOneByPrimaryAddressCity(primaryAddressCity:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPrimaryAddressCity/' + primaryAddressCity + '?' + attributes);
  }
  
  findOneByPrimaryAddressState(primaryAddressState:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPrimaryAddressState/' + primaryAddressState + '?' + attributes);
  }
  
  findOneByPrimaryAddressPostalcode(primaryAddressPostalcode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPrimaryAddressPostalcode/' + primaryAddressPostalcode + '?' + attributes);
  }
  
  findOneByPrimaryAddressCountry(primaryAddressCountry:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPrimaryAddressCountry/' + primaryAddressCountry + '?' + attributes);
  }
  
  findOneByAltAddressStreet(altAddressStreet:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAltAddressStreet/' + altAddressStreet + '?' + attributes);
  }
  
  findOneByAltAddressCity(altAddressCity:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAltAddressCity/' + altAddressCity + '?' + attributes);
  }
  
  findOneByAltAddressState(altAddressState:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAltAddressState/' + altAddressState + '?' + attributes);
  }
  
  findOneByAltAddressPostalcode(altAddressPostalcode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAltAddressPostalcode/' + altAddressPostalcode + '?' + attributes);
  }
  
  findOneByAltAddressCountry(altAddressCountry:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAltAddressCountry/' + altAddressCountry + '?' + attributes);
  }
  
  findOneByAssistant(assistant:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssistant/' + assistant + '?' + attributes);
  }
  
  findOneByAssistantPhone(assistantPhone:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssistantPhone/' + assistantPhone + '?' + attributes);
  }
  
  findOneByReferedBy(referedBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReferedBy/' + referedBy + '?' + attributes);
  }
  
  findOneByLeadSource(leadSource:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLeadSource/' + leadSource + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByAccountName(accountName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccountName/' + accountName + '?' + attributes);
  }
  
  findOneByOpportunityName(opportunityName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOpportunityName/' + opportunityName + '?' + attributes);
  }
  
  findOneByOpportunityAmount(opportunityAmount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOpportunityAmount/' + opportunityAmount + '?' + attributes);
  }
  
  findOneByPortalName(portalName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPortalName/' + portalName + '?' + attributes);
  }
  
  findOneByPortalApp(portalApp:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPortalApp/' + portalApp + '?' + attributes);
  }
  
  findOneByWebsite(website:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByWebsite/' + website + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByLawfulBasis(lawfulBasis:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLawfulBasis/' + lawfulBasis + '?' + attributes);
  }
  
  findOneByLeadSourceDescription(leadSourceDescription:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLeadSourceDescription/' + leadSourceDescription + '?' + attributes);
  }
  
  findOneByStatusDescription(statusDescription:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatusDescription/' + statusDescription + '?' + attributes);
  }
  
  findOneByAccountDescription(accountDescription:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccountDescription/' + accountDescription + '?' + attributes);
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
  
  findOneByDateReviewed(dateReviewed:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateReviewed/' + dateReviewed + '?' + attributes);
  }
  
  findOneByBirthdate(birthdate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBirthdate/' + birthdate + '?' + attributes);
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
  
  findOneByReportsToId(reportsToId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReportsToId/' + reportsToId + '?' + attributes);
  }
  
  findOneByContactId(contactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactId/' + contactId + '?' + attributes);
  }
  
  findOneByAccountId(accountId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccountId/' + accountId + '?' + attributes);
  }
  
  findOneByOpportunityId(opportunityId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOpportunityId/' + opportunityId + '?' + attributes);
  }
  
  findOneByCampaignId(campaignId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCampaignId/' + campaignId + '?' + attributes);
  }
  
  
  updateLeadById(id:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadById?id=' + id, lead);
  }
  
  updateLeadByDeleted(deleted:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByDeleted?deleted=' + deleted, lead);
  }
  
  updateLeadByDoNotCall(doNotCall:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByDoNotCall?doNotCall=' + doNotCall, lead);
  }
  
  updateLeadByConverted(converted:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByConverted?converted=' + converted, lead);
  }
  
  updateLeadBySalutation(salutation:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadBySalutation?salutation=' + salutation, lead);
  }
  
  updateLeadByFirstName(firstName:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByFirstName?firstName=' + firstName, lead);
  }
  
  updateLeadByLastName(lastName:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByLastName?lastName=' + lastName, lead);
  }
  
  updateLeadByTitle(title:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByTitle?title=' + title, lead);
  }
  
  updateLeadByPhoto(photo:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByPhoto?photo=' + photo, lead);
  }
  
  updateLeadByDepartment(department:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByDepartment?department=' + department, lead);
  }
  
  updateLeadByPhoneHome(phoneHome:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByPhoneHome?phoneHome=' + phoneHome, lead);
  }
  
  updateLeadByPhoneMobile(phoneMobile:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByPhoneMobile?phoneMobile=' + phoneMobile, lead);
  }
  
  updateLeadByPhoneWork(phoneWork:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByPhoneWork?phoneWork=' + phoneWork, lead);
  }
  
  updateLeadByPhoneOther(phoneOther:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByPhoneOther?phoneOther=' + phoneOther, lead);
  }
  
  updateLeadByPhoneFax(phoneFax:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByPhoneFax?phoneFax=' + phoneFax, lead);
  }
  
  updateLeadByLawfulBasisSource(lawfulBasisSource:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByLawfulBasisSource?lawfulBasisSource=' + lawfulBasisSource, lead);
  }
  
  updateLeadByPrimaryAddressStreet(primaryAddressStreet:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByPrimaryAddressStreet?primaryAddressStreet=' + primaryAddressStreet, lead);
  }
  
  updateLeadByPrimaryAddressCity(primaryAddressCity:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByPrimaryAddressCity?primaryAddressCity=' + primaryAddressCity, lead);
  }
  
  updateLeadByPrimaryAddressState(primaryAddressState:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByPrimaryAddressState?primaryAddressState=' + primaryAddressState, lead);
  }
  
  updateLeadByPrimaryAddressPostalcode(primaryAddressPostalcode:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByPrimaryAddressPostalcode?primaryAddressPostalcode=' + primaryAddressPostalcode, lead);
  }
  
  updateLeadByPrimaryAddressCountry(primaryAddressCountry:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByPrimaryAddressCountry?primaryAddressCountry=' + primaryAddressCountry, lead);
  }
  
  updateLeadByAltAddressStreet(altAddressStreet:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByAltAddressStreet?altAddressStreet=' + altAddressStreet, lead);
  }
  
  updateLeadByAltAddressCity(altAddressCity:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByAltAddressCity?altAddressCity=' + altAddressCity, lead);
  }
  
  updateLeadByAltAddressState(altAddressState:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByAltAddressState?altAddressState=' + altAddressState, lead);
  }
  
  updateLeadByAltAddressPostalcode(altAddressPostalcode:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByAltAddressPostalcode?altAddressPostalcode=' + altAddressPostalcode, lead);
  }
  
  updateLeadByAltAddressCountry(altAddressCountry:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByAltAddressCountry?altAddressCountry=' + altAddressCountry, lead);
  }
  
  updateLeadByAssistant(assistant:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByAssistant?assistant=' + assistant, lead);
  }
  
  updateLeadByAssistantPhone(assistantPhone:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByAssistantPhone?assistantPhone=' + assistantPhone, lead);
  }
  
  updateLeadByReferedBy(referedBy:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByReferedBy?referedBy=' + referedBy, lead);
  }
  
  updateLeadByLeadSource(leadSource:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByLeadSource?leadSource=' + leadSource, lead);
  }
  
  updateLeadByStatus(status:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByStatus?status=' + status, lead);
  }
  
  updateLeadByAccountName(accountName:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByAccountName?accountName=' + accountName, lead);
  }
  
  updateLeadByOpportunityName(opportunityName:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByOpportunityName?opportunityName=' + opportunityName, lead);
  }
  
  updateLeadByOpportunityAmount(opportunityAmount:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByOpportunityAmount?opportunityAmount=' + opportunityAmount, lead);
  }
  
  updateLeadByPortalName(portalName:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByPortalName?portalName=' + portalName, lead);
  }
  
  updateLeadByPortalApp(portalApp:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByPortalApp?portalApp=' + portalApp, lead);
  }
  
  updateLeadByWebsite(website:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByWebsite?website=' + website, lead);
  }
  
  updateLeadByDescription(description:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByDescription?description=' + description, lead);
  }
  
  updateLeadByLawfulBasis(lawfulBasis:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByLawfulBasis?lawfulBasis=' + lawfulBasis, lead);
  }
  
  updateLeadByLeadSourceDescription(leadSourceDescription:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByLeadSourceDescription?leadSourceDescription=' + leadSourceDescription, lead);
  }
  
  updateLeadByStatusDescription(statusDescription:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByStatusDescription?statusDescription=' + statusDescription, lead);
  }
  
  updateLeadByAccountDescription(accountDescription:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByAccountDescription?accountDescription=' + accountDescription, lead);
  }
  
  updateLeadByDateEntered(dateEntered:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByDateEntered?dateEntered=' + dateEntered, lead);
  }
  
  updateLeadByDateModified(dateModified:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByDateModified?dateModified=' + dateModified, lead);
  }
  
  updateLeadByDateReviewed(dateReviewed:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByDateReviewed?dateReviewed=' + dateReviewed, lead);
  }
  
  updateLeadByBirthdate(birthdate:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByBirthdate?birthdate=' + birthdate, lead);
  }
  
  updateLeadByModifiedUserId(modifiedUserId:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByModifiedUserId?modifiedUserId=' + modifiedUserId, lead);
  }
  
  updateLeadByCreatedBy(createdBy:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByCreatedBy?createdBy=' + createdBy, lead);
  }
  
  updateLeadByAssignedUserId(assignedUserId:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByAssignedUserId?assignedUserId=' + assignedUserId, lead);
  }
  
  updateLeadByReportsToId(reportsToId:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByReportsToId?reportsToId=' + reportsToId, lead);
  }
  
  updateLeadByContactId(contactId:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByContactId?contactId=' + contactId, lead);
  }
  
  updateLeadByAccountId(accountId:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByAccountId?accountId=' + accountId, lead);
  }
  
  updateLeadByOpportunityId(opportunityId:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByOpportunityId?opportunityId=' + opportunityId, lead);
  }
  
  updateLeadByCampaignId(campaignId:any, lead:Leads) {
      return this.http.post(this.basePath + '/updateLeadByCampaignId?campaignId=' + campaignId, lead);
  }
  
  
  
  //</es-section>
}
