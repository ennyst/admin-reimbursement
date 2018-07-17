import { NgModule } from '@angular/core';

import { ClaimerComponent } from "./claimer.component";
import { ApproverComponent } from "./approver.component";

import { CashadvanceRoutingModule } from "./cashadvance-routing.module";
import { FinanceComponent } from './finance.component';
import { VerificatorComponent } from './verificator.component';


@NgModule({
    imports:[
        CashadvanceRoutingModule,
    ],
    declarations:[ 
        ClaimerComponent,
        ApproverComponent,
        FinanceComponent,
        VerificatorComponent
    ]
})
export class CashAdvanceModule{}