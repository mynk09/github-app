import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component'
import { DetailComponent } from './detail.component';




const routes: Routes = [
  { path:'user', component:DetailComponent },
  { path:'search/:query', component:SearchComponent },
  
  { path:'', redirectTo:'/user', pathMatch:'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
