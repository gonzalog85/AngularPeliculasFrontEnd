import { cineCreacionDTO } from './../cine';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent{

  errores: string[] = [];

  constructor(private router: Router, private cinesService: CinesService) { }


  guardarCambios(cine: cineCreacionDTO) {
    // ... guardar los cambios en la base de dato - comunicacion con la web api
    //console.log(genero);
    this.cinesService.crear(cine).subscribe(() => {
      //no retorna nada
      this.router.navigate(['/cines']);
    }, error => this.errores = parsearErroresAPI(error));
  }

}
