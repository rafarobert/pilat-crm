import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CookieService} from "ngx-cookie-service";
import {AosQuotes} from "../../../../../core/models/aosQuotes";
import {AosQuotesCstm} from "../../../../../core/models/aosQuotesCstm";
import {CrmAosQuoteService} from "../../../../services/crm-aos-quote.service";
import {FormControl, Validators} from "@angular/forms";
import {PilatParams} from "../../../../../core/models/pilatParams";
import {PilatParamService} from "../../../../../core/services/pilat-param.service";
import {addMeses} from "fechas";
import {CrmUserService} from "../../../../services/crm-user.service";
import {PilatService} from "../../../../services/pilat.service";
import {PilatAuth} from "../../../../models/pilatAuth";
import {Users} from "../../../../../core/models/users";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-add-aos-quote',
  templateUrl: './add-aos-quote.component.html',
  styleUrls: ['./add-aos-quote.component.scss']
})
export class AddAosQuoteComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  parQuoteStages:PilatParams[] = [];
  parCurrencies:PilatParams[] = [];
  editando:boolean = false;
  parCurrentCurrency:PilatParams = new PilatParams();
  parVentaTipos: PilatParams[] = [];
  parPagoTipos: PilatParams[] = [];
  
  private pilatAuth:PilatAuth;
  
  constructor(
    public dialogRef: MatDialogRef<AddAosQuoteComponent>,
    private cookieService:CookieService,
    @Inject(MAT_DIALOG_DATA) public data: AosQuotes,
    @Inject(MAT_DIALOG_DATA) public dataAosQuoteCstm: AosQuotesCstm,
    private crmAosQuoteService: CrmAosQuoteService,
    private pilatParamService: PilatParamService,
    private crmUserService: CrmUserService,
    public pilatService: PilatService
  ) {
  }
  
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  
  ngOnInit(): void {
    this.setParams();
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
    this.data.expiration = new Date(parseInt(yearAfter), parseInt(monthAfter), parseInt(dayAfter));
    this.data.total_amount = this.data.total_amount ? parseFloat(this.data.total_amount.toString()) : 0;
    this.data.aoQuoteAosQuotesCstm.lbl_superficie_c = this.data.aoQuoteAosQuotesCstm.lbl_superficie_c ? parseInt(this.data.aoQuoteAosQuotesCstm.lbl_superficie_c.toString()) : 0;
    this.data.aoQuoteAosQuotesCstm.lbl_cuotainicial_c = this.data.aoQuoteAosQuotesCstm.lbl_cuotainicial_c ? parseFloat(this.data.aoQuoteAosQuotesCstm.lbl_cuotainicial_c.toString()) : 0;
  }
  
  async setParams() {
    await this.pilatParamService.getAllPilatParams([], {par_dictionary_id: '60099356e047f90b126cd150'}).subscribe(async (res) => {
      let response = res as { status: string, message: string, data: PilatParams[] };
      this.parQuoteStages = response.data;
    });
    await this.pilatParamService.getAllPilatParams([], {par_dictionary_id: '6007aadcb4fefa3640d86b7c'}).subscribe(async (res) => {
      let response = res as { status: string, message: string, data: PilatParams[] };
      this.parCurrencies = response.data;
    });
    await this.pilatParamService.getAllPilatParams([], {par_dictionary_id: '6014ef4f1302f107d6f68efb'}).subscribe(async (res) => {
      let response = res as { status: string, message: string, data: PilatParams[] };
      this.parVentaTipos = response.data;
    });
    await this.pilatParamService.getAllPilatParams([], {par_dictionary_id: '601a390100fff70c9ef353c1'}).subscribe(async (res) => {
      let response = res as { status: string, message: string, data: PilatParams[] };
      this.parPagoTipos = response.data;
    });
  }
  
  selectCurrency(value) {
    if (value) {
      this.parCurrentCurrency = this.parCurrencies.find(param => param.par_cod == value);
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
  
  public confirmAdd(): void {
    this.crmAosQuoteService.aosQuoteData = this.data;
  }

}
