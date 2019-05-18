import { Component, OnInit, ViewChild } from '@angular/core';
import { photo } from './photo.model';

import {HttpserviceService} from './httpservice.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-test';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  dataSource = new photoDataSource(this.httpservice);
  
  displayedColumns: string[] = ['albumId','id','title','url','thumbnailUrl'];
  
  constructor(private httpservice:HttpserviceService){}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  // ngOnInit() {
  //   this.httpservice.getphoto().subscribe(
  //     response=>this.handleSuccessfulResponse(response)
  //   // response=>console.log(response)
  //   ),
  //   (console.error());
  //   ;
  // }
  // handleSuccessfulResponse(response)
  // {
  //     this.photo=response;
  //     console.log(this.photo);
  // }
}

export class photoDataSource extends DataSource<any>{
  constructor(private photoservice: HttpserviceService){
    super();
  }

  connect(): Observable<photo[]>{
    return this.photoservice.getphoto();
  }

  disconnect(){
    
  }
}
