//Lectura de actores
export interface actorDTO{
  nombre: string;
  fechaNacimiento: Date;
  foto: string;
}
//Creacion de actores
export interface actorCreacionDTO {
  nombre: string;
  fechaNacimiento: Date;
  foto: File;
}
