import { UsernameValidator } from './../common/validators/Username.validator';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      UsernameValidator.cannotContainSpace
    ], UsernameValidator.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  isCorrect() {
    console.log(this.form.get('username'));
    return this.form.get('username').touched;
  }

  clicked() {
    console.log( this.form.get('username'));
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

}
