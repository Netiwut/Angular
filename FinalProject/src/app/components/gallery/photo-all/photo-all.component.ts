import { Component, OnInit, Input } from '@angular/core';
import { BackendApiService } from './../../../services/backend-api.service';
import { Gallery, General } from './../../../models/models';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photo-all',
  templateUrl: './photo-all.component.html',
  styleUrls: ['./photo-all.component.css'],
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class PhotoAllComponent implements OnInit {
  id: any;
  gallery: Gallery;
  closeResult: string;
  constructor(private backendApiService: BackendApiService, private route: ActivatedRoute, private modalService: NgbModal) {
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
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
