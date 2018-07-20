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
<<<<<<< HEAD
   urlTag: string="https://jsonplaceholder.typicode.com/users";
   getUrlTag():string{
       return this.urlTag;
   }
   
||||||| merged common ancestors
   
=======
   urlAdvFinance: string="https://jsonplaceholder.typicode.com/users";
   getAdvFinance():string{
       return this.urlAdvFinance;
   }

   urlAdvVerificator: string="https://jsonplaceholder.typicode.com/users";
   getAdvVerificator():string{
       return this.urlAdvVerificator;
   }
>>>>>>> 42488724c5cec5194d4b6697100b4681d559a788
}