/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:24 GMT-0400 (Bolivia Time)
 * Time: 2:44:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:24 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:24
 *
 * Caution: es-sections will be replaced by script execution
 */
import {UsersCstm} from "./usersCstm";
import {Sugarfeed} from "./sugarfeed";
import {AodIndexevent} from "./aodIndexevent";
import {Tracker} from "./tracker";

//<es-section>

//</es-section>

export class Users {

  //<es-section>
  
  id: string;
  
  
  
  
  
  user_name: string;
  
  user_hash: string;
  
  authenticate_id: string;
  
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
  
  status: string;
  
  address_street: string;
  
  address_city: string;
  
  address_state: string;
  
  address_country: string;
  
  address_postalcode: string;
  
  employee_status: string;
  
  messenger_id: string;
  
  messenger_type: string;
  
  factor_auth_interface: string;
  
  
  description: string;
  
  
  
  pwd_last_changed: Date;
  
  date_entered: Date;
  
  date_modified: Date;
  
  
  
  modified_user_id: string;
  
  created_by: string;
  
  reports_to_id: string;
  
  
  
  
  
  system_generated_password: number;
  
  sugar_login: number;
  
  is_admin: number;
  
  external_auth_only: number;
  
  receive_notifications: number;
  
  deleted: number;
  
  portal_only: number;
  
  show_on_employees: number;
  
  is_group: number;
  
  factor_auth: number;
  
  
  

  //</es-section>
  
  userUsersCstm:UsersCstm;
  
  userSugarfeed:Sugarfeed;
  
  userAodIndexevent:AodIndexevent;
  
  userTracker:Tracker;
}
