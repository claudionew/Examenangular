import { Component, Input, OnInit } from '@angular/core';
import { IInstructor } from './interfaces/instructor';

@Component({
  selector: 'app-instructores',
  templateUrl: './instructores.component.html',
  styleUrls: ['./instructores.component.scss']
})
export class InstructoresComponent implements OnInit {
@Input() instructorinput: IInstructor;
  constructor() { }

  ngOnInit(): void {
  }

}
