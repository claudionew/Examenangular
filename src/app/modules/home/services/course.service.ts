import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICurso } from 'src/app/shared/interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url='http://examen-nh.jcramireztello.com/api/v1/course/'
  constructor(private http: HttpClient) { }
  getcourses(){
    return this.http.get<ICurso[]>(`${this.url}`);
}
}