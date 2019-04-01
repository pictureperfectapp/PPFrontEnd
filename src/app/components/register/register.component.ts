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
