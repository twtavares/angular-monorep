import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LibMaterialModule } from '@lib/material';
import { SwitchToggleComponent } from './switch-toggle/switch-toggle.component';

@NgModule({
  declarations: [
    FooterComponent,
    TopNavComponent,
    SwitchToggleComponent
  ],
  imports: [
    LibMaterialModule
  ],
  exports: [
    FooterComponent,
    TopNavComponent,
    SwitchToggleComponent
  ]
})
export class LibCommonModule { }
