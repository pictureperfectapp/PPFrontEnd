
import { Component, OnInit, ViewChild } from '@angular/core';
import { CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';
import { HttpClient } from '@angular/common/http';
import { WordService } from 'src/app/services/word.service';
import { Word } from 'src/app/models/word';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-play-draw',
  templateUrl: './play-draw.component.html',
  styleUrls: ['./play-draw.component.css']
})
export class PlayDrawComponent implements OnInit {

  image: string = "";
  count: number = 0;
  words: Word[] = [];
  wordCount: number;
  i: number;
  randWord: string = "Get a word!";

  currentWord: Word = {
    word: undefined
  };

  constructor(private wordService: WordService, private imageService: ImageService) { }

  ngOnInit() {
    this.getWords();
  }

  @ViewChild('canvasWhiteboard') canvasWhiteboard: CanvasWhiteboardComponent;

  submit() {
    this.canvasWhiteboard.generateCanvasData((generatedData: string) => {
      this.image = generatedData;
    }, "image/png", 1);
    const fd = new FormData();
    fd.append('image', this.image, "test-image");
    this.imageService.postImage(this.randWord, this.image).subscribe(res => { console.log(res) });
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