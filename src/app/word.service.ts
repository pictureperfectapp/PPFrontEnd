import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Word} from './word';

@Injectable({
  providedIn: 'root'
})
export class WordService {
 triggers: string[]=["Animal", "Job", "Sports", "Appliances", "furniture", "landscape", "River", "Food", "vegetable"];
 triggerCount: number=this.triggers.length-1;
 i: number= Math.floor((Math.random() * this.triggerCount) + 1);
    
 domain: string=this.triggers[this.i];
 


url="http://api.datamuse.com/words?rel_trg="+this.domain;

  constructor(private http: HttpClient) { }

  getWords(): Observable<Word[]> {
    console.log(this.domain);
    console.log("Observable" + this.http.get<Word[]>(this.url));
    return this.http.get<Word[]>(this.url);
  }


}
