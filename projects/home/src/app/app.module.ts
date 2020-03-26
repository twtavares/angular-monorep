import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LibMaterialModule } from '@lib/material';
import { LibCommonModule } from '@lib/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageMaterialThemeComponent } from './page-material-theme/page-material-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    PageMaterialThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibCommonModule,
    LibMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
