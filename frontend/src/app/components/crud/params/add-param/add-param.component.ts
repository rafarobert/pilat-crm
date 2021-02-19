import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PilatParams} from "../../../../../core/models/pilatParams";
import {PilatParamService} from "../../../../../core/services/pilat-param.service";
import {FormControl, Validators} from "@angular/forms";
import {PilatDictionaries} from "../../../../../core/models/pilatDictionaries";
import {PilatDictionaryService} from "../../../../../core/services/pilat-dictionary.service";
import {PilatService} from "../../../../services/pilat.service";

@Component({
  selector: 'app-add-param',
  templateUrl: './add-param.component.html',
  styleUrls: ['./add-param.component.scss']
})
export class AddParamComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<AddParamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PilatParams,
    public pilatParamService: PilatParamService,
    public pilatService:PilatService,
    public pilatDictionaryService: PilatDictionaryService
  ) { }
  
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  
  pilatDictionaries:PilatDictionaries[] = [];
  pilatParents:PilatParams[] = [];
  
  ngOnInit(): void {
    this.pilatDictionaryService.getAllPilatDictionaries().subscribe(res => {
      let response = res as { status: string, message: string, data: PilatDictionaries[] };
      this.pilatDictionaries = response.data;
    });
    this.pilatParamService.getAllPilatParams().subscribe(res => {
      let response = res as { status: string, message: string, data: PilatParams[] };
      this.pilatParents = response.data;
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
    this.pilatParamService.pilatParamData = this.data;
  }

}
