import { PeliculaCreacionDTO, PeliculaDTO } from './../pelicula';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  @Input()
  modelo!: PeliculaDTO;

  @Output()
  onSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', {
        validators: [Validators.required]
      }],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: ''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(archivo: File) {
    this.form.get('poster')?.setValue(archivo);
  }

  changeMarkdown(texto: string) {
    this.form.get('resumen')?.setValue(texto);
  }

  guardarCambios() {
    this.onSubmit.emit(this.form.value);
  }

}
