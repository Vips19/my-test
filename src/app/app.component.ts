import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { photo } from './photo.model';

import {HttpserviceService} from './httpservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  isLoading = true;
  displayedColumns: string[] = ['AlbumId','Id','Title','Url','ThumbnailUrl'];
  photo :photo[];
  
  dataSource=new MatTableDataSource<photo>();
  // dataSource = new photoDataSource(this.httpservice);
  
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  
  constructor(private httpservice:HttpserviceService){}

 
  ngOnInit() {
    this.httpservice.getphoto().pipe(
      finalize(()=>  (this.isLoading=false))
    )
    .subscribe(
      data=>{ this.dataSource.data=data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      // response=>this.handleSuccessfulResponse(response)
    // response=>console.log(response)
    ),
    (console.error());
    
  }
  ngAfterViewInit() {
    
    
   
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
