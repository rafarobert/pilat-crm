import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Contacts} from "../../../../../core/models/contacts";
import {CrmContactService} from "../../../../services/crm-contact.service";

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.scss']
})
export class DeleteContactComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<DeleteContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contacts,
    public crmContactService: CrmContactService
  ) { }
  
  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  confirmDelete(): void {
    this.crmContactService.contactData.id = this.data.id;
  }
  
  
}
