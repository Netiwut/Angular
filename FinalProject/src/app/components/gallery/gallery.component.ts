import { Component, OnInit, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackendApiService } from './../../services/backend-api.service';
import { Gallery, General } from './../../models/models';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],

})
export class GalleryComponent implements OnInit {
  gallery: Gallery[];
  constructor(private backendApiService: BackendApiService) { }

  ngOnInit() {
    this.backendApiService.getGallery().subscribe(
      (data: Gallery[]) => {
        this.gallery = data;
      }
    );
  }

}

