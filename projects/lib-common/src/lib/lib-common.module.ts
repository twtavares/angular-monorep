import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LibMaterialModule } from '@lib/material';

@NgModule({
  declarations: [
    FooterComponent,
    TopNavComponent
  ],
  imports: [
    LibMaterialModule
  ],
  exports: [
    FooterComponent,
    TopNavComponent
  ]
})
export class LibCommonModule { }
