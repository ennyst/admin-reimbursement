import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceClaimerComponent } from "./claimer.component";



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Attendance'
    },
    children: [
      {
        path: 'attendanceclaimer',
        component: AttendanceClaimerComponent,
        data:{
          title: 'Claimer'
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule {}
