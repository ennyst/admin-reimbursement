import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { LocalDataSource } from '../../../../node_modules/ng2-smart-table';

@Component({
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit{

  data:LocalDataSource;
  constructor(private employeeService: EmployeeService) {
    this.data = new LocalDataSource()
   }
   ngOnInit(){
    this.employeeService.getEmployeeUserList().subscribe(response=>{
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
