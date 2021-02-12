import { cineCreacionDTO } from './../cine';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  guardarCambios(cine:cineCreacionDTO){
    //logica guardar cambios en base de datos
    console.log(cine);
    this.router.navigate(['/cines']);
  }

}
