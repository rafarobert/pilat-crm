import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PilatService} from "../../../services/pilat.service";
import {DomSanitizer} from "@angular/platform-browser";
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Router} from "@angular/router";
import {SpinnerService} from "../../../services/spinner.service";
import {BuildingService} from "../../../services/building.service";
import {Location} from "@angular/common";
import {Leads} from "../../../../core/models/leads";

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
    public spinnerService: SpinnerService,
    private location: Location,
    public buildingService: BuildingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }
  
  
  
  iFrameLoaded() {
    this.pilatService.fixSuiteCrmInterface();
      $('body').find('iframe').contents().find('body').find('.navbar-right').find('.navbar-nav').append(`<li class="dropdown" style="position: absolute; right: 30px;"><a onclick="window.location.replace('` + this.pilatService.httpHome + `?module=Leads&action=index&parentTab=Ventas');" href="#" class="dropdown-toggle label-menu-corner close-button"><i class="pe-7s-close"></i></a></li>`);
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
  
  goToLead(lead: Leads) {
    let leadId = lead ? lead.id : null;
    this.router.navigate(['/leads', { id: leadId }]);
  }
  
  goToLeadId(id:string) {
    this.router.navigate(['/leads', { id: id }]);
  }
  
}
