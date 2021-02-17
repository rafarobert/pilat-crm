import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {Calls} from "../../core/models/calls";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Leads} from "../../core/models/leads";
import {PilatParams} from "../../core/models/pilatParams";
import {CallsCstm} from "../../core/models/callsCstm";
import {Sugarfeed} from "../../core/models/sugarfeed";
import {AodIndexevent} from "../../core/models/aodIndexevent";
import {Tracker} from "../../core/models/tracker";
import {PilatAuth} from "../models/pilatAuth";

@Injectable({
  providedIn: 'root'
})
export class CrmCallService {
  
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/crm/calls`;
  dataChange: BehaviorSubject<Calls[]> = new BehaviorSubject<Calls[]>([]);
  callData: Calls = new Calls();
  
  constructor(private http: HttpClient) { }
  
  get data(): Calls[] {
    return this.dataChange.value;
  }
  
  setDataCall(call:Calls, lead:Leads, pilatAuth:PilatAuth, moduleCalls:PilatParams = null):Calls {
    // before
    call.name = lead.first_name ? lead.first_name + ' ' + lead.last_name : null;
    call.date_entered = lead.date_entered ? lead.date_entered : null;
    call.date_modified = lead.date_modified ? lead.date_modified : null;
    call.modified_user_id = lead.modified_user_id ? lead.modified_user_id : null;
    call.created_by = lead.created_by ? lead.created_by : null;
    call.description = lead.description ? lead.description : null;
    call.deleted = lead.deleted ? lead.deleted : null;
    call.assigned_user_id = lead.assigned_user_id ? lead.assigned_user_id : null;
    // call.duration_hours = lead.duration_hours ? lead.duration_hours : null;
    // call.duration_minutes = lead.duration_minutes ? lead.duration_minutes : null;
    // call.date_start = lead.date_start ? lead.date_start : null;
    // call.date_end = lead.date_end ? lead.date_end : null;
    // call.parent_type = lead.parent_type ? lead.parent_type : null;
    call.status = lead.status ? lead.status : null;
    // call.direction = lead.direction ? lead.direction : null;
    // call.parent_id = lead.parent_id ? lead.parent_id : null;
    // call.reminder_time = lead.reminder_time ? lead.reminder_time : null;
    // call.email_reminder_time = lead.email_reminder_time ? lead.email_reminder_time : null;
    // call.email_reminder_sent = lead.email_reminder_sent ? lead.email_reminder_sent : null;
    // call.outlook_id = lead.outlook_id ? lead.outlook_id : null;
    // call.repeat_type = lead.repeat_type ? lead.repeat_type : null;
    // call.repeat_interval = lead.repeat_interval ? lead.repeat_interval : null;
    // call.repeat_dow = lead.repeat_dow ? lead.repeat_dow : null;
    // call.repeat_until = lead.repeat_until ? lead.repeat_until : null;
    // call.repeat_count = lead.repeat_count ? lead.repeat_count : null;
    // call.repeat_parent_id = lead.repeat_parent_id ? lead.repeat_parent_id : null;
    // call.recurring_source = lead.recurring_source ? lead.recurring_source : null;
    
    call.callCallsCstm = new CallsCstm();
    call.callCallsCstm.message_id_c = '';
    
    if (call.id) {
      
      call.callSugarfeed = new Sugarfeed();
      call.callSugarfeed.name = `<b>{this.CREATED_BY}</b> {callSugarfeed.CREATED_${moduleCalls.par_cod.toUpperCase()} [${moduleCalls.par_cod.ucFirst()}:${call.id}:${call.name}]`;
      call.callSugarfeed.modified_user_id = pilatAuth.userLoggedId;
      call.callSugarfeed.created_by = pilatAuth.userLoggedId;
      call.callSugarfeed.description = null;
      call.callSugarfeed.deleted = 0;
      call.callSugarfeed.assigned_user_id = pilatAuth.userLoggedId;
      call.callSugarfeed.related_module = moduleCalls.par_cod.ucFirst();
      call.callSugarfeed.related_id = call.id;
      call.callSugarfeed.link_url = null;
      call.callSugarfeed.link_type = null;
      
      call.callAodIndexevent = new AodIndexevent();
      call.callAodIndexevent.name = '';
      call.callAodIndexevent.modified_user_id = pilatAuth.userLoggedId;
      call.callAodIndexevent.created_by = pilatAuth.userLoggedId;
      call.callAodIndexevent.description = '';
      call.callAodIndexevent.deleted = 0;
      call.callAodIndexevent.assigned_user_id = pilatAuth.userLoggedId;
      call.callAodIndexevent.error = null;
      call.callAodIndexevent.success = 1;
      call.callAodIndexevent.record_id = call.id;
      call.callAodIndexevent.record_module = moduleCalls.par_group;
      
      call.callTracker = new Tracker();
      call.callTracker.user_id = pilatAuth.userLoggedId;
      call.callTracker.module_name = moduleCalls.par_group;
      call.callTracker.item_id = call.id;
      call.callTracker.item_summary = call.name;
      call.callTracker.action = 'editView';
      call.callTracker.session_id = pilatAuth.userSessId;
      call.callTracker.visible = 1;
      call.callTracker.deleted = 0;
    }
    return call;
  }
  
  getDataCalls(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllCalls(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Calls[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }
  
  //<es-section>
  
  getAllCalls(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCall(call:Calls) {
    return this.http.post(this.basePath, call);
  }
  getCall(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCall(id:any, call:Calls) {
    return this.http.put(this.basePath + '/' + id, call);
  }
  deleteCall(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }
}
