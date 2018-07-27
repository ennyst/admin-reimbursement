// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



import { AttendanceClaimerComponent } from "./claimer.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';



import { AttendanceRoutingModule } from './attendance-routing.module';

@NgModule({
  imports: [
    AttendanceRoutingModule,
    Ng2SmartTableModule,
    ModalModule.forRoot()
   
  ],
  declarations: [
 
    AttendanceClaimerComponent,
   
  ]
})
export class AttendanceModule { }
