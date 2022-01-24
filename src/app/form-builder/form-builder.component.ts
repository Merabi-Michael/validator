import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator, validatorDoesNotMatch } from '../validators/forbidden-name.validator';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  userForm!: FormGroup;


  ngOnInit(): void {
    this.userForm = this.fb.group ({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      userName: ['', [Validators.required, Validators.minLength(6), forbiddenNameValidator(/meko/i)]],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      agree: ['', Validators.required]
    },
    {validators: validatorDoesNotMatch})
  }
}

