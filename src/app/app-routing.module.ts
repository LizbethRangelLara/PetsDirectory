import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'gallary', component: GallaryComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
