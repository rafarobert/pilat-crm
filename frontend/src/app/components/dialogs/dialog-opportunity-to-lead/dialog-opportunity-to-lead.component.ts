import { Component, OnInit } from '@angular/core';
import {CrmContactService} from "../../../services/crm-contact.service";
import {CrmAccountService} from "../../../services/crm-account.service";
import {CrmOpportunityService} from "../../../services/crm-opportunity.service";

@Component({
  selector: 'app-dialog-opportunity-to-lead',
  templateUrl: './dialog-opportunity-to-lead.component.html',
  styleUrls: ['./dialog-opportunity-to-lead.component.scss']
})
export class DialogOpportunityToLeadComponent implements OnInit {

  constructor(
    private crmContactService:CrmContactService,
    private crmAccountService:CrmAccountService,
    private crmOpportunityService:CrmOpportunityService,
  ) { }

  ngOnInit(): void {
  }

  async deleteOpportunidad(){
    let id = this.crmOpportunityService.opportunityData.id;
    this.crmContactService.deleteContact(id).subscribe(async (res) => {
      this.crmAccountService.deleteAccount(id).subscribe(async (res) => {
        this.crmOpportunityService.deleteOpportunity(id).subscribe(async (res) => {
    
        })
      });
    });
  }
}
