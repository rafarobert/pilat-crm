import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Opportunities} from "../../core/models/opportunities";
import {Contacts} from "../../core/models/contacts";
import {Leads} from "../../core/models/leads";
import {ContactsCstm} from "../../core/models/contactsCstm";
import {OpportunitiesCstm} from "../../core/models/opportunitiesCstm";
import {Accounts} from "../../core/models/accounts";
import {PilatParams} from "../../core/models/pilatParams";
import {Sugarfeed} from "../../core/models/sugarfeed";
import {AodIndexevent} from "../../core/models/aodIndexevent";
import {Tracker} from "../../core/models/tracker";
import {PilatAuth} from "../models/pilatAuth";
import {PilatService} from "./pilat.service";
import {addDias, addMeses} from "fechas";
import {Users} from "../../core/models/users";

@Injectable({
  providedIn: 'root'
})
export class CrmOpportunityService {
  
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/crm/opportunities`;
  dataChange: BehaviorSubject<Opportunities[]> = new BehaviorSubject<Opportunities[]>([]);
  opportunityData: Opportunities = new Opportunities();
  tomorrow:Date;
  afterTomorrow:Date;
  afterMonth:Date;
  
  constructor(
    private http: HttpClient,
    private pilatService: PilatService,
  ) { }
  
  get data(): Opportunities[] {
    return this.dataChange.value;
  }
  
  getDataOpportunities(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllOpportunities(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Opportunities[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }
  
  
  setDataOpportunity(opportunity:Opportunities, lead:Leads, salesStage, user:Users, moduleOpportunities:PilatParams):Opportunities {
  
    let date = new Date();
    
    let day = date.getDate().pad(2);
    let month = (date.getMonth()).pad(2);
    let year = date.getFullYear();
    
    let strToday = `${day}/${month}/${year}`;
    let strTomorrow = addDias(strToday,1);
    let strAfterTomorrow = addDias(strToday,2);
    let strAfterMonth = addMeses(strToday,1);
    
    let [dayT, monthT, yearT] = strTomorrow.split('/');
    let [dayAfterA, monthAfterA, yearAfterA] = strAfterTomorrow.split('/');
    let [dayAfterM, monthAfterM, yearAfterM] = strAfterMonth.split('/');
    
    this.tomorrow = new Date(parseInt(yearT), parseInt(monthT), parseInt(dayT));
    this.afterTomorrow = new Date(parseInt(yearAfterA), parseInt(monthAfterA), parseInt(dayAfterA));
    this.afterMonth = new Date(parseInt(yearAfterM), parseInt(monthAfterM), parseInt(dayAfterM));
  
    opportunity.id = lead.opportunity_id ? lead.opportunity_id : null;
    opportunity.date_entered = lead.date_entered ? lead.date_entered : null;
    opportunity.date_modified = lead.date_modified ? lead.date_modified : null;
    opportunity.modified_user_id = lead.modified_user_id ? lead.modified_user_id : null;
    opportunity.created_by = lead.created_by ? lead.created_by : null;
    opportunity.description = lead.description ? lead.description : null;
    opportunity.deleted = lead.deleted ? lead.deleted : null;
    opportunity.assigned_user_id = lead.assigned_user_id ? lead.assigned_user_id : null;
    opportunity.name = lead.first_name+' '+lead.last_name;
    opportunity.modified_user_id = user.id;
    opportunity.created_by = user.id;
    opportunity.description = '';
    opportunity.deleted = 0;
    opportunity.date_closed = this.afterMonth;
    opportunity.assigned_user_id = user.id;
    opportunity.opportunity_type = '';
    opportunity.campaign_id = '';
    opportunity.lead_source = '';
    opportunity.next_step = '';
    opportunity.sales_stage = salesStage;
    opportunity.probability = 50;
    opportunity.campaign_id = lead.campaign_id ? lead.campaign_id : null;
  
    opportunity.opportunityOpportunitiesCstm = new OpportunitiesCstm();
    opportunity.opportunityOpportunitiesCstm.jjwg_maps_lng_c = 0;
    opportunity.opportunityOpportunitiesCstm.jjwg_maps_lat_c = 0;
    opportunity.opportunityOpportunitiesCstm.jjwg_maps_geocode_status_c = '';
    opportunity.opportunityOpportunitiesCstm.jjwg_maps_address_c = '';
    
    opportunity.opportunityOpportunitiesContacts.opportunity_id = opportunity.id ? opportunity.id : null;
    opportunity.opportunityOpportunitiesContacts.contact_id = opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.id ? opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.id : null;
  
    opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.id = lead.contact_id ? lead.contact_id : null;
    opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.first_name = lead.first_name;
    opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.last_name = lead.last_name;
    opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.phone_mobile = lead.phone_mobile;
    opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.phone_work = lead.phone_work;
    opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.primary_address_street = lead.primary_address_street;
    opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.primary_address_city = lead.primary_address_city;
    opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.primary_address_state = lead.primary_address_state;
    opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.primary_address_country = lead.primary_address_country;
    // opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.title = '';
 
    opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm.id_c = lead.contact_id ? lead.contact_id : null;
    
    // opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel. = '';
    
    // opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses. = '';
    
    opportunity.opportunityAccountsOpportunities.opportunity_id = opportunity.id ? opportunity.id : null;
    opportunity.opportunityAccountsOpportunities.account_id = opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.id ? opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.id : null;
    
    opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.id = lead.account_id? lead.account_id : null;
    opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.name = lead.first_name + ' ' + lead.last_name;
    opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.phone_office = lead.phone_work;
    opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.phone_alternate= lead.phone_mobile;
    opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.description= lead.description;
    opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.billing_address_street = lead.primary_address_street;
    opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.billing_address_city = lead.primary_address_city;
    opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.billing_address_state = lead.primary_address_state;
    opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.billing_address_country = lead.primary_address_country;
  
    opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm.id_c = lead.account_id ? lead.account_id : null;
    opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm.extension_documento_c = lead.leadLeadsCstm.extension_documento_c;
    opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm.numero_documento_c = lead.leadLeadsCstm.numero_documento_c;
  
    opportunity.opportunityAosQuotes.name = lead.first_name+ ' ' + lead.last_name;
    opportunity.opportunityAosQuotes.description = lead.description;
    opportunity.opportunityAosQuotes.expiration = this.afterMonth;
    opportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.fecha_envio_programada_c = this.tomorrow;
    opportunity.opportunityAccountsOpportunities.account_id = opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.id ? opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.id : null;
    
    if (opportunity.id) {
      
      opportunity.opportunitySugarfeed = new Sugarfeed();
      opportunity.opportunitySugarfeed.name = `<b>{this.CREATED_BY}</b> {opportunitySugarfeed.CREATED_${moduleOpportunities.par_cod.toUpperCase()} [${moduleOpportunities.par_cod.ucFirst()}:${opportunity.id}:${opportunity.name}}]`;
      opportunity.opportunitySugarfeed.modified_user_id = user.id;
      opportunity.opportunitySugarfeed.created_by = user.id;
      opportunity.opportunitySugarfeed.description = null;
      opportunity.opportunitySugarfeed.deleted = 0;
      opportunity.opportunitySugarfeed.assigned_user_id = user.id;
      opportunity.opportunitySugarfeed.related_module = moduleOpportunities.par_cod.ucFirst();
      opportunity.opportunitySugarfeed.related_id = opportunity.id;
      opportunity.opportunitySugarfeed.link_url = null;
      opportunity.opportunitySugarfeed.link_type = null;
  
      opportunity.opportunityAodIndexevent = new AodIndexevent();
      opportunity.opportunityAodIndexevent.name = '';
      opportunity.opportunityAodIndexevent.modified_user_id = user.id;
      opportunity.opportunityAodIndexevent.created_by = user.id;
      opportunity.opportunityAodIndexevent.description = '';
      opportunity.opportunityAodIndexevent.deleted = 0;
      opportunity.opportunityAodIndexevent.assigned_user_id = user.id;
      opportunity.opportunityAodIndexevent.error = null;
      opportunity.opportunityAodIndexevent.success = 1;
      opportunity.opportunityAodIndexevent.record_id = opportunity.id;
      opportunity.opportunityAodIndexevent.record_module = moduleOpportunities.par_group;
  
      opportunity.opportunityTracker = new Tracker();
      opportunity.opportunityTracker.user_id = user.id;
      opportunity.opportunityTracker.module_name = moduleOpportunities.par_group;
      opportunity.opportunityTracker.item_id = opportunity.id;
      opportunity.opportunityTracker.item_summary = opportunity.name;
      opportunity.opportunityTracker.action = 'editView';
      opportunity.opportunityTracker.session_id = user.id;
      opportunity.opportunityTracker.visible = 1;
      opportunity.opportunityTracker.deleted = 0;
    }
    return opportunity;
  }
  
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
  
  updateOpportunity(id:any, opportunity:Opportunities) {
    return this.http.put(this.basePath + '/' + id, opportunity);
  }
  createOpportunity(opportunity:Opportunities) {
    return this.http.post(this.basePath, opportunity);
  }
  getOpportunity(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  deleteOpportunity(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }
}
