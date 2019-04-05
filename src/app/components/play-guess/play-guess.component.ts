import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { JsonString } from 'src/app/models/jsonstring';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/game';
import { strictEqual } from 'assert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-guess',
  templateUrl: './play-guess.component.html',
  styleUrls: ['./play-guess.component.css']
})
export class PlayGuessComponent implements OnInit {

  //banana in a box notation to check whether guess matches word || Removes the need for a button
  constructor(private imageService: ImageService, private dataTransfer: DataPersistenceService, private gameService: GamesService,  private router: Router) { }

  myStorage = window.localStorage;
  currentGame: Game;
  hiddenGuess: string;
  imageName: string = "";
  image: any;
  readonly imageType: string = 'data:image/PNG;base64,';

  message: string;
  guessNum: number = 0;
  guess: string = "";

  print(){
    this.guessNum = this.guessNum +1;
    this.guesses.push(this.guess);
    if(this.guess.toLowerCase() == this.currentGame.word.toLowerCase()){
      this.convertGuesses();
      this.currentGame.guess = this.guessesString;
      this.currentGame.users[0].points =  this.currentGame.users[0].points + (4 - this.guessNum);
      this.currentGame.users[1].points =  this.currentGame.users[1].points + (4 - this.guessNum);
      this.updateGame();
    } else if(this.guessNum < 3){
    this.message = "Try again."
    } else{
      this.convertGuesses();
      this.currentGame.guess = this.guessesString;
      this.updateGame();
    }
  }

  guesses: string[] = [];
  guessesString: string = "";
  convertGuesses(){
    for(let i = 0; i<this.guesses.length; i++){
      this.guessesString += " " + this.guesses[i] ;
    }
  }
  updateGame(){
    this.gameService.updateGame(this.currentGame, this.currentGame.g_id)
    .subscribe(res => {
      this.myStorage.setItem("word", res.word);
      this.myStorage.setItem("guesses", this.guessesString);
      this.router.navigate(["./postGame"]);
    },
    err => {
      this.router.navigate(["./dashboard"]);
    })
  }
  ngOnInit() {
    this.dataTransfer.checkForUser(); 
    if (this.myStorage.getItem("gameId") == null || this.myStorage.getItem("gameId") == "") {
      this.router.navigate(["./dashboard"]);
    }else {
      this.getGame(+this.myStorage.getItem("gameId"));
      this.myStorage.setItem("gameId", "");
    }
  }


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
      this.hiddenGuess = this.hideWord(this.currentGame.word);
    });
  }

  hideWord(word: string){
    let newS = "";
    for( let i = 0; i < word.length; i++){
      newS += "_ "; 
    }
    return newS;
  }
}
