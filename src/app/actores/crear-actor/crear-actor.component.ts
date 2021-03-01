import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { ActoresService } from './../actores.service';
import { actorCreacionDTO } from './../actor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

  constructor(private router: Router, private actoresService: ActoresService) { }

  errores = [];

  ngOnInit(): void {
  }

  guardarCambios(actor: actorCreacionDTO) {
    this.actoresService.crear(actor).subscribe(() => {
      this.router.navigate(['/actores']);
    }, error => this.errores = parsearErroresAPI(error));
  }

}
