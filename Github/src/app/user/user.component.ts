import { Component } from '@angular/core';
import { MyReposService } from 'src/services/my-repos.service';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  repos:any;
  constructor(private myService:MyReposService,private router:Router,private dataService:DataService){
    this.myService.getRepo().subscribe((repositories:any) => {
      this.repos=repositories;
      console.log(this.repos);
    });
  }
  detailsEvent(name){
    this.router.navigate(['/details',name]);
  }

  deleteEvent(fname){
    this.dataService.deleteRepository(fname).subscribe();
  }
  newRepo(repodata){ 
    console.log(repodata);
    // User data which we have received from the registration form.
    this.dataService.newRepository(repodata).subscribe((response)=>{
      console.log(response);
     }); 
  }
}



