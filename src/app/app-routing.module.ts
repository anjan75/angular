import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EducationComponent } from './education/education.component';
import { ExeperienceComponent } from './exeperience/exeperience.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GosomewhereComponent } from './gosomewhere/gosomewhere.component';


const routes: Routes = [
  {path:"", component: AboutmeComponent},
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutmeComponent},
  {path:"edu", component: EducationComponent},
  {path:"exep", component: ExeperienceComponent},
  {path:"contactpage", component: ContactComponent},
  {path:"gallery", component: GalleryComponent},
  {path:"about/gosome", component: GosomewhereComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
