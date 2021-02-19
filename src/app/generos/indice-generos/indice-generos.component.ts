import { GenerosService } from './../generos.service';
import { Component, OnInit } from '@angular/core';
import { generoDTO } from '../genero';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  constructor(private generosService: GenerosService) { }

  generos: generoDTO[];

  columnasAMostrar = ['id', 'nombre', 'acciones'];

  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar: number) {
    this.generosService.obtenerTodos(pagina, cantidadElementosAMostrar)
      .subscribe((respuesta: HttpResponse<generoDTO[]>) => {
        this.generos = respuesta.body;
        // console.log(respuesta.headers.get('cantidadTotalRegistros'));
        this.cantidadTotalRegistros = respuesta.headers.get('cantidadTotalRegistros');
      }, error => console.error(error));
  }

  actualizarPaginacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

}
