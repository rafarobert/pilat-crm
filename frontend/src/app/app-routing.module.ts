import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {PipelineDialogComponent} from "./components/pipeline/pipeline-dialog.component";
import {DictionariesComponent} from "./components/crud/dictionaries/dictionaries.component";
import {ParamsComponent} from "./components/crud/params/params.component";
import {UsersComponent} from "./components/crud/users/users.component";
import {MailsComponent} from "./components/crud/mails/mails.component";


const routes: Routes = [
  { path: '', component: PipelineDialogComponent, pathMatch: 'full' },
  { path: 'crm/pipeline', component: PipelineDialogComponent, pathMatch: 'full' },
  { path: 'crm/admin/dictionaries', component: DictionariesComponent, pathMatch: 'full' },
  { path: 'crm/admin/params', component: ParamsComponent, pathMatch: 'full' },
  { path: 'crm/admin/users', component: UsersComponent, pathMatch: 'full' },
  { path: 'crm/admin/mails', component: MailsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
