import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlantasComponent } from './pages/plantas/plantas.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'plantas', component: PlantasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
