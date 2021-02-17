/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:25 GMT-0400 (Bolivia Time)
 * Time: 2:43:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:25 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import {OpportunitiesCstm} from "./opportunitiesCstm";
import {Sugarfeed} from "./sugarfeed";
import {AodIndexevent} from "./aodIndexevent";
import {Tracker} from "./tracker";
import {OpportunitiesContacts} from "./opportunitiesContacts";
import {AccountsOpportunities} from "./accountsOpportunities";
import {AosQuotes} from "./aosQuotes";

//<es-section>

//</es-section>

export class Opportunities {

  //<es-section>
  
  id: string;
  
  
  
  
  
  name: string;
  
  opportunity_type: string;
  
  lead_source: string;
  
  next_step: string;
  
  sales_stage: string;
  
  
  description: string;
  
  
  
  date_entered: Date;
  
  date_modified: Date;
  
  date_closed: Date;
  
  
  
  modified_user_id: string;
  
  created_by: string;
  
  assigned_user_id: string;
  
  campaign_id: string;
  
  currency_id: string;
  
  
  
  
  amount: number;
  
  amount_usdollar: number;
  
  probability: number;
  
  
  deleted: number;
  
  
  

  //</es-section>
  
  opportunityAccountsOpportunities:AccountsOpportunities;
  
  opportunityAosQuotes:AosQuotes;
  
  opportunityOpportunitiesCstm:OpportunitiesCstm;
  
  opportunityOpportunitiesContacts:OpportunitiesContacts;
  
  opportunitySugarfeed:Sugarfeed;
  
  opportunityAodIndexevent:AodIndexevent;
  
  opportunityTracker: Tracker;
}
