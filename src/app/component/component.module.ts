// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



import { UsertableComponent } from "./usertable/usertable.component";


// Components Routing
import { ComponentRoutingModule } from './component.routing.module';

@NgModule({
  imports: [
    ComponentRoutingModule,
   
  ],
  declarations: [
    UsertableComponent
  ]
})
export class ComponentModule { }
