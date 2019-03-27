import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import {LogInComponent} from './log-in/log-in.component';
import {LandingPageComponent} from './landing-page/landing-page.component'
const routes: Routes = [
  {path:'create-account', component:CreateAccountComponent},
  {path:'log-in', component:LogInComponent},
  {path:'LandingPage', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
