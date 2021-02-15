import { MultipleSelectorModel } from './../../utilidades/selector-multiple/MultipleSelectorModel';
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

  generosNoSeleccionados: MultipleSelectorModel[] = [
    {llave:1, valor:'Drama'},
    {llave:2, valor:'Accion'},
    {llave:3, valor:'Comedia'}
  ];

  generosSeleccionados: MultipleSelectorModel[] = [];

  cinesNoSeleccionados: MultipleSelectorModel[] = [
    {llave:1, valor:'Sunstar'},
    {llave:2, valor:'Atlas'},
    {llave:3, valor:'Candilejas'}
  ];

  cinesSeleccionados: MultipleSelectorModel[] = [];


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', {
        validators: [Validators.required]
      }],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId:'',
      cinesId:''
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
    //console.log(this.generosSeleccionados);
    const generosIds = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosId')?.setValue(generosIds);

    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesId')?.setValue(cinesIds);

    this.onSubmit.emit(this.form.value);
  }

}
