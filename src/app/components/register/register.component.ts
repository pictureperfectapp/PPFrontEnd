import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  myStorage = window.localStorage;
  message: string;
  username: string = "";
  email: string = "";
  password1: string = "";
  password2: string = "";
  user: User = new User();

  ngOnInit() {
    if (this.myStorage.getItem("userId") != null && this.myStorage.getItem("userId") != "") {
      this.router.navigate(['./dashboard']);
    }
  }

  onSubmit() {
    if (this.username == "" || this.email == "" || this.password1 == "" || this.password2 == "") {
      this.message = "Inputs are missing.";
    } else if (this.password1 == this.password2) {
      this.user.uId = +this.myStorage.getItem("userId");
      this.user.username = this.username.trim();
      this.user.email = this.email.trim();
      this.user.password = this.password1;
      this.createUser(this.user);
    } else {
      this.message = "Password do not match.";
    }
  }


  createUser(user: User): void {
    if (!user) { return; }
    this.userService.createUser(user)
      .subscribe(res =>
        this.router.navigate(["./login"]),
        err => {
          if(err.status == 409){
            this.message = err.status + "Username/Email is already present."
          }else {
            this.message = "Status code: " + err.status;
          }
        });
  }
}
