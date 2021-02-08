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
        precio: 320,
        poster:"https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        nombre: 'Rambo',
        fechaLanzamiento: new Date(),
        precio: 500,
        poster:"https://m.media-amazon.com/images/M/MV5BZWFkY2I1ZDAtNmZhNS00NjVlLWJiMGQtMGQ1ZmM0ZDA5ODg5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
      }]
    }, 1000);

    /*setTimeout(() => {
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
    }, 1000);*/
  }

  peliculasEstrenos:any;
  proximosLanzamientos:any =[];

  manejarRated(calificado:number):void{
    alert(calificado);
  }

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
