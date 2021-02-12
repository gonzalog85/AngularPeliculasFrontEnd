import { actorCreacionDTO, actorDTO } from './../actor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form!: FormGroup;

  @Input()
  modelo!: actorDTO;

  @Output()
  onSubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:['', {
        validators: [Validators.required]
      }],
      fechaNacimiento:'',
      foto:'',
      biografia:''
    });
    if(this.modelo != undefined){
      this.form.patchValue(this.modelo)
    }
  }

  archivoSeleccionado(file:any){
    this.form.get('foto')?.setValue(file);
  }

  cambioMarkdown(texto:string){
    this.form.get('biografia')?.setValue(texto);
  }

  OnSubmit(){
    this.onSubmit.emit(this.form.value);
  }
}
