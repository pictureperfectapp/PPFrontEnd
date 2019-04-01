import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
>>>>>>> 6865da9b3c89d3c023c419f6292fd28dba21925a

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
=======
  constructor(private dataTransfer: DataPersistenceService, private userService: UserService, private router: Router) { }


  ngOnInit() {
    this.dataTransfer.checkForUser();
    console.log(this.myStorage.getItem("userId"));
    this.retrieveUserInfo(+this.myStorage.getItem("userId"));
>>>>>>> 6865da9b3c89d3c023c419f6292fd28dba21925a
  }

  private myStorage = window.localStorage;

  private username: string = "";
  private email: string = "";
  private password1: string = "";
  private password2: string = "";
  private user: User = new User();
  private ogUser: User = new User();

  retrieveUserInfo(id: number){
    if (!id) { return; }
    this.userService.getUserById(id)
      .subscribe(userInformation => {
        if (userInformation.uId != 0) {
          this.ogUser = userInformation;
          console.log(this.ogUser);
        }
      });
  }

  onSubmit(){
    if(this.password1 == this.password2){
    this.user.username = this.username;
    this.user.email = this.email;
    this.user.password = this.password1;
    this.createUser(this.user);
    } else {
      console.log("Password do not match");
    }
    console.log(this.user); 
  }

  createUser(user: User): void {
    if (!user) { return; }
    this.userService.createUser(user)
      .subscribe(user => {
        if (this.user.uId != 0) {
          this.router.navigate(['./dashboard']);
          console.log("Success!");
        }
      });
  }
}
