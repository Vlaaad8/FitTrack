import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription, User } from '../models/user';
import { Observable } from 'rxjs';
import { Training } from '../models/training';
import { Reservation } from '../models/reservation';

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
  getTrainings(): Observable<Training[]>{
    return this.http.get<Training[]>(API_USER+`/trainings`)
  }
  updateTraining(training: Training) : Observable<Training>{
    return this.http.put<Training>(API_USER+`/trainings/${training.id}`,training)
  }
  saveRegistration(registration: Reservation){
    return this.http.post<Reservation>(API_USER+'/reservations',registration)
  }
  getUserRegistrations(id: number): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(API_USER+`/reservations/${id}`);
  }
  getNumberOfPages(): Observable<number>{
    return this.http.get<number>(API_USER+"/trainings/pages");
  }
constructor(private http: HttpClient) { }

}
