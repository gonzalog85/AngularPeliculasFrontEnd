import { PeliculaDTO } from './../pelicula';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }

  @Input()
  peliculas: PeliculaDTO[];


  ngOnInit(): void {
  }

  borrar(elementoIndice: number): void {
    this.peliculas.splice(elementoIndice, 1);
  }

}
