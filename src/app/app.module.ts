import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { GameViewComponent } from './game-view/game-view.component';
import { GuessingViewComponent } from './guessing-view/guessing-view.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LandingPageComponent,
    LogInComponent,
    CreateAccountComponent,
    UserPageComponent,
    AdminPageComponent,
    GameViewComponent,
    GuessingViewComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
