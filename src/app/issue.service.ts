import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getLocations(user) {
    return this.http.get(`${this.uri}/getLocations`, { 
      params: { user: user } 
    });
  }

  saveLocation(user, coords, time) {
    const body = {
      user: user,
      coords: coords,
      time: time
    };
    return this.http.post(`${this.uri}/saveLocation`, body);
  }
}
