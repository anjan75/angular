import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { JsonserviceService } from '../jsonservice.service';
import { IndiacitiesService } from '../indiacities.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  a:string;
  b:string;
  c:string;
  d:boolean;

  contact(x){
    this.a=x.fname;
    this.b=x.lname;
    this.c=x.gender;
    this.d=x.check;


  //   alert("haii");
  //  return false;
 
 }
 twobind:any;
 records:object=[];
 record:object=[];
  constructor(public y:JsonserviceService, public yy:IndiacitiesService ) {
   
    this.records=this.y.getdata1();
    //alert(this.records)
    this.yy.datacity().subscribe(z=>{
      this.record=z;
     // alert(this.record)
    })
    
   }

  reactiveform:FormGroup;
  ngOnInit() {
    this.reactiveform= new FormGroup({
      "uname": new FormControl("null",Validators.required)



    })
   
  }

  uu:any;

fun1(){

  this.uu=this.reactiveform.get("uname").value;
 alert(this.uu);
}




}
