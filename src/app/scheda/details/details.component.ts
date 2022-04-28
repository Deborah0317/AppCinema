import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, AfterViewInit {

  filmList: any[]=[];
  id: any;
  timeElapsed: any=Date.now();
  today: Date= new Date(this.timeElapsed);
  l= false;
  s=false;
  film: any = "";

  limit(str: string, limit: any=0): string{
    return str.substring(0, limit);
  }

  day(data: Date){
   let str= "";
   return str = data.getDay()+"."+data.getMonth();
  }

  cast(str: any){
    let v= str;
    let s: any="";
     for(let i=0; i<5;i++){
     s = s+"\n"+v.split(",",1);
    v=v.slice(v.indexOf(",")+2);}
    return s;
  }

  
  constructor(private ds: DataService, private ar: ActivatedRoute, private rs: RestService) { }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(document.getElementById("contenitoreFilm"));
      ((document.getElementById("contenitoreFilm") as HTMLElement).style as any)['background-image'] = 'url('+this.film["image_hero"]+')';
    }, 700);
  }
  ngOnInit(): void {
    this.rs.getMovieData().subscribe((response: any) => {
      this.filmList = response.films;
      this.ar.params.subscribe((response: any)=>{
      this.id= +response['id'];
      for(let film of this.filmList)
      {
        if (film.id == this.id)
        {
          // (document.getElementById("contenitoreFilm") as HTMLElement).style ['background-image'] = 'url()';
          this.film = film;
        }
      }
    })
    });

    
    // this.ar.params.subscribe((response: any)=>{
    //   this.id= +response['id'];
    // })

    

    //this.ds.sharedId.subscribe(id => this.id = id);
   
      //   this.ds.getId().subscribe((response: any) => {
      //   this.id=response;
      // });
     console.log(this.id);
  }

}