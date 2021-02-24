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
  
  open(message?): MatDialogRef<DialogsComponent> {
    
    const dialogRef = this.dialog.open(DialogsComponent,{
      disableClose: true ,
      data: message == ''|| message == undefined ? "Loading..." : message
    });
    return dialogRef;
  };
  
  close(ref:MatDialogRef<DialogsComponent>){
    ref.close();
  }
  
}
