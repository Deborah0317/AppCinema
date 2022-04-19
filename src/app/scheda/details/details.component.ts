import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: any;
  timeElapsed: any=Date.now();
  today: Date= new Date(this.timeElapsed);

  limit(str: string, limit: any=0): string{
    return str.substring(0, limit);
  }

  day(data: Date){
   let str= "";
   return str = data.getDay()+"."+data.getMonth();
  }

  constructor(private ds: DataService) { }
  ngOnInit(): void {
   
    this.ds.sharedId.subscribe(id => this.id = id);
   
    //    this.ds.getId().subscribe((response: any) => {
    //    this.id=response;
    //  });
     console.log(this.id);
  }

}
