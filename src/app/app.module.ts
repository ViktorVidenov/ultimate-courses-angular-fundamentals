import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { PassengerDasboardModule } from './passenger-dashboard/passenger-dashboard.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //angular modules
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    //custom modules
    PassengerDasboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
