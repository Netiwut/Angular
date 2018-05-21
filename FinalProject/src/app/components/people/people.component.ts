import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})




export class PeopleComponent implements OnInit {


  group = [
    {value: '0', viewValue: 'list1'},
    {value: '1', viewValue: 'list2'},
    {value: '2', viewValue: 'list3'}
  ];

  

  constructor() { }

  ngOnInit() {
  }

}
