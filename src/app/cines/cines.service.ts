import { cineCreacionDTO } from './cine';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'cines';

  public crear(cine: cineCreacionDTO){
    return this.http.post(this.apiURL, cine);
  }
}
