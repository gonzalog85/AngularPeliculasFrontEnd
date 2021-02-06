import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  pelicula ={
  nombre:'spiderman',
  fechaDeLanzamiento: new Date()
  };

  duplicarValor(valor: number): number{
    return valor *2;
  }
}
