import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PilatService} from "../../services/pilat.service";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "../../services/spinner.service";
import {BuildingService} from "../../services/building.service";
import {Location} from "@angular/common";
declare var $:any;

@Component({
  selector: 'app-suitecrm',
  templateUrl: './suitecrm.component.html',
  styleUrls: ['./suitecrm.component.scss']
})
export class SuitecrmComponent implements OnInit,AfterViewInit {

  suiteCrmHtml:any;
  urlHome;
  
  constructor(
    public http:HttpClient,
    public pilatService:PilatService,
    public sanitizer:DomSanitizer,
    public cookieService:CookieService,
    private activatedRoute: ActivatedRoute,
    public spinnerService: SpinnerService,
    private location: Location,
    public buildingService: BuildingService
  ) {
  }
  
  iFrameLoaded() {
    this.fixSuiteCrmInterface();
    this.buildingService.stop(this.buildingService.buildingRef);
  }
  
  ngOnInit(): void {
    this.location.replaceState('/');
    this.buildingService.buildingRef= this.buildingService.start();
    this.urlHome = this.sanitizer.bypassSecurityTrustResourceUrl(this.pilatService.httpHome);
  }
  
  ngAfterViewInit(): void {
    $('body .iframe-suitecrm').css('width','89%');
    $('body .iframe-suitecrm').css('height','100%');
    //this.fixSuiteCrmInterface();
  }
  
  fixSuiteCrmInterface() {
    $('body').find('iframe').contents().find('body').find('#menu').hide();
    $('body').find('iframe').contents().find('body').find('#wrapper').css('margin','0px');
    $('body').find('iframe').contents().find('body').find('#logo').hide();
    $('body').find('iframe').contents().find('body').find('.navbar-right').find('#logout_link').hide();
    $('body').find('iframe').contents().find('body').find('.navbar-right').find('#admin_link').hide();
    $('body').find('iframe').contents().find('body').find('.navbar-right').find('#utilsLink').hide();
  }

}
