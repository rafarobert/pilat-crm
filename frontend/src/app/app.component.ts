import {AfterViewInit, Component, OnInit, ViewChild,} from '@angular/core';
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
import {SpinnerService} from "./services/spinner.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  
  @ViewChild('drawer') drawer: MatDrawer;
  title:string = 'CRM Pilat';
  userId:string;
  animal: string;
  name: string;
  
  pilatAuth:PilatAuth;
  spinnerRef;
  
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
    private location: Location,
    public spinnerService:SpinnerService,
  ) {}
  
  ngAfterViewInit(): void {
    this.spinnerService.stop(this.spinnerService.spinnerRef);
  }
  
  ngOnInit(): void {
    this.pilatService.pageTitle = 'CRM PILAT';
    this.spinnerService.spinnerRef = this.spinnerService.start();
    this.httpHome = this.cookieService.get('httpReferer');
    this.pilatAuth = new PilatAuth();
    this.pilatAuth.userLoggedId = this.cookieService.get('userLogguedIn');
    this.pilatAuth.userSessId = this.cookieService.get('PHPSESSID');
    this.pilatService.currentSessId = this.pilatAuth.userSessId;
    this.pilatService.httpHome = this.httpHome;
    this.location.replaceState('/');
    this.crmUserService.getUser(this.pilatAuth.userLoggedId).subscribe(res => {
      let response = res as { status: string, message: string, data: Users };
      this.pilatService.currentUser = response.data;
      this.pilatService.userLoggedIn = true;
      this.appItems = [
        {
          label: 'CRM Pipeline',
          link: '/pipeline',
          icon: 'view_column'
        },
        {
          label: 'VENTAS',
          icon: 'sell',
          items: [
            {
              label: 'Inicio',
              link: '/',
              icon: 'home_work',
              //externalRedirect: true,
            },
            {
              label: 'Clientes',
              link: '/accounts',
              icon: 'account_box',
              // externalRedirect: true,
            },
            {
              label: 'Contactos',
              link: '/contacts',
              icon: 'manage_accounts',
              // externalRedirect: true,
            },
            {
              label: 'Oportunidades',
              link: '/opportunities',
              icon: 'lightbulb',
              // externalRedirect: true,
            },
            {
              label: 'Prospectos',
              link: '/leads',
              icon: 'face_retouching_natural',
              // externalRedirect: true,
            }
          ],
        },
        {
          label: 'ACTIVIDADES',
          icon: 'local_activity',
          items: [
            {
              label: 'Inicio',
              link: '/',
              icon: 'home_work',
              // externalRedirect: true,
            },
            {
              label: 'Calendario',
              link: '/calendar',
              icon: 'insert_invitation',
              // externalRedirect: true,
            },
            {
              label: 'Llamadas',
              link: '/calls',
              icon: 'perm_phone_msg',
              // externalRedirect: true,
            },
            {
              label: 'Reuniones',
              link: '/meetings',
              icon: 'meeting_room',
              // externalRedirect: true,
            },
            {
              label: 'Correos',
              link: '/mails',
              icon: 'mark_as_unread',
              // externalRedirect: true,
            },
            {
              label: 'Tareas',
              link: '/tasks',
              icon: 'task',
              // externalRedirect: true,
            },
            {
              label: 'Notas',
              link: '/notes',
              icon: 'file_present',
              // externalRedirect: true,
            }
          ],
        },
        {
          label: 'TODO',
          icon: 'local_activity',
          items: [
            {
              label: 'Inicio',
              link: '/',
              icon: 'home_work',
              // externalRedirect: true,
            },
            {
              label: 'Presupuestos',
              link: '/quotes',
              icon: 'request_quote',
              // externalRedirect: true,
            },
            {
              label: 'Documentos',
              link: '/documents',
              icon: 'description',
              // externalRedirect: true,
            },
            {
              label: 'Analisis Dinamico',
              link: '/dynamic-analysis',
              icon: 'psychology',
              // externalRedirect: true,
            },
            {
              label: 'Campañas',
              link: '/campaigns',
              icon: 'campaign',
              // externalRedirect: true,
            },
            {
              label: 'Facturas',
              link: '/bills',
              icon: 'price_change',
              // externalRedirect: true,
            },
            {
              label: 'contratos',
              link: '/contracts',
              icon: 'save',
              // externalRedirect: true,
            }
          ],
        },
        {
          label: 'Administrador',
          icon: 'settings',
          items: [
            {
              label: 'Diccionarios',
              link: '/admin/dictionaries',
              icon: 'menu_book'
            },
            {
              label: 'Parametros',
              link: '/admin/params',
              icon: 'menu_book'
            },
            {
              label: 'Usuarios',
              link: '/admin/users',
              icon: 'manage_accounts'
            },
            {
              label: 'Correos',
              link: '/admin/mails',
              icon: 'email'
            }
          ],
          hidden:this.pilatService.currentUser.id == 'a7e346e4-47ed-c596-2bcb-5be199070c40' ? false : true,
        },
      ];
      setTimeout(() => {
        if (!this.pilatService.isSmallScreen) {
          this.drawer.toggle();
          this.pilatService.toggleMenuOpened = true;
        } else {
          this.pilatService.toggleMenuOpened = false;
        }
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
    this.pilatService.setiFrameInterface();
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

