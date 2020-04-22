import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeService } from '/Employee/employee.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from '/page-not-found.component';
import { EmployeeAddComponent } from '/Employee/employee-add.component';
import { EmployeeListComponent } from '/Employee/Employee-list/employee-list.component';
import { EmployeeViewComponent } from '/Employee/Employee-view/employee-view.component';

const appRoutes: Routes = [
  { path: 'employee-add', component: EmployeeAddComponent },
  { path: 'employee/:id',      component: EmployeeViewComponent },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  { path: 'employee-add/:id', component: EmployeeAddComponent },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  { path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports:      [ 
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [ AppComponent, EmployeeAddComponent,EmployeeViewComponent,EmployeeListComponent,PageNotFoundComponent ],
  providers: [EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }