import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './pages/curso/curso.component';
import { CursoContainerComponent } from './components/curso-container/curso-container.component';
//import { InstructorComponent } from './components/instructor/instructor.component';
//import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';
//import { CursoDetailtPageComponent } from './page/curso-detailt-page/curso-detailt-page.component';
import { CursocategcontainerComponent } from './components/cursocategcontainer/cursocategcontainer.component';


@NgModule({
  declarations: [CursoComponent, CursoContainerComponent,   CursocategcontainerComponent],
  imports: [
    CommonModule,
    CursoRoutingModule
  ]
})
export class CursoModule { }
