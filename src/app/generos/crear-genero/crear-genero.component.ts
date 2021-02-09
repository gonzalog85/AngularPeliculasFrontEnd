import { generoCreacionDTO } from './../genero';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent{

  constructor(private router: Router) { }




  guardarCambios(genero: generoCreacionDTO) {
    // ... guardar los cambios en la base de dato - comunicacion con la web api
    console.log(genero);
    this.router.navigate(['/generos']);
  }

}
