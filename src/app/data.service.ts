import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }
  login(data:User): Observable<any>{
    return this.http.post<any>(this.url + 'login', data)
  }
}
