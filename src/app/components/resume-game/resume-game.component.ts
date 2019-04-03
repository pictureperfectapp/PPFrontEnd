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

  ngOnInit() {
    this.dataTransfer.checkForUser();
    this.retrieveGames();
  }

  resumeGame(gameId: number){
    this.myStorage.setItem("gameId", gameId.toString());
    this.router.navigate(["./playGu"]);
  }
 
  retrieveGames(){
    this.gameService.getGamesByUserId(+this.myStorage.getItem("userId")).subscribe(games => {
      this.games = games;
    })
  }
}
