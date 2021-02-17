/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:24 GMT-0400 (Bolivia Time)
 * Time: 2:44:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:24 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:24
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Users} from "../models/users";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/users`;
  dataChange: BehaviorSubject<Users[]> = new BehaviorSubject<Users[]>([]);
  userData: Users = new Users();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Users[] {
    return this.dataChange.value;
  }

  getDataUsers(): void {
    this.getAllUsers().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Users[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllUsers(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createUser(user:Users) {
    return this.http.post(this.basePath, user);
  }
  getUser(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateUser(id:any, user:Users) {
    return this.http.put(this.basePath + '/' + id, user);
  }
  deleteUser(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneBySystemGeneratedPassword(systemGeneratedPassword:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySystemGeneratedPassword/' + systemGeneratedPassword + '?' + attributes);
  }
  
  findOneBySugarLogin(sugarLogin:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySugarLogin/' + sugarLogin + '?' + attributes);
  }
  
  findOneByIsAdmin(isAdmin:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIsAdmin/' + isAdmin + '?' + attributes);
  }
  
  findOneByExternalAuthOnly(externalAuthOnly:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExternalAuthOnly/' + externalAuthOnly + '?' + attributes);
  }
  
  findOneByReceiveNotifications(receiveNotifications:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReceiveNotifications/' + receiveNotifications + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByPortalOnly(portalOnly:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPortalOnly/' + portalOnly + '?' + attributes);
  }
  
  findOneByShowOnEmployees(showOnEmployees:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByShowOnEmployees/' + showOnEmployees + '?' + attributes);
  }
  
  findOneByIsGroup(isGroup:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIsGroup/' + isGroup + '?' + attributes);
  }
  
  findOneByFactorAuth(factorAuth:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFactorAuth/' + factorAuth + '?' + attributes);
  }
  
  findOneByUserName(userName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserName/' + userName + '?' + attributes);
  }
  
  findOneByUserHash(userHash:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserHash/' + userHash + '?' + attributes);
  }
  
  findOneByAuthenticateId(authenticateId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAuthenticateId/' + authenticateId + '?' + attributes);
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
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByAddressStreet(addressStreet:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAddressStreet/' + addressStreet + '?' + attributes);
  }
  
  findOneByAddressCity(addressCity:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAddressCity/' + addressCity + '?' + attributes);
  }
  
  findOneByAddressState(addressState:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAddressState/' + addressState + '?' + attributes);
  }
  
  findOneByAddressCountry(addressCountry:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAddressCountry/' + addressCountry + '?' + attributes);
  }
  
  findOneByAddressPostalcode(addressPostalcode:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAddressPostalcode/' + addressPostalcode + '?' + attributes);
  }
  
  findOneByEmployeeStatus(employeeStatus:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmployeeStatus/' + employeeStatus + '?' + attributes);
  }
  
  findOneByMessengerId(messengerId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMessengerId/' + messengerId + '?' + attributes);
  }
  
  findOneByMessengerType(messengerType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMessengerType/' + messengerType + '?' + attributes);
  }
  
  findOneByFactorAuthInterface(factorAuthInterface:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFactorAuthInterface/' + factorAuthInterface + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByPwdLastChanged(pwdLastChanged:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPwdLastChanged/' + pwdLastChanged + '?' + attributes);
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
  
  findOneByReportsToId(reportsToId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReportsToId/' + reportsToId + '?' + attributes);
  }
  
  
  updateUserById(id:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserById?id=' + id, user);
  }
  
  updateUserBySystemGeneratedPassword(systemGeneratedPassword:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserBySystemGeneratedPassword?systemGeneratedPassword=' + systemGeneratedPassword, user);
  }
  
  updateUserBySugarLogin(sugarLogin:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserBySugarLogin?sugarLogin=' + sugarLogin, user);
  }
  
  updateUserByIsAdmin(isAdmin:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByIsAdmin?isAdmin=' + isAdmin, user);
  }
  
  updateUserByExternalAuthOnly(externalAuthOnly:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByExternalAuthOnly?externalAuthOnly=' + externalAuthOnly, user);
  }
  
  updateUserByReceiveNotifications(receiveNotifications:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByReceiveNotifications?receiveNotifications=' + receiveNotifications, user);
  }
  
  updateUserByDeleted(deleted:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByDeleted?deleted=' + deleted, user);
  }
  
  updateUserByPortalOnly(portalOnly:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByPortalOnly?portalOnly=' + portalOnly, user);
  }
  
  updateUserByShowOnEmployees(showOnEmployees:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByShowOnEmployees?showOnEmployees=' + showOnEmployees, user);
  }
  
  updateUserByIsGroup(isGroup:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByIsGroup?isGroup=' + isGroup, user);
  }
  
  updateUserByFactorAuth(factorAuth:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByFactorAuth?factorAuth=' + factorAuth, user);
  }
  
  updateUserByUserName(userName:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByUserName?userName=' + userName, user);
  }
  
  updateUserByUserHash(userHash:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByUserHash?userHash=' + userHash, user);
  }
  
  updateUserByAuthenticateId(authenticateId:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByAuthenticateId?authenticateId=' + authenticateId, user);
  }
  
  updateUserByFirstName(firstName:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByFirstName?firstName=' + firstName, user);
  }
  
  updateUserByLastName(lastName:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByLastName?lastName=' + lastName, user);
  }
  
  updateUserByTitle(title:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByTitle?title=' + title, user);
  }
  
  updateUserByPhoto(photo:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByPhoto?photo=' + photo, user);
  }
  
  updateUserByDepartment(department:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByDepartment?department=' + department, user);
  }
  
  updateUserByPhoneHome(phoneHome:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByPhoneHome?phoneHome=' + phoneHome, user);
  }
  
  updateUserByPhoneMobile(phoneMobile:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByPhoneMobile?phoneMobile=' + phoneMobile, user);
  }
  
  updateUserByPhoneWork(phoneWork:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByPhoneWork?phoneWork=' + phoneWork, user);
  }
  
  updateUserByPhoneOther(phoneOther:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByPhoneOther?phoneOther=' + phoneOther, user);
  }
  
  updateUserByPhoneFax(phoneFax:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByPhoneFax?phoneFax=' + phoneFax, user);
  }
  
  updateUserByStatus(status:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByStatus?status=' + status, user);
  }
  
  updateUserByAddressStreet(addressStreet:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByAddressStreet?addressStreet=' + addressStreet, user);
  }
  
  updateUserByAddressCity(addressCity:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByAddressCity?addressCity=' + addressCity, user);
  }
  
  updateUserByAddressState(addressState:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByAddressState?addressState=' + addressState, user);
  }
  
  updateUserByAddressCountry(addressCountry:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByAddressCountry?addressCountry=' + addressCountry, user);
  }
  
  updateUserByAddressPostalcode(addressPostalcode:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByAddressPostalcode?addressPostalcode=' + addressPostalcode, user);
  }
  
  updateUserByEmployeeStatus(employeeStatus:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByEmployeeStatus?employeeStatus=' + employeeStatus, user);
  }
  
  updateUserByMessengerId(messengerId:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByMessengerId?messengerId=' + messengerId, user);
  }
  
  updateUserByMessengerType(messengerType:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByMessengerType?messengerType=' + messengerType, user);
  }
  
  updateUserByFactorAuthInterface(factorAuthInterface:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByFactorAuthInterface?factorAuthInterface=' + factorAuthInterface, user);
  }
  
  updateUserByDescription(description:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByDescription?description=' + description, user);
  }
  
  updateUserByPwdLastChanged(pwdLastChanged:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByPwdLastChanged?pwdLastChanged=' + pwdLastChanged, user);
  }
  
  updateUserByDateEntered(dateEntered:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByDateEntered?dateEntered=' + dateEntered, user);
  }
  
  updateUserByDateModified(dateModified:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByDateModified?dateModified=' + dateModified, user);
  }
  
  updateUserByModifiedUserId(modifiedUserId:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByModifiedUserId?modifiedUserId=' + modifiedUserId, user);
  }
  
  updateUserByCreatedBy(createdBy:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByCreatedBy?createdBy=' + createdBy, user);
  }
  
  updateUserByReportsToId(reportsToId:any, user:Users) {
      return this.http.post(this.basePath + '/updateUserByReportsToId?reportsToId=' + reportsToId, user);
  }
  
  
  
  //</es-section>
}
