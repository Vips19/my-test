import { Component, OnInit } from '@angular/core';
import { photo } from './photo.model';

import {HttpserviceService} from './httpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-test';
  photo: photo[];
  constructor(private httpservice:HttpserviceService){}
  ngOnInit() {
    this.httpservice.getphoto().subscribe(
      response=>this.handleSuccessfulResponse(response)
    // response=>console.log(response)
    ),
    (console.error());
    ;
  }
  handleSuccessfulResponse(response)
  {
      this.photo=response;
  }
}
