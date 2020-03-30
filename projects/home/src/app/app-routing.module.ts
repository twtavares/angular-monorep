import { PageMaterialThemeComponent } from './page-material-theme/page-material-theme.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'material-theme',
    component: PageMaterialThemeComponent,
  },
  {
    path: '',
    component: PageMaterialThemeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
