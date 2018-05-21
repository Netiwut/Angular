import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';
import { General } from '../../models/models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  general:    General[];
  constructor(private backengService: BackendApiService) { }

  ngOnInit() {
    this.backengService
        .getGenaral()
        .subscribe((data: General[]) => {
          this.general = data;
          console.log(data);
        });
  }

}
