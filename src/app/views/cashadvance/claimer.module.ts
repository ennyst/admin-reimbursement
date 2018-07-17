import { NgModule } from '@angular/core';

import { ClaimerComponent } from "./claimer.component";
import { ClaimerRoutingModule } from "./claimer-routing.module";


@NgModule({
    imports:[
        ClaimerRoutingModule,
    ],
    declarations:[ ClaimerComponent ]
})
export class ClaimerModule{}