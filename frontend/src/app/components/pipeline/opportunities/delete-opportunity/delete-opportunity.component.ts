import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Opportunities} from "../../../../../core/models/opportunities";
import {CrmOpportunityService} from "../../../../services/crm-opportunity.service";

@Component({
  selector: 'app-delete-opportunity',
  templateUrl: './delete-opportunity.component.html',
  styleUrls: ['./delete-opportunity.component.scss']
})
export class DeleteOpportunityComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<DeleteOpportunityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Opportunities,
    public crmOpportunityService: CrmOpportunityService
  ) { }
  
  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  confirmDelete(): void {
    this.crmOpportunityService.opportunityData.id = this.data.id;
  }
  
}
