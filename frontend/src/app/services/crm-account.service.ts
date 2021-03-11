import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Accounts} from "../../core/models/accounts";
import {AccountsCstm} from "../../core/models/accountsCstm";
import {Leads} from "../../core/models/leads";
import {Contacts} from "../../core/models/contacts";
import {AccountsContacts} from "../../core/models/accountsContacts";
import {PilatParams} from "../../core/models/pilatParams";
import {Sugarfeed} from "../../core/models/sugarfeed";
import {AodIndexevent} from "../../core/models/aodIndexevent";
import {Tracker} from "../../core/models/tracker";
import {PilatAuth} from "../models/pilatAuth";
import {Opportunities} from "../../core/models/opportunities";
import {AccountsOpportunities} from "../../core/models/accountsOpportunities";
import {PilatService} from "./pilat.service";

@Injectable({
  providedIn: 'root'
})
export class CrmAccountService {
  
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/crm/accounts`;
  dataChange: BehaviorSubject<Accounts[]> = new BehaviorSubject<Accounts[]>([]);
  accountData: Accounts = new Accounts();
  
  constructor(
    private http: HttpClient,
    public pilatService:PilatService
  ) { }
  
  get data(): Accounts[] {
    return this.dataChange.value;
  }
  
  setDataAccount(account:Accounts, contact:Contacts, lead:Leads, opportunity:Opportunities):Accounts {
    account.date_entered = contact.date_entered;
    account.date_modified = contact.date_modified;
    account.modified_user_id = contact.modified_user_id;
    account.created_by = contact.created_by;
    account.description = contact.description;
    account.deleted = contact.deleted;
    account.assigned_user_id = contact.assigned_user_id;
    account.phone_fax = contact.phone_fax;
    account.campaign_id = contact.campaign_id;
    account.website = lead.website;
    account.name = contact.first_name+' '+contact.last_name;
    account.date_entered = contact.date_entered;
    account.date_modified = contact.date_modified;
    account.modified_user_id = contact.modified_user_id;
    account.created_by = contact.created_by;
    account.description = contact.description;
    account.deleted = contact.deleted;
    account.assigned_user_id = contact.assigned_user_id;
    account.phone_fax = contact.phone_fax;
    account.phone_office = contact.phone_work;
    account.phone_alternate = contact.phone_other;
    // account.account_type = lead.account_type;
    // account.industry = contact.industry;
    // account.annual_revenue = contact.annual_revenue;
    // account.billing_address_state = contact.primary_address_state;
    // account.billing_address_postalcode = contact.primary_address_postalcode;
    // account.billing_address_street = contact.primary_address_street;
    // account.billing_address_city = contact.primary_address_city;
    // account.billing_address_state = contact.primary_address_state;
    // account.billing_address_country = contact.primary_address_country;
    // account.rating = lead.rating;
    // account.ownership = contact.ownership;
    // account.employees = contact.employees;
    // account.ticker_symbol = contact.ticker_symbol;
    // account.shipping_address_state = contact.primary_address_state;
    // account.shipping_address_postalcode = contact.primary_address_postalcode;
    // account.shipping_address_street = contact.primary_address_street;
    // account.shipping_address_city = contact.primary_address_city;
    // account.shipping_address_state = contact.primary_address_state;
    // account.shipping_address_country = contact.primary_address_country;
  
    account.accountAccountsCstm = new AccountsCstm();
    account.accountAccountsCstm.jjwg_maps_lng_c = lead.leadLeadsCstm.jjwg_maps_lng_c;
    account.accountAccountsCstm.jjwg_maps_lat_c = lead.leadLeadsCstm.jjwg_maps_lat_c;
    account.accountAccountsCstm.jjwg_maps_geocode_status_c = lead.leadLeadsCstm.jjwg_maps_geocode_status_c;
    account.accountAccountsCstm.jjwg_maps_address_c = lead.leadLeadsCstm.jjwg_maps_address_c;
    account.accountAccountsCstm.numero_documento_c = lead.leadLeadsCstm.numero_documento_c;
    account.accountAccountsCstm.extension_documento_c = lead.leadLeadsCstm.extension_documento_c;
  
  
    if (account.id) {
      
      if (contact && contact.id ) {
        account.accountAccountsContacts = new AccountsContacts();
        account.accountAccountsContacts.contact_id = contact.id;
        account.accountAccountsContacts.account_id = account.id;
        account.accountAccountsContacts.deleted = 0;
      }
      
      if (opportunity && opportunity.id) {
        account.accountAccountsOpportunities = new AccountsOpportunities();
        account.accountAccountsOpportunities.opportunity_id = opportunity.id;
        account.accountAccountsOpportunities.account_id = account.id;
        account.accountAccountsOpportunities.deleted = 0;
      }
    
      account.accountSugarfeed = new Sugarfeed();
      account.accountSugarfeed.name = `<b>{this.CREATED_BY}</b> {SugarFeed.CREATED_${this.pilatService.parModuleAccount.par_cod.toUpperCase()} [${this.pilatService.parModuleAccount.par_cod.ucFirst()}:${account.id}:${account.name}}]`;
      account.accountSugarfeed.modified_user_id = this.pilatService.currentUser.id;
      account.accountSugarfeed.created_by = this.pilatService.currentUser.id;
      account.accountSugarfeed.description = null;
      account.accountSugarfeed.deleted = 0;
      account.accountSugarfeed.assigned_user_id = this.pilatService.currentUser.id;
      account.accountSugarfeed.related_module = this.pilatService.parModuleAccount.par_cod.ucFirst();
      account.accountSugarfeed.related_id = account.id;
      account.accountSugarfeed.link_url = null;
      account.accountSugarfeed.link_type = null;
    
      account.accountAodIndexevent = new AodIndexevent();
      account.accountAodIndexevent.name = '';
      account.accountAodIndexevent.modified_user_id = this.pilatService.currentUser.id;
      account.accountAodIndexevent.created_by = this.pilatService.currentUser.id;
      account.accountAodIndexevent.description = '';
      account.accountAodIndexevent.deleted = 0;
      account.accountAodIndexevent.assigned_user_id = this.pilatService.currentUser.id;
      account.accountAodIndexevent.error = null;
      account.accountAodIndexevent.success = 1;
      account.accountAodIndexevent.record_id = account.id;
      account.accountAodIndexevent.record_module = this.pilatService.parModuleAccount.par_group;
    
      account.accountTracker = new Tracker();
      account.accountTracker.user_id = this.pilatService.currentUser.id;
      account.accountTracker.module_name = this.pilatService.parModuleAccount.par_group;
      account.accountTracker.item_id = account.id;
      account.accountTracker.item_summary = account.name;
      account.accountTracker.action = 'editView';
      account.accountTracker.session_id = this.pilatService.currentSessId;
      account.accountTracker.visible = 1;
      account.accountTracker.deleted = 0;
    }
    return account;
  }
  
  getDataAccounts(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllAccounts(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Accounts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }
  
  //<es-section>
  
  getAllAccounts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAccount(account:Accounts) {
    return this.http.post(this.basePath, account);
  }
  getAccount(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAccount(id:any, account:Accounts) {
    return this.http.put(this.basePath + '/' + id, account);
  }
  deleteAccount(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }
  
}
