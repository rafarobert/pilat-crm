import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CookieService} from "ngx-cookie-service";
import {FormControl, Validators} from "@angular/forms";
import {Accounts} from "../../../../../core/models/accounts";
import {AccountsCstm} from "../../../../../core/models/accountsCstm";
import {CrmAccountService} from "../../../../services/crm-account.service";
import {PilatParamService} from "../../../../../core/services/pilat-param.service";
import {PilatParams} from "../../../../../core/models/pilatParams";
import {PilatService} from "../../../../services/pilat.service";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {
  
  pilatParamsCiExt:PilatParams[] = [];
  editando:boolean = false;
  
  constructor(
    public dialogRef: MatDialogRef<AddAccountComponent>,
    public pilatParamServicee: PilatParamService,
    private cookieService:CookieService,
    @Inject(MAT_DIALOG_DATA) public data: Accounts,
    @Inject(MAT_DIALOG_DATA) public dataAccountCstm: AccountsCstm,
    private crmAccountService: CrmAccountService,
    public pilatService: PilatService
  ) {
  }
  
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  
  ngOnInit(): void {
    this.data.date_entered = new Date();
    this.data.date_modified = new Date();
    this.data.account_type = null;
    this.data.industry = null;
    this.data.annual_revenue = null;
    this.data.rating = null;
    this.data.phone_alternate = null;
    this.data.employees = null;
    this.data.ticker_symbol = null;
    this.data.parent_id = null;
    this.data.sic_code = null;
    this.data.billing_address_postalcode = '';
    this.data.shipping_address_postalcode = '';
    this.data.deleted = 0;
    this.data.campaign_id = '';
    this.data.phone_fax= '';
    this.getCiExtentions();
  }
  
  async getCiExtentions() {
    await this.pilatParamServicee.getAllPilatParams([], {par_dictionary_id:'60029af5e2015758ec69b743'}).subscribe(async (res) => {
      let response = res as { status: string, message: string, data: PilatParams[] };
      this.pilatParamsCiExt = response.data;
    });
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
    this.crmAccountService.accountData = this.data;
  }

}
