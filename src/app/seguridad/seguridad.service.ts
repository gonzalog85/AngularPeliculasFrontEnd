import { environment } from './../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { credencialesUsuario, respuestaAutenticacion, usuarioDTO } from './seguridad';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private httpClient: HttpClient) { }

  apiURL = environment.apiURL + 'cuentas';

  private readonly llaveToken = 'token';
  private readonly llaveExpiracion = 'token-expiracion';
  private readonly campoRol = 'role';

  obtenerUsuarios(pagina: number, recordsPorPagina: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', recordsPorPagina.toString());
    return this.httpClient.get<usuarioDTO[]>(`${this.apiURL}/listadousuarios`,
      { observe: 'response', params })
  }

  hacerAdmin(usuarioId: string) {
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.httpClient.post(`${this.apiURL}/hacerAdmin`, JSON.stringify(usuarioId), { headers });
  }

  removerAdmin(usuarioId: string) {
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.httpClient.post(`${this.apiURL}/removerAdmin`, JSON.stringify(usuarioId), { headers });
  }

  estaLogueado(): boolean {

    const token = localStorage.getItem(this.llaveToken);

    if (!token) {
      return false;
    }

    const expiracion = localStorage.getItem(this.llaveExpiracion);
    const fechaExpiracion = new Date(expiracion);
    if (fechaExpiracion <= new Date()) {
      this.logout();
    }
    return true;
  }

  logout() {
    localStorage.removeItem(this.llaveToken);
    localStorage.removeItem(this.llaveExpiracion);
  }

  obtenerRol(): string {
    return this.obtenerCampoJWT(this.campoRol);
  }

  obtenerCampoJWT(campo: string): string {
    const token = localStorage.getItem(this.llaveToken);
    if (!token) { return ''; }

    var dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[campo];
  }

  registrar(credenciales: credencialesUsuario): Observable<respuestaAutenticacion> {
    return this.httpClient.post<respuestaAutenticacion>(this.apiURL + '/crear', credenciales);
  }

  login(credenciales: credencialesUsuario): Observable<respuestaAutenticacion> {
    return this.httpClient.post<respuestaAutenticacion>(this.apiURL + '/login', credenciales);
  }

  guardarToken(respuestaAutenticacion: respuestaAutenticacion) {
    localStorage.setItem(this.llaveToken, respuestaAutenticacion.token);
    localStorage.setItem(this.llaveExpiracion, respuestaAutenticacion.expiracion.toString());
  }

  obtenerToken() {
    return localStorage.getItem(this.llaveToken);
  }
}
