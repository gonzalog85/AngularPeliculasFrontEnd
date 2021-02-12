import { cineCreacionDTO, cineDTO } from './../cine';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  modelo: cineDTO = {nombre: "Candilejas"};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param =>{
      //alert(param.id);
    })
  }

  guardarCambios(cine:cineCreacionDTO){
    console.log(cine);
  }

}
