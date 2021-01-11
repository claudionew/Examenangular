import { Component, OnInit, Input} from '@angular/core';
import { ICurso } from '../interfaces/course';

@Component({
  selector: 'app-cursillo',
  templateUrl: './cursillo.component.html',
  styleUrls: ['./cursillo.component.scss']
})
export class CursilloComponent implements OnInit {

 /*  
@Input() curso: any[];
@Input() coverWitdh: number;*/ 
 @Input() cursillos: ICurso

  constructor() { }

  ngOnInit(): void {
  }

}


 