import {Component, Inject, OnInit, Pipe, PipeTransform, ViewChild} from '@angular/core';
import {PilatParams} from "../../../../../core/models/pilatParams";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PilatParamService} from "../../../../../core/services/pilat-param.service";
import {FormControl, Validators} from "@angular/forms";
import {Opportunities} from "../../../../../core/models/opportunities";
import {OpportunitiesCstm} from "../../../../../core/models/opportunitiesCstm";
import {OpportunitieService} from "../../../../../core/services/opportunitie.service";
import {CookieService} from "ngx-cookie-service";
import {CrmOpportunityService} from "../../../../services/crm-opportunity.service";
import { addMeses } from "fechas";
import '../../../../../helpers/utils';
import {MatAccordion} from "@angular/material/expansion";
import {PilatService} from "../../../../services/pilat.service";
import {AosQuotesCstm} from "../../../../../core/models/aosQuotesCstm";
import {AosQuotes} from "../../../../../core/models/aosQuotes";
import {Leads} from "../../../../../core/models/leads";
import {LeadsCstm} from "../../../../../core/models/leadsCstm";

@Component({
  selector: 'app-add-opportunity',
  templateUrl: './add-opportunity.component.html',
  styleUrls: ['./add-opportunity.component.scss'],
})

export class AddOpportunityComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  parCurrentOpportunityCurrency:PilatParams = new PilatParams();
  parCurrentAoQuoteCurrency:PilatParams = new PilatParams();
  parCurrentPago: PilatParams = new PilatParams();
  parCurrentApprobalStatus: PilatParams = new PilatParams();
  parCurrentInvoiceStatus: PilatParams = new PilatParams();
  
  data:Opportunities;
  dataLeads:Leads;
  dataLeadsCstm:LeadsCstm;
  parCurrentAccountCountry: PilatParams;
  parCurrentAccountState: PilatParams;
  parCurrentAccountCity: PilatParams;
  parCurrentContactCountry: PilatParams;
  parCurrentContactState: PilatParams;
  parCurrentContactCity: PilatParams;
  
  aoQuoteAosQuotesCstmPrecioMcuadrado:any;
  aosQuotesTotalAmount:any;
  aosQuoteAosQuotesCstmLblCuotainicial:any;
  aosQuoteAosQuotesCstmSaldo:any;
  aosQuotesDiscountAmount:any;
  opportunityAmount:any;
  
  constructor(
    public dialogRef: MatDialogRef<AddOpportunityComponent>,
    private cookieService:CookieService,
    @Inject(MAT_DIALOG_DATA) public input: any,
    private opportunityService: OpportunitieService,
    private crmOpportunityService: CrmOpportunityService,
    private pilatParamService: PilatParamService,
    public pilatService:PilatService
  ) {
  }
  
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  
  ngOnInit():void {
    this.data = this.input.opportunity;
    this.dataLeads = this.input.lead;
    this.pilatService.setParams([
      this.pilatService.DIC_OPPORTUNITY_STAGES,
      this.pilatService.DIC_QUOTE_STAGES,
      this.pilatService.DIC_LEAD_SOURCES,
      this.pilatService.DIC_TITLES,
      this.pilatService.DIC_CURRENCIES,
      this.pilatService.DIC_TIPO_VENTAS,
      this.pilatService.DIC_TIPO_PAGOS,
      this.pilatService.DIC_CI_EXT,
      this.pilatService.DIC_TERM_YEARS,
      this.pilatService.DIC_APPROBAL_STATUSES,
      this.pilatService.DIC_INVOICE_STATUSES,
      this.pilatService.DIC_CITIES,
      this.pilatService.DIC_COUNTRIES,
      this.pilatService.DIC_STATES,
      this.pilatService.DIC_OPPORTUNITY_TIPOS,
    ]).then(async () => {
      
      let date = new Date();
      let day = date.getDate().pad(2);
      let month = (date.getMonth()).pad(2);
      let year = date.getFullYear();
      let todayStr = `${day}/${month}/${year}`;
      let afteYearSixMonthStr = addMeses(todayStr, 1);
      let [dayAfter, monthAfter, yearAfter] = afteYearSixMonthStr.split('/');
      this.data.date_entered = new Date();
      this.data.date_modified = new Date();
      this.data.deleted = 0;
      this.data.currency_id = this.pilatService.parMonedaDolar.par_cod;
      this.data.opportunity_type = null;
      this.data.next_step = null;
      this.data.campaign_id = '';
      this.data.date_closed = new Date(parseInt(yearAfter), parseInt(monthAfter), parseInt(dayAfter));
      this.data.opportunityAosQuotes = this.data.opportunityAosQuotes ? this.data.opportunityAosQuotes : new AosQuotes();
      this.data.opportunityAosQuotes.currency_id = this.pilatService.parMonedaDolar.par_cod;
      this.data.opportunityAosQuotes.stage = this.pilatService.parQuoteNegociacion.par_cod;
      this.selectPago(this.data.opportunityAosQuotes.aoQuoteAosQuotesCstm.tipo_pago_c);
      
      if (this.data.opportunityAosQuotes.aoQuoteAosQuotesCstm.moneda_c) {
        this.selectAoQuoteCurrency(this.data.opportunityAosQuotes.aoQuoteAosQuotesCstm.moneda_c);
      } else {
        this.data.opportunityAosQuotes.aoQuoteAosQuotesCstm.moneda_c = this.pilatService.parMonedaDolar.par_cod;
        this.parCurrentAoQuoteCurrency = this.pilatService.parMonedaDolar;
      }
      if (this.data.opportunityOpportunitiesCstm.moneda_c) {
        this.selectOpportunityCurrency(this.data.opportunityOpportunitiesCstm.moneda_c);
      } else {
        this.data.opportunityOpportunitiesCstm.moneda_c = this.pilatService.parMonedaDolar.par_cod;
        this.parCurrentOpportunityCurrency = this.pilatService.parMonedaDolar;
      }
      
      setTimeout(() => {
        this.accordion.openAll();
      },1000);
    });
  }
  
  setInputNumeric() {
  
  }
  
  selectAccountCountry(value) {
    if (value) {
      this.parCurrentAccountCountry = this.pilatService.parCountries.find(param => param.par_cod == value);
      this.pilatService.parStates = this.pilatService.parStates.filter(param => param.par_parent_id == this.parCurrentAccountCountry._id);
      this.data.opportunityAccountsOpportunities.accountOpportunityAccounts.billing_address_country = this.parCurrentAccountCountry.par_cod;
    }
  }
  
  selectAccountState(value) {
    if (value) {
      this.parCurrentAccountState = this.pilatService.parStates.find(param => param.par_cod == value);
      this.pilatService.parCities = this.pilatService.parCitiesBkp;
      this.pilatService.parCities = this.pilatService.parCities.filter(param => param.par_parent_id == this.parCurrentAccountState._id);
      this.data.opportunityAccountsOpportunities.accountOpportunityAccounts.billing_address_state = this.parCurrentAccountState.par_cod;
    }
  }
  
  selectAccountCity(value) {
    if (value) {
      this.parCurrentAccountCity = this.pilatService.parCities.find(param => param.par_cod == value);
      this.data.opportunityAccountsOpportunities.accountOpportunityAccounts.billing_address_city = this.parCurrentAccountCity.par_cod;
    }
  }
  
  selectContactCountry(value) {
    if (value) {
      this.parCurrentContactCountry = this.pilatService.parCountries.find(param => param.par_cod == value);
      this.pilatService.parStates = this.pilatService.parStates.filter(param => param.par_parent_id == this.parCurrentContactCountry._id);
      this.data.opportunityOpportunitiesContacts.opportunityContactContacts.primary_address_country = this.parCurrentContactCountry.par_cod
    }
  }
  
  selectContactState(value) {
    if (value) {
      this.pilatService.parCities = this.pilatService.parCitiesBkp;
      this.parCurrentContactState = this.pilatService.parStates.find(param => param.par_cod == value);
      this.pilatService.parCities = this.pilatService.parCities.filter(param => param.par_parent_id == this.parCurrentContactState._id);
      this.data.opportunityOpportunitiesContacts.opportunityContactContacts.primary_address_state = this.parCurrentContactState.par_cod;
    }
  }
  
  selectContactCity(value) {
    if (value) {
      this.parCurrentContactCity = this.pilatService.parCities.find(param => param.par_cod == value);
      this.data.opportunityOpportunitiesContacts.opportunityContactContacts.primary_address_city = this.parCurrentContactCity.par_cod;
    }
  }
  
  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }
  
  selectOpportunityCurrency(value) {
    if (value) {
      this.parCurrentOpportunityCurrency = this.pilatService.parCurrencies.find(param => param.par_cod == value);
    }
  }
  
  selectAoQuoteCurrency(value) {
    if (value) {
      this.parCurrentAoQuoteCurrency = this.pilatService.parCurrencies.find(param => param.par_cod == value);
    }
  }
  
  selectPago(value) {
    if (value) {
      this.parCurrentPago = this.pilatService.parPagoTipos.find(param => param.par_cod == value);
    }
  }
  
  submit() {
    // emppty stuff
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  public confirmAdd(): void {
    this.crmOpportunityService.opportunityData = this.data;
  }
  
  selectApprovalStatus(value) {
    if (value) {
      this.parCurrentApprobalStatus = this.pilatService.parApprovalStatuses.find(param => param.par_cod == value);
    }
  }
  
  selectInvoiceStatus(value) {
    if (value) {
      this.parCurrentInvoiceStatus = this.pilatService.parInvoiceStatuses.find(param => param.par_cod == value);
    }
  }
}
