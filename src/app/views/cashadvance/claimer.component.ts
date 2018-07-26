
import { Component,OnInit } from '@angular/core';
import { AdvClaimerService } from "../../services/advclaimer.service";
import { LocalDataSource } from 'ng2-smart-table';


import { ModelAdvClaimer } from "../../models/advclaimer.model";

@Component({
    templateUrl:'claimer.component.html'
})
export class ClaimerComponent implements OnInit{
    MAC : ModelAdvClaimer[];
    errorMessage: String;
    jabatanName:String;
    jabatan = new ModelAdvClaimer();

    
    data: LocalDataSource;
    constructor(private advCService : AdvClaimerService) { 
        this.data = new LocalDataSource()
    }

    ngOnInit(){
        this.advCService.getAdvClaimerList().subscribe(response=>{
            this.data.load(response);
          }
            ,error=>{alert("error")}
          
        )

        
          
    }

    // insertConfirm(): void {
    //   this.advCService.addAdvClaimer(this.jabatan)
    //     .subscribe( jabatan => {
    //                this.ngOnInit();					   
    //     },
    //                       error => this.errorMessage = <any>error);
    // }

    

    editData(e?){
        console.log(e);
        console.log(this.data)
      }
  
      deleteConfirm(e?){
        console.log(e.data);
        this.data.remove(e.data)
      }
      
      settings = {
        actions:{
          
          delete:false
        },

          columns: {
            id: {
              title: 'ID',
              editable: false,
            },
            nama_jabatan: {
              title: 'Nama Jabatan'
              
            }
          },
          mode: 'inline',
          confirmSave: true,
          confirmDelete:true
        };
}