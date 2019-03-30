
import { Component, OnInit, ViewChild} from '@angular/core';
import { CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/word.service';
import { Word } from 'src/app/word';

@Component({
  selector: 'app-play-draw',
  templateUrl: './play-draw.component.html',
  styleUrls: ['./play-draw.component.css']
})
export class PlayDrawComponent implements OnInit {


  constructor(private http: HttpClient) { }


  image: string = "";

  @ViewChild('canvasWhiteboard') canvasWhiteboard: CanvasWhiteboardComponent;

  print(){
    this.canvasWhiteboard.generateCanvasData((generatedData: string) => {
          console.log(generatedData);
          this.image = generatedData;
      }, "image/png", 1);
      const fd = new FormData();
      fd.append('image', this.image, "test-image");
      this.http.post('https://16fcc55b-1bab-4153-938f-743595374287.mock.pstmn.io/image', fd).subscribe(res=>{console.log(res)});
  }
  word:string = "Word to Draw"

  currentWord: Word = {
    word:undefined
  };
  constructor(private wordService: WordService) { }
  
  ngOnInit() {
  this.getWords();
    
  }

  words: Word[] = [];
wordCount:number;
i: number;
randWord: string="Get a word!";
  getWords(){
    console.log("Hello")
    this.wordService.getWords()
    .subscribe((allWords)=>{
        this.words = allWords;
        console.log(this.words);
        this.wordCount=this.words.length-1;
        this.i= Math.floor((Math.random() * this.wordCount) + 1); 
  this.randWord=this.words[this.i].word;
  console.log("Random word is"+ this.randWord);
      });
      
      
      
    }
    
count:number=0;
    getNewWord(){
      this.count++;
      console.log("changing word");
      this.wordCount=this.words.length-1;
        this.i= Math.floor((Math.random() * this.wordCount) + 1); 
        this.randWord=this.words[this.i].word;
      
      
      
    }
}