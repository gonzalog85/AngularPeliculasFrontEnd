import { SeguridadService } from './../../seguridad/seguridad.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maxRating = 5;
  @Input()
  ratingSeleccionado = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  ratingAnterior: any;
  maximoRatingArr: any = [];
  calificado = false;

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maxRating).fill(0);
  }

  manejarMouseEnter(index: number): void {
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave() {
    if (this.ratingAnterior !== 0) {
      this.ratingSeleccionado = this.ratingAnterior;
    } else {
      this.ratingSeleccionado = 0;
    }
  }

  rate(index: number): void {

    if (this.seguridadService.estaLogueado()) {
      this.ratingSeleccionado = index + 1;
      this.calificado = true;
      this.ratingAnterior = this.ratingSeleccionado;
      this.rated.emit(this.ratingSeleccionado);
    } else {
      Swal.fire('Debe Loguearse', 'No puede realizar esta accion', 'error');
    }

  }

}
