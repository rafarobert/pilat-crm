import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SpinnerComponent} from "../components/spinner/spinner.component";
import {Router} from "@angular/router";
import {DialogsComponent} from "../components/dialogs/dialogs.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private router: Router, private dialog: MatDialog) { }
  
  open(message = '', title:string = '', functionYes:Function = null, btnLabelYes:string = 'Si', functionNo:Function = null, btnLabelNo:string = 'No', functionOptionOne:Function = null, btnLabelOptionOne:string = null, functionOptionTwo:Function = null, btnLabelOptionTwo:string = null): MatDialogRef<DialogsComponent> {
    
    const dialogRef = this.dialog.open(DialogsComponent,{
      disableClose: true ,
      data: {
        title:title,
        message:message,
        functionYes:functionYes,
        btnLabelYes:btnLabelYes,
        functionNo:functionNo,
        btnLabelNo:btnLabelNo,
        functionOptionOne:functionOptionOne,
        btnLabelOptionOne:btnLabelOptionOne,
        functionOptionTwo:functionOptionTwo,
        btnLabelOptionTwo:btnLabelOptionTwo,
      },
    });
    return dialogRef;
  };
  
  close(ref:MatDialogRef<DialogsComponent>){
    ref.close();
  }
  
}
