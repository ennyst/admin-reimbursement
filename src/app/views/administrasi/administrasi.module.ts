import { NgModule } from '@angular/core';

import { Ng2SmartTableModule } from "ng2-smart-table";
import { AdministrasiRoutingModule } from './administrasi-routing.module';
import { AccountBankComponent } from './accountbank.component';
import { ExpenseCategoryComponent } from './expensecategory.component';
import { LiburComponent } from './libur.component';
import { JabatanComponent } from './jabatan.component';
import { RoleComponent } from './role.component';
import { StatusComponent } from './status.component';

import { TypeEmployeeComponent } from './typeemployee.component';

@NgModule({
    imports:[
        AdministrasiRoutingModule,
        Ng2SmartTableModule,
    ],
    declarations:[ 
        AccountBankComponent,
        ExpenseCategoryComponent,
        JabatanComponent,
        LiburComponent,
        RoleComponent,
      
        StatusComponent,
        TypeEmployeeComponent
        
    ]
})
export class AdministrasiModule{}