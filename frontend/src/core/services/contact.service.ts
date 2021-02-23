/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:16 GMT-0400 (Bolivia Time)
 * Time: 2:42:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:16 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:16
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Contacts} from "../models/contacts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/contacts`;
  dataChange: BehaviorSubject<Contacts[]> = new BehaviorSubject<Contacts[]>([]);
  contactData: Contacts = new Contacts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Contacts[] {
    return this.dataChange.value;
  }

  getDataContacts(): void {
    this.getAllContacts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Contacts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllContacts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createContact(contact:Contacts) {
    return this.http.post(this.basePath, contact);
  }
  getContact(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateContact(id:any, contact:Contacts) {
    return this.http.put(this.basePath + '/' + id, contact);
  }
  deleteContact(id:any) {
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
  
  findOneByPortalAccountDisabled(portalAccountDisabled:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPortalAccountDisabled/' + portalAccountDisabled + '?' + attributes);
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
  
  findOneByLeadSource(leadSource:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLeadSource/' + leadSource + '?' + attributes);
  }
  
  findOneByJoomlaAccountId(joomlaAccountId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJoomlaAccountId/' + joomlaAccountId + '?' + attributes);
  }
  
  findOneByPortalUserType(portalUserType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPortalUserType/' + portalUserType + '?' + attributes);
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
  
  findOneByCampaignId(campaignId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCampaignId/' + campaignId + '?' + attributes);
  }
  
  
  updateContactById(id:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactById?id=' + id, contact);
  }
  
  updateContactByDeleted(deleted:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByDeleted?deleted=' + deleted, contact);
  }
  
  updateContactByDoNotCall(doNotCall:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByDoNotCall?doNotCall=' + doNotCall, contact);
  }
  
  updateContactByPortalAccountDisabled(portalAccountDisabled:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByPortalAccountDisabled?portalAccountDisabled=' + portalAccountDisabled, contact);
  }
  
  updateContactBySalutation(salutation:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactBySalutation?salutation=' + salutation, contact);
  }
  
  updateContactByFirstName(firstName:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByFirstName?firstName=' + firstName, contact);
  }
  
  updateContactByLastName(lastName:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByLastName?lastName=' + lastName, contact);
  }
  
  updateContactByTitle(title:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByTitle?title=' + title, contact);
  }
  
  updateContactByPhoto(photo:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByPhoto?photo=' + photo, contact);
  }
  
  updateContactByDepartment(department:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByDepartment?department=' + department, contact);
  }
  
  updateContactByPhoneHome(phoneHome:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByPhoneHome?phoneHome=' + phoneHome, contact);
  }
  
  updateContactByPhoneMobile(phoneMobile:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByPhoneMobile?phoneMobile=' + phoneMobile, contact);
  }
  
  updateContactByPhoneWork(phoneWork:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByPhoneWork?phoneWork=' + phoneWork, contact);
  }
  
  updateContactByPhoneOther(phoneOther:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByPhoneOther?phoneOther=' + phoneOther, contact);
  }
  
  updateContactByPhoneFax(phoneFax:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByPhoneFax?phoneFax=' + phoneFax, contact);
  }
  
  updateContactByLawfulBasisSource(lawfulBasisSource:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByLawfulBasisSource?lawfulBasisSource=' + lawfulBasisSource, contact);
  }
  
  updateContactByPrimaryAddressStreet(primaryAddressStreet:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByPrimaryAddressStreet?primaryAddressStreet=' + primaryAddressStreet, contact);
  }
  
  updateContactByPrimaryAddressCity(primaryAddressCity:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByPrimaryAddressCity?primaryAddressCity=' + primaryAddressCity, contact);
  }
  
  updateContactByPrimaryAddressState(primaryAddressState:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByPrimaryAddressState?primaryAddressState=' + primaryAddressState, contact);
  }
  
  updateContactByPrimaryAddressPostalcode(primaryAddressPostalcode:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByPrimaryAddressPostalcode?primaryAddressPostalcode=' + primaryAddressPostalcode, contact);
  }
  
  updateContactByPrimaryAddressCountry(primaryAddressCountry:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByPrimaryAddressCountry?primaryAddressCountry=' + primaryAddressCountry, contact);
  }
  
  updateContactByAltAddressStreet(altAddressStreet:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByAltAddressStreet?altAddressStreet=' + altAddressStreet, contact);
  }
  
  updateContactByAltAddressCity(altAddressCity:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByAltAddressCity?altAddressCity=' + altAddressCity, contact);
  }
  
  updateContactByAltAddressState(altAddressState:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByAltAddressState?altAddressState=' + altAddressState, contact);
  }
  
  updateContactByAltAddressPostalcode(altAddressPostalcode:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByAltAddressPostalcode?altAddressPostalcode=' + altAddressPostalcode, contact);
  }
  
  updateContactByAltAddressCountry(altAddressCountry:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByAltAddressCountry?altAddressCountry=' + altAddressCountry, contact);
  }
  
  updateContactByAssistant(assistant:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByAssistant?assistant=' + assistant, contact);
  }
  
  updateContactByAssistantPhone(assistantPhone:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByAssistantPhone?assistantPhone=' + assistantPhone, contact);
  }
  
  updateContactByLeadSource(leadSource:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByLeadSource?leadSource=' + leadSource, contact);
  }
  
  updateContactByJoomlaAccountId(joomlaAccountId:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByJoomlaAccountId?joomlaAccountId=' + joomlaAccountId, contact);
  }
  
  updateContactByPortalUserType(portalUserType:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByPortalUserType?portalUserType=' + portalUserType, contact);
  }
  
  updateContactByDescription(description:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByDescription?description=' + description, contact);
  }
  
  updateContactByLawfulBasis(lawfulBasis:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByLawfulBasis?lawfulBasis=' + lawfulBasis, contact);
  }
  
  updateContactByDateEntered(dateEntered:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByDateEntered?dateEntered=' + dateEntered, contact);
  }
  
  updateContactByDateModified(dateModified:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByDateModified?dateModified=' + dateModified, contact);
  }
  
  updateContactByDateReviewed(dateReviewed:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByDateReviewed?dateReviewed=' + dateReviewed, contact);
  }
  
  updateContactByBirthdate(birthdate:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByBirthdate?birthdate=' + birthdate, contact);
  }
  
  updateContactByModifiedUserId(modifiedUserId:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByModifiedUserId?modifiedUserId=' + modifiedUserId, contact);
  }
  
  updateContactByCreatedBy(createdBy:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByCreatedBy?createdBy=' + createdBy, contact);
  }
  
  updateContactByAssignedUserId(assignedUserId:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByAssignedUserId?assignedUserId=' + assignedUserId, contact);
  }
  
  updateContactByReportsToId(reportsToId:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByReportsToId?reportsToId=' + reportsToId, contact);
  }
  
  updateContactByCampaignId(campaignId:any, contact:Contacts) {
      return this.http.post(this.basePath + '/updateContactByCampaignId?campaignId=' + campaignId, contact);
  }
  
  
  
  //</es-section>
}
