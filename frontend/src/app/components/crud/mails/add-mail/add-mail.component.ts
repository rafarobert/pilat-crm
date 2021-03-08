import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PilatMails} from "../../../../../core/models/pilatMails";
import {PilatMailService} from "../../../../../core/services/pilat-mail.service";
import {PilatService} from "../../../../services/pilat.service";
import {PilatDictionaryService} from "../../../../../core/services/pilat-dictionary.service";
import {FormControl, Validators} from "@angular/forms";
import {PilatDictionaries} from "../../../../../core/models/pilatDictionaries";

@Component({
  selector: 'app-add-mail',
  templateUrl: './add-mail.component.html',
  styleUrls: ['./add-mail.component.scss']
})
export class AddMailComponent implements OnInit {
  
  
  constructor(
    public dialogRef: MatDialogRef<AddMailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PilatMails,
    public pilatMailService: PilatMailService,
    public pilatService:PilatService,
    public pilatDictionaryService: PilatDictionaryService
  ) { }
  
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  
  ngOnInit(): void {
  
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
    this.pilatMailService.pilatMailData = this.data;
  }
}
