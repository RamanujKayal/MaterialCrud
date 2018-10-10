import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  form: FormGroup = new FormGroup({

    $key        : new FormControl(null),
    fullname    : new FormControl(''),
    email       : new FormControl(''),
    mobile      : new FormControl(''),
    city        : new FormControl(''),
    gender      : new FormControl(''),
    department  : new FormControl('0'),
    hiredate    : new FormControl(''),
    ispermanent : new FormControl('false'),
  
  })
}
