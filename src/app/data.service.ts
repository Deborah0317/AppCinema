import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private id = new BehaviorSubject(0);
  sharedId= this.id.asObservable();

  constructor() { }

  nextId(id: any){
    this.id.next(id);
  }

  // getId(){
  //   let id: any=5;
  //   return id;
  //   }
  }
  
  // getId(){
  //   return this.bc.sendId().subscribe((response: any)=>{
  //     let id=response;
  //   });
  // }}
  
