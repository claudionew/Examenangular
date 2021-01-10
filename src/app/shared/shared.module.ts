import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CursilloComponent } from './cursillo/cursillo.component';


@NgModule({
  declarations: [CursilloComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [CursilloComponent]
})
export class SharedModule { }
