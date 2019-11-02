import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class IndiacitiesService {

  constructor(public x:HttpClient) { }
    datacity(){
      return this.x.get("https://indian-cities-api-nocbegfhqg.now.sh/cities");
    }


}
