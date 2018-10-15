import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor( private service : EmployeeService,private notification : NotificationService) { }
  
  departments = [
    { id: 1, value: 'dep 1' },
    { id: 2, value: 'dep 2' },
    { id: 3, value: 'dep 3' }
  ]
  
  ngOnInit() {
    this.service.getEmployees();
  }

  onClear(){
    this.service.form.reset();
    
  }

  onSubmit(){
    if(this.service.form.valid){
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.notification.success("Employee Added Successfully");
    }
  }

}
