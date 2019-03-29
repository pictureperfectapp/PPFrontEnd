import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/word.service';
import { ActivatedRoute } from '@angular/router';
import { Word } from '../word';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

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
      });
      console.log("get words");
      
      
    }
    

    getNewWord(){
      
      this.wordCount=this.words.length-1;
        this.i= Math.floor((Math.random() * this.wordCount) + 1); 
        this.randWord=this.words[this.i].word;
      
      
      
    }
    
   // wordCount: number=this.words.length-1;
    
     
    
	 //randWord = "cat";//this.words[this.i].word;
			
		
}
