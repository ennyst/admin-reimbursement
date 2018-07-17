// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { EmployeeComponent } from './employee.component';
import { ExpenseCategoryComponent } from "./expensecategory.component";
import { TagComponent } from "./tag.component";



// Components Routing
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  imports: [
    CompanyRoutingModule,
   
  ],
  declarations: [
    EmployeeComponent,
    ExpenseCategoryComponent,
    TagComponent
  ]
})
export class CompanyModule { }