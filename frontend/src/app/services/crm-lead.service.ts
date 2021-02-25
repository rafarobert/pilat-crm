import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {Leads} from "../../core/models/leads";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {LeadsCstm} from "../../core/models/leadsCstm";
import {Calls} from "../../core/models/calls";
import {PilatParams} from "../../core/models/pilatParams";
import {CallsCstm} from "../../core/models/callsCstm";
import {Sugarfeed} from "../../core/models/sugarfeed";
import {AodIndexevent} from "../../core/models/aodIndexevent";
import {Tracker} from "../../core/models/tracker";
import {Users} from "../../core/models/users";
import {PilatAuth} from "../models/pilatAuth";
import {addDias} from "fechas";
import {PilatService} from "./pilat.service";

@Injectable({
  providedIn: 'root'
})
export class CrmLeadService {
  
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/crm/leads`;
  dataChange: BehaviorSubject<Leads[]> = new BehaviorSubject<Leads[]>([]);
  leadData: Leads = new Leads();
  private afterTomorrow: Date;
  private tomorrow: Date;
  
  constructor(
    private http: HttpClient,
    public pilatService: PilatService
  ) { }
  
  get data(): Leads[] {
    return this.dataChange.value;
  }
  
  getDataLeads(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getLeads(select,where,order,limit,offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Leads[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }
  
  setDataLead(lead:Leads):Leads {
  
    let date = new Date();
    let currentHour = date.getHours();
    let currentMinutes = date.getMinutes();
    let dayPad = date.getDate().pad(2);
    let monthPad = (date.getMonth()).pad(2);
    let yearPad = date.getFullYear();
    let strToday = `${dayPad}/${monthPad}/${yearPad}`;
    let strTomorrow = addDias(strToday,1);
    let strAfterTomorrow = addDias(strToday,2);
    let [day, month, year] = strTomorrow.split('/');
    let [dayT, monthT, yearT] = strTomorrow.split('/');
    let [dayAfterA, monthAfterA, yearAfterA] = strAfterTomorrow.split('/');
    this.tomorrow = new Date(parseInt(yearT), parseInt(monthT), parseInt(dayT),currentHour,currentMinutes);
    this.afterTomorrow = new Date(parseInt(yearAfterA), parseInt(monthAfterA), parseInt(dayAfterA),currentHour,currentMinutes);
    
    // before
    lead.date_entered = new Date();
    //lead.date_modified = lead.date_modified ? lead.date_modified : null;
    //lead.modified_user_id = lead.modified_user_id ? lead.modified_user_id : null;
    lead.created_by = this.pilatService.currentUser.id;
    //lead.description = lead.description ? lead.description : null;
    //lead.deleted = lead.deleted ? lead.deleted : null;
    lead.assigned_user_id = this.pilatService.currentUser.id;
    //lead.salutation = lead.salutation ? lead.salutation : null;
    //lead.first_name = lead.first_name ? lead.first_name : null;
    //lead.last_name = lead.last_name ? lead.last_name : null;
    //lead.title = lead.title ? lead.title : null;
    //lead.photo = lead.photo ? lead.photo : null;
    //lead.department = lead.department ? lead.department : null;
    //lead.do_not_call = lead.do_not_call ? lead.do_not_call : null;
    //lead.phone_home = lead.phone_home ? lead.phone_home : null;
    //lead.phone_mobile = lead.phone_mobile ? lead.phone_mobile : null;
    //lead.phone_work = lead.phone_work ? lead.phone_work : null;
    //lead.phone_other = lead.phone_other ? lead.phone_other : null;
    //lead.phone_fax = lead.phone_fax ? lead.phone_fax : null;
    //lead.lawful_basis = lead.lawful_basis ? lead.lawful_basis : null;
    //lead.date_reviewed = lead.date_reviewed ? lead.date_reviewed : null;
    // lead.lawful_basis_source = lead.lawful_basis_source ? lead.lawful_basis_source : null;
    // lead.primary_address_street = lead.primary_address_street ? lead.primary_address_street : null;
    // lead.primary_address_city = lead.primary_address_city ? lead.primary_address_city : null;
    // lead.primary_address_state = lead.primary_address_state ? lead.primary_address_state : null;
    // lead.primary_address_postalcode = lead.primary_address_postalcode ? lead.primary_address_postalcode : null;
    // lead.primary_address_country = lead.primary_address_country ? lead.primary_address_country : null;
    // lead.alt_address_street = lead.alt_address_street ? lead.alt_address_street : null;
    // lead.alt_address_city = lead.alt_address_city ? lead.alt_address_city : null;
    // lead.alt_address_state = lead.alt_address_state ? lead.alt_address_state : null;
    // lead.alt_address_postalcode = lead.alt_address_postalcode ? lead.alt_address_postalcode : null;
    // lead.alt_address_country = lead.alt_address_country ? lead.alt_address_country : null;
    // lead.assistant = lead.assistant ? lead.assistant : null;
    // lead.assistant_phone = lead.assistant_phone ? lead.assistant_phone : null;
    // lead.converted = lead.converted ? lead.converted : null;
    // lead.refered_by = lead.refered_by ? lead.refered_by : null;
    // lead.lead_source = lead.lead_source ? lead.lead_source : null;
    // lead.lead_source_description = lead.lead_source_description ? lead.lead_source_description : null;
    // lead.status = lead.status ? lead.status : null;
    // lead.status_description = lead.status_description ? lead.status_description : null;
    // lead.reports_to_id = lead.reports_to_id ? lead.reports_to_id : null;
    // lead.account_name = lead.account_name ? lead.account_name : null;
    // lead.account_description = lead.account_description ? lead.account_description : null;
    // lead.contact_id = lead.contact_id ? lead.contact_id : null;
    // lead.account_id = lead.account_id ? lead.account_id : null;
    // lead.opportunity_id = lead.opportunity_id ? lead.opportunity_id : null;
    // lead.opportunity_name = lead.opportunity_name ? lead.opportunity_name : null;
    // lead.opportunity_amount = lead.opportunity_amount ? lead.opportunity_amount : null;
    // lead.campaign_id = lead.campaign_id ? lead.campaign_id : null;
    // lead.birthdate = lead.birthdate ? lead.birthdate : null;
    // lead.portal_name = lead.portal_name ? lead.portal_name : null;
    // lead.portal_app = lead.portal_app ? lead.portal_app : null;
    // lead.website = lead.website ? lead.website : null;
    
    lead.leadLeadsCstm = new LeadsCstm();
    
    lead.leadCallsLeads.callLeadCalls.date_start = lead.leadCallsLeads.callLeadCalls.date_start ? lead.leadCallsLeads.callLeadCalls.date_start : this.tomorrow;
    lead.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_fecha_c = lead.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_fecha_c ? lead.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_fecha_c : this.tomorrow;
    
    lead.leadCallsLeads.callLeadCalls.callCallsUsers.user_id = this.pilatService.currentUser.id;
    
    if (lead.id) {
      
      lead.leadSugarfeed = new Sugarfeed();
      lead.leadSugarfeed.name = `<b>{this.CREATED_BY}</b> {leadSugarfeed.CREATED_${this.pilatService.parModuleLead.par_cod.toUpperCase()} [${this.pilatService.parModuleLead.par_cod.ucFirst()}:${lead.id}:${lead.first_name+' '+lead.last_name}]`;
      lead.leadSugarfeed.modified_user_id = this.pilatService.currentUser.id;
      lead.leadSugarfeed.created_by = this.pilatService.currentUser.id;
      lead.leadSugarfeed.description = null;
      lead.leadSugarfeed.deleted = 0;
      lead.leadSugarfeed.assigned_user_id = this.pilatService.currentUser.id;
      lead.leadSugarfeed.related_module = this.pilatService.parModuleLead.par_cod.ucFirst();
      lead.leadSugarfeed.related_id = lead.id;
      lead.leadSugarfeed.link_url = null;
      lead.leadSugarfeed.link_type = null;
      
      lead.leadAodIndexevent = new AodIndexevent();
      lead.leadAodIndexevent.name = '';
      lead.leadAodIndexevent.modified_user_id = this.pilatService.currentUser.id;
      lead.leadAodIndexevent.created_by = this.pilatService.currentUser.id;
      lead.leadAodIndexevent.description = '';
      lead.leadAodIndexevent.deleted = 0;
      lead.leadAodIndexevent.assigned_user_id = this.pilatService.currentUser.id;
      lead.leadAodIndexevent.error = null;
      lead.leadAodIndexevent.success = 1;
      lead.leadAodIndexevent.record_id = lead.id;
      lead.leadAodIndexevent.record_module = this.pilatService.parModuleLead.par_group;
      
      lead.leadTracker = new Tracker();
      lead.leadTracker.user_id = this.pilatService.currentUser.id;
      lead.leadTracker.module_name = this.pilatService.parModuleLead.par_group;
      lead.leadTracker.item_id = lead.id;
      lead.leadTracker.item_summary = lead.first_name+' '+lead.last_name;
      lead.leadTracker.action = 'editView';
      lead.leadTracker.session_id = this.pilatService.currentSessId;
      lead.leadTracker.visible = 1;
      lead.leadTracker.deleted = 0;
    }
    return lead;
  }
  
  getLeads(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  
  updateLead(id:any, lead:Leads) {
    return this.http.put(this.basePath + '/' + id, lead);
  }
  createLead(lead:Leads) {
    return this.http.post(this.basePath, lead);
  }
  getLead(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  deleteLead(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }
}
