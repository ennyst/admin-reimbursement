import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimerComponent } from './claimer.component';
import { ApprovalComponent } from './approval.component';
import {FinanceComponent  } from "./finance.component";


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reimbursement'
    },
    children: [
      {
        path: 'claimer',
        component: ClaimerComponent,
        data: {
          title: 'Claimer'
        }
      },
      {
        path: 'approval',
        component: ApprovalComponent,
        data: {
          title: 'Approval'
        }
      },
      {
        path: 'finance',
        component: FinanceComponent,
        data: {
          title: 'Finance'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReimbursementRoutingModule {}
