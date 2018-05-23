import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { BackendApiService } from '../services/backend-api.service';
import { General, Postit, Gallery, People } from '../models/models';
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
  showData:   object = [];
  gen:        General[];
  i:          number;
  state:      boolean;
  state2:     boolean;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(
    private breakpointObserver: BreakpointObserver,
    private backendApiService: BackendApiService
  ) {}
  ngOnInit() {
    this.state = true;
    this.state2 = false;
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
  saveAll() {
    if (confirm('บันทึกการเปลี่ยนแปลง')) {
      this.backendApiService.editGeneral(this.data).subscribe(data => {});
    }
  }
  showEdit(index) {
    this.backendApiService.getPostit().subscribe(
      (data:  Postit[]) => {
        this.showData = data[index];
        this.i = index ;
      });
      this.state = false;
      this.state2 = true;
  }
  savePost() {
    if (confirm('บันทึก')) {
      this.backendApiService.editPost(this.i, this.showData).subscribe(data => {
        this.backendApiService.getPostit().subscribe(
          (datas:  Postit[]) => {
            this.postit = datas;
          });
      });
    }
  }
  newPost() {
    if (confirm('บันทึก')) {
      this.backendApiService.newPost(this.showData).subscribe(data => {
        this.backendApiService.getPostit().subscribe(
          (datas:  Postit[]) => {
            this.postit = datas;
          });
      });
    }
  }
  delete(index) {
    if (confirm('ลบโพส')) {
      this.backendApiService.deletePost(index).subscribe(data => {
        this.backendApiService.getPostit().subscribe(
          (datas:  Postit[]) => {
            this.postit = datas;
          });
      });
    }
  }
  reset() {
    this.state = true;
    this.state2 = false;
  }
}
