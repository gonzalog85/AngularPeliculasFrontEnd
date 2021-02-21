import { Coordenada } from './../../utilidades/mapa/coordenada';
import { cineCreacionDTO, cineDTO } from './../cine';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-cines',
  templateUrl: './formulario-cines.component.html',
  styleUrls: ['./formulario-cines.component.css']
})
export class FormularioCinesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo: cineCreacionDTO;

  @Input()
  errores: string[] = [];

  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  coordenadaInicial: Coordenada[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required],
      }],
      latitud: ['', {
        validators: [Validators.required]
      }],
      longitud: ['', {
        validators: [Validators.required]
      }],
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
      this.coordenadaInicial.push({latitud: this.modelo.latitud, longitud: this.modelo.longitud});
    }
  }

  coordenadaSeleccionada(coordenada: Coordenada) {
    this.form.patchValue(coordenada);
  }

  OnSubmit() {
    this.guardarCambios.emit(this.form.value);
  }

}
