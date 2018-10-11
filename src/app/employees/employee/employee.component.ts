import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor( private service : EmployeeService) { }
  
  departments : [
    { id: 1, value: 'dep 1' },
    { id: 2, value: 'dep 2' },
    { id: 3, value: 'dep 3' }
  ]
  
  ngOnInit() {
  }

}
