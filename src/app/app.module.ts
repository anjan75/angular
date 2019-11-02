import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EducationComponent } from './education/education.component';
import { ExeperienceComponent } from './exeperience/exeperience.component';
// import { HeaderComponent } from './header/header.component';

import { CarousalComponent } from './carousal/carousal.component';
import { CardsectionComponent } from './cardsection/cardsection.component';
import { FooterComponent } from './footer/footer.component';
import { GosomewhereComponent } from './gosomewhere/gosomewhere.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReactiveFormsModule } from '@angular/forms';


import{JsonserviceService} from "./jsonservice.service"
import { IndiacitiesService } from './indiacities.service';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';



//import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    EducationComponent,
    ExeperienceComponent,
    HeaderComponent,
    CarousalComponent,
    CardsectionComponent,
    FooterComponent,
    GosomewhereComponent,
    ContactComponent,
    GalleryComponent,
     
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,  
    
  ],
  providers: [JsonserviceService,IndiacitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
