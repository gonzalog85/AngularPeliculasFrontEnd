import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { error } from 'protractor';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }

  imagenBase64!: string;

  @Input()
  ulrImagenActual!: any;

  @Output()
  archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();

  ngOnInit(): void {
  }

  change(event:any){
    if(event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then((value:any) => this.imagenBase64 = value)
      .catch(error => console.log(error));
      this.archivoSeleccionado.emit(file);
    }
  }

}
