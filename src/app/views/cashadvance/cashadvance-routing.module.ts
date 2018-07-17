import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimerComponent } from "./claimer.component";
import { ApproverComponent } from './approver.component';

const routes: Routes=[
    {
        path:'',
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
            },{
                path: 'approver',
                component: ApproverComponent,
                data: {
                  title: 'Approver'
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