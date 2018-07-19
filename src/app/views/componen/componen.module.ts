
import { NgModule } from '@angular/core';
import { ComponenRoutingModule } from './componen-routing.module';
import { UserTableComponen } from './usertable.componen';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../../services/user.service';

@NgModule({
    imports:[
        ComponenRoutingModule,
        BrowserModule,
        HttpClientModule,
        MatTableModule,
        BrowserAnimationsModule
        
    ],
    declarations:[ 
        UserTableComponen
    ],
    providers: [UserService]
})
export class ComponenModule{}