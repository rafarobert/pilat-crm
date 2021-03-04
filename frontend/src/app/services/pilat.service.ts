import {Injectable} from '@angular/core';
import {Users} from "../../core/models/users";
import {BreakpointObserver} from "@angular/cdk/layout";
import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior
} from "@angular/cdk/platform";
import {PilatParams} from "../../core/models/pilatParams";
import {PilatParamService} from "../../core/services/pilat-param.service";
import {environment} from "../../environments/environment";
import {addDias, setFormatoFecha} from "fechas";
import {CodigoFormatoFecha} from "fechas/dist/src";
import {type} from "os";
import {AbstractControl, FormControl, FormGroup, ValidationErrors} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class PilatService {
  
  environment = environment;
  header;
  featuresPilatService:boolean = true;
  pipelineStatus:string[] = [];
  isLoading:Boolean;
  currentUser: Users;
  httpHome: string;
  currentSessId: string;
  userLoggedIn: boolean;
  isSmallScreen:boolean;
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();
  platform:Platform;
  pageTitle:string = 'CRM PILAT';
  toggleMenuOpened:boolean;

  DIC_LEAD_STATUSES = '5fe93b0e3c3708f0b489dcbd';
  DIC_CALL_STATUSES = '603402682f52e342778cd29c';
  DIC_ACCEPT_CALL_STATUSES = '603dbaff36a4741d6003d9d6';
  DIC_PROSPECT_STAGES = '5ff2c4520a60a5252ddf62f6';
  DIC_OPPORTUNITY_STAGES = '5ff4a8d9aef65440b888db40';
  DIC_CI_EXT = '60029af5e2015758ec69b743';
  DIC_CURRENCIES = '6007aadcb4fefa3640d86b7c';
  DIC_SALUTATIONS = '6007ab04b4fefa3640d86b7d';
  DIC_MODULES = '60088baf3682cc5720f557b4';
  DIC_QUOTE_STAGES = '60099356e047f90b126cd150';
  DIC_TITLES = '60099b1ee047f90b126cd157';
  DIC_LEAD_SOURCES = '601477bda8bde911171ec7d7';
  DIC_GENEROS = '60149128743736090e0bce67';
  DIC_RUBROS = '6014b982a7f3fd21af7b1682';
  DIC_LEAD_TIPOS = '6014ba92a7f3fd21af7b1686';
  DIC_CLIENTE_TIPOS = '6014bc5ba7f3fd21af7b168a';
  DIC_TIPO_VENTAS = '6014ef4f1302f107d6f68efb';
  DIC_TIPO_PAGOS = '601a390100fff70c9ef353c1';
  DIC_TERM_YEARS = '6024d1a89cfd591c2cc323a0';
  DIC_APPROBAL_STATUSES = '6026062b00f59e33bce496ba';
  DIC_INVOICE_STATUSES = '6026055100f59e33bce496b7';
  DIC_COUNTRIES = '602b5632bc8a38062ce6826c';
  DIC_STATES = '602b57b8bc8a38062ce6826e';
  DIC_CITIES = '602b5649bc8a38062ce6826d';
  DIC_STAGES_PROSPECTS = '5ff2c4520a60a5252ddf62f6';
  DIC_STAGES_OPPORTUNITIES = '5ff4a8d9aef65440b888db40';
  DIC_OPPORTUNITY_TIPOS = '602fcc02429ac05467f9fe47';
  DIC_EMAILS_TYPES = '603dd6ef36a4741d6003d9df';
  DIC_EMAILS_STATUSES = '603dd76636a4741d6003d9e1';
  DIC_EMAILS_INTENT = '603ddcdd36a4741d6003d9e4';
  DIC_CALL_DIRECTION = '603fc1819700a32438f9fc65';
  
  parLeadStatuses:PilatParams[] = [];
  parProspectStages:PilatParams[] = [];
  parOpportunityStages:PilatParams[] = [];
  parCiExtentions:PilatParams[] = [];
  parCurrencies:PilatParams[] = [];
  parSalutations:PilatParams[] = [];
  parModules:PilatParams[] = [];
  parQuoteStages:PilatParams[] = [];
  parTitles:PilatParams[] = [];
  parLeadSources:PilatParams[] = [];
  parGeneros:PilatParams[] = [];
  parRubros:PilatParams[] = [];
  parLeadTipos:PilatParams[] = [];
  parClienteTipos:PilatParams[] = [];
  parVentaTipos:PilatParams[] = [];
  parTermYears:PilatParams[] = [];
  parPagoTipos:PilatParams[] = [];
  parApprovalStatuses:PilatParams[] = [];
  parInvoiceStatuses:PilatParams[] = [];
  parCountries:PilatParams[] = [];
  parStates:PilatParams[] = [];
  parCities:PilatParams[] = [];
  parOpportunityTipos:PilatParams[] = [];
  parCallStatuses:PilatParams[] = [];
  parAcceptCallStatuses:PilatParams[] = [];
  parEmailStatuses:PilatParams[] = [];
  parEmailTypes:PilatParams[] = [];
  parEmailIntents:PilatParams[] = [];
  parCallDirections:PilatParams[] = [];
  
  parPersonaNatural:PilatParams;
  parPersonaJuridica:PilatParams;
  parMonedaDolar:PilatParams;
  parMonedaBoliviano:PilatParams;
  parPagoBanco: PilatParams;
  parPagoContado: PilatParams;
  parPagoPlazo: PilatParams;
  parApproved: PilatParams;
  parNotApproved: PilatParams;
  parInvoiced: PilatParams;
  parNotInvoiced: PilatParams;
  parLeadAssignedStatus: PilatParams;
  
  parLeadNewStatus: PilatParams;
  parLeadInProcessStatus: PilatParams;
  parLeadConvertedStatus: PilatParams;
  parLeadRecycledStatus: PilatParams;
  parLeadDeadStatus: PilatParams;
  
  parLeadCaptadoStage: PilatParams;
  parLeadCalificadoStage: PilatParams;
  parLeadVisitaFisicaVirtualStage: PilatParams;
  
  parOpportunityStageCotizacion:PilatParams;
  parOpportunityStageNegociacion:PilatParams;
  parOpportunityStageReserva:PilatParams;
  parOpportunityStageCuotaInicial:PilatParams;
  parOpportunityStageArmadoCarpeta:PilatParams;
  parOpportunityStageCierreGanado:PilatParams;
  parOpportunityStageCierrePerdido:PilatParams;
  
  parCallPlanned: PilatParams;
  parCallHeld: PilatParams;
  parCallNotHeld: PilatParams;
  parCallSent: PilatParams;
  parCallReceived: PilatParams;
  parCallFailure: PilatParams;
  parCallPending: PilatParams;
  
  parCallDirectionInbound: PilatParams;
  parCallDirectionOutbound: PilatParams;
  
  parModuleLead: PilatParams;
  parModuleContact: PilatParams;
  parModuleAccount: PilatParams;
  parModuleCall: PilatParams;
  parModuleOpportunity: PilatParams;
  parModuleAoQuote: PilatParams;
  parModuleTask: PilatParams;
  
  parQuoteBorrador: PilatParams;
  parQuoteNegociacion: PilatParams;
  parQuoteEnviado: PilatParams;
  parQuoteEnEspera: PilatParams;
  parQuoteCoonfirmado: PilatParams;
  parQuotePerdida: PilatParams;
  
  parAcceptCallNone: PilatParams;
  parAcceptCallAccept: PilatParams;
  
  parEmailStatusSent: PilatParams;
  parEmailTypeOut: PilatParams;
  
  parEmailIntentPick: PilatParams;
	hourDifference: number;
  
  constructor(
    breakpointObserver:BreakpointObserver,
    private pilatParamService:PilatParamService,
    private http: HttpClient,
  ) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
    this.hourDifference = 4;
  }
  
  async setParams(aDictionaries:string[]) {
    return new Promise(async (resolve) => {
      await this.pilatParamService.getAllPilatParams([],{par_dictionary_id:aDictionaries}).subscribe(async (res) => {
        let response = res as {status:string, message:string, data:PilatParams[]};
        if (response.data) {
          await response.data.forEach(async (param:PilatParams) => {
            switch (param.par_dictionary_id) {
              case this.DIC_LEAD_STATUSES: !this.parLeadStatuses.find(par => par._id == param._id) ? this.parLeadStatuses.push(param) : false; break;
              case this.DIC_CALL_STATUSES: !this.parCallStatuses.find(par => par._id == param._id) ? this.parCallStatuses.push(param) : false; break;
              case this.DIC_ACCEPT_CALL_STATUSES: !this.parAcceptCallStatuses.find(par => par._id == param._id) ? this.parAcceptCallStatuses.push(param) : false; break;
              case this.DIC_PROSPECT_STAGES: !this.parProspectStages.find(par => par._id == param._id) ? this.parProspectStages.push(param) : false; break;
              case this.DIC_OPPORTUNITY_STAGES: !this.parOpportunityStages.find(par => par._id == param._id) ? this.parOpportunityStages.push(param) : false; break;
              case this.DIC_CI_EXT: !this.parCiExtentions.find(par => par._id == param._id) ? this.parCiExtentions.push(param) : false; break;
              case this.DIC_CURRENCIES: !this.parCurrencies.find(par => par._id == param._id) ? this.parCurrencies.push(param) : false; break;
              case this.DIC_SALUTATIONS: !this.parSalutations.find(par => par._id == param._id) ? this.parSalutations.push(param) : false; break;
              case this.DIC_MODULES: !this.parModules.find(par => par._id == param._id) ? this.parModules.push(param) : false; break;
              case this.DIC_QUOTE_STAGES: !this.parQuoteStages.find(par => par._id == param._id) ? this.parQuoteStages.push(param) : false; break;
              case this.DIC_TITLES: !this.parTitles.find(par => par._id == param._id) ? this.parTitles.push(param) : false; break;
              case this.DIC_LEAD_SOURCES: !this.parLeadSources.find(par => par._id == param._id) ? this.parLeadSources.push(param) : false; break;
              case this.DIC_GENEROS: !this.parGeneros.find(par => par._id == param._id) ? this.parGeneros.push(param) : false; break;
              case this.DIC_RUBROS: !this.parRubros.find(par => par._id == param._id) ? this.parRubros.push(param) : false; break;
              case this.DIC_LEAD_TIPOS: !this.parLeadTipos.find(par => par._id == param._id) ? this.parLeadTipos.push(param) : false; break;
              case this.DIC_CLIENTE_TIPOS: !this.parClienteTipos.find(par => par._id == param._id) ? this.parClienteTipos.push(param) : false; break;
              case this.DIC_TIPO_VENTAS: !this.parVentaTipos.find(par => par._id == param._id) ? this.parVentaTipos.push(param) : false; break;
              case this.DIC_TIPO_PAGOS: !this.parPagoTipos.find(par => par._id == param._id) ? this.parPagoTipos.push(param) : false; break;
              case this.DIC_TERM_YEARS: !this.parTermYears.find(par => par._id == param._id) ? this.parTermYears.push(param) : false; break;
              case this.DIC_APPROBAL_STATUSES: !this.parApprovalStatuses.find(par => par._id == param._id) ? this.parApprovalStatuses.push(param) : false; break;
              case this.DIC_INVOICE_STATUSES: !this.parInvoiceStatuses.find(par => par._id == param._id) ? this.parInvoiceStatuses.push(param) : false; break;
              case this.DIC_COUNTRIES: !this.parCountries.find(par => par._id == param._id) ? this.parCountries.push(param) : false; break;
              case this.DIC_STATES: !this.parStates.find(par => par._id == param._id) ? this.parStates.push(param) : false; break;
              case this.DIC_CITIES: !this.parCities.find(par => par._id == param._id) ? this.parCities.push(param) : false; break;
              case this.DIC_OPPORTUNITY_TIPOS: !this.parOpportunityTipos.find(par => par._id == param._id) ? this.parOpportunityTipos.push(param) : false; break;
              case this.DIC_EMAILS_STATUSES: !this.parEmailStatuses.find(par => par._id == param._id) ? this.parEmailStatuses.push(param) : false; break;
              case this.DIC_EMAILS_TYPES: !this.parEmailTypes.find(par => par._id == param._id) ? this.parEmailTypes.push(param) : false; break;
              case this.DIC_EMAILS_INTENT: !this.parEmailIntents.find(par => par._id == param._id) ? this.parEmailIntents.push(param) : false; break;
              case this.DIC_CALL_DIRECTION: !this.parCallDirections.find(par => par._id == param._id) ? this.parCallDirections.push(param) : false; break;
            }
        
            switch (param.id) {
              case 2:this.parLeadAssignedStatus = param;break;
              case 3:this.parLeadNewStatus = param;break;
              case 4:this.parLeadInProcessStatus = param;break;
              case 5:this.parLeadConvertedStatus = param;break;
              case 6:this.parLeadRecycledStatus = param;break;
              case 7:this.parLeadDeadStatus = param;break;
              
              case 8:this.parLeadCaptadoStage = param;break;
              case 9:this.parLeadCalificadoStage = param;break;
              case 10:this.parLeadVisitaFisicaVirtualStage = param;break;
              case 54:this.parPersonaNatural = param;break;
              case 55:this.parPersonaJuridica = param;break;
              case 41:this.parMonedaBoliviano = param;break;
              case 42:this.parMonedaDolar = param;break;
              case 58:this.parPagoBanco = param;break;
              case 59:this.parPagoContado = param;break;
              case 60:this.parPagoPlazo = param;break;
              case 65:this.parApproved = param;break;
              case 66:this.parNotApproved = param;break;
              case 63:this.parInvoiced = param;break;
              case 64:this.parNotInvoiced = param;break;
              
              case 91:this.parCallPlanned = param;break;
              case 92:this.parCallHeld = param;break;
              case 93:this.parCallNotHeld = param;break;
              case 94:this.parCallSent = param;break;
              case 95:this.parCallReceived = param;break;
              case 96:this.parCallFailure = param;break;
              case 97:this.parCallPending = param;break;
              
              case 27:this.parModuleLead = param;break;
              case 28:this.parModuleContact = param;break;
              case 29:this.parModuleAccount = param;break;
              case 30:this.parModuleCall = param;break;
              case 31:this.parModuleOpportunity = param;break;
              case 32:this.parModuleAoQuote = param;break;
              case 33:this.parModuleTask = param;break;
              
              case 34:this.parQuoteBorrador = param;break;
              case 35:this.parQuoteNegociacion = param;break;
              case 36:this.parQuoteEnviado = param;break;
              case 37:this.parQuoteEnEspera = param;break;
              case 38:this.parQuoteCoonfirmado = param;break;
              case 39:this.parQuotePerdida = param;break;
              
              case 105:this.parAcceptCallNone = param;break;
              case 106:this.parAcceptCallAccept = param;break;
              
              case 107:this.parEmailTypeOut = param;break;
              case 108:this.parEmailStatusSent = param;break;
              
              case 109:this.parEmailIntentPick = param;break;
              
              case 11:this.parOpportunityStageCotizacion = param;break;
              case 12:this.parOpportunityStageNegociacion = param;break;
              case 13:this.parOpportunityStageReserva = param;break;
              case 14:this.parOpportunityStageCuotaInicial = param;break;
              case 15:this.parOpportunityStageArmadoCarpeta = param;break;
              case 16:this.parOpportunityStageCierreGanado = param;break;
              case 17:this.parOpportunityStageCierrePerdido = param;break;

            }
          });
        }
        resolve();
      });
    });
  }
  
  setUrl() {
  
  }
  
  setDate(date) {
    if (date) {
      let dayPad = date.getDate().pad(2);
      let monthPad = (date.getMonth()).pad(2);
      let yearPad = date.getFullYear();
      let strToday = `${dayPad}/${monthPad}/${yearPad}`;
      let strTomorrow = addDias(strToday,1);
      let strAfterTomorrow = addDias(strToday,2);
      let [day, month, year] = strTomorrow.split('/');
      let [dayT, monthT, yearT] = strTomorrow.split('/');
      let [dayAfterA, monthAfterA, yearAfterA] = strAfterTomorrow.split('/');
      return strToday;
    }
    return null
  }
  
  getExternalHtml(url) {
    return this.http.get(url);
  }
  
  setiFrameInterface() {
    if (this.toggleMenuOpened) {
      $('body .iframe-suitecrm').css('width','89%');
    } else {
      $('body .iframe-suitecrm').css('width','100%');
    }
    $('body .iframe-suitecrm').css('height','100%');
  }
  
  fixSuiteCrmInterface() {
    if (this.currentUser) {
      $('body').find('iframe').contents().find('body').find('#menu').hide();
      $('body').find('iframe').contents().find('body').find('#wrapper').css('margin','0px');
      $('body').find('iframe').contents().find('body').find('#logo').hide();
      $('body').find('iframe').contents().find('body').find('#header').css('position','absolute');
      $('body').find('iframe').contents().find('body').find('#header').css('left','-27px');
      $('body').find('iframe').contents().find('body').find('.navbar-right').find('#logout_link').hide();
      $('body').find('iframe').contents().find('body').find('.navbar-right').find('#admin_link').hide();
      $('body').find('iframe').contents().find('body').find('.navbar-right').find('#utilsLink').hide();
      $('body .iframe-suitecrm').css('width','89%');
      $('body .iframe-suitecrm').css('height','100%');
    }
  }
  
  fixiFrameSuitecrmInterface() {
    if (this.currentUser) {
    
    }
  }
  
  formatNumber(float, decimals = 2) {
    let stringFloat = float + "";
    let arraySplitFloat = stringFloat.split(".");
    let decimalsValue = "0";
    if (arraySplitFloat.length > 1) {
      decimalsValue = arraySplitFloat[1].slice(0, decimals);
    }
    let integerValue = arraySplitFloat[0];
    let arrayFullStringValue = [integerValue, decimalsValue];
    let FullStringValue = arrayFullStringValue.join(".");
    let floatFullValue = parseFloat(FullStringValue);
    let formatFloatFullValue = new Intl.NumberFormat('es-ES', { minimumFractionDigits: decimals }).format(floatFullValue);
    return formatFloatFullValue;
  }
  
}
