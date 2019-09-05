import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DetailsService } from 'src/services/details.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  details:any;
  public name:string;
  constructor(private route:ActivatedRoute, private detailsService:DetailsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => this.name=params.get('name'));
    this.detailsService.getDetails(this.name).subscribe((details:any) => 
    {
      this.details=details;
      console.log(this.details);
    });
  }

}
