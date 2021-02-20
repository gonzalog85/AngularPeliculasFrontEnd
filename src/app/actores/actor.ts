//Lectura de actores
export interface actorDTO{
  id: number;
  nombre: string;
  fechaNacimiento: Date;
  biografia: string;
  foto: string;
}
//Creacion de actores
export interface actorCreacionDTO {
  nombre: string;
  fechaNacimiento: Date;
  biografia: string;
  foto: File;
}
