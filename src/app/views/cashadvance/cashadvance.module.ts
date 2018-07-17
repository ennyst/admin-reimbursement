import { NgModule } from '@angular/core';

import { ClaimerComponent } from "./claimer.component";
import { ApproverComponent } from "./approver.component";

import { CashadvanceRoutingModule } from "./cashadvance-routing.module";


@NgModule({
    imports:[
        CashadvanceRoutingModule,
    ],
    declarations:[ 
        ClaimerComponent,
        ApproverComponent
    ]
})
export class CashAdvanceModule{}