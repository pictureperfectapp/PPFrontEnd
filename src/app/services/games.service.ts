import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Observable } from 'rxjs';
import 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  gameUrl: string = "http://localhost:8084/games";

  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.gameUrl, game, httpOptions);
  }


  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(this.gameUrl + "/" + id, httpOptions);
  }

  getGamesByUserId(id: number): Observable<Game[]> {
    return this.http.get<Game[]>(this.gameUrl + "/resume/" + id, httpOptions);
  }

  updateGame(game: Game, id: number): Observable<Game> {
    return this.http.put<Game>(this.gameUrl + "/" + id, game, httpOptions);
  }
}
