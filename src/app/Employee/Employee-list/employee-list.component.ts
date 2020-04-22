import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee-interface';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styles: [ `a{text-decoration:none;color: black;display:block;padding:15px;}ul{padding:0;}li{list-style:none;}.w-50{display:inline-block;width:45%;cursor:pointer}li:hover{background:#eee}.text-right{text-align: right;}.text-center{text-align: center;}` ]
})
export class EmployeeListComponent implements OnInit  {

  employeeList: Employee[];
  
  constructor(private employeeService: EmployeeService){}

    ngOnInit(){
      this.employeeList = this.employeeService.getEmployees();
    }

}
