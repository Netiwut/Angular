import { Component, OnInit } from '@angular/core';
import { ModelsService} from '../../services/models.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private name:   string;
  private age:    number;
  private email:  string;
  private addres: {
    city: string,
    ncode: string
  };
  private skills: string[];
  private list: User[];
  constructor(private modelsService: ModelsService) {
  }

  ngOnInit() {
    this.name = 'Taker';
    this.age = 21;
    this.email = 'takter@g.com';
    this.addres = {
      city: 'sisaker',
      ncode: '123456'
    };
    this.skills = ['Programming', 'Design', 'Logic'];

    // callService
    this.modelsService.getJSON().subscribe(
      data => {
        this.list = data ;
      }
    );

  }
}
interface User {
  _id: string;
  username: string;
  password: string;
  __v: number;
}
