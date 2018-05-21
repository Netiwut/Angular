import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000';
  getGenaral() {
    return this
      .http
      .get(`${this.url}/general`);
  }
  getPostit() {
    return this
      .http
      .get(`${this.url}/postit`);
  }
  getGallery() {
    return this
      .http
      .get(`${this.url}/gallery`);
  }
  getPeople() {
    return this
      .http
      .get(`${this.url}/people`);
  }

}
