// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ClaimerComponent } from './claimer.component';
import { ApprovalComponent } from "./approval.component";
import { FinanceComponent } from "./finance.component";



// Components Routing
import { ReimbursementRoutingModule } from './reimbursement-routing.module';


@NgModule({
  imports: [
    ReimbursementRoutingModule,
   
  ],
  declarations: [
    ClaimerComponent,
    ApprovalComponent,
    FinanceComponent
  ]
})
export class ReimbursementModule { }
