/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:31 GMT-0400 (Bolivia Time)
 * Time: 2:42:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:31 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:31
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {EmailsBeans} from "../models/emailsBeans";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EmailBeanService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/emails-beans`;
  dataChange: BehaviorSubject<EmailsBeans[]> = new BehaviorSubject<EmailsBeans[]>([]);
  emailBeanData: EmailsBeans = new EmailsBeans();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): EmailsBeans[] {
    return this.dataChange.value;
  }

  getDataEmailsBeans(): void {
    this.getAllEmailsBeans().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:EmailsBeans[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllEmailsBeans(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createEmailBean(emailBean:EmailsBeans) {
    return this.http.post(this.basePath, emailBean);
  }
  getEmailBean(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateEmailBean(id:any, emailBean:EmailsBeans) {
    return this.http.put(this.basePath + '/' + id, emailBean);
  }
  deleteEmailBean(id:any) {
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
  
  findOneByBeanModule(beanModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeanModule/' + beanModule + '?' + attributes);
  }
  
  findOneByCampaignData(campaignData:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCampaignData/' + campaignData + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  findOneByEmailId(emailId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailId/' + emailId + '?' + attributes);
  }
  
  findOneByBeanId(beanId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeanId/' + beanId + '?' + attributes);
  }
  
  
  updateEmailBeanById(id:any, emailBean:EmailsBeans) {
      return this.http.post(this.basePath + '/updateEmailBeanById?id=' + id, emailBean);
  }
  
  updateEmailBeanByDeleted(deleted:any, emailBean:EmailsBeans) {
      return this.http.post(this.basePath + '/updateEmailBeanByDeleted?deleted=' + deleted, emailBean);
  }
  
  updateEmailBeanByBeanModule(beanModule:any, emailBean:EmailsBeans) {
      return this.http.post(this.basePath + '/updateEmailBeanByBeanModule?beanModule=' + beanModule, emailBean);
  }
  
  updateEmailBeanByCampaignData(campaignData:any, emailBean:EmailsBeans) {
      return this.http.post(this.basePath + '/updateEmailBeanByCampaignData?campaignData=' + campaignData, emailBean);
  }
  
  updateEmailBeanByDateModified(dateModified:any, emailBean:EmailsBeans) {
      return this.http.post(this.basePath + '/updateEmailBeanByDateModified?dateModified=' + dateModified, emailBean);
  }
  
  updateEmailBeanByEmailId(emailId:any, emailBean:EmailsBeans) {
      return this.http.post(this.basePath + '/updateEmailBeanByEmailId?emailId=' + emailId, emailBean);
  }
  
  updateEmailBeanByBeanId(beanId:any, emailBean:EmailsBeans) {
      return this.http.post(this.basePath + '/updateEmailBeanByBeanId?beanId=' + beanId, emailBean);
  }
  
  
  
  //</es-section>
}
