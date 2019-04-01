import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService, private loginService: LoginService, private router: Router) { }


  persistUser() {
    this.login(this.userInformation);
  }

  ngOnInit() {
  }


  myStorage = window.localStorage;

  userInformation: User
    = {
      uId: 0,
      username: "firstuser",
      password: "thispassword",
      email: "",
      admin: "",
      points: 0,
      gamesPlayed: 0,
      wins: 0
    }

  login(userInformation: User): void {
    if (!userInformation) { return; }
    this.loginService.login(userInformation)
      .subscribe(userInformation => {
        this.userInformation = userInformation;
        if (this.userInformation.uId != 0) {
          this.myStorage.setItem("username", this.userInformation.username);
          this.myStorage.setItem("userId", this.userInformation.uId.toString());
          this.router.navigate(['./dashboard']);
        }
      });
  }

}
