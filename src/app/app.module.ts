import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

import { LoginComponent } from './login/login.component';
import { CompanyRecordsComponent } from './company-records/company-records.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { UpdateContactsComponent } from './Components/update-contacts/update-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanyRecordsComponent,
    LoadingSpinnerComponent,
    CompanyDetailsComponent,
    AddContactComponent,
    UpdateContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  providers: [
{
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 2500,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
