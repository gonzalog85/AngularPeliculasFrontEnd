import { GenerosService } from './../generos.service';
import { generoCreacionDTO } from './../genero';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {

  errores: string[] = [];

  constructor(private router: Router, private generosService: GenerosService) { }


  guardarCambios(genero: generoCreacionDTO) {
    // ... guardar los cambios en la base de dato - comunicacion con la web api
    //console.log(genero);
    this.generosService.crear(genero).subscribe(() => {
      //no retorna nada
      this.router.navigate(['/generos']);
    }, error => this.errores = parsearErroresAPI(error));
  }

}
