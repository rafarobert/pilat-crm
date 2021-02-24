import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PilatMails} from "../../../../../core/models/pilatMails";
import {PilatMailService} from "../../../../../core/services/pilat-mail.service";

@Component({
  selector: 'app-delete-mail',
  templateUrl: './delete-mail.component.html',
  styleUrls: ['./delete-mail.component.scss']
})
export class DeleteMailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteMailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PilatMails, public pilatMailService: PilatMailService
  ) { }
  
  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  confirmDelete(): void {
    this.pilatMailService.pilatMailData._id = this.data._id;
  }
}
