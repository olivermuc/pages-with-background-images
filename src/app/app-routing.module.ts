import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'page-one', pathMatch: 'full' },
  { path: 'page-one', loadChildren: './home/home.module#HomePageModule' },
  { path: 'page-two', loadChildren: './page-two/page-two.module#PageTwoPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
