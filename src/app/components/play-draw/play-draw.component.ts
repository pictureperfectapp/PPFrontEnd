
import { Component, OnInit, ViewChild } from '@angular/core';
import { CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';
import { HttpClient } from '@angular/common/http';
import { WordService } from 'src/app/services/word.service';
import { Word } from 'src/app/models/word';
import { ImageService } from 'src/app/services/image.service';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { Game } from 'src/app/models/game';
import { User } from 'src/app/models/user';
import { GamesService } from 'src/app/services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-draw',
  templateUrl: './play-draw.component.html',
  styleUrls: ['./play-draw.component.css']
})
export class PlayDrawComponent implements OnInit {

  constructor(private wordService: WordService, private imageService: ImageService, private dataTransfer: DataPersistenceService, private gameService: GamesService, private router: Router) { }

  image: string = "";
  count: number = 0;
  words: Word[] = [];
  wordCount: number;
  i: number;
  randWord: string = "Get a word!";
  imageName: string = "";

  currentWord: Word = {
    word: undefined
  };

  currentGame: Game = new Game();
  myStorage = window.localStorage;

  owner: User = new User();
  opponent: User = new User();

  submitted: boolean = false;

  onSubmit() {
    if (!this.submitted) {
      this.submitted = true;
      this.owner.uId = +this.myStorage.getItem("userId");
      this.opponent.username = this.myStorage.getItem("opponentUsername");
      this.imageName = this.randWord + this.owner.uId + this.opponent.username;
      this.currentGame.word = this.randWord;
      this.currentGame.picture = this.imageName;
      this.currentGame.users = [];
      this.currentGame.users.push(this.owner);
      this.currentGame.users.push(this.opponent);
      this.gameService.createGame(this.currentGame).subscribe(game => {
        if (game.g_id != 0 && game.g_id != null) {
          this.submitPicture();
          this.myStorage.setItem("opponentUsername", "");
          this.router.navigate(['./dashboard']);
        }
      },
      err => {
        this.router.navigate(['./dashboard']);
      })
    };
  }

  ngOnInit() {
    this.dataTransfer.checkForUser();
    this.getWords();
    if (this.myStorage.getItem("opponentUsername") == null || this.myStorage.getItem("opponentUsername") == "") {
      this.router.navigate(["./dashboard"]);
    }
  }

  @ViewChild('canvasWhiteboard') canvasWhiteboard: CanvasWhiteboardComponent;

  submitPicture() {
    this.canvasWhiteboard.generateCanvasData((generatedData: string) => {
      this.image = generatedData;
    }, "image/png", 1);
    const fd = new FormData();
    fd.append('image', this.image, "test-image");
    this.imageService.postImage(this.imageName, this.image).subscribe(res => { console.log(res) });
  }

  getWords() {
    this.wordService.getWords()
      .subscribe((allWords) => {
        this.words = allWords;
        this.wordCount = this.words.length - 1;
        this.i = Math.floor((Math.random() * this.wordCount) + 1);
        this.randWord = this.words[this.i].word;
      });
  }

  getNewWord() {
    this.count++;
    this.wordCount = this.words.length - 1;
    this.i = Math.floor((Math.random() * this.wordCount) + 1);
    this.randWord = this.words[this.i].word;
  }
}