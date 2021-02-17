import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Calls} from "../../../../../core/models/calls";
import {CrmCallService} from "../../../../services/crm-call.service";

@Component({
  selector: 'app-delete-call',
  templateUrl: './delete-call.component.html',
  styleUrls: ['./delete-call.component.scss']
})
export class DeleteCallComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<DeleteCallComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Calls,
    public crmCallService: CrmCallService
  ) { }
  
  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  confirmDelete(): void {
    this.crmCallService.callData.id = this.data.id;
  }

}
