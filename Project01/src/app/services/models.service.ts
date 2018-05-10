import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ModelsService {

  constructor(private http: Http) {
    this.getJSON().subscribe(
      data => {
        console.log('---------------------');
        console.log('Data length : ', data.length);
      });
  }
  getJSON(): Observable<any> {
    return this.http.get('/api/getAll').map((res) => res.json());
  }
}
