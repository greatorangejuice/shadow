import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {customValidators} from "../validators";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup
  errors = {};

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',
        [Validators.email, Validators.required, customValidators.restrictedEmails],
        customValidators.uniqEmail
        ),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      skills: new FormArray([]),
    })

  }

  submit() {
    const formData = {...this.form.value}
    console.log(formData);
    this.form.reset();
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }
}
