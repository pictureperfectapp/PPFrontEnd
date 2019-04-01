import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
>>>>>>> 6865da9b3c89d3c023c419f6292fd28dba21925a

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private userService: UserService, private router: Router) { }

>>>>>>> 6865da9b3c89d3c023c419f6292fd28dba21925a

  ngOnInit() {
  }

  private username: string = "";
  private email: string = "";
  private password1: string = "";
  private password2: string = "";
  private user: User = new User();

  
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
