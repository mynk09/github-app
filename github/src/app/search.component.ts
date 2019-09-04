import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  repos:any;
  public query="";
  constructor(private _githabSearch: SearchService, private route:ActivatedRoute,private router:Router) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => this.query=params.get('query'));
    this._githabSearch.getRepo(this.query).subscribe((repos: any) => {
      this.repos = repos.items;
      console.log(this.repos);
    });
  }
  detailsEvent(query){
    this.router.navigate(['/repos',query]);
  }
}
