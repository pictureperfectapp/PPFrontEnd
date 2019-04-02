import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService, private router: Router) { }

  myStorage = window.localStorage;

  ngOnInit() {
   this.dataTransfer.checkForUser();
  }

  logout(){
    this.myStorage.setItem("username", "");
    this.myStorage.setItem("userId", "");
    this.router.navigate(["/login"]);
  }
}
