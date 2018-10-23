import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service : EmployeeService) { }

  listData : MatTableDataSource<any>;
  displayedColumns : string[] = ['fullname'];

  ngOnInit() {
    this.service.getEmployees().subscribe(
      list => {
        let array = list.map(item=>{
          return {
            $key : item.key,
            ...item.payload.val()
          };
        });

        this.listData = new MatTableDataSource(array);
      });

      
  }

}
