import { Component, OnInit, Input } from '@angular/core';
import { BackendApiService } from './../../../services/backend-api.service';
import { Gallery, General } from './../../../models/models';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-photo-all',
  templateUrl: './photo-all.component.html',
  styleUrls: ['./photo-all.component.css']
})
export class PhotoAllComponent implements OnInit {

  id: any;
  gallery: Gallery;
  constructor(private backendApiService: BackendApiService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.id = params['id'] );
  }
  ngOnInit() {
    this.backendApiService.getGallery().subscribe(
      (data: Gallery[]) => {
        this.gallery = data[this.id];
        console.log(data[this.id]);
        // this.length = this.gallery.length;
      }
    );
  }
}
