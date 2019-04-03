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

  // serviceUrl: string = "http://localhost:8084/image/";
  serviceUrl: string = "http://18.222.227.121:8085/PicturePerfect/image";
  constructor(private http: HttpClient) { }

  getImage(imageName: string) : Observable<JsonString> {
    return this.http.get<JsonString>(this.serviceUrl+"/" +imageName);
  }
  
  postImage(name: string, image: string): Observable<string> {
    return this.http.post<string>(this.serviceUrl +"/" + name, image, );
  }
}
