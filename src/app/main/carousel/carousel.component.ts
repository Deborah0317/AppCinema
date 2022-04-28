import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  filmList: any [] = [];
  num: number = 0;
  // selectedPosterToShow
  
  constructor(private rs: RestService) { }


  ngOnInit(): void {
    this.rs.getMovieData().subscribe((response: any) => {
      this.filmList = response.films;
    });

    setTimeout(() => {
	    this.num + 1;
    }, 5000);

    console.log(this.filmList);
  }
}
