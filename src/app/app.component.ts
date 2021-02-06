import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEstrenos = [{
        nombre: 'Rocky',
        fechaLanzamiento: new Date(26 / 12 / 20),
        precio: 320
      },
      {
        nombre: 'Rambo',
        fechaLanzamiento: new Date(),
        precio: 500
      }]
    }, 1000);

    setTimeout(() => {
      this.proximosLanzamientos = [{
        nombre: 'Walking dead the movie',
        fechaLanzamiento: new Date(26 / 12 / 20),
        precio: 320
      },
      {
        nombre: 'Los 4 fantasticos',
        fechaLanzamiento: new Date(),
        precio: 500
      },
      {
        nombre: 'Thor',
        fechaLanzamiento: new Date(),
        precio: 500
      }]
    }, 1000);
  }

  peliculasEstrenos:any;
  proximosLanzamientos: any;


/*
  title = 'front-end';

  pelicula = {
    nombre: 'spiderman',
    fechaDeLanzamiento: new Date()
  };

  duplicarValor(valor: number): number {
    return valor * 2;
  }
  */
}
