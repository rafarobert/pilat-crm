import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PilatParamService} from "../../../../../core/services/pilat-param.service";
import {PilatParams} from "../../../../../core/models/pilatParams";

@Component({
  selector: 'app-delete-param',
  templateUrl: './delete-param.component.html',
  styleUrls: ['./delete-param.component.scss']
})
export class DeleteParamComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<DeleteParamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PilatParams, public pilatParamService: PilatParamService
  ) { }
  
  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  confirmDelete(): void {
    this.pilatParamService.pilatParamData._id = this.data._id;
  }
}
