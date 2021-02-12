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

  form!: FormGroup;

  @Input()
  modelo!: cineCreacionDTO;

  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:['', {
        Validators: [Validators.required],
      }]
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value);
  }

}
