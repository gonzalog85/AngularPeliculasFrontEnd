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

  modelo: PeliculaDTO;

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
