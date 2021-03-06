import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {Pipeline} from "../../models/pipeline";
import {PilatParamService} from "../../../core/services/pilat-param.service";
import {PilatService} from "../../services/pilat.service";
import {LeadService} from "../../../core/services/lead.service";
import {PilatParams} from "../../../core/models/pilatParams";
import {PipelineColumn} from "../../models/pipelineColumn";
import {Leads} from "../../../core/models/leads";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {AdminDialogComponent} from "../crud/admin-dialog.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
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
import {SpinnerComponent} from "../spinner/spinner.component";
import {SpinnerService} from "../../services/spinner.service";
import {DialogService} from "../../services/dialog.service";
import {DialogsComponent} from "../dialogs/dialogs.component";
import {CallsUsers} from "../../../core/models/callsUsers";
import {Emails} from "../../../core/models/emails";
import {PilatCrons} from "../../../core/models/pilatCrons";
import {Location} from "@angular/common";

@Component({
  selector: 'app-pipeline-dialog',
  templateUrl: './pipeline-dialog.component.html',
  styleUrls: ['./pipeline-dialog.component.scss'],
})
export class PipelineDialogComponent implements OnInit, AfterViewInit {
  
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
  
  spinnerRef;
  
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
    private _snackBar: MatSnackBar,
    private spinnerService: SpinnerService,
    private location: Location,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.location.replaceState('/');
    this.spinnerService.spinnerRef = this.spinnerService.start();
    this.pilatAuth = new PilatAuth();
    this.pilatAuth.userLoggedId = this.cookieService.get('userLogguedIn');
    this.pilatAuth.userSessId = this.cookieService.get('PHPSESSID');
    this.pilatService.currentSessId = this.pilatAuth.userSessId;
    this.crmUserService.getUser(this.pilatAuth.userLoggedId).subscribe(res => {
      let response = res as { status: string, message: string, data: Users };
      this.pilatService.currentUser = response.data;
      this.pilatService.userLoggedIn = true;
      if (this.pilatService.userLoggedIn) {
        this.pilatService.setParams([
          this.pilatService.DIC_MODULES,
          this.pilatService.DIC_CURRENCIES,
          this.pilatService.DIC_CALL_STATUSES,
          this.pilatService.DIC_ACCEPT_CALL_STATUSES,
          this.pilatService.DIC_EMAILS_INTENT,
          this.pilatService.DIC_EMAILS_TYPES,
          this.pilatService.DIC_EMAILS_STATUSES,
          this.pilatService.DIC_STAGES_OPPORTUNITIES,
          this.pilatService.DIC_LEAD_STATUSES
        ]);
        this.pilatService.pageTitle = 'CRM PILAT';
        this.setPipeline();
      } else {
        this.dialog.closeAll();
        this._snackBar.open('Por favor, inicia sesión para poder continuar', 'Aceptar', {
          duration: 2000,
          horizontalPosition:'center',
          verticalPosition:'top'
        });
      }
    });
  }
  
  ngAfterViewInit(): void {
    this.spinnerService.stop(this.spinnerService.spinnerRef);
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
      this.setPipeline()
    });
  }
  
  openContactDialog($event) {
    const dialogRef = this.dialog.open(ContactsComponent,{
      width: '1500px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.setPipeline()
    });
  }
  
  openCallDialog($event) {
    const dialogRef = this.dialog.open(CallsComponent,{
      width: '1500px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.setPipeline()
    });
  }
  
  openAccountDialog($event) {
    const dialogRef = this.dialog.open(AccountsComponent,{
      width: '1500px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.setPipeline()
    });
  }
  
  openAosQuoteDialog($event) {
    const dialogRef = this.dialog.open(AosQuotesComponent,{
      width: '1500px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.setPipeline()
    });
  }
  
  async setPipeline(order:string = 'desc') {
    this.isLoading = true;
    this.spinnerService.spinnerRef = this.spinnerService.start();
    let responseProspectStages:any = await this.pilatParamService.getAllPilatParams([],{par_dictionary_id:this.pilatService.DIC_STAGES_PROSPECTS},[['par_order','asc']]).toPromise();
    let responseOpportunityStages:any = await this.pilatParamService.getAllPilatParams([],{par_dictionary_id:this.pilatService.DIC_STAGES_OPPORTUNITIES},[['par_order','asc']]).toPromise();
    let responseStageOpportunities:any = await this.crmOpportunityService.getAllOpportunities([],{assigned_user_id:this.pilatService.currentUser.id}, [['date_modified',order]]).toPromise();
    let responseStageProspects:any = await this.crmLeadService.getLeads([],{
      assigned_user_id:this.pilatService.currentUser.id,
      status:[
        this.pilatService.parLeadNewStatus.par_cod,
        this.pilatService.parLeadConvertedStatus.par_cod,
        this.pilatService.parLeadInProcessStatus.par_cod,
        this.pilatService.parLeadAssignedStatus.par_cod,
        this.pilatService.parLeadAssignedStatus.par_cod
      ]
    }, [['date_modified',order]]).toPromise();
    
    let prospectStages:PilatParams[] = responseProspectStages.data;
    let opportunityStages:PilatParams[] = responseOpportunityStages.data;
    //await this.setModules();
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
                let stageOpportunity:Opportunities = stageOpportunities[j];
                let parCurrency = this.pilatService.parCurrencies.find(param => param.par_cod == stageOpportunity.currency_id);
                let localConverted;
                objSuperficies += stageOpportunity.opportunityOpportunitiesCstm ? stageOpportunity.opportunityOpportunitiesCstm.superficie_c ? stageOpportunity.opportunityOpportunitiesCstm.superficie_c : 0 : 0;
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
                    ${param.opportunityAccountsOpportunities ? '' : '<span class="error-account">Sin Cliente</span><br>'}
                    ${param.opportunityOpportunitiesContacts ? '' : '<span class="error-contact">Sin Contacto</span><br>'}
                    ${param.opportunityAosQuotes ? '' : '<span class="error-quote">Sin Cotización</span><br>'}
                    ${param.opportunityOpportunitiesContacts && param.opportunityOpportunitiesContacts.opportunityContactContacts && param.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails ? '' : '<span class="warn-email">Sin Correo Enviado</span><br>'}
                    <span><b>Cliente:</b></span>
                    <br>
                    ${param.opportunityAccountsOpportunities ? param.opportunityAccountsOpportunities.accountOpportunityAccounts.name : 'Sin Especificar'}
                    <br>
                    <span><b>Celular Contacto:</b></span>
                    <br>
                    ${param.opportunityAccountsOpportunities && param.opportunityAccountsOpportunities.accountOpportunityAccounts ? param.opportunityAccountsOpportunities.accountOpportunityAccounts.phone_office ? param.opportunityAccountsOpportunities.accountOpportunityAccounts.phone_office : 'Sin Especificar' : 'Sin Especificar'}
                    <br>
                    <span><b>Descripción:</b></span>
                    <br>
                    ${param.description ? param.description : 'Sin Especificar'}
                    <br>
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
                let alreadyOpportunity;
                totals[j] = parseInt(stagelead.opportunity_amount);
                //currencies.push();
                if (opportunities && opportunities.length) {
                  alreadyOpportunity = opportunities.find(param => param.id == stagelead.opportunity_id);
                  if (alreadyOpportunity) {
                    alreadyOpportunities.push(alreadyOpportunity);
                  } else {
                    onlyProspects.push(stagelead);
                  }
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
              pipelineColumn.tickets = prospects.map((param:Leads) => `
<div>
<div>
                ${!param.phone_mobile ? '<span class="error-contact">Sin celular</span><br>' : ''}
                <span hidden="prospectId">${param.id}</span>
                <span><b>Cliente:</b></span>
                <br>
                ${param.first_name ? param.first_name : ''} ${param.last_name ? param.last_name : ''}
                <br>
                <span><b>Celular:</b></span>
                <br>
                ${param.phone_mobile ? param.phone_mobile : 'Sin especificar'}
                <br>
                <span><b>Descripción:</b></span>
                <br>
                ${param.description ? param.description : 'Sin Especificar'}
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
      this.spinnerService.stop(this.spinnerService.spinnerRef);
    
  }
  
  async setOpportunityToNextStatus(event, currentColumn) {
    let txtItem = event.previousContainer.data[event.previousIndex];
    let opportunityId = txtItem.split('<span hidden="opportunityId">')[1].split('</span>')[0];
    if (this.pilatService.userLoggedIn) {
      if (opportunityId) {
        this.spinnerService.spinnerRef = this.spinnerService.start();
        let respOpportunity:any = await this.crmOpportunityService.getOpportunity(opportunityId).toPromise();
        let opportunity:Opportunities = respOpportunity.data;
        opportunity.sales_stage = this.pipeline.columns[currentColumn].props.par_cod;
        // opportunity.opportunityOpportunitiesCstm.id_c = opportunityId;
        await this.crmOpportunityService.updateOpportunity(opportunityId,opportunity).subscribe(async (res) => {
          this.spinnerService.stop(this.spinnerService.spinnerRef);
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
      account = this.crmAccountService.setDataAccount(account, contact, lead, opportunity);
      let responseAccount:any = await this.crmAccountService.createAccount(account).toPromise();
      if (responseAccount.data) {
        account = responseAccount.data;
        account = this.crmAccountService.setDataAccount(account, contact, lead, opportunity);
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
      account = this.crmAccountService.setDataAccount(account, contact, lead, opportunity);
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
      opportunity = this.crmOpportunityService.setDataOpportunity(opportunity, lead, salesStage);
      let responseOpportunity:any = await this.crmOpportunityService.createOpportunity(opportunity).toPromise();
      if (responseOpportunity.data) {
        opportunity = responseOpportunity.data;
        opportunity = this.crmOpportunityService.setDataOpportunity(opportunity, lead, salesStage);
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
      opportunity = this.crmOpportunityService.setDataOpportunity(opportunity, lead, salesStage);
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
      aosQuote = this.crmAosQuoteService.setDataAosQuote(aosQuote, lead, opportunity, account);
      let responseAosQuote:any = await this.crmAosQuoteService.createAosQuote(aosQuote).toPromise();
      if (responseAosQuote.data) {
        aosQuote = responseAosQuote.data;
        aosQuote = this.crmAosQuoteService.setDataAosQuote(aosQuote, lead, opportunity, account);
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
      aosQuote = this.crmAosQuoteService.setDataAosQuote(aosQuote, lead, opportunity, account);
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
      this.spinnerService.spinnerRef = this.spinnerService.start();
      await this.crmLeadService.getLead(leadId).subscribe(async (res) => {
        let responseLead = res as { status: string, message: string, data: Leads };
        lead = responseLead.data;
        if (lead.leadCallsLeads) {
          if (lead.leadCallsLeads.callLeadCalls) {
            if (lead.leadCallsLeads.callLeadCalls.callCallsCstm) {
              if (lead.leadCallsLeads.callLeadCalls.callCallsUsers) {
                if (lead.leadCallsLeads.callLeadCalls.status == this.pilatService.parCallHeld.par_cod) {
                  if (lead.leadCallsLeads.callLeadCalls.callCallsUsers.accept_status) {
                    lead = new Leads();
                    lead.leadLeadsCstm = new LeadsCstm();
                    lead.leadLeadsCstm.id_c = leadId;
                    lead.leadLeadsCstm.etapas_c = this.pipeline.columns[currentColumn].props.par_cod;
                    let responseLead:any = await this.crmLeadService.updateLead(leadId,lead).toPromise();
                    this.spinnerService.stop(this.spinnerService.spinnerRef);
                    if(responseLead.data) {
                      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                      this.setPipeline();
                    }
                  } else {
                    this.spinnerService.stop(this.spinnerService.spinnerRef);
                    this.dialogService.open('La llamada realizada por el usuario, no tiene el estado: '+this.pilatService.parAcceptCallAccept.par_description+', por favor verifica el estado de la llamada realizada por el usuario', 'Verificacion del estado de la llamada');
                  }
                } else {
                  this.spinnerService.stop(this.spinnerService.spinnerRef);
                  this.dialogService.open('La llamada registrado en el prospecto no tiene el estado: '+ this.pilatService.parCallHeld.par_description + ', Ppor favor verifica que se haya realizado la llamada.', 'Verificacion del estado de la llamada');
                }
              } else {
                this.spinnerService.stop(this.spinnerService.spinnerRef);
                this.dialogService.open('El prospecto no tiene asignado una llamada realizada por el usuario: '+this.pilatService.currentUser.user_name+', verifica que se haya realizado el registro de la llamada asignado al usuario', 'Verificacion del registro de la llamada');
              }
            } else {
              this.spinnerService.stop(this.spinnerService.spinnerRef);
              this.dialogService.open('Existe un error en los datos de la llamada, por favor actualiza el prospecto y vuelve a intentar', 'Validacion de datos de la llamada');
            }
          } else {
            this.spinnerService.stop(this.spinnerService.spinnerRef);
            this.dialogService.open('El prospecto no tiene un registro de llamada, por favor actualiza los datos del prospecto', 'Validacion de datos de la llamada');
          }
        } else {
          this.spinnerService.stop(this.spinnerService.spinnerRef);
          this.dialogService.open('El prospecto no tiene un registro de llamada, por favor actualiza los datos del prospecto', 'Validacion de datos de la llamada');
        }
      });
    }
  }
  
  async verifyCierrePerdido(event, currentColumn) {
    let txtItem = event.previousContainer.data[event.previousIndex];
    if (currentColumn == 9) {
      let aTxtItem = txtItem.includes('<span hidden="opportunityId">');
      if (aTxtItem) {
        if (this.pilatService.userLoggedIn) {
          let opportunityId = txtItem.split('<span hidden="opportunityId">')[1].split('</span>')[0];
          if (opportunityId) {
            this.spinnerService.spinnerRef = this.spinnerService.start();
            let respOpportunities:any = await this.crmOpportunityService.getOpportunity(opportunityId).toPromise();
            let opportunity:Opportunities = respOpportunities.data;
            opportunity.sales_stage = this.pipeline.columns[currentColumn].props.par_cod;
            respOpportunities = await this.crmOpportunityService.updateOpportunity(opportunityId,opportunity).toPromise();
            this.spinnerService.stop(this.spinnerService.spinnerRef);
            transferArrayItem(event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex);
            this.setPipeline();
          }
        }
      } else {
        aTxtItem = txtItem.includes('<span hidden="prospectId">');
        if (aTxtItem) {
          if (this.pilatService.userLoggedIn) {
            let prospectId = txtItem.split('<span hidden="prospectId">')[1].split('</span>')[0];
            if (prospectId) {
              this.dialogService.open('El prospecto seleccionado no puede pasar a la etapa: '+this.pilatService.parOpportunityStageCierrePerdido.par_description+', debido a que esta etapa pertenece a una oportunidad, ¿Desea establecer el prospecto al estado: '+this.pilatService.parLeadDeadStatus.par_description,
                'Validacion en flujo de etapas',async () => {
                  this.spinnerService.spinnerRef = this.spinnerService.start();
                  let respLeads:any = await this.crmLeadService.getLead(prospectId).toPromise();
                  this.lead = respLeads.data;
                  this.lead.status = this.pilatService.parLeadDeadStatus.par_cod;
                  let responseLead:any = await this.crmLeadService.updateLead(prospectId,this.lead).toPromise();
                  this.spinnerService.stop(this.spinnerService.spinnerRef);
                },'Si')
            }
          }
        }
      }
    }
  }
  
  async verifyMail(event, currentColumn) {
    let txtItem = event.previousContainer.data[event.previousIndex];
    let opportunityId = txtItem.split('<span hidden="opportunityId">')[1].split('</span>')[0];
    if (this.pilatService.userLoggedIn) {
      this.spinnerService.spinnerRef = this.spinnerService.start();
      let responseOpportunity:any = await this.crmOpportunityService.getOpportunity(opportunityId).toPromise();
      this.spinnerService.stop(this.spinnerService.spinnerRef);
      this.opportunity = responseOpportunity.data;
      if (this.opportunity.opportunityOpportunitiesContacts) {
        if (this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts) {
          if (this.opportunity.opportunityAosQuotes) {
            if (this.opportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm) {
              if (this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails) {
                this.dialogService.open('La cotizacion fue enviada exitosamente al correo del contacto', 'Envio de Cotización al Contacto');
                this.opportunity.sales_stage = this.pipeline.columns[currentColumn].props.par_cod;
                await this.crmOpportunityService.updateOpportunity(opportunityId,this.opportunity).subscribe(async (res) => {
                  let responseOpportunities = res as {status:string, message:string, data:Opportunities};
                  if(responseOpportunities.data) {
                    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
                    this.setPipeline();
                  }
                });
              } else {
                if (this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel && this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.email_address) {
                  this.dialogService.open('La cotizacion no fue enviada al cliente, el correo registrado es el siguiente: ' +
                    this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.email_address
                    + ' ¿Desea reintentar el envio al correo del contacto?', 'Envio de Cotización al Contacto', async () => {
                      let responseOpportunities:any = await this.crmOpportunityService.updateOpportunity(opportunityId,this.opportunity).toPromise();
                      this.opportunity = responseOpportunities;
                      if (this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails) {
                        this.dialogService.open('La cotizacion fue enviada exitosamente al correo del contacto', 'Envio de Cotización al Contacto');
                      } else {
                        this.dialogService.open('No pudo ser validado el envio de la cotizacion al correo del contacto, por favor intenta enviarlo mediante WhatsApp', 'Envio de Cotización al Contacto');
                      }
                    });
                } else {
                  this.dialogService.open('El contacto de la oportunidad no tiene registrado un correo electrónico', 'Envio de Cotización al Contacto');
                }
              }
            } else {
              this.dialogService.open('La Oportunidad seleccionada no tiene una cotización, por favor revisa los datos', 'Sin Cotización');
            }
          } else {
            this.dialogService.open('La Oportunidad seleccionada no tiene una cotización, por favor revisa los datos', 'Sin Cotización');
          }
        } else {
          this.dialogService.open('La Oportunidad seleccionada no tiene un cliente, por favor revisa los datos', 'Envio de Cotización al Contacto');
        }
      } else {
        this.dialogService.open('La oportunidad no tiene relacionado un contacto, porfavor actualiza los datos de la oportunidad', 'Envio de Cotización al Contacto');
      }
    }
  }
  
  async setOpportunityFromProspect(event, currentColumn) {
    let txtItem = event.previousContainer.data[event.previousIndex];
    let leadId = txtItem.split('<span hidden="prospectId">')[1].split('</span>')[0];
    this.salesStage = this.pipeline.columns[currentColumn].props.par_cod;
    if (this.pilatService.userLoggedIn) {
      if (leadId) {
        this.spinnerService.spinnerRef = this.spinnerService.start();
        let responseLead: any = await this.crmLeadService.getLead(leadId).toPromise();
        this.spinnerService.stop(this.spinnerService.spinnerRef);
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
        
        this.opportunity = await this.crmOpportunityService.setDataOpportunity(this.opportunity,this.lead,this.salesStage);
        
        let dialogAddOpportunity = this.dialog.open(AddOpportunityComponent, {
          width: '600px',
          data: {
            opportunity:this.opportunity,
            lead:this.lead
          }
        });
        dialogAddOpportunity.afterClosed().subscribe(async result => {
          if (result === 1) {
            // after
            this.spinnerService.spinnerRef = this.spinnerService.start();
            this.opportunity = this.crmOpportunityService.opportunityData;
            let responseOpportunity:any = await this.crmOpportunityService.createOpportunity(this.opportunity).toPromise();
            if (responseOpportunity.data) {
              this.opportunity = responseOpportunity.data;
              this.lead.opportunity_id = this.opportunity.id;
              this.lead.opportunity_amount = this.opportunity.amount+'';
              this.lead.opportunity_name = this.opportunity.name;
              let responseLead:any = await this.crmLeadService.updateLead(this.lead.id, this.lead).toPromise();
              if (responseOpportunity.data) {
                this.spinnerService.stop(this.spinnerService.spinnerRef);
                this.opportunity = responseOpportunity.data;
                
                // setTimeout(async () => {
                //   this.spinnerService.spinnerRef = this.spinnerService.start();
                //   responseOpportunity = await this.crmOpportunityService.getOpportunity(this.opportunity.id).toPromise();
                //   this.spinnerService.stop(this.spinnerService.spinnerRef);
                //   this.opportunity = responseOpportunity.data;
                //   if (this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.confirm_opt_in_sent_date) {
                //     this.dialogService.open('El correo con el detalle de la cotización fue enviado exitosamente al correo del contacto: '+ this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.email_address);
                //   } else {
                //     this.dialogService.open('Hubo un problema al enviar la cotización al correo del contacto. '+ this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.email_address ? 'Su correo es: ' + this.opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.email_address : 'No tiene Correo Electronico','Error al enviar la cotización');
                //   }
                // },6000);
                transferArrayItem(event.previousContainer.data,
                  event.container.data,
                  event.previousIndex,
                  event.currentIndex);
                this.setPipeline();
              }
            }
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
    this.lead.assigned_user_id = this.pilatService.currentUser.id;
    this.lead.created_by = this.pilatService.currentUser.id;
    this.lead.modified_user_id = this.pilatService.currentUser.id;
    
    this.lead.leadLeadsCstm = new LeadsCstm();
    this.lead.leadCallsLeads = this.lead.leadCallsLeads ? this.lead.leadCallsLeads: new CallsLeads();
    
    this.lead.leadCallsLeads.callLeadCalls = this.lead.leadCallsLeads.callLeadCalls ? this.lead.leadCallsLeads.callLeadCalls : new Calls();
    this.lead.leadCallsLeads.callLeadCalls.created_by = this.pilatService.currentUser.id;
    this.lead.leadCallsLeads.callLeadCalls.modified_user_id = this.pilatService.currentUser.id;
    this.lead.leadCallsLeads.callLeadCalls.assigned_user_id = this.pilatService.currentUser.id;
    this.lead.leadCallsLeads.callLeadCalls.name = this.lead ? this.lead.first_name && this.lead.last_name ? this.lead.first_name+' '+this.lead.last_name : '' : '';
    this.lead.leadCallsLeads.callLeadCalls.date_start = this.tomorrow;
    this.lead.leadCallsLeads.callLeadCalls.date_end = this.afterTomorrow;
    
    this.lead.leadCallsLeads.callLeadCalls.callCallsCstm = this.lead.leadCallsLeads.callLeadCalls.callCallsCstm ? this.lead.leadCallsLeads.callLeadCalls.callCallsCstm : new CallsCstm();
    this.lead.leadCallsLeads.callLeadCalls.callCallsUsers = this.lead.leadCallsLeads.callLeadCalls.callCallsUsers ? this.lead.leadCallsLeads.callLeadCalls.callCallsUsers : new CallsUsers();
  
    this.lead = await this.crmLeadService.setDataLead(this.lead);
  
    const dialogRef = this.dialog.open(AddLeadComponent, {
      width:'600px',
      data: this.lead,
    });
    
    dialogRef.afterClosed().subscribe(async result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside leadService
        this.spinnerService.spinnerRef = this.spinnerService.start();
        
        if (this.crmLeadService.leadData.leadCallsLeads.callLeadCalls.date_start) {
          let dateStart = this.crmLeadService.leadData.leadCallsLeads.callLeadCalls.date_start;
          let dateLlamada = this.crmLeadService.leadData.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_fecha_c;
          let newPilatCron = new PilatCrons();
        }
        
        await this.crmLeadService.createLead(this.crmLeadService.leadData).subscribe(async (res) => {
          let response = res as { status: string, message: string, data: any };
          this.spinnerService.stop(this.spinnerService.spinnerRef);
          
          if (response.data && response.data.length) {
            let leads:Leads[] = response.data;
            const dialogRef = this.dialog.open(DialogAlreadyLeadComponent, {
              width:'600px',
              data: leads,
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
    if (txtItem.includes('<span hidden="prospectId">')) {
      if (txtItem.split('<span hidden="prospectId">')[1]) {
        let prospectId = txtItem.split('<span hidden="prospectId">')[1].split('</span>')[0];
        let prospect:Leads;
        if (prospectId) {
          this.spinnerService.spinnerRef = this.spinnerService.start();
          let responseLead:any = await this.crmLeadService.getLead(prospectId).toPromise();
          this.spinnerService.stop(this.spinnerService.spinnerRef);
          prospect = responseLead.data;
          
          prospect.modified_user_id = this.pilatService.currentUser.id;
          prospect.created_by = this.pilatService.currentUser.id;
          prospect.assigned_user_id = this.pilatService.currentUser.id;
          
          prospect.leadLeadsCstm = prospect.leadLeadsCstm ? prospect.leadLeadsCstm : new LeadsCstm();
          prospect.leadCallsLeads = prospect.leadCallsLeads ? prospect.leadCallsLeads : new CallsLeads();
          
          prospect.leadCallsLeads.callLeadCalls = prospect.leadCallsLeads.callLeadCalls ? prospect.leadCallsLeads.callLeadCalls : new Calls();
          prospect.leadCallsLeads.callLeadCalls.name = prospect.first_name+' '+prospect.last_name;
          prospect.leadCallsLeads.callLeadCalls.assigned_user_id = this.pilatService.currentUser.id;
          prospect.leadCallsLeads.callLeadCalls.modified_user_id = this.pilatService.currentUser.id;
          prospect.leadCallsLeads.callLeadCalls.created_by = this.pilatService.currentUser.id;
          
          prospect.leadCallsLeads.callLeadCalls.callCallsCstm = prospect.leadCallsLeads.callLeadCalls.callCallsCstm ? prospect.leadCallsLeads.callLeadCalls.callCallsCstm : new CallsCstm();
      
          prospect.leadCallsLeads.callLeadCalls.callCallsUsers = prospect.leadCallsLeads.callLeadCalls.callCallsUsers ? prospect.leadCallsLeads.callLeadCalls.callCallsUsers : new CallsUsers();
          prospect.leadCallsLeads.callLeadCalls.callCallsUsers.user_id = this.pilatService.currentUser.id;
          prospect.leadCallsLeads.callLeadCalls.callCallsUsers.required = '1';
          prospect.leadCallsLeads.callLeadCalls.callCallsUsers.accept_status = prospect.leadCallsLeads.callLeadCalls.callCallsUsers.accept_status ? prospect.leadCallsLeads.callLeadCalls.callCallsUsers.accept_status : this.pilatService.parAcceptCallNone.par_cod;
      
          if (prospect.leadCallsLeads.callLeadCalls.status == this.pilatService.parCallHeld.par_cod) {
            prospect.leadCallsLeads.callLeadCalls.callCallsUsers.accept_status = this.pilatService.parAcceptCallAccept.par_cod;
          }
      
          let llamadaFecha = prospect.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_fecha_c;
          if (llamadaFecha) {
            prospect.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_fecha_c = this.parseDate(prospect.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_fecha_c);
            // prospect.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_fecha_c = this.parseDate(prospect.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_fecha_c);
          }
          let dialogAddLead = this.dialog.open(AddLeadComponent, {
            width:'600px',
            data: prospect
          });
          dialogAddLead.afterClosed().subscribe(async result => {
            if (result === 1) {
              this.spinnerService.spinnerRef = this.spinnerService.start();
              let responseLead:any = await this.crmLeadService.updateLead(prospect.id, this.crmLeadService.leadData).toPromise()
              this.spinnerService.stop(this.spinnerService.spinnerRef);
              this.setPipeline();
              if (responseLead.data) {
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
            }
          });
        }
      }
    }
  }
  
  async openEditOpportunity(event: CdkDragDrop<string[]>) {
    let txtItem = event['target'].innerHTML;
    if (txtItem.includes('<span hidden="opportunityId">')) {
      let opportunityId = txtItem.split('<span hidden="opportunityId">')[1].split('</span>')[0];
      let opportunity:Opportunities;
      this.spinnerService.spinnerRef = this.spinnerService.start();
      let responseOpportunity:any = await this.crmOpportunityService.getOpportunity(opportunityId).toPromise();
      this.spinnerService.stop(this.spinnerService.spinnerRef);
      opportunity = responseOpportunity.data ? responseOpportunity.data : new Opportunities();
      opportunity.opportunityOpportunitiesCstm = opportunity.opportunityOpportunitiesCstm ? opportunity.opportunityOpportunitiesCstm : new OpportunitiesCstm();
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
      opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails = opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails ? opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails : new Emails();
      opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails.assigned_user_id = opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails.assigned_user_id ? opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails.assigned_user_id : this.pilatService.currentUser.id;
      opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails.created_by = opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails.created_by ? opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails.created_by : this.pilatService.currentUser.id;
      opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails.intent = opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails.intent ? opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails.intent : this.pilatService.parEmailIntentPick.par_cod;
      opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails.parent_type = opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails.parent_type ? opportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails.parent_type : this.pilatService.parModuleOpportunity.par_cod;
      
      let dialogAddOpportunity = this.dialog.open(AddOpportunityComponent, {
        width:'600px',
        data: {
          opportunity: opportunity,
          lead: this.lead
        }
      });
      dialogAddOpportunity.afterClosed().subscribe(async result => {
        if (result === 1) {
          this.pilatService.isLoading = true;
          this.spinnerService.spinnerRef = this.spinnerService.start();
          let responseOpportunity:any = await this.crmOpportunityService.updateOpportunity(opportunity.id, this.crmOpportunityService.opportunityData).toPromise();
          this.spinnerService.stop(this.spinnerService.spinnerRef);
          this.setPipeline();
        }
      });
    }
  }
  
  // async openEditAccount(event: CdkDragDrop<string[]>) {
  //   let txtItem = event['target'].innerHTML;
  //   let opportunityId = txtItem.split('<span hidden="accountId">')[1].split('</span>')[0];
  //   let opportunity;
  //   await this.crmAccountService.getAccount(opportunityId).subscribe(async (res) => {
  //     let responseOpportunity = res as { status: string, message: string, data: Opportunities };
  //     opportunity = responseOpportunity.data;
  //     let dialogAddOpportunity = this.dialog.open(AddOpportunityComponent, {
  //       data: opportunity
  //     });
  //     dialogAddOpportunity.afterClosed().subscribe(async result => {
  //       if (result === 1) {
  //         await this.crmOpportunityService.updateOpportunity(opportunity.id, this.crmOpportunityService.opportunityData).subscribe(async (res) => {
  //           let response = res as { status: string, message: string, data: Opportunities };
  //         });
  //       }
  //     });
  //   });
  // }
  
  openDialogLeadToOpportunity() {
    this.dialog.open(DialogLeadToOpportunityComponent);
  }
  
  async setProspectToNextStatus(event, currentColumn) {
    let txtItem = event.previousContainer.data[event.previousIndex];
    let leadId = txtItem.split('<span hidden="prospectId">')[1].split('</span>')[0];
    if (this.pilatService.currentUser.id) {
      if (leadId) {
        this.spinnerService.spinnerRef = this.spinnerService.start();
        let respLead:any = await this.crmLeadService.getLead(leadId).toPromise();
        let lead = respLead.data;
        lead.leadLeadsCstm.id_c = leadId;
        lead.leadLeadsCstm.etapas_c = this.pipeline.columns[currentColumn].props.par_cod;
        await this.crmLeadService.updateLead(leadId,lead).subscribe(async (res) => {
          this.spinnerService.stop(this.spinnerService.spinnerRef);
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
  
  async setProspectFromOpportunity(event, currentColumn) {
    let txtItem = event.previousContainer.data[event.previousIndex];
    let opportunityId = txtItem.split('<span hidden="opportunityId">')[1].split('</span>')[0];
    let currentLeadStage:PilatParams;
    switch (currentColumn) {
      case 0: currentLeadStage = this.pilatService.parLeadCaptadoStage; currentLeadStage = this.pilatService.parLeadCaptadoStage; break;
      case 1: currentLeadStage = this.pilatService.parLeadCalificadoStage; currentLeadStage = this.pilatService.parLeadCaptadoStage; break;
      case 2: currentLeadStage = this.pilatService.parLeadVisitaFisicaVirtualStage; currentLeadStage = this.pilatService.parLeadCaptadoStage; break;
    }
    // if (this.pilatService.currentUser.id) {
    //   this.spinnerService.spinnerRef = this.spinnerService.start();
    //   let respOpportunities:any = await this.crmOpportunityService.getOpportunity(opportunityId).toPromise();
    //   if (respOpportunities.data) {
    //     this.opportunity = respOpportunities.data;
    //     this.dialogService.open('La oportunidad seleccionada no puede pasar la etapa: '+currentLeadStage.par_description+', Debido a que esta etapa pertenece a un prospecto, ¿Desea establecer la oportunidad al estado: '+ this.pilatService.parOppo)
    //   }
    // }
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
          if (currentColumn >= 4) {
            if (currentColumn == 9) {
              await this.verifyCierrePerdido(event,currentColumn)
            } else {
              await this.verifyMail(event,currentColumn);
            }
          } else if (previousColumn <= 2) {
            await this.setOpportunityFromProspect(event,currentColumn);
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
  
  parseDate(input:any) {
    let parts;
    if (input) {
  	  if (typeof input == 'string') {
	      parts = input.match(/(\d+)/g);
	      return new Date(parts[0], parts[1]-1, parts[2],parts[3]-this.pilatService.hourDifference,parts[4]); // months are 0-based
      }
	    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
	  }
    if (input.getTime) {
      let date:Date = input;
      date.setTime(date.getTime()-this.pilatService.hourDifference);
      return date
    }
  	return input
  }
}
