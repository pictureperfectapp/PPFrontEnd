import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { PlayOptionsComponent } from './components/play-options/play-options.component';
import { PlayDrawComponent } from './components/play-draw/play-draw.component';
import { PlayGuessComponent } from './components/play-guess/play-guess.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { ResumeGameComponent } from './components/resume-game/resume-game.component';
import { PostgameLobbyComponent } from './components/postgame-lobby/postgame-lobby.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [{
  path: 'adminDashboard',
  component: AdminDashboardComponent
},{
  path: 'postGame',
  component: PostgameLobbyComponent
},{
  path: 'newGame',
  component: NewGameComponent
},{
  path: 'resumeGame',
  component: ResumeGameComponent
},{
  path: 'updateInf',
  component: UpdateProfileComponent
},{
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: 'profile',
  component: ProfileComponent
}, {
  path: 'leaderboard',
  component: LeaderboardComponent
}, {
  path: 'playOp',
  component: PlayOptionsComponent
}, {
  path: 'playDr',
  component: PlayDrawComponent
}, {
  path: 'playGu',
  component: PlayGuessComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
