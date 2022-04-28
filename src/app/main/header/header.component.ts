import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
modalRef?: BsModalRef;

user: any;
num: any;
un=false;
check = false;
email: any;
pass: any;
Data = [{"email": "deborahmaldonato17@gmail.com", "pass":"Pass1"},{"email":"pettinatos23@gmail.com", "pass":"Pass2"}];

  constructor(private modalService: BsModalService, private ar: ActivatedRoute) {
   }

   checkData(){
     let e=false;
     let p=false;
       for(let i=0; i<this.Data.length; i++){
           if(this.email.toLowerCase()==this.Data[i]['email']){ e = true;}
           if(this.pass==this.Data[i]['pass']){ p = true; this.num= i;} }
           if(p==true&&e==true){
             this.check= true; this.un=false; this.user=true;
           }else{ this.check=false; this.un=true; this.num= undefined;}
   }

  ngOnInit(): void {
   this.ar.params.subscribe((response: any)=>{
     this.user= +response['user'];
   })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
