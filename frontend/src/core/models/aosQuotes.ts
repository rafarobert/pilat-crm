/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:49 GMT-0400 (Bolivia Time)
 * Time: 2:41:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:49 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import {Sugarfeed} from "./sugarfeed";
import {AodIndexevent} from "./aodIndexevent";
import {Tracker} from "./tracker";
import {AosQuotesCstm} from "./aosQuotesCstm";

//<es-section>

//</es-section>

export class AosQuotes {

  //<es-section>
  
  id: string;
  
  
  
  number: number;
  
  
  
  name: string;
  
  billing_address_street: string;
  
  billing_address_city: string;
  
  billing_address_state: string;
  
  billing_address_postalcode: string;
  
  billing_address_country: string;
  
  shipping_address_street: string;
  
  shipping_address_city: string;
  
  shipping_address_state: string;
  
  shipping_address_postalcode: string;
  
  shipping_address_country: string;
  
  shipping_tax: string;
  
  stage: string;
  
  term: string;
  
  approval_status: string;
  
  invoice_status: string;
  
  
  description: string;
  
  approval_issue: string;
  
  template_ddown_c: string;
  
  terms_c: string;
  
  
  
  date_entered: Date;
  
  date_modified: Date;
  
  expiration: Date;
  
  
  
  modified_user_id: string;
  
  created_by: string;
  
  assigned_user_id: string;
  
  billing_account_id: string;
  
  billing_contact_id: string;
  
  opportunity_id: string;
  
  currency_id: string;
  
  
  
  total_amt: number;
  
  total_amt_usdollar: number;
  
  subtotal_amount: number;
  
  subtotal_amount_usdollar: number;
  
  discount_amount: number;
  
  discount_amount_usdollar: number;
  
  tax_amount: number;
  
  tax_amount_usdollar: number;
  
  shipping_amount: number;
  
  shipping_amount_usdollar: number;
  
  shipping_tax_amt: number;
  
  shipping_tax_amt_usdollar: number;
  
  total_amount: number;
  
  total_amount_usdollar: number;
  
  subtotal_tax_amount: number;
  
  subtotal_tax_amount_usdollar: number;
  
  
  
  deleted: number;
  
  
  

  //</es-section>
  
  aoQuoteSugarfeed:Sugarfeed;
  
  aoQuoteAodIndexevent: AodIndexevent;
  
  aoQuoteTracker:Tracker;
  
  aoQuoteAosQuotesCstm:AosQuotesCstm;
  
}
