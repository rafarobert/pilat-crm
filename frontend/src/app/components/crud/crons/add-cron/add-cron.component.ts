import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PilatCrons} from "../../../../../core/models/pilatCrons";
import {PilatCronService} from "../../../../../core/services/pilat-cron.service";
import {PilatService} from "../../../../services/pilat.service";
import {PilatDictionaryService} from "../../../../../core/services/pilat-dictionary.service";
import {FormControl, Validators} from "@angular/forms";
import {PilatDictionaries} from "../../../../../core/models/pilatDictionaries";
import {PilatMailService} from "../../../../../core/services/pilat-mail.service";
import {PilatMails} from "../../../../../core/models/pilatMails";

@Component({
  selector: 'app-add-cron',
  templateUrl: './add-cron.component.html',
  styleUrls: ['./add-cron.component.scss']
})
export class AddCronComponent implements OnInit {
  
  pilatMails:PilatMails;
  
  constructor(
    public dialogRef: MatDialogRef<AddCronComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PilatCrons,
    public pilatCronService: PilatCronService,
    public pilatService:PilatService,
    public pilatMailService:PilatMailService,
    public pilatDictionaryService: PilatDictionaryService
  ) { }
  
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  
  ngOnInit(): void {
     this.setParams();
  }
  
  async setParams() {
    let respPilatMails:any = await this.pilatMailService.getAllPilatMails().toPromise();
    if (respPilatMails && respPilatMails.data) {
      this.pilatMails = respPilatMails.data;
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
    this.pilatCronService.pilatCronData = this.data;
  }
}
