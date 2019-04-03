import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  userUrl: string = "http://localhost:8084/users";

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, httpOptions);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.userUrl + "/" + id, httpOptions);
  }

  updateUser(user: User, id: number): Observable<User> {
    return this.http.put<User>(this.userUrl + "/" + id, user, httpOptions);
  }
  
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl, httpOptions);
  }
}
