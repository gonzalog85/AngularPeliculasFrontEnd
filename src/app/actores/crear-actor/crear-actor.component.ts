import { actorCreacionDTO } from './../actor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  guardarCambios(actor: actorCreacionDTO){
    // ... Guardar cambios en base de datos
    console.log(actor);
    this.router.navigate(['/actores']);
  }

}
