import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService, private userService: UserService, private router: Router) { }


  ngOnInit() {
    this.dataTransfer.checkForUser();
  }

  myStorage = window.localStorage;
  message: string;
  username: string = "";
  email: string = "";
  password1: string = "";
  password2: string = "";
  user: User = new User();

  onSubmit() {
    // if (this.username == "" || this.email == "" || this.password1 == "" || this.password2 == "") {
    //   this.message = "Fill out at least one input.";
    // } else 
    if (this.password1 == this.password2) {
        this.user.username = this.username.trim();
        this.user.email = this.email.trim();
        this.user.password = this.password1;
        this.user.uId = +this.myStorage.getItem("userId");
        this.updateUser(this.user);
      } else {
        this.message = "Password do not match.";
      }
  }

  updateUser(user: User): void {
    if (!user) { return; }
    this.userService.updateUser(user, user.uId)
      .subscribe(res => {
        console.log(res);
        if (user.uId != 0) {
          this.myStorage.setItem("username", user.username);
          this.message = "Redirecting to dashboard.";
          this.router.navigate(['./dashboard']);
        }
      },
        err => {
          if (err.status == 409) {
            this.message = "Username/Email is already present."
          } else {
            this.message = "Status code: " + err.status;
          }
        });
  }
}
