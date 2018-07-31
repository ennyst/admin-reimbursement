
import { Component,OnInit } from '@angular/core';
import { AdmExpenseCategoryService } from "../../services/admexpensecategory.service";
import { LocalDataSource } from 'ng2-smart-table';

import { Http, Response } from '@angular/http';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
    templateUrl:'expensecategory.component.html'
})
export class ExpenseCategoryComponent implements OnInit{
    

    
    data: LocalDataSource;
    constructor(private admService : AdmExpenseCategoryService, private http: Http) { 
        this.data = new LocalDataSource()
    }

    ngOnInit(){
        this.admService.getAdmExpenseCategoryList().subscribe(response=>{
            this.data.load(response);
          }
            ,error=>{alert("error")}
        ) 
    }
    

    addRecord(event) {
      console.log(event);
      let param = "?namaExpense=" + event.newData.namaExpense; 
      let param2 = "?budgetMaks=" +event.newData.budgetMaks;
      let param3 = "?maksTransaksi" +event.newData.maksTransaksi;
      console.log(param,param2,param3)
      this.admService.addAdmExpenseCategory(param).subscribe(response => {
        event.confirm.resolve(event.newData)  
      }, error => {
        alert(error.errorMessage)
      })
      
    }

    editData(event){
      console.log(event);
       let param = "?id=" + event.newData.id + "&namaExpense=" + event.newData.namaExpense;
       console.log(param)
       this.admService.editAdmExpenseCategory(param).subscribe(response => {
         event.confirm.resolve(event.newData)  
       }, error => {
         alert(error.errorMessage)
       }) 

    }

    deleteRecord(event){
      console.log(event);
       let param = "?id=" + event.data.id+ "&namaExpense=" + event.data.namaExpense;
       console.log(param)
       this.admService.deleteAdmExpenseCategory(param).subscribe(response => {
         event.confirm.resolve();
       }, error => {
         alert(error.errorMessage)
       }) 
    }

    cek(){
      console.log(this.data)
    }
      
      settings = {
        // "actions": {
        //   "delete": false
        // },
        "columns": {
          "namaExpense": {
            "title": "Expense Category",
          },
          "budgetMaks": {
            "title": "Budget Maksimum",
          },
          "maksTransaksi" :{
            "title" : "Transaction Maksimum",
          }
        },
        "mode": "inline",
        add:{
          confirmCreate: true
        },
        edit:{
          confirmSave:true
        },
        delete:{
          confirmDelete:true
        }

      };
}