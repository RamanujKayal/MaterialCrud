import { Injectable } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  form: FormGroup = new FormGroup({

    $key        : new FormControl(null),
    fullname    : new FormControl('',Validators.required),
    email       : new FormControl('',Validators.email),
    mobile      : new FormControl('',[Validators.required,Validators.minLength(10)]),
    city        : new FormControl(''),
    gender      : new FormControl(''),
    department  : new FormControl('0'),
    hiredate    : new FormControl(''),
    ispermanent : new FormControl('false'),
  
  })
}
