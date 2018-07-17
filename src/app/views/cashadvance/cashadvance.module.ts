import { NgModule } from '@angular/core';

import { ClaimerComponent } from "./claimer.component";

import { CashadvanceRoutingModule } from "./cashadvance-routing.module";


@NgModule({
    imports:[
        CashadvanceRoutingModule,
    ],
    declarations:[ 
        ClaimerComponent
    ]
})
export class CashAdvanceModule{}