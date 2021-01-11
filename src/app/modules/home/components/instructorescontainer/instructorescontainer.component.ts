import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { InstructoreService } from '../../services/instructore.service';
import { IInstructor } from '../instructores/interfaces/instructor';

@Component({
  selector: 'app-instructorescontainer',
  templateUrl: './instructorescontainer.component.html',
  styleUrls: ['./instructorescontainer.component.scss']
})
export class InstructorescontainerComponent implements OnInit {

 varinstructor: IInstructor[]=[];

  constructor(private instructorser: InstructoreService) { }

  ngOnInit(): void {
    this.getinstructor();
  }
  getinstructor(){
    this.instructorser.getinstructor()
      .subscribe((res: IInstructor[])=>{
        this.varinstructor=res;
      });
    }
}
