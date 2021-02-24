import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-set-contact-mail',
  templateUrl: './dialog-set-contact-mail.component.html',
  styleUrls: ['./dialog-set-contact-mail.component.scss']
})
export class DialogSetContactMailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogSetContactMailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
