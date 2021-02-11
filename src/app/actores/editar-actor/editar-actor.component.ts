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

  modelo: actorDTO = { nombre: 'Gonzalo', fechaNacimiento: new Date(), foto:'https://m.media-amazon.com/images/M/MV5BMTczMjUwNDUzMF5BMl5BanBnXkFtZTgwNDA4OTAzMTE@._V1_UX214_CR0,0,214,317_AL_.jpg' }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      //alert(param.id);
    })
  }

  guardarCambios(actor: actorCreacionDTO) {
    //.. Logica guardar en base de datos
    console.log(actor);
    this.router.navigate(['/actores']);

  }

}
