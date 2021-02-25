import { MultipleSelectorModel } from './../../utilidades/selector-multiple/MultipleSelectorModel';
import { PeliculasService } from './../peliculas.service';
import { PeliculaDTO, PeliculaCreacionDTO } from './../pelicula';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { actorPeliculaDTO } from 'src/app/actores/actor';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private peliculasService: PeliculasService) { }

  modelo: PeliculaDTO;
  generosNoSeleccionados: MultipleSelectorModel[];
  generosSeleccionados: MultipleSelectorModel[];
  cinesNoSeleccionados: MultipleSelectorModel[];
  cinesSeleccionados: MultipleSelectorModel[];
  actoresSeleccionados: actorPeliculaDTO[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
          this.peliculasService.putGet(params.id).subscribe(peliculaPutGet => {
            this.modelo = peliculaPutGet.pelicula;

            this.generosNoSeleccionados = peliculaPutGet.generosNoSeleccionados.map(genero => {
              return <MultipleSelectorModel> {llave: genero.id, valor: genero.nombre}
            });

            this.generosSeleccionados = peliculaPutGet.generosSeleccionados.map(genero => {
              return <MultipleSelectorModel> {llave: genero.id, valor: genero.nombre}
            });

            this.cinesNoSeleccionados = peliculaPutGet.cinesNoSeleccionados.map(cine => {
              return <MultipleSelectorModel> {llave: cine.id, valor: cine.nombre}
            });

            this.cinesSeleccionados = peliculaPutGet.cinesSeleccionados.map(cine => {
              return <MultipleSelectorModel> {llave: cine.id, valor: cine.nombre}
            });

            this.actoresSeleccionados = peliculaPutGet.actores;
          });
    });
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    this.peliculasService.editar(this.modelo.id, pelicula)
    .subscribe(() => this.router.navigate(['/pelicula/' + this.modelo.id]));
  }

}
