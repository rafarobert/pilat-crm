import {Component, OnInit,} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import * as $ from 'jquery';
import {PilatService} from "./services/pilat.service";
import {OverviewComponent} from "./components/overview/overview.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {DictionariesComponent} from "./components/crud/dictionaries/dictionaries.component";
import {PilatAuth} from "./models/pilatAuth";
import {CookieService} from "ngx-cookie-service";
import {Users} from "../core/models/users";
import {CrmUserService} from "./services/crm-user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title:string = 'CRM Pilat';
  userId:string;
  animal: string;
  name: string;
  
  pilatAuth:PilatAuth;
  
  constructor(
    private _bottomSheet: MatBottomSheet,
    public pilatService: PilatService,
    public dialog: MatDialog,
    public cookieService:CookieService,
    public crmUserService:CrmUserService
  ) {}
  
  ngOnInit(): void {
    this.pilatAuth = new PilatAuth();
    this.pilatAuth.userLoggedId = this.cookieService.get('userLogguedIn');
    this.pilatAuth.userSessId = this.cookieService.get('PHPSESSID');
    this.pilatService.currentSessId = this.pilatAuth.userSessId;
    this.crmUserService.getUser(this.pilatAuth.userLoggedId).subscribe(res => {
      let response = res as { status: string, message: string, data: Users };
      this.pilatService.currentUser = response.data;
      this.pilatService.userLoggedIn = true;
    });
  
  }
  
  openBottomSheet(): void {
    this._bottomSheet.open(OverviewComponent);
  }
  cleanPhpError() {
    $('.xdebug-error').remove();
    $("br").remove();
    // this.fixStyleWidth();
  }
  
  setPipelineStatus() {
    $('select[name="status"]').find('option').each((index,option) => {
      if($(option).html() != '') {
        this.pilatService.pipelineStatus.push($(option).html())
      }
    });
  }
  
  associateAthlete(participant: any) {
    this._bottomSheet._openedBottomSheetRef =
      this._bottomSheet.open(OverviewComponent,
        { data: { member: participant, organizations:
            this._bottomSheet }, disableClose: false });
    
    
    //after closing the bottom sheet afterDismissed function will be fired.
    
    this._bottomSheet._openedBottomSheetRef.afterDismissed().subscribe((data) => {
      alert('dismissed');
    })
  }
  
}

