import { getLocaleId } from '@angular/common';
import { Component, OnInit, ɵNG_ELEMENT_ID } from '@angular/core';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit
{
  filmList: any [] = [];
  timeElapsed: any = Date.now();
  today: Date = new Date(this.timeElapsed);
  s: any = false;
  filmSelected: any;
  dateSelected: any;
  timeSelected: any;
  filmDisabled: any = false;
  dateDisabled: any = false;
  timeDisabled: any = false;
  buttonDisabled: any = false;

  gestioneInput()
  {
    if (!this.filmSelected)
    {
      this.dateDisabled = true;
      this.timeDisabled = true;
      this.buttonDisabled = true;
    }
    else
    {
      this.dateDisabled = false;
      this.timeDisabled = false;
      this.buttonDisabled = false;
    }
  }

  limit(str: string, limit: any=0): string{
      return str.substring(0, limit);
    }

   day(data: Date){
     let str= "";
     return str = data.getDay() + "." + data.getMonth() + "." + data.getFullYear();
}


  constructor(private rs: RestService) { }
  ngOnInit(): void {
    this.dateDisabled = true;
    this.timeDisabled = true;
    this.buttonDisabled = true;
    this.rs.getMovieData().subscribe((response: any) => {
      this.filmList = response.films;
    });
    console.log(this.filmList);
  }
}