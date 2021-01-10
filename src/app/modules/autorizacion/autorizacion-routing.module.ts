import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorizacionpageComponent } from './pages/autorizacionpage/autorizacionpage.component';

const routes: Routes = [
  {
    path: '',
    component: AutorizacionpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorizacionRoutingModule { }
