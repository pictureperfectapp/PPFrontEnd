import { Component, OnInit, Input } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService) { }

  username: string = "";

  myStorage = window.localStorage;

  ngOnInit() {
  this.dataTransfer.checkForUser();
  this.username = this.myStorage.getItem("username");
  }

}
