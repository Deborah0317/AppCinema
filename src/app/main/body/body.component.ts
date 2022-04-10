import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  filmList:any[]=[];
  i: any=0;
  timeElapsed: any=Date.now();
  today: Date= new Date(this.timeElapsed);
  t: any = 0;
   

   limit(str='', limit=0){
      return str.substring(0, limit);
    }

   /*getMonthFromString(mon: any){
      return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
   }*/

   day(data: Date){
     let str= "";
     return str = data.getDay()+"."+data.getMonth();
  }

               //importo il servizio
  constructor(private rs : RestService) { }
  ngOnInit(): void {
    /* toPromise
    //metodo nel RestService                   any come oggetto
    this.rs.getMovieData().toPromise().then((response:any) =>{
      this.filmList = response.films;
    });*/

    //proviamo l'observable
    this.rs.getMovieData().subscribe((response: any) => {
      this.filmList = response.films;
    });
    console.log(this.filmList);
  }

}
