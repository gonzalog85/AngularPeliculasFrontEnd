import { Coordenada, CoordenadaConMensaje } from './coordenada';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, Marker, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  @Input()
  coordenadasIniciales: CoordenadaConMensaje[] = [];

  @Input()
  soloLectura: boolean = false;

  @Output()
  coordenadaSeleccionada: EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map(valor => {
      let marcador = marker([valor.latitud, valor.longitud])
      if (valor.mensaje) {
        marcador.bindPopup(valor.mensaje, { autoClose: false, autoPan: false });
      }
      return marcador;
    });
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, minZoom: 1, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(-26.830484531710084, -65.20384609722933)
  };


  capas: Marker<any>[] = [];

  manejarClick(event: LeafletMouseEvent) {
    if (!this.soloLectura) {
      const latitud = event.latlng.lat;
      const longitud = event.latlng.lng;
      //console.log({latitud, longitud});
      this.capas = [];

      this.capas.push(marker([latitud, longitud]));
      this.coordenadaSeleccionada.emit({ latitud: latitud, longitud: longitud });
    }
  }

}
