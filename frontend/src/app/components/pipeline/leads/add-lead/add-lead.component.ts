import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Leads} from "../../../../../core/models/leads";
import {environment} from "../../../../../environments/environment";
import {PilatParamService} from "../../../../../core/services/pilat-param.service";
import {PilatParams} from "../../../../../core/models/pilatParams";
import {LeadsCstm} from "../../../../../core/models/leadsCstm";
import {CrmLeadService} from "../../../../services/crm-lead.service";
import {PilatService} from "../../../../services/pilat.service";
import {addDias, addMeses} from "fechas";
import {PilatAuth} from "../../../../models/pilatAuth";
import {Users} from "../../../../../core/models/users";
import {CrmUserService} from "../../../../services/crm-user.service";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.scss']
})
export class AddLeadComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild('reminder_time') picker: any;
  @ViewChild('leadForm') leadForm: FormGroup;
  
  today:Date;
  tomorrow:Date;
  afterTomorrow:Date;
  parCurrentTipoCliente:PilatParams;
  parCurrentCountry: PilatParams;
  parCurrentState: PilatParams;
  parCurrentCity: PilatParams;
  parCurrentOrigen: PilatParams;
  
  constructor(
    public dialogRef: MatDialogRef<AddLeadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Leads,
    @Inject(MAT_DIALOG_DATA) public dataLeadCstm: LeadsCstm,
    private crmLeadService: CrmLeadService,
    private pilatParamService: PilatParamService,
    public crmUserService:CrmUserService,
    public pilatService:PilatService,
  ) {}
  
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  
  ngOnInit(): void {
    this.pilatService.setParams([
      this.pilatService.DIC_SALUTATIONS,
      this.pilatService.DIC_CI_EXT,
      this.pilatService.DIC_LEAD_STATUSES,
      this.pilatService.DIC_LEAD_SOURCES,
      this.pilatService.DIC_CALL_STATUSES,
      this.pilatService.DIC_PROSPECT_STAGES,
      this.pilatService.DIC_GENEROS,
      this.pilatService.DIC_RUBROS,
      this.pilatService.DIC_LEAD_TIPOS,
      this.pilatService.DIC_CLIENTE_TIPOS,
      this.pilatService.DIC_COUNTRIES,
      this.pilatService.DIC_STATES,
      this.pilatService.DIC_CITIES,
      this.pilatService.DIC_CALL_DIRECTION,
    ]).then(() => {
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
      this.data.leadLeadsCstm.fecha_validex_c = this.data.leadLeadsCstm.fecha_validex_c ? this.data.leadLeadsCstm.fecha_validex_c : new Date(parseInt(yearAfter), parseInt(monthAfter), parseInt(dayAfter));
      let strTomorrow = addDias(todayStr,1);
      let strAfterTomorrow = addDias(todayStr,2);
      let [dayAfterT, monthAfterT, yearAfterT] = strTomorrow.split('/');
      let [dayAfterA, monthAfterA, yearAfterA] = strAfterTomorrow.split('/');
      this.tomorrow = new Date(parseInt(yearAfterT), parseInt(monthAfterT), parseInt(dayAfterT));
      this.afterTomorrow = new Date(parseInt(yearAfterA), parseInt(monthAfterA), parseInt(dayAfterA));
      this.data.status = this.data.status ? this.data.status : this.pilatService.parLeadNewStatus.par_cod;
      this.data.leadLeadsCstm.etapas_c = this.data.leadLeadsCstm.etapas_c ? this.data.leadLeadsCstm.etapas_c : this.pilatService.parLeadCaptadoStage.par_cod;
      this.selectOrigenCliente(this.pilatService.parLeadOrigenSitioWeb.par_cod);
      setTimeout(() => {
        this.accordion.openAll();
      },1000)
    });
  }
  
  selectCountry(value) {
    if (value) {
      this.parCurrentCountry = this.pilatService.parCountries.find(param => param.par_cod == value);
      this.pilatService.parStates = this.pilatService.parStates.filter(param => param.par_parent_id == this.parCurrentCountry._id);
      this.data.primary_address_country = this.parCurrentCountry.par_cod;
    }
  }
  
  selectState(value) {
    if (value) {
      this.parCurrentState = this.pilatService.parStates.find(param => param.par_cod == value);
      this.pilatService.parCities = this.pilatService.parCitiesBkp;
      this.pilatService.parCities = this.pilatService.parCities.filter(param => param.par_parent_id == this.parCurrentState._id);
      this.data.primary_address_state = this.parCurrentState.par_cod;
    }
  }
  
  selectCity(value) {
    if (value) {
      this.parCurrentCity = this.pilatService.parCities.find(param => param.par_cod == value);
      this.data.primary_address_city = this.parCurrentCity.par_cod;
    }
  }
  
  selectTipoCliente(value) {
    if (value) {
      this.parCurrentTipoCliente = this.pilatService.parClienteTipos.find(param => param.par_cod == value);
      this.data.leadLeadsCstm.tipo_cliente_c = this.parCurrentTipoCliente.par_cod;
    }
  }
  
  selectOrigenCliente(value) {
    if (value) {
      this.parCurrentOrigen = this.pilatService.parLeadSources.find(param => param.par_cod == value);
      this.data.lead_source = this.parCurrentOrigen.par_cod;
    }
  }
  
  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }
  
  submit() {
    // emppty stuff
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  parseDateTime(input) {
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1]-1, parts[2],parts[3],parts[4]); // months are 0-based
  }
  
  setCallTime() {
    let callDate = this.data.leadCallsLeads.callLeadCalls.callCallsCstm.llamada_fecha_c;
    let callHour = callDate.getHours();
    let callMinutes = callDate.getMinutes();
    this.data.leadCallsLeads.callLeadCalls.duration_hours = callHour;
    this.data.leadCallsLeads.callLeadCalls.duration_minutes = callMinutes;
    this.data.leadCallsLeads.callLeadCalls.date_start.setHours(callHour);
    this.data.leadCallsLeads.callLeadCalls.date_start.setMinutes(callMinutes);
  }
  
  
  public confirmAdd(): void {
    this.crmLeadService.leadData = this.data;
  }
}
