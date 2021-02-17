import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CookieService} from "ngx-cookie-service";
import {Calls} from "../../../../../core/models/calls";
import {CallsCstm} from "../../../../../core/models/callsCstm";
import {CrmCallService} from "../../../../services/crm-call.service";
import {FormControl, Validators} from "@angular/forms";
import {PilatService} from "../../../../services/pilat.service";
import {MatAccordion} from "@angular/material/expansion";
import {addDias, addMeses} from "fechas";

@Component({
  selector: 'app-add-call',
  templateUrl: './add-call.component.html',
  styleUrls: ['./add-call.component.scss']
})
export class AddCallComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  editando:boolean = false;
  today:Date;
  tomorrow:Date;
  afterTomorrow:Date;
  
  constructor(
    public dialogRef: MatDialogRef<AddCallComponent>,
    private cookieService:CookieService,
    @Inject(MAT_DIALOG_DATA) public data: Calls,
    @Inject(MAT_DIALOG_DATA) public dataCallCstm: CallsCstm,
    private crmCallService: CrmCallService,
    public pilatService:PilatService
  ) {
  }
  
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  
  ngOnInit(): void {
    this.data.name = null;
    this.data.date_entered = null;
    this.data.date_modified = null;
    this.data.modified_user_id = null;
    this.data.created_by = null;
    this.data.description = null;
    this.data.deleted = null;
    this.data.assigned_user_id = null;
    this.data.duration_hours = null;
    this.data.duration_minutes = null;
    this.data.date_start = null;
    this.data.date_end = null;
    this.data.parent_type = null;
    this.data.status = null;
    this.data.direction = null;
    this.data.parent_id = null;
    this.data.reminder_time = null;
    this.data.email_reminder_time = null;
    this.data.email_reminder_sent = null;
    this.data.outlook_id = null;
    this.data.repeat_type = null;
    this.data.repeat_interval = null;
    this.data.repeat_dow = null;
    this.data.repeat_until = null;
    this.data.repeat_count = null;
    this.data.repeat_parent_id = null;
    this.data.recurring_source = null;
  
  
    let date = new Date();
    let day = date.getDate().pad(2);
    let month = (date.getMonth()).pad(2);
    let year = date.getFullYear();
    let todayStr = `${day}/${month}/${year}`;;
    this.data.deleted = 0;
  
    let strTomorrow = addDias(todayStr,1);
    let strAfterTomorrow = addDias(todayStr,2);
    let [dayAfterT, monthAfterT, yearAfterT] = strTomorrow.split('/');
    let [dayAfterA, monthAfterA, yearAfterA] = strAfterTomorrow.split('/');
    this.tomorrow = new Date(parseInt(yearAfterT), parseInt(monthAfterT), parseInt(dayAfterT));
    this.afterTomorrow = new Date(parseInt(yearAfterA), parseInt(monthAfterA), parseInt(dayAfterA));
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
    this.crmCallService.callData = this.data;
  }

}
