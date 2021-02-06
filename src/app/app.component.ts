import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.series = [{
        nombre: 'Walking Dead',
        fechaLanzamiento: new Date(26 / 12 / 20),
        precio: 320
      },
      {
        nombre: 'Braking Bad',
        fechaLanzamiento: new Date(),
        precio: 500
      }]
    }, 1000);
  }

  series: any;

  title = 'front-end';

  pelicula = {
    nombre: 'spiderman',
    fechaDeLanzamiento: new Date()
  };

  duplicarValor(valor: number): number {
    return valor * 2;
  }
}
