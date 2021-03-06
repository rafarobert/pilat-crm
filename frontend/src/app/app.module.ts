import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Pipe, PipeTransform} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetModule, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import { PipelineDialogComponent } from './components/pipeline/pipeline-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

import { AdminDialogComponent } from './components/crud/admin-dialog.component';
import {MatTabsModule} from "@angular/material/tabs";
import { AddUserComponent } from './components/crud/users/add-user/add-user.component';
import { DeleteUserComponent } from './components/crud/users/delete-user/delete-user.component';
import { AddDictionaryComponent } from './components/crud/dictionaries/add-dictionary/add-dictionary.component';
import { DeleteDictionaryComponent } from './components/crud/dictionaries/delete-dictionary/delete-dictionary.component';
import { DeleteParamComponent } from './components/crud/params/delete-param/delete-param.component';
import { AddParamComponent } from './components/crud/params/add-param/add-param.component';
import { OverviewComponent } from './components/overview/overview.component';
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule} from "@angular/material/paginator";
import { DictionariesComponent } from './components/crud/dictionaries/dictionaries.component';
import { ParamsComponent } from './components/crud/params/params.component';
import { UsersComponent } from './components/crud/users/users.component';
import {PilatDictionaryService} from "../core/services/pilat-dictionary.service";
import { AddLeadComponent } from './components/pipeline/leads/add-lead/add-lead.component';
import { LeadsComponent } from './components/pipeline/leads/leads.component';
import { DeleteLeadComponent } from './components/pipeline/leads/delete-lead/delete-lead.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { OpportunitiesComponent } from './components/pipeline/opportunities/opportunities.component';
import { AddOpportunityComponent } from './components/pipeline/opportunities/add-opportunity/add-opportunity.component';
import { DeleteOpportunityComponent } from './components/pipeline/opportunities/delete-opportunity/delete-opportunity.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ContactsComponent } from './components/pipeline/contacts/contacts.component';
import { AddContactComponent } from './components/pipeline/contacts/add-contact/add-contact.component';
import { DeleteContactComponent } from './components/pipeline/contacts/delete-contact/delete-contact.component';
import {DialogLeadToOpportunityComponent} from "./components/dialogs/dialog-lead-to-opportunity/dialog-lead-to-opportunity.component";
import { AccountsComponent } from './components/pipeline/accounts/accounts.component';
import { AddAccountComponent } from './components/pipeline/accounts/add-account/add-account.component';
import { DeleteAccountComponent } from './components/pipeline/accounts/delete-account/delete-account.component';
import { DialogUserUnsignedComponent } from './components/dialogs/dialog-user-unsigned/dialog-user-unsigned.component';
import {CookieService} from "ngx-cookie-service";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { DialogOpportunityToLeadComponent } from './components/dialogs/dialog-opportunity-to-lead/dialog-opportunity-to-lead.component';
import { AosQuotesComponent } from './components/pipeline/aos-quotes/aos-quotes.component';
import { AddAosQuoteComponent } from './components/pipeline/aos-quotes/add-aos-quote/add-aos-quote.component';
import { DeleteAosQuoteComponent } from './components/pipeline/aos-quotes/delete-aos-quote/delete-aos-quote.component';
import { CallsComponent } from './components/pipeline/calls/calls.component';
import { AddCallComponent } from './components/pipeline/calls/add-call/add-call.component';
import { DeleteCallComponent } from './components/pipeline/calls/delete-call/delete-call.component';
import {MatTree, MatTreeModule} from "@angular/material/tree";
import {CdkTreeModule} from "@angular/cdk/tree";
import {MultilevelMenuService, NgMaterialMultilevelMenuModule} from "ng-material-multilevel-menu";
import { DialogSetCallComponent } from './components/dialogs/dialog-set-call/dialog-set-call.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatTimepickerModule} from "mat-timepicker";
import {MomentDateModule} from "@angular/material-moment-adapter";
import { DialogAlreadyLeadComponent } from './components/dialogs/dialog-already-lead/dialog-already-lead.component';
import { MailsComponent } from './components/crud/mails/mails.component';
import { AddMailComponent } from './components/crud/mails/add-mail/add-mail.component';
import { DeleteMailComponent } from './components/crud/mails/delete-mail/delete-mail.component';
import { HomeComponent } from './components/home/home.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DialogSetContactMailComponent } from './components/dialogs/dialog-set-contact-mail/dialog-set-contact-mail.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import {MatCardModule} from "@angular/material/card";
import {SuitecrmComponent} from "./components/suitecrm/suitecrm.component";
import { BuildingComponent } from './components/building/building.component';
import { CrmAccountsComponent } from './components/suitecrm/crm-accounts/crm-accounts.component';
import { CrmContactsComponent } from './components/suitecrm/crm-contacts/crm-contacts.component';
import { CrmOpportunitiesComponent } from './components/suitecrm/crm-opportunities/crm-opportunities.component';
import { CrmLeadsComponent } from './components/suitecrm/crm-leads/crm-leads.component';
import { CrmCalendarComponent } from './components/suitecrm/crm-calendar/crm-calendar.component';
import { CrmCallsComponent } from './components/suitecrm/crm-calls/crm-calls.component';
import { CrmMeetingsComponent } from './components/suitecrm/crm-meetings/crm-meetings.component';
import { CrmMailsComponent } from './components/suitecrm/crm-mails/crm-mails.component';
import { CrmTasksComponent } from './components/suitecrm/crm-tasks/crm-tasks.component';
import { CrmNotesComponent } from './components/suitecrm/crm-notes/crm-notes.component';
import { CrmToolsComponent } from './components/suitecrm/crm-tools/crm-tools.component';
import {PilatService} from "./services/pilat.service";
import {NumberPipe} from "./components/utils/number.pipe";
import { CrmQuotesComponent } from './components/suitecrm/crm-quotes/crm-quotes.component';
import { CrmDocumentsComponent } from './components/suitecrm/crm-documents/crm-documents.component';
import { CrmDynamicAnalysisComponent } from './components/suitecrm/crm-dynamic-analysis/crm-dynamic-analysis.component';
import { CrmCampaignsComponent } from './components/suitecrm/crm-campaigns/crm-campaigns.component';
import { CrmContractsComponent } from './components/suitecrm/crm-contracts/crm-contracts.component';
import { CrmBillsComponent } from './components/suitecrm/crm-bills/crm-bills.component';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@NgModule({
  declarations: [
    AppComponent,
    PipelineDialogComponent,
    AdminDialogComponent,
    AddUserComponent,
    DeleteUserComponent,
    AddDictionaryComponent,
    DeleteDictionaryComponent,
    DeleteParamComponent,
    AddParamComponent,
    OverviewComponent,
    DictionariesComponent,
    ParamsComponent,
    UsersComponent,
    AddLeadComponent,
    LeadsComponent,
    DeleteLeadComponent,
    OpportunitiesComponent,
    AddOpportunityComponent,
    DeleteOpportunityComponent,
    DialogLeadToOpportunityComponent,
    ContactsComponent,
    AddContactComponent,
    DeleteContactComponent,
    AccountsComponent,
    AddAccountComponent,
    DeleteAccountComponent,
    DialogUserUnsignedComponent,
    DialogOpportunityToLeadComponent,
    AosQuotesComponent,
    AddAosQuoteComponent,
    DeleteAosQuoteComponent,
    CallsComponent,
    AddCallComponent,
    DeleteCallComponent,
    DialogSetCallComponent,
    DialogAlreadyLeadComponent,
    MailsComponent,
    AddMailComponent,
    DeleteMailComponent,
    HomeComponent,
    SpinnerComponent,
    DialogSetContactMailComponent,
    DialogsComponent,
    SuitecrmComponent,
    BuildingComponent,
    AccountsComponent,
    CrmAccountsComponent,
    CrmContactsComponent,
    CrmOpportunitiesComponent,
    CrmLeadsComponent,
    CrmCalendarComponent,
    CrmCallsComponent,
    CrmMeetingsComponent,
    CrmMailsComponent,
    CrmTasksComponent,
    CrmNotesComponent,
    CrmToolsComponent,
    NumberPipe,
    CrmQuotesComponent,
    CrmDocumentsComponent,
    CrmDynamicAnalysisComponent,
    CrmCampaignsComponent,
    CrmContractsComponent,
    CrmBillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatNativeDateModule,
    MatButtonModule,
    DragDropModule,
    MatTabsModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatTreeModule,
    CdkTreeModule,
    NgMaterialMultilevelMenuModule,
    MatExpansionModule,
    NgxMaterialTimepickerModule,
    MatTimepickerModule,
    MomentDateModule,
    MatCardModule,
    
  ],
  exports: [],
  providers: [
    CookieService,
    MultilevelMenuService,
    MatDatepickerModule,
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AppComponent,
    AddDictionaryComponent,
    DeleteDictionaryComponent,
    AddParamComponent,
    DeleteParamComponent,
    AddUserComponent,
    DeleteUserComponent,
    OverviewComponent,
    PipelineDialogComponent,
    AdminDialogComponent,
    LeadsComponent,
    AddLeadComponent,
    DeleteLeadComponent,
    OpportunitiesComponent,
    AddOpportunityComponent,
    DeleteOpportunityComponent,
    DialogLeadToOpportunityComponent,
    DialogUserUnsignedComponent,
    AddContactComponent,
    AddAccountComponent,
    DeleteAccountComponent,
    AddContactComponent,
    DeleteContactComponent,
    AccountsComponent,
    ContactsComponent,
    DialogOpportunityToLeadComponent,
    AddAosQuoteComponent,
    DeleteAosQuoteComponent,
    AosQuotesComponent,
    AddCallComponent,
    DeleteCallComponent,
    CallsComponent,
    DialogSetCallComponent,
    DialogAlreadyLeadComponent,
    AddMailComponent,
    DeleteMailComponent,
    MailsComponent,
    SpinnerComponent,
    DialogSetContactMailComponent,
    DialogsComponent,
    BuildingComponent
  ],
  
})
export class AppModule { }
