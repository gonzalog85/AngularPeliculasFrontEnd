import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private location: Location,
    private activatedRoute: ActivatedRoute) { }

  form!: FormGroup;

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Accion' },
    { id: 3, nombre: 'Comedia' }
  ];

  peliculas = [
    { titulo: 'Spiderman: Far from Home', enCines: false, proximosEstrenos: true, generos: [1, 2], poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg' },
    { titulo: 'Home alone', enCines: true, proximosEstrenos: false, generos: [3], poster: 'https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg' },
    { titulo: 'Inception', enCines: false, proximosEstrenos: false, generos: [1, 3], poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg' }
  ];

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges.subscribe(valores => {
      //console.log(valores);
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      this.escribirParametrosBusquedaEnURL();
    });
  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params) => {
      var objeto:any = {};

      if(params.titulo){
        objeto.titulo = params.titulo;
      }

      if(params.generoId){
        objeto.generoId = Number(params.generoId);
      }

      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }

      if(params.enCines){
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto);
   });
  }

  private escribirParametrosBusquedaEnURL() {
    var queryStrings = [];
    var valoresFormulario = this.form.value;

    var titulo=valoresFormulario.titulo;
    var generoId=valoresFormulario.generoId;
    var proximosEstrenos = valoresFormulario.proximosEstrenos;
    var enCines = valoresFormulario.enCines;

    if (valoresFormulario.titulo) {
      queryStrings.push('titulo=' + titulo);
    }

    if (valoresFormulario.generoId != '0') {
      queryStrings.push('generoId=' + generoId);
    }

    if (valoresFormulario.proximosEstrenos) {
      queryStrings.push('proximosEstrenos=' + proximosEstrenos);
    }

    if (valoresFormulario.enCines) {
      queryStrings.push('enCines=' + enCines);
    }

    this.location.replaceState('/peliculas/buscar', queryStrings.join('&'));
  }

  buscarPeliculas(valores: any) {

    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.toLowerCase().indexOf(valores.titulo.toLowerCase()) !== -1);
    }

    if (valores.generoId != '0') {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }

    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }

    if (valores.enCines) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  limpiar() {
    this.form.patchValue(this.formularioOriginal);
  }

}
