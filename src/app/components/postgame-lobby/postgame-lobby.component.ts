import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postgame-lobby',
  templateUrl: './postgame-lobby.component.html',
  styleUrls: ['./postgame-lobby.component.css']
})
export class PostgameLobbyComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService, private router: Router) { }


  ngOnInit() {
    this.dataTransfer.checkForUser();
    if(this.myStorage.getItem("word") == "" || this.myStorage.getItem("word") == null){
      this.router.navigate(["./dashboard"]);
    }
    this.word = this.myStorage.getItem("word");
    this.myStorage.setItem("word", "");
    this.guesses = this.myStorage.getItem("guesses");
    this.myStorage.setItem("guesses", "");
  }

  word:string = "";
  guesses: string = "";

  myStorage = window.localStorage;


}
