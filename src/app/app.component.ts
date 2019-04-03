import { Component, ViewChild } from '@angular/core';
import { DataPersistenceService } from './services/data-persistence.service';
import { LoginComponent } from './components/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PicPFrontEnd';
  constructor(public router: Router){}

  ngOnInit() {
    this.router.navigate(["./login"]);
    }

}
