import { Injectable } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firebase : AngularFireDatabase) { }

  employeeList : AngularFireList<any>;

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

  getEmployees(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList.snapshotChanges();
  }

  insertEmployee(employee){
    this.employeeList.push({
      fullname    : employee.fullname,
      email       : employee.email,
      mobile      : employee.mobile,
      city        : employee.city,
      gender      : employee.gender,
      department  : employee.department,
      hiredate    : employee.hiredate,
      ispermanent : employee.ispermanent,
    })
  }

  updateEmployee(employee){
    this.employeeList.update(employee.$key,{
      fullname    : employee.fullname,
      email       : employee.email,
      mobile      : employee.mobile,
      city        : employee.city,
      gender      : employee.gender,
      department  : employee.department,
      hiredate    : employee.hiredate,
      ispermanent : employee.ispermanent,
    })
  }

  deleteEmployee($key : string){
    this.employeeList.remove($key);
  }
}
