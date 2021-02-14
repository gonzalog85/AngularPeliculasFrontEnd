import { Router } from '@angular/router';
import { PeliculaCreacionDTO } from './../pelicula';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  guardarCambios(pelicula: PeliculaCreacionDTO){
    //logica guardar en base de datos
    console.log(pelicula);
    this.router.navigate(['/']);
  }

}
