import { cineCreacionDTO, cineDTO } from './../cine';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CinesService } from '../cines.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private cinesService: CinesService) { }

  modelo: cineDTO;
  errores: string[]=[];

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params =>{
     //alert(params.id);
     this.cinesService.obtenerPorId(params.id).subscribe(cine => {
       this.modelo = cine;
     }, () => this.router.navigate(['/cines']))
   });
  }

  guardarCambios(cine: cineCreacionDTO) {
    // ... guardar los cambios en la base de dato - comunicacion con la web api
    // console.log(genero);
    this.cinesService.editar(this.modelo.id, cine).subscribe(() => {
      this.router.navigate(['/cines']);
    }, error => this.errores = parsearErroresAPI(error))
  }

}
