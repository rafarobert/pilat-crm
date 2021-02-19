import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {Contacts} from "../../core/models/contacts";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ContactsCstm} from "../../core/models/contactsCstm";
import {Leads} from "../../core/models/leads";
import {PilatParams} from "../../core/models/pilatParams";
import {ContactsAudit} from "../../core/models/contactsAudit";
import {Sugarfeed} from "../../core/models/sugarfeed";
import {AodIndexevent} from "../../core/models/aodIndexevent";
import {Tracker} from "../../core/models/tracker";
import {PilatAuth} from "../models/pilatAuth";

@Injectable({
  providedIn: 'root'
})
export class CrmContactService {
  
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/crm/contacts`;
  dataChange: BehaviorSubject<Contacts[]> = new BehaviorSubject<Contacts[]>([]);
  contactData: Contacts = new Contacts();
  
  constructor(private http: HttpClient) { }
  
  get data(): Contacts[] {
    return this.dataChange.value;
  }
  
  setDataContact(contact:Contacts, lead:Leads, pilatAuth:PilatAuth, moduleContacts:PilatParams = null):Contacts {
    // before
    contact.date_entered = lead.date_entered ? lead.date_entered : null;
    contact.date_modified = lead.date_modified ? lead.date_modified : null;
    contact.modified_user_id = lead.modified_user_id ? lead.modified_user_id : null;
    contact.created_by = lead.created_by ? lead.created_by : null;
    contact.description = lead.description ? lead.description : null;
    contact.deleted = lead.deleted ? lead.deleted : null;
    contact.assigned_user_id = lead.assigned_user_id ? lead.assigned_user_id : null;
    contact.first_name = lead.first_name ? lead.first_name : null;
    contact.last_name = lead.last_name ? lead.last_name : null;
    contact.title = lead.title ? lead.title : null;
    contact.photo = lead.photo ? lead.photo : null;
    contact.department = lead.department ? lead.department : null;
    contact.do_not_call = lead.do_not_call ? lead.do_not_call : null;
    contact.phone_home = lead.phone_home ? lead.phone_home : null;
    contact.phone_mobile = lead.phone_mobile ? lead.phone_mobile : null;
    contact.phone_work = lead.phone_work ? lead.phone_work : null;
    contact.phone_other = lead.phone_other ? lead.phone_other : null;
    contact.phone_fax = lead.phone_fax ? lead.phone_fax : null;
    contact.lawful_basis = lead.lawful_basis ? lead.lawful_basis : null;
    contact.date_reviewed = lead.date_reviewed ? lead.date_reviewed : null;
    contact.lawful_basis_source = lead.lawful_basis_source ? lead.lawful_basis_source : null;
    contact.primary_address_street = lead.primary_address_street ? lead.primary_address_street : null;
    contact.primary_address_city = lead.primary_address_city ? lead.primary_address_city : null;
    contact.primary_address_state = lead.primary_address_state ? lead.primary_address_state : null;
    contact.primary_address_postalcode = lead.primary_address_postalcode ? lead.primary_address_postalcode : null;
    contact.primary_address_country = lead.primary_address_country ? lead.primary_address_country : null;
    contact.alt_address_street = lead.alt_address_street ? lead.alt_address_street : null;
    contact.alt_address_city = lead.alt_address_city ? lead.alt_address_city : null;
    contact.alt_address_state = lead.alt_address_state ? lead.alt_address_state : null;
    contact.alt_address_postalcode = lead.alt_address_postalcode ? lead.alt_address_postalcode : null;
    contact.alt_address_country = lead.alt_address_country ? lead.alt_address_country : null;
    contact.assistant = lead.assistant ? lead.assistant : null;
    contact.assistant_phone = lead.assistant_phone ? lead.assistant_phone : null;
    contact.reports_to_id = lead.reports_to_id ? lead.reports_to_id : null;
    contact.campaign_id = lead.campaign_id ? lead.campaign_id : null;
    contact.birthdate = lead.birthdate ? lead.birthdate : null;
  
    // contact.joomla_account_id = lead.joomla_account_id;
    // contact.portal_account_disabled = lead.portal_account_disabled;
    // contact.portal_user_type = lead.portal_user_type;
  
    contact.contactContactsCstm = new ContactsCstm();
    contact.contactContactsCstm.jjwg_maps_lng_c = 0;
    contact.contactContactsCstm.jjwg_maps_lat_c = 0;
    contact.contactContactsCstm.jjwg_maps_geocode_status_c = '';
    contact.contactContactsCstm.jjwg_maps_address_c = '';
  
    if (contact.id) {
      
      contact.contactContactsAudit = new ContactsAudit();
      contact.contactContactsAudit.parent_id = contact.id;
      contact.contactContactsAudit.created_by = pilatAuth.userLoggedId;
    
      contact.contactSugarfeed = new Sugarfeed();
      contact.contactSugarfeed.name = `<b>{this.CREATED_BY}</b> {contactSugarfeed.CREATED_${moduleContacts.par_cod.toUpperCase()} [${moduleContacts.par_cod.ucFirst()}:${contact.id}:${contact.first_name} ${contact.last_name}]`;
      contact.contactSugarfeed.modified_user_id = pilatAuth.userLoggedId;
      contact.contactSugarfeed.created_by = pilatAuth.userLoggedId;
      contact.contactSugarfeed.description = null;
      contact.contactSugarfeed.deleted = 0;
      contact.contactSugarfeed.assigned_user_id = pilatAuth.userLoggedId;
      contact.contactSugarfeed.related_module = moduleContacts.par_cod.ucFirst();
      contact.contactSugarfeed.related_id = contact.id;
      contact.contactSugarfeed.link_url = null;
      contact.contactSugarfeed.link_type = null;
    
      contact.contactAodIndexevent = new AodIndexevent();
      contact.contactAodIndexevent.name = '';
      contact.contactAodIndexevent.modified_user_id = pilatAuth.userLoggedId;
      contact.contactAodIndexevent.created_by = pilatAuth.userLoggedId;
      contact.contactAodIndexevent.description = '';
      contact.contactAodIndexevent.deleted = 0;
      contact.contactAodIndexevent.assigned_user_id = pilatAuth.userLoggedId;
      contact.contactAodIndexevent.error = null;
      contact.contactAodIndexevent.success = 1;
      contact.contactAodIndexevent.record_id = contact.id;
      contact.contactAodIndexevent.record_module = moduleContacts.par_group;
    
      contact.contactTracker = new Tracker();
      contact.contactTracker.user_id = pilatAuth.userLoggedId;
      contact.contactTracker.module_name = moduleContacts.par_group;
      contact.contactTracker.item_id = contact.id;
      contact.contactTracker.item_summary = contact.first_name+' '+contact.last_name;
      contact.contactTracker.action = 'editView';
      contact.contactTracker.session_id = pilatAuth.userSessId;
      contact.contactTracker.visible = 1;
      contact.contactTracker.deleted = 0;
    }
    return contact;
  }
  
  getDataContacts(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllContacts(select, where, order, limit, offset).subscribe(async (res) => {
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

}
