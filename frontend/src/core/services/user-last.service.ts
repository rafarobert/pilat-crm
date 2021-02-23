/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:19:44 GMT-0400 (Bolivia Time)
 * Time: 3:19:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:19:44 GMT-0400 (Bolivia Time)
 * Last time updated: 3:19:44
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {UsersLast} from "../models/usersLast";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class UserLastService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/users-last`;
  dataChange: BehaviorSubject<UsersLast[]> = new BehaviorSubject<UsersLast[]>([]);
  userLastData: UsersLast;

  constructor(private http: HttpClient) { }

  get data(): UsersLast[] {
    return this.dataChange.value;
  }

  getDataUsersLast(): void {
    this.getUsersLast().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:UsersLast[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getUsersLast(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createUserLast(userLast:UsersLast) {
    return this.http.post(this.basePath, userLast);
  }
  getUserLast(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateUserLast(id:any, userLast:UsersLast) {
    return this.http.put(this.basePath + '/' + id, userLast);
  }
  deleteUserLast(id:any) {
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
  
  
  updateUserLastById(id:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastById?id=' + id, userLast);
  }
  
  updateUserLastBySystemGeneratedPassword(systemGeneratedPassword:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastBySystemGeneratedPassword?systemGeneratedPassword=' + systemGeneratedPassword, userLast);
  }
  
  updateUserLastBySugarLogin(sugarLogin:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastBySugarLogin?sugarLogin=' + sugarLogin, userLast);
  }
  
  updateUserLastByIsAdmin(isAdmin:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByIsAdmin?isAdmin=' + isAdmin, userLast);
  }
  
  updateUserLastByExternalAuthOnly(externalAuthOnly:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByExternalAuthOnly?externalAuthOnly=' + externalAuthOnly, userLast);
  }
  
  updateUserLastByReceiveNotifications(receiveNotifications:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByReceiveNotifications?receiveNotifications=' + receiveNotifications, userLast);
  }
  
  updateUserLastByDeleted(deleted:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByDeleted?deleted=' + deleted, userLast);
  }
  
  updateUserLastByPortalOnly(portalOnly:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByPortalOnly?portalOnly=' + portalOnly, userLast);
  }
  
  updateUserLastByShowOnEmployees(showOnEmployees:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByShowOnEmployees?showOnEmployees=' + showOnEmployees, userLast);
  }
  
  updateUserLastByIsGroup(isGroup:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByIsGroup?isGroup=' + isGroup, userLast);
  }
  
  updateUserLastByFactorAuth(factorAuth:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByFactorAuth?factorAuth=' + factorAuth, userLast);
  }
  
  updateUserLastByUserName(userName:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByUserName?userName=' + userName, userLast);
  }
  
  updateUserLastByUserHash(userHash:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByUserHash?userHash=' + userHash, userLast);
  }
  
  updateUserLastByAuthenticateId(authenticateId:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByAuthenticateId?authenticateId=' + authenticateId, userLast);
  }
  
  updateUserLastByFirstName(firstName:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByFirstName?firstName=' + firstName, userLast);
  }
  
  updateUserLastByLastName(lastName:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByLastName?lastName=' + lastName, userLast);
  }
  
  updateUserLastByTitle(title:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByTitle?title=' + title, userLast);
  }
  
  updateUserLastByPhoto(photo:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByPhoto?photo=' + photo, userLast);
  }
  
  updateUserLastByDepartment(department:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByDepartment?department=' + department, userLast);
  }
  
  updateUserLastByPhoneHome(phoneHome:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByPhoneHome?phoneHome=' + phoneHome, userLast);
  }
  
  updateUserLastByPhoneMobile(phoneMobile:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByPhoneMobile?phoneMobile=' + phoneMobile, userLast);
  }
  
  updateUserLastByPhoneWork(phoneWork:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByPhoneWork?phoneWork=' + phoneWork, userLast);
  }
  
  updateUserLastByPhoneOther(phoneOther:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByPhoneOther?phoneOther=' + phoneOther, userLast);
  }
  
  updateUserLastByPhoneFax(phoneFax:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByPhoneFax?phoneFax=' + phoneFax, userLast);
  }
  
  updateUserLastByStatus(status:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByStatus?status=' + status, userLast);
  }
  
  updateUserLastByAddressStreet(addressStreet:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByAddressStreet?addressStreet=' + addressStreet, userLast);
  }
  
  updateUserLastByAddressCity(addressCity:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByAddressCity?addressCity=' + addressCity, userLast);
  }
  
  updateUserLastByAddressState(addressState:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByAddressState?addressState=' + addressState, userLast);
  }
  
  updateUserLastByAddressCountry(addressCountry:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByAddressCountry?addressCountry=' + addressCountry, userLast);
  }
  
  updateUserLastByAddressPostalcode(addressPostalcode:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByAddressPostalcode?addressPostalcode=' + addressPostalcode, userLast);
  }
  
  updateUserLastByEmployeeStatus(employeeStatus:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByEmployeeStatus?employeeStatus=' + employeeStatus, userLast);
  }
  
  updateUserLastByMessengerId(messengerId:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByMessengerId?messengerId=' + messengerId, userLast);
  }
  
  updateUserLastByMessengerType(messengerType:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByMessengerType?messengerType=' + messengerType, userLast);
  }
  
  updateUserLastByFactorAuthInterface(factorAuthInterface:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByFactorAuthInterface?factorAuthInterface=' + factorAuthInterface, userLast);
  }
  
  updateUserLastByDescription(description:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByDescription?description=' + description, userLast);
  }
  
  updateUserLastByPwdLastChanged(pwdLastChanged:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByPwdLastChanged?pwdLastChanged=' + pwdLastChanged, userLast);
  }
  
  updateUserLastByDateEntered(dateEntered:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByDateEntered?dateEntered=' + dateEntered, userLast);
  }
  
  updateUserLastByDateModified(dateModified:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByDateModified?dateModified=' + dateModified, userLast);
  }
  
  updateUserLastByModifiedUserId(modifiedUserId:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByModifiedUserId?modifiedUserId=' + modifiedUserId, userLast);
  }
  
  updateUserLastByCreatedBy(createdBy:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByCreatedBy?createdBy=' + createdBy, userLast);
  }
  
  updateUserLastByReportsToId(reportsToId:any, userLast:UsersLast) {
      return this.http.post(this.basePath + '/updateUserLastByReportsToId?reportsToId=' + reportsToId, userLast);
  }
  
  
  
  //</es-section>
}
