import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PilatDictionaries} from "../../../../../core/models/pilatDictionaries";
import {PilatDictionaryService} from "../../../../../core/services/pilat-dictionary.service";

@Component({
  selector: 'app-delete-dictionary',
  templateUrl: './delete-dictionary.component.html',
  styleUrls: ['./delete-dictionary.component.scss']
})
export class DeleteDictionaryComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<DeleteDictionaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PilatDictionaries,
    public pilatDictionaryService: PilatDictionaryService
  ) { }
  
  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  confirmDelete(): void {
    this.pilatDictionaryService.pilatDictionaryData._id = this.data._id;
  }
}
