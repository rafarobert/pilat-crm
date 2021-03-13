import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {BuildingComponent} from "../components/building/building.component";
import {LoadingComponent} from "../components/loading/loading.component";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  
  loadingRef;
  
  constructor(private router: Router, private dialog: MatDialog) {}
  
  start(message?): MatDialogRef<BuildingComponent> {
    
    const dialogRef = this.dialog.open(LoadingComponent,{
      minWidth:'80vw',
      minHeight:'30vw',
      disableClose: true ,
      data: message == ''|| message == undefined ? "Cargando..." : message
    });
    return dialogRef;
  };
  
  stop(ref:MatDialogRef<LoadingComponent>){
    if (ref) {
      ref.close();
    }
  }
}
