import { Component, OnInit, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],

})
export class GalleryComponent implements OnInit {
  pics = [
    {url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Mango_and_cross_section_edit.jpg',albumname: "มะม่วง" },
    {url: 'http://i.dailymail.co.uk/i/newpix/2018/03/08/11/49FF748700000578-5476901-image-a-27_1520507605152.jpg',albumname: "สัปปะรด"},
    {url: 'https://www.well-beingsecrets.com/wp-content/uploads/Helps-Treat-Duchenne-Muscular-Dystrophy.jpg',albumname: "แตงโม"},
    {url: 'http://blends.co.in/wp-content/uploads/2015/09/Watermelon.jpg',albumname: "มะม่วง" },
    {url: 'https://ae01.alicdn.com/kf/HTB1lEMlLpXXXXbcXVXXq6xXFXXX4/Rare-Purple-Flesh-Watermelon-Seeds-Super-Big-Water-Melon-Seeds-for-Home-Garden-10pcs-lot.jpg_640x640.jpg',albumname: "แตงโม"},
    {url: 'https://img.taste.com.au/VLvRnSwj/taste/2016/11/watermelon-whale-72575-1.jpeg',albumname: "สัปปะรด"},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Mango_and_cross_section_edit.jpg',albumname: "มะม่วง" },
    {url: 'http://i.dailymail.co.uk/i/newpix/2018/03/08/11/49FF748700000578-5476901-image-a-27_1520507605152.jpg',albumname: "สัปปะรด"},
    {url: 'https://www.well-beingsecrets.com/wp-content/uploads/Helps-Treat-Duchenne-Muscular-Dystrophy.jpg',albumname: "แตงโม"},
    {url: 'http://blends.co.in/wp-content/uploads/2015/09/Watermelon.jpg',albumname: "มะม่วง" },
    {url: 'https://ae01.alicdn.com/kf/HTB1lEMlLpXXXXbcXVXXq6xXFXXX4/Rare-Purple-Flesh-Watermelon-Seeds-Super-Big-Water-Melon-Seeds-for-Home-Garden-10pcs-lot.jpg_640x640.jpg',albumname: "แตงโม"},
    {url: 'https://img.taste.com.au/VLvRnSwj/taste/2016/11/watermelon-whale-72575-1.jpeg',albumname: "สัปปะรด"}
  ];


  constructor() { }

  ngOnInit() {
  }

}

