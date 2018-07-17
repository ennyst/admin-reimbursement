import { NgModule } from "@angular/core";
import { ReportRoutingModule } from "./report-routing.module";
import { ReportCashadvanceComponent } from "./reportcashadvance.component";
import { ReportReimbursementComponent } from "./reportreimbursement.component";

@NgModule({
    imports:[
        ReportRoutingModule,
    ],
    declarations:[
        ReportCashadvanceComponent,
        ReportReimbursementComponent
    ]
})
export class ReportModule{}