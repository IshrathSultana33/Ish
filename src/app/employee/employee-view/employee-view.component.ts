import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'employee-view',
  templateUrl: './employee-view.component.html',
  styles: [ `` ]
})
export class EmployeeViewComponent implements OnInit  {

  employee: Employee;
  
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ){}

    ngOnInit(){
      this.route.params.subscribe(param => {
        console.log(param)
        if(param){
          this.employee = this.employeeService.getEmployee(param.id);
        }
      })
      
    }
}
