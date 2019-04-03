import { Component, OnInit, Input } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService, private userService: UserService) { }

  username: string = "";

  myStorage = window.localStorage;

  ngOnInit() {
  this.dataTransfer.checkForUser();
  this.username = this.myStorage.getItem("username");
  this.retrieveUserInfo(+this.myStorage.getItem("userId"));  
}

ogUser: User = new User();

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
}
