/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:16 GMT-0400 (Bolivia Time)
 * Time: 2:42:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:16 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:16
 *
 * Caution: es-sections will be replaced by script execution
 */

import {ContactsCstm} from "./contactsCstm";
import {ContactsAudit} from "./contactsAudit";
import {Sugarfeed} from "./sugarfeed";
import {AodIndexevent} from "./aodIndexevent";
import {Tracker} from "./tracker";
import {EmailAddrBeanRel} from "./emailAddrBeanRel";
import {Emails} from "./emails";

//<es-section>

//</es-section>

export class Contacts {

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
  
  lead_source: string;
  
  joomla_account_id: string;
  
  portal_user_type: string;
  
  
  description: string;
  
  lawful_basis: string;
  
  
  
  date_entered: Date;
  
  date_modified: Date;
  
  date_reviewed: Date;
  
  birthdate: Date;
  
  
  
  modified_user_id: string;
  
  created_by: string;
  
  assigned_user_id: string;
  
  reports_to_id: string;
  
  campaign_id: string;
  
  
  
  
  
  deleted: number;
  
  do_not_call: number;
  
  portal_account_disabled: number;
  
  
  

  //</es-section>
  
  contactContactsCstm:ContactsCstm;
  
  contactEmailAddrBeanRel:EmailAddrBeanRel;
  
  contactContactsAudit:ContactsAudit;
  
  contactSugarfeed:Sugarfeed;
  
  contactAodIndexevent:AodIndexevent;
  
  contactTracker:Tracker;
  
  contactEmails:Emails;
}
