import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styles: [`
    .error {
      border: 2px solid red;
    }

    .err-msg {
      color: red;
    }
  `]
})

export class RegisterComponent {
  form;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, emailValid()],
      password: ['', Validators.required, passwordValid()],
      confirmPassword: ['', Validators.required]
    }, {validator: matchingFields('password', 'confirmPassword')});
  }

  onSubmit() {
    console.log(this.form.errors);
    console.log(this.form.valid);
  }

  isValid(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }
}

function emailValid() {
  return control => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return Observable.of(regex.test(control.value) ? null : { inValidEmail: true });
    // return regex.test(control.value) ? null : { inValidEmail: true };
  }
}

function passwordValid() {
  return control => {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return Observable.of(regex.test(control.value) ? null : {inValidPassword: true});
    // return regex.test(control.value) ? null : { inValidPassword: true };
  }
}

function matchingFields(field1, field2) {
  return form => {
    if(form.controls[field1].value !== form.controls[field2].value)
      return { mismatchedFields: true }
  }
}
