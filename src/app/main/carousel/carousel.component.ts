import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit, AfterViewInit {

  filmList: any[]=[];
  film: any = "";
  k: any = 0;
  
  constructor(private ds: DataService, private ar: ActivatedRoute, private rs: RestService) { }
  
  ngAfterViewInit(): void {
    let c = document.getElementById("carouselExampleIndicators") as HTMLElement;
    this.rs.getMovieData().subscribe((response2: any) => {
      this.filmList = response2.films;
      let i = 0;
      this.film = this.filmList [0];
      setInterval(() => {
        i++;
        if (i >= this.filmList.length)
          i = 0;
        this.film = this.filmList [i];
        console.log(this.film["image_hero"]);
        (c.style as any)['background-image'] = 'url('+this.film["image_hero"]+')';
      }, 5000);
    })
  }
  
  ngOnInit(): void {
    //NESSUNA ISTRUZIONE DA ESEGUIRE
  }
}