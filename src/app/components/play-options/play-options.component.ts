import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';

@Component({
  selector: 'app-play-options',
  templateUrl: './play-options.component.html',
  styleUrls: ['./play-options.component.css']
})
export class PlayOptionsComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService) { }


  ngOnInit() {
    this.dataTransfer.checkForUser();
  }

}
