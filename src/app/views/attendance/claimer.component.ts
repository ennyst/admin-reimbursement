import { Component, OnInit } from '@angular/core';
import { AttendanceClaimerService } from "../../services/attclaimer.service";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  templateUrl: 'claimer.component.html'
})
export class AttClaimerComponent implements OnInit{
<<<<<<< HEAD
    

    
    data: LocalDataSource;
    constructor(private advCService : AdvClaimerService, private http: Http) { 
        this.data = new LocalDataSource()
    }

    ngOnInit(){
        this.advCService.getAdvClaimerList().subscribe(response=>{
            this.data.load(response);
          }
            ,error=>{alert("error")}
          
        ) 
    }
    

    addRecord(event) {
      console.log(event);
      let param = "?nama_jabatan=" + event.newData.nama_jabatan;
      console.log(param)
      this.advCService.addAdvClaimer(param).subscribe(response => {
        event.confirm.resolve(event.newData)  
      }, error => {
        alert(error.errorMessage)
      })
      
    }

    editData(event){
      console.log(event);
       let param = "?id=" + event.newData.id + "&nama_jabatan=" + event.newData.nama_jabatan;
       console.log(param)
       this.advCService.editAdvClaimer(param).subscribe(response => {
         event.confirm.resolve(event.newData)  
       }, error => {
         alert(error.errorMessage)
       }) 

    }

    deleteRecord(event){
      console.log(event);
       let param = "?id=" + event.data.id+ "&nama_jabatan=" + event.data.nama_jabatan;
       console.log(param)
       this.advCService.deleteAdvClaimer(param).subscribe(response => {
         event.confirm.resolve();
       }, error => {
         alert(error.errorMessage)
       }) 
    }

    cek(){
      console.log(this.data)
    }
}
=======

  data:LocalDataSource;
  constructor(private attendanceClaimerService: AttendanceClaimerService) {
    this.data = new LocalDataSource()
   }
   ngOnInit(){
    this.attendanceClaimerService.getAttendanceClaimerList().subscribe(response=>{
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
>>>>>>> 37ab8f361f024575072c959bea5ab1c94fbf61f8
