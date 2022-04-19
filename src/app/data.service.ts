import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BodyComponent } from './main/body/body.component';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // private id = new BehaviorSubject(0);
  // sharedId= this.id.asObservable();
  id: any;

  constructor() { }

  // nextId(id: any){
  //   this.id.next(id);
  // }

  //  getId(){
  //    this.bc.sendId().subscribe((response: any)=>{
  //     this.id=response;
  //    });
  //    return of(this.id);
  //    }
  // }
  
  // getId(){
  //   return this.bc.sendId().subscribe((response: any)=>{
  //     let id=response;
  //   });
  // }
}
  
