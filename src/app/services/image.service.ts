import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonString } from '../models/jsonstring';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  serviceUrl: string = "http://localhost:8084/image/";
  constructor(private http: HttpClient) { }

  getImage(imageName: string) : Observable<JsonString> {
    return this.http.get<JsonString>(this.serviceUrl+"/" +imageName);
  }
  
  postImage(name: string, image: string): Observable<string> {
    return this.http.post<string>(this.serviceUrl +"/" + name, image, );
  }
}
