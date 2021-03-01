import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { Router } from '@angular/router';
import { SeguridadService } from './../seguridad.service';
import { Component, OnInit } from '@angular/core';
import { credencialesUsuario } from '../seguridad';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private seguridadService: SeguridadService,
    private router: Router) { }

    errores: string[] = [];

  ngOnInit(): void {
  }

  login(credenciales: credencialesUsuario){
    this.seguridadService.login(credenciales)
    .subscribe(respuesta => {
      this.seguridadService.guardarToken(respuesta);
      this.router.navigate(['/']);
    }, errores => this.errores = parsearErroresAPI(errores));
  }
}
