import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription, User } from '../models/user';
import { Observable } from 'rxjs';
import { Training } from '../models/training';

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
  getSubscription(id: number): Observable<Subscription>{
    return this.http.get<Subscription>(API_USER+`/${id}/subscription`)
  }
  getTrainings(page: number): Observable<Training[]>{
    return this.http.get<Training[]>(API_USER+`/trainings/${page}`)
  }
  updateTraining(training: Training) : Observable<Training>{
    return this.http.put<Training>(API_USER+`/trainings/${training.id}`,training)
  }
constructor(private http: HttpClient) { }

}
