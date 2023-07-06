import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profesionales', component: ProfesionalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
