import {Usuario} from "./usuario";

export interface Estudiante {
  id: number | string;
  nombres:string;
  apellidos:string;
  fechaNacimiento:string;
  semestreActual: number;
  graduado:boolean;
  idUsuario: number | string | Usuario;
}
