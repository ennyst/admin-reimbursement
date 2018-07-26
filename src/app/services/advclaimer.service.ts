import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Rx';

import { ModelAdvClaimer } from "../models/advclaimer.model";


@Injectable()
export class AdvClaimerService {
    token = localStorage.getItem('token')
    headers = new Headers();
    opts: RequestOptionsArgs;

       
    constructor(private http: Http, private urlService: UrlService) {

    }

    getAdvClaimerList(): Observable<any[]> {
        return this.http.get(this.urlService.getUrlAdvClaimer())
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }

     addAdvClaimer(advmodel:ModelAdvClaimer): Observable<ModelAdvClaimer> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.urlService.postUrlAddAdvClaimer(),advmodel )
                   .map(this.extractData)
                   .catch(this.handleErrorObservable);
    } 

    //  postAddClaimer():Observable<any[]>{
    //      return this.http.post(); 
    //  }

    //  postUrlAddAdvClaimer(id:number): string {
    //     return this.http.post + "http://139.255.131.112:8989/insertjabatan?nama_jabatan=Staff"
    //     .map((res: Response) => res.json())
    //           .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    // }
    

   

     private extractData(res:Response) {
        let body = res.json();
        return body || [];
     } 

     handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
      } 
}