import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-game',
  templateUrl: './resume-game.component.html',
  styleUrls: ['./resume-game.component.css']
})
export class ResumeGameComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService, private gameService: GamesService, private router: Router) { }
  myStorage = window.localStorage;

  games: Game[] = [];
  currentGame: Game = null;
  currentUsername: string = this.myStorage.getItem("username");

  ngOnInit() {
    this.dataTransfer.checkForUser();
    this.retrieveGames();
  }

  resumeGame(game: Game) {
    console.log(game.guess);
    if (game.guess == null || game.guess == "" || game.guess == "NEED TO GUESS") {
      this.myStorage.setItem("gameId", game.g_id.toString());
      this.router.navigate(["./playGu"]);
    } else {
      this.myStorage.setItem("gameId", game.g_id.toString());
      this.myStorage.setItem("word", game.word);
      this.myStorage.setItem("word", game.word);
      this.myStorage.setItem("guesses", game.guess);
      this.router.navigate(["./postGame"]);
    }
  }

  // check(userN: string){
  //   if(this.currentUsername
  //   username != game.users[0].username
  // }
  retrieveGames() {
    this.gameService.getGamesByUserId(+this.myStorage.getItem("userId")).subscribe(games => {
      this.games = games;
    })
  }
}
