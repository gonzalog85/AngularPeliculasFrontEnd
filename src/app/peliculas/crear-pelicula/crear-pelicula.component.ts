import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { MultipleSelectorModel } from './../../utilidades/selector-multiple/MultipleSelectorModel';
import { PeliculasService } from './../peliculas.service';
import { Router } from '@angular/router';
import { PeliculaCreacionDTO } from './../pelicula';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor(private router: Router, private peliculasService: PeliculasService) { }

  errores: string[] = [];

  generosNoSeleccionados: MultipleSelectorModel[];
  cinesNoSeleccionados: MultipleSelectorModel[];

  ngOnInit(): void {
    this.peliculasService.postGet().subscribe(resultado => {

      this.generosNoSeleccionados = resultado.generos.map(genero => {
        return <MultipleSelectorModel>{ llave: genero.id, valor: genero.nombre }
      });

      this.cinesNoSeleccionados = resultado.cines.map(cine => {
        return <MultipleSelectorModel>{ llave: cine.id, valor: cine.nombre }
      });

    }, error => console.error(error));
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    this.peliculasService.crear(pelicula)
      .subscribe((id: number) => this.router.navigate(['/pelicula/' + id]),
        error => this.errores = parsearErroresAPI(error));
  }

}
