import { Component, OnInit } from '@angular/core';
import { ICurso } from 'src/app/shared/interfaces/course';
import { CoursedestacadoService } from '../../services/coursedestacado.service';

@Component({
  selector: 'app-cursodestacadocontainer',
  templateUrl: './cursodestacadocontainer.component.html',
  styleUrls: ['./cursodestacadocontainer.component.scss']
})
export class CursodestacadocontainerComponent implements OnInit {

  lstcursodes: ICurso[]=[];
  constructor(private cursodestaserv: CoursedestacadoService ) { }

  ngOnInit(): void {
  }
  getcoursesdestaca(){
    this.cursodestaserv.getcoursesdestaca()
      .subscribe((res: ICurso[])=>{
        this.lstcursodes=res;
      });
    }
}
