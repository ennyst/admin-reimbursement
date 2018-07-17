import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { ExpenseCategoryComponent } from './expensecategory.component';
import { TagComponent } from "./tag.component";


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Company'
    },
    children: [
      {
        path: 'employee',
        component: EmployeeComponent,
        data: {
          title: 'Employee'
        }
      },
      {
        path: 'expensecategory',
        component: ExpenseCategoryComponent,
        data: {
          title: 'Expense Category'
        }
      },
      {
        path: 'tag',
        component: TagComponent,
        data: {
          title: 'Tag'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {}
