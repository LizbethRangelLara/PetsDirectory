import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { GallaryComponent } from './gallary/gallary.component';


const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'gallary', component: GallaryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
