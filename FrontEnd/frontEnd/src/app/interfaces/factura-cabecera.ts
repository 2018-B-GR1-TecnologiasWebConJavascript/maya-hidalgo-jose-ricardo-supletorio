import {Evento} from "./evento";
import {Usuario} from "./usuario";

export interface FacturaCabecera {
  id: number | string;
  nombre: string ;
  cedulaRuc:string ;
  telefono:string ;
  direccion: string;
  correoElectronico: string;
  fecha: string;
  total: number;
  tipoPago: string;
  estado:string;
  idEvento: number | string | Evento;
  idUsuario: number | string | Usuario;
}
