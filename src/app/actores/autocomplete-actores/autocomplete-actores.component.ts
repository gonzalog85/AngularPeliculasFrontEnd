import { ActoresService } from './../actores.service';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { actorPeliculaDTO } from '../actor';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor(private actoresService: ActoresService) { }

  control: FormControl = new FormControl();

  @Input()
  actoresSeleccionados: actorPeliculaDTO[] = [];

  actoresAMostrar: actorPeliculaDTO[] = [];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(nombre => {
      if(typeof nombre === 'string' && nombre){
        this.actoresService.obtenerPorNombre(nombre).subscribe(actores => {
          this.actoresAMostrar = actores;
          //console.log('actores: ' + actores)
        }, error => console.error(error));
      }
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if(this.table !== undefined){
      this.table.renderRows();
    }

    /*
   const index = this.actoresSeleccionados.findIndex((x: { id: any; }) => x.id === event.option.value.id);
   if (index === -1){
     this.actoresSeleccionados.push(event.option.value);
     if (this.table !== undefined){
       this.table.renderRows();
     }
   }
   this.control.patchValue('');
   */
  }

  eliminar(actor:any){
    const indice = this.actoresSeleccionados.findIndex((a:any) => a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

  finalizaArrastre(event: CdkDragDrop<any[]>) {
    const indicePrevio = this.actoresSeleccionados.findIndex((actor: any) => actor === event.item.data);
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();
  }

}
