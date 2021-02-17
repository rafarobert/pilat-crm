import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PilatDictionaries} from "../../../../../core/models/pilatDictionaries";
import {PilatDictionaryService} from "../../../../../core/services/pilat-dictionary.service";
import {FormControl, Validators} from "@angular/forms";
import {PilatService} from "../../../../services/pilat.service";

@Component({
  selector: 'app-add-dictionary',
  templateUrl: './add-dictionary.component.html',
  styleUrls: ['./add-dictionary.component.scss']
})
export class AddDictionaryComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddDictionaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PilatDictionaries,
    public pilatDictionaryService: PilatDictionaryService,
    public pilatService:PilatService
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
    this.pilatDictionaryService.pilatDictionaryData = this.data;
  }
}
