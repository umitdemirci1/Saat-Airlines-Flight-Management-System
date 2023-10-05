import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../interfaces/flight.interface';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private apiUrl = 'http://localhost:8080/flights';

  constructor(private http: HttpClient) {}

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.apiUrl}`);
  }
}
