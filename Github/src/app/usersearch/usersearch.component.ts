import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent implements OnInit {

  repos:any;
  public query:string;
  constructor( private router:Router,private route:ActivatedRoute, private searchService:SearchService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => this.query=params.get('query'));
    this.searchService.searchRepos(this.query).subscribe((repos:any) => 
    {
      this.repos=repos.items;
      console.log(this.repos);
    });
  }
  detailsEvent(name){
    this.router.navigate(['/details',name]);
  }
}
