import { generoCreacionDTO } from './../genero';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  modelo: generoCreacionDTO = {nombre:'Drama'};

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(param =>{
     //alert(param.id);
   })
  }

  guardarCambios(genero: generoCreacionDTO) {
    // ... guardar los cambios en la base de dato - comunicacion con la web api
    console.log(genero);
    this.router.navigate(['/generos']);
  }

}
