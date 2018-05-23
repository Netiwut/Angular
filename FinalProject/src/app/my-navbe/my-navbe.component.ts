import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { BackendApiService } from '../services/backend-api.service';
import { General, Postit, Gallery, People } from '../models/models';
import { isNgTemplate } from '@angular/compiler';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-navbe',
  templateUrl: './my-navbe.component.html',
  styleUrls: ['./my-navbe.component.css']
})
export class MyNavbeComponent implements OnInit  {
  general:    General[];
  postit:     Postit[];
  gallery:    Gallery[];
  people:     People[];
  data:       object = [];
  gen:        General[];
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver, private backendApiService: BackendApiService) {}
  ngOnInit() {
    this.backendApiService.getGallery().subscribe(
      (data:  Gallery[]) => {
        this.gallery = data;
      });
    this.backendApiService.getGenaral().subscribe(
      (data:  General[]) => {
        this.general = data;
        this.data = data ;
      });
    this.backendApiService.getPeople().subscribe(
      (data:  People[]) => {
        this.people = data;
      });
    this.backendApiService.getPostit().subscribe(
      (data:  Postit[]) => {
        this.postit = data;
      });
  }
  getData() {
  }
  clearAll() {
    if (confirm('GetData')) {
      console.log(this.general);
      console.log(this.data);
    }
  }
}
