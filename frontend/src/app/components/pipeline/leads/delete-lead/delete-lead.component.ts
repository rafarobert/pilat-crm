import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Leads} from "../../../../../core/models/leads";
import {CrmLeadService} from "../../../../services/crm-lead.service";

@Component({
  selector: 'app-delete-lead',
  templateUrl: './delete-lead.component.html',
  styleUrls: ['./delete-lead.component.scss']
})
export class DeleteLeadComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<DeleteLeadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Leads,
    public crmLeadService: CrmLeadService
  ) { }
  
  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  confirmDelete(): void {
    this.crmLeadService.leadData.id = this.data.id;
  }
  
}
