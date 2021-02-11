import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

  modelo: actorCreacionDTO = { nombre: 'Gonzalo', fechaNacimiento: new Date() }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      //alert(param.id);
    })
  }

  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
    this.router.navigate(['/actores']);

  }

}
