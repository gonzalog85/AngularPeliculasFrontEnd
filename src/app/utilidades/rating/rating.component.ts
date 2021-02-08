import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


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
  rated:EventEmitter<number> = new EventEmitter<number>();
  ratingAnterior:any;
  maximoRatingArr:any = [];
  calificado=false;

  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maxRating).fill(0);
  }

  manejarMouseEnter(index:number):void{
  this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave(){
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else{
      this.ratingSeleccionado = 0;
    }
  }

  rate(index:number):void{
  this.ratingSeleccionado = index + 1;
  this.calificado=true;
  this.ratingAnterior = this.ratingSeleccionado;
  this.rated.emit(this.ratingSeleccionado);
  }

}