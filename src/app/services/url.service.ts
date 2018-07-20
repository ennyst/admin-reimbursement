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
   


   urlAdvFinance: string="https://jsonplaceholder.typicode.com/users";
   getAdvFinance():string{
       return this.urlAdvFinance;
   }

   urlAdvVerificator: string="https://jsonplaceholder.typicode.com/users";
   getAdvVerificator():string{
       return this.urlAdvVerificator;
   }

   urlReimbursementClaimer: string="https://jsonplaceholder.typicode.com/users";
   getReimbursementClaimer():string{
       return this.urlReimbursementClaimer;
   }

   urlReimbursementApprover: string="https://jsonplaceholder.typicode.com/users";
   getReimbursementApprover():string{
       return this.urlReimbursementApprover;
   }

   urlReimbursementFinance: string="https://jsonplaceholder.typicode.com/users";
   getReimbursementFinance():string{
       return this.urlReimbursementFinance;
   }

}