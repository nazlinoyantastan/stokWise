import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/component/login/login.component';

import { HomepageComponent } from './core/component/homepage/homepage.component';

const routes: Routes = [
  {path: '', redirectTo: 'login' , pathMatch: 'full'},
  {path: 'login', component:LoginComponent },
  {path: 'homepage', component:HomepageComponent },
  {path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
