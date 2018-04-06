import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods =  ['Email', 'phone', 'chat'];

  constructor() { }

  ngOnInit() {
  }


  log(model) {
    console.log(model);
  }

  onSubmit(form): void {
    console.log(form.value);
  }
}
