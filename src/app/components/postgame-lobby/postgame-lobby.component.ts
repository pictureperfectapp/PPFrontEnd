import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';

@Component({
  selector: 'app-postgame-lobby',
  templateUrl: './postgame-lobby.component.html',
  styleUrls: ['./postgame-lobby.component.css']
})
export class PostgameLobbyComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService) { }


  ngOnInit() {
    this.dataTransfer.checkForUser();
  }

}
