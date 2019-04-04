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
    if(this.myStorage.getItem("userId") == "" || this.myStorage.getItem("userId") == null){
      this.router.navigate(["/login"]);
    }
  }

  checkForAdmin(){
    if(this.myStorage.getItem("admin") == "" || this.myStorage.getItem("admin") == null || this.myStorage.getItem("admin") != "Admin"){
      this.router.navigate(["/login"]);
    }
  }
}
