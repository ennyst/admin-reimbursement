import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ReportReimbursementComponent } from "./reportreimbursement.component";
import { ReportCashadvanceComponent } from "./reportcashadvance.component";

const routes: Routes=[
    {
        path:'',
        data:{
            title: 'Report'
        },
        children:[
            {
                path:'reportreimbursement',
                component: ReportReimbursementComponent,
                data:{
                    title:'Reimbursement'
                }
            },
            {
                path:'reportcashadvance',
                component: ReportCashadvanceComponent,
                data:{
                    title:'Cash Advance'
                }
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ReportRoutingModule{}
