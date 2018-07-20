import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    templateUrl:'usertable.componen.html'
})
export class UserTableComponen implements OnInit{

    dataSource = new UserDataSource(this.userService);
    displayedColumns = ['name', 'email', 'phone', 'company'];

    constructor(private userService: UserService) { }

    ngOnInit() {
      
    }
}

export class UserDataSource extends DataSource<any> {

    constructor(private userService: UserService) {
      super();
    }
  
    connect(): Observable<User[]> {
      return this.userService.getUser();
    }
  
    disconnect() {}
  }