import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import {LogInComponent} from './log-in/log-in.component';
import {LandingPageComponent} from './landing-page/landing-page.component'
import {UserPageComponent} from './user-page/user-page.component'
import {AdminPageComponent} from './admin-page/admin-page.component'
import {GameViewComponent} from './game-view/game-view.component'
import {GuessingViewComponent} from './guessing-view/guessing-view.component'


const routes: Routes = [
  {path:'create-account', component:CreateAccountComponent},
  {path:'log-in', component:LogInComponent},
  {path:'landing-page', component:LandingPageComponent},
  {path:'UserPage', component:UserPageComponent},
  {path:'AdminPage', component:AdminPageComponent},
  {path:'GameView', component:GameViewComponent},
  {path:'GuessingView', component:GuessingViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
