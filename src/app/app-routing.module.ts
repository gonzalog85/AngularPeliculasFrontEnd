import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { componentFactoryName } from '@angular/compiler';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'generos', component: IndiceGenerosComponent},
  {path:'generos/crear', component: CrearGeneroComponent},

  {path:'actores', component: IndiceActoresComponent},
  {path:'actores/crear', component: CrearActorComponent},

  {path:'cines', component: IndiceCinesComponent},
  {path:'cines/crear', component: CrearCineComponent},

  {path:'peliculas/crear', component: CrearPeliculaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
