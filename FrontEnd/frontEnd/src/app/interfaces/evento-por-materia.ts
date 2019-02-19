import {Evento} from "./evento";
import {Materia} from "./materia";

export interface EventoPorMateria {
  id: number | string;
  precioBase:number;
  idEvento: number | string| Evento;
  idMateria: number | string | Materia;
}
