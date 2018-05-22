import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import { BackendApiService } from './../../services/backend-api.service';
import { Postit } from './../../models/models'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  postit : Postit[];
  displayedColumns = ['id', 'timestamp', 'name', 'detail'];
  ELEMENT_DATA: Postit[] = this.postit;

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  constructor(private backengSevice : BackendApiService)  {  }
    
  ngOnInit() {
    this.backengSevice.getPostit().subscribe(
      (data:Postit[] )=> {
        this.postit=data;
        console.log(data);
        
      }
    )
  }


}






/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */