import { AfterViewInit, Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from 'src/app/data.service';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, AfterViewInit {
  [x: string]: any;

  filmList: any[]=[];
  id: any;
  timeElapsed: any=Date.now();
  today: Date= new Date(this.timeElapsed);
  l= false;
  s=false;
  film: any = "";
  selectedTrailer: string = "";
  array: any[]=[];
  p: any[] = [];
  count: any=0;

  limit(str: string, limit: any=0): string{
    return str.substring(0, limit);
  }

  day(data: Date){
   let str= "";
   return str = data.getDay()+"."+data.getMonth();
  }

  cast(str: any){
    let v= str;
     for(let i=0; i<20;i++){
     this.p[i]= v.split(",",1);
    v=v.slice(v.indexOf(",")+2);}
    return this.p;
  }

  check(str: any){
    let v=str;
    for(let i=0;i<10;i++){
    if(v.includes(",")){
      this.count++;
      v=v.slice(v.indexOf(",")+2);}}
  }

  modalRef?: BsModalRef;
  
  constructor(private ds: DataService, private ar: ActivatedRoute, private rs: RestService, private modalService: BsModalService) { }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(document.getElementById("contenitoreFilm"));
      ((document.getElementById("contenitoreFilm") as HTMLElement).style as any)['background-image'] = 'url('+this.film["image_hero"]+')';
    }, 1300);
    console.log(this.m);
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

      for(let i=0;i<20;i++){
        this.array[i]=i;
      }

      this.cast(this.film.info_cast);

      this.check(this.film.info_cast);
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

  openModal(template: TemplateRef<any>, film: any) {
    this.selectedTrailer = film.video;
    this.modalRef = this.modalService.show(template);
  }

}