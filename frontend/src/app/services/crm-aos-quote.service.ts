import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {AosQuotes} from "../../core/models/aosQuotes";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Leads} from "../../core/models/leads";
import {Accounts} from "../../core/models/accounts";
import {PilatParams} from "../../core/models/pilatParams";
import {AosQuotesCstm} from "../../core/models/aosQuotesCstm";
import {Sugarfeed} from "../../core/models/sugarfeed";
import {AodIndexevent} from "../../core/models/aodIndexevent";
import {Tracker} from "../../core/models/tracker";
import {OpportunitiesCstm} from "../../core/models/opportunitiesCstm";
import {Opportunities} from "../../core/models/opportunities";
import {PilatAuth} from "../models/pilatAuth";
import {PilatService} from "./pilat.service";

@Injectable({
  providedIn: 'root'
})
export class CrmAosQuoteService {
  
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/crm/aos-quotes`;
  dataChange: BehaviorSubject<AosQuotes[]> = new BehaviorSubject<AosQuotes[]>([]);
  aosQuoteData: AosQuotes = new AosQuotes();
  
  constructor(
    private http: HttpClient,
    public pilatService: PilatService
  ) { }
  
  get data(): AosQuotes[] {
    return this.dataChange.value;
  }
  
  getDataAosQuotes(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllAosQuotes(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AosQuotes[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }
  
  setDataAosQuote(aoQuote:AosQuotes, lead:Leads, opportunity:Opportunities, account:Accounts):AosQuotes {
    // before
    aoQuote.date_entered = lead.date_entered ? lead.date_entered : null;
    aoQuote.date_modified = lead.date_modified ? lead.date_modified : null;
    aoQuote.modified_user_id = lead.modified_user_id ? lead.modified_user_id : null;
    aoQuote.created_by = lead.created_by ? lead.created_by : null;
    aoQuote.description = lead.description ? lead.description : null;
    aoQuote.deleted = lead.deleted ? lead.deleted : null;
    aoQuote.assigned_user_id = lead.assigned_user_id ? lead.assigned_user_id : null;
    
    aoQuote.name = opportunity.name;
    aoQuote.modified_user_id = this.pilatService.currentUser.id;
    aoQuote.created_by = this.pilatService.currentUser.id;
    aoQuote.description = '';
    aoQuote.deleted = 0;
    aoQuote.assigned_user_id = this.pilatService.currentUser.id;
    aoQuote.opportunity_id = opportunity.id;
    aoQuote.billing_account_id = account.id;
    aoQuote.total_amount = opportunity.amount;
    aoQuote.currency_id = opportunity.currency_id;
    // aoQuote.opportunity_type = '';
    // aoQuote.campaign_id = '';
    // aoQuote.lead_source = '';
    aoQuote.total_amount = opportunity.amount;
    // aoQuote.amount_usdollar = 0;
    aoQuote.currency_id = opportunity.currency_id;;
    // aoQuote.next_step = '';
    // aoQuote.sales_stage = salesStage;
    // aoQuote.probability = 50;
    // aoQuote.campaign_id = lead.campaign_id ? lead.campaign_id : null;
    
    
    
    aoQuote.aoQuoteAosQuotesCstm = new AosQuotesCstm();
    aoQuote.aoQuoteAosQuotesCstm.ubicacion_c = '';
    aoQuote.aoQuoteAosQuotesCstm.lbl_superficie_c = 0;
    aoQuote.aoQuoteAosQuotesCstm.lbl_tipoventa_c = '';
    aoQuote.aoQuoteAosQuotesCstm.lbl_cuotainicial_c = 0;
    
    if (aoQuote.id) {
      
      aoQuote.aoQuoteSugarfeed = new Sugarfeed();
      aoQuote.aoQuoteSugarfeed.name = `<b>{this.CREATED_BY}</b> {aoQuoteSugarfeed.CREATED_${this.pilatService.parModuleAoQuote.par_cod.toUpperCase()} [${this.pilatService.parModuleAoQuote.par_cod.ucFirst()}:${aoQuote.id}:${aoQuote.name}}]`;
      aoQuote.aoQuoteSugarfeed.modified_user_id = this.pilatService.currentUser.id;
      aoQuote.aoQuoteSugarfeed.created_by = this.pilatService.currentUser.id;
      aoQuote.aoQuoteSugarfeed.description = null;
      aoQuote.aoQuoteSugarfeed.deleted = 0;
      aoQuote.aoQuoteSugarfeed.assigned_user_id = this.pilatService.currentUser.id;
      aoQuote.aoQuoteSugarfeed.related_module = this.pilatService.parModuleAoQuote.par_cod.ucFirst();
      aoQuote.aoQuoteSugarfeed.related_id = aoQuote.id;
      aoQuote.aoQuoteSugarfeed.link_url = null;
      aoQuote.aoQuoteSugarfeed.link_type = null;
      
      aoQuote.aoQuoteAodIndexevent = new AodIndexevent();
      aoQuote.aoQuoteAodIndexevent.name = '';
      aoQuote.aoQuoteAodIndexevent.modified_user_id = this.pilatService.currentUser.id;
      aoQuote.aoQuoteAodIndexevent.created_by = this.pilatService.currentUser.id;
      aoQuote.aoQuoteAodIndexevent.description = '';
      aoQuote.aoQuoteAodIndexevent.deleted = 0;
      aoQuote.aoQuoteAodIndexevent.assigned_user_id = this.pilatService.currentUser.id;
      aoQuote.aoQuoteAodIndexevent.error = null;
      aoQuote.aoQuoteAodIndexevent.success = 1;
      aoQuote.aoQuoteAodIndexevent.record_id = aoQuote.id;
      aoQuote.aoQuoteAodIndexevent.record_module = this.pilatService.parModuleAoQuote.par_group;
      
      aoQuote.aoQuoteTracker = new Tracker();
      aoQuote.aoQuoteTracker.user_id = this.pilatService.currentUser.id;
      aoQuote.aoQuoteTracker.module_name = this.pilatService.parModuleAoQuote.par_group;
      aoQuote.aoQuoteTracker.item_id = aoQuote.id;
      aoQuote.aoQuoteTracker.item_summary = aoQuote.name;
      aoQuote.aoQuoteTracker.action = 'editView';
      aoQuote.aoQuoteTracker.session_id = this.pilatService.currentSessId;
      aoQuote.aoQuoteTracker.visible = 1;
      aoQuote.aoQuoteTracker.deleted = 0;
    }
    return aoQuote;
  }
  
  //<es-section>
  
  getAllAosQuotes(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAosQuote(aosQuote:AosQuotes) {
    return this.http.post(this.basePath, aosQuote);
  }
  getAosQuote(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAosQuote(id:any, aosQuote:AosQuotes) {
    return this.http.put(this.basePath + '/' + id, aosQuote);
  }
  deleteAosQuote(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }}
