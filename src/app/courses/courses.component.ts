import { Component, OnInit } from '@angular/core';
import { CoursesService } from './Courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  _hits = 0;
  courses;
  email = 'anand.upadhyay@imaginea.com';
  isActiveReally = true;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

    click($event): void {
        this._hits++;
    }

    isActive(): boolean {
      return true;
    }

    onkeyPress() {
      console.log(this.email);
    }
}
