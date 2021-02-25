import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PeliculaPostGet, PeliculaPutGet, PeliculaCreacionDTO, PeliculaDTO, LandingPageDTO } from './pelicula';
import { formatearFecha } from '../utilidades/utilidades';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'peliculas';

  public obtenerPorId(id:number): Observable<PeliculaDTO>{
    return this.http.get<PeliculaDTO>(`${this.apiURL}/${id}`);
  }

  public postGet(): Observable<PeliculaPostGet> {
    return this.http.get<PeliculaPostGet>(`${this.apiURL}/postget`);
  }

  public putGet(id:number): Observable<PeliculaPutGet> {
    return this.http.get<PeliculaPutGet>(`${this.apiURL}/putget/${id}`);
  }

  public obtenerLandingPage(): Observable<LandingPageDTO> {
    return this.http.get<LandingPageDTO>(this.apiURL);
  }

  public crear(pelicula: PeliculaCreacionDTO) {
    const formData = this.construirFormData(pelicula);
    return this.http.post(this.apiURL, formData);
  }

  public editar(id:number, pelicula: PeliculaCreacionDTO) {
    const formData = this.construirFormData(pelicula);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  private construirFormData(pelicula: PeliculaCreacionDTO): FormData {
    const formData = new FormData();

    formData.append('titulo', pelicula.titulo);
    formData.append('resumen', pelicula.resumen);
    formData.append('trailer', pelicula.trailer);
    formData.append('enCines', String(pelicula.enCines));

    if(pelicula.fechaLanzamiento){
      formData.append('fechaLanzamiento', formatearFecha(pelicula.fechaLanzamiento));
    }

    if(pelicula.poster){
      formData.append('poster', pelicula.poster);
    }

    formData.append('generosIds', JSON.stringify(pelicula.generosIds));
    formData.append('cinesIds', JSON.stringify(pelicula.cinesIds));
    formData.append('actores', JSON.stringify(pelicula.actores));

    return formData;
  }
}
