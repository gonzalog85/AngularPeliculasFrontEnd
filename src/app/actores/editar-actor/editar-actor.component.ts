import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }


  modelo: actorDTO = { nombre: 'Gonzalo', fechaNacimiento: new Date(), foto:'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg' }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
    })
  }

  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
    this.router.navigate(['/actores']);

  }

}
