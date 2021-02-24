import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CookieService} from "ngx-cookie-service";
import {PilatParamService} from "../../../../../core/services/pilat-param.service";
import {environment} from "../../../../../environments/environment";
import {FormControl, Validators} from "@angular/forms";
import {Contacts} from "../../../../../core/models/contacts";
import {ContactsCstm} from "../../../../../core/models/contactsCstm";
import {CrmContactService} from "../../../../services/crm-contact.service";
import {PilatService} from "../../../../services/pilat.service";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  
  editando:boolean = false;
  
  constructor(
    public dialogRef: MatDialogRef<AddContactComponent>,
    private cookieService:CookieService,
    @Inject(MAT_DIALOG_DATA) public data: Contacts,
    @Inject(MAT_DIALOG_DATA) public dataContactCstm: ContactsCstm,
    private crmContactService: CrmContactService,
    public pilatService:PilatService
  ) {
  }
  
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  
  ngOnInit(): void {
    this.data.date_entered = new Date();
    this.data.date_modified = new Date();
    this.data.deleted = 0;
    this.data.do_not_call = 0;
    this.data.lawful_basis = '';
    this.data.lawful_basis_source = '';
    this.data.portal_user_type = 'Single';
    this.data.portal_account_disabled = null;
    this.data.joomla_account_id = null;
    this.data.campaign_id = '';
    this.data.reports_to_id = '';
    this.data.lead_source = '';
    this.data.date_reviewed = null;
    this.data.assistant = '';
    this.data.assistant_phone = '';
    this.data.alt_address_postalcode = '';
    this.data.primary_address_postalcode = '';
    this.data.alt_address_street= '';
    this.data.alt_address_city= '';
    this.data.alt_address_state= '';
    this.data.alt_address_country= '';
    this.data.phone_fax= '';
    this.data.phone_other= '';
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
    this.crmContactService.contactData = this.data;
  }
}
