import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SpinnerComponent} from "../components/spinner/spinner.component";
import {BuildingComponent} from "../components/building/building.component";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  
  buildingRef;
  
  constructor(private router: Router, private dialog: MatDialog) {
  
  }
  
  
  start(message?): MatDialogRef<BuildingComponent> {
    
    const dialogRef = this.dialog.open(BuildingComponent,{
      minWidth:'100vw',
      minHeight:'50vw',
      disableClose: true ,
      data: message == ''|| message == undefined ? "Cargando..." : message
    });
    return dialogRef;
  };
  
  stop(ref:MatDialogRef<BuildingComponent>){
    if (ref) {
      ref.close();
    }
  }}
