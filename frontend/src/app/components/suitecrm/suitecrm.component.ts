import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PilatService} from "../../services/pilat.service";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "../../services/spinner.service";
import {BuildingService} from "../../services/building.service";
import {Location} from "@angular/common";
import {PilatLogService} from "../../../core/services/pilat-log.service";
import {PilatLogs} from "../../../core/models/pilatLogs";
import {environment} from "../../../environments/environment";
declare var $:any;

@Component({
  selector: 'app-suitecrm',
  templateUrl: './suitecrm.component.html',
  styleUrls: ['./suitecrm.component.scss']
})
export class SuitecrmComponent implements OnInit,AfterViewInit {
  suiteCrmHtml:any;
  urlHome;
  empData;
  temp;
  pilatLogs:PilatLogs[] = [];
  contentPilatLogs: string = '';
  
  constructor(
    public http:HttpClient,
    public pilatService:PilatService,
    public sanitizer:DomSanitizer,
    public cookieService:CookieService,
    private activatedRoute: ActivatedRoute,
    public spinnerService: SpinnerService,
    private location: Location,
    public buildingService: BuildingService,
    private pilatLogService: PilatLogService
  ) {
  }
  
  iFrameLoaded() {
    this.location.replaceState('/');
    if (this.pilatService.currentUser) {
      $('body').find('iframe').contents().find('head').append('<link rel="stylesheet" type="text/css" href="frontend/plugins/suitecrm/css/style.css"/>');
      $('body').find('iframe').contents().find('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.css">\n');
      $('body').find('iframe').contents().find('head').append('<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.js"></script>');
      $('body').find('iframe').contents().find('body').find('#menu').hide();
      $('body').find('iframe').contents().find('body').find('#wrapper').css('margin','0px');
      $('body').find('iframe').contents().find('body').find('#logo').hide();
      $('body').find('iframe').contents().find('body').find('.header-link').hide();
      $('body').find('iframe').contents().find('body').find('.small-logo').hide();
      // $('body').find('iframe').contents().find('body').find('.dropdown').hide();
      // $('body').find('iframe').contents().find('body').find('#header').css('left','-27px');
      $('body').find('iframe').contents().find('body').find('.navbar-right').css('width','100%');
      $('body').find('iframe').contents().find('body').find('.navbar-right .dropdown-menu').css('left','0px');
      $('body').find('iframe').contents().find('body').find('.navbar-right').find('#logout_link').hide();
      $('body').find('iframe').contents().find('body').find('.navbar-right').find('#admin_link').hide();
      $('body').find('iframe').contents().find('body').find('.navbar-right').find('#utilsLink').hide();
      
      $('body').find('iframe').contents().find('body').find('#wrapper').find('.tab-content').prepend(`
        <div style="width: 100%">
            <div style="width: 100%" class="panel-pilat-log">
                <h3><span>Flujo Actividad Pipeline</span></h3>
                <table id="pilatLog" class="cell-border compact stripe" style="width:100%">
                  <thead>
                      <tr>
                          <th>Usuario</th>
                          <th>Acción</th>
                          <th>Descripcion</th>
                          <th>Modulo</th>
                          <th>Creado</th>
                          <th>Actualizado</th>
                      </tr>
                  </thead>
                </table>
            </div>
        </div>
      `);
  
      $('body').find('iframe').contents().find('body').find('#wrapper').find('.tab-content').find('#pilatLog').DataTable({
        processing: true,
        serverSide: true,
        serverMethod: 'post',
        ajax: {
          url: `${environment.backend.server.webpath}/api-pilatsrl/datatable/pilat-logs`,
          dataSrc: 'data'
        },
        columns: [
          { data: 'user'},
          { data: 'action' },
          { data: 'description'},
          { data: 'module'},
          { data: 'createdAt'},
          { data: 'updatedAt'}
        ]
      });
      
      if (this.pilatService.isSmallScreen) {
        $('body .iframe-suitecrm').css('width','100%');
      } else {
        $('body .iframe-suitecrm').css('width','88%');
      }
      $('body .iframe-suitecrm').css('height','100%');
    }
    this.buildingService.stop(this.buildingService.buildingRef);
  }
  
  setHtmlPilatLogs() {
    this.contentPilatLogs = '';
    if (this.pilatLogs.length){
      for (let i = 0 ; i < this.pilatLogs.length ; i++) {
        let pilatLog = this.pilatLogs[i];
        this.contentPilatLogs += pilatLog.description
      }
    }
  }
  
  ngOnInit(): void {
    this.buildingService.buildingRef= this.buildingService.start();
    this.urlHome = this.sanitizer.bypassSecurityTrustResourceUrl(this.pilatService.httpHome);
    this.setParams();
  }
  
  async setParams() {
    if (this.pilatService.currentUser) {
      let respPilatLogs:any = await this.pilatLogService.getAllPilatLogs([], {createdBy:this.pilatService.currentUser.id}).toPromise();
      if (respPilatLogs && respPilatLogs.data) {
        this.pilatLogs = respPilatLogs.data;
      }
    }
  }
  
  ngAfterViewInit(): void {
    this.pilatService.fixiFrameSuitecrmInterface();
    //this.fixSuiteCrmInterface();
  }

}
