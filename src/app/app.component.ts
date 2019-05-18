import { Component, OnInit, ViewChild } from '@angular/core';
import { photo } from './photo.model';

import {HttpserviceService} from './httpservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading = true;
  displayedColumns: string[] = ['albumId','id','title','url','thumbnailUrl'];
  photo :photo[];

  dataSource=new MatTableDataSource<photo>();
  // dataSource = new photoDataSource(this.httpservice);
  
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  constructor(private httpservice:HttpserviceService){}

  // ngOnInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
  ngOnInit() {
    this.httpservice.getphoto().subscribe(
      data=>{ this.dataSource.data=data;
      this.isLoading=false;
      }
      // response=>this.handleSuccessfulResponse(response)
    // response=>console.log(response)
    ),
    (console.error());
    ;
    this.dataSource.paginator = this.paginator;
  }
  
}

// export class photoDataSource extends DataSource<any>{
//   constructor(private photoservice: HttpserviceService){
//     super();
//   }

//   connect(): Observable<photo[]>{
//     return this.photoservice.getphoto();
//   }

//   disconnect(){
    
//   }
// }
