import {Component, OnInit, ViewChild,} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import * as $ from 'jquery';
import {PilatService} from "./services/pilat.service";
import {OverviewComponent} from "./components/overview/overview.component";
import {MatBottomSheet, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {DictionariesComponent} from "./components/crud/dictionaries/dictionaries.component";
import {PilatAuth} from "./models/pilatAuth";
import {CookieService} from "ngx-cookie-service";
import {Users} from "../core/models/users";
import {CrmUserService} from "./services/crm-user.service";
import {AdminDialogComponent} from "./components/crud/admin-dialog.component";
import {PipelineDialogComponent} from "./components/pipeline/pipeline-dialog.component";
import {MatAccordion} from "@angular/material/expansion";
import {MatDrawer} from "@angular/material/sidenav";
import {environment} from "../environments/environment";
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  @ViewChild('drawer') drawer: MatDrawer;
  title:string = 'CRM Pilat';
  userId:string;
  animal: string;
  name: string;
  
  pilatAuth:PilatAuth;
  
  appItems:any[];
  httpHome:string;
  appConfig = {
    paddingAtStart: true,
    classname: 'my-custom-class',
    listBackgroundColor: '#ffffff',
    fontColor: '#6a6c6f',
    fontSize: '12px',
    backgroundColor: '#ffffff',
    selectedListFontColor: 'red',
  };
  
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<OverviewComponent>,
    private _bottomSheet: MatBottomSheet,
    public pilatService: PilatService,
    public dialog: MatDialog,
    public cookieService:CookieService,
    public crmUserService:CrmUserService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.httpHome = this.cookieService.get('httpReferer');
    this.pilatAuth = new PilatAuth();
    this.pilatAuth.userLoggedId = this.cookieService.get('userLogguedIn');
    this.pilatAuth.userSessId = this.cookieService.get('PHPSESSID');
    this.pilatService.currentSessId = this.pilatAuth.userSessId;
    this.pilatService.httpHome = this.httpHome;
    // this.location.replaceState('/');
    this.crmUserService.getUser(this.pilatAuth.userLoggedId).subscribe(res => {
      let response = res as { status: string, message: string, data: Users };
      this.pilatService.currentUser = response.data;
      this.pilatService.userLoggedIn = true;
      this.appItems = [
        {
          label: 'CRM Pipeline',
          link: '/crm/pipeline',
          icon: 'view_column'
        },
        {
          label: 'VENTAS',
          icon: 'sell',
          items: [
            {
              label: 'Inicio',
              link: this.httpHome + '?module=Home',
              icon: 'home_work',
              externalRedirect: true,
            },
            {
              label: 'Clientes',
              link: this.httpHome + '?module=Accounts&action=index&parentTab=Ventas',
              icon: 'account_box',
              externalRedirect: true,
            },
            {
              label: 'Contactos',
              link: this.httpHome + '?module=Contacts&action=index&parentTab=Ventas',
              icon: 'manage_accounts',
              externalRedirect: true,
            },
            {
              label: 'Oportunidades',
              link: this.httpHome + '?module=Opportunities&action=index&parentTab=Ventas',
              icon: 'lightbulb',
              externalRedirect: true,
            },
            {
              label: 'Prospectos',
              link: this.httpHome + '?module=Leads&action=index&parentTab=Ventas',
              icon: 'face_retouching_natural',
              externalRedirect: true,
            }
          ],
        },
        {
          label: 'ACTIVIDADES',
          icon: 'local_activity',
          items: [
            {
              label: 'Inicio',
              link: this.httpHome + '?module=Home&action=index&parentTab=Actividades',
              icon: 'home_work',
              externalRedirect: true,
            },
            {
              label: 'Calendario',
              link: this.httpHome + '?module=Calendar&action=index&parentTab=Actividades',
              icon: 'insert_invitation',
              externalRedirect: true,
            },
            {
              label: 'Llamadas',
              link: this.httpHome + '?module=Calls&action=index&parentTab=Actividades',
              icon: 'perm_phone_msg',
              externalRedirect: true,
            },
            {
              label: 'Reuniones',
              link: this.httpHome + '?module=Meetings&action=index&parentTab=Actividades',
              icon: 'meeting_room',
              externalRedirect: true,
            },
            {
              label: 'Correos',
              link: this.httpHome + '?module=Emails&action=index&parentTab=Actividades',
              icon: 'mark_as_unread',
              externalRedirect: true,
            },
            {
              label: 'Tareas',
              link: this.httpHome + '?module=Tasks&action=index&parentTab=Actividades',
              icon: 'task',
              externalRedirect: true,
            },
            {
              label: 'Notas',
              link: this.httpHome + '?module=Notes&action=index&parentTab=Actividades',
              icon: 'file_present',
              externalRedirect: true,
            }
          ],
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
      ];
      setTimeout(() => {
        this.drawer.toggle();
        this.pilatService.toggleMenuOpened = true;
      }, 1000)
    });
    
  }
  
  toggleMenu() {
    this.drawer.toggle();
    if (this.drawer.opened) {
      this.pilatService.toggleMenuOpened = true;
    } else {
      this.pilatService.toggleMenuOpened = false;
    }
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

