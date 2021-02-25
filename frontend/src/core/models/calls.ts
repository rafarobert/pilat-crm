/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:01 GMT-0400 (Bolivia Time)
 * Time: 2:42:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:01 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:1
 *
 * Caution: es-sections will be replaced by script execution
 */

import {Sugarfeed} from "./sugarfeed";
import {AodIndexevent} from "./aodIndexevent";
import {Tracker} from "./tracker";
import {CallsCstm} from "./callsCstm";
import {CallsContacts} from "./callsContacts";
import {CallsUsers} from "./callsUsers";

//<es-section>

//</es-section>

export class Calls {

  //<es-section>
  
  id: string;
  
  
  
  duration_hours: number;
  
  duration_minutes: number;
  
  reminder_time: number;
  
  email_reminder_time: number;
  
  repeat_interval: number;
  
  repeat_count: number;
  
  
  
  name: string;
  
  parent_type: string;
  
  status: string;
  
  direction: string;
  
  outlook_id: string;
  
  repeat_type: string;
  
  repeat_dow: string;
  
  recurring_source: string;
  
  
  description: string;
  
  
  
  date_entered: Date;
  
  date_modified: Date;
  
  date_start: Date;
  
  date_end: Date;
  
  repeat_until: Date;
  
  
  
  modified_user_id: string;
  
  created_by: string;
  
  assigned_user_id: string;
  
  parent_id: string;
  
  repeat_parent_id: string;
  
  
  
  
  
  deleted: number;
  
  email_reminder_sent: number;
  
  
  

  //</es-section>
  
  callCallsCstm:CallsCstm;
  
  callSugarfeed:Sugarfeed;
  
  callAodIndexevent:AodIndexevent;
  
  callTracker:Tracker;
  
  callCallsContacts:CallsContacts;
  
  callCallsUsers:CallsUsers;
  
}
