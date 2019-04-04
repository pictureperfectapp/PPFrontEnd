import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService, private router: Router, private userService: UserService) { }

  opponentUsername: string = "";
  myStorage = window.localStorage;
  message: string;

  ngOnInit() {
    this.dataTransfer.checkForUser();
  }

  onSubmit() {
    if (this.opponentUsername != "" && this.opponentUsername != null && this.opponentUsername != this.myStorage.getItem("username")) {
      this.userService.getUserByUsername(this.opponentUsername).subscribe(res => {
        if(res != null && res.username == this.opponentUsername && res.admin != "ban"){
          this.myStorage.setItem("opponentUsername", this.opponentUsername);
          this.router.navigate(['./playDr']);
        } else if (res != null && res.username == this.opponentUsername && res.admin == "ban"){
          this.message = "User was banned.";
        }
        else{
          this.message = "User not found.";
        }
      },
      err => {
        this.message = "Unable to retrieve opponent.";
      })

    } else {
      this.message = "Please enter a valid opponent.";
    }
  }
}
