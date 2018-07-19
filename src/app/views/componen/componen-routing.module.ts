import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTableComponen } from './usertable.componen';



const routes: Routes=[
    {
        path:'',
        data:{
            title:'Component'
        },
        children: [
            {
              path: 'usertable',
              component: UserTableComponen,
              data: {
                title: 'User Table'
              }

            }
        ]
    }
];

@NgModule({
    imports : [
        RouterModule.forChild(routes)
        
    ],
    exports:[RouterModule]
})
export class ComponenRoutingModule{}