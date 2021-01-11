import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CursodestacadocontainerComponent } from './components/cursodestacadocontainer/cursodestacadocontainer.component';
import { HeaderComponent } from './components/header/header.component';
import { InstructoresComponent } from './components/instructores/instructores.component';
import { InstructorescontainerComponent } from './components/instructorescontainer/instructorescontainer.component';
import { InstructoreService } from './services/instructore.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursedestacadoService } from './services/coursedestacado.service';
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [HomeComponent, CursodestacadocontainerComponent, HeaderComponent, InstructoresComponent, InstructorescontainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [InstructoreService,CoursedestacadoService,CourseService]
})
export class HomeModule { }
