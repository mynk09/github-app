import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { MyReposService } from 'src/services/my-repos.service';
import { DetailsService } from 'src/services/details.service';
import { UserComponent } from './user/user.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { SearchService } from 'src/services/search.service';
import { DataService } from 'src/services/data.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoDetailsComponent,
    UserComponent,
    UsersearchComponent,
    PagenotfoundComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MyReposService,DetailsService,SearchService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }