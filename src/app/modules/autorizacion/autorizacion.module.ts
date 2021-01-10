import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorizacionRoutingModule } from './autorizacion-routing.module';
import { AutorizacionpageComponent } from './pages/autorizacionpage/autorizacionpage.component';


@NgModule({
  declarations: [AutorizacionpageComponent],
  imports: [
    CommonModule,
    AutorizacionRoutingModule
  ]
})
export class AutorizacionModule { }
