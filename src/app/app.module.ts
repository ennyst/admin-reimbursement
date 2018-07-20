// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {

  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DataTableModule } from 'angular2-datatable/lib/DataTableModule';
import { AdvAprService } from "./services/advapproper.service";
import { UrlService } from "./services/url.service";
import { TeamService } from "./services/team.service";
import { EmployeeService } from "./services/employee.service";
import { AdvClaimerService } from './services/advclaimer.service';
import { ExpenseCategoryService } from "./services/expensecategory.service";
import { TagService } from "./services/tag.service";
import { AdvFinanceService } from './services/advfinance.service';
import { AdvVerificatorService } from './services/advverificator.service';
import { ReimbursementClaimerService } from "./services/reimbursementclaimer.service";
import { ReimbursementApproverService } from './services/reimbursementapprover.service';
import { ReimbursementFinanceService } from './services/reimbursementfinance.service';


@NgModule({
  imports: [
    
    DataTableModule,
    CommonModule,
    BrowserAnimationsModule,
    // BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    BrowserAnimationsModule,
    HttpModule,
  ],
  declarations: [
    
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],

  providers:[
    AdvAprService,
    UrlService,
    TeamService,
    EmployeeService,
    AdvClaimerService,
    TagService,
    AdvFinanceService,
    AdvVerificatorService,
    ReimbursementClaimerService,
    ReimbursementApproverService,
    ReimbursementFinanceService,
    ExpenseCategoryService],



  bootstrap: [ AppComponent ]
})
export class AppModule { }
