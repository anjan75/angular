import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {

  constructor() { }
  
    getdata1(){
      return [{"id":"1", "Name":"anjan"},
              {"id":"2", "Name":"siva"}]


    }
  }
