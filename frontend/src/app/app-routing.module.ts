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


const routes: Routes = [
  { path: '', component: SuitecrmComponent, pathMatch: 'full' },
  // { path: 'crm', component: SuitecrmComponent, pathMatch: 'full' },
  { path: 'pipeline', component: PipelineDialogComponent, pathMatch: 'full' },
  { path: 'accounts', component: CrmAccountsComponent, pathMatch: 'full' },
  { path: 'contacts', component: CrmContactsComponent, pathMatch: 'full' },
  { path: 'opportunities', component: CrmOpportunitiesComponent, pathMatch: 'full' },
  { path: 'leads', component: CrmLeadsComponent, pathMatch: 'full' },
  { path: 'calendar', component: CrmCalendarComponent, pathMatch: 'full' },
  { path: 'calls', component: CrmCallsComponent, pathMatch: 'full' },
  { path: 'meetings', component: CrmMeetingsComponent, pathMatch: 'full' },
  { path: 'notes', component: CrmNotesComponent, pathMatch: 'full' },
  { path: 'mails', component: CrmMailsComponent, pathMatch: 'full' },
  { path: 'tasks', component: CrmTasksComponent, pathMatch: 'full' },
  { path: 'tools', component: CrmToolsComponent, pathMatch: 'full' },
  { path: 'admin/dictionaries', component: DictionariesComponent, pathMatch: 'full' },
  { path: 'admin/params', component: ParamsComponent, pathMatch: 'full' },
  { path: 'admin/users', component: UsersComponent, pathMatch: 'full' },
  { path: 'admin/mails', component: MailsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
