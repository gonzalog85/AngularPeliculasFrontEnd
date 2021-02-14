export interface PeliculaDTO {
  titulo:string;
  resumen:string;
  enCines:boolean;
  trailer:string;
  fechaLanzamiento:Date;
  poster:string;
}

export interface PeliculaCreacionDTO {
  titulo:string;
  resumen:string;
  enCines:boolean;
  fechaLanzamiento:Date;
  trailer:string;
  poster:File;
}
