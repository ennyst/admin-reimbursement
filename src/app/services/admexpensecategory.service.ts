import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Rx';




@Injectable()
export class AdmExpenseCategoryService {
    token = localStorage.getItem('token')
    headers = new Headers();
    opts: RequestOptionsArgs;

       
    constructor(private http: Http, private urlService: UrlService) {

    }

    getAdmExpenseCategoryList(): Observable<any[]> {
        return this.http.get(this.urlService.getUrlAdmExpenseCategory())
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }

     addAdmExpenseCategory(param): Observable<any> {
        return this.http.post(this.urlService.postUrlAddAdmExpenseCategory() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    } 
      
    editAdmExpenseCategory(param): Observable<any> {
        return this.http.post(this.urlService.postUrlEditAdmExpenseCategory() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    deleteAdmExpenseCategory(param) : Observable<any>{
        return this.http.post(this.urlService.postUrlDeleteAdmExpenseCategory() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }


     private extractData(res:Response) {
        let body = res.json();
        return body || [];
     } 

     handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
      } 
}
