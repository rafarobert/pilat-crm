/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:46 GMT-0400 (Bolivia Time)
 * Time: 2:40:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:46 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:46
 *
 * Caution: es-sections will be replaced by script execution
 */

import {Sugarfeed} from "./sugarfeed";
import {AodIndexevent} from "./aodIndexevent";
import {AccountsOpportunities} from "./accountsOpportunities";
import {Tracker} from "./tracker";
import {AccountsContacts} from "./accountsContacts";
import {AccountsCstm} from "./accountsCstm";
import {AccountsAudit} from "./accountsAudit";

//<es-section>

//</es-section>

export class Accounts {

  //<es-section>
  
  id: string;
  
  
  
  
  
  name: string;
  
  account_type: string;
  
  industry: string;
  
  annual_revenue: string;
  
  phone_fax: string;
  
  billing_address_street: string;
  
  billing_address_city: string;
  
  billing_address_state: string;
  
  billing_address_postalcode: string;
  
  billing_address_country: string;
  
  rating: string;
  
  phone_office: string;
  
  phone_alternate: string;
  
  website: string;
  
  ownership: string;
  
  employees: string;
  
  ticker_symbol: string;
  
  shipping_address_street: string;
  
  shipping_address_city: string;
  
  shipping_address_state: string;
  
  shipping_address_postalcode: string;
  
  shipping_address_country: string;
  
  sic_code: string;
  
  
  description: string;
  
  
  
  date_entered: Date;
  
  date_modified: Date;
  
  
  
  modified_user_id: string;
  
  created_by: string;
  
  assigned_user_id: string;
  
  parent_id: string;
  
  campaign_id: string;
  
  
  
  
  
  deleted: number;
  
  
  

  //</es-section>
  
  accountAccountsCstm:AccountsCstm;
  
  accountSugarfeed:Sugarfeed;
  
  accountAodIndexevent:AodIndexevent;
  
  accountAccountsOpportunities:AccountsOpportunities;
  
  accountTracker:Tracker;
  
  accountAccountsContacts:AccountsContacts;
 
  accountAccountsAudit:AccountsAudit;
}
