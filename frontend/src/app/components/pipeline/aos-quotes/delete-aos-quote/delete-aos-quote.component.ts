import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AosQuotes} from "../../../../../core/models/aosQuotes";
import {CrmAosQuoteService} from "../../../../services/crm-aos-quote.service";

@Component({
  selector: 'app-delete-aos-quote',
  templateUrl: './delete-aos-quote.component.html',
  styleUrls: ['./delete-aos-quote.component.scss']
})
export class DeleteAosQuoteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteAosQuoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AosQuotes,
    public crmAosQuoteService: CrmAosQuoteService
  ) { }
  
  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  confirmDelete(): void {
    this.crmAosQuoteService.aosQuoteData.id = this.data.id;
  }
  
  
}
