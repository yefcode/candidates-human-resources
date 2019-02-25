import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidate/candidates/candidates.component';
import { CandidateDetailComponent } from './candidate/candidate-detail/candidate-detail.component';
import { HomeComponent } from './home/home.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateDetailComponent,
    HomeComponent,
    CompanyProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
