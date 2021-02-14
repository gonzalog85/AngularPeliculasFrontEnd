import { PeliculaDTO, PeliculaCreacionDTO } from './../pelicula';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  modelo: PeliculaDTO = { titulo: 'Spiderman 3', trailer: 'abc', enCines: true, resumen: 'cosa', fechaLanzamiento: new Date(), poster: 'https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg' }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      //alert(param.id);
    })
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula);
    this.router.navigate(['/']);
  }

}
