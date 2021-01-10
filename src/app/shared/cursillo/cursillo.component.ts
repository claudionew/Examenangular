import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cursillo',
  templateUrl: './cursillo.component.html',
  styleUrls: ['./cursillo.component.scss']
})
export class CursilloComponent implements OnInit {

@Input() cursos: any[];
@Input() coverWitdh: number;
  constructor() { }

  ngOnInit(): void {
  }

}
