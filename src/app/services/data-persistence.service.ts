import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataPersistenceService {

  constructor(private router: Router) { }

  products= new BehaviorSubject<any>([]);
  cast= this.products.asObservable();

  myStorage = window.localStorage;

  sendAnything(data) {
    this.products.next(data);
  }

  checkForUser(){
    if(this.myStorage.getItem("userId") == ""){
      this.router.navigate(["/login"]);
    }
  }
}
