import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { UserComponent } from './user/user.component';
import { UsersearchComponent } from './usersearch/usersearch.component';


const routes: Routes = [
  { path:'mayank', component:UserComponent},
  { path:'details/:name', component:RepoDetailsComponent },
  { path:'search/:query', component:UsersearchComponent },
  { path:'', redirectTo:'/mayank', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
