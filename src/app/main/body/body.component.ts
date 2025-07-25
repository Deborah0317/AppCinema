import { Component,OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { DataService } from 'src/app/data.service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  filmList:any[]=[];
  timeElapsed: any=Date.now();
  today: Date= new Date(this.timeElapsed);
  s: any = false;
  t: any = false;
  id: any=3;
  user: any;
  num: any;
  selectedTrailer: string = "";
  
   limit(str: string, limit: any=0): string{
      return str.substring(0, limit);
    }

   day(data: Date){
     let str= "";
     return str = data.getDay()+"."+data.getMonth();
  }

    //  sendId(){
    //    return of(this.id);
    //  }

               //importo il servizio
               modalRef?: BsModalRef;

  constructor(private rs : RestService, private ds: DataService, private modalService: BsModalService, private ar: ActivatedRoute) { }
  ngOnInit(): void {
    // this.ds.sharedId.subscribe(id => this.id = id);
   
    /* toPromise
    //metodo nel RestService                   any come oggetto
    this.rs.getMovieData().toPromise().then((response:any) =>{
      this.filmList = response.films;
    });*/

    //proviamo l'observable
    this.rs.getMovieData().subscribe((response: any) => {
      this.filmList = response.films;
    });
    this.ar.params.subscribe((response: any)=>{
      this.user= +response['user'];
      this.num= +response['num'];
    })
    console.log(this.filmList);
  }

  openModal(template: TemplateRef<any>, film: any) {
    this.selectedTrailer = film.video;
    this.modalRef = this.modalService.show(template);
  }

  // newId(){
  //   this.ds.nextId(5);
  // }

}