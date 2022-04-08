import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  filmList:any[]=[];
  timeElapsed: any=Date.now();
  today: Date= new Date(this.timeElapsed);

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
    })

    console.log(this.filmList);
  }

}
