/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:51 GMT-0400 (Bolivia Time)
 * Time: 2:43:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:51
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Prospects} from "../models/prospects";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProspectService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/prospects`;
  dataChange: BehaviorSubject<Prospects[]> = new BehaviorSubject<Prospects[]>([]);
  prospectData: Prospects = new Prospects();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Prospects[] {
    return this.dataChange.value;
  }

  getDataProspects(): void {
    this.getAllProspects().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Prospects[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProspects(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProspect(prospect:Prospects) {
    return this.http.post(this.basePath, prospect);
  }
  getProspect(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProspect(id:any, prospect:Prospects) {
    return this.http.put(this.basePath + '/' + id, prospect);
  }
  deleteProspect(id:any) {
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
  
  findOneByTrackerKey(trackerKey:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTrackerKey/' + trackerKey + '?' + attributes);
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
  
  findOneByAccountName(accountName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccountName/' + accountName + '?' + attributes);
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
  
  findOneByLeadId(leadId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLeadId/' + leadId + '?' + attributes);
  }
  
  findOneByCampaignId(campaignId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCampaignId/' + campaignId + '?' + attributes);
  }
  
  
  updateProspectById(id:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectById?id=' + id, prospect);
  }
  
  updateProspectByDeleted(deleted:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByDeleted?deleted=' + deleted, prospect);
  }
  
  updateProspectByDoNotCall(doNotCall:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByDoNotCall?doNotCall=' + doNotCall, prospect);
  }
  
  updateProspectByTrackerKey(trackerKey:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByTrackerKey?trackerKey=' + trackerKey, prospect);
  }
  
  updateProspectBySalutation(salutation:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectBySalutation?salutation=' + salutation, prospect);
  }
  
  updateProspectByFirstName(firstName:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByFirstName?firstName=' + firstName, prospect);
  }
  
  updateProspectByLastName(lastName:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByLastName?lastName=' + lastName, prospect);
  }
  
  updateProspectByTitle(title:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByTitle?title=' + title, prospect);
  }
  
  updateProspectByPhoto(photo:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByPhoto?photo=' + photo, prospect);
  }
  
  updateProspectByDepartment(department:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByDepartment?department=' + department, prospect);
  }
  
  updateProspectByPhoneHome(phoneHome:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByPhoneHome?phoneHome=' + phoneHome, prospect);
  }
  
  updateProspectByPhoneMobile(phoneMobile:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByPhoneMobile?phoneMobile=' + phoneMobile, prospect);
  }
  
  updateProspectByPhoneWork(phoneWork:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByPhoneWork?phoneWork=' + phoneWork, prospect);
  }
  
  updateProspectByPhoneOther(phoneOther:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByPhoneOther?phoneOther=' + phoneOther, prospect);
  }
  
  updateProspectByPhoneFax(phoneFax:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByPhoneFax?phoneFax=' + phoneFax, prospect);
  }
  
  updateProspectByLawfulBasisSource(lawfulBasisSource:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByLawfulBasisSource?lawfulBasisSource=' + lawfulBasisSource, prospect);
  }
  
  updateProspectByPrimaryAddressStreet(primaryAddressStreet:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByPrimaryAddressStreet?primaryAddressStreet=' + primaryAddressStreet, prospect);
  }
  
  updateProspectByPrimaryAddressCity(primaryAddressCity:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByPrimaryAddressCity?primaryAddressCity=' + primaryAddressCity, prospect);
  }
  
  updateProspectByPrimaryAddressState(primaryAddressState:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByPrimaryAddressState?primaryAddressState=' + primaryAddressState, prospect);
  }
  
  updateProspectByPrimaryAddressPostalcode(primaryAddressPostalcode:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByPrimaryAddressPostalcode?primaryAddressPostalcode=' + primaryAddressPostalcode, prospect);
  }
  
  updateProspectByPrimaryAddressCountry(primaryAddressCountry:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByPrimaryAddressCountry?primaryAddressCountry=' + primaryAddressCountry, prospect);
  }
  
  updateProspectByAltAddressStreet(altAddressStreet:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByAltAddressStreet?altAddressStreet=' + altAddressStreet, prospect);
  }
  
  updateProspectByAltAddressCity(altAddressCity:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByAltAddressCity?altAddressCity=' + altAddressCity, prospect);
  }
  
  updateProspectByAltAddressState(altAddressState:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByAltAddressState?altAddressState=' + altAddressState, prospect);
  }
  
  updateProspectByAltAddressPostalcode(altAddressPostalcode:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByAltAddressPostalcode?altAddressPostalcode=' + altAddressPostalcode, prospect);
  }
  
  updateProspectByAltAddressCountry(altAddressCountry:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByAltAddressCountry?altAddressCountry=' + altAddressCountry, prospect);
  }
  
  updateProspectByAssistant(assistant:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByAssistant?assistant=' + assistant, prospect);
  }
  
  updateProspectByAssistantPhone(assistantPhone:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByAssistantPhone?assistantPhone=' + assistantPhone, prospect);
  }
  
  updateProspectByAccountName(accountName:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByAccountName?accountName=' + accountName, prospect);
  }
  
  updateProspectByDescription(description:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByDescription?description=' + description, prospect);
  }
  
  updateProspectByLawfulBasis(lawfulBasis:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByLawfulBasis?lawfulBasis=' + lawfulBasis, prospect);
  }
  
  updateProspectByDateEntered(dateEntered:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByDateEntered?dateEntered=' + dateEntered, prospect);
  }
  
  updateProspectByDateModified(dateModified:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByDateModified?dateModified=' + dateModified, prospect);
  }
  
  updateProspectByDateReviewed(dateReviewed:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByDateReviewed?dateReviewed=' + dateReviewed, prospect);
  }
  
  updateProspectByBirthdate(birthdate:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByBirthdate?birthdate=' + birthdate, prospect);
  }
  
  updateProspectByModifiedUserId(modifiedUserId:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByModifiedUserId?modifiedUserId=' + modifiedUserId, prospect);
  }
  
  updateProspectByCreatedBy(createdBy:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByCreatedBy?createdBy=' + createdBy, prospect);
  }
  
  updateProspectByAssignedUserId(assignedUserId:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByAssignedUserId?assignedUserId=' + assignedUserId, prospect);
  }
  
  updateProspectByLeadId(leadId:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByLeadId?leadId=' + leadId, prospect);
  }
  
  updateProspectByCampaignId(campaignId:any, prospect:Prospects) {
      return this.http.post(this.basePath + '/updateProspectByCampaignId?campaignId=' + campaignId, prospect);
  }
  
  
  
  //</es-section>
}
