import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  post =  {
    'title': 'Title',
    'postIsFavorite': true
  };

  tweet =  {
    liked: false,
    likes: 0
  };

  courses = [1, 2];

  people: any[] = [
    {
      'name': 'Douglas  Pace',
      'age': 35,
      'country': 'MARS'
    },
    {
      'name': 'Mcleod  Mueller',
      'age': 32,
      'country': 'USA'
    },
    {
      'name': 'Day  Meyers',
      'age': 21,
      'country': 'HK'
    },
    {
      'name': 'Aguirre  Ellis',
      'age': 34,
      'country': 'UK'
    },
    {
      'name': 'Cook  Tyson',
      'age': 32,
      'country': 'USA'
    }
  ];

  tasks = {
    title: 'task title',
    assignee: {
      name: 'Anand'
    }
  };

  eventRaised(name) {
    this.title = name;
  }

  isThereAnyCourseAvailaible(): boolean {
    return this.courses.length ? true : false;
  }
}
