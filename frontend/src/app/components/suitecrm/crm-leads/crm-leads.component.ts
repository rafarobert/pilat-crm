import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PilatService} from "../../../services/pilat.service";
import {DomSanitizer} from "@angular/platform-browser";
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "../../../services/spinner.service";
import {BuildingService} from "../../../services/building.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-crm-leads',
  templateUrl: './crm-leads.component.html',
  styleUrls: ['./crm-leads.component.scss']
})
export class CrmLeadsComponent implements OnInit {
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
    this.pilatService.fixSuiteCrmInterface();
    $('body')
      .find('iframe')
      .contents()
      .find('body')
      .find('hpanel')
      .find('.panel-body').hide();
    
    $('body')
      .find('iframe')
      .contents()
      .find('body')
      .find('hpanel').html('<app-leads></app-leads>');
  
    
    this.buildingService.stop(this.buildingService.buildingRef);
  }
  
  ngOnInit(): void {
    this.location.replaceState('/');
    this.buildingService.buildingRef= this.buildingService.start();
    this.urlHome = this.sanitizer.bypassSecurityTrustResourceUrl(this.pilatService.httpHome+ '?module=Leads&action=index&parentTab=Ventas');
  }
  
  ngAfterViewInit(): void {
    this.pilatService.fixiFrameSuitecrmInterface()
    //this.fixSuiteCrmInterface();
  }
  
}
