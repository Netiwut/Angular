import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Response, Headers } from '@angular/http';
import { General } from './../models/models';

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

  editGeneral(data) {
    return this.http.put('http://localhost:3000/general', data);
  }
  editPost(id, data) {
    return this.http.put('http://localhost:3000/postit/' + id, data);
  }
  newPost(data) {
    return this.http.post('http://localhost:3000/postit', data);
  }
  deletePost(id) {
    return this.http.delete('http://localhost:3000/postit/' + id);
  }
}
