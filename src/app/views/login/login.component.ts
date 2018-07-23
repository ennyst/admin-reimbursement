<<<<<<< HEAD
import { Component } from '@angular/core';
import { Router } from '@angular/router';
=======
import { Component, NgModule } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";

>>>>>>> b90696ab0ce51ac96f337554c933c0e6bdb74244

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
<<<<<<< HEAD
export class LoginComponent {

  constructor(private router : Router) { 

  }
  
  login(){
    this.router.navigate(['/login']);
  }

  btnClick= function () {
    this.router.navigateByUrl('/login');
};
 }
=======

@NgModule({
  imports: [
   
  ],
  declarations: [
 
    DashboardComponent
  ]
})

export class LoginComponent { }
>>>>>>> b90696ab0ce51ac96f337554c933c0e6bdb74244
