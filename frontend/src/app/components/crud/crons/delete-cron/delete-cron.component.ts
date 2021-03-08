import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PilatCrons} from "../../../../../core/models/pilatCrons";
import {PilatCronService} from "../../../../../core/services/pilat-cron.service";

@Component({
  selector: 'app-delete-cron',
  templateUrl: './delete-cron.component.html',
  styleUrls: ['./delete-cron.component.scss']
})
export class DeleteCronComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteCronComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PilatCrons, public pilatCronService: PilatCronService
  ) { }
  
  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  confirmDelete(): void {
    this.pilatCronService.pilatCronData._id = this.data._id;
  }
}
