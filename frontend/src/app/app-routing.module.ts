import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {PipelineDialogComponent} from "./components/pipeline/pipeline-dialog.component";
import {DictionariesComponent} from "./components/crud/dictionaries/dictionaries.component";
import {ParamsComponent} from "./components/crud/params/params.component";
import {UsersComponent} from "./components/crud/users/users.component";
import {MailsComponent} from "./components/crud/mails/mails.component";
import {HomeComponent} from "./components/home/home.component";
import {SuitecrmComponent} from "./components/suitecrm/suitecrm.component";
import {CrmAccountsComponent} from "./components/suitecrm/crm-accounts/crm-accounts.component";
import {CrmContactsComponent} from "./components/suitecrm/crm-contacts/crm-contacts.component";
import {CrmOpportunitiesComponent} from "./components/suitecrm/crm-opportunities/crm-opportunities.component";
import {CrmLeadsComponent} from "./components/suitecrm/crm-leads/crm-leads.component";
import {CrmCalendarComponent} from "./components/suitecrm/crm-calendar/crm-calendar.component";
import {CrmCallsComponent} from "./components/suitecrm/crm-calls/crm-calls.component";
import {CrmMeetingsComponent} from "./components/suitecrm/crm-meetings/crm-meetings.component";
import {CrmNotesComponent} from "./components/suitecrm/crm-notes/crm-notes.component";
import {CrmMailsComponent} from "./components/suitecrm/crm-mails/crm-mails.component";
import {CrmTasksComponent} from "./components/suitecrm/crm-tasks/crm-tasks.component";
import {CrmToolsComponent} from "./components/suitecrm/crm-tools/crm-tools.component";
import {CrmAosQuoteService} from "./services/crm-aos-quote.service";
import {CrmDocumentsComponent} from "./components/suitecrm/crm-documents/crm-documents.component";
import {CrmDynamicAnalysisComponent} from "./components/suitecrm/crm-dynamic-analysis/crm-dynamic-analysis.component";
import {CrmCampaignsComponent} from "./components/suitecrm/crm-campaigns/crm-campaigns.component";
import {CrmBillsComponent} from "./components/suitecrm/crm-bills/crm-bills.component";
import {CrmQuotesComponent} from "./components/suitecrm/crm-quotes/crm-quotes.component";
import {CronsComponent} from "./components/crud/crons/crons.component";
import {CrmAddLeadsComponent} from "./components/suitecrm/crm-leads/crm-add-leads/crm-add-leads.component";


const routes: Routes = [
  { path: '', component: SuitecrmComponent, pathMatch: 'full' },
  // { path: 'crm', component: SuitecrmComponent, pathMatch: 'full' },
  { path: 'pipeline', component: PipelineDialogComponent, pathMatch: 'full' },
  { path: 'accounts', component: CrmAccountsComponent, pathMatch: 'full' },
  { path: 'contacts', component: CrmContactsComponent, pathMatch: 'full' },
  { path: 'opportunities', component: CrmOpportunitiesComponent, pathMatch: 'full' },
  { path: 'leads', component: CrmLeadsComponent, pathMatch: 'full' },
  { path: 'leads/add', component: CrmAddLeadsComponent, pathMatch: 'full' },
  { path: 'calendar', component: CrmCalendarComponent, pathMatch: 'full' },
  { path: 'calls', component: CrmCallsComponent, pathMatch: 'full' },
  { path: 'meetings', component: CrmMeetingsComponent, pathMatch: 'full' },
  { path: 'notes', component: CrmNotesComponent, pathMatch: 'full' },
  { path: 'mails', component: CrmMailsComponent, pathMatch: 'full' },
  { path: 'tasks', component: CrmTasksComponent, pathMatch: 'full' },
  { path: 'tools', component: CrmToolsComponent, pathMatch: 'full' },
  { path: 'quotes', component: CrmQuotesComponent, pathMatch: 'full' },
  { path: 'documents', component: CrmDocumentsComponent, pathMatch: 'full' },
  { path: 'dynamic-analysis', component: CrmDynamicAnalysisComponent, pathMatch: 'full' },
  { path: 'campaigns', component: CrmCampaignsComponent, pathMatch: 'full' },
  { path: 'bills', component: CrmBillsComponent, pathMatch: 'full' },
  { path: 'contracts', component: CrmContactsComponent, pathMatch: 'full' },
  { path: 'admin/dictionaries', component: DictionariesComponent, pathMatch: 'full' },
  { path: 'admin/params', component: ParamsComponent, pathMatch: 'full' },
  { path: 'admin/users', component: UsersComponent, pathMatch: 'full' },
  { path: 'admin/mails', component: MailsComponent, pathMatch: 'full' },
  { path: 'admin/crons', component: CronsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
