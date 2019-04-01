import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CanvasWhiteboardModule } from 'node_modules/ng2-canvas-whiteboard';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PlayOptionsComponent } from './components/play-options/play-options.component';
import { PlayDrawComponent } from './components/play-draw/play-draw.component';
import { PlayGuessComponent } from './components/play-guess/play-guess.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BannerComponent } from './components/banner/banner.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { ResumeGameComponent } from './components/resume-game/resume-game.component';
import { PostgameLobbyComponent } from './components/postgame-lobby/postgame-lobby.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PlayOptionsComponent,
    PlayDrawComponent,
    PlayGuessComponent,
    DashboardComponent,
    BannerComponent,
    LeaderboardComponent,
    UpdateProfileComponent,
    NewGameComponent,
    ResumeGameComponent,
    PostgameLobbyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanvasWhiteboardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
