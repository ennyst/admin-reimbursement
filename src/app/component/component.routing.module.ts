import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsertableComponent } from './usertable/usertable.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Component'
    },
    children: [
      {
        path: 'usertable',
        component: UsertableComponent,
        data:{
          title: 'Usertable'
        }
      }
     
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule {}
