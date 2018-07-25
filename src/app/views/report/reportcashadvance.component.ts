import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';


@Component({
    templateUrl:'reportcashadvance.component.html'
})
export class ReportCashadvanceComponent{
    date: Date = new Date();
	settings = {
        
		bigBanner: true,
		timePicker: true,
		format: 'dd-MM-yyyy',
		defaultOpen: true
	}
	constructor(){}
    // ngOnInit(){
       
    // }

  
    
}