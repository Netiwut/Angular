import { Component, OnInit } from '@angular/core';
import { BackendApiService } from './../../services/backend-api.service';
import { Gallery, General,People } from './../../models/models';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})




export class PeopleComponent implements OnInit {
  
  selected = Number('0');
  people : People[];
  people1 : People;
  constructor(private backendApiService: BackendApiService) { }

  ngOnInit() {
    this.backendApiService.getPeople().subscribe(
      (data: People[]) => {
        this.people = data;
      }
      
    );
    this.backendApiService.getPeople().subscribe(
      (data: People[]) => {
        this.people1 = data[this.selected];
        
      } 
    );
  }

}

