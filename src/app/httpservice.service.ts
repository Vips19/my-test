import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { photo } from './photo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) {}

  getphoto(): Observable<photo[]>{
    return this.http.get<photo[]>("https://jsonplaceholder.typicode.com/photos");
  }
}
