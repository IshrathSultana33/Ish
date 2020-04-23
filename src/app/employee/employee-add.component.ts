import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './employee-interface';


@Component({
  selector: 'employee-add',
  templateUrl: './employee-add.component.html',
  styles: [ `input{width:100%;padding: 10px 15px;margin:5px auto;}` ]
})
export class EmployeeAddComponent implements OnInit  {

  employeeForm: FormGroup;
  isEdit: Boolean = false;
  msg:String = '';
  
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  ngOnInit(){
    this.employeeForm = new FormGroup({
      name: new FormControl(''),
      id: new FormControl(''),
      location: new FormControl(''),
      phoneno: new FormControl(''),
    })
      this.route.params.subscribe(param => {
        console.log(param)
        if(param && param.id){
          let employee = this.employeeService.getEmployee(param.id);
          if(employee){
            this.employeeForm.setValue(employee);
            this.isEdit = true;
            }
          else this.router.navigate(['/employees'])
        }
      })
  }

  resetForm(){
    console.log('reset',this.employeeForm)
    this.employeeForm.reset();
  }

  add(){
    if(this.employeeForm.valid){
      this.employeeService.employeeList.push(this.employeeForm.value);
      this.resetForm();
      console.log('this.employeeService.studelost',this.employeeService.getEmployees())}
      else {
      this.msg = 'Please complete form'
    }
  }

  edit(){
    this.msg = '';
    if(this.employeeForm.valid){
      if(this.employeeService.employeeEdit(this.employeeForm.value)){
        this.router.navigate(['/employees'])
      }else {
        this.msg = 'Something went wrong'
      }
    }else {
      this.msg = 'Please complete form'
    }
  }
  
}
