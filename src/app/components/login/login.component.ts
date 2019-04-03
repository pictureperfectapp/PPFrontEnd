import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService, private loginService: LoginService, private router: Router) { }

  private user: User = new User();

  userFormGroup: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  onSubmit() {
    this.user = new User(this.userFormGroup.value);
    this.login(this.user);
  }

  ngOnInit() {
    if (this.myStorage.getItem("userId") != null && this.myStorage.getItem("userId") != "") {
      this.router.navigate(['./dashboard']);
    }
  }


  myStorage = window.localStorage;
  message: string;

  login(userInformation: User): void {
    if (userInformation.username == "" || userInformation.username == null || userInformation.password == "" || userInformation.password == null) {
      this.message = "Inputs are missing.";
    } else {
      this.loginService.login(userInformation)
      .subscribe(res => {
        if (res.uId != 0 && res.uId != null) {
          this.myStorage.setItem("username", res.username);
          this.myStorage.setItem("userId", res.uId.toString());
          this.router.navigate(['./dashboard']);
        }else{
          this.message = "Invalid username/password.";
        }
        err => {
          this.message = "Invalid username/password.";
        }
      });
    }
  }
}
