import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-draw',
  templateUrl: './play-draw.component.html',
  styleUrls: ['./play-draw.component.css']
})
export class PlayDrawComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  word:string = "Word to Draw"
}
