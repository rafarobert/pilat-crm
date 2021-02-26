import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  title:string;
  message:string;
  functionYes:Function;
  btnLabelYes:string;
  functionNo:Function;
  btnLabelNo:string;
  functionOptionOne:Function;
  btnLabelOptionOne:string;
  functionOptionTwo:Function;
  btnLabelOptionTwo:string;
  
  constructor(
    public dialogRef: MatDialogRef<DialogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.message = this.data.message;
    this.functionYes = this.data.functionYes;
    this.btnLabelYes = this.data.btnLabelYes;
    this.functionNo = this.data.functionNo;
    this.btnLabelNo = this.data.btnLabelNo;
  }

  exceuteFunction(funct) {
    if (typeof funct == 'function') {
      funct();
    }
  }
}
