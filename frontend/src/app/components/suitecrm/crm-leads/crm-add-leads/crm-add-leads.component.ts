import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PilatService} from "../../../../services/pilat.service";
import {DomSanitizer} from "@angular/platform-browser";
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Router} from "@angular/router";
import {SpinnerService} from "../../../../services/spinner.service";
import {Location} from "@angular/common";
import {BuildingService} from "../../../../services/building.service";

@Component({
  selector: 'app-crm-add-leads',
  templateUrl: './crm-add-leads.component.html',
  styleUrls: ['./crm-add-leads.component.scss']
})
export class CrmAddLeadsComponent implements OnInit {
  suiteCrmHtml:any;
  urlHome;
  id:string ;
  constructor(
    public http:HttpClient,
    public pilatService:PilatService,
    public sanitizer:DomSanitizer,
    public cookieService:CookieService,
    private activatedRoute: ActivatedRoute,
    public spinnerService: SpinnerService,
    private location: Location,
    public buildingService: BuildingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }
  
  iFrameLoaded() {
    this.pilatService.fixSuiteCrmInterface();
    this.buildingService.stop(this.buildingService.buildingRef);
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.location.replaceState('/');
    this.buildingService.buildingRef= this.buildingService.start();
    this.urlHome = this.sanitizer.bypassSecurityTrustResourceUrl(this.pilatService.httpHome+ '?module=Leads&action=index&parentTab=Ventas');
  }
  
  ngAfterViewInit(): void {
    this.pilatService.fixiFrameSuitecrmInterface()
    //this.fixSuiteCrmInterface();
  }
  
}
