import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './pages/curso/curso.component';
import { CursoContainerComponent } from './components/curso-container/curso-container.component';
import { CursocategcontainerComponent } from './components/cursocategcontainer/cursocategcontainer.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CursoComponent, CursoContainerComponent,   CursocategcontainerComponent],
  imports: [
    CommonModule,
    CursoRoutingModule,
    SharedModule
  ]
})
export class CursoModule { }
