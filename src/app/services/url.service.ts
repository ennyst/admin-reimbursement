import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class UrlService {
   constructor() {
   }
//    serverUrl: string ="http://mtpc583:8080/api";
//    getUrlUsers(): string {
//       return this.serverUrl + "/secure/user/";
//    }

   urlAdvApprover: string="https://jsonplaceholder.typicode.com/users";
   getUrlAdvApprover():string{
       return this.urlAdvApprover;
   }

   
   urlTeam: string="https://jsonplaceholder.typicode.com/users";
   getUrlTeam():string{
       return this.urlTeam;
   }
   urlEmployee: string="https://jsonplaceholder.typicode.com/users";
   getUrlEmployee():string{
       return this.urlEmployee;
   }
   urlAdvClaimer: string="https://jsonplaceholder.typicode.com/users";
   getUrlAdvClaimer():string{
       return this.urlAdvClaimer;
   }
   urlExpenseCategory: string="https://jsonplaceholder.typicode.com/users";
   getUrlExpenseCategory():string{
       return this.urlExpenseCategory;
   }
   urlTag: string="https://jsonplaceholder.typicode.com/users";
   getUrlTag():string{
       return this.urlTag;
   }
   
}