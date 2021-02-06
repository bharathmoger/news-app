import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewspageComponent } from './newspage/newspage.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const routes: Routes = [
  {path:"",component:NewspageComponent},
  { path: 'details', component: NewsDetailComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
