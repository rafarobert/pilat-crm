import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatBottomSheet, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {AdminDialogComponent} from "../crud/admin-dialog.component";
import {PipelineDialogComponent} from "../pipeline/pipeline-dialog.component";
import {MultilevelMenuService} from "ng-material-multilevel-menu";
import {PilatService} from "../../services/pilat.service";
import {PilatAuth} from "../../models/pilatAuth";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  
  appItems:any[] = [
    {
      label: 'CRM Pipeline',
      link: '/crm/pipeline',
      icon: 'view_column'
    },
    {
      label: 'Administrador',
      icon: 'settings',
      items: [
        {
          label: 'Diccionarios',
          link: '/crm/admin/dictionaries',
          icon: 'menu_book'
        },
        {
          label: 'Parametros',
          link: '/crm/admin/params',
          icon: 'menu_book'
        },
        {
          label: 'Usuarios',
          link: '/crm/admin/users',
          icon: 'manage_accounts'
        },
        {
          label: 'Correos',
          link: '/crm/admin/mails',
          icon: 'email'
        }
      ],
      hidden:this.pilatService.currentUser.id == 'a7e346e4-47ed-c596-2bcb-5be199070c40' ? false : true,
    },
    {
      label: 'Item 4',
      link: '/item-4',
      icon: 'star_rate',
      hidden: true
    }
  ];
  appConfig = {
    paddingAtStart: true,
    classname: 'my-custom-class',
    listBackgroundColor: 'rgb(208, 241, 239)',
    fontColor: 'rgb(8, 54, 71)',
    backgroundColor: 'rgb(208, 241, 239)',
    selectedListFontColor: 'red',
  };
  
  constructor(
    public dialog: MatDialog,
    public pilatService:PilatService,
    private _bottomSheetRef: MatBottomSheetRef<OverviewComponent>,
  ) {}
  
  
  ngOnInit(): void {
  }
  
  closeBootomSheet() {
    this._bottomSheetRef.dismiss();
  }
  
  selectedItem (event):void {
  
  }
  
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  
  openAdminDialog($event) {
    const dialogRef = this.dialog.open(AdminDialogComponent,{
      width: '1700px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openPipelineDialog($event) {
    const dialogRef = this.dialog.open(PipelineDialogComponent, {
      width:'3500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
