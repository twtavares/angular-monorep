import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LibCommonModule } from '@lib/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
