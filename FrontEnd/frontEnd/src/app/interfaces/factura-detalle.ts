import {FacturaCabecera} from "./factura-cabecera";
import {EventoPorMateria} from "./evento-por-materia";

export interface FacturaDetalle {
  id: number | string;
  catidad: number;
  precio: number;
  total: number;
  idFacturaCabecera: number | string | FacturaCabecera;
  idEventoPorMateria: number | string | EventoPorMateria;
}
