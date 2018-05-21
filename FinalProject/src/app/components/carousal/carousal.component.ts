import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {
  @Input() images: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
