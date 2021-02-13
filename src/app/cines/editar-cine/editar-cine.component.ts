import { cineCreacionDTO, cineDTO } from './../cine';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  modelo: cineDTO = { nombre: "Sunstar", latitud: -26.821661154240147, longitud: -65.26774764060976 };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      //alert(param.id);
    })
  }

  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine);
    this.router.navigate(['/cines']);
  }

}
