import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const API_USER='http://localhost:8080/FitTrack'

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  
  login(details: any): Observable<User> {
    return this.http.post<User>(API_USER+'/login',details)
  }
  register(data: any): Observable<User>{
    return this.http.post<User>(API_USER+'/register',data)
  }
constructor(private http: HttpClient) { }

}
