import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class UrlService {
   constructor() {
   }
    serverUrl: string ="http://139.255.131.112:8989";

    

   getUrlAdvClaimer():string{
    return this.serverUrl + "/jabatanall"
    }

    postUrlAddAdvClaimer():string{
        return this.serverUrl + "/insertjabatan";
    }

    postUrlEditAdvClaimer():string{
        return this.serverUrl + "/updatejabatan"
    }
    postUrlDeleteClaimer():string{
        return this.serverUrl + "/deletejabatan"
    }



   urlAdvApprover: string="https://jsonplaceholder.typicode.com/users";
   getUrlAdvApprover():string{
       return this.urlAdvApprover;
   }

   
   urlTeam: string="https://jsonplaceholder.typicode.com/users";
   getUrlTeam():string{
       return this.urlTeam;
   }

   getUrlJabatan():string{
    return this.serverUrl + "/jabatanall"
    }
   
    urlEmployee: string="https://jsonplaceholder.typicode.com/users";
   getUrlEmployee():string{
         return this.urlEmployee;
   }
   
   urlExpenseCategory: string="https://jsonplaceholder.typicode.com/users";
   getUrlExpenseCategory():string{
       return this.urlExpenseCategory;
   }

   urlTag: string="https://jsonplaceholder.typicode.com/users";
   getUrlTag():string{
       return this.urlTag;
   }
   
   urlAttendanceClaimer: string="https://jsonplaceholder.typicode.com/users";
   getUrlAttendanceClaimer():string{
       return this.urlAttendanceClaimer;
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
   urlChart: string="https://jsonplaceholder.typicode.com/users";
   getChart():string{
       return this.urlChart;
   }

}