import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DetailService } from 'src/app/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  repo:any;
  public query="";

  constructor(private _githabRepo: DetailService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => this.query=params.get('query'));
    this._githabRepo.getDetails(this.query).subscribe((repo: any) => {
      this.repo = repo;
      console.log(this.repo);
    });
  }
}
