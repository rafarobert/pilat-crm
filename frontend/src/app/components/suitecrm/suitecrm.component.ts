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
    this.location.replaceState('/');
    this.pilatService.fixSuiteCrmInterface();
    this.buildingService.stop(this.buildingService.buildingRef);
  }
  
  ngOnInit(): void {
    this.buildingService.buildingRef= this.buildingService.start();
    this.urlHome = this.sanitizer.bypassSecurityTrustResourceUrl(this.pilatService.httpHome);
  }
  
  ngAfterViewInit(): void {
    this.pilatService.fixiFrameSuitecrmInterface();
    //this.fixSuiteCrmInterface();
  }

}
