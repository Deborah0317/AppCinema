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
  constructor() { }
  ngOnInit(): void {
    console.log(this.filmList);
  }

}
