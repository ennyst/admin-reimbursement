import { Component, OnInit } from '@angular/core';
import { ExpenseCategoryService } from "../../services/expensecategory.service";
import { LocalDataSource } from '../../../../node_modules/ng2-smart-table';

@Component({
  templateUrl: 'expensecategory.component.html'
})
export class ExpenseCategoryComponent implements OnInit{

  data:LocalDataSource;
  constructor(private expenseCategoryService: ExpenseCategoryService) {
    this.data = new LocalDataSource()
   }
   ngOnInit(){
    this.expenseCategoryService.getExpenseCategoryUserList().subscribe(response=>{
      this.data.load(response);
    },error=>{alert("error")}
    )
   }

   editData(e?){
    console.log(e);
    console.log(this.data)
  }

  deleteConfirm(e?){
    console.log(e.data);
    this.data.remove(e.data)
  }
  
  settings = {
      columns: {
        id: {
          title: 'ID',
          editable: false,
        },
        name: {
          title: 'Full Name'
          
        },
        username: {
          title: 'User Name'
        },
        email: {
          title: 'Email'
        }
      },
      mode: 'inline',
      confirmSave: true,
      confirmDelete:true
    };


}
