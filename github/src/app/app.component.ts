
import { Component, OnInit, Input } from '@angular/core';
import { githubservice } from 'src/app/githubservice.service';
import { Observable } from 'rxjs'
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'github';
}

export class githubComponent implements OnInit {

  private users=new Observable();
  public val:string;
  public repo;
  constructor(private _githubService:githubservice, private router:Router){
    this._githubService.getUser().subscribe((user:any) => {
      this.users=user;
      console.log(this.users);
    });
  }
  ngOnInit() {
  }
  searchEvent(){
    this.router.navigate(['/search',this.val]);
  }

}