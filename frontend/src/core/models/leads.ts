/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:06 GMT-0400 (Bolivia Time)
 * Time: 2:43:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:06 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:6
 *
 * Caution: es-sections will be replaced by script execution
 */

import {LeadsCstm} from "./leadsCstm";
import {LeadsAudit} from "./leadsAudit";
import {Sugarfeed} from "./sugarfeed";
import {AodIndexevent} from "./aodIndexevent";
import {Tracker} from "./tracker";
import {CallsLeads} from "./callsLeads";

//<es-section>

//</es-section>

export class Leads {

  //<es-section>
  
  id: string;
  
  
  
  
  
  salutation: string;
  
  first_name: string;
  
  last_name: string;
  
  title: string;
  
  photo: string;
  
  department: string;
  
  phone_home: string;
  
  phone_mobile: string;
  
  phone_work: string;
  
  phone_other: string;
  
  phone_fax: string;
  
  lawful_basis_source: string;
  
  primary_address_street: string;
  
  primary_address_city: string;
  
  primary_address_state: string;
  
  primary_address_postalcode: string;
  
  primary_address_country: string;
  
  alt_address_street: string;
  
  alt_address_city: string;
  
  alt_address_state: string;
  
  alt_address_postalcode: string;
  
  alt_address_country: string;
  
  assistant: string;
  
  assistant_phone: string;
  
  refered_by: string;
  
  lead_source: string;
  
  status: string;
  
  account_name: string;
  
  opportunity_name: string;
  
  opportunity_amount: string;
  
  portal_name: string;
  
  portal_app: string;
  
  website: string;
  
  
  description: string;
  
  lawful_basis: string;
  
  lead_source_description: string;
  
  status_description: string;
  
  account_description: string;
  
  
  
  date_entered: Date;
  
  date_modified: Date;
  
  date_reviewed: Date;
  
  birthdate: Date;
  
  
  
  modified_user_id: string;
  
  created_by: string;
  
  assigned_user_id: string;
  
  reports_to_id: string;
  
  contact_id: string;
  
  account_id: string;
  
  opportunity_id: string;
  
  campaign_id: string;
  
  
  
  
  
  deleted: number;
  
  do_not_call: number;
  
  converted: number;
  
  
  

  //</es-section>
  
  leadLeadsCstm:LeadsCstm;
  
  leadLeadsAudit:LeadsAudit;
  
  leadSugarfeed:Sugarfeed;
  
  leadAodIndexevent:AodIndexevent;
  
  leadTracker:Tracker;
  
  leadCallsLeads:CallsLeads;
}
