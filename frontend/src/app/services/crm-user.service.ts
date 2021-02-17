import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {Users} from "../../core/models/users";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Leads} from "../../core/models/leads";
import {PilatAuth} from "../models/pilatAuth";
import {PilatParams} from "../../core/models/pilatParams";
import {UsersCstm} from "../../core/models/usersCstm";
import {Sugarfeed} from "../../core/models/sugarfeed";
import {AodIndexevent} from "../../core/models/aodIndexevent";
import {Tracker} from "../../core/models/tracker";

@Injectable({
  providedIn: 'root'
})
export class CrmUserService {
  
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/crm/users`;
  dataChange: BehaviorSubject<Users[]> = new BehaviorSubject<Users[]>([]);
  userData: Users = new Users();
  
  constructor(private http: HttpClient) { }
  
  get data(): Users[] {
    return this.dataChange.value;
  }
  
  setDataUser(user:Users, lead:Leads, pilatAuth:PilatAuth, moduleUsers:PilatParams = null):Users {
    // before
    // user.user_name = lead.user_name ? lead.user_name : null;
    // user.user_hash = lead.user_hash ? lead.user_hash : null;
    // user.system_generated_password = lead.system_generated_password ? lead.system_generated_password : null;
    // user.pwd_last_changed = lead.pwd_last_changed ? lead.pwd_last_changed : null;
    // user.authenticate_id = lead.authenticate_id ? lead.authenticate_id : null;
    // user.sugar_login = lead.sugar_login ? lead.sugar_login : null;
    user.first_name = lead.first_name ? lead.first_name : null;
    user.last_name = lead.last_name ? lead.last_name : null;
    // user.is_admin = lead.is_admin ? lead.is_admin : null;
    // user.external_auth_only = lead.external_auth_only ? lead.external_auth_only : null;
    // user.receive_notifications = lead.receive_notifications ? lead.receive_notifications : null;
    user.description = lead.description ? lead.description : null;
    user.date_entered = lead.date_entered ? lead.date_entered : null;
    user.date_modified = lead.date_modified ? lead.date_modified : null;
    user.modified_user_id = lead.modified_user_id ? lead.modified_user_id : null;
    user.created_by = lead.created_by ? lead.created_by : null;
    user.title = lead.title ? lead.title : null;
    user.photo = lead.photo ? lead.photo : null;
    user.department = lead.department ? lead.department : null;
    user.phone_home = lead.phone_home ? lead.phone_home : null;
    user.phone_mobile = lead.phone_mobile ? lead.phone_mobile : null;
    user.phone_work = lead.phone_work ? lead.phone_work : null;
    user.phone_other = lead.phone_other ? lead.phone_other : null;
    user.phone_fax = lead.phone_fax ? lead.phone_fax : null;
    user.status = lead.status ? lead.status : null;
    // user.address_street = lead.address_street ? lead.address_street : null;
    // user.address_city = lead.address_city ? lead.address_city : null;
    // user.address_state = lead.address_state ? lead.address_state : null;
    // user.address_country = lead.address_country ? lead.address_country : null;
    // user.address_postalcode = lead.address_postalcode ? lead.address_postalcode : null;
    user.deleted = lead.deleted ? lead.deleted : null;
    // user.portal_only = lead.portal_only ? lead.portal_only : null;
    // user.show_on_employees = lead.show_on_employees ? lead.show_on_employees : null;
    // user.employee_status = lead.employee_status ? lead.employee_status : null;
    // user.messenger_id = lead.messenger_id ? lead.messenger_id : null;
    // user.messenger_type = lead.messenger_type ? lead.messenger_type : null;
    user.reports_to_id = lead.reports_to_id ? lead.reports_to_id : null;
    // user.is_group = lead.is_group ? lead.is_group : null;
    // user.factor_auth = lead.factor_auth ? lead.factor_auth : null;
    // user.factor_auth_interface = lead.factor_auth_interface ? lead.factor_auth_interface : null;
    
    // user.joomla_account_id = lead.joomla_account_id;
    // user.portal_account_disabled = lead.portal_account_disabled;
    // user.portal_user_type = lead.portal_user_type;
    
    user.userUsersCstm = new UsersCstm();
    user.userUsersCstm.numero_documento_c = '';
    user.userUsersCstm.extension_documento_c = '';
    user.userUsersCstm.codigo_agenda_c = 0;
    
    if (user.id) {
      
      user.userSugarfeed = new Sugarfeed();
      user.userSugarfeed.name = `<b>{this.CREATED_BY}</b> {userSugarfeed.CREATED_${moduleUsers.par_cod.toUpperCase()} [${moduleUsers.par_cod.ucFirst()}:${user.id}:${user.first_name} ${user.last_name}]`;
      user.userSugarfeed.modified_user_id = pilatAuth.userLoggedId;
      user.userSugarfeed.created_by = pilatAuth.userLoggedId;
      user.userSugarfeed.description = null;
      user.userSugarfeed.deleted = 0;
      user.userSugarfeed.assigned_user_id = pilatAuth.userLoggedId;
      user.userSugarfeed.related_module = moduleUsers.par_cod.ucFirst();
      user.userSugarfeed.related_id = user.id;
      user.userSugarfeed.link_url = null;
      user.userSugarfeed.link_type = null;
      
      user.userAodIndexevent = new AodIndexevent();
      user.userAodIndexevent.name = '';
      user.userAodIndexevent.modified_user_id = pilatAuth.userLoggedId;
      user.userAodIndexevent.created_by = pilatAuth.userLoggedId;
      user.userAodIndexevent.description = '';
      user.userAodIndexevent.deleted = 0;
      user.userAodIndexevent.assigned_user_id = pilatAuth.userLoggedId;
      user.userAodIndexevent.error = null;
      user.userAodIndexevent.success = 1;
      user.userAodIndexevent.record_id = user.id;
      user.userAodIndexevent.record_module = moduleUsers.par_group;
      
      user.userTracker = new Tracker();
      user.userTracker.user_id = pilatAuth.userLoggedId;
      user.userTracker.module_name = moduleUsers.par_group;
      user.userTracker.item_id = user.id;
      user.userTracker.item_summary = user.first_name+' '+user.last_name;
      user.userTracker.action = 'editView';
      user.userTracker.session_id = pilatAuth.userSessId;
      user.userTracker.visible = 1;
      user.userTracker.deleted = 0;
    }
    return user;
  }
  
  getDataUsers(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllUsers(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Users[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }
  
  //<es-section>
  
  getAllUsers(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createUser(user:Users) {
    return this.http.post(this.basePath, user);
  }
  getUser(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateUser(id:any, user:Users) {
    return this.http.put(this.basePath + '/' + id, user);
  }
  deleteUser(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }
  
}
