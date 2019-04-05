import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-postgame-lobby',
  templateUrl: './postgame-lobby.component.html',
  styleUrls: ['./postgame-lobby.component.css']
})
export class PostgameLobbyComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService, private router: Router, private gameService: GamesService) { }


  ngOnInit() {
    this.dataTransfer.checkForUser();
    if (!(this.myStorage.getItem("word") == "") && !(this.myStorage.getItem("word") == null) && ((this.myStorage.getItem("gameId") == "") || (this.myStorage.getItem("gameId") == null))) {
      this.word = this.myStorage.getItem("word");
      this.myStorage.setItem("word", "");
      this.guesses = this.myStorage.getItem("guesses");
      this.myStorage.setItem("guesses", "");
    } else if (!(this.myStorage.getItem("gameId") == "") && !(this.myStorage.getItem("gameId") == null)) {
      this.word = this.myStorage.getItem("word");
      this.myStorage.setItem("word", "");
      this.guesses = this.myStorage.getItem("guesses");
      this.myStorage.setItem("guesses", "");
      this.gameService.getGameById(+this.myStorage.getItem("gameId")).subscribe(
        res => {
          // console.log(res);
          this.gameService.updateGame(res, res.g_id).subscribe(
            response => {
              // console.log(response);
            }
          );
        }
      )
    } else {
      this.router.navigate(["./dashboard"]);
    }

    this.listL = this.guesses.trim().split(" ");
  }

  word: string = "";
  guesses: string = "";
  listL:string[] = [];
  myStorage = window.localStorage;


}
