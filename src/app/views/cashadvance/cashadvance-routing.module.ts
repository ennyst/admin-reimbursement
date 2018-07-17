import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimerComponent } from "./claimer.component";

const routes: Routes=[
    {
        path:'',
        component: ClaimerComponent,
        data:{
            title:'Cash Advance'
        },
        children: [
            {
              path: 'claimer',
              component: ClaimerComponent,
              data: {
                title: 'Claimer'
              }
            }
        ]
    }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CashadvanceRoutingModule{}