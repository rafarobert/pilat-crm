import { Component, OnInit } from '@angular/core';
import {Pipeline} from "../../models/pipeline";
import {PilatParamService} from "../../../core/services/pilat-param.service";
import {PilatService} from "../../services/pilat.service";
import {LeadService} from "../../../core/services/lead.service";
import {PilatParams} from "../../../core/models/pilatParams";
import {PipelineColumn} from "../../models/pipelineColumn";
import {Leads} from "../../../core/models/leads";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {AdminDialogComponent} from "../crud/admin-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {LeadsComponent} from "./leads/leads.component";
import {CrmLeadService} from "../../services/crm-lead.service";
import {LeadsCstm} from "../../../core/models/leadsCstm";
import {CrmOpportunityService} from "../../services/crm-opportunity.service";
import {Opportunities} from "../../../core/models/opportunities";
import {OpportunitiesComponent} from "./opportunities/opportunities.component";
import {OpportunitiesCstm} from "../../../core/models/opportunitiesCstm";
import {CookieService} from "ngx-cookie-service";
import {ContactService} from "../../../core/services/contact.service";
import {Contacts} from "../../../core/models/contacts";
import {AddContactComponent} from "./contacts/add-contact/add-contact.component";
import {CrmContactService} from "../../services/crm-contact.service";
import {DialogLeadToOpportunityComponent} from "../dialogs/dialog-lead-to-opportunity/dialog-lead-to-opportunity.component";
import {CrmAccountService} from "../../services/crm-account.service";
import {Accounts} from "../../../core/models/accounts";
import {AddAccountComponent} from "./accounts/add-account/add-account.component";
import {AddOpportunityComponent} from "./opportunities/add-opportunity/add-opportunity.component";
import {DialogUserUnsignedComponent} from "../dialogs/dialog-user-unsigned/dialog-user-unsigned.component";
import * as $ from 'jquery';
import {ContactsCstm} from "../../../core/models/contactsCstm";
import {AccountsCstm} from "../../../core/models/accountsCstm";
import {AccountsContacts} from "../../../core/models/accountsContacts";
import {AccountsOpportunities} from "../../../core/models/accountsOpportunities";
import {ContactsAudit} from "../../../core/models/contactsAudit";
import {Sugarfeed} from "../../../core/models/sugarfeed";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {ContactsComponent} from "./contacts/contacts.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {AddLeadComponent} from "./leads/add-lead/add-lead.component";
import {DialogOpportunityToLeadComponent} from "../dialogs/dialog-opportunity-to-lead/dialog-opportunity-to-lead.component";
import {AosQuotesComponent} from "./aos-quotes/aos-quotes.component";
import {AosQuotes} from "../../../core/models/aosQuotes";
import {AddAosQuoteComponent} from "./aos-quotes/add-aos-quote/add-aos-quote.component";
import {CrmAosQuoteService} from "../../services/crm-aos-quote.service";
import {AosQuotesCstm} from "../../../core/models/aosQuotesCstm";
import {Observable} from "rxjs";
import {ApiResponse} from "../../models/api-response";
import {CallsComponent} from "./calls/calls.component";
import {Calls} from "../../../core/models/calls";
import {PilatAuth} from "../../models/pilatAuth";
import {CrmUserService} from "../../services/crm-user.service";
import {Users} from "../../../core/models/users";
import {CallsLeads} from "../../../core/models/callsLeads";
import {addDias, addMeses} from "fechas";
import {DialogSetCallComponent} from "../dialogs/dialog-set-call/dialog-set-call.component";
import {CallsCstm} from "../../../core/models/callsCstm";
import {AddCallComponent} from "./calls/add-call/add-call.component";
import {utils} from "protractor";
import {OpportunitiesContacts} from "../../../core/models/opportunitiesContacts";
import {EmailAddrBeanRel} from "../../../core/models/emailAddrBeanRel";
import {EmailAddresses} from "../../../core/models/emailAddresses";
import {MAT_DATE_FORMATS} from "@angular/material/core";
import {DialogAlreadyLeadComponent} from "../dialogs/dialog-already-lead/dialog-already-lead.component";

@Component({
  selector: 'app-pipeline-dialog',
  templateUrl: './pipeline-dialog.component.html',
  styleUrls: ['./pipeline-dialog.component.scss'],
})
export class PipelineDialogComponent implements OnInit {
  
  pipeline:Pipeline = new Pipeline();
  isLoading:boolean = true;
  search:string;
  
  private parModuleContacts:PilatParams;
  private parModuleAccounts:PilatParams;
  private parModuleQuotes:PilatParams;
  private parModuleCalls:PilatParams;
  private parModuleTasks:PilatParams;
  private parModuleOpportunities:PilatParams;
  private parModuleAosQuotes:PilatParams;
  private parModuleLeads:PilatParams;
  
  private pilatAuth:PilatAuth;
  
  private call: Calls;
  private contact:Contacts;
  private account: Accounts;
  private lead:Leads;
  private opportunity:Opportunities;
  private aoQuote: AosQuotes;
  private opportunityToBeCreated: boolean;
  private opportunityToBeUpdated: boolean;
  private aosQuoteTobeCreated: boolean;
  private aosQuoteToBeUpdated: boolean;
  private salesStage: string;
  private tomorrow: Date;
  private afterTomorrow: Date;
  
  constructor(
    public dialog: MatDialog,
    private cookieService:CookieService,
    private pilatParamService: PilatParamService,
    public pilatService: PilatService,
    private crmOpportunityService: CrmOpportunityService,
    private crmContactService: CrmContactService,
    private crmAccountService: CrmAccountService,
    private crmLeadService: CrmLeadService,
    private crmUserService: CrmUserService,
    private crmAosQuoteService: CrmAosQuoteService,
    private leadService: LeadService,
    private contactService: ContactService,
    private _snackBar: MatSnackBar
  ) {}
  
  ngOnInit(): void {
    this.pilatService.setParams([
      this.pilatService.DIC_CURRENCIES,
    ]);
    this.pilatService.pageTitle = 'CRM';
    
    if (this.pilatService.userLoggedIn) {
      this.setPipeline();
    } else {
      this.dialog.closeAll();
      this._snackBar.open('Por favor, inicia sesión para poder continuar', 'Aceptar', {
        duration: 2000,
        horizontalPosition:'center',
        verticalPosition:'top'
      });
    }
  }
  
  openLeadDialog($event) {
    const dialogRef = this.dialog.open(LeadsComponent,{
      width: '1500px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openOpportunityDialog($event) {
    const dialogRef = this.dialog.open(OpportunitiesComponent,{
      width: '1500px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openContactDialog($event) {
    const dialogRef = this.dialog.open(ContactsComponent,{
      width: '1500px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openCallDialog($event) {
    const dialogRef = this.dialog.open(CallsComponent,{
      width: '1500px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openAccountDialog($event) {
    const dialogRef = this.dialog.open(AccountsComponent,{
      width: '1500px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openAosQuoteDialog($event) {
    const dialogRef = this.dialog.open(AosQuotesComponent,{
      width: '1500px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  async setModules() {
    await this.pilatParamService.getAllPilatParams([],{par_dictionary_id:'60088baf3682cc5720f557b4'}).subscribe(async (res) => {
      let response = res as {status:string, message:string, data:PilatParams[]};
      for (let i = 0 ; i < response.data.length ; i++) {
        let pilatParam:PilatParams = response.data[i];
        switch (pilatParam.par_cod) {
          case 'task':
            this.parModuleTasks = pilatParam;
            break;
          case 'AOS_Quote':
            this.parModuleAosQuotes = pilatParam;
            break;
          case 'opportunity':
            this.parModuleOpportunities = pilatParam;
            break;
          case 'call':
            this.parModuleCalls = pilatParam;
            break;
          case 'account':
            this.parModuleAccounts = pilatParam;
            break;
          case 'contact':
            this.parModuleContacts = pilatParam;
            break;
          case 'lead':
            this.parModuleLeads = pilatParam;
            break;
        }
      }
    });
  }
  
  async setPipeline(order:string = 'desc') {
    this.isLoading = true;
    
    let responseProspectStages:any = await this.pilatParamService.getAllPilatParams([],{par_dictionary_id:this.pilatService.DIC_STAGES_PROSPECTS},[['par_order','asc']]).toPromise();
    let responseOpportunityStages:any = await this.pilatParamService.getAllPilatParams([],{par_dictionary_id:this.pilatService.DIC_STAGES_OPPORTUNITIES},[['par_order','asc']]).toPromise();
    let responseStageOpportunities:any = await this.crmOpportunityService.getAllOpportunities([],{assigned_user_id:this.pilatService.currentUser.id}, [['date_entered',order]]).toPromise();
    let responseStageProspects:any = await this.crmLeadService.getLeads([],{assigned_user_id:this.pilatService.currentUser.id}, [['date_entered',order]]).toPromise();
    
    let prospectStages:PilatParams[] = responseProspectStages.data;
    let opportunityStages:PilatParams[] = responseOpportunityStages.data;
    await this.setModules();
        this.pipeline.columns = [];
        let prospects, opportunities;
        for (let i = 0 ; i < opportunityStages.length ; i++) {
          let opportunityStage = opportunityStages[i];
          let pipelineColumn = new PipelineColumn();
          if(responseStageOpportunities.data) {
              opportunities = [];
              let objTotals = [];
              let objSuperficies = 0;
              let objcurrencies:string[] = [];
              let stageOpportunities = responseStageOpportunities.data.filter((param:Opportunities) => param.sales_stage == opportunityStage.par_cod);
              for (let j = 0 ; j < stageOpportunities.length ; j++) {
                let stageOpportunity = stageOpportunities[j];
                let parCurrency = this.pilatService.parCurrencies.find(param => param.par_cod == stageOpportunity.currency_id);
                let localConverted;
                objSuperficies += stageOpportunity.opportunityOpportunitiesCstm.superficie_c ? stageOpportunity.opportunityOpportunitiesCstm.superficie_c : 0;
                // $us
                if (parCurrency) {
                  if (parCurrency._id == '600e7e7e36da387272e6ce50') {
                    localConverted = stageOpportunity.amount * 6.89;
                  } else {
                    localConverted = stageOpportunity.amount;
                  }
                  objTotals[j] = {total:stageOpportunity.amount, currency:parCurrency.par_abbr, localConverted:localConverted};
                } else {
                  localConverted = stageOpportunity.amount;
                  objTotals[j] = {total:stageOpportunity.amount, currency:stageOpportunity.currency_id, localConverted:localConverted};
                }
                if (this.search) {
                  if (
                    (stageOpportunity.name && stageOpportunity.name.includes(this.search)) ||
                    (stageOpportunity.description && stageOpportunity.description.includes(this.search)) ||
                    (stageOpportunity.amount && stageOpportunity.amount == parseInt(this.search)) ||
                    (stageOpportunity.name && stageOpportunity.name.toLowerCase().includes(this.search.toLowerCase())) ||
                    (stageOpportunity.description && stageOpportunity.description.toUpperCase().includes(this.search.toUpperCase()))
                  ) {
                    opportunities.push(stageOpportunity);
                  }
                } else {
                  opportunities.push(stageOpportunity);
                }
              }
              let totals = [];
              objTotals.forEach((objTotal,i) => {
                totals[i] = objTotal.localConverted;
              });
              let min = Math.min.apply(Math,totals);
              let max = Math.max.apply(Math,totals);
              let objTotalMin = objTotals.find(param => param.localConverted == min);
              let objTotalMax = objTotals.find(param => param.localConverted == max);
              pipelineColumn.totalLeads = stageOpportunities.length;
              pipelineColumn.totalSuperficies = objSuperficies;
              pipelineColumn.totalFrom = objTotalMin && objTotalMin.total ? objTotalMin.total : 0;
              pipelineColumn.currencyFrom = objTotalMin && objTotalMin.currency ? objTotalMin.currency : '';
              pipelineColumn.totalTo = objTotalMax && objTotalMax.total ? objTotalMax.total : 0;
              pipelineColumn.currencyTo = objTotalMax && objTotalMax.currency ? objTotalMax.currency : '';
              pipelineColumn.opportunityStages = stageOpportunities;
              pipelineColumn.isInStageOpportunity = true;
              pipelineColumn.isInStageProspect = false;
              pipelineColumn.tickets = opportunities.map((param:Opportunities) => `
  <div>
  <div>
      <span hidden="opportunityId">${param.id}</span>
                    <span><b>Descripción:</b></span>
                    <br>
                    ${param.description ? param.description : 'Sin Especificar'}
                    <br>
                    <span><b>Cliente:</b></span>
                    <br>
                    ${param.name}
</div>
</div>
                `);
            } else {
              pipelineColumn.prospectStages = [];
              pipelineColumn.tickets = [];
            }
            pipelineColumn.props = opportunityStage;
            this.pipeline.columns[i+prospectStages.length] = pipelineColumn;
            this.isLoading = false;
        }
        
        for (let i = 0 ; i < prospectStages.length ; i++) {
          let prospectStage = prospectStages[i];
          let pipelineColumn = new PipelineColumn();
            if(responseStageProspects.data) {
              prospects = [];
              let stageProspects:Leads[] = responseStageProspects.data.filter((param:Leads) => param.leadLeadsCstm.etapas_c == prospectStage.par_cod);
              let alreadyOpportunities = [], onlyProspects = [], c = [];
              let totals:number[] = [];
              let currencies:string[] = [];
              for (let j = 0 ; j < stageProspects.length ; j++) {
                let stagelead = stageProspects[j];
                totals[j] = parseInt(stagelead.opportunity_amount);
                //currencies.push();
                let alreadyOpportunity = opportunities.find(param => param.id == stagelead.opportunity_id);
                if (alreadyOpportunity) {
                  alreadyOpportunities.push(alreadyOpportunity);
                } else {
                  onlyProspects.push(stagelead);
                }
                if (this.search) {
                  if (
                    (stagelead.first_name && stagelead.first_name.includes(this.search)) ||
                    (stagelead.last_name && stagelead.last_name.includes(this.search)) ||
                    (stagelead.description && stagelead.description.includes(this.search)) ||
                    (stagelead.first_name && stagelead.first_name.toUpperCase().includes(this.search.toUpperCase())) ||
                    (stagelead.last_name && stagelead.last_name.toLowerCase().includes(this.search.toLowerCase())) ||
                    (stagelead.description && stagelead.description.toLowerCase().includes(this.search.toLowerCase())) ||
                    (stagelead.phone_mobile && stagelead.phone_mobile == this.search) ||
                    (stagelead.phone_home && stagelead.phone_home == this.search)
                  ) {
                    prospects.push(stagelead);
                  }
                } else {
                  prospects.push(stagelead);
                }
              }
              let min = Math.min.apply(Math,totals);
              let max = Math.max.apply(Math,totals);
              pipelineColumn.totalLeads = stageProspects.length;
              pipelineColumn.totalFrom = min ? min : 0;
              pipelineColumn.currencyFrom = '';
              pipelineColumn.totalTo = max ? max : 0;
              pipelineColumn.currencyTo = '';
              pipelineColumn.prospectStages = stageProspects;
              pipelineColumn.isInStageOpportunity = false;
              pipelineColumn.isInStageProspect = true;
              pipelineColumn.tickets = prospects.map(param => `
<div>
<div>
                <span hidden="prospectId">${param.id}</span>
                <span><b>Descripción:</b></span>
                <br>
                ${param.description ? param.description : 'Sin especificar'}
                <br>
                <span><b>Cliente:</b></span>
                <br>
                ${param.first_name} ${param.last_name}
</div>
</div>
              `);
            } else {
              pipelineColumn.prospectStages = [];
              pipelineColumn.tickets = [];
            }
            pipelineColumn.props = prospectStage;
            this.pipeline.columns[i] = pipelineColumn;
            this.isLoading = false;
        }
      
    
  }
  
  async setOpportunityToNextStatus(event, currentColumn) {
    let txtItem = event.previousContainer.data[event.previousIndex];
    let opportunityId = txtItem.split('<span hidden="opportunityId">')[1].split('</span>')[0];
    if (this.pilatService.userLoggedIn) {
      if (opportunityId) {
        let opportunity = new Opportunities();
        opportunity.sales_stage = this.pipeline.columns[currentColumn].props.par_cod;
        opportunity.opportunityOpportunitiesCstm = new OpportunitiesCstm();
        opportunity.opportunityOpportunitiesCstm.id_c = opportunityId;
        await this.crmOpportunityService.updateOpportunity(opportunityId,opportunity).subscribe(async (res) => {
          let response = res as {status:string, message:string, data:LeadsCstm};
          if(response.data) {
            transferArrayItem(event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex);
            this.setPipeline();
          }
        });
      }
    } else {
      this.dialog.open(DialogUserUnsignedComponent);
    }
  }
  
  async setControlTables() {
  
  }
  
  async setOpportunityFromLeadDialog(event, currentColumn) {
      this.openDialogLeadToOpportunity();
  }
  
  // Contacts
  
  async createContact(contact:Contacts, lead:Leads) {
    return new Promise(async resolve => {
      if (!contact) {
        contact = new Contacts();
      }
      contact = this.crmContactService.setDataContact(contact, lead, this.pilatAuth, this.parModuleContacts);
      let responseContact:any = await this.crmContactService.createContact(contact).toPromise();
      if (responseContact.data) {
        contact = responseContact.data;
        contact = this.crmContactService.setDataContact(contact, lead, this.pilatAuth, this.parModuleContacts);
        responseContact = await this.crmContactService.updateContact(contact.id, contact).toPromise();
        if (responseContact.data) {
          this.contact = responseContact.data;
        }
      }
      resolve(this.contact);
    });
    
  }
  
  async updateContact(contact:Contacts, lead:Leads) {
    return new Promise(async resolve => {
      contact = this.crmContactService.setDataContact(contact, lead, this.pilatAuth, this.parModuleContacts);
      let responseContact:any = await this.crmContactService.updateContact(contact.id, contact).toPromise();
      this.contact = responseContact.data;
      resolve(this.contact)
    });
  }
  
  // Accounts
  
  async createAccount(account:Accounts, contact:Contacts, lead:Leads, opportunity:Opportunities) {
    return new Promise(async resolve => {
      if (!account) {
        account = new Accounts();
      }
      account = this.crmAccountService.setDataAccount(account, contact, lead, opportunity, this.pilatAuth, this.parModuleContacts);
      let responseAccount:any = await this.crmAccountService.createAccount(account).toPromise();
      if (responseAccount.data) {
        account = responseAccount.data;
        account = this.crmAccountService.setDataAccount(account, contact, lead, opportunity, this.pilatAuth, this.parModuleAccounts);
        responseAccount = await this.crmAccountService.updateAccount(account.id, account).toPromise();
        if (responseAccount.data) {
          this.account = responseAccount.data;
        }
      }
      resolve(this.account);
    });
    
  }
  
  async updateAccount(account:Accounts, contact:Contacts, lead:Leads, opportunity:Opportunities) {
    return new Promise(async resolve => {
      account = this.crmAccountService.setDataAccount(account, contact, lead, opportunity, this.pilatAuth, this.parModuleAccounts);
      let responseAccount:any = await this.crmAccountService.updateAccount(account.id, account).toPromise();
      this.account = responseAccount.data;
      resolve(this.account);
    });
  }
  
  // Opportunities
  
  async createOpportunity(opportunity:Opportunities, lead:Leads, account:Accounts, salesStage) {
    return new Promise(async resolve => {
      if (!opportunity) {
        opportunity = new Opportunities();
      }
      opportunity = this.crmOpportunityService.setDataOpportunity(opportunity, lead, salesStage, this.pilatService.currentUser, this.parModuleContacts);
      let responseOpportunity:any = await this.crmOpportunityService.createOpportunity(opportunity).toPromise();
      if (responseOpportunity.data) {
        opportunity = responseOpportunity.data;
        opportunity = this.crmOpportunityService.setDataOpportunity(opportunity, lead, salesStage, this.pilatService.currentUser, this.parModuleOpportunities);
        responseOpportunity = await this.crmOpportunityService.updateOpportunity(opportunity.id, opportunity).toPromise();
        if (responseOpportunity.data) {
          this.opportunity = responseOpportunity.data;
        }
      }
      resolve(this.opportunity);
    });
    
  }
  
  async updateOpportunity(opportunity:Opportunities, lead:Leads, account:Accounts, salesStage) {
    return new Promise(async resolve => {
      opportunity = this.crmOpportunityService.setDataOpportunity(opportunity, lead, salesStage, this.pilatService.currentUser, this.parModuleOpportunities);
      let responseOpportunity:any = await this.crmOpportunityService.updateOpportunity(opportunity.id, opportunity).toPromise();
      this.opportunity = responseOpportunity.data;
      resolve(this.opportunity);
    });
    
  }
  
  // Aos Quotes
  
  async createAosQuote(aosQuote:AosQuotes, lead:Leads, opportunity:Opportunities, account:Accounts) {
    return new Promise(async resolve => {
      if (!aosQuote) {
        aosQuote = new AosQuotes();
      }
      aosQuote = this.crmAosQuoteService.setDataAosQuote(aosQuote, lead, opportunity, account, this.pilatAuth, this.parModuleContacts);
      let responseAosQuote:any = await this.crmAosQuoteService.createAosQuote(aosQuote).toPromise();
      if (responseAosQuote.data) {
        aosQuote = responseAosQuote.data;
        aosQuote = this.crmAosQuoteService.setDataAosQuote(aosQuote, lead, opportunity, account, this.pilatAuth, this.parModuleAosQuotes);
        responseAosQuote = await this.crmAosQuoteService.updateAosQuote(aosQuote.id, aosQuote).toPromise();
        if (responseAosQuote.data) {
          this.aoQuote = responseAosQuote.data;
        }
      }
      resolve(this.aoQuote)
    });
    
  }
  
  async updateAosQuote(aosQuote:AosQuotes, lead:Leads, opportunity:Opportunities, account:Accounts) {
    return new Promise(async resolve => {
      aosQuote = this.crmAosQuoteService.setDataAosQuote(aosQuote, lead, opportunity, account, this.pilatAuth, this.parModuleAosQuotes);
      let responseAosQuote:any = await this.crmAosQuoteService.updateAosQuote(aosQuote.id, aosQuote).toPromise();
      this.aoQuote = responseAosQuote.data;
      resolve(this.aoQuote);
    });
    
  }
  
  async verifyCall(event, currentColumn) {
    // let txtItem = event.previousContainer.data[event.previousIndex];
    // let leadId = txtItem.split('<span hidden="prospectId">')[1].split('</span>')[0];
    // this.salesStage = this.pipeline.columns[currentColumn].props.par_cod;
    let txtItem = event.previousContainer.data[event.previousIndex];
    let leadId = txtItem.split('<span hidden="prospectId">')[1].split('</span>')[0];
    if (leadId) {
      let lead: Leads;
      await this.crmLeadService.getLead(leadId).subscribe(async (res) => {
        let responseLead = res as { status: string, message: string, data: Leads };
        lead = responseLead.data;
        if (lead.leadCallsLeads) {
          if (lead.leadCallsLeads.callLeadCalls) {
            if (lead.leadCallsLeads.callLeadCalls.callCallsCstm) {
              if (lead.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_realizada_c) {
                lead = new Leads();
                lead.leadLeadsCstm = new LeadsCstm();
                lead.leadLeadsCstm.id_c = leadId;
                lead.leadLeadsCstm.etapas_c = this.pipeline.columns[currentColumn].props.par_cod;
                await this.crmLeadService.updateLead(leadId,lead).subscribe(async (res) => {
                  let response = res as {status:string, message:string, data:LeadsCstm};
                  if(response.data) {
                    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
                    this.setPipeline();
                  }
                });
              } else {
                this.dialog.open(DialogSetCallComponent, {
                  width:'600px',
                  data: lead,
                });
              }
            } else {
              this.dialog.open(DialogSetCallComponent, {
                width:'600px',
                data: lead,
              });
            }
          } else {
            this.dialog.open(DialogSetCallComponent, {
              width:'600px',
              data: lead,
            });
          }
        } else {
          this.dialog.open(DialogSetCallComponent, {
            width:'600px',
            data: lead,
          });
        }
      });
    }
  }
  
  async setOpportunityFromProspect3(event, currentColumn) {
    let txtItem = event.previousContainer.data[event.previousIndex];
    let leadId = txtItem.split('<span hidden="prospectId">')[1].split('</span>')[0];
    this.salesStage = this.pipeline.columns[currentColumn].props.par_cod;
    if (this.pilatService.userLoggedIn) {
      if (leadId) {
        let responseLead: any = await this.crmLeadService.getLead(leadId).toPromise();
        this.lead = responseLead.data;
        this.opportunity = new Opportunities();
        
        // before
        
        this.opportunity.opportunityOpportunitiesContacts = this.opportunity.opportunityOpportunitiesContacts ? this.opportunity.opportunityOpportunitiesContacts : new OpportunitiesContacts();
        this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts = this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts ? this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts : new Contacts();
        this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm = this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm ? this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm : new ContactsCstm();
        this.opportunity.opportunityAccountsOpportunities = this.opportunity.opportunityAccountsOpportunities ? this.opportunity.opportunityAccountsOpportunities : new AccountsOpportunities();
        this.opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts = this.opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts ? this.opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts : new Accounts();
        this.opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm = this.opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm ? this.opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm : new AccountsCstm();
        this.opportunity.opportunityAosQuotes = this.opportunity.opportunityAosQuotes ? this.opportunity.opportunityAosQuotes : new AosQuotes();
        this.opportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm = this.opportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm ? this.opportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm : new AosQuotesCstm();
        this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel = this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel ? this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel : new EmailAddrBeanRel();
        this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses = this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses ? this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses : new EmailAddresses();
        
        this.opportunity = await this.crmOpportunityService.setDataOpportunity(this.opportunity,this.lead,this.salesStage,this.pilatService.currentUser,this.parModuleOpportunities);
        
        let dialogAddOpportunity = this.dialog.open(AddOpportunityComponent, {
          width: '600px',
          data: this.opportunity
        });
        dialogAddOpportunity.afterClosed().subscribe(async result => {
          if (result === 1) {
            // after
            this.opportunity = this.crmOpportunityService.opportunityData;
            let responseOpportunity:any = await this.crmOpportunityService.createOpportunity(this.opportunity).toPromise();
            if (responseOpportunity.data) {
              this.opportunity = responseOpportunity.data;
              transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
              this.setPipeline();
            }
          }
        });
      }
    }
  }
  
  
  async setOpportunityFromProspect(event, currentColumn) {
    let txtItem = event.previousContainer.data[event.previousIndex];
    let leadId = txtItem.split('<span hidden="prospectId">')[1].split('</span>')[0];
    this.salesStage = this.pipeline.columns[currentColumn].props.par_cod;
    if (this.pilatAuth.userLoggedId) {
      if (leadId) {
        let responseLead: any = await this.crmLeadService.getLead(leadId).toPromise();
        this.lead = responseLead.data;
      
        //Contacts
        this.contact = new Contacts();
        let contactId = this.lead.contact_id ? this.lead.contact_id : null;
        let responseContacts: any;
        if (contactId) {
          responseContacts = await this.contactService.getAllContacts([], {id: contactId}).toPromise();
        } else {
          responseContacts = await this.contactService.getAllContacts([], {id: contactId}).toPromise();
        }
        if (!responseContacts.data) {
          await this.createContact(this.contact, this.lead);
        } else {
          if (responseContacts.data.length) {
            this.contact = responseContacts.data.find((param: Contacts) => {
              param.first_name == this.lead.first_name && param.last_name == this.lead.last_name && param.phone_mobile == this.lead.phone_mobile
            });
            if (this.contact) {
              await this.updateContact(this.contact, this.lead).then(async (res: Contacts) => {
                this.contact = res
              })
            } else {
              await this.createContact(this.contact, this.lead).then(async (res: Contacts) => {
                this.contact = res
              });
            }
          } else {
            await this.createContact(this.contact, this.lead).then(async (res: Contacts) => {
              this.contact = res
            });
          }
        }
      
        //Accounts
        this.account = new Accounts();
        let accountId = this.lead.account_id ? this.lead.account_id : null;
        let responseAccounts: any;
        if (accountId) {
          responseAccounts = await this.crmAccountService.getAllAccounts([], {
            id: accountId,
            assigned_user_id: this.pilatAuth.userLoggedId
          }).toPromise();
        } else {
          responseAccounts = await this.crmAccountService.getAllAccounts([], {assigned_user_id: this.pilatAuth.userLoggedId}).toPromise();
        }
        if (!responseAccounts.data) {
          await this.createAccount(this.account, this.contact, this.lead, this.opportunity);
        } else {
          if (responseAccounts.data.length) {
            this.account = responseAccounts.data.find((param: Accounts) => {
              param.name == this.lead.first_name + ' ' + this.lead.last_name || param.accountAccountsCstm.numero_documento_c == this.lead.leadLeadsCstm.numero_documento_c && param.accountAccountsCstm.extension_documento_c == this.lead.leadLeadsCstm.extension_documento_c
            });
            if (this.account) {
              await this.updateAccount(this.account, this.contact, this.lead, this.opportunity).then(async (res: Accounts) => {
                this.account = res
              });
            } else {
              await this.createAccount(this.account, this.contact, this.lead, this.opportunity).then(async (res: Accounts) => {
                this.account = res
              });
            }
          } else {
            await this.createAccount(this.account, this.contact, this.lead, this.opportunity).then(async (res: Accounts) => {
              this.account = res
            });
          }
        }
      
        //Opportunity
        let opportunityId = this.lead.opportunity_id ? this.lead.opportunity_id : null;
        let responseOpportunities: any;
        if (opportunityId) {
          responseOpportunities = await this.crmOpportunityService.getAllOpportunities([], {
            id: opportunityId,
            assigned_user_id: this.pilatAuth.userLoggedId
          }).toPromise();
        } else {
          responseOpportunities = await this.crmOpportunityService.getAllOpportunities([], {assigned_user_id: this.pilatAuth.userLoggedId}).toPromise();
        }
        if (!responseOpportunities.data) {
          this.opportunity.opportunityOpportunitiesCstm = new OpportunitiesCstm();
          this.opportunityToBeCreated = true;
        } else {
          if (responseOpportunities.data.length) {
            this.opportunity = responseOpportunities.data.find((param: Opportunities) => {
              param.name == this.lead.first_name + ' ' + this.lead.last_name || param.amount == parseInt(this.lead.opportunity_amount)
            });
            if (this.opportunity) {
              this.opportunityToBeUpdated = true;
            } else {
              this.opportunity = new Opportunities();
              this.opportunity.opportunityOpportunitiesCstm = new OpportunitiesCstm();
              this.opportunityToBeCreated = true;
            }
          } else {
            this.opportunity = new Opportunities();
            this.opportunity.opportunityOpportunitiesCstm = new OpportunitiesCstm();
            this.opportunityToBeCreated = true;
          }
        }
      
        this.opportunity = this.crmOpportunityService.setDataOpportunity(this.opportunity, this.lead, this.salesStage, this.pilatService.currentUser, this.parModuleOpportunities);
        let dialogAddOpportunity = this.dialog.open(AddOpportunityComponent, {
          width: '600px',
          data: this.opportunity
        });
        dialogAddOpportunity.afterClosed().subscribe(async result => {
          if (result === 1) {
            // after
            this.opportunity = this.crmOpportunityService.opportunityData;
            if (this.opportunityToBeCreated) {
              await this.createOpportunity(this.opportunity, this.lead, this.account, this.salesStage).then(async (res: Opportunities) => this.opportunity = res);
            } else if (this.opportunityToBeUpdated) {
              await this.updateOpportunity(this.opportunity, this.lead, this.account, this.salesStage).then(async (res: Opportunities) => this.opportunity = res);
            }
            await this.updateAccount(this.account, this.contact, this.lead, this.opportunity).then(async (res: Accounts) => {
              this.account = res
            });
          
            //Aos Quote
            opportunityId = this.opportunity.id ? this.opportunity.id : null;
            let responseAosQuotes: any;
            if (opportunityId) {
              responseAosQuotes = await this.crmAosQuoteService.getAllAosQuotes([], {opportunity_id: opportunityId, assigned_user_id: this.pilatAuth.userLoggedId}).toPromise();
            } else {
              responseAosQuotes = await this.crmAosQuoteService.getAllAosQuotes([], {assigned_user_id: this.pilatAuth.userLoggedId}).toPromise();
            }
          
            if (!responseAosQuotes.data) {
              this.aoQuote = new AosQuotes();
              this.aoQuote.aoQuoteAosQuotesCstm = new AosQuotesCstm();
              this.aosQuoteTobeCreated = true;
            } else {
              if (responseAosQuotes.data.length) {
                this.aoQuote = responseAosQuotes.data.find((param: AosQuotes) => {
                  param.name == this.lead.first_name + ' ' + this.lead.last_name
                });
                if (this.aoQuote) {
                  this.aosQuoteToBeUpdated = true;
                } else {
                  this.aoQuote = new AosQuotes();
                  this.aoQuote.aoQuoteAosQuotesCstm = new AosQuotesCstm();
                  this.aosQuoteTobeCreated = true;
                }
              } else {
                this.aoQuote = new AosQuotes();
                this.aoQuote.aoQuoteAosQuotesCstm = new AosQuotesCstm();
                this.aosQuoteTobeCreated = true;
              }
            }
            this.aoQuote = this.crmAosQuoteService.setDataAosQuote(this.aoQuote, this.lead, this.opportunity, this.account, this.pilatAuth, this.parModuleAosQuotes);
            let dialogAddAosQuote = this.dialog.open(AddAosQuoteComponent, {
              data: this.aoQuote,
              width: '600px',
            });
          
            dialogAddAosQuote.afterClosed().subscribe(async result => {
              if (result === 1) {
                this.aoQuote = this.crmAosQuoteService.aosQuoteData;
                if (this.aosQuoteTobeCreated) {
                  await this.createAosQuote(this.aoQuote, this.lead, this.opportunity, this.account).then(async (res: AosQuotes) => this.aoQuote = res);
                } else if (this.aosQuoteToBeUpdated) {
                  await this.updateAosQuote(this.aoQuote, this.lead, this.opportunity, this.account).then(async (res: AosQuotes) => this.aoQuote = res);
                }
                if(this.aoQuote && this.aoQuote.id) {
                  transferArrayItem(event.previousContainer.data,
                    event.container.data,
                    event.previousIndex,
                    event.currentIndex);
                  this.setPipeline();
                }
              }
            });
          }
        });
      }
    }
  }
  
  async addNewProspect () {
    
    let date = new Date();
    let dayPad = date.getDate().pad(2);
    let monthPad = (date.getMonth()).pad(2);
    let yearPad = date.getFullYear();
    let strToday = `${dayPad}/${monthPad}/${yearPad}`;
    let strTomorrow = addDias(strToday,1);
    let strAfterTomorrow = addDias(strToday,2);
    let [day, month, year] = strTomorrow.split('/');
    let [dayT, monthT, yearT] = strTomorrow.split('/');
    let [dayAfterA, monthAfterA, yearAfterA] = strAfterTomorrow.split('/');
    this.tomorrow = new Date(parseInt(yearT), parseInt(monthT), parseInt(dayT));
    this.afterTomorrow = new Date(parseInt(yearAfterA), parseInt(monthAfterA), parseInt(dayAfterA));
    
    this.lead = new Leads();
    this.lead.leadLeadsCstm = new LeadsCstm();
    this.lead.leadCallsLeads = this.lead.leadCallsLeads ? this.lead.leadCallsLeads: new CallsLeads();
    this.lead.leadCallsLeads.callLeadCalls = this.lead.leadCallsLeads.callLeadCalls ? this.lead.leadCallsLeads.callLeadCalls : new Calls();
    this.lead.leadCallsLeads.callLeadCalls.name = this.lead ? this.lead.first_name && this.lead.last_name ? this.lead.first_name+' '+this.lead.last_name : '' : '';
    this.lead.leadCallsLeads.callLeadCalls.date_start = this.tomorrow;
    this.lead.leadCallsLeads.callLeadCalls.date_end = this.afterTomorrow;
    this.lead.leadCallsLeads.callLeadCalls.callCallsCstm = this.lead.leadCallsLeads.callLeadCalls.callCallsCstm ? this.lead.leadCallsLeads.callLeadCalls.callCallsCstm : new CallsCstm();
  
    this.lead = await this.crmLeadService.setDataLead(this.lead,this.parModuleLeads,this.pilatService.currentUser,this.pilatService.currentSessId);
  
    const dialogRef = this.dialog.open(AddLeadComponent, {
      width:'600px',
      data: this.lead,
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside leadService
        await this.crmLeadService.createLead(this.crmLeadService.leadData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: any };
          if (response.data && response.data.length) {
            const dialogRef = this.dialog.open(DialogAlreadyLeadComponent, {
              width:'600px',
              data: this.lead,
            });
          } else if (response.data) {
            this.setPipeline();
          }
        });
      }
    });
  }
  
  async openEditProspect(event: CdkDragDrop<string[]>) {
    let date = new Date();
    let day = date.getDate().pad(2);
    let month = (date.getMonth()).pad(2);
    let year = date.getFullYear();
    let todayStr = `${day}/${month}/${year}`;
    let strTomorrow = addDias(todayStr,1);
    let strAfterTomorrow = addDias(todayStr,2);
    let [dayAfterT, monthAfterT, yearAfterT] = strTomorrow.split('/');
    let [dayAfterA, monthAfterA, yearAfterA] = strAfterTomorrow.split('/');
    this.tomorrow = new Date(parseInt(yearAfterT), parseInt(monthAfterT), parseInt(dayAfterT));
    this.afterTomorrow = new Date(parseInt(yearAfterA), parseInt(monthAfterA), parseInt(dayAfterA));
    
    let txtItem = event['target'].innerHTML;
    
    if (txtItem.split('<span hidden="prospectId">')[1]) {
      let prospectId = txtItem.split('<span hidden="prospectId">')[1].split('</span>')[0];
      let prospect:Leads;
      if (prospectId) {
        await this.crmLeadService.getLead(prospectId).subscribe(async (res) => {
          let responseLead = res as {status:string, message:string, data:Leads};
          prospect = responseLead.data;
          prospect.leadCallsLeads = prospect.leadCallsLeads ? prospect.leadCallsLeads : new CallsLeads();
          prospect.leadCallsLeads.callLeadCalls = prospect.leadCallsLeads.callLeadCalls ? prospect.leadCallsLeads.callLeadCalls : new Calls();
          prospect.leadCallsLeads.callLeadCalls.name = prospect.first_name+' '+prospect.last_name;
          prospect.leadCallsLeads.callLeadCalls.callCallsCstm = prospect.leadCallsLeads.callLeadCalls.callCallsCstm ? prospect.leadCallsLeads.callLeadCalls.callCallsCstm : new CallsCstm();
          let llamadaFecha = prospect.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_fecha_c;
          if (llamadaFecha) {
            prospect.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_fecha_c = this.parseDate(prospect.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_fecha_c);
          }
          let dialogAddLead = this.dialog.open(AddLeadComponent, {
            width:'600px',
            data: prospect
          });
          dialogAddLead.afterClosed().subscribe(async result => {
            if (result === 1) {
              await this.crmLeadService.updateLead(prospect.id, this.crmLeadService.leadData).subscribe(async (res) => {
                let response = res as { status: string, message: string, data: Leads };
                if (response.data) {
                  // let lead:Leads = response.data;
                  //
                  // let dialogAddLead = this.dialog.open(AddCallComponent, {
                  //   width:'600px',
                  //   data: prospect
                  // });
                  // dialogAddLead.afterClosed().subscribe(async result => {
                  //   if (result === 1) {
                  //     await this.crmLeadService.updateLead(prospect.id, this.crmLeadService.leadData).subscribe(async (res) => {
                  //       let response = res as { status: string, message: string, data: Opportunities };
                  //     });
                  //   }
                  // });
                }
              });
            }
          });
        });
      }
    }
  }
  
  async openEditOpportunity(event: CdkDragDrop<string[]>) {
    let txtItem = event['target'].innerHTML;
    let opportunityId = txtItem.split('<span hidden="opportunityId">')[1].split('</span>')[0];
    let opportunity;
    await this.crmOpportunityService.getOpportunity(opportunityId).subscribe(async (res) => {
      let responseOpportunity = res as { status: string, message: string, data: Opportunities };
      opportunity = responseOpportunity.data ? responseOpportunity.data : new Opportunities();
      opportunity.opportunityOpportunitiesContacts = opportunity.opportunityOpportunitiesContacts ? opportunity.opportunityOpportunitiesContacts : new OpportunitiesContacts();
      opportunity.opportunityOpportunitiesContacts.opportunityContactContacts = opportunity.opportunityOpportunitiesContacts.opportunityContactContacts ? opportunity.opportunityOpportunitiesContacts.opportunityContactContacts : new Contacts();
      opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm = opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm ? opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm : new ContactsCstm();
      opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel = opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel ? opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel : new EmailAddrBeanRel();
      opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses = opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses ? opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses : new EmailAddresses();
      opportunity.opportunityAccountsOpportunities = opportunity.opportunityAccountsOpportunities ? opportunity.opportunityAccountsOpportunities : new AccountsOpportunities();
      opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts = opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts ? opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts : new Accounts();
      opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm = opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm ? opportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm : new AccountsCstm();
      opportunity.opportunityAosQuotes = opportunity.opportunityAosQuotes ? opportunity.opportunityAosQuotes : new AosQuotes();
      opportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm = opportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm ? opportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm : new AosQuotesCstm();
      
      let dialogAddOpportunity = this.dialog.open(AddOpportunityComponent, {
        width:'600px',
        data: opportunity
      });
      dialogAddOpportunity.afterClosed().subscribe(async result => {
        if (result === 1) {
          this.pilatService.isLoading = true;
          await this.crmOpportunityService.updateOpportunity(opportunity.id, this.crmOpportunityService.opportunityData).subscribe(async (res) => {
            let response = res as { status: string, message: string, data: Opportunities };
            this.pilatService.isLoading = false;
          });
        }
      });
    });
  }
  
  async openEditAccount(event: CdkDragDrop<string[]>) {
    let txtItem = event['target'].innerHTML;
    let opportunityId = txtItem.split('<span hidden="accountId">')[1].split('</span>')[0];
    let opportunity;
    await this.crmAccountService.getAccount(opportunityId).subscribe(async (res) => {
      let responseOpportunity = res as { status: string, message: string, data: Opportunities };
      opportunity = responseOpportunity.data;
      let dialogAddOpportunity = this.dialog.open(AddOpportunityComponent, {
        data: opportunity
      });
      dialogAddOpportunity.afterClosed().subscribe(async result => {
        if (result === 1) {
          await this.crmOpportunityService.updateOpportunity(opportunity.id, this.crmOpportunityService.opportunityData).subscribe(async (res) => {
            let response = res as { status: string, message: string, data: Opportunities };
          });
        }
      });
    });
  }
  
  openDialogLeadToOpportunity() {
    this.dialog.open(DialogLeadToOpportunityComponent);
  }
  
  async setProspectToNextStatus(event, currentColumn) {
    let txtItem = event.previousContainer.data[event.previousIndex];
    let leadId = txtItem.split('<span hidden="prospectId">')[1].split('</span>')[0];
    if (this.pilatAuth.userLoggedId) {
      if (leadId) {
        let lead = new Leads();
        lead.leadLeadsCstm = new LeadsCstm();
        lead.leadLeadsCstm.id_c = leadId;
        lead.leadLeadsCstm.etapas_c = this.pipeline.columns[currentColumn].props.par_cod;
        await this.crmLeadService.updateLead(leadId,lead).subscribe(async (res) => {
          let response = res as {status:string, message:string, data:LeadsCstm};
          if(response.data) {
            transferArrayItem(event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex);
            this.setPipeline();
          }
        });
      }
    } else {
      this.dialog.open(DialogUserUnsignedComponent);
    }
  }
  
  setProspectFromOpportunity(event, currentColumn) {
    let txtItem = event.previousContainer.data[event.previousIndex];
    let opportunityId = txtItem.split('<span hidden="opportunityId">')[1].split('</span>')[0];
    this.crmOpportunityService.opportunityData.id = opportunityId;
    if (this.pilatAuth.userLoggedId) {
      this.dialog.open(DialogOpportunityToLeadComponent);
    }
  }
  
  async drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // "cdk-drop-list-0"
      let previousConectedTo = parseInt(event.previousContainer.connectedTo.toString());
      let currentConectedTo = parseInt(event.container.connectedTo.toString());
      
      let previousColumn = previousConectedTo-1;
      let currentColumn = currentConectedTo-1;
      
      if(currentColumn > previousColumn) {
        
        if (currentColumn >= 3) {
          if (previousColumn <= 2) {
            await this.setOpportunityFromProspect3(event,currentColumn);
          } else {
            await this.setOpportunityToNextStatus(event,currentColumn);
          }
        } else if (currentColumn < 3) {
          if (previousColumn == 0 && (currentColumn == 1 || currentColumn == 2)) {
            await this.verifyCall(event,currentColumn);
          } else {
            await this.setProspectToNextStatus(event,currentColumn);
          }
        }
      } else if(currentColumn < previousColumn) {
        if (currentColumn >= 3) {
          await this.setOpportunityToNextStatus(event, currentColumn);
        } else if (currentColumn < 3) {
          if (previousColumn >= 3) {
            await this.setProspectFromOpportunity(event,currentColumn);
          } else {
            await this.setProspectToNextStatus(event, currentColumn);
          }
        }
      }
    }
  }
  
  parseDate(input) {
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1]-1, parts[2],parts[3],parts[4]); // months are 0-based
  }
  
}
