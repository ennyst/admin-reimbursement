import { Component,OnInit } from '@angular/core';
import { TeamService } from "../../services/team.service";
import { LocalDataSource } from '../../../../node_modules/ng2-smart-table';


@Component({
  templateUrl: 'team.component.html'
})
export class TeamComponent implements OnInit{
  data: LocalDataSource;
    constructor(private teamService: TeamService) { 
      this.data = new LocalDataSource()
    }

  ngOnInit(){
    this.teamService.getTeamUserList().subscribe(response=>{
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
          title: 'Username'
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