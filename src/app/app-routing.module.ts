import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyRecordsComponent } from './company-records/company-records.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { UpdateContactsComponent } from './Components/update-contacts/update-contacts.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes =
  [
    { path: '', component: LoginComponent },
    { path: 'companydata', component: CompanyRecordsComponent, canActivate: [AuthGuardService] },
    { path: 'companydata/id/:id', component: CompanyDetailsComponent, canActivate: [AuthGuardService] },
    { path: 'companydata/addcontact', component: AddContactComponent, canActivate: [AuthGuardService] },
    { path: 'companydata/updatecontact/id/:id', component: UpdateContactsComponent, canActivate: [AuthGuardService] },
    { path: "**", redirectTo: "/" }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
