import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee-interface';


@Injectable()
export class EmployeeService {

  employeeList : Employee[] = [];

  constructor(private http: HttpClient) {
  }
  getEmployees(){
    return this.employeeList;
  }
  getEmployee(id){
    let employee: Employee;
    this.employeeList.map(val=>{
      if(val.id == id) employee = val;
    });
    return employee;
  }
  employeeEdit(employee){
    let present: Boolean = false;
    this.employeeList.map((val, index)=>{
      if(val.id == employee.id) {this.employeeList[index] = employee;present=true}
    });
    return present;

  }

}

