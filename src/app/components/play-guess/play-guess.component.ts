import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { JsonString } from 'src/app/models/jsonstring';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-play-guess',
  templateUrl: './play-guess.component.html',
  styleUrls: ['./play-guess.component.css']
})
export class PlayGuessComponent implements OnInit {

  //banana in a box notation to check whether guess matches word || Removes the need for a button
  constructor(private imageService: ImageService, private dataTransfer: DataPersistenceService, private gameService: GamesService) { }

  myStorage = window.localStorage;
  currentGame: Game = new Game();

  ngOnInit() {
    this.dataTransfer.checkForUser();
    if (this.myStorage.getItem("gameId") != null && this.myStorage.getItem("gameId") != "") {
      this.getGame(+this.myStorage.getItem("gameId"));
    }
  }

  imageName: string = "";
  image: any;
  readonly imageType: string = 'data:image/PNG;base64,';


  getImage(image: string) {
    this.imageService.getImage(image)
      .subscribe((data: JsonString) => {
        this.image = this.imageType + data.content;
      })
  }

  getGame(id: number){
    this.gameService.getGameById(id)
    .subscribe((game: Game) => {
      this.currentGame = game;
      this.getImage(this.currentGame.picture);
    })
  }
}
