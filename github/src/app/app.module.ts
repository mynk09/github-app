import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { githubservice } from './githubservice.service';
import { SearchComponent } from './search.component';
import { DetailComponent } from './detail.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [githubservice,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
