import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService, private router: Router) { }

  private opponentUsername: string = "";
  myStorage = window.localStorage;


  ngOnInit() {
    this.dataTransfer.checkForUser();
  }

  onSubmit() {
    if (this.opponentUsername != "" && this.opponentUsername != null) {
      // Use user-service to check that opponent exists
      this.myStorage.setItem("opponentUsername", this.opponentUsername);
      this.router.navigate(['./playDr']);
    } else {
      console.log("Please enter an opponent.")
    }
  }
}
